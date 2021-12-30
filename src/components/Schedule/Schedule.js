import React from 'react'
import TimeTable from 'react-timetable-events'

function Schedule({ eventsFinded }) {

    let events = {
        "Monday": [],
        "Tuesday": [],
        "Wednesday": [],
        "Thursday": [],
        "Friday": [],
        "Saturday": [],
        "Sunday": [],
    };


    // Thứ 2
    events.Monday = eventsFinded.filter(schedule => {
        return schedule.day == 'Monday';
    })

    events.Monday = events.Monday.map(event => {
        return ({
            ...event,
            startTime: new Date(`2018-02-23T${event.startTime}:00:00`),
            endTime: new Date(`2018-02-23T${event.endTime}:00:00`),
        })
    })

    // Thứ 3
    events.Tuesday = eventsFinded.filter(schedule => {
        return schedule.day == 'Tuesday';
    })

    events.Tuesday = events.Tuesday.map(event => {
        return ({
            ...event,
            startTime: new Date(`2018-02-23T${event.startTime}:00:00`),
            endTime: new Date(`2018-02-23T${event.endTime}:00:00`),
        })
    })

    // Thứ 4
    events.Wednesday = eventsFinded.filter(schedule => {
        return schedule.day == 'Wednesday';
    })

    events.Wednesday = events.Wednesday.map(event => {
        return ({
            ...event,
            startTime: new Date(`2018-02-23T${event.startTime}:00:00`),
            endTime: new Date(`2018-02-23T${event.endTime}:00:00`),
        })
    })

    // Thứ 5
    events.Thursday = eventsFinded.filter(schedule => {
        return schedule.day == 'Thursday';
    })

    events.Thursday = events.Thursday.map(event => {
        return ({
            ...event,
            startTime: new Date(`2018-02-23T${event.startTime}:00:00`),
            endTime: new Date(`2018-02-23T${event.endTime}:00:00`),
        })
    })

    // Thứ 6
    events.Friday = eventsFinded.filter(schedule => {
        return schedule.day == 'Friday';
    })

    events.Friday = events.Friday.map(event => {
        return ({
            ...event,
            startTime: new Date(`2018-02-23T${event.startTime}:00:00`),
            endTime: new Date(`2018-02-23T${event.endTime}:00:00`),
        })
    })

    // Thứ 7
    events.Saturday = eventsFinded.filter(schedule => {
        return schedule.day == 'Saturday';
    })

    events.Saturday = events.Saturday.map(event => {
        return ({
            ...event,
            startTime: new Date(`2018-02-23T${event.startTime}:00:00`),
            endTime: new Date(`2018-02-23T${event.endTime}:00:00`),
        })
    })

    // Chủ nhật
    events.Sunday = eventsFinded.filter(schedule => {
        return schedule.day == 'Sunday';
    })

    events.Sunday = events.Sunday.map(event => {
        return ({
            ...event,
            startTime: new Date(`2018-02-23T${event.startTime}:00:00`),
            endTime: new Date(`2018-02-23T${event.endTime}:00:00`),
        })
    })

    return (
        <TimeTable
            events={events}
            hoursInterval={{
                from: 7,
                to: 21
            }}
            renderEvent={({ event, defaultAttributes, classNames }) => {
                return (
                    <div {...defaultAttributes} title={event.name} key={event.id}
                        style={{
                            ...defaultAttributes.style,
                            borderRadius: '5px',
                            backgroundColor: 'var(--primary-color)',
                        }}
                    >
                        <span
                            className={classNames.event_info}
                            style={{
                                color: 'white',
                                fontSize: '12px'
                            }}
                        >
                            {event.name}
                        </span>
                    </div>
                );
            }}
            renderHour={({ hour, defaultAttributes }) => (
                <div
                    {...defaultAttributes}
                    key={hour}
                    style={{
                        ...defaultAttributes.style,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'var(--primary-color)',
                        fontSize: '12px'
                    }}
                >
                    {hour}
                </div>
            )}
            getDayLabel={(day) => day}
            timeLabel="Time"
        />
    )
}
export default Schedule
