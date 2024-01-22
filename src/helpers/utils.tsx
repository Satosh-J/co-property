export const date2str = (date : Date | string) : string =>  {
    const cTime = new Date(date)
    
    // const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octobor", "November", "December"];
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return month[cTime.getMonth()] + " " + cTime.getDate() + ", " + cTime.getFullYear()
}

export const date2normal = (date : Date | string) : string =>  {
    const cTime = new Date(date)
    
    return (cTime.getMonth() + 1) + "/" + cTime.getDate() + "/" + cTime.getFullYear()
}

export const time2str = (date : Date | string) : string =>  {
    const cTime = new Date(date)    
    const hour = cTime.getHours();
    
    return (hour % 12 === 0 ? 12 : hour) + ":" + cTime.getMinutes() + " " + (hour < 12 ? 'AM' : 'PM')
}

export const daterange2str = (dateFrom : Date | string, dateTo : Date | string) : string =>  {
    const cTime = new Date(dateFrom)
    const lTime = new Date(dateTo)
    
    if(cTime.getFullYear() === lTime.getFullYear()) {
        const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        
        if(cTime.getMonth() === lTime.getMonth()) {
            return month[cTime.getMonth()] + " " + cTime.getDate() + " - " + lTime.getDate() + ", " + cTime.getFullYear()
        } else {
            return month[cTime.getMonth()] + " " + cTime.getDate() + " - " + month[lTime.getMonth()] + " " + lTime.getDate() + ", " + cTime.getFullYear()
        }
    } else 
        return date2str(dateFrom) + ' - ' + date2str(dateTo)    
}

export const timerange2str = (dateFrom : Date | string, dateTo : Date | string) : string =>  {
    const cTime = new Date(dateFrom)
    const lTime = new Date(dateTo)   
    return cTime.getHours() + ":" + cTime.getMinutes() + "-" + lTime.getHours() + ":" + lTime.getMinutes()
}

export const passedTime = (time : Date | string) : string => {
    const now = new Date();
    const oldTime = new Date(time)
    let timeDiff = now.getTime() - oldTime.getTime(); //in ms

    timeDiff /= 1000;   // sec

    if(timeDiff < 60) {
        return Math.round(timeDiff) + 's'
    } else {
        timeDiff /= 60; // min
        if(timeDiff < 60) {
            return Math.round(timeDiff) + 'm'
        } else {
            timeDiff /= 60; // hour
            if(timeDiff < 24) {
                return Math.round(timeDiff) + 'h'
            } else {
                timeDiff /= 24; // day
            }   
        }
    }

    return Math.round(timeDiff) + 'd'
}

export const elapsedTime = (sec : number) : string => {
    
    const sSec = ("0" + (sec % 60)).slice(-2)
    const sMin = ("0" + ((sec / 60) % 60)).slice(-2)
    const sHour = ("0" + (Math.floor(sec / 3600))).slice(-2)

    return sHour + ":" + sMin + ":" + sSec
}


export const getBeginningOfTheWeek = (date: Date | string) : Date => {
    let cTime = new Date(date)
    const firstday = cTime.getDate() - cTime.getDay();    
    cTime.setDate(firstday)
    cTime.setHours(0, 0, 0, 0)
    return cTime;
}

export const getEndingOfTheWeek = (date: Date | string) : Date => {
    let cTime = new Date(date)
    const lastday = cTime.getDate() + (6 - cTime.getDay());
    cTime.setDate(lastday)
    cTime.setHours(23, 59, 59, 999)
    return cTime;
}

export const getLastWeekDate = (date: Date | string) : Date => {
    let cTime = new Date(date)
    cTime.setDate(cTime.getDate() - 7)
    return cTime;
}

export const getNextWeekDate = (date: Date | string) : Date => {
    let cTime = new Date(date)
    cTime.setDate(cTime.getDate() + 7)
    return cTime;
}

export const getBeginningOfMonth = (date: Date | string) : Date => {
    let cTime = new Date(date)
    cTime.setDate(1)    
    cTime.setHours(0, 0, 0, 0)
    return cTime;
}

export const getEndingOfMonth = (date: Date | string) : Date => {
    let cTime = new Date(date)    
    cTime.setMonth(cTime.getMonth() + 1)
    cTime.setDate(0)
    cTime.setHours(0, 0, 0, 0)
    return cTime;
}

export const getLastMonthDate = (date: Date | string) : Date => {
    let cTime = new Date(date)
    cTime.setMonth(cTime.getMonth() - 1)
    return cTime;
}

export const getNextMonthDate = (date: Date | string) : Date => {
    let cTime = new Date(date)
    cTime.setMonth(cTime.getMonth() + 1)
    return cTime;
}

export const getYesterday = (date: Date | string) : Date => {
    let cTime = new Date(date)
    cTime.setDate(cTime.getDate() - 1)
    return cTime;
}

export const getTomorrow = (date: Date | string) : Date => {
    let cTime = new Date(date)
    cTime.setDate(cTime.getDate() + 1)
    return cTime;
}

export const getStartOfDate = (date: Date | string) : Date => {
    let cTime = new Date(date)
    cTime.setHours(0, 0, 0, 0)
    return cTime;
}

export const getEndOfDate = (date: Date | string) : Date => {
    let cTime = new Date(date)
    cTime.setHours(23, 59, 59, 999)
    return cTime;
}

export const truncate = (str: string, n: number) : string => {
    return (str.length > n) ? str.substr(0, n-1) + '...' : str;
}