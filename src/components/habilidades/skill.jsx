import htmlIcon from '../../assets/images/img-skills/html.png'
import cssIcon from '../../assets/images/img-skills/css.png'
import jsIcon from '../../assets/images/img-skills/js.png'
import reactIcon from '../../assets/images/img-skills/react.png'
import typescriptIcon from '../../assets/images/img-skills/typescript.png'
import gitIcon from '../../assets/images/img-skills/git.png'
import perfil2 from '../../assets/images/perfil/perfil-2.png'
import './skill.css'
import jestIcon from '../../assets/images/img-skills/jest.png'


const Skills = () => {
    return (
        <section className='container-skill'>
            <h2 className='titulo-skill'>Habilidades</h2>
            <ul className='skills'>
                <li className='htmlIcon'><img src={htmlIcon} alt="Icone HTML" /></li>
                <li className='cssIcon'><img src={cssIcon} alt="Icone CSS" /></li>
                <li className='jsIcon'><img src={jsIcon} alt="Icone JavaScript" /></li>
                <li className='reactIcon'><img src={reactIcon} alt="Icone React" /></li>
                <li className='typescriptIcon'><img src={typescriptIcon} alt="Icone TypeScript" /></li> 
                <li className='gitIcon'><img src={gitIcon} alt="Icone Git" /></li>                     
                <li className='jestIcon'><img src={jestIcon} alt="Icone Jest" /></li>
            </ul>
            <div className='descricao-skill'>
                <p>Sou especializado em desenvolvimento de aplicativos web e móveis, com ênfase no Front-End. Utilizo HTML, CSS e JavaScript para criar interfaces interativas, responsivas e de alto desempenho. Com React, desenvolvo componentes dinâmicos e escaláveis, criando experiências de usuário fluidas e eficientes. O uso de TypeScript me permite garantir a robustez do código, adicionando tipagem estática e facilitando a manutenção e escalabilidade das aplicações. <br /><br /> Além disso, sou proficiente no uso de Git para versionamento de código, garantindo um fluxo de trabalho colaborativo eficiente e o controle das alterações no projeto. Também aplico testes automatizados com Jest, assegurando a confiabilidade e estabilidade das funcionalidades desenvolvidas, o que contribui diretamente para a qualidade final do produto. Estou sempre em busca de otimizar processos, melhorar a performance das aplicações e entregar soluções que atendam às necessidades reais dos usuários..</p>
                <div className='perfil2'><img src={perfil2} alt="" /></div>
            </div>
        </section>
    )
}

export default Skills