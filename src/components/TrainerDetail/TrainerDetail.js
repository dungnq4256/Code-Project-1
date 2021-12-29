import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { AdminHeader, CustomerItem, Schedule } from './../'
import { useParams } from 'react-router-dom'

import styles from './TrainerDetail.module.css'
import TrainerInfor from '../TrainerInfor/TrainerInfor'
import axiosClient from '../../api/axiosClient'

function TrainerDetail({ admin }) {
    const { id } = useParams();
    let [trainerUsename, setTrainerUsename] = useState('');
    let [customers, setCustomers] = useState([]);


    // Get usename của trainer
    useEffect(() => {
        (async () => {
            const url = `https://61bca039d8542f00178248c3.mockapi.io/api/trainers/${id}`;
            const response = await axiosClient.get(url);
            // console.log(response.username);
            trainerUsename = response.username;
            setTrainerUsename(trainerUsename)
            console.log(trainerUsename);
        })()
    }, [])

    // Get customer của trainer
    useEffect(() => {
        (async () => {
            const url = 'https://61bca039d8542f00178248c3.mockapi.io/api/customers';
            const response = await axiosClient.get(url);
            customers = response.filter(customer => {
                return customer.trainerUsername == trainerUsename;
            })
            setCustomers(customers);
            console.log(customers)
        })()
    }, [trainerUsename])

    return (
        <div className={clsx(styles.wrapper)}>
            {admin && <AdminHeader heading="Thông tin huấn luyện viên" />}
            <div className={clsx(styles.content)}>
                <section className={clsx(styles.contentField)}>
                    <h2 className={clsx(styles.heading)}>Thông tin cá nhân</h2>
                    <TrainerInfor id={id} />
                </section>

                <section className={clsx(styles.contentField)}>
                    <h2 className={clsx(styles.heading)}>Lịch huấn luyện</h2>
                    <Schedule />
                </section>

                <section className={clsx(styles.contentField)}>
                    <h2 className={clsx(styles.heading)}>Danh sách học viên</h2>
                    {
                        customers.map(customer => <CustomerItem infor={customer} trainer />)
                    }
                </section>
            </div>
        </div>
    )
}

export default TrainerDetail
