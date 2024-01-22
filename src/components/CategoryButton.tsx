import React, {useState} from 'react';
import Button from './Base/Button'
import { ElementWithIconProps } from "./Base/interface"
import Icon from './Icon';

interface CategoryButtonProps extends ElementWithIconProps {
    title?: string
}

const CategoryButton = function({
    title,
    icon,
    onClick,
    className=''
} : CategoryButtonProps) {
    return (
        <div className={`co-category-button d-flex flex-column justify-content-center align-items-center ${className}`} onClick={onClick}>
            <div className="co-category-button-icon d-flex justify-content-center align-items-center">
                <Icon icon={icon} />
            </div>
            <div className="co-category-button-title mt-4">
                {title}
            </div>
        </div>
    );
}

export default CategoryButton;
