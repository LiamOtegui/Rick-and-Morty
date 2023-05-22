import style from './SearchBar.module.css'
import { useState } from 'react';

export default function SearchBar({onSearch}) {

   const [id, setId] = useState('')
   const handleChange = (event) => {
      setId(event.target.value) 
   }

   return (
      <div>
         <input type='search' className={style.input} onChange={handleChange} value={id} />
         <button className={style.button} onClick={() => {onSearch(id); setId('')}}>Agregar</button>
      </div>
   );
}
