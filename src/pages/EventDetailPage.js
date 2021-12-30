import React ,{useEffect} from 'react'
import { Footer, Header, Content_EventDetail} from '../components'

function Su_kien() {
    useEffect(() => {
        window.document.title = 'Sự kiện'
    }, [])
    return (
        <>
            <Header />
            <Content_EventDetail />
            <Footer />
        </>
    )
}

export default Su_kien
