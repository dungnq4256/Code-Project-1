import React, { useState, useEffect } from 'react'
import clsx from 'clsx'

import styles from './AddCustomer.module.css'
import { AdminHeader, Popup } from './../'
import axiosClient from '../../api/axiosClient';
import { useNavigate } from 'react-router-dom'

// Trang thêm huấn luyện viên

function AddCustomer() {
    let navigate = useNavigate();
    let [trainers, setTrainers] = useState([]);

    const getProfile = async () => {
        const url = 'https://61bca039d8542f00178248c3.mockapi.io/api/trainers';
        const response = await axiosClient.get(url);
        console.log(response)
        setTrainers(prev => response)
    }

    useEffect(() => {
        getProfile();
    }, [])

    let [showPopup, setShowPopup] = useState(false);

    let [user, setUser] = useState({
        "username": "",
        "password": "",
        "role": "customer"
    })

    let [customer, setCustomer] = useState({
        "name": "",
        "phone": "",
        "birthday": "",
        "username": "",
        "gender": "",
        "address": "",
        "register": "",
        "outdate": "",
        "avatarURL": "",
        "status": "Hoạt động",
        "trainerUsername": "",
        "id": "1"
    })


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

    const handleAddCustomer = async () => {
        if (!(user.username && user.password && customer.name
            && customer.birthday && customer.gender && customer.address
            && customer.register && customer.outdate && customer.phone
            && customer.trainerUsername && customer.trainerUsername != "Chọn huấn luyện viên"
        )) {
            alert("Hãy nhập đủ thông tin");
            return;
        } else {
            const url = 'https://61bca039d8542f00178248c3.mockapi.io/api/customers';
            const response = await axiosClient.post(url, customer);
            const url2 = 'https://61bca039d8542f00178248c3.mockapi.io/api/users';
            const response2 = await axiosClient.post(url2, user);
            setShowPopup(prev => !prev);
            setTimeout(() => {
                navigate('/admin/customers');
            }, 500)
        }
    }

    return (
        <div className={clsx(styles.wrapper)}>
            <AdminHeader heading="Thêm học viên" />
            <div className={clsx(styles.contentWrapper)}>
                <div className="grid">
                    <div className={clsx(styles.innerWrapper)}>
                        <div className={clsx(styles.heading)}>
                            Thêm học viên
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
                                                customer = {
                                                    ...customer,
                                                    username
                                                }
                                                setUser(user)
                                                console.log(user)
                                                setCustomer(customer)
                                                console.log(customer)
                                            }}
                                        />
                                    </div>

                                    <div className={clsx(styles.contentField)}>
                                        <i className="fas fa-unlock-alt"></i>
                                        <input
                                            type="password"
                                            className={clsx(styles.contentText)}
                                            placeholder="Mật khẩu"
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
                                        <i class="fas fa-address-card"></i>
                                        <input
                                            type="text"
                                            className={clsx(styles.contentText)}
                                            placeholder="Nhập địa chỉ"
                                            onChange={(e) => {
                                                setCustomer(prev => ({
                                                    ...customer,
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
                                                setCustomer(prev => ({
                                                    ...customer,
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
                                                setCustomer(prev => ({
                                                    ...customer,
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
                                                setCustomer(prev => ({
                                                    ...customer,
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
                                                setCustomer(prev => ({
                                                    ...customer,
                                                    "phone": e.target.value
                                                }))
                                            }}
                                        />
                                    </div>

                                    <div className={clsx(styles.contentField)}>
                                        <i className="fas fa-text-height"></i>
                                        <input
                                            type="date"
                                            className={clsx(styles.contentText)}
                                            placeholder="Ngày đăng ký"
                                            onChange={(e) => {
                                                setCustomer(prev => ({
                                                    ...customer,
                                                    "register": e.target.value
                                                }))
                                            }}
                                        />
                                    </div>

                                    <div className={clsx(styles.contentField)}>
                                        <i className="fas fa-weight"></i>
                                        <input
                                            type="date"
                                            className={clsx(styles.contentText)}
                                            placeholder="Ngày hết hạn"
                                            onChange={(e) => {
                                                setCustomer(prev => ({
                                                    ...customer,
                                                    "outdate": e.target.value
                                                }))
                                            }}
                                        />
                                    </div>

                                    <div className={clsx(styles.contentField)}>

                                        <i className="fas fa-transgender"></i>
                                        <select
                                            onChange={(e) => {
                                                setCustomer(prev => ({
                                                    ...customer,
                                                    "trainerUsername": e.target.value
                                                }))
                                                console.log(customer)
                                            }}
                                        >
                                            <option value="Chọn">Chọn huấn luyện viên</option>
                                            {trainers.map(trainer => {
                                                return <option value={trainer.username}>{trainer.name}</option>
                                            })}
                                        </select>
                                    </div>


                                    <div className={clsx(styles.contentField)}>
                                        <i className="fas fa-save"></i>
                                        <button
                                            onClick={handleAddCustomer}
                                            className={
                                                user.username && user.password && customer.name
                                                    && customer.birthday && customer.gender && customer.address
                                                    && customer.register && customer.outdate && customer.phone
                                                    && customer.trainerUsername && customer.trainerUsername != "Chọn huấn luyện viên"
                                                    ? clsx(styles.trainerAddBtn)
                                                    : clsx(styles.trainerAddBtn, styles.inactive)}>
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

export default AddCustomer
