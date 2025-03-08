import Skills from "./components/habilidades/skill"
import Inicio from "./components/inicio/inicio"
import Projetos from "./components/projetos/projeto"
import Rodape from "./components/rodape/rodape"
import SobreMim from "./components/sobre/sobre"


function App() {
  return (
    <>
      <Inicio />
      <SobreMim />
      <Skills />
      <Projetos />
      <Rodape />
    </>
  )
}

export default App
