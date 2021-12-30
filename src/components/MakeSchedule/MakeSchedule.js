import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import styles from './MakeSchedule.module.css'
import axiosClient from '../../api/axiosClient'
import { Popup } from './../'

function MakeSchedule({ infor }) {
    let [show, setShow] = useState(true);
    let [showPopup, setShowPopup] = useState(false);


    let [schedule, setSchedule] = useState({
        "username": infor.username,
        "day": "",
        "startTime": "",
        "endTime": "",
        "name": infor.name,
        "type": "type 1"
    })

    // 
    useEffect(() => {
        if (showPopup) {
            var id = setTimeout(() => {
                showPopup = false;
                setShowPopup(showPopup);
                setShow(prev => !prev)
            }, 2000)
        }
        return () => {
            clearTimeout(id);
        }
    }, [showPopup])

    // Thêm lịch
    const handleAdd = async () => {
        if (!(schedule.day && schedule.startTime)) {
            alert('Hãy chọn đầy đủ các thông tin');
            return;
        }
        if (schedule.day == 'Chọn' || schedule.startTime == 'Chọn') {
            alert('Hãy chọn đầy đủ các thông tin');
            return;
        }
        const url = 'https://61bca039d8542f00178248c3.mockapi.io/api/schedules';
        const response = await axiosClient.post(url, schedule);
        console.log(response);
        if (response) {
            setShowPopup(prev => !prev);
        }
    }

    // Lấy lịch về


    return (
        show ?
            <div
                className={clsx(styles.wrapper)}
                onClick={() => setShow(prev => !prev)}
            >
                <div className={clsx(styles.innerWrapper)}>
                    <div
                        className={clsx(styles.inner)}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className={clsx(styles.heading)}>
                            <h1 className={clsx(styles.title)}>
                                Thêm lịch:
                                <span>{infor.name}</span>
                            </h1>
                            <i
                                class="fas fa-times"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShow(prev => !prev)
                                }}
                            ></i>
                        </div>
                        <div className={clsx(styles.content)}>
                            <h2 className={clsx(styles.contentTitle)}>Ngày tập luyện</h2>
                            <select
                                value={schedule.day}
                                onChange={(e) => {
                                    e.stopPropagation();
                                    console.log(e.target.value)
                                    schedule = {
                                        ...schedule,
                                        day: e.target.value,
                                    }
                                    setSchedule(schedule)
                                    console.log(schedule)
                                }}
                            >
                                <option value="Chọn">Chọn ngày tập</option>
                                <option value="Monday">Thứ 2</option>
                                <option value="Tuesday">Thứ 3</option>
                                <option value="Wednesday">Thứ 4</option>
                                <option value="Thursday">Thứ 5</option>
                                <option value="Friday">Thứ 6</option>
                                <option value="Saturday">Thứ 7</option>
                                <option value="Sunday">Chủ nhật</option>
                            </select>
                        </div>

                        <div className={clsx(styles.content)}>
                            <h2 className={clsx(styles.contentTitle)}>Thời gian</h2>
                            <select
                                onChange={(e) => {
                                    e.stopPropagation();
                                    console.log(e.target.value)
                                    schedule = {
                                        ...schedule,
                                        startTime: e.target.value,
                                        endTime: ('0' + ((-(-e.target.value)) + 1).toString()).slice(-2)
                                    }
                                    setSchedule(schedule)
                                    console.log(schedule)
                                }}
                            >
                                <option value="Chọn">Chọn thời gian</option>
                                <option value="07">7h - 8h</option>
                                <option value="08">8h - 9h</option>
                                <option value="09">9h - 10h</option>
                                <option value="10">10h - 11h</option>
                                <option value="11">11h - 12h</option>
                                <option value="12">12h - 13h</option>
                                <option value="13">13h - 14h</option>
                                <option value="14">14h - 15h</option>
                                <option value="15">15h - 16h</option>
                                <option value="16">16h - 17h</option>
                                <option value="17">17h - 18h</option>
                                <option value="18">18h - 19h</option>
                                <option value="19">19h - 20h</option>
                            </select>
                        </div>
                        <div className={clsx(styles.content)}>
                            <button
                                className={clsx(styles.addBtn)}
                                onClick={handleAdd}
                            >
                                Thêm lịch
                            </button>
                        </div>
                    </div>
                </div>
                <Popup trigger={showPopup} message="Thêm lịch tập thành công" />
            </div>
            : null
    )
}

export default MakeSchedule
