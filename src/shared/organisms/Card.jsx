import React from "react";

const style ={
    backgroundColor: "#D9EAf8",
    width: "700px",
    margin: "10px",
    padding:"10px",
    borderRadius:"15px",

};

export const Card = ({ question, incorrectAnswers, correctAnswer, isCorrect }) => {

    function decodeHtml(html) {
        const txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }
    
    const checkAnswer = (selectedAnswer) => {
        if ( selectedAnswer === correctAnswer){
            isCorrect(true);
        }
        isCorrect(false);
    };
    const allAnswers = (() => {
        const randNumber = Math.round(Math.random() * 3);
        //console.log('random: ',randNumber);
        const answers = [];
        let i = 0;
        let index = 0;
        while(i < incorrectAnswers.length+1){
            if(i === randNumber){
                answers.push(correctAnswer);
            }else{
                answers.push(incorrectAnswers[index]);
                index += 1;
            }
            i += 1;
        }
        //console.log('answers: ',answers);
        return answers;
    })();
    return (
        <React.Fragment>
            <div style={style}>
                <p>{decodeHtml(question)}</p>
                {allAnswers.map((answer, index) => {
                    return <p key={index} className='answers' onClick={() => checkAnswer(answer)}> {decodeHtml(answer)} </p>
                })}
            </div>
        </React.Fragment>
    );
};