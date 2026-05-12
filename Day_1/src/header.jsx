import React from "react";
import "./header.css";

const Header = () => {
    const date = new Date();
    const time = date.getHours();
    let greeting = "";

    if (time >= 5 && time <= 11) {
        greeting = "Good Morning";
    } else if (time >= 12 && time <= 17) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }

    return (
        <div className="rg-header">
            <p>{greeting}</p>
            <p>Intern Name: {import.meta.env.VITE_INTERN_NAME}</p>
        </div>
    );
}

export default Header;