function Actividad5() {
  // Array con 8 videojuegos
  const videojuegos = [
    { id: 1, nombre: "Zelda Breath of the Wild", plataforma: "Nintendo Switch", genero: "Aventura", anio: 2017 },
    { id: 2, nombre: "God of War", plataforma: "PlayStation 4", genero: "Acción", anio: 2018 },
    { id: 3, nombre: "Minecraft", plataforma: "PC", genero: "Sandbox", anio: 2011 },
    { id: 4, nombre: "FIFA 23", plataforma: "Multiplataforma", genero: "Deportes", anio: 2022 },
    { id: 5, nombre: "Halo Infinite", plataforma: "Xbox Series X", genero: "Disparos", anio: 2021 },
    { id: 6, nombre: "Super Mario Odyssey", plataforma: "Nintendo Switch", genero: "Plataformas", anio: 2017 },
    { id: 7, nombre: "The Witcher 3", plataforma: "PC", genero: "RPG", anio: 2015 },
    { id: 8, nombre: "Celeste", plataforma: "PC", genero: "Plataformas", anio: 2018 },
  ]

  return (
    <section>
      <h2>Actividad 5. Tabla de videojuegos</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Plataforma</th>
            <th>Género</th>
            <th>Año de lanzamiento</th>
          </tr>
        </thead>
        <tbody>
          {videojuegos.map((juego) => (
            <tr key={juego.id}>
              <td>{juego.id}</td>
              <td>{juego.nombre}</td>
              <td>{juego.plataforma}</td>
              <td>{juego.genero}</td>
              <td>{juego.anio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default Actividad5