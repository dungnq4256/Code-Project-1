import React ,{useEffect} from 'react'
import { Footer, Header, Content_Service} from '../components'

function Service() {
    useEffect(() => {
        window.document.title = 'Dịch vụ'
    }, [])
    return (
        <>
            <Header />
            <Content_Service />
            <Footer />
        </>
    )
}

export default Service
