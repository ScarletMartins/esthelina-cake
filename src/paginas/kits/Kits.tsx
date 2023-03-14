import React from "react";
import "./Kits.css";
<link
  href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap"
  rel="stylesheet"
></link>;
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap" rel="stylesheet"></link>

function Kits() {
  return (
    <>
      <div className="kit-festa">
        <p className="titulo-kit">Kit festa</p>
        <div className="texto-kits">
          <p>
            Seja bem-vindo à nossa página de kits de bolo e doces! Aqui você
            encontrará uma variedade de opções para deixar sua festa ainda mais
            gostosa e inesquecível. Nossos kits foram pensados para atender a
            diferentes tipos de eventos e tamanhos de grupos, desde pequenas
            reuniões até grandes festas.
          </p>
          <br />
          <p>
            Com ingredientes de alta qualidade e receitas deliciosas, nossos
            bolos e doces são feitos com carinho e cuidado para que cada mordida
            seja uma experiência única e especial. Confira abaixo as opções de
            kits que preparamos para você e escolha o seu favorito!
          </p>
        </div>

        <div className="kit-festa-cards">
          <div className="first-line-cake">
            <div className="card">
              <div className="card-details">
                <p className="text-title">Kit Bolo PP</p>
                <p className="text-body">
                  Rende até 8 fatias
                </p>
                <p className="text-body">Aro 13cm - Peso aproximado: 1kg</p>
                <p className="text-body">20 docinhos</p>
                <p className="text-body">1 topper simples</p>
                <p className="text-price">R$ 140,00</p>
              </div>
              <a
                href="https://api.whatsapp.com/send?phone=5511948673143&text=Oi,%20vim%20do%20Instagram%20e%20gostaria%20de%20fazer%20uma%20encomenda!%20"
                target="blank"
              >
                <button className="card-button">Peça agora</button>
              </a>
            </div>

            <div className="card">
              <div className="card-details">
                <p className="text-title">Kit Bolo P</p>
                <p className="text-body">Rende de 13 a 15 fatias</p>
                <p className="text-body">Aro 15cm - Peso aproximado: 1.5kg</p>
                <p className="text-body">30 docinhos</p>
                <p className="text-body">1 topper simples</p>
                <p className="text-price">R$ 170,00</p>
              </div>
              <a
                href="https://api.whatsapp.com/send?phone=5511948673143&text=Oi,%20vim%20do%20Instagram%20e%20gostaria%20de%20fazer%20uma%20encomenda!%20"
                target="blank"
              >
                <button className="card-button">Peça agora</button>
              </a>
            </div>

            <div className="card">
              <div className="card-details">
                <p className="text-title">Kit Bolo M</p>
                <p className="text-body">Rende de 17 a 20 fatias</p>
                <p className="text-body">Aro 17cm - Peso aproximado: 2kg</p>
                <p className="text-body">50 docinhos</p>
                <p className="text-body">1 topper</p>
                <p className="text-price">R$ 210,00</p>
              </div>
              <a
                href="https://api.whatsapp.com/send?phone=5511948673143&text=Oi,%20vim%20do%20Instagram%20e%20gostaria%20de%20fazer%20uma%20encomenda!%20"
                target="blank"
              >
                <button className="card-button">Peça agora</button>
              </a>
            </div>
          </div>
          <div className="second-line-cake">
            <div className="card">
              <div className="card-details">
                <p className="text-title">Kit Bolo G</p>
                <p className="text-body">Rende de 22 a 25 fatias</p>
                <p className="text-body">Aro 20cm - Peso aproximado: 2.5kg</p>
                <p className="text-body">50 docinhos</p>
                <p className="text-body">1 topper</p>
                <p className="text-price">R$ 240,00</p>
              </div>
              <a
                href="https://api.whatsapp.com/send?phone=5511948673143&text=Oi,%20vim%20do%20Instagram%20e%20gostaria%20de%20fazer%20uma%20encomenda!%20"
                target="blank"
              >
                <button className="card-button">Peça agora</button>
              </a>
            </div>

            <div className="card">
              <div className="card-details">
                <p className="text-title">Kit Bolo GG</p>
                <p className="text-body">Rende de 30 a 35 fatias</p>
                <p className="text-body">Aro 25cm - Peso aproximado: 3kg</p>
                <p className="text-body">100 docinhos</p>
                <p className="text-body">1 topper</p>
                <p className="text-price">R$ 350,00</p>
              </div>
              <a
                href="https://api.whatsapp.com/send?phone=5511948673143&text=Oi,%20vim%20do%20Instagram%20e%20gostaria%20de%20fazer%20uma%20encomenda!%20"
                target="blank"
              >
                <button className="card-button">Peça agora</button>
              </a>
            </div>
          </div>
        </div>

        <p className="features">
          <span>
            Apenas recheios tradicionais <br /> Duas opções de sabores
            tradicionais para os docinhos <br /> Alterações nos kits serão
            acrescidas no valor do pacote
          </span>
        </p>
      </div>
    </>
  );
}

export default Kits;
