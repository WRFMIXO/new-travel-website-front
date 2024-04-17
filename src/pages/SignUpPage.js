import React, {useState, useEffect} from "react";
import Navbar from "../components/SmartComponents/Navbar";
import HeroSection from "../components/SmartComponents/HeroSection";
import Footer from "../components/SmartComponents/Footer";
import BackToTop from "../components/DumbComponents/BackToTop";
import SignUpForm from "../components/SmartComponents/SignUpForm";
import { Spinner } from "react-bootstrap";

const SignUpPage = () => {
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
            <HeroSection pageTitle="Inscription" toReach="#signUpForm" />
            <SignUpForm />
            <br />
            <br />
            <br />
            <BackToTop />
            </>}
            <Footer />
        </div>
    );
};

export default SignUpPage;