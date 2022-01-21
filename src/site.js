import Header from './Component/HeaderComponent/Header';
import Content from './Component/ContentComponent/Content';
import Footer from './Component/FooterComponent/Footer';
import {useEffect} from 'react'
import { useSelector } from 'react-redux'
import {fetchStaff} from './redux/ActionCreator'
import {
    BrowserRouter as Router,
} from "react-router-dom";

function SitePage() {
    useEffect(() => {
        fetchStaff();
    });
    
    const staff = useSelector((state) => state);
    console.log(staff)
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