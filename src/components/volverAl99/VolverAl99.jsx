import React, { useEffect, useState } from "react";
import BannerAnimated from "../banner1/BannerAnimated";
import Banner from "../banner1/Banner";
import BannerAnimated2 from "../banner1/BannerAnimated2";

const VolverAl99 = () => {
  return (
   <>
    <BannerAnimated2 />
    <div style={{ padding: "20px", backgroundColor: "#f0f0f0" }}>

      {/* Bloques de contenido retro */}
      <div className="container">
        <div className="row">
          {/* Bloque 1 */}
          <div className="col-12 col-md-4" style={styles.block}>
            <div style={styles.blockContent}>
              <h3 style={styles.blockTitle}>Bloque 1: Anuncios</h3>
              <img
                src="https://via.placeholder.com/250x150.png?text=Banner+Anuncio"
                alt="Anuncio Retro"
                style={styles.banner}
              />
              <p style={styles.text}>
                ¡Compra ahora y gana premios increíbles!
              </p>
              <img
                src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
                alt="Gif Retro"
                style={styles.gif}
              />
            </div>
          </div>

          {/* Bloque 2 */}
          <div className="col-12 col-md-4" style={styles.block}>
            <div style={styles.blockContent}>
              <h3 style={styles.blockTitle}>Winamp</h3>
              <p style={styles.text}>
                Winamp fue lanzado en 1997 y rápidamente se convirtió en uno de
                los reproductores de música más populares gracias a su capacidad
                de personalización con skins y plugins.
              </p>

              <img
                // src="https://i.ytimg.com/vi/IAXEpsIJGRU/mqdefault.jpg"
                src="https://ohmygeek.net/wp-content/uploads/2014/01/Old-Winamp.gif.webp"
                alt="Gif Retro"
                style={styles.gif}
              />
            </div>
          </div>

          {/* Bloque 3 */}
          <div className="col-12 col-md-4" style={styles.block}>
            <div style={styles.blockContent}>
              <h3 style={styles.blockTitle}>Bmx</h3>
              <p style={styles.text}>
                En los 90, las primeras comunidades online de BMX comenzaron a
                surgir en foros y sitios web como BMX Online y Ride BMX, donde
                los riders compartían trucos, eventos y tendencias del deporte
                antes del auge de las redes sociales.
              </p>
              <img
                src="https://i.pinimg.com/originals/7f/a5/e4/7fa5e4ccbf2439092b69611390f5ca1b.gif"
                alt="Gif Retro"
                style={styles.gif}
              />
            </div>
          </div>
        </div>
        {/* Aquí va el banner angosto */}
        <div style={styles.bannerContainer}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Cuj_H_HzvKiRc_GMrlOMjwD91oEJgeFcWA&s"
            alt="Banner Angosto"
            style={styles.banner}
          />
        </div>

        <div className="row">
          {/* Bloque 1 */}
          <div className="col-12 col-md-4" style={styles.block}>
            <div style={styles.blockContent}>
              <h3 style={styles.blockTitle}>Apple</h3>
              <img
                src="https://via.placeholder.com/250x150.png?text=Banner+Anuncio"
                alt="Anuncio Retro"
                style={styles.banner}
              />
              <p style={styles.text}>
                La primera página web de Apple fue lanzada en 1996. Su diseño
                era simple, con texto azul y fondo gris, y presentaba productos
                como la Macintosh y el sistema operativo Mac OS
              </p>
              <img
                src="https://i.gifer.com/AZ8r.gif"
                alt="Gif Retro"
                style={styles.gif}
              />
            </div>
          </div>

          {/* Bloque 2 */}
          <div className="col-12 col-md-4" style={styles.block}>
            <div style={styles.blockContent}>
              <h3 style={styles.blockTitle}>@</h3>
              <p style={styles.text}>
                ¿Sabías que el símbolo '@' se usó por primera vez en 1971 en un
                correo electrónico enviado por Ray Tomlinson, el creador del
                email?
              </p>
              <div style={styles.searchContainer}>
                <input
                  type="text"
                  placeholder="Buscar..."
                  style={styles.searchInput}
                />
                <button style={styles.searchButton}>Buscar</button>
              </div>
              <img
                src="https://i.pinimg.com/originals/96/d2/29/96d229d8c1be97c0d8c297b16a65ae0d.gif"
                alt="Gif Retro"
                style={styles.gif}
              />
            </div>
          </div>

          {/* Bloque 3 */}
          <div className="col-12 col-md-4" style={styles.block}>
            <div style={styles.blockContent}>
              <h3 style={styles.blockTitle}>Netscape</h3>
              <p style={styles.text}>
                ¿Sabías que en los 90 el navegador más popular era Netscape
                Navigator?
              </p>
              {/* <img
                src="https://parceladigital.com/subidos/2017/02/4046983331_e5b7bf95a6_z.jpg"
                alt="Pop-up Anuncio"
                style={styles.banner}
              /> */}
              <img
                src="https://media3.giphy.com/media/anjRJ4nv9WJzO/200w.gif?cid=6c09b952i92zrxyrjh0059usz19wmkb6cphnxhtd9qux8a1n&ep=v1_gifs_search&rid=200w.gif&ct=g"
                alt="Gif Retro"
                style={styles.gif}
              />
            </div>
          </div>
        </div>

        <div style={styles.bannerContainer}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4w8oRyF4JiVvFfskeCuR-iNVydwrMQqaLKScatoTnmnYYtXbyz3rhr_N7kXqw5nq7ffM&usqp=CAU"
            alt="Banner Angosto"
            style={styles.banner}
          />
        </div>

        <div className="row">
          {/* Bloque 1 */}
          <div className="col-12 col-md-4" style={styles.block}>
            <div style={styles.blockContent}>
              <h3 style={styles.blockTitle}>Window 98</h3>
              <img
                src="https://via.placeholder.com/250x150.png?text=Banner+Anuncio"
                alt="Anuncio Retro"
                style={styles.banner}
              />
              <p style={styles.text}>
                Lanzamiento de Windows 98: Lanzado en junio de 1998, Windows 98
                fue una de las versiones más populares del sistema operativo de
                Microsoft durante los años 90.
              </p>
              <img
                src="https://64.media.tumblr.com/57fe66ed06f58a49d541872239b822fd/a35d748a2bf85cbb-6f/s400x600/d6fc7014fb68d7d651a446e93f2c1af66de02e46.gifv"
                alt="Gif Retro"
                style={styles.gif}
              />
            </div>
          </div>

          {/* Bloque 2 */}
          <div className="col-12 col-md-4" style={styles.block}>
            <div style={styles.blockContent}>
              <h3 style={styles.blockTitle}>Dancing Baby</h3>
              <p style={styles.text}>
                ¿Sabías que el primer meme de Internet fue 'Dancing Baby' en
                1996? Era una animación en 3D de un bebé bailando que se volvió
                viral.
              </p>

              <img
                src="https://blog.archive.org/wp-content/uploads/2016/10/dancing_baby.gif"
                alt="Gif Retro"
                style={styles.gif}
              />
            </div>
          </div>

          {/* Bloque 3 */}
          <div className="col-12 col-md-4" style={styles.block}>
            <div style={styles.blockContent}>
              <h3 style={styles.blockTitle}>Tim Berners-Lee</h3>
              <p style={styles.text}>
                ¿Sabías que en 1991 se lanzó la primera página web? Fue creada
                por Tim Berners-Lee
              </p>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMvzcBfNBw-P20hcs42cdDsLS7O1CbUhOMtQ&s"
                alt="Pop-up Anuncio"
                style={styles.banner}
              />
            </div>
          </div>
        </div>

        {/* Aquí va el banner angosto */}
        <div style={styles.bannerContainer}>
          <img
            src="https://www.emezeta.com/weblog/buscadores-de-internet-90/ask-jeeves-1999.png"
            alt="Banner Angosto"
            style={styles.banner}
          />
        </div>

        <div className="row">
          {/* Bloque 1 */}
          <div className="col-12 col-md-4" style={styles.block}>
            <div style={styles.blockContent}>
              <h3 style={styles.blockTitle}>The Simpsons</h3>
              <img
                src="https://via.placeholder.com/250x150.png?text=Banner+Anuncio"
                alt="Anuncio Retro"
                style={styles.banner}
              />
              <p style={styles.text}>
                En los años 90 surgieron numerosas páginas web dedicadas a la
                serie Los Simpsons, muchas de ellas creadas por fans. Sitios
                como "The Simpsons Archive" fueron de los primeros en reunir
                episodios, citas y contenido exclusivo. La web de los 90 se
                caracterizaba por diseños simples, fondos brillantes, y el uso
                de GIFs animados, lo que daba un toque nostálgico al estilo
                visual de la época
              </p>
              <img
                src="https://media0.giphy.com/media/l0ErACnfRT5KHlbby/200w.gif?cid=6c09b9527aykkxpufohlltg1zwskafocz6sv578nl6z2fegj&ep=v1_gifs_search&rid=200w.gif&ct=g"
                alt="Gif Retro"
                style={styles.gif}
              />
            </div>
          </div>

          {/* Bloque 2 */}
          <div className="col-12 col-md-4" style={styles.block}>
            <div style={styles.blockContent}>
              <h3 style={styles.blockTitle}>Bloque 2: Buscador</h3>
              <p style={styles.text}>
                Busca lo que quieras: productos, servicios o noticias de la web.
              </p>
              <div style={styles.searchContainer}></div>
              <img
                src="https://storage.googleapis.com/blog-images-backup/1*64jSmWQdZ0STcy6YcambTw.gif"
                alt="Gif Retro"
                style={styles.gif}
              />
            </div>
          </div>

          {/* Bloque 3 */}
          <div className="col-12 col-md-4" style={styles.block}>
            <div style={styles.blockContent}>
              <h3 style={styles.blockTitle}>Google Garage</h3>
              <p style={styles.text}>
                En 1998, Google fue fundado por Larry Page y Sergey Brin en un
                garaje.
              </p>
              {/* <img
                // src="https://archive.org/download/welcome-to-the-last-page-of-the-internet-old-gif/last%20page.gif"
                src=""
                alt="Pop-up Anuncio"
                style={styles.banner}
              /> */}
              <img
                src="https://media3.giphy.com/media/ymKIz3zBieFNK/200w.gif?cid=6c09b952elw5jm9bxhf1hi4luztotri96lg2ny17v9zb7tqa&ep=v1_gifs_search&rid=200w.gif&ct=g"
                alt="Gif Retro"
                style={styles.gif}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </> 
  );
};

