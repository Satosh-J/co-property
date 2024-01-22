import React, {FC} from "react";

interface CardProps {
    className?: string,
    title?: string,
    action?: (() => JSX.Element)
}

const Card : FC<CardProps> = ({ className='', title='', action, children }) => {

    return (
        <div className={`co-card d-flex flex-column ${className}`}>
            {(title !=='' || action !== undefined) &&
            <div className="co-card-header d-flex justify-content-between align-items-center">                
                <div className="co-card-subtitle">{title}</div>
                {action !== undefined &&
                    <div className="co-card-action">{action()}</div>
                }
            </div>
            }
            {children}
        </div>
    )
}

export default Card;
