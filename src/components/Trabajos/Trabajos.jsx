import React, { useState } from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/desktop1.jpeg";
import img2 from "../../assets/desktop3.jpeg";
import img3 from "../../assets/UI.png";
import img4 from "../../assets/desktop2.jpeg";
import img5 from "../../assets/desktop4.jpeg";
import img6 from "../../assets/ecommerceportada.jpeg";
import img7 from "../../assets/volfpage.jpeg";
import portada1 from "../../assets/serhumanoportada.png";
import portada2 from "../../assets/pizzaportada.png";
import portada3 from "../../assets/urbanspotsportada.png";
import portada4 from "../../assets/volveral90portada.png";
import portada5 from "../../assets/estudio3portada.png";
import portada6 from "../../assets/ecommportada.png";
import portada7 from "../../assets/volfportada.png";

const Trabajos = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedDesc, setSelectedDesc] = useState("");  // Agregar el estado para la descripción
  const [zoom, setZoom] = useState(1);
  const [positionY, setPositionY] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);

  const proyectos = [

    {
      portada: portada7,
      img: img7,
      titulo: "Volf",
      descripcion: "Rediseño del sitio completo de Volf. (home, tipografias, galeria, ficha producto, footer) Tuve la oportunidad de colaborar en uno de mis trabajos con esta tienda de vajillas, desde el planeamiento del nuevo rediseño, hasta la implementacion. Muchas tecnologias nuevas, en este caso React con VTEX IO.",
    },
    {
      portada: portada1,
      img: img1,
      titulo: "SerHumano",
      descripcion: "Modelo de landing page para la fundacion SerHumano, el cliente necesitaba tener presencia digital y eso le brindamos, se creo una landing con distintas secciones, comunicando los servicios que se ofrecian, añadiendo un newsletter (formulario de suscripcion) y tambien un formulario de contacto. Realizado en React, Vite y Bootstrap5.",
    },
    {
      portada: portada3,
      img: img3,
      titulo: "UrbanSpots UX/UI",
      descripcion: "Proceso completo del desarrollo de la app UrbanSport, pasando desde el ux research hasta prototipado de app en figma. Proyecto que demuestra totalmente habilidades de UX/UI, lo entiendo como una habilidad necesaria en el desarrollo front hoy en dia.",
    },
    {
      portada: portada2,
      img: img2,
      titulo: "Pizza Pizzuela",
      descripcion: "Modelo de landing page para una pizzeria, maquetado de secciones y agregado de funcionalidades basicas. Realizado en HTML, CSS y JavaScript, sin uso de librerias externas.",
    },




  ];

  const openModal = (img, descripcion) => {
    setSelectedImg(img);
    setSelectedDesc(descripcion);  // Guardar la descripción al abrir el modal
    setModalOpen(true);
    setZoom(1);
    setPositionY(0);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImg(null);
    setSelectedDesc("");  // Resetear la descripción cuando se cierra el modal
  };

  const handleWheel = (e) => {
    e.preventDefault();
    setZoom((prevZoom) =>
      Math.max(1, Math.min(5, prevZoom + e.deltaY * -0.01))
    );
  };

  const handleMouseDown = (e) => {
    setDragging(true);
    setStartPos(e.clientY - positionY);
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    setPositionY(e.clientY - startPos);
  };

  const handleMouseUp = () => {
    setDragging(false);
    setStartPos(0);
  };

  const handleTouchStart = (e) => {
    setDragging(true);
    setStartPos(e.touches[0].clientY - positionY);
  };

  const handleTouchMove = (e) => {
    if (!dragging) return;
    setPositionY(e.touches[0].clientY - startPos);
  };

  const handleTouchEnd = () => {
    setDragging(false);
    setStartPos(0);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ padding: 20, backgroundColor: "#000" }}
    >
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
            <div key={index} className="col-md-4">
              <motion.div
                className="card trabajo-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                onClick={() => openModal(proyecto.img, proyecto.descripcion)}
                style={{ maxHeight: "200px", overflow: "hidden" }}
              >
                <img
                  src={proyecto.portada}
                  alt={proyecto.titulo}
                  className="card-img-top trabajo-img"
                  style={{ objectFit: "cover", height: "150px" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{proyecto.titulo}</h5>
                  <p className="card-text">{proyecto.descripcion}</p>
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
            }}
          >
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "row", // Mostrar en fila (imagen a la izquierda, descripción a la derecha)
                maxWidth: "90%",
                maxHeight: "90%",
              }}
            >
              <button
                className="btn btn-danger close-btn"
                onClick={closeModal}
                style={{
                  position: "fixed",
                  top: "10px",
                  right: "10px",
                  fontSize: "1.5rem",
                  padding: "5px 10px",
                  zIndex: 1100,
                }}
              >
                X
              </button>
              <div
                className="zoom-container"
                onWheel={handleWheel}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                style={{
                  cursor: dragging ? "grabbing" : "grab",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  overflow: "hidden",
                  width: "100%",
                  height: "80vh",
                }}
              >
                <img
                  src={selectedImg}
                  alt="Proyecto"
                  className="img-fluid"
                  style={{
                    transform: `scale(${zoom}) translate(0px, ${positionY}px)`,
                    transition: "transform 0.2s ease-in-out",
                    maxWidth: "50%", // Hacer la imagen más pequeña para que encaje bien
                    display: "block",
                  }}
                />
                <div
                  className="text-white"
                  style={{
                    marginLeft: "20px",
                    maxWidth: "45%", // Para que la descripción tenga espacio suficiente
                    overflowY: "auto",
                    height: "100%",
                  }}
                >
                  <h5>{proyectos.find(p => p.img === selectedImg)?.titulo}</h5>
                  <p>{selectedDesc}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Trabajos;