const styles = {
  title: {
    textAlign: "center",
    fontSize: "3rem",
    color: "#333",
    marginBottom: "20px",
    fontFamily: "'Comic Sans MS', cursive, sans-serif",
  },
  description: {
    textAlign: "center",
    fontSize: "1.5rem",
    color: "#555",
    marginBottom: "40px",
  },
  block: {
    backgroundColor: "#f0f0f0",
    padding: "20px",
    marginBottom: "30px",
    border: "2px solid #ccc",
    borderRadius: "8px",
    fontFamily: "'Courier New', Courier, monospace",
  },
  blockContent: {
    textAlign: "center",
  },
  blockTitle: {
    fontSize: "2rem",
    color: "#ff6347",
    marginBottom: "20px",
    fontWeight: "bold",
    textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
  },
  text: {
    fontSize: "1rem",
    color: "#333",
    marginBottom: "20px",
  },
  gif: {
    width: "100%",
    marginTop: "15px",
    marginBottom: "15px",
  },
  banner: {
    width: "100%",
    maxHeight: "150px",
    marginBottom: "20px",
  },
  searchContainer: {
    marginBottom: "20px",
  },
  searchInput: {
    padding: "10px",
    width: "60%",
    fontSize: "1rem",
    marginRight: "10px",
    border: "2px solid #ff6347",
    borderRadius: "5px",
    color: "#333",
  },
  searchButton: {
    padding: "10px 20px",
    backgroundColor: "#ff6347",
    border: "none",
    borderRadius: "5px",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
  },
  popUpTop: {
    position: "fixed",
    top: "10%",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 999,
  },
  popUpRight: {
    position: "fixed",
    top: "50%",
    right: "0",
    zIndex: 999,
  },
  popUpLeft: {
    position: "fixed",
    top: "50%",
    left: "0",
    zIndex: 999,
  },
  popUp: {
    backgroundColor: "#fff",
    border: "2px solid #ff6347",
    padding: "20px",
    borderRadius: "10px",
    width: "250px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  popUpIcon: {
    width: "40px",
    height: "40px",
    marginBottom: "10px",
  },
  popUpContent: {
    textAlign: "center",
  },
  popUpTitle: {
    fontSize: "1.2rem",
    color: "#ff6347",
    marginBottom: "10px",
  },
};

export default VolverAl99;
