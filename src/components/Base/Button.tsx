import React, { ForwardRefRenderFunction, forwardRef, ReactNode } from 'react';
import Icon from '../Icon'
import type {TYPE_SIZE} from "types"
import { ElementWithIconProps } from "./interface"
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { OverlayTriggerType } from 'react-bootstrap/OverlayTrigger'
import { Placement } from 'react-bootstrap/types'

export interface ButtonProps extends ElementWithIconProps {
    circle?: boolean,
    size?: TYPE_SIZE,
    trigger?: OverlayTriggerType | OverlayTriggerType[],
    tooltipPlacement?: Placement,
    tooltip?: ReactNode | undefined
    children?: ReactNode | undefined
}

const Button : ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = ({
    className='',
    icon='', 
    iconPos = "left", 
    iconSize, 
    size = "md",
    disabled = false, 
    circle=false, 
    onClick,
    trigger,
    tooltipPlacement,
    tooltip,
    children
}, ref) => {
    
    const renderButton = () => (
        <button 
            ref={ref}
            className={`co-button d-flex align-items-center justify-content-center ${className} ${disabled ? " disabled" : ""}  ${circle ? " circle" : ""} btn-size-${size}`} 
            onClick={(e) => {
                if( disabled ) return;
                if( onClick ) onClick()
            }}
        >
            {(circle || iconPos === 'center') &&
                <Icon icon={icon} size={iconSize}/>
            }
            
            {(!circle && icon !== '' && iconPos === 'left') &&
            <div className="d-inline-block me-2">
                <Icon icon={icon} size={iconSize}/>
            </div>
            }
            
            <span className="text-nowrap">{children}</span>
            
            {(!circle && icon !== '' && iconPos === 'right') &&
            <div className="d-inline-block ms-2">
                <Icon icon={icon} size={iconSize}/>
            </div>
            }
            
        </button>
    )

    return (
        <>
        {tooltip ? (
        <OverlayTrigger
            placement={tooltipPlacement}
            trigger={trigger}
            overlay={(
                <Tooltip>{tooltip}</Tooltip>
            )}>                
            {renderButton()}
        </OverlayTrigger>
        ) : (
            renderButton()
        )}
        </>
    );
}

export default forwardRef(Button);
