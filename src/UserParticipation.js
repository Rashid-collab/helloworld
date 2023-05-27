import React, { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";

const option1 = createContext();
const option2 = createContext();
const option3 = createContext();
const PollDisp=()=>{
    const [count1,Setcount1] = useState(0);
    const [count2,Setcount2] = useState(0);
    const [count3,Setcount3] = useState(0);

   



    let op1 = "Java";
    let op2 = "JavaScript";
    let op3 = "Python";

    return(
        <>
            <h3>What is your favorite programming langauge?</h3>
            <div>
            <div>{op1}</div> <input type="radio" onClick={()=>{Setcount1(count1+1)}}></input> 
            <div>
            <div>{op2}</div>
            <input type="radio"onClick={()=>{Setcount2(count2+1)}}></input> 
            </div>
            <div>
            <div>{op3}</div>
            <input type="radio"onClick={()=>{Setcount3(count3+1)}}></input> 
            </div>
            </div>

            <button onClick>Show Results</button>

            <option1.Provider value ={op1}{...count1}>
                <PollDisp/>
            </option1.Provider>
            
        </>

    )

}
export default PollDisp; 
export {option1,option2,option3};