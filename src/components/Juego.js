import { useCallback, useContext, useEffect, useState } from "react";
import GameContext from "../context/GameContext"
import getQuestions from "../helpers/getQuestions";

const initialQuestions = {
    response_code: 0,
    results: [
        {   
            category: "",
            type: "",
            difficulty: "",
            question: "",
            correct_answer: "",
            incorrect_answers: [
                "",
                "",
                ""
            ]
        }
    ]
}

var indice_respuesta_correcta=99;
var bandera=false;
var temporizador1;

const Juego = () => {
    const {User, login} = useContext(GameContext);
    const [Questions, setQuestions] = useState(initialQuestions);

    const updateQuestions = useCallback(
        () => {
            getQuestions(User.apiURL).then((questions) => {
                setQuestions(questions);
            });
        },
        [User.apiURL],
    );

    useEffect(() => {
        updateQuestions();
     }, [updateQuestions]);

    function iniciar () {
        let n = 29;
        temporizador1 = setInterval(() => {
            document.getElementById("Temporizador1").innerHTML = n
            if(n===0){
            clearTimeout(temporizador1);
            }
            n--
        }, 1000);

        bandera=false;
        var preguntas = [10];
        var respuestasIncorrectas = [10];
        var respuestasCorrectas = [10];
        var indiceAleatorio = Math.floor(Math.random()*10);
        var txt_respuestas = ""
        var posiciones = [0,1,2,3];
        var respuestas_reordenadas = [];

        Questions.results.map((pregunta, posicion) =>  
            preguntas[posicion]=pregunta.question
        )

        Questions.results.map((pregunta, posicion) =>  
            respuestasIncorrectas[posicion] = pregunta.incorrect_answers.map((resp) => resp)
        )

        Questions.results.map((pregunta, pos) =>  
            respuestasCorrectas[pos] = pregunta.correct_answer
        )
        console.log("respCorr: " + respuestasCorrectas[indiceAleatorio])

        var respuestasPosibles = [...respuestasIncorrectas[indiceAleatorio], respuestasCorrectas[indiceAleatorio]]
        
        let i=0
        for (i in respuestasPosibles){
            var posicion_aleatoria = Math.floor(Math.random()*posiciones.length);
            if(posiciones[posicion_aleatoria] === 3 && bandera===false){
                indice_respuesta_correcta = i
                bandera=true
            }
            respuestas_reordenadas[i] = respuestasPosibles[posiciones[posicion_aleatoria]];
            posiciones.splice(posicion_aleatoria, 1);
        }
        
        for (let i in respuestas_reordenadas){
            txt_respuestas += '<input type="radio" id=' + i + '" name="rdGroupResp" value ='+ i + '><label>'+ respuestas_reordenadas[i]+'</label>'
        }
        
        document.getElementById("Preguntas").innerHTML = preguntas[indiceAleatorio]
        document.getElementById("Respuestas").innerHTML = txt_respuestas
        document.getElementById("Temporizador1").innerHTML = 30
        document.getElementById("Temporizador2").innerHTML = 5
    };

    function comprobar(){
        const rbs = document.querySelectorAll('input[name="rdGroupResp"]');
            let selectedValue=99;
            for (const rb of rbs) {
                if (rb.checked) {
                    selectedValue = rb.value;
                    break;
                }
            }
            if (selectedValue === indice_respuesta_correcta){

                const secondState = {
                    name: User.name,
                    level: User.level,
                    category: User.category,
                    money: User.money + 1000,
                    apiURL: User.apiURL
                  };

                login(secondState);
                clearTimeout(temporizador1);
                console.log("esperando 5 seg");
                let n = 4;
                let temporizador2 = setInterval(() => {
                    document.getElementById("Temporizador2").innerHTML = n
                    if(n===0){
                        clearTimeout(temporizador2);
                        iniciar();
                    }
                    n--
                }, 1000);
                
            }else{
                alert("Incorrecto")
            }
    }


    return (
        <div>
            <h3>----------------</h3>
            <h1>Juego</h1>
            <h3>----------------</h3>
            <button onClick={iniciar}>Iniciar</button>
            <div id="Temporizador1"></div>
            <div id="Temporizador2"></div>
            <h2>Preguntas:</h2>
            <div id="Preguntas"></div>
            <div id="Respuestas"></div>
            <button onClick={comprobar}>Comprobar respuesta</button>                        
        </div>
    );
}
export default Juego;
