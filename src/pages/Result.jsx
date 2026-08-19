import React from "react";
import "../styles/Result.css";

const result = {
  summary:
    "NASA announced a new mission to Mars. Multiple trusted sources confirm the announcement.",

  credibilityScore: 92,

  fakeScore: 8,

  bias: "Neutral",

  sentiment: "Positive",
};

const Result = () => {
  return (
    <section className="result">

      <div className="result_container">

        <div className="result_header">

          <span>🤖 AI Analysis Report</span>

          <h1>News Analysis Result</h1>

          <p>
            AI has analyzed your news article and generated the
            following credibility report.
          </p>

        </div>

        <div className="result_grid">

          <div className="result_card">

            <h3>📝 AI Summary</h3>

            <p>{result.summary}</p>

          </div>

          <div className="result_card">

            <h3>🎯 Credibility Score</h3>

            <h2>{result.credibilityScore}%</h2>

          </div>

          <div className="result_card">

            <h3>⚠ Fake News Score</h3>

            <h2>{result.fakeScore}%</h2>

          </div>

          <div className="result_card">

            <h3>⚖ Bias</h3>

            <h2>{result.bias}</h2>

          </div>

          <div className="result_card">

            <h3>😊 Sentiment</h3>

            <h2>{result.sentiment}</h2>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Result;