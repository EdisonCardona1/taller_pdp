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


const Juego = () => {
    const {User} = useContext(GameContext);
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
        var preguntas = [10];
        //var respuestas = [10];
        var respuestasIncorrectas = [10];
        var respuestasCorrectas = [10];
        var indiceAleatorio = Math.floor(Math.random()*10);
        var txt_respuestas = ""

        Questions.results.map((pregunta, posicion) =>  
            preguntas[posicion]=pregunta.question
        )

        Questions.results.map((pregunta, posicion) =>  
            respuestasIncorrectas[posicion] = pregunta.incorrect_answers.map((resp) => resp)
        )

        Questions.results.map((pregunta, pos) =>  
            respuestasCorrectas[pos] = pregunta.correct_answer
        )

        var respuestasPosibles = [...respuestasIncorrectas[indiceAleatorio], respuestasCorrectas[indiceAleatorio]]        

        let i=0;
        for (i in respuestasPosibles){
            txt_respuestas += '<input type="radio" id="rdRespuestas" name="rdGroupResp"><label>'+ respuestasPosibles[i]+'</label>'
        }
        
        document.getElementById("Preguntas").innerHTML = preguntas[indiceAleatorio]
        document.getElementById("Respuestas").innerHTML = txt_respuestas
        
    };

    return (
        <div>
            <h3>----------------</h3>
            <h1>Juego</h1>
            <h3>----------------</h3>
            <h2>Preguntas:</h2>
            <div id="Preguntas"></div>
            <div id="Respuestas"></div>
                        
            <button onClick={iniciar}>Iniciar</button>
        </div>
    );
}
export default Juego;
