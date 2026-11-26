import React, { useState } from "react";
import "../styles/Analyze.css";
import API from "../services/api";

const Analyze = () => {
  const [url, setUrl] = useState("");
  const [article, setArticle] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleAnalyze = async (e) => {
    e.preventDefault();

    if (!url.trim() && !article.trim()) {
      alert("Please enter a News URL or paste a News Article.");
      return;
    }

    if (!localStorage.getItem("token")) {
      alert("Please Login First");
      window.location.href = "/login";
      return;
    }

    try {
      setLoading(true);
      setResult(null);

      const response = await API.post("/analyze", {
        url: url.trim(),
        articleText: article.trim(),
      });

      if (response.data.success && response.data.analysis) {
        setResult(response.data.analysis);
      } else {
        alert(response.data.message || "Analysis failed.");
      }
    } catch (error) {
      if (error.response?.status === 401) {
        localStorage.removeItem("token");
        alert("Session expired. Please login again.");
        window.location.href = "/login";
        return;
      }

      alert(
        error.response?.data?.message ||
        "Something went wrong while analyzing the news."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="analyze">
      <div className="analyze_container">
        <div className="analyze_header">
          <span className="analyze_badge">🤖 AI Powered Analysis</span>
          <h1>Analyze News</h1>
          <p>
            Paste a news article or enter a URL to verify its credibility,
            detect bias, and generate an AI-powered report.
          </p>
        </div>

        <form className="analyze_card" onSubmit={handleAnalyze}>
          <div className="input_group">
            <label>News URL</label>
            <input
              type="url"
              placeholder="https://example.com/news"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>

          <div className="divider"><span>OR</span></div>

          <div className="input_group">
            <label>Paste News Article</label>
            <textarea
              rows="10"
              placeholder="Paste your news article here..."
              value={article}
              onChange={(e) => setArticle(e.target.value)}
            />
          </div>

          <button type="submit" className="analyze_btn" disabled={loading}>
            {loading ? (
              <>
                <span className="loader"></span>
                Analyzing...
              </>
            ) : (
              <>✨ Analyze News</>
            )}
          </button>

          {result && (
            <div className="analysis_result">
              <div className="result_header">
                <span className="result_badge">✨ AI ANALYSIS COMPLETE</span>
                <h2>News Analysis Report</h2>
                <p>Here is what TruthLens AI found about this article.</p>
              </div>

              <div className={`final_verdict ${result.verdictType?.toLowerCase() || "uncertain"}`}>
                <div className="final_verdict_icon">
                  {result.verdictType === "GENUINE" ? "🟢" : result.verdictType === "FAKE" ? "🔴" : "🟡"}
                </div>
                <div className="final_verdict_content">
                  <span>FINAL VERDICT</span>
                  <h3>{result.finalVerdict || "Needs Verification"}</h3>
                  <p>
                    This result is based on AI-estimated misinformation risk
                    and credibility scores, not independent fact-checking.
                  </p>
                </div>
              </div>

              <div className="score_grid">
                <div className="score_card fake">
                  <div className="score_icon">⚠️</div>
                  <span>Fake News Score</span>
                  <strong>{result.fakeScore}%</strong>
                  <div className="score_bar">
                    <div style={{ width: `${result.fakeScore}%` }}></div>
                  </div>
                </div>

                <div className="score_card credibility">
                  <div className="score_icon">🛡️</div>
                  <span>Credibility Score</span>
                  <strong>{result.credibilityScore}%</strong>
                  <div className="score_bar">
                    <div style={{ width: `${result.credibilityScore}%` }}></div>
                  </div>
                </div>

                <div className="info_card">
                  <div className="score_icon">🎯</div>
                  <span>Bias</span>
                  <strong>{result.bias}</strong>
                </div>

                <div className="info_card">
                  <div className="score_icon">💭</div>
                  <span>Sentiment</span>
                  <strong>{result.sentiment}</strong>
                </div>
              </div>

              <div className="summary_card">
                <div className="summary_title">
                  <span>📝</span>
                  <h3>AI Summary</h3>
                </div>
                <p>{result.summary}</p>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Analyze;
