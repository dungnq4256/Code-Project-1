import React from 'react'
import clsx from 'clsx'
import { TrainerDetailInfor } from './../'

import styles from './TrainerInfor.module.css'

function TrainerInfor() {
    return (
        <div className={clsx(styles.wrapper)}>
            <div className="grid">
                <div className="row">
                    <div className="col l-10 l-o-1">
                        <div className="inforField">
                            <h1 className={clsx(styles.heading)}>Thông tin cá nhân</h1>
                            <TrainerDetailInfor />
                        </div>
                        <div className="inforField">
                            <h1 className={clsx(styles.heading)}>Lịch tập luyện</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default TrainerInfor
