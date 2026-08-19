import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import API from "../services/api";
import "../styles/History.css";

function History() {
  const location = useLocation();

  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const res = await API.get("/history", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setHistory(res.data.history);
    } catch (err) {
      console.log(err.response?.data || err.message);
    }
  };

  useEffect(() => {
    if (
      history.length > 0 &&
      location.state?.selectedAnalysisId
    ) {
      const selectedId = location.state.selectedAnalysisId;

      const element = document.getElementById(
        `history-${selectedId}`
      );

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

        element.classList.add("selected_history");

        setTimeout(() => {
          element.classList.remove("selected_history");
        }, 2000);
      }
    }
  }, [history, location.state]);

  const deleteHistory = async (id) => {
    try {
      await API.delete(`/history/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setHistory((prev) =>
        prev.filter((item) => item.id !== id)
      );
    } catch (err) {
      console.log(err.response?.data || err.message);
      alert("Delete Failed");
    }
  };

  return (
    <section className="history">

      <div className="history_container">

        {/* HEADER */}

        <div className="history_header">

          <span className="history_badge">
            📚 TruthLens AI
          </span>

          <h1>Analysis History</h1>

          <p>
            Review your previously analyzed news and track
            credibility insights in one place.
          </p>

        </div>

        {/* EMPTY */}

        {history.length === 0 ? (

          <div className="empty_history">

            <div className="empty_icon">
              🔍
            </div>

            <h2>
              No Analysis Yet
            </h2>

            <p>
              Analyze your first news article and your results
              will appear here.
            </p>

          </div>

        ) : (

          /* HISTORY GRID */

          <div className="history_grid">

            {history.map((item) => (

              <div
                className="history_card"
                key={item.id}
                id={`history-${item.id}`}
              >

                {/* TOP */}

                <div className="history_card_top">

                  <span className="history_number">
                    #{item.id}
                  </span>

                  <span className="history_date">
                    {new Date(
                      item.createdAt
                    ).toLocaleDateString()}
                  </span>

                </div>

                {/* TITLE */}

                <h2>
                  {item.title}
                </h2>

                {/* SUMMARY */}

                <p className="history_summary">
                  {item.summary}
                </p>

                {/* METRICS */}

                <div className="history_metrics">

                  <div className="metric fake">

                    <span>
                      ⚠️
                    </span>

                    <small>
                      Fake Score
                    </small>

                    <strong>
                      {item.fakeScore}%
                    </strong>

                  </div>

                  <div className="metric credibility">

                    <span>
                      🛡️
                    </span>

                    <small>
                      Credibility
                    </small>

                    <strong>
                      {item.credibilityScore}%
                    </strong>

                  </div>

                  <div className="metric">

                    <span>
                      🎯
                    </span>

                    <small>
                      Bias
                    </small>

                    <strong>
                      {item.bias}
                    </strong>

                  </div>

                  <div className="metric">

                    <span>
                      💭
                    </span>

                    <small>
                      Sentiment
                    </small>

                    <strong>
                      {item.sentiment}
                    </strong>

                  </div>

                </div>

                {/* DELETE */}

                <button
                  className="delete_history"
                  onClick={() =>
                    deleteHistory(item.id)
                  }
                >
                  🗑 Delete Analysis
                </button>

              </div>

            ))}

          </div>

        )}

      </div>

    </section>
  );
}

export default History;