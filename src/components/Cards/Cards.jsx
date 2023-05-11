import Card from '../Card/Card';
import style from './Cards.module.css'

export default function Cards({ characters, onClose }) {

   return (
      <div className={style.container}> {

         characters.map(({id, origin, ...rest}) => {
            /*Todas esas props de arriba vienen del componente CARDS, no del de CARD; las props que hay en card 
            son de la constante Rick que esta en data.js, mientras que las props de cards vienen del export DEFAULT
            (que tambien estan en el archivo data.js).*/
            return (
               <Card
                  key={id}
                  /*La KEY es una propiedad que me pide React para poder crear las distintas cartas que yo quiera renderizar,
                  porque si no pusiera la key, entonces las cartas serian la misma (supuestamente).*/
                  id={id}
                  origin={origin.name}
                  onClose={onClose}
                  {...rest}
                  // name={name}
                  // status={status}
                  // species={species}
                  // gender={gender}
                  // image={image}
                  // onClose={onClose}
               />
            )
         })
         
         }
      </div>
   );
}