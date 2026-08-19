import "../styles/Features.css";
import { ShieldCheck, Zap, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
function Features() {
  return (
<section id="features" className="features">
      <div className="features_heading">
        <h2>Why Choose TruthLens AI?</h2>
        <p>
          AI-powered technology that helps detect fake news with speed,
          transparency and accuracy.
        </p>
      </div>

      <div className="features_cards">

        <div className="feature_card">
          <ShieldCheck size={42} />
          <h3>AI Fact Checking</h3>
          <p>
            Verify news articles instantly using advanced AI models.
          </p>
        </div>

        <div className="feature_card">
          <Zap size={42} />
          <h3>Instant Analysis</h3>
          <p>
            Receive credibility scores within seconds.
          </p>
        </div>

        <div className="feature_card">
          <BarChart3 size={42} />
          <h3>Bias Detection</h3>
          <p>
            Identify political and media bias automatically.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Features;