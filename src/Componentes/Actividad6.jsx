function Actividad6() {
  // Array con 11 jugadores
  const jugadores = [
    { numero: 1, nombre: "Camilo", apellido: "Vargas", posicion: "Portero", edad: 29 },
    { numero: 2, nombre: "Daniel", apellido: "Muñoz", posicion: "Defensa", edad: 27 },
    { numero: 3, nombre: "Yerry", apellido: "Mina", posicion: "Defensa", edad: 30 },
    { numero: 4, nombre: "Davinson", apellido: "Sánchez", posicion: "Defensa", edad: 28 },
    { numero: 5, nombre: "Johan", apellido: "Mojica", posicion: "Defensa", edad: 32 },
    { numero: 6, nombre: "Wilmar", apellido: "Barrios", posicion: "Mediocampista", edad: 31 },
    { numero: 8, nombre: "Jefferson", apellido: "Lerma", posicion: "Mediocampista", edad: 30 },
    { numero: 10, nombre: "James", apellido: "Rodríguez", posicion: "Mediocampista", edad: 35 },
    { numero: 7, nombre: "Luis", apellido: "Díaz", posicion: "Delantero", edad: 29 },
    { numero: 9, nombre: "Rafael", apellido: "Borré", posicion: "Delantero", edad: 30 },
    { numero: 11, nombre: "Jhon", apellido: "Arias", posicion: "Extremo", edad: 28 },
  ]

  return (
    <section>
      <h2>Actividad 6. Equipo de fútbol</h2>
      <table>
        <thead>
          <tr>
            <th>Número</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Posición</th>
            <th>Edad</th>
          </tr>
        </thead>
        <tbody>
          {jugadores.map((jugador) => (
            <tr key={jugador.numero}>
              <td>{jugador.numero}</td>
              <td>{jugador.nombre}</td>
              <td>{jugador.apellido}</td>
              <td>{jugador.posicion}</td>
              <td>{jugador.edad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default Actividad6