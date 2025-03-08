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
                            <h2>Clisman Dev<br/><span>Dev Web</span></h2>
                            <a href='https://www.youtube.com/watch?v=1UJw3csGAAE&list=RDerXQAH1L1Zs&index=2' target='_blanck'>Contrate</a>
                        </div>
                    </div>
                    <p className='descricao'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, corporis error molestias facere molestiae praesentium culpa. Praesentium ipsam, aliquam unde harum perspiciatis aliquid saepe reiciendis voluptas esse, in asperiores vero?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, corporis error molestias facere molestiae praesentium culpa. Praesentium ipsam, aliquam unde harum perspiciatis aliquid saepe reiciendis voluptas esse, in asperiores vero?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, corporis error molestias facere molestiae praesentium culpa. Praesentium ipsam, aliquam unde harum perspiciatis aliquid saepe reiciendis voluptas esse, in asperiores vero?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, corporis error molestias facere molestiae praesentium culpa. Praesentium ipsam, aliquam unde harum perspiciatis aliquid saepe reiciendis voluptas esse, in asperiores vero?</p>
                </div>
            </main>
        </div>
    )
}

export default SobreMim