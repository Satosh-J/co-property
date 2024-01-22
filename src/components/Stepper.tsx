import React from 'react';

export interface StepItem {
    step: number,
    text?: string | undefined
}

interface StepperProps {
    className?: string,
    step: number,
    data: Array<StepItem>,
}

const Stepper = function({
    step=0,
    data,
    className=''
} : StepperProps) {
    
    return (
        <div className={`co-stepper d-flex ${className}`}>
            {data.map((item : StepItem, idx) => (
                <div className={`co-stepper-item d-flex flex-column ${step === idx ? 'active' : step > idx ? 'done' : ''}`} key={`stepper-${item.step}`}>
                    <div className="co-stepper-item-steps d-flex align-items-center flex-1">
                        <div className="co-stepper-item-steps-num d-flex justify-content-center align-items-center flex-0">
                            {step > idx ? '' : item.step}
                        </div>
                        {item.text &&
                            <div className="co-stepper-item-steps-text">{item.text}</div>
                        }
                    </div>
                    <div className="co-stepper-item-status d-flex align-items-center">
                        <div className={`co-stepper-item-status-left flex-0 ${idx === 0 ? 'hidden' : ''}`}></div>
                        <div className="co-stepper-item-status-circle flex-0"></div>
                        {idx < data.length - 1 &&
                        <div className="co-stepper-item-status-right flex-1"></div>
                        }
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Stepper;
