function Actividad8() {
  // Array con 10 platos del menu
  const platos = [
    { id: 1, nombre: "Bandeja paisa", categoria: "Plato fuerte", precio: 32000 },
    { id: 2, nombre: "Ajiaco santafereño", categoria: "Sopa", precio: 28000 },
    { id: 3, nombre: "Empanadas x3", categoria: "Entrada", precio: 9000 },
    { id: 4, nombre: "Arepa con queso", categoria: "Entrada", precio: 7000 },
    { id: 5, nombre: "Sancocho de gallina", categoria: "Sopa", precio: 26000 },
    { id: 6, nombre: "Pescado frito", categoria: "Plato fuerte", precio: 34000 },
    { id: 7, nombre: "Tres leches", categoria: "Postre", precio: 11000 },
    { id: 8, nombre: "Arroz con leche", categoria: "Postre", precio: 8000 },
    { id: 9, nombre: "Limonada de coco", categoria: "Bebida", precio: 9500 },
    { id: 10, nombre: "Jugo de lulo", categoria: "Bebida", precio: 7500 },
  ]

  
  return (
    <section>
      <h2>Actividad 8. Menú de restaurante</h2>
      {platos.map((plato) => (
        <div className="plato" key={plato.id}>
          <h3>{plato.nombre}</h3>
          <p>Código: {plato.id}</p>
          <p>Categoría: {plato.categoria}</p>
          <p>Precio: ${plato.precio}</p>
        </div>
      ))}
    </section>
  )
}

export default Actividad8