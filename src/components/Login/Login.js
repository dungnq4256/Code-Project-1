import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './../../store/imgs/logo.png'
import './Login.css'
import authAPI from '../../api/authAPI'
import { useNavigate } from 'react-router-dom'
import axiosClient from '../../api/axiosClient'

function Login() {
    const navigate = useNavigate();
    let [userState, setUserState] = useState({ role: 'admin' });
    let [loginFalse, setLoginFalse] = useState(false);

    const navigateTrainer = async () => {
        const url = 'https://61bca039d8542f00178248c3.mockapi.io/api/trainers';
        let response = await axiosClient.get(url);
        let target = response.find(trainer => {
            return trainer.username == userState.username;
        })
        console.log(target);
        navigate(`/trainer/${target.id}`)
    }

    const navigateCustomer = async () => {
        const url = 'https://61bca039d8542f00178248c3.mockapi.io/api/customers';
        let response = await axiosClient.get(url);
        let target = response.find(customer => {
            return customer.username == userState.username;
        })
        console.log(target);
        navigate(`/customer/${target.id}`)
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        if(!(userState.username && userState.password)) {
            alert("Hãy nhập đủ tên đăng nhập và mật khẩu");
            return;
        }
        axiosClient.put('https://61bca039d8542f00178248c3.mockapi.io/api/users/:1', {username: 'd', password: '1', role: 2})
        if (!(userState.username && userState.password)) return;
        else {
            let userInput = {
                username: userState.username,
                password: userState.password,
                role: userState.role
            }
            const response = await authAPI.login();
            const ok = response.some((user) => {
                console.log(user)
                return user.username == userInput.username && 
                    user.password == userInput.password &&
                    user.role == userInput.role;
            })

            if(ok) {

                switch (userInput.role) {
                    case 'admin':
                        navigate('/admin');
                        break;
                    case 'trainer':
                        navigateTrainer();
                        break;
                    case 'customer':
                        navigateCustomer();
                        break;
                    default: navigate('/');
                }
            }
            else {
                setLoginFalse(prev => true)
            }
        }
    }

    return (
        <div className="login-wrapper">
            {/* Header */}
            <div className="login-header-wrapper">
                <div className="grid wide">
                    <div className="login-header">
                        <div className="login-header-logo">
                            <Link to='/'><img src={logo} alt="" className="logo-img" /></Link>
                            <Link to='/' className="logo-name">RUBYGYM</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Header body */}
            < main className="login-body" >
                <div className="login-body-wrapper">
                    <h2 className="login-body-heading">Chọn vai trò đăng nhập</h2>
                    <div className="login-inner">
                        <div className="login-role">
                            <div
                                className={userState.role === 'admin' ? "role-detail role-active" : "role-detail"}
                                onClick={() => setUserState({ ...userState, role: 'admin' })}
                            >
                                <i className="fas fa-user-lock"></i>
                                Quản trị viên
                            </div>
                            <div className="role-detail-wrapper">
                                <div
                                    className={userState.role === 'trainer' ? "role-detail role-active" : "role-detail"}
                                    onClick={() => setUserState({ ...userState, role: 'trainer' })}
                                >
                                    <i className="fas fa-user-chart"></i>
                                    Huấn luyện viên
                                </div>
                                <div
                                    className={userState.role === 'customer' ? "role-detail role-active" : "role-detail"}
                                    onClick={() => setUserState({ ...userState, role: 'customer' })}
                                >
                                    <i className="fas fa-user"></i>
                                    Học viên
                                </div>
                            </div>
                        </div>
                        <form onSubmit={handleLogin}>
                            <div className="form-group">
                                <input
                                    className="userinput"
                                    type="text"
                                    name="username"
                                    id="username"
                                    placeholder="Nhập tên đăng nhập"
                                    onChange={(e) => {
                                        const username = e.target.value;
                                        setUserState({ ...userState, username });
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    className="userinput"
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Nhập mật khẩu"
                                    onChange={(e) => {
                                        const password = e.target.value;
                                        setUserState({ ...userState, password });
                                    }}
                                />
                            </div>
                            {loginFalse && <h2 className="login-false">Tên đăng nhập hoặc mật khẩu không đúng</h2>}
                            {!loginFalse && <h2 className="login-false login-false-empty">.</h2>}
                            <button className={userState.username && userState.password ? "usersubmit-btn" : "usersubmit-btn inactive"}>Đăng nhập</button>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Login



