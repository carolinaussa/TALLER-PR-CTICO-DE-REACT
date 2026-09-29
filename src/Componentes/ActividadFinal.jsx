function ActividadFinal() {
  const nombre = "PowerFit Gym"
  const eslogan = "Entrena hoy, transforma tu mañana"
  const direccion = "Calle 72n # 12-72"
  const horario = "Lunes a sábado, de 5:00 a.m. a 10:00 p.m."
  const telefono = "3232963158"
  
  const clases = [
    { id: 1, nombre: "Spinning", instructor: "Carolina Marrugo ", hora: "6:00 a.m.", cupos: 20 },
    { id: 2, nombre: "Yoga", instructor: "Andrés Ríos", hora: "7:00 a.m.", cupos: 15 },
    { id: 3, nombre: "Crossfit", instructor: "Marcela Torres", hora: "8:00 a.m.", cupos: 12 },
    { id: 4, nombre: "Zumba", instructor: "Diana Peña", hora: "12:00 m.", cupos: 25 },
    { id: 5, nombre: "Pilates", instructor: "Sofía Herrera", hora: "5:00 p.m.", cupos: 15 },
    { id: 6, nombre: "Boxeo", instructor: "Carlos Beltrán", hora: "6:00 p.m.", cupos: 10 },
    { id: 7, nombre: "Funcional", instructor: "Juan Pardo", hora: "7:00 p.m.", cupos: 18 },
    { id: 8, nombre: "Estiramiento", instructor: "Laura Gómez", hora: "8:00 p.m.", cupos: 20 },
  ]

  const servicios = ["Zona de pesas", "Zona de cardio", "Duchas y casilleros", "Asesoría nutricional"]

  
  return (
    <section>
      <h1>{nombre}</h1>
      <p>{eslogan}</p>

      <div className="tarjeta">
        <h2>Información general</h2>
        <p>Dirección: {direccion}</p>
        <p>Horario: {horario}</p>
        <p>Teléfono: {telefono}</p>
      </div>

      <h2>Servicios</h2>
      <ul>
        {servicios.map((servicio, index) => (
          <li key={index}>{servicio}</li>
        ))}
      </ul>

      <h2>Clases disponibles</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Clase</th>
            <th>Instructor</th>
            <th>Hora</th>
            <th>Cupos</th>
          </tr>
        </thead>
        <tbody>
          {clases.map((clase) => (
            <tr key={clase.id}>
              <td>{clase.id}</td>
              <td>{clase.nombre}</td>
              <td>{clase.instructor}</td>
              <td>{clase.hora}</td>
              <td>{clase.cupos}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default ActividadFinal