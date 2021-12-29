import React from 'react'
import TimeTable from 'react-timetable-events'

function Timetablee() {

    let events = {
        "Monday": [
            {
                endTime: new Date('2018-02-23T08:00:00'),
                name: '',
                startTime: new Date('2018-02-23T07:00:00'),
                type: 'custom'
            }
        ],
        "Tuesday": [],
        "Wednesday": [
            {
                endTime: new Date('2018-02-23T16:00:00'),
                name: '',
                startTime: new Date('2018-02-23T15:00:00'),
                type: 'custom'
            }
        ],
        "Thursday": [],
        "Friday": [
            {
                endTime: new Date('2018-02-23T17:00:00'),
                name: '',
                startTime: new Date('2018-02-23T16:00:00'),
                type: 'custom'
            }
        ],
        "Saturday": [],
        "Sunday": [
            {
                endTime: new Date('2018-02-23T19:00:00'),
                name: '',
                startTime: new Date('2018-02-23T18:00:00'),
                type: 'custom'
            }
        ],
    };

    // events.Tuesday = [
    //     {
    //         endTime: new Date('2018-02-23T10:00:00'),
    //         name: '',
    //         startTime: new Date('2018-02-23T08:00:00'),
    //         type: 'custom'
    //     }
    // ]

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
                                fontSize: '15px'
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
                        fontSize: '13px'
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

export default Timetablee
