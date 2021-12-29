import React, { useState, useEffect } from 'react'
import clsx from 'clsx'

import styles from './AddTrainer.module.css'
import { AdminHeader, Popup } from './../'
import axiosClient from '../../api/axiosClient'
import { useNavigate } from 'react-router-dom'

// Trang thêm huấn luyện viên

function AddTrainer() {

    const navigate = useNavigate();

    let [user, setUser] = useState({
        "username": "",
        "password": "",
        "role": "trainer"
    })

    let [trainer, setTrainer] = useState({
        "name": "",
        "phone": "",
        "birthday": "",
        "gender": "Nam",
        "address": "",
        "height": "",
        "weight": "",
        "username": "",
        "avatarURL": ""
    });

    let [showPopup, setShowPopup] = useState(false);

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

    const handleAddTrainer = async () => {
        if (!(user.username && user.password && trainer.name
            && trainer.birthday && trainer.gender && trainer.address
            && trainer.height && trainer.weight && trainer.phone
        )) {
            alert("Hãy điền đầy đủ thông tin")
            return;
        } else {
            const url = 'https://61bca039d8542f00178248c3.mockapi.io/api/trainers';
            const response = await axiosClient.post(url, trainer);
            setShowPopup(prev => !prev)
            setTimeout(() => {
                navigate('/admin/trainers');
            }, 500)
        }
    }

    return (
        <div className={clsx(styles.wrapper)}>
            <AdminHeader heading="Thêm huấn luyện viên" />
            <div className={clsx(styles.contentWrapper)}>
                <div className="grid">
                    <div className={clsx(styles.innerWrapper)}>
                        <div className={clsx(styles.heading)}>
                            Thêm huấn luyện viên
                        </div>
                        <div className="row no-gutters">
                            <div className="col l-6">
                                <div className={clsx(styles.content)}>

                                    <div className={clsx(styles.contentField)}>
                                        <i className="fas fa-user-circle"></i>
                                        <input
                                            type="text"
                                            className={clsx(styles.contentText)}
                                            placeholder="Tài khoản"
                                            onChange={(e) => {
                                                const username = e.target.value;
                                                user = {
                                                    ...user,
                                                    username
                                                }
                                                trainer = {
                                                    ...trainer,
                                                    username
                                                }
                                                setUser(user)
                                                console.log(user)
                                                setTrainer(trainer)
                                                console.log(trainer)
                                            }}
                                        />
                                    </div>

                                    <div className={clsx(styles.contentField)}>
                                        <i className="fas fa-unlock-alt"></i>
                                        <input
                                            type="password"
                                            className={clsx(styles.contentText)}
                                            placeholder="Mật khẩu"
                                            value={user.password}
                                            onChange={(e) => {
                                                const password = e.target.value;
                                                user = {
                                                    ...user,
                                                    password
                                                }
                                                setUser(user);
                                            }}
                                        />
                                    </div>

                                    <div className={clsx(styles.contentField)}>
                                        <i className="fas fa-address-card"></i>
                                        <input
                                            type="text"
                                            className={clsx(styles.contentText)}
                                            placeholder="Nhập địa chỉ"
                                            onChange={(e) => {
                                                setTrainer(prev => ({
                                                    ...trainer,
                                                    "address": e.target.value
                                                }))
                                            }}
                                        />
                                    </div>

                                    <div className={clsx(styles.contentField)}>
                                        <i className="fas fa-user"></i>
                                        <input
                                            type="text"
                                            className={clsx(styles.contentText)}
                                            placeholder="Nhập họ và tên"
                                            onChange={(e) => {
                                                setTrainer(prev => ({
                                                    ...trainer,
                                                    "name": e.target.value
                                                }))
                                            }}
                                        />
                                    </div>

                                    <div className={clsx(styles.contentField)}>
                                        <i className="fas fa-birthday-cake"></i>
                                        <input
                                            type="date"
                                            className={clsx(styles.contentText)}
                                            placeholder="Ngày sinh"
                                            onChange={(e) => {
                                                setTrainer(prev => ({
                                                    ...trainer,
                                                    "birthday": e.target.value
                                                }))
                                            }}
                                        />
                                    </div>

                                </div>
                            </div>
                            <div className="col l-6">
                                <div className={clsx(styles.content)}>
                                    <div className={clsx(styles.contentField)}>

                                        <i className="fas fa-transgender"></i>
                                        <select
                                            onChange={(e) => {
                                                setTrainer(prev => ({
                                                    ...trainer,
                                                    "gender": e.target.value
                                                }))
                                            }}
                                        >
                                            <option value="Chọn">Chọn</option>
                                            <option value="Nam">Nam</option>
                                            <option value="Nữ">Nữ</option>
                                        </select>
                                    </div>

                                    <div className={clsx(styles.contentField)}>
                                        <i className="fas fa-mobile"></i>
                                        <input
                                            type="text"
                                            className={clsx(styles.contentText)}
                                            placeholder="Nhập số điện thoại"
                                            onChange={(e) => {
                                                setTrainer(prev => ({
                                                    ...trainer,
                                                    "phone": e.target.value
                                                }))
                                            }}
                                        />
                                    </div>

                                    <div className={clsx(styles.contentField)}>
                                        <i className="fas fa-text-height"></i>
                                        <input
                                            type="text"
                                            className={clsx(styles.contentText)}
                                            placeholder="Nhập chiều cao"
                                            onChange={(e) => {
                                                setTrainer(prev => ({
                                                    ...trainer,
                                                    "height": e.target.value
                                                }))
                                            }}
                                        />
                                    </div>

                                    <div className={clsx(styles.contentField)}>
                                        <i className="fas fa-weight"></i>
                                        <input
                                            type="text"
                                            className={clsx(styles.contentText)}
                                            placeholder="Nhập cân nặng"
                                            onChange={(e) => {
                                                setTrainer(prev => ({
                                                    ...trainer,
                                                    "weight": e.target.value
                                                }))
                                            }}
                                        />
                                    </div>


                                    <div className={clsx(styles.contentField)}>
                                        <i className="fas fa-save"></i>
                                        <button
                                            onClick={handleAddTrainer}
                                            className={
                                                user.username && user.password && trainer.name
                                                    && trainer.birthday && trainer.gender && trainer.address
                                                    && trainer.height && trainer.weight && trainer.phone
                                                    ? clsx(styles.trainerAddBtn)
                                                    : clsx(styles.trainerAddBtn, styles.inactive)
                                            }>
                                            Thêm huấn luyện viên
                                        </button>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <Popup trigger={showPopup} message="Thêm thành công" />
        </div>
    )
}

export default AddTrainer
