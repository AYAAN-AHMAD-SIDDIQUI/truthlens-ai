import "../styles/HowItWorks.css";
import { Link2, BrainCircuit, BadgeCheck } from "lucide-react";

function HowItWorks() {
  return (
<section id="how-it-works" className="how">
      <div className="how_heading">
        <h2>How It Works</h2>
        <p>
          Verify any news article in just three simple steps.
        </p>
      </div>

      <div className="steps">

        <div className="step">
          <div className="step_icon">
            <Link2 size={40} />
          </div>

          <h3>Paste URL</h3>

          <p>
            Paste the news article link or enter the article text.
          </p>
        </div>

        <div className="step">
          <div className="step_icon">
            <BrainCircuit size={40} />
          </div>

          <h3>AI Analysis</h3>

          <p>
            Our AI checks credibility, bias and misinformation.
          </p>
        </div>

        <div className="step">
          <div className="step_icon">
            <BadgeCheck size={40} />
          </div>

          <h3>View Result</h3>

          <p>
            Get credibility score and detailed explanation instantly.
          </p>
        </div>

      </div>

    </section>
  );
}

export default HowItWorks;