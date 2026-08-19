import "../styles/Hero.css";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">

      <div className="bg_circle circle1"></div>
      <div className="bg_circle circle2"></div>
      <div className="bg_circle circle3"></div>

      <div className="hero_left">

        <h1>
          Detect Fake News
          <br />
          Before It Detects You.
        </h1>

        <span className="hero_badge">
          🚀 AI Powered News Verification
        </span>

        <p>
          AI-powered news verification that analyzes credibility,
          bias and factual accuracy in seconds.
        </p>

        <div className="hero_buttons">

          <button
            className="primary_btn"
            onClick={() => navigate("/analyze")}
          >
            Analyze News
          </button>

          <button
  className="secondary_btn"
  onClick={() =>
    document
      .getElementById("how-it-works")
      ?.scrollIntoView({ behavior: "smooth" })
  }
>
  Learn More
</button>
        </div>

      </div>

      <div className="hero_right">
<div className="scanner_card">

  <div className="glow_orb orb1"></div>
  <div className="glow_orb orb2"></div>

  <div className="article_header">
    <span>📰 Breaking News Analysis</span>
  </div>

  <div className="live_status">
    <span className="dot"></span>
    Live AI Analysis
  </div>

  <div className="article_content">
    <p>Global climate summit reaches historic agreement...</p>
    <p>Leaders from over 100 countries signed the pact...</p>
    <p>Experts are reviewing long-term environmental impact...</p>

    <div className="scan_line"></div>
  </div>

  <div className="analysis_stats">
    <div>
      <h4>94%</h4>
      <span>Credibility</span>
    </div>

    <div>
      <h4>12</h4>
      <span>Sources</span>
    </div>

    <div>
      <h4>Low</h4>
      <span>Bias</span>
    </div>
  </div>

  <div className="floating_badge badge1">
    ✓ Verified
  </div>

  <div className="floating_badge badge2">
    94% Score
  </div>

  <div className="floating_badge badge3">
    AI Checked
  </div>

</div>      </div>

    </section>
  );
}

export default Hero;