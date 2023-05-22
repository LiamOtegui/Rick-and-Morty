const URL = 'https://rickandmortyapi.com/api/character'
const axios = require('axios')

const getCharById = (req, res) => {
    const { id } = req.params;
    axios(`${URL}/${id}`)
    .then((response) => response.data)
    .then(({ name, status, species, origin, image, gender }) => { // id no lo pongo porque lo invoque arriba.
        if (name) { // puede ser name o cualquier otra de estas propiedades.
            const character = {
                id,
                name,
                status,
                species,
                origin,
                image,
                gender
            }
            return res.status(200).json(character);
        }
        return res.status(404).send('Not found')
    })
    .catch(error => res.status(500).send(error.message))
}


module.exports = {
    getCharById
}