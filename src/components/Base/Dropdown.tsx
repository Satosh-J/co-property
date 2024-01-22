import React, { useEffect, useState, useRef, FC } from "react";
import Icon from "../Icon";

interface DropdownProps {
    className?: string,
    popupClassName?: string,
    badge?: number,
    onToggle?: () => void,
    button: () => JSX.Element
}

const Dropdown : FC<DropdownProps> = ({ className='', onToggle, badge, children, popupClassName='', button }) => {
    const [visible, setVisible] = useState(false);

    const listRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [])

    const handleClickOutside = (event : Event) => {
        if (listRef.current && event.target instanceof Node && !listRef.current.contains(event.target)) 
        {
            setVisible(false);
        }
    }
    return (
        <div className="co-dropdown" ref={listRef}>
            <div 
                className={`co-dropdown-toggle d-flex align-items-center ${className}`} 
                onClick={() => onToggle ? onToggle() : setVisible(!visible)} 
            >
                {button()}
                <div>
                    <Icon icon="dropdown" className="ms-2"/>
                </div>
            </div>
            {badge !== undefined && <span className="badge">{badge}</span>}
            <nav className={`co-dropdown-list ${popupClassName}` + (visible ? ' w--open' : '')}>
                {children}
            </nav>
        </div>
    )
}

export default Dropdown;
