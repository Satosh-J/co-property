import React, { ReactElement, cloneElement } from 'react';
import { ElementProps } from "./interface"
import { ButtonProps } from "./Button"

interface ButtonGroupProps extends ElementProps {
    current: number,
    theme?: 'default' | 'secondary' | 'normal'
    fill?: boolean
    children?: ReactElement<ButtonProps>[]
}

const ButtonGroup = ({
    className='',
    disabled = false, 
    current,
    fill,
    theme = 'default',
    onChange,
    children
} : ButtonGroupProps) => {

    const handleClick = (index : number) => { 
        if(onChange) onChange(index)
    } 

    return (
        <div className={`co-button-group theme-${theme} d-flex ${className} ${disabled ? 'disabled' : ''}`}>
            {children?.map((button, idx) => (
                cloneElement(button, {className: (current === idx ? 'primary' : theme) + (fill ? ' flex-1' : ''), onClick: () => handleClick(idx)})
            ))}
        </div>
    );
}

export default ButtonGroup;
