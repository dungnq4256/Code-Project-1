import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

import styles from './Category.module.css'
import avatar from './../../store/imgs/logo.png'

function Category() {
    // let [trainerCustomer, setTrainerCustomer] = useState(false);
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.header)}>
                <img src={avatar} alt="" className={clsx(styles.headerImg)} />
                <div className={clsx(styles.headerHeading)}>
                    <div className={clsx(styles.primaryHeading)}>
                        Admin
                    </div>
                    <div className={clsx(styles.subHeading)}>
                        {/* Admin */}
                    </div>
                </div>
            </div>
            <ul className={clsx(styles.categoryList)}>
                <li className={clsx(styles.categoryItem)}>
                    <i className={clsx(styles.categoryIcon, "fas fa-home")}></i>
                    <Link className={clsx(styles.itemLink)} to="/admin">Home</Link>
                </li>

                <li className={clsx(styles.categoryItem)}>
                    <i className={clsx(styles.categoryIcon, "fas fa-user-friends")}></i>
                    <Link className={clsx(styles.itemLink)} to="trainers">Huấn luyện viên</Link>
                </li>

                <li className={clsx(styles.categoryItem)}>
                    <i className={clsx(styles.categoryIcon, "fas fa-users")}></i>
                    <Link className={clsx(styles.itemLink)} to="customers">Học viên</Link>
                </li>

                <li className={clsx(styles.categoryItem)}>
                    <i className={clsx(styles.categoryIcon, "fas fa-sign-out-alt")}></i>
                    <Link className={clsx(styles.itemLink)} to="/">Đăng xuất</Link>
                </li>
            </ul>
        </div>
    )
}

export default Category
