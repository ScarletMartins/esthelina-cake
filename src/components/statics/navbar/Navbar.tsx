import React from "react";
import "./Navbar.css";
<link
  href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap"
  rel="stylesheet"
></link>;

function Navbar() {
  return (
    <>
      <nav className="header">
        <div className="logo-nav">
          <a href="/home">
            <img
              src="https://imgur.com/Shqpuxx.png"
              alt="Imagem do logo da empresa Esthelina Cake"
            />
          </a>
        </div>
        <ul>
          <li>
            <a href="/produtos">Produtos</a>
            <ul>
              <li>
                <a href="/kits">Kits festa</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="/quemSomos">Quem Somos</a>
          </li>
          <li>
            <a href="/contato">Contato</a>
          </li>
        </ul>
        <div className="toggle-btn">
          <i className="fa-light fa-bars"></i>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
