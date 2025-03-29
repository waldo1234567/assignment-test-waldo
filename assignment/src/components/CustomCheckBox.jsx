import React from "react";
import '../CSS/CheckBox.css';

const CustomCheckBox = ({ checked, onChange, isHovered }) => {
    return (
        <>
            <label className={`checkbox-container ${isHovered ? "hovered" : ""}`}
                onClick={(e) => e.stopPropagation()}
            >
                <input type="checkbox" checked={checked} onChange={onChange} className="native-checkbox" />
                <span className={`custom-checkbox ${checked ? "checked" : ""} ${isHovered ? "hovered" : ""}`} >
                    {
                        isHovered || checked ? (
                            <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 7.6L7.03451 12.9672C7.05497 12.9854 7.08626 12.9837 7.1047 12.9635L18 1"
                                    stroke={checked ? `${"#FFFFFF"}` : `${"#878787"}`}
                                    strokeLinecap="round" />
                            </svg>) :
                            ""
                    }
                </span>
            </label>
        </>
    )
}

export default CustomCheckBox;