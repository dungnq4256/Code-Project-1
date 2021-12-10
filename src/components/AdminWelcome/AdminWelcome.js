import React from 'react'
import clsx from 'clsx'
import { AdminHeader } from '..'
import styles from './AdminWelcome.module.css'

// Trang chào đón admin

function AdminWelcome() {
    return (
        <>
            <AdminHeader heading="Trung tâm thể hình RubyGym" />
            <div className={clsx(styles.adminWelcome)}>
                Chào mừng bạn đến với trang quản trị viên
            </div>
        </>

    )
}

export default AdminWelcome
