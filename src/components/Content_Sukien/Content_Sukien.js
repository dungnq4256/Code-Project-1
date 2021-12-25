import React from 'react'
import './Content_Sukien.css'
import sukien from './../../store/imgs/sukien.png';

function Content_Sukien() {
    return (
        <div className="w">
            <img 
                src={sukien} 
                alt="" 
                styles={{
                    display: 'block'
                }}
            />
        </div>

    )
}

export default Content_Sukien
