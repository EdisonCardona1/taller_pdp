import { useContext } from "react";
import GameContext from "../context/GameContext"
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const {User,logout} = useContext(GameContext);
    
    return (
        <div>
            <h1>NavBar</h1>
            <h3>User: {User.name}</h3>
            <h3>level: {User.level}</h3>
            <h3>Money: {User.money}</h3>
            <NavLink exact to="/" onClick={logout}>Salir</NavLink>
        </div>
    )
}

export default Navbar
