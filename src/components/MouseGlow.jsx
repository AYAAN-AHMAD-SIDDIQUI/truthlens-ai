import { useEffect, useRef } from "react";
import "../styles/MouseGlow.css";
const MouseGlow = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;

    const moveGlow = (e) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", moveGlow);

    return () => {
      window.removeEventListener("mousemove", moveGlow);
    };
  }, []);

  return <div ref={glowRef} className="mouse-glow"></div>;
};

export default MouseGlow;