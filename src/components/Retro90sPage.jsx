import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const Retro90sPage = () => {
  useEffect(() => {
    const midi = new Audio("/retro-midi.mid"); // Asegúrate de tener un archivo MIDI
    midi.loop = true;
    midi.play();

    return () => midi.pause();
  }, []);

  return (
    <div className="retro-container">
      <h1 className="title-blink moving-text">Bienvenido a mi Web Noventera</h1>
      <div className="grid-container">
        <div className="item item1 shake">🌐 ¡Bienvenidos a mi página personal!</div>
        <div className="item item2">🎶 Música MIDI sonando en bucle...</div>
        <div className="item item3 shake">💾 Descarga mis fondos de pantalla</div>
        <div className="item item4">📜 Mi diario de aventuras en HTML</div>
        <div className="item item5">✨ GIFs animados por todas partes</div>
        <div className="item item6">📧 Escríbeme en mi Guestbook</div>
        <div className="item item7 shake">🔥 GIF de "En construcción"</div>
        <div className="item item8">🖥️ Mi primera PC: Pentium II</div>
        <div className="item item9">🕹️ Juegos Flash favoritos</div>
      </div>
    </div>
  );
};

export default Retro90sPage;
