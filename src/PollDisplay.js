import React, { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";
import Participate from "./AnotherUserParticipation";
import { option1, option2,option3 } from "./UserParticipation";

const Results =()=>{
    const [op1,count1] = option1.useContext();
    const [op2,count2] = option2.useContext();
    const [op3,count3] = option3.useContext();
    return(
        <>
        <div>
        <h3>{op1}: {count1}</h3>
        <h3>{op2}: {count2}</h3>
        <h3>{op3}: {count3}</h3>
        </div>
        </>


    )
    
}
export default Results;

