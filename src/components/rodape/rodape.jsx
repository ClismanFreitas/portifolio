import "./rodape.css"
import Instagram from "../../assets/icons/social.png"
import Linkedi from "../../assets/icons/linkedi.png"
import GitHu from "../../assets/icons/githu.png"
import Email from "../../assets/icons/mail.png"


const Rodape = () => {
    return (
        <footer className="baixo">
            <ul className="lista-contato">
                <li className="email">
                    <a href="mailto:clismanfreitas.com@gmail.com" className="link-email"> <img src={Email} alt="Email" />Clismanfreitas.com@gmail.com</a>
                    <div className="curriculo">
                    <a href="">Baixar Currículo</a>
                </div>
                </li>
                <hr />
                <li className="links">
                    <a href="https://www.instagram.com/clismanfreiitas_1?igsh=N3o1aTQwZWh5OHJk" target="_blank"><img src={Instagram}  alt="Link Instagram"></img></a>
                    <a href="https://www.linkedin.com/in/clisman-freitas-8b748a2b1/" target="_blank"><img src={Linkedi} alt="Link Linkedin"></img></a>
                    <a href="https://github.com/ClismanFreitas" target="_blank"><img src={GitHu} alt="Link GitHub"></img></a>
                </li>
                <p className="creditos">Clisman Freitas</p>
            </ul>
        </footer>
    )
}

export default Rodape