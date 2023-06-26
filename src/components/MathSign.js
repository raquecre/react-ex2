import { useState } from "react";

const MathSign = (props) => {

    const [signs, setSign] = useState();

   const selectMathSign = () => {
        
        const actualSign = signs.map((sign, index) => (sign.selectedIndex).value);
    }


    return (

        <select /* onChange={selectMathSign} */ id="mathsSings" className="MathsSigns">
            <option value='+'>+</option>
            <option value='-'>-</option>
            <option value='*'>X</option>
            <option value='/'>/</option>
        </select>

    )
}



export default MathSign;


//select.options[select.selectedIndex].value;