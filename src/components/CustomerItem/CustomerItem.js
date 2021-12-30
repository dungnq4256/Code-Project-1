import React, { useParams, useState, useEffect } from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

import avatar from './../../store/imgs/avatar.jpg'

import styles from './CustomerItem.module.css'
import axiosClient from '../../api/axiosClient'
import { Popup, MakeSchedule } from './../'
import { useNavigate } from 'react-router-dom'

//Từng học viên trong danh sách các học viên

function CustomerItem({ infor, trainer, admin }) {
    const navigate = useNavigate();
    let [showPopup, setShowPopup] = useState(false);
    let [makeSchedule, setMakeSchedule] = useState(false);

    // Lấy huấn luyện viên của mình
    let [trainers, setTrainers] = useState([]);
    let [myTrainer, setMyTrainer] = useState({});

    // Lấy huấn luyện viên của mình
    const getProfile = async () => {
        const url = 'https://61bca039d8542f00178248c3.mockapi.io/api/trainers';
        const response = await axiosClient.get(url);
        console.log(response)
        trainers = response;
        setTrainers(trainers);
        console.log(trainers);
        myTrainer = trainers.find(trainer => {
            return trainer.username === infor.trainerUsername;
        })
        setMyTrainer(myTrainer);
        // console.log(trainer.name);
        // console.log(trainer)
    }

    useEffect(() => {
        getProfile();
    }, []);


    const handleDeleteCustomer = async () => {
        const url = `https://61bca039d8542f00178248c3.mockapi.io/api/customers/${infor.id}`
        const params = {
            "status": "Không hoạt động"
        }
        const response = await axiosClient.put(url, params)
        if (response.status) {
            infor.status = "Không hoạt động"
            setShowPopup(prev => !prev)
        }
    }

    const handleRescover = async () => {
        const url = `https://61bca039d8542f00178248c3.mockapi.io/api/customers/${infor.id}`
        const params = {
            "status": "Hoạt động"
        }
        const response = await axiosClient.put(url, params)
        if (response.status) {
            infor.status = "Hoạt động"
            setShowPopup(prev => !prev)
        }
    }

    useEffect(() => {
        if (showPopup) {
            var id = setTimeout(() => {
                showPopup = false;
                setShowPopup(showPopup);
            }, 2000)
        }
        return () => {
            clearTimeout(id);
        }
    }, [showPopup])

    return (
        <div to='/' className={clsx(styles.wrapper)}>
            <Link to={trainer ? '' : `/admin/customers/detail/${infor.id}`} className={clsx(styles.content)}>
                <div className={clsx(styles.avatarField)}>
                    <div
                        style={
                            infor.avatarURL ? {
                                background: `url(${infor.avatarURL})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                height: '50px',
                                width: '50px',
                            } : {
                                background: `url(${avatar})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                height: '50px',
                                width: '50px'
                            }}
                        className={clsx(styles.avatarImg)}
                    >
                    </div>
                    <div className={clsx(styles.name)}>{infor.name}</div>
                </div>

                <div className={clsx(styles.inforField)}>
                    {
                        infor.status == "Hoạt động"
                            ? <div className={clsx(styles.inforContent, styles.status)}>Hoạt động</div>
                            : <div className={clsx(styles.inforContent, styles.status, styles.inactive)}>Không hoạt động</div>
                    }
                    {/* <div className={clsx(styles.inforContent, styles.status)}>Hết hạn</div> */}
                </div>

                <div className={clsx(styles.inforField)}>
                    <i class={clsx(styles.inforIcon, styles.gender, "fas fa-male")}></i>
                    <div className={clsx(styles.inforContent)}>{infor.gender}</div>
                </div>

                <div className={clsx(styles.inforField)}>
                    <i
                        class={clsx(styles.inforIcon, styles.birthday, "fas fa-birthday-cake")}
                        style={{
                            color: 'rgb(241, 122, 142)'
                        }}
                    ></i>
                    <div className={clsx(styles.inforContent)}>{infor.birthday}</div>
                </div>

                <div className={clsx(styles.inforField)}>
                    <i
                        class={clsx(styles.inforIcon, styles.phone, "fas fa-mobile")}
                        style={{
                            color: 'rgb(184, 184, 58)'
                        }}
                    ></i>
                    <div className={clsx(styles.inforContent)}>{infor.phone}</div>
                </div>

                <div className={clsx(styles.inforField)}>
                    <i
                        class={clsx(styles.inforIcon, styles.phone, "fas fa-chalkboard-teacher")}
                        style={{
                            color: 'rgb(48, 48, 240)'
                        }}
                    ></i>
                    <div className={clsx(styles.inforContent)}>{myTrainer.name}</div>
                </div>

            </Link>

            {
                admin &&  
                <div className={clsx(styles.updateField)}>
                    <div className={clsx(styles.inforField, styles.editField)}>
                        <i class={clsx(styles.editIcon, "fas fa-edit")}></i>
                        <Link to={`/admin/customers/detail/${infor.id}`} className={clsx(styles.updateContent, styles.edit)}>
                            Sửa
                        </Link>
                    </div>

                    <div className={clsx(styles.inforField, styles.deleteField)}>
                        <i class={clsx(styles.deleteIcon, "fas fa-user-minus")}></i>
                        {infor.status == "Hoạt động" && <div
                            onClick={handleDeleteCustomer}
                            className={clsx(styles.updateContent, styles.delete)}>
                            Xóa
                        </div>}
                        {infor.status !== "Hoạt động" && <div
                            onClick={handleRescover}
                            className={clsx(styles.updateContent, styles.delete)}>
                            Khôi phục
                        </div>}
                    </div>
                </div>
            }

            {
                trainer && 
                <div className={clsx(styles.updateField)}>
                    <div className={clsx(styles.inforField, styles.editField)}>
                        <i class={clsx(styles.editIcon, "fas fa-clock")}></i>
                        <div
                            className={clsx(styles.updateContent, styles.edit)}
                            onClick={() => setMakeSchedule(prev => !prev)}
                        >
                            Lên lịch
                        </div>
                    </div>
                </div>
            }

            <Popup trigger={showPopup} message="Thành công" />
            {makeSchedule && <MakeSchedule infor={infor}/>}
        </div>
    )
}

export default CustomerItem
