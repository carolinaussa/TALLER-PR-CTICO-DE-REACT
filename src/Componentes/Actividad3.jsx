function Actividad3() {
  // Array de 8 canciones 
  const canciones = [
    { id: 1, titulo: "Hips Dont Lie", artista: "Shakira", album: "Oral Fixation 2", anio: 2006 },
    { id: 2, titulo: "La Camisa Negra", artista: "Juanes", album: "Mi Sangre", anio: 2004 },
    { id: 3, titulo: "Bohemian Rhapsody", artista: "Queen", album: "A Night at the Opera", anio: 1975 },
    { id: 4, titulo: "Billie Jean", artista: "Michael Jackson", album: "Thriller", anio: 1982 },
    { id: 5, titulo: "Hotel California", artista: "Eagles", album: "Hotel California", anio: 1976 },
    { id: 6, titulo: "Rolling in the Deep", artista: "Adele", album: "21", anio: 2010 },
    { id: 7, titulo: "Despacito", artista: "Luis Fonsi", album: "Vida", anio: 2017 },
    { id: 8, titulo: "Smells Like Teen Spirit", artista: "Nirvana", album: "Nevermind", anio: 1991 },
  ]

  return (
    <section>
      <h2>Actividad 3. Tabla de canciones</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Titulo</th>
            <th>Artista</th>
            <th>Album</th>
            <th>Año</th>
          </tr>
        </thead>
        <tbody>
          {canciones.map((cancion) => (
            <tr key={cancion.id}>
              <td>{cancion.id}</td>
              <td>{cancion.titulo}</td>
              <td>{cancion.artista}</td>
              <td>{cancion.album}</td>
              <td>{cancion.anio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default Actividad3