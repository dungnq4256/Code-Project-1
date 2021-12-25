import React from 'react'
import { Link } from 'react-router-dom'
import avatar from './../../store/imgs/avatar.jpg'
import './TrainerItem.css'

function TrainerItem({ infor }) {
    const id = 1;
    return (
        <div className="col l-3 m-4 c-6">
            <Link to={`detail/${infor.id}`} className="trainer-link">
                <div
                    className="trainer-wrapper"
                    style={{
                        backgroundImage: infor.avatarURL ?
                            `url(${infor.avatarURL})` :
                            `url(${avatar})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <div className="trainer-infor">
                        <div className="trainer-name">{infor.name}</div>
                        <div className="trainer-age">{infor.phone}</div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default TrainerItem
