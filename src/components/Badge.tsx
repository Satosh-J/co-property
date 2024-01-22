import React from 'react';
import Icon from './Icon'
import type {TYPE_SIZE} from "types"

interface BadgeProps {
    className?: string,
    value?: number | undefined,
    color: string,
    icon: string,
    iconSize?: TYPE_SIZE
}

const Badge = function({
    value,
    color='primary',
    icon='',
    iconSize,
    className=''
} : BadgeProps) {
    
    return (
        <div className={`co-badge ${className}`}>
            <Icon icon={icon} size={iconSize}/>
            <div className={`co-badge-status-wrapper`}>
                <div className={`co-badge-status ${color}`}>
                </div>
            </div>
        </div>
    );
}

export default Badge;
