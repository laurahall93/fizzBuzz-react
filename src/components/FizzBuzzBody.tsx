
//pseudo code
/* 1. welcome to Fizz buzz game text
   2. import state

    display the numbers/ text 
    button for +1 

*/
import {useState} from "react";


function FizzBuzzBody(): JSX.Element {
 const [counterValueFromCurrentRender, queueRenderWithNewCounterValue] = useState(0);
 const [storedValueFromCurrentRender, queueRenderWithNewStoredValue] = useState<(number | string)[]>([]);

 const handleAddOneToLine = () => {
    queueRenderWithNewCounterValue(counterValueFromCurrentRender + 1);
    handleStoredCurrentCount();
  };
  

 const handleStoredCurrentCount = () => {
    if(counterValueFromCurrentRender % 5 === 0 && counterValueFromCurrentRender % 3 === 0 ){
        queueRenderWithNewStoredValue([
            ...storedValueFromCurrentRender,
            " Fizz Buzz"]);
    } else if(counterValueFromCurrentRender % 3 === 0){
        queueRenderWithNewStoredValue([
            ...storedValueFromCurrentRender,
            "Fizz"]);
    } else if (counterValueFromCurrentRender % 5 === 0){
        queueRenderWithNewStoredValue([
            ...storedValueFromCurrentRender,
            "Buzz"]);
    } else {
        queueRenderWithNewStoredValue([
        ...storedValueFromCurrentRender,
        counterValueFromCurrentRender])
    }
 }

 const handleStartNewGame = () => {
    queueRenderWithNewStoredValue([0]);
    queueRenderWithNewCounterValue(0);
 }



    return(
        <section>
            <h3>Lets Play the FizzBuzz Game!</h3>
            <p>Press the Button to find Fiz, Buzz or FizzBuzz...</p>
            <p>Your Number Line :{storedValueFromCurrentRender.join(', ')}</p>
            <button onClick={handleAddOneToLine}>Add a Number</button>
            <button onClick={handleStartNewGame}>Start New Game</button>
        </section>
    )
}





export default FizzBuzzBody;