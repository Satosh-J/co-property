import React, {useState, useEffect, useRef} from "react"
import { Link, useHistory } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "hooks";
import { APP_PREFIX_PATH, AUTH_PREFIX_PATH } from 'configs/config'
import _debounce from 'lodash/debounce';
import { Button, Card } from "components/Base";
import Calendar from 'components/Calendar'
import { Row, Col } from "react-bootstrap";
import TaskList from "./tasklist"
import Activities from "./activities"
import Visits from "./visits";
import QuickLinks from "./links";
import CalendarToolbar from 'components/Calendar/Toolbar'
import { CalendarViewMode } from "types";
import ModalAddEvent from "components/Modal/ModalEvent";

export const Dashboard = () => {
	const profile = useAppSelector(state => state.auth.profile);
	const tasks = useAppSelector(store => store.app.tasks);
	const dispatch = useAppDispatch()

	const refContainer = useRef<HTMLDivElement>(null)
	
	const [currentDate, setCurrentDate] = useState(new Date())
	const [startDateRange, setStartDateRange] = useState(new Date())
	const [endDateRange, setEndDateRange] = useState(new Date())
    const [calendarView, setCalendarView] = useState(CalendarViewMode.WEEK)
	const [calendarStyle, setCalendarStyle] = useState({})
	const [modalEventVisible, setModalEventVisible] = useState(false)

	const resizeHandler = () => {
		if(window.innerWidth > 1200) {
			if( refContainer.current ) {
				const rectContainer = refContainer.current.getBoundingClientRect()				
				const calendarHeight = rectContainer.height - 200 - 188;
				setCalendarStyle({height: `${calendarHeight}px`})
			}
		} else {
			setCalendarStyle({minHeight: '400px'})
		}
	}
	
    const debounceResize = _debounce(resizeHandler, 300);

	useEffect(() => {	
		resizeHandler();	
		window.addEventListener('resize', debounceResize);
		return () => {
			window.removeEventListener('resize', debounceResize);
		};
	}, [])

	const handleAddEvent = () => {
		setModalEventVisible(true)
	}


	return (
		<>
			<h2 className="page-header">Welcome back, {profile.firstName}!</h2>
			<div className="co-content-main-wrapper d-flex flex-column flex-1" ref={refContainer}>
				<Row className="page-content gy-3">
					<Col xl={3} className="co-content-home-left d-flex flex-column">
						<TaskList />

						<Activities />
					</Col>
					<Col xl={9} className="d-flex flex-column flex-1">
						<Row className="gy-3">
							<Col lg={5}>
								<Visits />
							</Col>
							<Col lg={7}>
								<QuickLinks />
							</Col>						
						</Row>
						<Card title="Calendar" className="mt-3 flex-1">							
							<CalendarToolbar 
								className="mb-3"
								viewMode={calendarView}
								updateDate={(date) => setCurrentDate(date)}
								updateDateRange={(start, end) => {
									setStartDateRange(start);
									setEndDateRange(end);
								}}
								updateViewMode={(mode) => setCalendarView(mode)}
								actionEle={ () => 
									<Button className="primary" icon="plus" onClick={handleAddEvent}>
										Add Event
									</Button>
								}
							/>
							<Calendar viewMode={calendarView} date={currentDate} events={tasks} style={calendarStyle}/>

							{modalEventVisible &&
								<ModalAddEvent onClose={() => setModalEventVisible(false)} />
							}
						</Card>
					</Col>
				</Row>
			</div>
		</>
	)
}

export default Dashboard