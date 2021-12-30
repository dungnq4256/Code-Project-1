import React ,{useEffect} from 'react'
import { Footer, Header, Content_Event} from '../components'

function Su_kien() {
    useEffect(() => {
        window.document.title = 'Sự kiện'
    }, [])
    return (
        <>
            <Header />
            <Content_Event />
            <Footer />
        </>
    )
}

export default Su_kien
