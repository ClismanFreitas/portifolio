import React, { useState, useEffect } from "react";
import "./project.css";

import Designer from "../../assets/images/sliders/Projeto-Designer.png";
import GitHub from "../../assets/images/sliders/Projeto-GitHub.png";
import AttackOnTitan from "../../assets/images/sliders/Projeto-Attack-on-titan.png";
import Formulario from "../../assets/images/sliders/Projeto-Formulario.png";

import MobileDesigner from "../../assets/images/sliders/iPhoneDesigner.png";
import MobileGitHub from "../../assets/images/sliders/iPhoneGitHub.png";
import MobileAttackOnTitan from "../../assets/images/sliders/iPhoneAttack.png";
import MobileFormulario from "../../assets/images/sliders/iPhoneFormulario.png";

const Projetos = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  
    useEffect(() => {
      const verificarRedimensionamento = () => {
        setIsMobile(window.innerWidth <= 600);
      };
  
      window.addEventListener("resize", verificarRedimensionamento);
  
      return () => {
        window.removeEventListener("resize", verificarRedimensionamento);
      };
    }, []);

  return (
    <section className="container-projeto">
      <h2 className="titulo-projeto">Projetos</h2>
      <div className="slider">
        <div className="slides">
          <input type="radio" name="radio-btn" id="radio1" />
          <input type="radio" name="radio-btn" id="radio2" />
          <input type="radio" name="radio-btn" id="radio3" />
          <input type="radio" name="radio-btn" id="radio4" />

          <div className="slide primeiro">
            <img
              src={isMobile ? MobileDesigner : Designer}
              alt="Descrição do Designer"
            />
            <div className="btn">
              <a href="https://clismanfreitas.github.io/Projeto-Elivaldo-Designer/" target="_blank">
                Ver Projeto
              </a>
            </div>
          </div>

          <div className="slide">
            <img
              src={isMobile ? MobileGitHub : GitHub}
              alt="Descrição do GitHub"
            />
            <div className="btn">
              <a href="https://clismanfreitas.github.io/Projeto-Api-Github/" target="_blank">
                Ver Projeto
              </a>
            </div>
          </div>

          <div className="slide">
            <img
              src={isMobile ? MobileAttackOnTitan : AttackOnTitan}
              alt="Descrição do Attack On Titan"
            />
            <div className="btn">
              <a href="https://clismanfreitas.github.io/projeto-Attack-on-titan/" target="_blank">
                Ver Projeto
              </a>
            </div>
          </div>

          <div className="slide">
            <img
              src={isMobile ? MobileFormulario : Formulario}
              alt="Descrição do Formulário"
            />
            <div className="btn">
              <a href="https://clismanfreitas.github.io/Formulario/" target="_blank">
                Ver Projeto
              </a>
            </div>
          </div>

          <div className="navegacao">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
            <div className="auto-btn4"></div>
          </div>
        </div>
        <div className="manual-navegacao">
          <label htmlFor="radio1" className="manual-btn"></label>
          <label htmlFor="radio2" className="manual-btn"></label>
          <label htmlFor="radio3" className="manual-btn"></label>
          <label htmlFor="radio4" className="manual-btn"></label>
        </div>
      </div>
    </section>
  );
};

export default Projetos;
