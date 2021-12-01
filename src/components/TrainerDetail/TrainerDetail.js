import React from 'react'
import './TrainerDetail.css'
import { useParams } from 'react-router-dom'
import { AdminHeader, Schedule, TrainerDetailInfor } from './../'
import TrainerDetailSchedule from '../TrainerDetailSchedule/TrainerDetailSchedule'
import TrainerDetailStudents from '../TrainerDetailStudents/TrainerDetailStudents'

function TrainerDetail() {
    const id = useParams();
    
    return (
        <div className="trainer-detail-wrapper">
            <AdminHeader heading="Thông tin huấn luyện viên" />
            <div className="trainer-detail-content">
                <section className="trainer-content">
                    <h2 className="trainer-content-heading">Thông tin cá nhân</h2>
                    <TrainerDetailInfor />
                </section>

                <section className="trainer-content">
                    <h2 className="trainer-content-heading">Lịch huấn luyện</h2>
                    <TrainerDetailSchedule/>
                    <Schedule/>
                </section>

                <section className="trainer-content">
                    <h2 className="trainer-content-heading">Danh sách học viên</h2>
                    <TrainerDetailStudents/>
                </section>
            </div>
        </div>
    )
}

export default TrainerDetail
