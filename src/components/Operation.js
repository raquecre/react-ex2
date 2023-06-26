import Button from "./Button";
import MathSign from "./MathSign"
import { useState } from "react";

function Operation() {
    const [total, setTotal] = useState(0);

    const sum = () => {
        setTotal (() => { button1 }  + { button2 }  )
    };

    const subtract = () => {
        setTotal (() => { button1 } - { button2 } )
    };

    const multiply = () => {
        setTotal (() => { button1 } * { button2 } )
    };
    
    const division = () => {
        setTotal (() => { button1 } / { button2 } )
        
    }
    
}
return (
    <div className="Operation">
        <Button id='button1' className="button"></Button>
        <MathSign> </MathSign>
        <Button id='button2' className="button"></Button>
        <div className="result" >
            <p> = </p>
            <p>{total}</p>

        </div>

    </div>
)

}

export default Operation;
