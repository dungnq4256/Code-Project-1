import React, { useState } from 'react'
import clsx from 'clsx'

import styles from './CustomerDetail.module.css'
import { AdminHeader, CustomerInfor } from './../';

// Trang này ở trong trang admin
// CustomerDetail sẽ gồm Header và CustomerInfor

function CustomerDetail() {
    return (
        <div className={clsx(styles.customerWrapper)}>
            <AdminHeader/>
            <CustomerInfor/>
        </div>
    )
}

export default CustomerDetail