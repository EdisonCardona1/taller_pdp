import { useContext } from "react";
import GameContext from "../context/GameContext"

const Navbar = () => {
    const {User} = useContext(GameContext);
    
    return (
        <div>
            <h1>NavBar</h1>
            <h3>User: {User.name}</h3>
            <h3>level: {User.level}</h3>
            <h3>Money: {User.money}</h3>
        </div>
    )
}

export default Navbar
