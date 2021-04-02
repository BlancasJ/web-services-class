import React from "react";

const style ={
    backgroundColor: "#D9EAf8",
    margin: "10px 150px 10px 150px",
    padding:"10px",
    borderRadius:"15px",

};

export const Card =()=>{
    return (
        <React.Fragment>
            <div style={style}>
                <p>QUESTION</p>
                <p>ANSWER</p>
                <p>ANSWER</p>
                <p>ANSWER</p>
                <p>ANSWER</p>
            </div>
        </React.Fragment>
        
        
    );
};