import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

import styles from './CustomerList.module.css'
import { AdminHeader, CustomerItem } from './../'
import axiosClient from '../../api/axiosClient'

// Danh sách các học viên

function CustomerList() {

    let [customers, setCustomers] = useState([]);

    useEffect(() => {
        (async () => {
            const url = 'https://61bca039d8542f00178248c3.mockapi.io/api/customers';
            const response = await axiosClient.get(url);
            console.log(response)
            setCustomers(prev => response)
        })()


    }, [])

    return (
        <div className={clsx(styles.wrapper)}>
            <AdminHeader heading="Danh sách học viên" />
            <div className={styles.content}>
                <div className={clsx(styles.contentHeader)}>
                    <div className={clsx(styles.heading)}>Danh sách học viên</div>
                    <div className={clsx(styles.option)}>
                        <Link to='/admin/customers/add' className={clsx(styles.optionBtn)}>
                            <i className={clsx(styles.optionIcon, "fas", "fa-user-plus")}></i>
                            Thêm
                        </Link>
                    </div>
                </div>
                {
                    customers.map(customer => <CustomerItem infor={customer}/>)
                }
            </div>
        </div>
    )
}

export default CustomerList
