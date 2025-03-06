import React, { useState } from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/desktop1.jpeg";
import img2 from "../../assets/desktop3.jpeg";
import img3 from "../../assets/UI.png";
import img4 from "../../assets/desktop2.jpeg";
import img7 from "../../assets/volfpage.jpeg";
import portada1 from "../../assets/serhumanoportada.png";
import portada2 from "../../assets/pizzaportada.png";
import portada3 from "../../assets/urbanspotsportada.png";
import portada4 from "../../assets/volveral90portada.png";
import portada7 from "../../assets/volfportada.png";
import videoEcommerce from "../../assets/ecommerce.mp4";
import videoPolaroid from "../../assets/polaroidvid.mp4"

import "./styles.css";

const Trabajos = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);
  const [selectedDesc, setSelectedDesc] = useState("");

  const proyectos = [
    {
      portada: portada4,
      video: videoEcommerce,
      titulo: "Mi E-commerce",
      descripcion:
        "Desarrollo completo del frontend para un e-commerce, incluyendo barra de búsqueda, galería de productos dinámicos desde una API, ficha de producto, checkout, pantallas de confirmación y carrito de compras. Todo implementado en React con Bootstrap 5 y CSS, sin librerías externas. Para la gestión de estados se utilizó useContext, manteniendo un código modularizado con componentes personalizados.",
    },

    {
      portada: portada4,
      video: videoPolaroid,
      titulo: "Polaroid estética vehicular",
      descripcion:
        "Desarrollo de landing page para un centro estetico vehicular. Realizado en React y Bootstrap5",
    },

    {
      portada: portada7,
      img: img7,
      titulo: "Volf",
      descripcion:
        "Rediseño del sitio completo de Volf. Implementación en React con VTEX IO.",
    },
    {
      portada: portada1,
      img: img1,
      titulo: "SerHumano",
      descripcion:
        "Landing page para la fundación SerHumano. Realizado en React, Vite y Bootstrap5.",
    },
    {
      portada: portada3,
      img: img3,
      titulo: "UrbanSpots UX/UI",
      descripcion:
        "Proceso UX/UI de UrbanSport desde el research hasta el prototipado en Figma.",
    },
    // {
    //   portada: portada2,
    //   img: img2,
    //   titulo: "Pizza Pizzuela",
    //   descripcion:
    //     "Landing para pizzería con HTML, CSS y JavaScript sin librerías externas.",
    // },
    // {
    //   portada: portada4,
    //   img: img4,
    //   titulo: "Back to 90",
    //   descripcion:
    //     "Blog años 90 con estructura en tablas y estética retro. Realizado en React y Vite.",
    // },
  ];

  const openModal = (content, descripcion) => {
    setSelectedContent(content);
    setSelectedDesc(descripcion);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedContent(null);
    setSelectedDesc("");
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ padding: 20, backgroundColor: "#000" }}>
      <div className="container text-white" style={{ width: "90%" }}>
        <motion.h2
          className="text-center pt-5 pb-2 mt-5 mb-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Trabajos/Proyectos
        </motion.h2>

        <div className="row g-4">
          {proyectos.map((proyecto, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4">
              <motion.div
                className="card trabajo-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                onClick={() => openModal(proyecto.video || proyecto.img, proyecto.descripcion)}
                style={{ maxHeight: "200px", overflow: "hidden" }}
              >
                {proyecto.video ? (
                  <video
                    src={proyecto.video}
                    className="card-img-top trabajo-img"
                    style={{ objectFit: "cover", height: "150px", width: "100%" }}
                    autoPlay
                    loop
                    muted
                  />
                ) : (
                  <img
                    src={proyecto.portada}
                    alt={proyecto.titulo}
                    className="card-img-top trabajo-img"
                    style={{ objectFit: "cover", height: "150px" }}
                  />
                )}
                <div className="card-body text-center">
                  <h5 className="card-title" style={{ fontSize: "1rem" }}>{proyecto.titulo}</h5>
                  <p className="card-text" style={{ fontSize: "0.875rem" }}>{proyecto.descripcion}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {modalOpen && (
          <div
            className="modal-overlay"
            onClick={closeModal}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1050,
              padding: "10px",
            }}
          >
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor: "#222",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                maxWidth: "90%",
                maxHeight: "80%",
                padding: "20px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              {/* Botón de cerrar */}
              <button
                className="btn btn-danger close-btn"
                onClick={closeModal}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  fontSize: "1.5rem",
                  padding: "5px 10px",
                  zIndex: 1100,
                }}
              >
                X
              </button>

              {/* Contenedor de imagen o video */}
              <div
                style={{
                  maxHeight: "100%",
                  maxWidth: "100%",
                  overflowY: "auto",
                  paddingRight: "20px",
                  flex: 1,
                }}
              >
                {selectedContent?.includes(".mp4") ? (
                  <video
                    src={selectedContent}
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                      maxHeight: "80vh", // Aumentado el tamaño del video
                    }}
                    controls
                    autoPlay
                  />
                ) : (
                  <img
                    src={selectedContent}
                    alt="Proyecto"
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                    }}
                  />
                )}
              </div>

              {/* Contenedor del texto */}
              <div
                className="text-white"
                style={{
                  marginTop: "20px",
                  maxWidth: "100%",
                }}
              >
                <h5>{proyectos.find((p) => p.img === selectedContent || p.video === selectedContent)?.titulo}</h5>
                <p>{selectedDesc}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Trabajos;
