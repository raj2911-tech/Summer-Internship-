import React from "react";
import { useState } from "react";

const Stamina = () => {
    const [stamina, setStamina] = useState(100);
    const [clicks, setClicks] = useState(0);

    const decreaseStamina = () => {
        const newClicks = clicks + 1;
        setClicks(newClicks);

        if(stamina <= 0 ){
            setStamina(0);
            return;
        }

        if((newClicks  % 5) === 0 ) {
            if(stamina-15 <= 0){
                setStamina(0);
            }
            else{
                setStamina(stamina - 15);
            }
            return;
        }

        setStamina(stamina -2);
       
        
    };

    if (stamina === 0) {
        return (
            <div>
                <h2>Stamina: {stamina}</h2>
                <p>Burnout! Rest Required</p>
                <button onClick={decreaseStamina} disabled>
                    Write Code
                </button>
            </div>
        );
    }
    else {
        return (
            <div>
                <h2>Stamina: {stamina}</h2>
                <button onClick={decreaseStamina}>Write Code</button>
            </div>
        );
    }




}

export default Stamina;