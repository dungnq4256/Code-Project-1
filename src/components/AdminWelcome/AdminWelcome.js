import React from 'react'
import { AdminHeader } from '..'
import './AdminWelcome.css'

// Trang chào đón admin

function AdminWelcome() {
    return (
        <>
            <AdminHeader heading="Trung tâm thể hình RubyGym" />
            <div className="admin-welcome">
                Chào mừng bạn đến với trang quản trị viên
            </div>
        </>

    )
}

export default AdminWelcome
