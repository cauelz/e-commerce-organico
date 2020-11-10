import React from "react";
import '../Footer/style-footer.css';
import { Image } from "react-bootstrap";

const Footer = () => {
    return (
      <>
      <section class="footer-area">
        <div class='links'>
          <ul id='links-1' type='none'>
            <li><h5>Orgâni.co</h5></li>
            <li>Institucional</li>
            <li>Política de Troca e Devolução</li>
            <li>Trabalhe Conosco</li>
          </ul>
          <ul id='links-2' type='none'>
            <li><h5>FAQ</h5></li>
            <li>Perguntas Frequentes</li>
            <li>Entre em contato</li>
          </ul>
          <ul id='links-3' type='none'>
            <li><h5>Mídias Sociais</h5></li>
              <li id='rede-social'>
                <li xs={6} md={4}>
                <Image src="https://lh3.googleusercontent.com/proxy/hgzwKy9DAH3eWYoSiV5n6R4czt7t7wfhs7goBE6A7jfmHokMT7DA-hXDZs7JfZ_HUQ9039ea4HJnbdjesqjygZw" id='instagram' />
                </li>
                <li xs={6} md={4}>
                <Image src="https://cdn.icon-icons.com/icons2/478/PNG/128/facebook_47004.png" id='facebook' />
                </li>
                <li xs={6} md={4}>
                <Image src="https://icons.iconarchive.com/icons/sicons/basic-round-social/256/twitter-icon.png" id='twitter' />
                </li>
              </li>  
          </ul>
        </div>
        <div class='meio-pagamento'>
        <Image src="https://www.ldsports.com.br/arquivos/meios-de-pagamento2.png?v=637290620269800000" id='pagamento' />
        </div>
        <div class="footer-copyright text-center py-3">Todos os Direitos Reservados Orgâni.co &copy; 2020</div>
      </section>
      
      </>
    );
  }

export default Footer;