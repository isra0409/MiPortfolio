import React from "react";
import { motion } from "framer-motion";

const Experiencia = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ backgroundColor: "#000" }} // Fondo negro
      >
        <div
          className="container-large"
          style={{ backgroundColor: "#000", color: "#fff", padding: "20px" }}
        >
          <motion.h2
            className="text-center pt-5 pb-2 mt-5 mb-5"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Experiencia
          </motion.h2>
          {/* Sección 1 - Accenture Song */}
          <div className="row align-items-center mb-5">
            {/* Imagen o logo */}
            <div className="col-md-3 text-center mb-4 mb-md-0">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_X2iyG0hkHCgOyGHv0iHczCRB75lZ84NoQUMrl16onUp0wIR2uClZlFYA5Dj7tMt7LRg&usqp=CAU"
                alt="Logo o Imagen"
                className="img-fluid"
                style={{ maxHeight: "100px" }}
              />
            </div>

            {/* Texto de trabajo */}
            <div className="col-md-9">
              <h3 className="mb-3">Front end Developer</h3>
              <h5 className="mb-3" style={{ color: "#fed353" }}>
                Accenture Song · Jornada completa
              </h5>
              <p className="mb-3" style={{ color: "#fff" }}>
                Abr. 2022 - Abr. 2023 · 1 año 1 mes
              </p>
              <p className="mb-3" style={{ color: "#fff" }}>
                Argentina · En remoto
              </p>

              <ul className="list-unstyled">
                <li>
                  <strong style={{ color: "#54d4ff" }}>
                    Optimización del Rendimiento del Sitio:
                  </strong>{" "}
                  Reducí el tiempo de carga del sitio en{" "}
                  <span className="text-highlight">1.9 segundos</span>,
                  mejorando la capacidad de respuesta mediante pruebas
                  exhaustivas de rendimiento y optimización de recursos como
                  imágenes, videos, extensiones, GIFs, fuentes y scripts.
                </li>
                <li>
                  <strong style={{ color: "#54d4ff" }}>
                    Resolución de Latencia:
                  </strong>{" "}
                  Detecté y solucioné factores de latencia en colaboración con
                  el equipo de front-end, garantizando una experiencia de
                  usuario más rápida y fluida.
                </li>
                <li>
                  <strong style={{ color: "#54d4ff" }}>
                    Lanzamiento de Proyectos Exitosos:
                  </strong>{" "}
                  Codirigí el lanzamiento de{" "}
                  <span className="text-highlight">
                    "El Atelier de los Sueños" para Dior
                  </span>
                  , un proyecto navideño con múltiples landing pages, destacando
                  habilidades de gestión de proyectos y trabajo en equipo.
                </li>
                <li>
                  <strong style={{ color: "#54d4ff" }}>
                    Colaboración Multidisciplinaria:
                  </strong>{" "}
                  Trabajé junto a equipos de UX/UI, QA y diseño para rediseñar
                  el sitio, mejorando las ventas y optimizando la experiencia de
                  usuario y el rendimiento comercial.
                </li>
                <li>
                  <strong style={{ color: "#54d4ff" }}>Mejora Continua:</strong>{" "}
                  Implementé prácticas de optimización iterativa que resultaron
                  en un rendimiento sostenible y una mayor satisfacción del
                  cliente.
                </li>
              </ul>
            </div>
          </div>

          {/* Sección 2 - Glamit */}
          <div className="row align-items-center">
            {/* Imagen o logo */}
            <div className="col-md-3 text-center mb-4 mb-md-0">
              <img
                src="data:image/jpeg;base64,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" // Cambia esta URL por el logo de Glamit
                alt="Logo o Imagen"
                className="img-fluid"
                style={{ maxHeight: "100px" }}
              />
            </div>

            {/* Texto de trabajo */}
            <div className="col-md-9">
              <h3 className="mb-3">Front end Developer</h3>
              <h5 className="mb-3" style={{ color: "#fed353" }}>
                Glamit · Jornada completa
              </h5>
              <p className="mb-3" style={{ color: "#fff" }}>
                Mar. 2021 - Abr. 2022 · 1 año 2 meses
              </p>
              <p className="mb-3" style={{ color: "#fff" }}>
                Argentina · En remoto
              </p>

              <ul className="list-unstyled">
                <li>
                  <strong style={{ color: "#54d4ff" }}>
                    Mantenimiento y Soporte Proactivo:
                  </strong>{" "}
                  Brindé soporte front-end durante una migración tecnológica
                  clave, garantizando la continuidad del servicio y reduciendo
                  al mínimo el tiempo de inactividad para varias marcas.
                </li>
                <li>
                  <strong style={{ color: "#54d4ff" }}>
                    Adaptación a Nuevas Tecnologías:
                  </strong>{" "}
                  Trabajamos en equipos la transición a nuevas tecnologías,
                  contribuyendo al éxito del equipo y optimizando la eficiencia
                  en la implementación.
                </li>
                <li>
                  <strong style={{ color: "#54d4ff" }}>
                    Impacto en Ventas:
                  </strong>{" "}
                  Trabajamos en la interfaz de usuario y la experiencia del
                  cliente, lo que resultó en un récord de ventas y contribuyó
                  directamente al crecimiento comercial de la empresa.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experiencia;
