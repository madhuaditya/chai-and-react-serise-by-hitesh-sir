import {useState} from "react";

function Practice01(){

    const [number, setNumber] = useState(0);
        function increse(){
            console.log(number);
            if(number===20){
                alert("number can not excied for " + number);

            }
            else
                setNumber(number+1);
        }
        function decrease(){
            console.log(number);
            if(number===0){
                alert("number can not less for "+ number);
            }
            else
               setNumber(number-1);
        }

    return(
        <>
        <h1>counter cilck is {number}</h1>
            <button onClick={increse}> press hear to increas {number}</button>
            <br/>
            <button onClick={decrease}>
                press hear to descres the {number}
            </button>
        </>

    )
}
export  default Practice01;