import "../styles/LiveDemo.css";
import { Link as LinkIcon, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

function LiveDemo() {
  const navigate = useNavigate();

  return (
    <section className="demo">
      <div className="demo_heading">
        <h2>Try TruthLens AI</h2>

        <p>
          Paste any news article URL or text and experience
          AI-powered fact checking.
        </p>
      </div>

      <div className="demo_box">
        <div className="input_box">
          <LinkIcon size={20} />

          <input
            type="text"
            placeholder="Paste News URL..."
          />
        </div>

        <div className="or">
          OR
        </div>

        <div className="textarea_box">
          <FileText size={20} />

          <textarea
            placeholder="Paste News Article..."
          ></textarea>
        </div>

        <button
          className="analyze_btn"
          onClick={() => navigate("/analyze")}
        >
          Analyze News
        </button>
      </div>
    </section>
  );
}

export default LiveDemo;