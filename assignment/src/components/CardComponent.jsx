import React, { useState } from "react"
import "../CSS/Card.css"
import CustomCheckBox from "./CustomCheckBox"
import Pages from "./PagesComponent"

const CardComponent = () => {
    const [isChecked, setIsCheck] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleCheckBoxChange = () => {
        setIsCheck(prev => !prev);
    }

    return (
        <>
            <div className="card-container">
                <div className="card">
                    <div className="home-content"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onClick={handleCheckBoxChange}
                    >
                        <p className="home-font">All Pages</p>
                        <CustomCheckBox checked={isChecked} isHovered={isHovered} onChange={handleCheckBoxChange}/>
                    </div>
                    <div className="line-container">
                        <span className="line" />
                    </div>
                    <Pages />
                    <div className="line-container">
                        <span className="line" />
                    </div>
                    <div className="button-container">
                        <button
                            className="button"
                        >
                            <p className="button-font">Done</p>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default CardComponent; 
