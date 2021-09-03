import { NavLink } from "react-router-dom";
import { useContext } from "react";
import GameContext from "../context/GameContext";

const Inicio = () => {
    const {login} = useContext(GameContext);
    const getValueInput = () =>{
        let VarCategory = document.getElementById("SelectCategoria").value;
        let varLevel = document.getElementById("SelectDificultad").value;

        const secondState = {
            name: document.getElementById("inputName").value,
            level: varLevel,
            category: VarCategory,
            money: 0
          };
        login(secondState);
        construirURLAPI(VarCategory, varLevel);
      };

    const construirURLAPI = (category,level) => {
        let urlAPI = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${level}&type=multiple`
        console.log(urlAPI);
    };
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
                <option value="21">Sports</option>
                <option value="22">Geography</option>
                <option value="23">History</option>
                <option value="27">Animals</option>
                <option value="28">Vehicles</option>
                </select>
            </div>
            <br></br>
            <div>
                <select id="SelectDificultad" className="browser-default custom-select">
                <option>Dificultad</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
                </select>
            </div>
            <br></br>
            
            <NavLink exact to="/juego" onClick={getValueInput}>Ingresar</NavLink>
        </div>
    );
};

export default Inicio;
