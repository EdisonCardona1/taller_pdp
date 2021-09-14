import { useContext } from "react";
import { Redirect, Route } from "react-router"
import Juego from "../components/Juego"
import GameContext from "../context/GameContext";

const PrivateRouter = () => {
    const {User} = useContext(GameContext);
    
    return (
        <div>
            <Route exact path="/juego">
                 {User.name !== "Default name" ? <Juego/> : <Redirect to="/"/> }
            </Route> 
        </div>
    )
}

export default PrivateRouter
