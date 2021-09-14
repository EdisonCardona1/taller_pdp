import { NavLink } from "react-router-dom";
import { useContext } from "react";
import GameContext from "../context/GameContext";

let camposVacios=true;

const Inicio = () => {
    const {login} = useContext(GameContext);
    const validarCamposVacios = () =>{
        let VarName = document.getElementById("inputName").value;
        let VarCategory = document.getElementById("SelectCategoria").value;
        let varLevel = document.getElementById("SelectDificultad").value;

        if(VarName === "" || VarCategory === "Categoría" || varLevel === "Dificultad"){
            alert("Campos vacíos");
            console.log ("Campo vacio: "+ camposVacios)
        }else{
            camposVacios=false;
            
        }
    }
    const getValueInput = () =>{
        let VarCategory = document.getElementById("SelectCategoria").value;
        let varLevel = document.getElementById("SelectDificultad").value;

        const secondState = {
            name: document.getElementById("inputName").value,
            level: varLevel,
            category: VarCategory,
            money: 0,
            apiURL: `https://opentdb.com/api.php?amount=10&category=${VarCategory}&difficulty=${varLevel}&type=multiple`,
            preguntaNro: 1
          };
        login(secondState);
      };

    return (
        <div>
        <h1><center><p>Juego Open Trivia</p></center></h1>
       <center>
            <form className="formulario">
                <div>
                    <label htmlFor="inputName">Usuario:</label>
                    <input type="text" id="inputName" />
                </div>
                <div>
                    <select id="SelectCategoria" className="select-css" >
                        <option>Categoría</option>
                        <option value="21">Sports</option>
                        <option value="22">Geography</option>
                        <option value="23">History</option>
                        <option value="27">Animals</option>
                        <option value="28">Vehicles</option>
                    </select>
                </div>
                <div>
                    <select id="SelectDificultad" className="select-css" >
                        <option>Dificultad</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>
                <button className="button" onClick={validarCamposVacios}>{<NavLink 
                        style={{color: 'white', textDecoration: 'none'}} 
                        activeStyle={{color: 'white', textDecoration: 'none'}} exact to={camposVacios ? "/": "/juego" } 
                        onClick={getValueInput}>Ingresar</NavLink> }</button>
            </form>
            </center>
            <div id="Temporizador1" hidden></div>
            <div id="Temporizador2" hidden></div>
            <div id="Preguntas" hidden></div>
            <div id="Respuestas" hidden></div>
        </div>
    );
};

export default Inicio;
