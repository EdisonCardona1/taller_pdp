import { BrowserRouter as Router, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Juego from "../components/Juego";

const AppRouter = () => {
    return (
    <Router>       
        <NavLink exact to="/juego" activeClassName="active">
            Ingresar
        </NavLink>
        
        <Route exact path="/juego" component={Juego} />
    </Router>
    )
}

export default AppRouter


