import React, { EventHandler, FC } from 'react';
import { ElementProps } from "./interface"

interface RadioBoxProps extends ElementProps {
    title?: string,
    value: string | number,
    current: string | number,
    bordered?: boolean
}

const RadioBox : FC<RadioBoxProps> = ({
    className='',
    value,
    current, 
    title='',
    disabled = false, 
    bordered,
    onChange
}) => {    
    return (
        <div className={`co-radiobox d-flex align-items-center ${className} ${disabled ? "disabled" : ""} ${bordered ? "bordered" : ""} ${value === current ? 'checked' : ''}`} 
            onClick={() => {
                if( disabled ) return;
                if( onChange ) onChange(value)
            }}
        >
            <div className={`co-radiobox-box flex-0`}></div>
            <div className="co-radiobox-text text-nowrap ms-2">{title}</div>
        </div>
    );
}



export default RadioBox;
