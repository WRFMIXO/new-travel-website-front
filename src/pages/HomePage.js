import React, { useEffect, useState } from "react";
import Navbar from "../components/SmartComponents/Navbar";
import HeroSection from "../components/SmartComponents/HeroSection";
import AgencyPresentationSection from "../components/SmartComponents/AboutEnterprise";
import ServicePresentationSection from "../components/SmartComponents/EnterpriseServices";
import DestinationsCoveredSection from "../components/SmartComponents/Destinations";
import Partners from "../components/SmartComponents/Partners";
import Numbers from "../components/SmartComponents/Numbers";
import Footer from "../components/SmartComponents/Footer";
import NewsletterSection from "../components/SmartComponents/NewsLetter";
import BackToTop from "../components/DumbComponents/BackToTop";
import { Spinner } from "react-bootstrap";

const HomePage = () => {
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
                
            <HeroSection pageTitle="Accueil" toReach="#aboutentreprise" />
            <AgencyPresentationSection />
            <ServicePresentationSection />
            <DestinationsCoveredSection />
            <Partners />
            <Numbers />
            <NewsletterSection />
            <BackToTop />
            </>}
            <Footer />
        </div>
    );
};

export default HomePage;