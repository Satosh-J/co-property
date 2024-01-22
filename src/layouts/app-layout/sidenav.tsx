import React, {useState} from "react"
import { useLocation, Link } from "react-router-dom"
import { Navbar, Nav } from 'react-bootstrap'
import { APP_PREFIX_PATH, AUTH_PREFIX_PATH } from 'configs/config'
import { useAppDispatch, useAppSelector } from "hooks";
import ActionTypes from "store/constants/ActionTypes"

import logo from 'assets/images/logo.svg'
import miniLogo from 'assets/images/logo-mini.svg'
import { Button } from "components/Base";

const menus = [
    {
        url: '/dashboard',
        caption: 'Dashboard',
        icon: 'dashboard',
    },
    {
        url: '/task',
        caption: 'Task',
        icon: 'task',
    },
    {
        url: '/follow-ups',
        caption: 'Follow Ups',
        icon: 'follow-up',
    },
    {
        url: '/properties',
        caption: 'Properties',
        icon: 'property',
    },
    {
        url: '/contacts',
        caption: 'Contacts',
        icon: 'contact',
    },
    {
        url: '/pipeline',
        caption: 'Pipeline',
        icon: 'pipeline',
    },
    {
        url: '/map',
        caption: 'Map View',
        icon: 'map',
    },
    {
        url: '/marketing',
        caption: 'Marketing',
        icon: 'marketing',
    },
    {
        url: '/report',
        caption: 'Report',
        icon: 'report',
    },
    {
        url: '/status',
        caption: 'Status',
        icon: 'status',
    },
    {
        url: '/messages',
        caption: 'Messages',
        icon: 'message',
    }
]


export const SideNav = () => {
    const location = useLocation();
	const [expanded, setExpanded] = useState(false);
	const dispatch = useAppDispatch();	
    const isMiniSidebar = useAppSelector(state => state.setting.isMiniSidebar);
	
    const isCurrent = (url : string) => {
        if( location.pathname.startsWith(url) ){
            return "current"
        }
        return ""
    }

	const hideSideBar = () => {
		setExpanded(false)
	}

    const toggleMiniSidebar = () => {
        dispatch({ type: ActionTypes.MINI_SIDEBAR, payload: !isMiniSidebar});
    }

	return (
		<Navbar expanded={expanded} expand="lg" className="d-flex flex-lg-column flex-row navbar-default h-100" onToggle={() => setExpanded(!expanded)}>
            <div className="navbar-header d-flex align-items-center justify-content-between w-100">
                <Navbar.Brand href="#" className="co-brand">        
                    <img src={logo} alt="co-property" className="d-lg-none" />            
                    {!isMiniSidebar &&
                        <img src={logo} alt="co-property" className="d-lg-block d-none" />
                    }
                    {isMiniSidebar &&
                        <img src={miniLogo} alt="co-property" className="d-lg-block d-none mx-auto" />
                    }
                </Navbar.Brand>
                
                <div className="d-flex">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="justify-content-end" >
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </Navbar.Toggle>
                </div>
            </div>

            <Navbar.Collapse id="responsive-navbar-nav" className="w-100 align-items-start">
                <Nav className="co-navmenu d-flex flex-column nav navbar-nav w-100">
					{menus.map((menu, idx) => (	
                        <Link  
                            to={`${APP_PREFIX_PATH}${menu.url}`} 
                            className={`co-navlinks sidebar-navbar-link ${menu.icon} ${isCurrent(APP_PREFIX_PATH + menu.url)}`} 
                            key={idx}							
                            onClick={hideSideBar}
                        >
                            {menu.caption}
                        </Link>
                    ))}
                </Nav>
            </Navbar.Collapse>
            
            <div className="co-navmenu-footer d-none d-lg-block mb-5">
                <Button icon={isMiniSidebar ? 'arrow-right' : 'arrow-left'} iconSize="md" iconPos="center" className="secondary square" onClick={toggleMiniSidebar}>
                </Button>
            </div>
        </Navbar>
	)
}

export default SideNav