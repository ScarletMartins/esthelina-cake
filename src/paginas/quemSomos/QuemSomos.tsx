import React from "react";
import "./QuemSomos.css";
<link href="https://fonts.googleapis.com/css2?family=Rouge+Script&display=swap" rel="stylesheet"></link>;


function QuemSomos() {
  return (
    <>
      <div className="bk-quemsomos">
        <div className="quemsomos">
          <p className="nossahistoria">Nossa história</p>
          <p>
            Somos um negócio iniciante no ramo, criado em 2022 pelo nosso
            fundador, um ex-vendedor apaixonado por fazer doces. Ele sempre
            sonhou em ter seu próprio negócio e decidiu que era hora de seguir
            sua paixão por doces e bolos e transformá-la em realidade. Com muito
            entusiasmo e dedicação, trabalhou duro em receitas deliciosas e
            desenvolvendo kits de bolo e doces que atendam às necessidades de
            nossos clientes. Nós nos esforçamos para oferecer a melhor qualidade
            possível em todos os nossos produtos, e estamos sempre em busca de
            novas receitas e ideias para tornar nossos produtos ainda melhores.
            Esperamos que você goste dos nossos produtos tanto quanto nós
            gostamos de fazê-los. Obrigado por escolher nossos bolos e doces
            para tornar seus eventos ainda mais especiais!
          </p>
        </div>
        <div className="quemsomos-img">
          <img src="https://imgur.com/KFhPjaW.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default QuemSomos;
