const URL = 'https://rickandmortyapi.com/api/character'
const axios = require('axios')

const getCharById = async (req, res) => {
    try {
        const { id } = req.params
        const { data } = await axios(`${URL}/${id}`)

        if (!data.name) throw Error(`ID: ${id} not found`)
        // En esta linea iria if(data.name) pero no es necesario, porque arriba se contempla que no existe, por ende si sigue, es por que si existe.
        const character = {
            id: data.id,
            name: data.name,
            status: data.status,
            species: data.species,
            origin: data.origin,
            image: data.image,
            gender: data.gender
        }
        return res.status(200).json(character)

    } catch (error) {
        return error.message.includes('ID') // Preguntamos si dentro de la propiedad message del objeto error se incluye 'ID'.
        ? res.status(404).send(error.message)
        : res.status(500).send(error.message)
    }
}

// const getCharById = (req, res) => {
//     const { id } = req.params;
//     axios(`${URL}/${id}`)
//     .then((response) => response.data)
//     .then(({ name, status, species, origin, image, gender }) => { // id no lo pongo porque lo invoque arriba.
//         if (name) { // puede ser name o cualquier otra de estas propiedades.
//             const character = {
//                 id,
//                 name,
//                 status,
//                 species,
//                 origin,
//                 image,
//                 gender
//             }
//             return res.status(200).json(character);
//         }
//         return res.status(404).send('Not found')
//     })
//     .catch(error => res.status(500).send(error.message))
// }


module.exports = {
    getCharById
}