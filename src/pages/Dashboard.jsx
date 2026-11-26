import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState({
    totalAnalyses: 0,
    averageCredibility: 0,
    fakeNewsDetected: 0,
    articlesChecked: 0,
  });
  const [recentAnalyses, setRecentAnalyses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dashboardError, setDashboardError] = useState("");

  useEffect(() => {
    const fetchDashboard = async () => {
      if (!localStorage.getItem("token")) {
        navigate("/login", { replace: true });
        return;
      }

      try {
        const [userResponse, dashboardResponse] = await Promise.all([
          API.get("/auth/me"),
          API.get("/dashboard"),
        ]);

        if (userResponse.data.success) {
          setUser(userResponse.data.user);
        }

        if (!dashboardResponse.data.success) {
          throw new Error(dashboardResponse.data.message || "Dashboard data could not be loaded.");
        }

        setStats(dashboardResponse.data.stats || {
          totalAnalyses: 0,
          averageCredibility: 0,
          fakeNewsDetected: 0,
          articlesChecked: 0,
        });
        setRecentAnalyses(dashboardResponse.data.recentAnalyses || []);
      } catch (error) {
        if (error.response?.status === 401) {
          localStorage.removeItem("token");
          navigate("/login", { replace: true });
          return;
        }
        console.error("DASHBOARD ERROR:", error.response?.data || error.message);
        setDashboardError(
          error.response?.data?.message ||
          error.message ||
          "Unable to load dashboard data."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, [navigate]);

  return (
    <section className="dashboard">
      <div className="dashboard_container">
        <div className="dashboard_header">
          <div>
            <span className="dashboard_badge">🚀 TruthLens AI Dashboard</span>
            <h1>Welcome back{user?.name ? `, ${user.name}` : ""} 👋</h1>
            <p>
              {user?.email ||
                "Monitor your news analysis and discover insights about the information you read."}
            </p>
          </div>
          <button className="dashboard_analyze_btn" onClick={() => navigate("/analyze")}>
            ✨ Analyze News
          </button>
        </div>

        {dashboardError && (
          <div role="alert" className="dashboard_error">
            {dashboardError}
          </div>
        )}

        <div className="dashboard_stats">
          <div className="dashboard_stat_card">
            <div className="stat_icon">📰</div>
            <div><span>Total Analyses</span><strong>{loading ? "..." : dashboardError ? "—" : stats.totalAnalyses}</strong></div>
          </div>
          <div className="dashboard_stat_card">
            <div className="stat_icon">🛡️</div>
            <div><span>Credibility Score</span><strong>{loading ? "..." : dashboardError ? "—" : `${stats.averageCredibility}%`}</strong></div>
          </div>
          <div className="dashboard_stat_card">
            <div className="stat_icon">⚠️</div>
            <div><span>Fake News Detected</span><strong>{loading ? "..." : dashboardError ? "—" : stats.fakeNewsDetected}</strong></div>
          </div>
          <div className="dashboard_stat_card">
            <div className="stat_icon">📊</div>
            <div><span>Articles Checked</span><strong>{loading ? "..." : dashboardError ? "—" : stats.articlesChecked}</strong></div>
          </div>
        </div>

        <div className="quick_analyze">
          <div className="quick_content">
            <span className="quick_badge">🤖 AI POWERED</span>
            <h2>Have a suspicious news article?</h2>
            <p>
              Let TruthLens AI analyze the article, detect misleading
              information, identify bias and generate a credibility report.
            </p>
            <button onClick={() => navigate("/analyze")}>Start Analysis →</button>
          </div>
          <div className="quick_visual"><div className="ai_orb">✨</div></div>
        </div>

        <div className="recent_section">
          <div className="section_title">
            <div><span>📈</span><h2>Recent Activity</h2></div>
            <button onClick={() => navigate("/history")}>View History →</button>
          </div>

          {loading ? (
            <div className="empty_activity"><h3>Loading recent activity...</h3></div>
          ) : dashboardError ? (
            <div className="empty_activity"><h3>Recent activity is unavailable</h3><p>Please refresh the page or try again later.</p></div>
          ) : recentAnalyses.length === 0 ? (
            <div className="empty_activity">
              <div className="empty_icon">📰</div>
              <h3>No analyses yet</h3>
              <p>Start analyzing news articles and your analysis history will appear here.</p>
              <button onClick={() => navigate("/analyze")}>Analyze Your First Article</button>
            </div>
          ) : (
            <div className="recent_list">
              {recentAnalyses.map((item) => (
                <div className="recent_card" key={item.id}>
                  <div className="recent_card_left">
                    <div className="recent_news_icon">📰</div>
                    <div className="recent_news_info">
                      <h3>{item.title || "News Analysis"}</h3>
                      <p>{item.summary || "Analysis completed successfully."}</p>
                      <span className="recent_date">
                        {item.createdAt ? new Date(item.createdAt).toLocaleDateString() : "Recently analyzed"}
                      </span>
                    </div>
                  </div>
                  <div className="recent_card_right">
                    <div className="score_box credibility"><span>Credibility</span><strong>{item.credibilityScore}%</strong></div>
                    <div className="score_box fake"><span>Fake Score</span><strong>{item.fakeScore}%</strong></div>
                    <button className="view_analysis_btn" onClick={() => navigate("/history", { state: { selectedAnalysisId: item.id } })}>
                      View →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
