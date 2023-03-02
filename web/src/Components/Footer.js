import React from 'react';
import '../App.css';

function Footer() {
  return (
    <footer className="rodape">
      <div className="rodape-info">
        <h3>Pato Gestões</h3>
        <p>Endereço: Rua do Timão, 2011</p>
        <p>Telefone: (12) 1234-5678</p>
        <p>Email: RogerGuedes@Timao.com</p>
      </div>
      <div className="rodape-social">
        <h3>Redes Sociais</h3>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">LinkedIn</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
