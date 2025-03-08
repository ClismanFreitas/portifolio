import htmlIcon from '../../assets/images/img-skills/html.png'
import cssIcon from '../../assets/images/img-skills/css.png'
import jsIcon from '../../assets/images/img-skills/js.png'
import reactIcon from '../../assets/images/img-skills/react.png'
import typescriptIcon from '../../assets/images/img-skills/typescript.png'
import gitIcon from '../../assets/images/img-skills/git.png'
import perfil2 from '../../assets/images/perfil/perfil-2.png'
import './skill.css'

const Skills = () => {
    return (
        <section className='container-skill'>
            <h2 className='titulo-skill'>Habilidades</h2>
            <ul className='skills'>
                <li className='htmlIcon'><img src={htmlIcon} alt="" /></li>
                <li className='cssIcon'><img src={cssIcon} alt="" /></li>
                <li className='jsIcon'><img src={jsIcon} alt="" /></li>
                <li className='reactIcon'><img src={reactIcon} alt="" /></li>
                <li className='typescriptIcon'><img src={typescriptIcon} alt="" /></li>
                <li className='gitIcon'><img src={gitIcon} alt="" /></li>
            </ul>
            <div className='descricao-skill'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi corrupti cupiditate repudiandae? Nulla necessitatibus excepturi ducimus corrupti natus ipsam maiores ab totam fugiat expedita, quos, molestiae nihil. Dolores, cum voluptate?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ut architecto iure iste, repellat est officia quia molestias provident! Quibusdam voluptates officia recusandae optio aut? Laboriosam accusamus harum hic quasi?Sed ut architecto iure iste, repellat est officia quia molestias provident! Quibusdam voluptates officia recusandae optio aut? Laboriosam accusamus harum hic quasi?</p>
                <div className='perfil2'><img src={perfil2} alt="" /></div>
            </div>
        </section>
    )
}

export default Skills