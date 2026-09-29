function Actividad7() {
  // Array con 10 películas
  const peliculas = [
    { id: 1, titulo: "El Padrino", director: "Francis Ford Coppola", genero: "Drama", anio: 1972, duracion: "175 min" },
    { id: 2, titulo: "Titanic", director: "James Cameron", genero: "Romance", anio: 1997, duracion: "195 min" },
    { id: 3, titulo: "Inception", director: "Christopher Nolan", genero: "Ciencia ficción", anio: 2010, duracion: "148 min" },
    { id: 4, titulo: "Parásitos", director: "Bong Joon-ho", genero: "Suspenso", anio: 2019, duracion: "132 min" },
    { id: 5, titulo: "Coco", director: "Lee Unkrich", genero: "Animación", anio: 2017, duracion: "105 min" },
    { id: 6, titulo: "Gladiador", director: "Ridley Scott", genero: "Acción", anio: 2000, duracion: "155 min" },
    { id: 7, titulo: "Interestelar", director: "Christopher Nolan", genero: "Ciencia ficción", anio: 2014, duracion: "169 min" },
    { id: 8, titulo: "Pulp Fiction", director: "Quentin Tarantino", genero: "Crimen", anio: 1994, duracion: "154 min" },
    { id: 9, titulo: "El viaje de Chihiro", director: "Hayao Miyazaki", genero: "Animación", anio: 2001, duracion: "125 min" },
    { id: 10, titulo: "Matrix", director: "Hermanas Wachowski", genero: "Ciencia ficción", anio: 1999, duracion: "136 min" },
  ]

  return (
    <section>
      <h2>Actividad 7. Catálogo de películas</h2>
      <div className="fila">
        {peliculas.map((pelicula) => (
          <div className="tarjeta" key={pelicula.id}>
            <h3>{pelicula.titulo}</h3>
            <p>ID: {pelicula.id}</p>
            <p>Director: {pelicula.director}</p>
            <p>Género: {pelicula.genero}</p>
            <p>Año: {pelicula.anio}</p>
            <p>Duración: {pelicula.duracion}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Actividad7