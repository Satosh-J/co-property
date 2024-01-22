import React, {useState, useRef, useEffect} from 'react';
import Icon from '../Icon'
import { ElementWithIconProps } from "./interface"

interface InputProps extends ElementWithIconProps {
    value?: string,
    type?: string,
    label?: string | Node | Node[],
    placeholder?: string,
    required?: boolean,
    onChange?: (val: string) => void,    
}

const Input = function({
    value='',
    type='input',
    label, 
    placeholder, 
    required=false,
    className='', 
    icon = '',    
    iconPos = 'left',
    iconSize = 'md', 
    onChange,
    onClick
} : InputProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if(inputRef.current)
            inputRef.current.value = value;
    }, [value])

    return (
        <div className={ "input " + className }>
            {label &&
            <div className="co-label">
                {label}
                {required &&
                <span className="fc-red">*</span>
                }
            </div>
            }
            <div className="co-field-wrapper">
                <input 
                    type={type} 
                    ref={inputRef}
                    className={`co-field w-100 ${type} ${icon!=='' ? 'icon-' + iconPos : '' }`}
                    placeholder={placeholder}
                    onChange={(event) => {
                        if(onChange) onChange(event.target.value)
                    }}
                />
                {icon !== '' && iconPos === 'left' &&
                <div className="co-field-icon-left d-inline-block me-2" onClick={() => {
                    if(onClick) onClick()
                }}>
                    <Icon icon={icon} size="md"/>
                </div>
                }
                {icon !== '' && iconPos === 'right' &&
                <div className="co-field-icon-right d-inline-block ms-2" onClick={() => {
                    if(onClick) onClick()
                }}>
                    <Icon icon={icon} size={iconSize}/>
                </div>
                }
            </div>
        </div>
    );
}

export default Input;
