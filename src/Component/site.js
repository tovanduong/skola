import Header from './HeaderComponent/Header';
import Content from './ContentComponent/Content';
import Footer from './FooterComponent/Footer';
import {
    BrowserRouter as Router
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

export default SitePage;