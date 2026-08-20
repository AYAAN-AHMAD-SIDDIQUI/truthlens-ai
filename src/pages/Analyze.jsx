import React, { useState } from "react";
import "../styles/Analyze.css";
import axios from "axios";

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

    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please Login First");
      return;
    }

    try {
      setLoading(true);
      setResult(null);

      console.log("ANALYZE BUTTON CLICKED");
      console.log("TOKEN:", token);
      console.log("Sending request to backend...");
const response = await axios.post(
  `${import.meta.env.VITE_API_URL}/api/analyze`,
  {
    url: url.trim(),
    articleText: article.trim(),
  },
  {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("BACKEND RESPONSE:", response.data);

      if (response.data.success) {
        setResult(response.data.analysis);
      } else {
        alert(response.data.message || "Analysis failed.");
      }
    } catch (error) {
      console.error("ANALYZE ERROR:", error);

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

        {/* HEADER */}
        <div className="analyze_header">
          <span className="analyze_badge">
            🤖 AI Powered Analysis
          </span>

          <h1>Analyze News</h1>

          <p>
            Paste a news article or enter a URL to verify its credibility,
            detect bias, and generate an AI-powered report.
          </p>
        </div>

        {/* ANALYZE CARD */}
        <form
          className="analyze_card"
          onSubmit={handleAnalyze}
        >

          {/* URL */}
          <div className="input_group">
            <label>News URL</label>

            <input
              type="text"
              placeholder="https://example.com/news"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>

          {/* DIVIDER */}
          <div className="divider">
            <span>OR</span>
          </div>

          {/* ARTICLE */}
          <div className="input_group">
            <label>Paste News Article</label>

            <textarea
              rows="10"
              placeholder="Paste your news article here..."
              value={article}
              onChange={(e) => setArticle(e.target.value)}
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="analyze_btn"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="loader"></span>
                Analyzing...
              </>
            ) : (
              <>
                ✨ Analyze News
              </>
            )}
          </button>

          {/* RESULT */}
          {result && (
            <div className="analysis_result">

              {/* RESULT HEADER */}
              <div className="result_header">
                <span className="result_badge">
                  ✨ AI ANALYSIS COMPLETE
                </span>

                <h2>News Analysis Report</h2>

                <p>
                  Here is what TruthLens AI found about this article.
                </p>
              </div>

              {/* SCORE GRID */}
              <div className="score_grid">

                {/* FAKE SCORE */}
                <div className="score_card fake">
                  <div className="score_icon">
                    ⚠️
                  </div>

                  <span>Fake News Score</span>

                  <strong>
                    {result.fakeScore}%
                  </strong>

                  <div className="score_bar">
                    <div
                      style={{
                        width: `${result.fakeScore}%`,
                      }}
                    ></div>
                  </div>
                </div>

                {/* CREDIBILITY */}
                <div className="score_card credibility">
                  <div className="score_icon">
                    🛡️
                  </div>

                  <span>Credibility Score</span>

                  <strong>
                    {result.credibilityScore}%
                  </strong>

                  <div className="score_bar">
                    <div
                      style={{
                        width: `${result.credibilityScore}%`,
                      }}
                    ></div>
                  </div>
                </div>

                {/* BIAS */}
                <div className="info_card">
                  <div className="score_icon">
                    🎯
                  </div>

                  <span>Bias</span>

                  <strong>
                    {result.bias}
                  </strong>
                </div>

                {/* SENTIMENT */}
                <div className="info_card">
                  <div className="score_icon">
                    💭
                  </div>

                  <span>Sentiment</span>

                  <strong>
                    {result.sentiment}
                  </strong>
                </div>

              </div>

              {/* SUMMARY */}
              <div className="summary_card">
                <div className="summary_title">
                  <span>📝</span>

                  <h3>AI Summary</h3>
                </div>

                <p>
                  {result.summary}
                </p>
              </div>

            </div>
          )}

        </form>
      </div>
    </section>
  );
};

export default Analyze;