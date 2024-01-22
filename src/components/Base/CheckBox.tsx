import React, { EventHandler, FC } from 'react';
import { ElementProps } from "./interface"

interface CheckBoxProps extends ElementProps {
    checked: boolean
    title?: string
    bordered?: boolean
}

const CheckBox : FC<CheckBoxProps> = ({
    className='',
    checked=false, 
    title='',
    disabled = false, 
    bordered,
    onChange
}) => {
    
    return (
        <div className={`co-checkbox d-flex align-items-center ${className} ${disabled ? "disabled" : ""} ${bordered ? "bordered" : ""} ${checked ? 'checked' : ''}`} >
            <div className={`co-checkbox-box flex-0`} 
                onClick={() => {
                    if( disabled ) return;
                    if( onChange ) onChange(!checked)
                }}
            ></div>
            <div className="co-checkbox-text text-nowrap ms-2">{title}</div>
        </div>
    );
}

export default CheckBox;
