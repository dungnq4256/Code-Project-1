import React, { Component } from "react";

import TimeTable from "react-timetable-events";
import PropTypes from 'prop-types'

export default class Schedule extends Component {
    constructor() {
        TimeTable.propTypes = {
            events: PropTypes.object.isRequired, // events object prepared with days and list of events
            hoursInterval: PropTypes.shape({
                from: PropTypes.number.isRequired,
                to: PropTypes.number.isRequired,
            }), // displayed hours
            renderHour: PropTypes.func, // hour preview component
            renderEvent: PropTypes.func, // event preview component
            getDayLabel: PropTypes.func, // change weekday label
            timeLabel: PropTypes.string, // Time label
        };
        TimeTable.defaultProps = {
            hoursInterval: { from: 5, to: 19 },
            timeLabel: "Time",
            // renderHour(hour, defaultAttributes, styles) {
            //     return (
            //         <div {...defaultAttributes} key={hour}>
            //             {hour}
            //         </div>
            //     );
            // },
            // renderEvent(event, defaultAttributes, styles) {
            //     return (
            //         <div {...defaultAttributes} title={event.name} key={event.id}>
            //             <span className={styles.event_info}>{event.name}</span>
            //             <span className={styles.event_info}>
            //                 {event.startTime.format("HH:mm")} - {event.endTime.format("HH:mm")}
            //             </span>
            //         </div>
            //     );
            // }

        };
        super();
        this.state = {
            events: {
                monday: [
                    {
                        id: 1,
                        name: "Homework",
                        type: "custom",
                        startTime: new Date("2018-02-23T11:00:00"),
                        endTime: new Date("2018-02-23T13:00:00")
                    },

                    {
                        id: 2,
                        name: "Classwork",
                        type: "custom",
                        startTime: new Date("2018-02-23T09:00:00"),
                        endTime: new Date("2018-02-23T11:00:00")
                    },
                    {
                        id: 3,
                        name: "Test",
                        type: "custom",
                        startTime: new Date("2018-02-22T14:00:00"),
                        endTime: new Date("2018-02-22T15:00:00")
                    },
                    {
                        id: 4,
                        name: "Test",
                        type: "custom",
                        startTime: new Date("2018-02-22T15:00:00"),
                        endTime: new Date("2018-02-22T16:00:00")
                    }
                ],
                tuesday: [
                    {
                        id: 5,
                        name: "Homework",
                        type: "custom",
                        startTime: new Date("2018-02-22T09:00:00"),
                        endTime: new Date("2018-02-22T11:00:00")
                    },
                    {
                        id: 6,
                        name: "Classwork",
                        type: "custom",
                        startTime: new Date("2018-02-23T12:00:00"),
                        endTime: new Date("2018-02-23T13:00:00")
                    },
                    {
                        id: 7,
                        name: "Classwork",
                        type: "custom",
                        startTime: new Date("2018-02-23T13:00:00"),
                        endTime: new Date("2018-02-23T14:00:00")
                    },
                    {
                        id: 8,
                        name: "Classwork",
                        type: "custom",
                        startTime: new Date("2018-02-23T15:00:00"),
                        endTime: new Date("2018-02-23T17:00:00")
                    }
                ],
                wednesday: [
                    {
                        id: 7,
                        name: "Classwork",
                        type: "custom",
                        startTime: new Date("2018-02-23T13:00:00"),
                        endTime: new Date("2018-02-23T14:00:00")
                    },
                    {
                        id: 4,
                        name: "Test",
                        type: "custom",
                        startTime: new Date("2018-02-22T15:00:00"),
                        endTime: new Date("2018-02-22T16:00:00")
                    }
                ],
                thursday: [
                    {
                        id: 7,
                        name: "Classwork",
                        type: "custom",
                        startTime: new Date("2018-02-23T09:00:00"),
                        endTime: new Date("2018-02-23T12:00:00")
                    },
                    {
                        id: 4,
                        name: "Test",
                        type: "custom",
                        startTime: new Date("2018-02-22T14:00:00"),
                        endTime: new Date("2018-02-22T18:00:00")
                    }
                ],
                friday: [
                    {
                        id: 7,
                        name: "Classwork",
                        type: "custom",
                        startTime: new Date("2018-02-23T11:00:00"),
                        endTime: new Date("2018-02-23T14:00:00")
                    },
                    {
                        id: 4,
                        name: "Test",
                        type: "custom",
                        startTime: new Date("2018-02-22T15:00:00"),
                        endTime: new Date("2018-02-22T16:00:00")
                    }
                ],
                saturday: [
                    {
                        id: 7,
                        name: "Classwork",
                        type: "custom",
                        startTime: new Date("2018-02-23T08:00:00"),
                        endTime: new Date("2018-02-23T09:00:00")
                    },
                    {
                        id: 4,
                        name: "Test",
                        type: "custom",
                        startTime: new Date("2018-02-22T16:00:00"),
                        endTime: new Date("2018-02-22T17:00:00")
                    }
                ],
                sunday: []
            }
        };
    }

    renderHour(hour, defaultAttributes, styles) {
        return (
            <div {...defaultAttributes} key={hour}>
                {hour}h
            </div>
        );
    }

    renderEvent(event, defaultAttributes, styles) {
        return (
            <div {...defaultAttributes}
                title={event.name}
                key={event.id}
            >
                <span>[ {event.name} ]</span>
            </div>
        );
    }

    render() {
        return (
            <TimeTable
                events={this.state.events}
            // hoursInterval={{
            //     from: 5,
            //     to: 19
            // }}
            />
        );
    }
}
