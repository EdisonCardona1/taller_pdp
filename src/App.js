import { useState } from "react";
import GameContext from "./context/GameContext";
import AppRouter from "./routers/AppRouter";

const initialState = {
  id: 1,
  name: "",
};

function App() {
  const [user, setuser] = useState(initialState);
  
  const handleInput = event => {
    setuser(event.target.value);
  };

  const logValue = () => {
    console.log(user);
  };
  
  const data = user;
  

  return (
    <div className="App">
      <center>
        <div>
        <h1><center>Juego Open Trivia</center></h1>
            <center>
            <div className="form-group">
                <label htmlFor="inputName">Usuario:</label>
                <input
                    onChange={handleInput}
                    type="text"
                    className="form-control"
                    id="inputName"
                />
            </div>
            <br></br>
            <div>
                <select className="browser-default custom-select">
                <option>Categoría</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                </select>
            </div>
            <br></br>
            <div>
                <select className="browser-default custom-select">
                <option>Dificultad</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                </select>
            </div>
            <br></br>
            </center>
        </div>

        <GameContext.Provider value={data}>
          <AppRouter/>
        </GameContext.Provider>
      </center>
    </div>
  );
}

export default App;
