import React, {useState, useEffect} from "react";
import Navbar from "../components/SmartComponents/Navbar";
import HeroSection from "../components/SmartComponents/HeroSection";
import Footer from "../components/SmartComponents/Footer";
import NewsletterSection from "../components/SmartComponents/NewsLetter";
import BackToTop from "../components/DumbComponents/BackToTop";
import ContactUs from "../components/SmartComponents/Contacts";
import { Spinner } from "react-bootstrap";

const ContactPage = () => {
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
            <HeroSection pageTitle="Contact" toReach="#contactForm" />
            <ContactUs />
            <NewsletterSection />
            <br />
            <br />
            <br />
            <BackToTop />
            </>}
            <Footer />
        </div>
    );
};

export default ContactPage;