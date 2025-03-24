import './sobre.css'
import PerfilIcon from '../../assets/images/perfil/perfil.png'

const SobreMim = () => {
    return (
        <div className='container-conteudo'>
            <main className='conteudo'>
                <h3>Sobre Mim</h3>
                <div className='sobre'>
                    <div className='caixa'>
                        <div className='conteudo-perfil'>
                            <img className='foto' src={PerfilIcon} alt="" />
                            <span>👨‍💻</span>
                            <h2>Clisman Dev<br /><span>Dev Web</span></h2>
                            <a href='https://www.linkedin.com/in/clisman-freitas-8b748a2b1/' target='_blanck'>Contrate</a>
                        </div>
                    </div>
                    <p className='descricao'> Desde o início da minha jornada no mundo da tecnologia, sempre tive um fascínio pelo potencial de transformar o cotidiano por meio da programação. A minha curiosidade natural me levou a explorar diferentes áreas, começando pelo desenvolvimento web, onde pude aprender o Front-End para criar interfaces cada vez mais intuitivas e eficientes.
                        <br />
                        <br />
                    Minha trajetória é marcada pelo aprendizado contínuo e pela vontade de me desafiar com novos projetos. A cada etapa, busco sempre novas formas de otimizar processos e contribuir para o desenvolvimento de soluções tecnológicas que atendam às necessidades reais dos usuários e, ao mesmo tempo, se alinhem aos objetivos dos negócios. Acredito que a tecnologia, aliada à criatividade, é uma ferramenta poderosa para a construção de um futuro mais eficiente e conectado.
                    </p>
                </div>
            </main>
        </div>
    )
}

export default SobreMim