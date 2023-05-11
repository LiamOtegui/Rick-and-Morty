import style from './Card.module.css'
import { NavLink } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';


function Card({id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites}) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         removeFav(id)
      }
      else {
         setIsFav(true);
         addFav({ id, name, species, gender, image, origin, onClose })
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);


   return (
      <div className={style.container}>
         
         <button onClick={() => onClose(id)} className={style.boton}>X</button>

         <NavLink to={`/detail/${id}`}>
            <h2 className={style.name}>{name}</h2>
         </NavLink>
         
         <h2 className={style.status}>{status}</h2>
         <h2 className={style.species}>{species}</h2>
         <h2 className={style.gender}>{gender}</h2>
         <h2>{origin}</h2>
         <img className={style.image} src={image} alt=''/>
         
         <button onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>
      </div>
   );
}


const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}


export default connect (
   mapStateToProps,
   mapDispatchToProps
)(Card)