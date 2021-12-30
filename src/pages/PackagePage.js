import React ,{useEffect} from 'react'
import { Footer, Header, Content_Package} from '../components'

function Goi_tap() {
    useEffect(() => {
        window.document.title = 'Gói tập'
    }, [])
    return (
        <>
            <Header />
            <Content_Package />
            <Footer />
        </>
    )
}

export default Goi_tap
