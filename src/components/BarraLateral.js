import { useContext } from "react"
import GameContext from "../context/GameContext"

const BarraLateral = () => {
    const {User} = useContext(GameContext);

    return (
        <div className="sidebarwrap">
            <div className="col">
                <center>
                    <h3 className={User.preguntaNro === 10 ? 'nroPregunta':''} id="10">10 $10.000</h3>
                    <h3 className={User.preguntaNro === 9 ? 'nroPregunta':''} id="9">9 $9.000</h3>
                    <h3 className={User.preguntaNro === 8 ? 'nroPregunta':''} id="8">8 $8.000</h3>
                    <h3 className={User.preguntaNro === 7 ? 'nroPregunta':''} id="7">7 $7.000</h3>
                    <h3 className={User.preguntaNro === 6 ? 'nroPregunta':''} id="6">6 $6.000</h3>
                    <h3 className={User.preguntaNro === 5 ? 'nroPregunta':''} id="5">5 $5.000</h3>
                    <h3 className={User.preguntaNro === 4 ? 'nroPregunta':''} id="4">4 $4.000</h3>
                    <h3 className={User.preguntaNro === 3 ? 'nroPregunta':''} id="3">3 $3.000</h3>
                    <h3 className={User.preguntaNro === 2 ? 'nroPregunta':''} id="2">2 $2.000</h3>
                    <h3 className={User.preguntaNro === 1 ? 'nroPregunta':''} id="1">1 $1.000</h3>
                </center>
            </div>
        </div>
    )
}

export default BarraLateral
