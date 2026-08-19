import React from "react";
import "../styles/Footer.css";
import {
  Globe,
  Mail,
  ArrowRight,
} from "lucide-react";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">

        {/* Top */}
        <div className="footer_top">

          <div className="footer_brand">
            <h2>TruthLens AI</h2>

            <p>
              AI-powered fake news detection platform helping users
              verify information with confidence.
            </p>

<div className="footer_social">
  <a href="#"><Globe size={20} /></a>
  <a href="#"><Mail size={20} /></a>
</div>

          </div>

          <div className="footer_links">

            <div>
              <h4>Product</h4>

              <a href="#">Home</a>
              <a href="#">Features</a>
              <a href="#">Live Demo</a>
              <a href="#">Pricing</a>

            </div>

            <div>
              <h4>Resources</h4>

              <a href="#">Blog</a>
              <a href="#">Documentation</a>
              <a href="#">FAQ</a>
              <a href="#">Support</a>

            </div>

            <div>
              <h4>Company</h4>

              <a href="#">About</a>
              <a href="#">Contact</a>
              <a href="#">Careers</a>
              <a href="#">Feedback</a>

            </div>

            <div>
              <h4>Legal</h4>

              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Cookies</a>
              <a href="#">Security</a>

            </div>

          </div>

        </div>

        {/* Newsletter */}

        <div className="newsletter">

          <div>
            <h3>Stay Updated</h3>

            <p>
              Get product updates, AI news and feature releases.
            </p>
          </div>

          <div className="newsletter_form">

            <input
              type="email"
              placeholder="Enter your email"
            />

            <button>
              Subscribe
              <ArrowRight size={18} />
            </button>

          </div>

        </div>

        {/* Bottom */}

        <div className="footer_bottom">

          <p>
            © 2026 TruthLens AI. All Rights Reserved.
          </p>

          <span>
            Made with ❤️ using React & AI
          </span>

        </div>

      </div>
    </footer>
  );
};

export default Footer;