import HomePageHeader from '../HomePage/components/Header/HomePageHeader'
import App from '../HomePage/components/Footer/App'
import Image from '../HomePage/img/yd1.jpg'
import Main from './Main'

const Embassador = () => {
    return (
        <>
        <HomePageHeader image={Image} />
        <Main />
        <App />
        </>
    )
}

export default Embassador
