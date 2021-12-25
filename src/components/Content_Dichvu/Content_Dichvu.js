import React from 'react'
import './Content_Dichvu.css'
import dichvu from './../../store/imgs/dichvu.png';
import dichvu1 from './../../store/imgs/dichvu1.png';


function Content_Dichvu() {
    return (
        <div className="w">
            <img
                src={dichvu}
                alt=""
                styles={{
                    marginTop: '75px'
                }}
            />
            <img src={dichvu1} alt="" />
        </div>

    )
}

export default Content_Dichvu
