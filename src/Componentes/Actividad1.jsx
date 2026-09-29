function Actividad1() {
  // Variables con la informacion del libro
  const titulo = "Cien años de soledad"
  const autor = "Gabriel Garcia Marquez"
  const anio = 1967
  const editorial = "Editorial Sudamericana"
  const paginas = 471

  return (
    <section>
      <h2>Actividad 1. Informacion de un libro</h2>
      <h3>{titulo}</h3>
      <p>Autor: {autor}</p>
      <p>Año de publicacion: {anio}</p>
      <p>Editorial: {editorial}</p>
      <p>Numero de paginas: {paginas}</p>
    </section>
  )
}

export default Actividad1