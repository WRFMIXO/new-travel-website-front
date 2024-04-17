import React, {useState, useEffect} from "react";
import AdminLoginForm from "../../admin/AdminLogin";
import { Spinner } from "react-bootstrap";

const AdminLoginPage = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <div style={{ height: "100vh", justifyContent: "center", alignItems: "center"}}>
            {loading ? <Spinner /> :  <AdminLoginForm />}
        </div>
    );
};

export default AdminLoginPage;