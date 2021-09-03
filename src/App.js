import { useState } from "react";
import GameContext from "./context/GameContext";
import AppRouter from "./routers/AppRouter";

const initialState = {
  name: "Default name",
  level: "Default level",
  money: 0,
};

function App() {
  const [User, setUser] = useState(initialState);
  
  const login = (nombreUsuario) => {
    setUser(nombreUsuario);
  }
  const logout = () => {
    setUser(null);
  }
  const data = {User, login, logout};
  return (
    <div className="App">
      <GameContext.Provider value={data}>
        <AppRouter/>     
      </GameContext.Provider>
    </div>
  );
}

export default App;
