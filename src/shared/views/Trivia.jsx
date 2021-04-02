import React from "react";
import {Card} from "../organisms/Card";

const style ={
    backgroundColor: "#D9EAF8",
    margin: "10px 150px 10px 150px",
    padding:"10px",
    borderRadius:"15px",

};

const buttonStyle={
    margin:"10px 250px 10px 250px",
    fontSize: "20px",
}

export const Trivia =()=>{
    return(
        <React.Fragment>
            <p style={style}>COUNTER:0/10</p>
            <Card />
            <button style={buttonStyle}>Previous</button>
            <button style={buttonStyle}>Answer</button>
            <button style={buttonStyle}>Next</button>

        </React.Fragment>
    );
};