import { useCallback, useContext, useEffect, useState } from "react";
import GameContext from "../context/GameContext"
import getQuestions from "../helpers/getQuestions";

const initialQuestions = {
    response_code: 0,
    results: [
        {
            category: "Mythology",
            type: "multiple",
            difficulty: "easy",
            question: "Who was the only god from Greece who did not get a name change in Rome?",
            correct_answer: "Apollo",
            incorrect_answers: [
                "Demeter",
                "Zeus",
                "Athena"
            ]
        },
        {
            category: "Mythology",
            type: "multiple",
            difficulty: "easy",
            question: "The ancient Roman god of war was commonly known as which of the following?",
            correct_answer: "Mars",
            incorrect_answers: [
                "Jupiter",
                "Juno",
                "Ares"
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
    )

    useEffect(() => {
        updateQuestions();
     }, [updateQuestions]);

     let n = 0;

    return (
        <div>
            <h3>----------------</h3>
            <h1>Juego</h1>
            <h3>----------------</h3>
            <h2>Preguntas:</h2>
            <ul>
                {Questions.results.map((question) => (
                    <h4 key={n=n+1} >{question.question}</h4>
                ))}
            </ul>
        </div>
    );
}
export default Juego;
