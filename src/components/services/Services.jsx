import React from "react";
import { useState } from "react";
import "./services.css"

const Services = () => {
     const [toggleState, setToggleState] = useState(0);


     const toggleTab = (index) => {
          setToggleState(index);
     }

  return (
    <section className="services section" id="services">
      <h2 className="section_title">Serviços</h2>
      <span className="section_subtitle">O que eu ofereci</span>

      <div className="services_container container grid">
        <div className="services_content">
          <div>
            <i className="uil uil-web-grid services_icon"></i>
            <h3 className="services_title">Produto <br /> Designer</h3>
          </div>

          <span className="services_button" onClick={() => toggleTab(1)}>
            Ver Mais
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>

          <div className={toggleState === 1 ? "services_modal active_modal" : "services_modal"}>
            <div className="services_modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

              <h3 className="services_modal-title">Produto Designer</h3>
              <p className="services_modal-description">
                Serviços com de 1 ano de experiência. Produzindo e
                providenciando soluções de problema para clientes em minha área
              </p>

              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                  Explorar fluxos ou layouts alternativos, com base no feedback e outras entradas de clientes e partes interessadas
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Avaliar e testar essas ideias com nosso público-alvo
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Design e maquetes de produtos
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services_content">
          <div>
            <i className="uil uil-arrow services_icon"></i>
            <h3 className="services_title">Ui/Ux <br /> Designer </h3>
          </div>

          <span className="services_button" onClick={() => toggleTab(2)}>
            Ver Mais
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>

          <div className={toggleState === 2 ? "services_modal active_modal" : "services_modal"}>
            <div className="services_modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

              <h3 className="services_modal-title">Ui/Ux Designer</h3>
              <p className="services_modal-description">
                Serviços com de 1 ano de experiência. Produzindo e
                providenciando soluções de problema para clientes em minha área
              </p>

              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Eu desenvolvo a interface de usuário
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Desenvolvimento de páginas Web
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Crio interações de elementos UX
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services_content">
          <div>
            <i className="uil uil-database services_icon"></i>
            <h3 className="services_title">Banco de Dados <br /> Gerenciador</h3>
          </div>

          <span className="services_button" onClick={() => toggleTab(3)}>
            Ver Mais
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>

          <div className={toggleState === 3 ? "services_modal active_modal" : "services_modal"}>
            <div className="services_modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

              <h3 className="services_modal-title">Gerenciador de Banco de Dados</h3>
              <p className="services_modal-description">
                Serviços com de 1 ano de experiência. Produzindo e
                providenciando soluções de problema para clientes em minha área
              </p>

              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Eu desenvolvo a interface de usuário
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Desenvolvimento de páginas Web
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Crio interações de elementos UX
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Design e maquetes de produtos
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

 

      </div>
    </section>
  );
};

export default Services;
