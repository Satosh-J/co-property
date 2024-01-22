import React, { CSSProperties, useState } from 'react';
import { 
    Calendar as BigCalendar, 
    dateFnsLocalizer, 
    Views, 
    Components, 
    HeaderProps,
    stringOrDate,
    EventProps
} from 'react-big-calendar'
import { CalendarViewMode, Task } from "types";
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'

import { Button } from 'components/Base'
import { timerange2str } from 'helpers/utils'


const locales = {
    'en-US': enUS,
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
})

interface CoCalendarProps {
    style?: CSSProperties | undefined,
    viewMode: CalendarViewMode,
    date?: Date | string,
    events?: Task[]
}

interface EventExpandedStatus {
    [key: string | number]: boolean
}

const Calendar = function({
    style,
    viewMode,
    date,
    events,
}: CoCalendarProps) {
    const defaultView = viewMode === CalendarViewMode.WEEK ? Views.WEEK : (viewMode === CalendarViewMode.MONTH ? Views.MONTH : Views.DAY)
    
    const [expanded, setExpanded] = useState<EventExpandedStatus>({})

    const eventPropHandler = (event: Task, start: stringOrDate, end: stringOrDate, isSelected: boolean) => {
        let isExpanded = expanded[event.id] || false;
        return {
            className: `${event.priority} ${isExpanded ? 'expanded' : ''}`
        }
    }

    const handleEventExpand = (id: string | number) => {
        let isExpanded = expanded[id] || false;
        
        setExpanded({
            ...expanded,
            [id]: !isExpanded
        })
    }

    const customWeekEvent = ({event} : EventProps<Task>) => {
        return (
            <div className={`co-calendar-event-wrapper`}>
                <div className="co-calendar-event-header d-flex justify-content-between align-items-center">
                    <div className={`co-calendar-event-mark ${event.priority}`}>Event</div>
                    <div className="co-calendar-event-time">
                        {timerange2str(event.start_date, event.due_date)}
                    </div>
                </div>
                <div className={`co-calendar-event-title mt-1 ${expanded[event.id] ? 'expanded' : ''}`}>
                    {event.title}
                </div>        
                <div className="co-calendar-event-button-expand flex-0">                    
                    <Button className={`secondary ms-1`} icon={ expanded[event.id] ? "arrow-up" : "arrow-down" } size="xs" circle onClick={() => handleEventExpand(event.id)} />
                </div>
                {expanded[event.id] &&
                    <div className="co-calendar-event-desc mt-2">
                        {event.description}
                    </div>
                }
            </div>
        )        
    }

    const customWeekHeader = ({date, label, localizer} : HeaderProps) => {
        return (
            <div>
                <span>{date.getDate()}</span>
                <span className="co-calendar-header-day">{format(date, 'EEE')}</span>
            </div>
        )
    }
    
    const customDayEvent = ({event} : EventProps<Task>) => {
        return (
            <div className={`co-calendar-event-wrapper`}>
                <div className="co-calendar-event-header d-flex align-items-center">
                    <div className={`co-calendar-event-mark ${event.priority}`}>Event</div>
                    <div className="co-calendar-event-time ms-2">
                        {timerange2str(event.start_date, event.due_date)}
                    </div>
                </div>
                <div className={`co-calendar-event-title mt-1 ${expanded[event.id] ? 'expanded' : ''}`}>
                    {event.title}
                </div>        
                <div className="co-calendar-event-button-expand flex-0">                    
                    <Button className={`secondary ms-1`} icon={ expanded[event.id] ? "arrow-up" : "arrow-down" } size="xs" circle onClick={() => handleEventExpand(event.id)} />
                </div>
                {expanded[event.id] &&
                    <div className="co-calendar-event-desc mt-2">
                        {event.description}
                    </div>
                }
            </div>
        )        
    }
    
    const customMonthEvent = ({event} : EventProps<Task>) => {
        return (
            <div className={`co-calendar-event-wrapper`}>
                <div className="d-flex align-items-center">
                    <div className={`co-calendar-event-dot flex-0 me-1 ${event.priority}`}></div>
                    <div className="co-calendar-event-title">
                        {event.title}
                    </div>        
                </div>
                <div className="co-calendar-event-button-expand flex-0">                    
                    {/* <Button className={`secondary ms-1`} icon={ expanded[event.id] ? "arrow-up" : "arrow-down" } size="xs" circle onClick={() => handleEventExpand(event.id)} /> */}
                </div>
                {expanded[event.id] &&
                    <div className="co-calendar-event-desc mt-2">
                        {event.description}
                    </div>
                }
            </div>
        )        
    }

    
    const customMonthHeader = ({date, label, localizer} : HeaderProps) => {
        return (
            <div>
                {format(date, 'EEE')}
            </div>
        )
    }

    let components : Components<Task, object>  = {
        day: {
            event: customDayEvent
        },
        week: {
            header: customWeekHeader,
            event: customWeekEvent,
        },
        month: {
            header: customMonthHeader,
            event: customMonthEvent,
        }
    }
    return (           
        <div className={`co-calendar-wrapper ${defaultView}`}>
            <BigCalendar
                localizer={localizer}            
                startAccessor="start_date"
                endAccessor="due_date"
                allDayAccessor={() => false}
                events={events}
                date={date}
                view={defaultView}
                toolbar={false}
                style={style}
                step={15}
                timeslots={4}
                components={components}
                popup={true}
                eventPropGetter={eventPropHandler}
                onView={() => {}}
                onNavigate={date => {}}
            />
        </div>
    );
}

export default Calendar;
