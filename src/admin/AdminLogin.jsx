import React, { useState } from "react";
import { Form, FormControl, FormLabel, Spinner } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { Button, IconButton } from "@mui/material";
import { RemoveRedEye } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const AdminLoginForm = () => {

    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [userInfos, setUserInfos] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        setUserInfos((prevData) => {
            const updateData = {
                ...prevData,
                [e.target.name]:e.target.value,
            }
            return updateData;
        });
    };

    const handleShow = () => {
        setShow(!show);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            // Récupérer le jeton CSRF depuis les cookies du navigateur
            const getCSRFTokenFromCookie = () => {
                const cookieName = 'csrftoken=';
                const decodedCookie = decodeURIComponent(document.cookie);
                const cookieArray = decodedCookie.split(';');
                for (let i = 0; i < cookieArray.length; i++) {
                    let cookie = cookieArray[i];
                    while (cookie.charAt(0) === ' ') {
                        cookie = cookie.substring(1);
                    }
                    if (cookie.indexOf(cookieName) === 0) {
                        return cookie.substring(cookieName.length, cookie.length);
                    }
                }
                return null;
            };

            // 2. Appeler la fonction pour obtenir le jeton CSRF et inclure dans la requête POST
            const csrfToken = await getCSRFTokenFromCookie();
            const loginResponse = await axios.post("http://localhost:8080/users/login/", userInfos, {
                headers: {
                    'X-CSRFToken': csrfToken // Inclure le jeton CSRF dans l'en-tête
                }
            });
            if(loginResponse.status >= 200 && loginResponse.status <= 300) {
                navigate("/manage/admin/dashboard/");
            }
        } catch (error) {
            switch (error?.response.status) {
                case 500:
                    toast.error("Erreur interne du serveur");
                    break;
                case 400:
                    toast.error(error?.response.data.detail);
                    break;
                case 401:
                    toast.error(error?.response.data.message);
                    break;
                case 404:
                    toast.error("La ressource demandée est indisponible pour le moment");
                    break;
            
            
                default:
                    toast.error("Une erreur innatendue nous empêche de continuer! Réssayez plus tard ou contactez l'administrateur de ce site");
                    break;
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="container-fluid">
            <div className="row" style={{ justifyContent: "center", alignItems: "center", height: "100vh", width: "100%"}}>
            <Form onSubmit={handleSubmit} style={{ width: "500px", justifyContent: "center", alignItems: "center", border: "1px solid gainsboro", padding: "1rem", margin: "1rem", borderRadius: "10px", background: "#333", color: "white"}}>
                <div className="row">
                    <h2 style={{ fontSize: "60px", color: "slateblue", textAlign: "right"}}>
                        Connexion
                    </h2>
                </div>
                <div className="row mb-3" style={{ marginTop: "2rem"}}> 
                    <div className="col">
                        <FormLabel className="form-label" style={{ fontWeight: "bold", fontSize: "15px"}}>
                            Nom d'utilisateur
                        </FormLabel>
                        <FormControl 
                            type="text"
                            className="form-control"
                            placeholder="Votre nom d'utilisateur"
                            name="username"
                            value={userInfos.username}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <FormLabel className="form-label" style={{ fontWeight: "bold", fontSize: "15px"}}>
                            Mot de passe
                        </FormLabel>
                        <FormControl 
                            type={show ? "text" : "password"}
                            className="form-control"
                            placeholder="Votre mot de passe"
                            name="password"
                            value={userInfos.password}
                            onChange={(e) => handleChange(e)}
                        />
                        <IconButton onClick={handleShow} style={{float: "right"}}>
                            <RemoveRedEye style={{color: "white"}}/>
                        </IconButton>
                    </div>

                    <div className="row mb-3" style={{ marginTop: "2rem"}}>
                        <div className="col">
                            <Button type="submit" variant="contained" style={{float: "right"}}>
                                {loading ? <Spinner /> : "Se connecter"}
                            </Button>
                        </div>
                    </div>
                </div>
            </Form>
            </div>
            
        </div>
    );
};

export default AdminLoginForm;