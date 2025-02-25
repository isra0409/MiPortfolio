import React from "react";

const Banner90 = ({ backgroundImage, corporateImage, textContent }) => {
  const bannerStyle = {
    position: "relative",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.6)",
    margin: 0, // Elimina márgenes extras
    padding: 0, // Elimina rellenos extras
    overflow: "hidden", // Para evitar desbordamientos visuales
  };

  const backgroundStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    zIndex: -2, // Coloca la imagen de fondo detrás de todo
  };

  const blurOverlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Color oscuro con transparencia para resaltar el contenido
    backdropFilter: "blur(2.5px)", // Aplica el blur solo al overlay
    zIndex: -1, // Coloca la capa de difuminado detrás de la imagen
  };

  return (
    <div style={bannerStyle}>
      <div style={backgroundStyle}></div> {/* Imagen de fondo */}
      <div style={blurOverlayStyle}></div> {/* Capa de difuminado */}
      <div className="container" style={{ zIndex: 1 }}> {/* Asegura que el contenido esté por encima */}
        <div className="row align-items-center">


          {/* Texto informativo */}
          <div className="col-md-6">
            <div className="p-4">
              <h1 className="mb-4">{textContent.title1}</h1>
              <h4 className="mb-4">{textContent.title2}</h4>
              <p className="lead">{textContent.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner90;
