import React from "react";
import GitHubIcon from "../../assets/icons/github.png";
import LinkedinIcon from "../../assets/icons/linkedin.png";
import ParticlesBackground from "../background/ParticlesBackground";
import SetaIcon from "../../assets/icons/seta.png";
import './inicio.css'

const Inicio = () => {
    return (
       <div className="inicio-section">
        <ParticlesBackground />
        <header className='container'>
            <ParticlesBackground />
            <p>Olá! Meu nome é</p>
            <h1 className='nome-Autor'>Clisman Freitas</h1>
            <div className="txt-animado">
                Develop Front-end
            </div>
            <div className='icons'>
                <a href="https://www.linkedin.com/in/clisman-freitas-8b748a2b1/" target="_blank" rel="noopener noreferrer" ><img src={LinkedinIcon} alt="" /></a>
                <a href="https://github.com/ClismanFreitas" target="_blank" rel="noopener noreferrer" ><img src={GitHubIcon} alt="" /></a>
            </div>
            <div className='pulando'>
                <img  src={SetaIcon} alt="" />
            </div>
        </header>
        </div> 
    )
}


export default Inicio