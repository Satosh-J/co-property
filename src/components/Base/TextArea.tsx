import React, {useState, useRef, useEffect} from 'react';
import { ElementProps } from "./interface"

interface TextAreaProps extends ElementProps {
    value?: string,
    label?: string | Node | Node[],
    placeholder?: string,
    required?: boolean,
    rows?: number,
    onChange?: (val: string) => void,    
}

const TextArea = function({
    value='',
    label, 
    placeholder, 
    required=false,
    className='', 
    rows,
    onChange,
} : TextAreaProps) {
    const inputRef = useRef<HTMLTextAreaElement>(null);

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
                <textarea 
                    ref={inputRef}
                    className={`co-field-textarea`}
                    placeholder={placeholder}
                    rows={rows}
                    onChange={(event) => {
                        if(onChange) onChange(event.target.value)
                    }}
                />
            </div>
        </div>
    );
}

export default TextArea;
