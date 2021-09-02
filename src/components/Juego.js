import { useContext } from "react";
import GameContext from "../context/GameContext";

const Juego = () => {
    const data = useContext(GameContext);
    
    return (
        <div>
            <h3>Juego</h3>
            <h3>Usuario: {data}</h3>
        </div>
    );
}
export default Juego;
