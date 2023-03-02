import React from 'react';
import '../App.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h3>Pato Gestões</h3>
        <p>Endereço: Rua do Timão, 2011</p>
        <p>Telefone: (12) 1234-5678</p>
        <p>Email: RogerGuedes@Timao.com</p>
      </div>
      <div className="footer-social">
        <h3>Redes Sociais</h3>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">LinkedIn</a></li>
        </ul>
      </div>
      <div className="footer-form">
        <h3>Formulário de Contato</h3>
        <form>
          <input type="text" placeholder="Nome" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Mensagem"></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
