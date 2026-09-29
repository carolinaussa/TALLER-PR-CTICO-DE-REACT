function Actividad2() {
  // Array con 10 ciudades de Colombia
  const ciudades = [
    "Bogota",
    "Medellin",
    "Cali",
    "Barranquilla",
    "Cartagena",
    "Bucaramanga",
    "Pereira",
    "Santa Marta",
    "Manizales",
    "Popayan",
  ]

  return (
    <section>
      <h2>Actividad 2. Lista de ciudades</h2>
      <ul>
        {ciudades.map((ciudad, index) => (
          <li key={index}>{ciudad}</li>
        ))}
      </ul>
    </section>
  )
}

export default Actividad2