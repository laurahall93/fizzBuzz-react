import {useState} from "react";


function FizzBuzzBody(): JSX.Element {
 const [countValue, setCountValue] = useState(0);
 const [storeCountValue, setStoreCountValue] = useState<(number | string)[]>([]);

 const handleAddOneToLine = () => {
    setCountValue(countValue + 1);
    handleStoredCurrentCount();
  };
  

 const handleStoredCurrentCount = () => {
    if(countValue % 5 === 0 && countValue % 3 === 0 && countValue > 0 ){
        setStoreCountValue([
            ...storeCountValue,
            " Fizz Buzz"]);
    } else if(countValue % 3 === 0 && countValue > 0){
        setStoreCountValue([
            ...storeCountValue,
            "Fizz"]);
    } else if (countValue % 5 === 0 && countValue > 0){
        setStoreCountValue([
            ...storeCountValue,
            "Buzz"]);
    } else {
        setStoreCountValue([
        ...storeCountValue,
        countValue])
    }
 }

 const handleStartNewGame = () => {
    setStoreCountValue([]);
    setCountValue(0);
 }



    return(
        <section>
            <h3>Lets Play the FizzBuzz Game!</h3>
            <p>Press the Button to find Fiz, Buzz or FizzBuzz...</p>
            <p>Your Number Line :{storeCountValue.join(', ')}</p>
            <button onClick={handleAddOneToLine}>Add a Number</button>
            <button onClick={handleStartNewGame}>Start New Game</button>
        </section>
    )
}





export default FizzBuzzBody;