import React from "react";
import "../styles/TrustSection.css";
import {
  ShieldCheck,
  Globe,
  BrainCircuit,
  BarChart3,
} from "lucide-react";

const trustItems = [
  {
    icon: <BrainCircuit size={34} />,
    title: "AI-Powered Analysis",
    description:
      "Advanced AI models analyze news articles, language patterns, and credibility signals in seconds.",
  },
  {
    icon: <Globe size={34} />,
    title: "Multi-Source Verification",
    description:
      "Cross-check information from multiple trusted sources before generating the final credibility report.",
  },
  {
    icon: <ShieldCheck size={34} />,
    title: "Privacy First",
    description:
      "Your submitted articles are processed securely with user privacy at the core of our platform.",
  },
  {
    icon: <BarChart3 size={34} />,
    title: "Detailed Credibility Score",
    description:
      "Receive an easy-to-understand credibility score with explanations instead of a simple True or False result.",
  },
];

const TrustSection = () => {
  return (
    <section className="trust">
      <div className="trust_heading">
        <span>WHY TRUST TRUTHLENS AI</span>

        <h2>
          Built for Accuracy,
          <br />
          Trusted by Design
        </h2>

        <p>
          TruthLens AI combines artificial intelligence with credibility
          analysis to help users identify misinformation quickly and confidently.
        </p>
      </div>

      <div className="trust_grid">
        {trustItems.map((item, index) => (
          <div className="trust_card" key={index}>
            <div className="trust_icon">{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustSection;