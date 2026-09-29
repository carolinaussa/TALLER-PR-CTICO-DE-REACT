import Actividad1 from "./Componentes/Actividad1"
import Actividad2 from "./Componentes/Actividad2"
import Actividad3 from "./Componentes/Actividad3"
import Actividad4 from "./Componentes/Actividad4"
import Actividad5 from "./Componentes/Actividad5"
import Actividad6 from "./Componentes/Actividad6"
import Actividad7 from "./Componentes/Actividad7"
import Actividad8 from "./Componentes/Actividad8"
import ActividadFinal from "./Componentes/ActividadFinal"
import "./App.css"

function App() {
  return (
    <div className="contenedor">
      <h1>Taller practico de React</h1>
      <Actividad1 />
      <Actividad2 />
      <Actividad3 />
      <Actividad4 />
      <Actividad5 />
      <Actividad6 />
      <Actividad7 />
      <Actividad8 />
      <ActividadFinal />
    </div>
  )
}

export default App