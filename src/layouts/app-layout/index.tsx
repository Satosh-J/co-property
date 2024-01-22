import React, { lazy, Suspense }  from "react"
import { Switch, Route } from "react-router-dom"
import { Spinner } from "react-bootstrap"
import { APP_PREFIX_PATH, AUTH_PREFIX_PATH } from 'configs/config'
import { useAppSelector } from "hooks";

import SideNav from "./sidenav"
import Header from "./header"

const Loading = () => (
	<div className="loading cover-content">
		<Spinner animation="border" variant="primary" />
	</div>
)

export const AppLayout = () => {
	
    const isMiniSidebar = useAppSelector(state => state.setting.isMiniSidebar);

	return (
		<div className={`co-main ${isMiniSidebar ? 'mini-sidebar' : ''}`}>
			<div className="co-left-panel">
				<SideNav />
			</div>
			<div className="co-content d-flex flex-column">
				<div className="co-top-header d-flex justify-content-between align-items-center">
					<Header />
				</div>
				<div className="co-content-main d-flex flex-column flex-1">
					<Suspense fallback={<Loading />}>
						<Switch>				
							<Route path={`${APP_PREFIX_PATH}/dashboard`} component={lazy(() => import('pages/dashboard'))} />
							<Route path={`${APP_PREFIX_PATH}/task`} component={lazy(() => import('pages/task'))} />
							<Route path={`${APP_PREFIX_PATH}/follow-ups`} component={lazy(() => import('pages/follow-up'))} />
							<Route path={`${APP_PREFIX_PATH}/contacts/add/individual`} component={lazy(() => import('pages/contact/add-individual-contact'))} />
							<Route path={`${APP_PREFIX_PATH}/contacts/add/company`} component={lazy(() => import('pages/contact/add-company-contact'))} />
							<Route path={`${APP_PREFIX_PATH}/contacts/add`} component={lazy(() => import('pages/contact/add-contact'))} />
							<Route path={`${APP_PREFIX_PATH}/contacts/:contactId`} component={lazy(() => import('pages/contact/contact-details'))} />
							<Route path={`${APP_PREFIX_PATH}/contacts`} component={lazy(() => import('pages/contact'))} />
						</Switch>
					</Suspense>
				</div>
			</div>
		</div>
	)
}

export default AppLayout