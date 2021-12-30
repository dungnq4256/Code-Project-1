import React, { useEffect, useState } from 'react'
import { Banner, Content, Footer, Header  } from '../components'
import Calendar from 'react-calendar'

function Homepage() {

    let [date, setDate] = useState(new Date());



    useEffect(() => {
        window.document.title = 'Trang chủ'
    }, [])

    return (
        <>
            <Header />
            <Banner />
            <Content/>
            <Footer />
        </>
    )
}

export default Homepage
