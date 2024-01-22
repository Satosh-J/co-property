import React, {useState, useEffect, useRef} from "react"
import { useAppDispatch, useAppSelector } from "hooks";
import _debounce from 'lodash/debounce';
import { ButtonGroup, Button, Card  } from "components/Base"
import Calendar from 'components/Calendar'
import CalendarToolbar from 'components/Calendar/Toolbar'
import Pagination from 'components/Pagination'
import ModalAddTask from "components/Modal/ModalTask";
import { CalendarViewMode } from "types";

import { fakeTasks } from "fakes/task"
import TaskList from "./tasklist";

const LIST_VIEW = 0;
const CALENDAR_VIEW = 1;

export const Task = () => {
	const dispatch = useAppDispatch()
	const [filteredTaskData, setFilteredTaskData] = useState(fakeTasks)
	const refContainer = useRef<HTMLDivElement>(null)

	const [currentDate, setCurrentDate] = useState(new Date())
	const [startDateRange, setStartDateRange] = useState(new Date())
	const [endDateRange, setEndDateRange] = useState(new Date())

    const [currentView, setCurrentView] = useState(LIST_VIEW)
    const [calendarView, setCalendarView] = useState(CalendarViewMode.WEEK)
	const [currentPage, setCurrentPage] = useState(1)
	const [allPages, setAllPages] = useState(5)
	
	const [calendarStyle, setCalendarStyle] = useState({})
	const [modalAddTaskVisible, setModalAddTaskVisible] = useState(false)

	const resizeHandler = () => {
		if(window.innerWidth > 991) {
			if( refContainer.current ) {
				const rectContainer = refContainer.current.getBoundingClientRect()				
				const calendarHeight = rectContainer.height - 152;
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

	return (
		<>
            <div className="page-header d-flex justify-content-between align-items-center">
                <h2>Your Tasks</h2>
                <ButtonGroup current={currentView} onChange={(view) => setCurrentView(view)}>
                    <Button icon="list" iconSize="xs">List</Button>
                    <Button icon="calendar" iconSize="xs">Calendar</Button>
                </ButtonGroup>
            </div>
			
			<div className="co-content-main-wrapper d-flex flex-column flex-1" ref={refContainer}>
				<Card className="flex-1">
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
							<Button className="primary" icon="plus" onClick={() => setModalAddTaskVisible(true)}>
								Add Task
							</Button>
						}
					/>

					{currentView === LIST_VIEW &&
						<TaskList tasks={filteredTaskData} />
					}
					{currentView === CALENDAR_VIEW &&
						<Calendar viewMode={calendarView} date={currentDate} events={fakeTasks} style={calendarStyle}/>
					}
				</Card>

				{currentView === LIST_VIEW &&
				<div className="mt-3">
					<Pagination className="justify-content-center" page={currentPage} pages={allPages} onChange={setCurrentPage} />
				</div>
				}

				{modalAddTaskVisible &&
					<ModalAddTask onClose={() => setModalAddTaskVisible(false)}/>
				}
			</div>
		</>
	)
}

export default Task