function Actividad4() {
  // Array con 10 animales
  const animales = [
    { nombre: "Leon", especie: "Panthera leo", habitat: "Sabana" },
    { nombre: "Delfin", especie: "Tursiops truncatus", habitat: "Oceano" },
    { nombre: "Aguila real", especie: "Aquila chrysaetos", habitat: "Montana" },
    { nombre: "Oso polar", especie: "Ursus maritimus", habitat: "Artico" },
    { nombre: "Jaguar", especie: "Panthera onca", habitat: "Selva" },
    { nombre: "Camello", especie: "Camelus dromedarius", habitat: "Desierto" },
    { nombre: "COndor", especie: "Vultur gryphus", habitat: "Cordillera de los Andes" },
    { nombre: "Pinguino", especie: "Aptenodytes forsteri", habitat: "Antartida" },
    { nombre: "Rana dardo", especie: "Dendrobatidae", habitat: "Selva tropical" },
    { nombre: "Tortuga marina", especie: "Chelonia mydas", habitat: "Mares calidos" },
  ]

  return (
    <section>
      <h2>Actividad 4. Lista de animales</h2>
      <div className="fila">
        {animales.map((animal, index) => (
          <div className="tarjeta" key={index}>
            <h3>{animal.nombre}</h3>
            <p>Especie: {animal.especie}</p>
            <p>Habitat: {animal.habitat}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Actividad4