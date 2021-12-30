import React, { useEffect } from 'react'
import { Login, Footer } from '../components'

function Loginpage() {

    useEffect(() => {
        window.document.title = 'Đăng nhập'
        
    }, [])

    return (
        <>
            <Login />
            <Footer />
        </>
    )
}

export default Loginpage
