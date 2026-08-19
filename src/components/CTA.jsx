import React from "react";
import "../styles/CTA.css";
import { ArrowRight, PlayCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="cta">
      <div className="cta_container">

        <div className="cta_badge">
          🚀 AI Powered Fact Checking
        </div>

        <h2>
          Stop Guessing.
          <br />
          Start Verifying with <span>TruthLens AI</span>
        </h2>

        <p>
          Analyze news articles, detect misinformation, and receive an
          AI-generated credibility report in just a few seconds.
        </p>

        <div className="cta_buttons">
          <button className="primary_btn">
            Analyze News
            <ArrowRight size={20} />
          </button>

          <button className="secondary_btn">
            <PlayCircle size={20} />
            Watch Demo
          </button>
        </div>

      </div>
    </section>
  );
};

export default CTA;