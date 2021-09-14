import { GameProvider } from "./context/GameContext";
import AppRouter from "./routers/AppRouter";
import './styles/inicio.css'
import './styles/navBar.css'
import './styles/juego.css'

function App() {
  return (
    <div className="App">
    <GameProvider>
      <AppRouter/>     
    </GameProvider>    
    </div>
  );
}

export default App;
