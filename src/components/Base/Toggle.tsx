import React, { EventHandler, FC } from 'react';
import { ElementProps } from "./interface"

interface ToggleProps extends ElementProps {
    value: boolean
    title?: string,
    textAlign?: "left" | "right",
}

const Toggle : FC<ToggleProps> = ({
    className='',
    value=false, 
    title='',
    textAlign='right',
    disabled = false, 
    onChange
}) => {
    
    return (
        <div className={`co-toggle d-flex align-items-center ${className} ${disabled ? "disabled" : ""} ${value ? 'checked' : ''}`} >            
            {textAlign === "left" &&
                <div className="co-toggle-text text-nowrap ms-2">{title}</div>
            }
            <div className={`co-toggle-wrapper d-flex align-items-center`} 
                onClick={() => {
                    if( disabled ) return;
                    if( onChange ) onChange(!value)
                }}
            >
                <div className="co-toggle-icon"></div>
            </div>
            {textAlign === "right" &&
                <div className="co-toggle-text text-nowrap ms-2">{title}</div>
            }
        </div>
    );
}

export default Toggle;
