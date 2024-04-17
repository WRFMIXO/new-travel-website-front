import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import HomePage from "./pages/HomePage";
import ProcessesPage from "./pages/ProcessesPage";
import ServicesPage from "./pages/ServicesPage";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";
import FAQ from "./pages/FaqPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import AdminLoginPage from "./pages/admin/AdminLoginPage";

const WebsiteRoutes = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    })
    return (
        <BrowserRouter>
            {loading ? (
                <div className="appLoader">
                    <Spinner style={{ fontSize: "30px", padding: "7rem", borderRadius: "100%", color: "mediumpurple" }} />
                </div>
            ) : (
                <Routes>
                    {/** Admin routes */}
                    <Route path="/manage/login/" element={ <AdminLoginPage /> } />
                    {/** Common or Website Routes */}
                    <Route path="/" element={ <HomePage /> } />
                    <Route path="/processes-page/" element={ <ProcessesPage /> } />
                    <Route path="/services-page/" element={ <ServicesPage /> } />
                    <Route path="/team-page/" element={ <TeamPage /> } />
                    <Route path="/contacts-page/" element={ <ContactPage /> } />
                    <Route path="/faq-page/" element={ <FAQ /> } />
                    <Route path="/signin/" element={ <LoginPage /> } />
                    <Route path="/register/" element={ <SignUpPage /> } />
                </Routes>
            )}
        </BrowserRouter>
    );
};

export default WebsiteRoutes;