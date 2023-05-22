import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from '../src/components/Nav/Nav'
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';


// const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
// const API_KEY = '';

const email = 'liam@gmail.com';
const password = '123asd';


function App() {

   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   const location = useLocation();
   const navigate = useNavigate();
   
   const login = (userData) => {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`)
      .then(({ data }) => {
         const { access } = data;
         setAccess(access);
         access && navigate('/home');
      });
   }

   useEffect(() => {
      !access && navigate('/')
   }, [access])

   const onSearch = (id) => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(response => response.data)
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== Number(id))
      setCharacters(charactersFiltered)
   }

   const backgroundStyle = {
      backgroundImage: 'url(./assets/fondo.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      height: '100vh'
    };
   

   return (
      <div className='App' style={backgroundStyle}>

         {
            location.pathname !== '/' ? <Nav onSearch={onSearch} /> : null
         }

         <Routes>
            <Route path='/' element={<Form login={login} />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/favorites' element={<Favorites />} />
         </Routes>
      </div>
   );
}

export default App;