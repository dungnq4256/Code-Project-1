import React, { useState, useEffect, useRef } from 'react'
import clsx from 'clsx'
import { Popup } from './../'
import avatar from './../../store/imgs/avatar.jpg'

import styles from './TrainerInfor.module.css'
import axiosClient from '../../api/axiosClient'

// Trang này có thể hiển thị với cả học viên, huấn luyện viên và admin
// Thông tin chi tiết của mỗi học viên

function TrainerInfor({ id }) {
    let [nameUpdating, setNameUpdating] = useState(false);
    let [phoneUpdating, setPhoneUpdating] = useState(false);
    let [birthdayUpdating, setBirthdayUpdating] = useState(false);
    let [addressUpdating, setAddressUpdating] = useState(false);
    let [genderUpdating, setGenderUpdating] = useState(false);
    let [registerUpdating, setRegisterUpdating] = useState(false);
    let [showPopup, setShowPopup] = useState(false);

    let nameRef = useRef(null);
    let phoneRef = useRef(null);
    let birthdayRef = useRef(null);
    let genderRef = useRef(null);
    let addressRef = useRef(null);
    let registerRef = useRef(null);


    let [userProfile, setUserProfile] = useState({});

    // Để show Popup sau khi cập nhật thành công
    useEffect(() => {
        if (showPopup) {
            var id = setTimeout(() => {
                setShowPopup(prev => !prev);
            }, 1000)
        }
        return () => {
            clearTimeout(id);
        }
    }, [showPopup])

    // Lấy profile về
    useEffect(() => {
        (async () => {
            const url = `https://61bca039d8542f00178248c3.mockapi.io/api/trainers/${id}`;
            const response = await axiosClient.get(url);
            console.log(response);
            setUserProfile(prev => ({
                name: response.name,
                phone: response.phone,
                birthday: response.birthday,
                gender: response.gender,
                address: response.address,
                create_at: response.register,
                avatar_url: response.avatarURL,
            }))

            userProfile = {...response};
            setUserProfile(userProfile);

        })()
    }, [])

    // Upload Avatar

    const handleUploadAvatar = async (e) => {
        // Upload lên Cloudinary

        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'rubygymimages');

        const response = await fetch('https://api.cloudinary.com/v1_1/dzgdwey0f/image/upload', {
            method: 'POST',
            body: data
        })

        const file = await response.json();
        userProfile = {
            ...userProfile,
            avatarURL: file.secure_url
        }
        setUserProfile(userProfile)
        console.log(userProfile)
        const url = `https://61bca039d8542f00178248c3.mockapi.io/api/trainers/${id}`
        let response1 = await axiosClient.put(url, { ...userProfile })
        setShowPopup(prev => !prev)
        console.log(file);
        console.log(userProfile)

    }


    //Update Profile
    const handleUpdate = async () => {
        console.log(userProfile);
        const url = `https://61bca039d8542f00178248c3.mockapi.io/api/trainers/${id}`
        const response = await axiosClient.put(url, { ...userProfile })
        setShowPopup(prev => !prev)
    }


    return (
        <div className="grid">

            {/* Thông tin cá nhân */}
            <div className={clsx(styles.inforField)}>
                <div className="row">

                    {/* Avatar */}
                    <div className="col l-5 m-0 c-0">
                        <div
                            className={clsx(styles.avatar)}
                            style={{
                                backgroundImage: userProfile.avatarURL ?
                                    `url(${userProfile.avatarURL})` :
                                    `url(${avatar})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                            }}
                        >
                            <label
                                htmlFor="avatarChoose"
                                className={clsx(styles.chooseAvatar)}
                            >
                                <i className={clsx(styles.chooseAvatarIcon, "fas fa-camera")}></i>
                            </label>
                            <input
                                type="file"
                                id="avatarChoose"
                                hidden
                                onChange={handleUploadAvatar}
                            />
                        </div>
                    </div>

                    {/* Thông tin */}
                    <div className="col l-7 m-12 c-12">
                        <div className={clsx(styles.infor)}>
                            <div className={clsx(styles.inforWrapper)}>

                                {/* Tên */}
                                <div className={clsx(styles.inforContent)}>
                                    <h3 className={clsx(styles.inforLabel)}>Họ tên</h3>
                                    <input
                                        readOnly={!nameUpdating}
                                        ref={nameRef}
                                        type="text"
                                        className={clsx(styles.inforText)}
                                        value={userProfile.name}
                                        onChange={(e) => {
                                            setUserProfile(prev => ({
                                                ...userProfile,
                                                name: e.target.value,
                                            }))
                                        }}
                                        id='trainer-name' />
                                </div>
                                {
                                    !nameUpdating &&
                                    <label
                                        htmlFor='trainer-name'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            nameRef.current.focus();
                                            setNameUpdating(prev => !prev)
                                        }}
                                    >
                                        <i class="fas fa-pen"></i>
                                        Chỉnh sửa
                                    </label>
                                }
                                {
                                    nameUpdating &&
                                    <label
                                        htmlFor='trainer-name'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            setNameUpdating(prev => !prev);
                                            handleUpdate();
                                        }}
                                    >
                                        <i class="fas fa-save"></i>
                                        Lưu lại
                                    </label>
                                }
                                {
                                    nameUpdating &&
                                    <label
                                        htmlFor='trainer-name'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            setNameUpdating(prev => !prev);
                                        }}
                                    >
                                        <i class="fas fa-window-close"></i>
                                        Hủy
                                    </label>
                                }
                            </div>

                            {/* Số điện thoại */}
                            <div className={clsx(styles.inforWrapper)}>
                                <div className={clsx(styles.inforContent)}>
                                    <h3 className={clsx(styles.inforLabel)}>Số điện thoại</h3>
                                    <input
                                        readOnly={!phoneUpdating}
                                        ref={phoneRef}
                                        type="text"
                                        className={clsx(styles.inforText)}
                                        value={userProfile.phone}
                                        onChange={(e) => {
                                            setUserProfile(prev => ({
                                                ...userProfile,
                                                phone: e.target.value
                                            }))
                                        }}
                                        id='trainer-phone' />
                                </div>
                                {
                                    !phoneUpdating &&
                                    <label
                                        htmlFor='trainer-phone'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            phoneRef.current.focus();
                                            setPhoneUpdating(prev => !prev);
                                        }}
                                    >
                                        <i class="fas fa-pen"></i>
                                        Chỉnh sửa
                                    </label>
                                }
                                {
                                    phoneUpdating &&
                                    <label
                                        htmlFor='trainer-phone'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            setPhoneUpdating(prev => !prev);
                                            handleUpdate();
                                        }}
                                    >
                                        <i class="fas fa-save"></i>
                                        Lưu lại
                                    </label>
                                }
                                {
                                    phoneUpdating &&
                                    <label
                                        htmlFor='trainer-phone'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            setPhoneUpdating(prev => !prev);
                                        }}
                                    >
                                        <i class="fas fa-window-close"></i>
                                        Hủy
                                    </label>
                                }
                            </div>

                            {/* Ngày sinh */}
                            <div className={clsx(styles.inforWrapper)}>
                                <div className={clsx(styles.inforContent)}>
                                    <h3 className={clsx(styles.inforLabel)}>Ngày sinh</h3>
                                    <input
                                        readOnly={!birthdayUpdating}
                                        ref={birthdayRef}
                                        type="date"
                                        className={clsx(styles.inforText)}
                                        value={userProfile.birthday}
                                        onChange={(e) => {
                                            setUserProfile(prev => ({
                                                ...userProfile,
                                                birthday: e.target.value
                                            }))
                                        }}
                                        id='trainer-birthday' />
                                </div>
                                {
                                    !birthdayUpdating &&
                                    <label
                                        htmlFor='trainer-birthday'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            birthdayRef.current.focus();
                                            setBirthdayUpdating(prev => !prev);
                                        }}
                                    >
                                        <i class="fas fa-pen"></i>
                                        Chỉnh sửa
                                    </label>
                                }
                                {
                                    birthdayUpdating &&
                                    <label
                                        htmlFor='trainer-birthday'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            setBirthdayUpdating(prev => !prev);
                                            handleUpdate();
                                        }}
                                    >
                                        <i class="fas fa-save"></i>
                                        Lưu lại
                                    </label>
                                }
                                {
                                    birthdayUpdating &&
                                    <label
                                        htmlFor='trainer-birthday'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            setBirthdayUpdating(prev => !prev);
                                        }}
                                    >
                                        <i class="fas fa-window-close"></i>
                                        Hủy
                                    </label>
                                }
                            </div>

                            {/* Giới tính */}
                            <div className={clsx(styles.inforWrapper)}>
                                <div className={clsx(styles.inforContent)}>
                                    <h3 className={clsx(styles.inforLabel)}>Giới tính</h3>
                                    <select
                                        disabled={!genderUpdating}
                                        ref={genderRef}
                                        className={clsx(styles.inforText)}
                                        value={userProfile.gender}
                                        onChange={(e) => {
                                            setUserProfile(prev => ({
                                                ...userProfile,
                                                gender: e.target.value
                                            }))
                                        }}
                                    >
                                        <option>Nam</option>
                                        <option>Nữ</option>
                                    </select>
                                </div>
                                {
                                    !genderUpdating &&
                                    <label
                                        htmlFor='trainer-birthday'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            genderRef.current.focus();
                                            setGenderUpdating(prev => !prev);
                                        }}
                                    >
                                        <i class="fas fa-pen"></i>
                                        Chỉnh sửa
                                    </label>
                                }
                                {
                                    genderUpdating &&
                                    <label
                                        htmlFor='trainer-birthday'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            setGenderUpdating(prev => !prev);
                                            handleUpdate();
                                        }}
                                    >
                                        <i class="fas fa-save"></i>
                                        Lưu lại
                                    </label>
                                }
                                {
                                    genderUpdating &&
                                    <label
                                        htmlFor='trainer-birthday'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            setGenderUpdating(prev => !prev);
                                        }}
                                    >
                                        <i class="fas fa-window-close"></i>
                                        Hủy
                                    </label>
                                }
                            </div>

                            {/* Địa chỉ */}
                            <div className={clsx(styles.inforWrapper)}>
                                <div className={clsx(styles.inforContent)}>
                                    <h3 className={clsx(styles.inforLabel)}>Địa chỉ</h3>
                                    <input
                                        readOnly={!addressUpdating}
                                        ref={addressRef}
                                        type="text"
                                        className={clsx(styles.inforText)}
                                        value={userProfile.address}
                                        onChange={(e) => {
                                            setUserProfile(prev => ({
                                                ...userProfile,
                                                address: e.target.value
                                            }))
                                        }}
                                        id='trainer-address' />
                                </div>
                                {
                                    !addressUpdating &&
                                    <label
                                        htmlFor='trainer-address'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            addressRef.current.focus();
                                            setAddressUpdating((prev => !prev))
                                        }}
                                    >
                                        <i class="fas fa-pen"></i>
                                        Chỉnh sửa
                                    </label>
                                }
                                {
                                    addressUpdating &&
                                    <label
                                        htmlFor='trainer-account'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            setAddressUpdating(prev => !prev);
                                            handleUpdate();
                                        }}
                                    >
                                        <i class="fas fa-save"></i>
                                        Lưu lại
                                    </label>
                                }
                                {
                                    addressUpdating &&
                                    <label
                                        htmlFor='trainer-account'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            setAddressUpdating(prev => !prev)
                                        }}
                                    >
                                        <i class="fas fa-window-close"></i>
                                        Hủy
                                    </label>
                                }
                            </div>

                            {/* Ngày đăng ký */}
                            <div className={clsx(styles.inforWrapper)}>
                                <div className={clsx(styles.inforContent)}>
                                    <h3 className={clsx(styles.inforLabel)}>Ngày đăng ký</h3>
                                    <input
                                        readOnly={!registerUpdating}
                                        ref={registerRef}
                                        type="date"
                                        className={clsx(styles.inforText)}
                                        value='2021-01-12'
                                        onChange={(e) => {
                                            setUserProfile(prev => ({
                                                ...userProfile,
                                                register: e.target.value
                                            }))
                                        }}
                                        id='trainer-register' />
                                </div>
                                {
                                    !registerUpdating &&
                                    <label
                                        htmlFor='trainer-register'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            registerRef.current.focus();
                                            setRegisterUpdating(prev => !prev);
                                        }}
                                    >
                                        <i class="fas fa-pen"></i>
                                        Chỉnh sửa
                                    </label>
                                }
                                {
                                    registerUpdating &&
                                    <label
                                        htmlFor='trainer-register'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            setRegisterUpdating(prev => !prev);
                                            handleUpdate();
                                        }}
                                    >
                                        <i class="fas fa-save"></i>
                                        Lưu lại
                                    </label>
                                }
                                {
                                    registerUpdating &&
                                    <label
                                        htmlFor='trainer-register'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            setRegisterUpdating(prev => !prev)
                                        }}
                                    >
                                        <i class="fas fa-window-close"></i>
                                        Hủy
                                    </label>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Popup trigger={showPopup} message="Cập nhật thành công" />
        </div>
    )
}

export default TrainerInfor
