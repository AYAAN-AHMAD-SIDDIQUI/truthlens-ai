import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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

  // ================= USER =================

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("token");

     const response = await axios.get(
  `${import.meta.env.VITE_API_URL}/api/auth/me`,
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);

      console.log("USER DATA:", response.data);

      if (response.data.success) {
        setUser(response.data.user);
      }
    } catch (error) {
      console.error(
        "USER FETCH ERROR:",
        error.response?.data || error.message
      );
    }
  };

  // ================= DASHBOARD =================

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      const token = localStorage.getItem("token");

     const response = await axios.get(
  `${import.meta.env.VITE_API_URL}/api/auth/me`,
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);

      console.log("DASHBOARD DATA:", response.data);

      if (response.data.success) {
        setStats(response.data.stats);
        setRecentAnalyses(
          response.data.recentAnalyses || []
        );
      }
    } catch (error) {
      console.error(
        "DASHBOARD ERROR:",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="dashboard">

      <div className="dashboard_container">

        {/* ================= HEADER ================= */}

        <div className="dashboard_header">

          <div>

            <span className="dashboard_badge">
              🚀 TruthLens AI Dashboard
            </span>

            <h1>
              Welcome back
              {user?.name ? `, ${user.name}` : ""} 👋
            </h1>

            <p>
              {user?.email ||
                "Monitor your news analysis and discover insights about the information you read."}
            </p>

          </div>

          <button
            className="dashboard_analyze_btn"
            onClick={() => navigate("/analyze")}
          >
            ✨ Analyze News
          </button>

        </div>


        {/* ================= STATS ================= */}

        <div className="dashboard_stats">

          <div className="dashboard_stat_card">

            <div className="stat_icon">
              📰
            </div>

            <div>
              <span>Total Analyses</span>

              <strong>
                {loading
                  ? "..."
                  : stats.totalAnalyses}
              </strong>
            </div>

          </div>


          <div className="dashboard_stat_card">

            <div className="stat_icon">
              🛡️
            </div>

            <div>
              <span>Credibility Score</span>

              <strong>
                {loading
                  ? "..."
                  : `${stats.averageCredibility}%`}
              </strong>
            </div>

          </div>


          <div className="dashboard_stat_card">

            <div className="stat_icon">
              ⚠️
            </div>

            <div>
              <span>Fake News Detected</span>

              <strong>
                {loading
                  ? "..."
                  : stats.fakeNewsDetected}
              </strong>
            </div>

          </div>


          <div className="dashboard_stat_card">

            <div className="stat_icon">
              📊
            </div>

            <div>
              <span>Articles Checked</span>

              <strong>
                {loading
                  ? "..."
                  : stats.articlesChecked}
              </strong>
            </div>

          </div>

        </div>


        {/* ================= QUICK ANALYZE ================= */}

        <div className="quick_analyze">

          <div className="quick_content">

            <span className="quick_badge">
              🤖 AI POWERED
            </span>

            <h2>
              Have a suspicious news article?
            </h2>

            <p>
              Let TruthLens AI analyze the article,
              detect misleading information, identify
              bias and generate a credibility report.
            </p>

            <button
              onClick={() => navigate("/analyze")}
            >
              Start Analysis →
            </button>

          </div>


          <div className="quick_visual">

            <div className="ai_orb">
              ✨
            </div>

          </div>

        </div>


        {/* ================= RECENT ACTIVITY ================= */}

        <div className="recent_section">

          <div className="section_title">

            <div>
              <span>📈</span>
              <h2>Recent Activity</h2>
            </div>

            <button
              onClick={() => navigate("/history")}
            >
              View History →
            </button>

          </div>


          {recentAnalyses.length === 0 ? (

            <div className="empty_activity">

              <div className="empty_icon">
                📰
              </div>

              <h3>
                No analyses yet
              </h3>

              <p>
                Start analyzing news articles and your
                analysis history will appear here.
              </p>

              <button
                onClick={() => navigate("/analyze")}
              >
                Analyze Your First Article
              </button>

            </div>

          ) : (

            <div className="recent_list">

              {recentAnalyses.map((item) => (

                <div
                  className="recent_card"
                  key={item.id}
                >

                  {/* LEFT */}

                  <div className="recent_card_left">

                    <div className="recent_news_icon">
                      📰
                    </div>

                    <div className="recent_news_info">

                      <h3>
                        {item.title ||
                          "News Analysis"}
                      </h3>

                      <p>
                        {item.summary ||
                          "Analysis completed successfully."}
                      </p>

                      <span className="recent_date">
                        {item.createdAt
                          ? new Date(
                              item.createdAt
                            ).toLocaleDateString()
                          : "Recently analyzed"}
                      </span>

                    </div>

                  </div>


                  {/* RIGHT */}

                  <div className="recent_card_right">

                    <div className="score_box credibility">

                      <span>
                        Credibility
                      </span>

                      <strong>
                        {item.credibilityScore}%
                      </strong>

                    </div>


                    <div className="score_box fake">

                      <span>
                        Fake Score
                      </span>

                      <strong>
                        {item.fakeScore}%
                      </strong>

                    </div>


                    <button
                      className="view_analysis_btn"
                      onClick={() =>
                        navigate("/history", {
                          state: {
                            selectedAnalysisId:
                              item.id,
                          },
                        })
                      }
                    >
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