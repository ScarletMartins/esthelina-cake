import "./Produtos.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Produtos() {
  return (
    <>
      <div className="viewport-produtos">
        <Carousel 
        autoPlay 
        interval={3000}
        >
          <div>
            <img src="https://imgur.com/qQtDmEo.png" />
            <p className="legend">Docinhos variados para festa</p>
          </div>
          <div>
            <img src="https://imgur.com/eClBbk9.png" />
            <p className="legend">Bolo de aniversário temático - Moana Baby</p>
          </div>
          <div>
            <img src="https://imgur.com/qQtDmEo.png" />
            <p className="legend">Docinhos variados para festa</p>
          </div>
          <div>
            <img src="https://imgur.com/eClBbk9.png" />
            <p className="legend">Bolo de aniversário temático - Moana Baby</p>
          </div>
          <div>
            <img src="https://imgur.com/qQtDmEo.png" />
            <p className="legend">Docinhos variados para festa</p>
          </div>
          <div>
            <img src="https://imgur.com/eClBbk9.png" />
            <p className="legend">Bolo de aniversário temático - Moana Baby</p>
          </div>
        </Carousel>
      </div>
    </>
  );
}
export default Produtos;
