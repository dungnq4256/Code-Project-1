import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { AdminHeader, TrainerItem, Popup } from './../'
import styles from './TrainerList.module.css'
import axiosClient from '../../api/axiosClient'
import { Link } from 'react-router-dom'


function TrainerList() {

    let [trainers, setTrainers] = useState([]);

    const getProfile = async () => {
        const url = 'https://61bca039d8542f00178248c3.mockapi.io/api/trainers';
        const response = await axiosClient.get(url);
        console.log(response)
        setTrainers(prev => response)
    }

    useEffect(() => {
        getProfile();
    }, [])
    return (
        <div className={clsx(styles.wrapper)}>
            <AdminHeader heading="Danh sách huấn luyện viên" />
            <div className={clsx(styles.content)}>
                <div className={clsx(styles.contentHeader)}>
                    <div className={clsx(styles.heading)}>Danh sách huấn luyện viên</div>
                    <div className={clsx(styles.option)}>
                        <Link to='/admin/trainers/add' className={clsx(styles.optionBtn)}>
                            <i className={clsx(styles.optionIcon, "fas", "fa-user-plus")}></i>
                            Thêm
                        </Link>
                    </div>
                </div>
                <div className="grid">
                    <div className="row">
                        {trainers.map(item => {
                            return <TrainerItem infor={item}/>;
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrainerList
