
import "./project.css"
import Designer from "../../assets/images/sliders/Projeto-Designer.png"
import GitHub from "../../assets/images/sliders/Projeto-GitHub.png"
import AttackOnTitan from "../../assets/images/sliders/Projeto-Attack-on-titan.png"
import Formulario from "../../assets/images/sliders/Projeto-Formulario.png"

const Projetos = () => {

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
                        <img src={Designer}/>
                        <div className="btn"><a href="https://clismanfreitas.github.io/Projeto-Elivaldo-Designer/" target="_blank">Ver Projeto</a></div>
                    </div>
                    <div className="slide">
                        <img src={GitHub}/> 
                        <div className="btn"><a href="https://clismanfreitas.github.io/Projeto-Api-Github/" target="_blank">Ver Projeto</a></div>
                    </div>
                    <div className="slide">
                        <img src={AttackOnTitan}/> 
                        <div className="btn"><a href="https://clismanfreitas.github.io/projeto-Attack-on-titan/" target="_blank">Ver Projeto</a></div>
                    </div>
                    <div className="slide">
                        <img src={Formulario}/> 
                        <div className="btn"><a href="https://clismanfreitas.github.io/Formulario/" target="_blank">Ver Projeto</a></div>
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
    )
}


export default Projetos