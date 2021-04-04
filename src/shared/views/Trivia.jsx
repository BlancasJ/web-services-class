import React, { useEffect, useState } from "react";
import { Card } from "../organisms/Card";
import { fetchQuestions } from "../services/triviaService";

const style ={
    backgroundColor: "#D9EAF8",
    width: "700px",
    margin: "10px",
    padding:"10px",
    borderRadius:"15px",

};

const buttonStyle={
    width: "200px",
    margin:"10px",
    fontSize: "20px",
}

export const Trivia =()=>{
    const [questions, updateQuestions] = useState([]);
    const [loaded, loading] = useState(true);
    const [questionNo, updateQuestionNo] = useState(0);
    const [score, updateScore] = useState(0);
    const [correctAnswers, updateCorrectAnswers] = useState([]);

    useEffect(() => {
        const receiveQuestions = async () => {
            updateQuestions(await fetchQuestions());
            loading(false);
        };
        receiveQuestions();
    }, []);

    const handleCallback = (isCorrect) => {
        if(isCorrect){
            if(correctAnswers.length > 0){
                const hasDuplicates = correctAnswers.includes(questionNo);
                if(!hasDuplicates){
                    updateCorrectAnswers([...correctAnswers, questionNo])
                    updateScore(score+1);
                }
            }
            else {
                updateCorrectAnswers([...correctAnswers, questionNo]);
                updateScore(score+1);
            }
        }
    };

    const handleQuestions = (parameter) => {
        if(questionNo < 9 && parameter === '+'){
            updateQuestionNo(questionNo + 1);
        } else if(questionNo > 0 && parameter === '-'){
            updateQuestionNo(questionNo - 1);
        }
    };

    if(loaded){
        return <p>Loading...</p>
    } else {
        //console.log(questions[questionNo].question);
        //console.log(questions[questionNo].incorrect_answers);
        //console.log(questions[questionNo].correct_answer);
        return(
            <React.Fragment>
                <p style={style}>COUNTER: {score}/10</p>
                <Card 
                question={questions[questionNo].question}
                incorrectAnswers = {questions[questionNo].incorrect_answers}
                correctAnswer = {questions[questionNo].correct_answer}
                isCorrect = {handleCallback}
                />
                <button style={buttonStyle} onClick = { () => handleQuestions('-') }>Previous</button>
                <button style={buttonStyle} onClick = { () => handleQuestions('+') }>Next</button>
    
            </React.Fragment>
        );
    }
    
};