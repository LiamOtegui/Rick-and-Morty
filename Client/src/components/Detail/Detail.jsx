import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "../Card/Card";

// const URL_BASE = 'https://be-a-rym.up.railway.app/api/character' (Esto creo que va mas adelante).
// const API_KEY = '' (Y esto tambien, que me falta que me manden por mail la key).

const Detail = ({}) => {

    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return (
        <div>
            <h2>'{character?.name}'</h2>
            <img src={character?.image} alt={character?.name} />
            <h2>'{character?.status}'</h2>
            <h2>'{character?.species}'</h2>
            <h2>'{character?.gender}'</h2>
            <h2>'{character?.origin?.name}'</h2>
        </div>
    )
}

export default Detail;