import React, { ReactNode, useState, useMemo } from 'react';
import { CalendarViewMode } from "types";
import { 
	getBeginningOfTheWeek, 
	getEndingOfTheWeek, 
	getNextWeekDate, 
	getLastWeekDate, 
	getBeginningOfMonth, 
	getEndingOfMonth, 
	getNextMonthDate, 
	getLastMonthDate, 
	getYesterday,
	getTomorrow,
    getStartOfDate,
    getEndOfDate,    
	daterange2str, 
	date2str
} from "helpers/utils";

import { Button, ButtonGroup } from 'components/Base'

interface CoCalendarToolbarProps {
    className?: string,
    viewMode: CalendarViewMode,
    updateDateRange?: (startDate: Date, endDate: Date) => void,
    updateDate?: (date: Date) => void,
    updateViewMode?: (mode: CalendarViewMode) => void,
    actionEle?: () => ReactNode
}

const CalendarToolbar = function({
    className='',
    viewMode,
    updateDateRange,
    updateDate,
    updateViewMode,
    actionEle
}: CoCalendarToolbarProps) {
	const [currentDate, setCurrentDate] = useState(new Date())
    
	const dateRange = useMemo(() : string => {
		let startDate, endDate;
		if(viewMode === CalendarViewMode.WEEK) {
			startDate = getBeginningOfTheWeek(currentDate)
			endDate = getEndingOfTheWeek(currentDate)
			if( updateDateRange )
            	updateDateRange(startDate, endDate)
			return daterange2str(startDate, endDate)
		}

		if(viewMode === CalendarViewMode.MONTH) {
			startDate = getBeginningOfMonth(currentDate)
			endDate = getEndingOfMonth(currentDate)
			if( updateDateRange )
            	updateDateRange(startDate, endDate)
			return daterange2str(startDate, endDate)
		}
		
		if(viewMode === CalendarViewMode.DAY) {            
			startDate = getStartOfDate(currentDate)
			endDate = getEndOfDate(currentDate)
			if( updateDateRange )
            	updateDateRange(startDate, endDate)
			return date2str(currentDate)
		}
		return '';
	}, [viewMode, currentDate])
    
	const updateCalendarView = (view : CalendarViewMode) => {
        if(updateViewMode)
		    updateViewMode(view)
	}
    
	const goPrev = () => {
		let date;
		if(viewMode === CalendarViewMode.WEEK)
			date = getLastWeekDate(currentDate)
		else if(viewMode === CalendarViewMode.MONTH)
			date = getLastMonthDate(currentDate)
		else
			date = getYesterday(currentDate)

		setCurrentDate(date)
		if(updateDate)
			updateDate(date)
	}
	const goNext = () => {
		let date;
		if(viewMode === CalendarViewMode.WEEK)
			date = getNextWeekDate(currentDate)
		else if(viewMode === CalendarViewMode.MONTH)
			date = getNextMonthDate(currentDate)
		else 
			date = getTomorrow(currentDate)

		setCurrentDate(date)
		if(updateDate)
			updateDate(date)
	}
    
    return (           
        <div className={`calendar-top-menu d-flex justify-content-between align-items-center flex-wrap ${className}`}>
            <div className="calendar-view-mode d-flex justify-content-center">
                <ButtonGroup current={viewMode} onChange={updateCalendarView} theme="normal">
                    <Button size="sm">Day</Button>
                    <Button size="sm">Week</Button>
                    <Button size="sm">Month</Button>
                </ButtonGroup>
            </div>
            <div className="calendar-view-date-range d-flex justify-content-center align-items-center">
                <Button size="sm" icon="arrow-left" iconSize="md" iconPos="center" className="secondary square" onClick={() => goPrev()}/>
                <div className="co-calendar-range-text mx-2">{ dateRange }</div>
                <Button size="sm" icon="arrow-right" iconSize="md" iconPos="center" className="secondary square" onClick={() => goNext()} />
            </div>
            <div className="calendar-view-add-task d-flex justify-content-center">
                { actionEle &&
                    actionEle()
                }
            </div>
        </div>
    );
}

export default CalendarToolbar;
