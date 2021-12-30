import React, { useState, useEffect } from 'react'
import clsx from 'clsx'

import styles from './CustomerDetail.module.css'
import { useParams } from 'react-router-dom'
import { Schedule, AdminHeader, CustomerInfor } from './../';
import axiosClient from './../../api/axiosClient'

// Trang này ở trong trang admin
// CustomerDetail sẽ gồm Header + CustomerInfor

function CustomerDetail({ admin }) {
    const { id } = useParams();

    let [events, setEvents] = useState([]);
    let [userProfile, setUserProfile] = useState({});

    // Lấy profile và events về
    useEffect(() => {
        (async () => {
            const url = `https://61bca039d8542f00178248c3.mockapi.io/api/customers/${id}`;
            const response = await axiosClient.get(url);
            console.log(response);
            userProfile = { ...response }
            setUserProfile(userProfile)
            console.log(userProfile)

            const url2 = 'https://61bca039d8542f00178248c3.mockapi.io/api/schedules'
            const response2 = await axiosClient.get(url2);
            console.log(response2);
            events = response2.filter(schedule => {
                return schedule.username == userProfile.username;
            })
            setEvents(events);
            console.log(events);
        })()
    }, [])

    return (
        <div className={clsx(styles.customerWrapper)}>
            {admin && <AdminHeader heading="Thông tin học viên" />}
            <div className={clsx(styles.content)}>
                <section className={clsx(styles.contentField)}>
                    <h2 className={clsx(styles.heading)}>Thông tin cá nhân</h2>
                    <CustomerInfor id={id}/>
                </section>

                <section className={clsx(styles.contentField)}>
                    <h2 className={clsx(styles.heading)}>Lịch tập luyện</h2>
                    <Schedule eventsFinded={events}/>
                </section>
            </div>
        </div>
    )
}

export default CustomerDetail