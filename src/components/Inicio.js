import { NavLink } from "react-router-dom";
import { useContext } from "react";
import GameContext from "../context/GameContext";

const Inicio = () => {
    const {login} = useContext(GameContext);
    const getValueInput = () =>{
        const secondState = {
            name: document.getElementById("inputName").value,
            level: document.getElementById("SelectDificultad").value,
            money: 0
          };
        
        login(secondState);
      }

    return (
        <div>
        <h1><center>Juego Open Trivia</center></h1>
            
            <div className="form-group">
                <label htmlFor="inputName">Usuario:</label>
                <input
                   
                    type="text"
                    className="form-control"
                    id="inputName"
                />
            </div>
            <br></br>
            <div>
                <select id="SelectCategoria" className="browser-default custom-select">
                <option>Categoría</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                </select>
            </div>
            <br></br>
            <div>
                <select id="SelectDificultad" className="browser-default custom-select">
                <option>Dificultad</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                </select>
            </div>
            <br></br>
            
            <NavLink exact to="/juego" onClick={getValueInput}>Ingresar</NavLink>
        </div>
    );
};

export default Inicio;
