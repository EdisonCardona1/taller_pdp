import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Inicio from "../components/Inicio";
import Juego from "../components/Juego";
import Navbar from "../components/Navbar";
import NotFound from "../components/NotFound";

const AppRouter = () => {
    return (
    <Router>
        <Switch>
            <Route exact path="/juego"> 
                <Navbar/>
                <Juego/>
            </Route> 
            <Route exact path="/"> 
                <Inicio/>
            </Route> 
            <Route exact path="*" component={NotFound} />
        </Switch>                    
    </Router>
    )
}

export default AppRouter


