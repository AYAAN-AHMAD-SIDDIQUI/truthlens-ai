import React from "react";
import "../styles/Testimonials.css";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Journalist",
    image: "https://i.pravatar.cc/150?img=32",
    review:
      "TruthLens AI helped me verify breaking news within seconds. The credibility analysis is incredibly useful.",
  },
  {
    name: "David Miller",
    role: "University Student",
    image: "https://i.pravatar.cc/150?img=15",
    review:
      "The interface is beautiful and the AI explanations are easy to understand. Highly recommended!",
  },
  {
    name: "Emily Carter",
    role: "Content Creator",
    image: "https://i.pravatar.cc/150?img=48",
    review:
      "I use TruthLens AI before sharing any article. It has become an essential part of my workflow.",
  },
];
const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonial_heading">
        <span>TESTIMONIALS</span>

        <h2>Trusted by People Around the World</h2>

        <p>
          Thousands of users rely on TruthLens AI to verify information and
          detect misinformation with confidence.
        </p>
      </div>

      <div className="testimonial_container">
        {testimonials.map((item, index) => (
          <div className="testimonial_card" key={index}>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#FACC15" color="#FACC15" />
              ))}
            </div>

            <p className="review">"{item.review}"</p>

            <div className="user">
              <img src={item.image} alt={item.name} />

              <div>
                <h4>{item.name}</h4>
                <span>{item.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;