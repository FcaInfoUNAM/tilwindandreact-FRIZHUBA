const Card = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-80">
      <h2 className="text-xl font-bold mb-2">Título de la tarjeta</h2>
      <p className="text-gray-700 mb-4">
        Este es un texto descriptivo para la tarjeta. Aquí podrías poner información interesante.
      </p>
      <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded">
        ¡Haz clic!
      </button>
    </div>
  )
}

export default Card
