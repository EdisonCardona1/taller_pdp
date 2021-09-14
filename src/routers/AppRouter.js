import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Inicio from "../components/Inicio";
import Juego from "../components/Juego";
import NotFound from "../components/NotFound";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
    return (
    <Router>
        <Switch>
            <Route exact path="/"> 
                <Inicio/>
            </Route> 
            <PrivateRouter> 
                <Juego/>
            </PrivateRouter> 
            
            <Route exact path="*" component={NotFound} />
        </Switch>                    
    </Router>
    )
}

export default AppRouter


