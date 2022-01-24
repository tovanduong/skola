import Header from './Component/HeaderComponent/Header';
import Content from './Component/ContentComponent/Content';
import Footer from './Component/FooterComponent/Footer';
import {
    BrowserRouter as Router,
} from "react-router-dom";

function SitePage() {
    return (

        <>
            <Router>
                <Header />
                <Content />
                <Footer />
            </Router>
        </>
    )
}

export default (SitePage);