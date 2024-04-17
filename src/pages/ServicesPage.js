import React, {useEffect, useState} from "react";
import Navbar from "../components/SmartComponents/Navbar";
import HeroSection from "../components/SmartComponents/HeroSection";

import ServicePresentationSection from "../components/SmartComponents/EnterpriseServices";

import Footer from "../components/SmartComponents/Footer";
import NewsletterSection from "../components/SmartComponents/NewsLetter";
import BackToTop from "../components/DumbComponents/BackToTop";
import { Spinner } from "react-bootstrap";

const ServicesPage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <div>
            <Navbar />
            {loading ? <div className="appLoader"><Spinner /></div> : <>
            <HeroSection pageTitle="Services" toReach="#servicesList" />
            <ServicePresentationSection />
            <NewsletterSection />
            <BackToTop />
            </>}
            <Footer />
        </div>
    );
};

export default ServicesPage;