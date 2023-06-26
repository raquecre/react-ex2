import { useState } from "react";

const Button = () => {
  const [count, setCounter] = useState(0);
    
  const counter = () => {
        setCounter(count => count + 1);
        
    };  
    

    return (
        <div className="button">
            <button onClick={counter}> {count}</button>
        </div>
    )
}

export default Button;
