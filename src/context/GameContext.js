import { createContext } from "react";
import { useState } from "react";

const GameContext = createContext();
const initialState = {
    name: "Default name",
    level: "Default level",
    category: "Default category",
    money: 0,
    apiURL: ""
  };

const GameProvider = ({children}) => {
    
    const [User, setUser] = useState(initialState);
  
    const login = (nombreUsuario) => {
        setUser(nombreUsuario);
    }
    const logout = () => {
        setUser(null);
    }
    const data = {User, login, logout};
    return(
        <GameContext.Provider value={data}>
            {children}
        </GameContext.Provider>
    )
}

export {GameProvider};
export default GameContext;