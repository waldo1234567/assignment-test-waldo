import React, { useState } from "react";
import "../CSS/Pages.css";
import CustomCheckBox from "./CustomCheckBox";

const Pages = () => {
    const pages = [1, 2, 3, 4, 5, 6];
    const [hoveredIdx, setHoveredIdx] = useState(null);
    const [checked, setChecked] = useState(new Array(pages.length).fill(false));
    const handleCheckBoxChange = (index) => {
        const updatedChecked = [...checked];
        updatedChecked[index] = !updatedChecked[index];
        setChecked(updatedChecked);
    }
    return (
        <>
            <div className="wrapper">
                {
                    pages.map((page, index) => (
                        <div key={page}
                            className="pages-class"
                            onMouseEnter={() => setHoveredIdx(index)}
                            onMouseLeave={() => setHoveredIdx(null)}
                            onClick={() => handleCheckBoxChange(index)}
                        >
                            <p>Page {page}</p>
                            <CustomCheckBox checked={checked[index]} isHovered={hoveredIdx === index} onChange={() => handleCheckBoxChange(index)} />
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Pages;