import React, {useCallback} from "react"
import { useLocation, Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "hooks";
import { APP_PREFIX_PATH, AUTH_PREFIX_PATH } from 'configs/config'

import { Input, Dropdown } from "components/Base"
import Badge from "components/Badge";
import Icon from "components/Icon";

export const Header = () => {
	const profile = useAppSelector(state => state.auth.profile);

    const profileMenu = useCallback(() => (
        <>
            <div className="co-avatar co-profile-avatar">
                <img src={profile.avatar} />
            </div>
            <div className="co-profile-avatar-name">
                {profile.firstName} {profile.lastName} 
            </div>
        </>
    ),[profile])

	return (
		<>
            <div className="co-top-header-left">
                <Input type="search" icon="search" className="co-top-search-field" placeholder="Search" />
            </div>
            <div className="co-top-header-right d-flex align-items-center">
                <div className="co-top-header-bell">
                    <Badge icon="bell" color="primary" />
                </div>
                <div className="co-top-header-profile">
                    <Dropdown button={profileMenu} >
                        <div className="co-dropdown-link">
                            <Icon icon="settings" />
                            <span className="ms-2">Settings</span>
                        </div>
                        <div className="co-dropdown-link">
                            <Icon icon="signout" />
                            <span className="ms-2">Sign Out</span>
                        </div>
                    </Dropdown>
                </div>
            </div>
        </>
	)
}

export default Header