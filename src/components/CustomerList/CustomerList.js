import React from 'react'
import clsx from 'clsx'

import styles from './CustomerList.module.css'
import { AdminHeader, CustomerInfor, CustomerItem } from './../'

// Danh sách các học viên

function CustomerList() {
    return (
        <div className={clsx(styles.wrapper)}>
            <AdminHeader heading="Danh sách học viên" />
            <div className={styles.content}>
                <div className={clsx(styles.contentHeader)}>
                    <div className={clsx(styles.heading)}>Danh sách học viên</div>
                    <div className={clsx(styles.option)}>
                        <div className={clsx(styles.search)}>
                            <i class="fas fa-search"></i>
                            Tìm kiếm
                        </div>
                        <div className={clsx(styles.add)}>
                            <i className={clsx(styles.addBtnIcon, "fas", "fa-user-plus")}></i>
                            Thêm
                        </div>
                    </div>
                </div>
                <CustomerItem />
                <CustomerItem />
                <CustomerItem />
                <CustomerItem />
                <CustomerItem />
                <CustomerItem />
                <CustomerItem />
                <CustomerItem />
                <CustomerItem />
                {/* <CustomerInfor /> */}
            </div>
        </div>
    )
}

export default CustomerList
