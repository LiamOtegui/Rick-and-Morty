import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css"
import { NavLink } from "react-router-dom";

const Nav = ({ onSearch }) => {
    return (
        <nav className={style.search}>
            <SearchBar onSearch={onSearch}/>

            <button>
                <NavLink to='/about'>About</NavLink>
            </button>
            <button>
                <NavLink to='/home'>Home</NavLink>
            </button>
            <button>
                <NavLink to='/favorites'>Favorites</NavLink>
            </button>

        </nav>
    )
}

export default Nav;