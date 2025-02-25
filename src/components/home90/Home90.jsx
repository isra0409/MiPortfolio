import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const Home90 = () => {
  return (
    <div className="container">
      <div className="banner">WELCOME TO THE 90s</div>
      <div className="content">
        <img src="/images/bill_gates.gif" alt="Bill Gates" className="gif top-left" />
        <img src="/images/explosion.gif" alt="Explosion" className="gif top-right" />
        <img src="/images/skull.gif" alt="Skull" className="gif top-middle" />
        <img src="/images/saiyan.gif" alt="Super Saiyan" className="gif bottom-left" />
        <img src="/images/robot.gif" alt="Robot" className="gif bottom-middle" />
        <img src="/images/dog.gif" alt="Dog" className="gif bottom-right" />
        <h1 className="welcome-text">WELCOME</h1>
      </div>
    </div>
  );
};

export default Home90;