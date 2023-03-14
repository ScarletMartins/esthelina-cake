import React from "react";
import "./Contato.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap" rel="stylesheet"></link>

function Contato() {
  return (
    <div>
      <div className="contact-bk">
        
      </div>

      <div className="contact-footer">
        <div className="address">
        <p>Jardim São Francisco, Embu Das Artes - São Paulo</p>
        <p>49.645.548/0001-88</p>
        <p>estelinacake@gmail.com</p>
        </div>
        <div className="social">
        <a href="https://www.instagram.com/esthelinacake/" target="blank">
          <InstagramIcon className="social-icon" />
          <p>@esthelinacake</p>
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5511948673143&text=Oi,%20vim%20do%20Instagram%20e%20gostaria%20de%20fazer%20uma%20encomenda!%20"
          target="blank"
        >
          <WhatsAppIcon className="social-icon" />
          <p>(11) 94867-3143</p>
        </a>

        </div>
      </div>
    </div>
  );
}

export default Contato;
