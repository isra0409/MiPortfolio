import React, { useState, useEffect } from "react";
import "./MouseImg.css";
// import cursorImg from "./cursor.png"; // Asegúrate de tener una imagen de 20x20 px

const MouseImg = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="cursor"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      <img src="https://i.gifer.com/PYh.gif" alt="Cursor" />
    </div>
  );
};

export default MouseImg;
