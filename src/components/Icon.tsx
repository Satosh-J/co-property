import React from 'react';
import {ReactComponent as Search} from 'assets/images/icon-search.svg'
import {ReactComponent as ArrowPrev} from 'assets/images/icon-arrow-prev.svg'
import {ReactComponent as ArrowNext} from 'assets/images/icon-arrow-next.svg'
import {ReactComponent as ArrowLeft} from 'assets/images/icon-arrow-left.svg'
import {ReactComponent as ArrowRight} from 'assets/images/icon-arrow-right.svg'
import {ReactComponent as Bell} from 'assets/images/icon-bell.svg'
import {ReactComponent as Dropdown} from 'assets/images/icon-dropdown.svg'
import {ReactComponent as Email} from 'assets/images/icon-mail.svg'
import {ReactComponent as Phone} from 'assets/images/icon-phone.svg'
import {ReactComponent as PhoneCall} from 'assets/images/icon-phone-call.svg'
import {ReactComponent as SMS} from 'assets/images/icon-sms.svg'
import {ReactComponent as Calendar} from 'assets/images/icon-calendar-blue.svg'
import {ReactComponent as List} from 'assets/images/icon-list-blue.svg'
import {ReactComponent as Plus} from 'assets/images/icon-plus-blue.svg'
import {ReactComponent as Check} from 'assets/images/icon-check-blue.svg'
import {ReactComponent as Upload} from 'assets/images/icon-upload.svg'
import {ReactComponent as Settings} from 'assets/images/icon-settings.svg'
import {ReactComponent as SignOut} from 'assets/images/icon-signout.svg'
import {ReactComponent as Dots} from 'assets/images/icon-dots.svg'
import {ReactComponent as Note} from 'assets/images/icon-note.svg'
import {ReactComponent as LineChart} from 'assets/images/icon-linechart.svg'
import {ReactComponent as Individual} from 'assets/images/icon-individual.svg'
import type {TYPE_SIZE} from "types"

interface IconProps {
    width?: number,
    height?: number,
    icon?: string,
    size?: TYPE_SIZE,
    className?: string
}

const icons = [
    {
        name: 'search',
        icon: (props : IconProps) => <Search {...props}  method='stroke'/>
    },
    {
        name: 'arrow-prev',
        icon: (props : IconProps) => <ArrowPrev {...props} method='stroke'/>
    },
    {
        name: 'arrow-next',
        icon: (props : IconProps) => <ArrowNext {...props}  method='stroke'/>
    },
    {
        name: 'arrow-left',
        icon: (props : IconProps) => <ArrowLeft {...props}  method='stroke'/>
    },
    {
        name: 'arrow-right',
        icon: (props : IconProps) => <ArrowRight {...props} method='stroke'/>
    },    
    {
        name: 'arrow-up',
        icon: (props : IconProps) => <ArrowLeft {...props}  method='stroke' style={{transform: 'rotate(90deg)'}}/>
    },
    {
        name: 'arrow-down',
        icon: (props : IconProps) => <ArrowLeft {...props} method='stroke' style={{transform: 'rotate(-90deg)'}}/>
    },
    {
        name: 'bell',
        icon: (props : IconProps) => <Bell {...props} method='fill'/>
    },
    {
        name: 'dropdown',
        icon: (props : IconProps) => <Dropdown {...props} method='stroke'/>
    },
    {
        name: 'email',
        icon: (props : IconProps) => <Email {...props} method='fill'/>
    },
    {
        name: 'phone',
        icon: (props : IconProps) => <Phone {...props} method='fill'/>
    },
    {
        name: 'phone-call',
        icon: (props : IconProps) => <PhoneCall {...props} method='fill'/>
    },
    {
        name: 'sms',
        icon: (props : IconProps) => <SMS {...props} method='fill'/>
    },
    {
        name: 'calendar',
        icon: (props : IconProps) => <Calendar {...props} method='stroke'/>
    },
    {
        name: 'list',
        icon: (props : IconProps) => <List {...props} method='fill'/>
    },
    {
        name: 'plus',
        icon: (props : IconProps) => <Plus {...props} method='fill'/>
    },
    {
        name: 'check',
        icon: (props : IconProps) => <Check {...props} method='fill'/>
    },
    {
        name: 'upload',
        icon: (props : IconProps) => <Upload {...props} method='fill'/>
    },
    {
        name: 'settings',
        icon: (props : IconProps) => <Settings {...props} method='fill'/>
    },
    {
        name: 'signout',
        icon: (props : IconProps) => <SignOut {...props} method='fill'/>
    },
    {
        name: 'dots',
        icon: (props : IconProps) => <Dots {...props} method='fill'/>
    },
    {
        name: 'note',
        icon: (props : IconProps) => <Note {...props} method='fill'/>
    },
    {
        name: 'line-chart',
        icon: (props : IconProps) => <LineChart {...props} method='fill'/>
    },
    {
        name: 'individual',
        icon: (props : IconProps) => <Individual {...props} method='fill'/>
    },
]

const Icon = (props : IconProps) : JSX.Element => {
    if(props.icon === undefined)
        return (
            <></>
        )
    const filteredIcon = icons.filter((icon) => props.icon === icon.name );    

    if( filteredIcon.length == 0 )
        return (
            <></>
        );

    const iconSvg = filteredIcon[0].icon
    
    let width = 0;
    let height = 0;
    
    if( props.size === 'xxl' ) {        
        width = 40;
        height = 40;
    } else if( props.size === 'xl' ) {
        width = 20;
        height = 20;
    } else if( props.size === 'lg' ) {
        width = 18;
        height = 18;
    } else if( props.size === 'md' ) {
        width = 16;
        height = 16;
    } else if( props.size === 'sm' ) {
        width = 14;
        height = 14;
    } else if( props.size === 'xs' ) {
        width = 12;
        height = 12;
    }
    
    let newProps = props;
    if(width == 0 || height == 0) {

    } else {
        newProps = {   
            width: props.width || width,
            height: props.height || height,
            ...props
        }
    }
    
    return (
      <>
        {iconSvg(newProps)}
      </>
    );
}

export default Icon;
