import React, { useState, useEffect } from 'react'
import { AdminHeader, TrainerItem, Popup } from './../'
import './TrainerList.css'


function TrainerList() {
    return (
        <div className="trainer-list-wrapper">
            <AdminHeader heading="Danh sách huấn luyện viên" />
            <div className="row">
                <TrainerItem />
                <TrainerItem />
                <TrainerItem />
                <TrainerItem />
                <TrainerItem />
                <TrainerItem />
                <TrainerItem />
                <TrainerItem />
                <TrainerItem />
                <TrainerItem />
                <TrainerItem />
                <TrainerItem />
                <TrainerItem />
                <TrainerItem />
                <TrainerItem />
                <TrainerItem />
                <TrainerItem />
                <TrainerItem />
                <TrainerItem />
                <TrainerItem />
                <TrainerItem />
                <TrainerItem />
                <TrainerItem />
                <TrainerItem />
            </div>
        </div>
    )
}

export default TrainerList
