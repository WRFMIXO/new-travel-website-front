import React, { useState } from 'react';
import { Container, Grid, Typography, Paper, Button } from '@mui/material';
import "../../assets/AboutEnterprise.css";
import { Card, CardBody, Form, FormControl, FormLabel, Row, Col, Spinner } from 'react-bootstrap';
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";

function ContactUs() {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        obj: "",
        nom: "",
        prenom: "",
        email: "",
    });


    
    const submitForm = async (e) => {

        e.preventDefault();
        setLoading(true);
        
        try {
            const response = await axios.post("http://16.171.24.180:8000/sendMail/contact/", {
                object: formData.obj,
                name: formData.nom,
                surname: formData.prenom,
                email: formData.email,
            });
            if(response.status >= 200 && response.status <= 300 ){
                setTimeout(() => {
                    setLoading(false);
                    toast.info(response.data.message);
                }, 2000);
            } else {
                toast.warning(response.data.message);
            }
        } catch (error) {
            switch (error?.response.status) {
                case 400:
                    error?.response.data.message ? (toast.error(error?.response.data.message)) : (toast.error("Les informations soumises ne sont pas celles attendues!"));
                    setTimeout(() => {
                        setLoading(false);
                    }, 2000);
                    break;
                case 500:
                    error?.response.data.message ? (toast.error(error?.response.data.message)) : (toast.error("Nous rencontrons des difficultés! Réessayez plus tard!"));
                    setTimeout(() => {
                        setLoading(false);
                    }, 2000);
                    break;
                case 404:
                    error?.response.data.message ? (toast.error(error?.response.data.message)) : (toast.error("La ressource demandée n'est pas disponible actuellement!"));
                    setTimeout(() => {
                        setLoading(false);
                    }, 2000);
                    break;
                case 403:
                    error?.response.data.message ? (toast.error(error?.response.data.message)) : (toast.error("Vous n'avez pas le droit d'accéder à ces données!"));
                    setTimeout(() => {
                        setLoading(false);
                    }, 2000);
                    break;
                case 401:
                    error?.response.data.message ? (toast.error(error?.response.data.message)) : (toast.error("Non autorisé"));
                    setTimeout(() => {
                        setLoading(false);
                    }, 2000);
                    break;
            
                default:
                    toast.error("Impossible d'envoyer le mail ! " + error?.response.data.message);
                    setTimeout(() => {
                        setLoading(false);
                    }, 2000);
                    break;
            }
        }
    }

    return (
        <section className='root' id='contactForm'>
            <ToastContainer />
            <Container maxWidth="xl">
                <Paper className="paper" elevation={8}  style={{ marginTop: "5rem", padding: "5rem", border: "none"}}>
                    <Grid container spacing={5} alignItems="center" style={{ border: "none"}}>
                        <Grid item xs={12} md={6} >
                            <Typography variant="h2" className="contactsTitle" style={{ color: "mediumslateblue"}}>
                                Prenez contact, Demandez assistance ...
                            </Typography>
                            <Typography variant="body1" className="paragraph" style={{ fontFamily: "Segoe UI Light", fontWeight: "bold"}}>
                                Remplissez le formulaire suivant en fournissant les informations requises correctes, et laissez nos spécialistes vous apporter l'aide appropriée à votre besoin.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6} lg={6} xl={6} >
                            <Form onSubmit={submitForm}>
                                <Card className='contactFormCard' style={{background: "#333561", color: "white"}}>
                                    <Typography variant='h4' style={{ fontFamily: "Segoe UI Light", fontWeight: "bold", textAlign: "right", color: "white"}}>
                                        Formulaire de contact
                                    </Typography>
                                    <Typography variant="body1" className="paragraph" style={{ fontFamily: "Segoe UI Light", textAlign: "right", color: "white"}}>
                                        Rassurer vous que les informations fournies sont correctes 
                                    </Typography>
                                    <br />
                                    <br />
                                    <CardBody>
                                        <Row className='mb-3'>
                                            <Col>
                                                <FormLabel><i className='bi bi-question-circle' style={{marginRight: "10px"}}></i>Objet de la demande</FormLabel>
                                                <FormControl type='text' className='form-control' placeholder="Rassurez vous de spécifier l'objet de la demande d'assistance"/>
                                            </Col>
                                        </Row>
                                        <Row className='mb-3'>
                                            <Col>
                                                <FormLabel><i className='bi bi-people' style={{marginRight: "10px"}}></i>Nom(s)</FormLabel>
                                                <FormControl type='text' className='form-control' placeholder="Rassurez vous de spécifier l'objet de la demande d'assistance"/>
                                            </Col>
                                            <Col>
                                                <FormLabel><i className='bi bi-people' style={{marginRight: "10px"}}></i>Prénom(s)</FormLabel>
                                                <FormControl type='text' className='form-control' placeholder="Rassurez vous de spécifier l'objet de la demande d'assistance"/>
                                            </Col>
                                        </Row>
                                        <Row className='mb-3'>
                                            <Col>
                                                <FormLabel><i className='bi bi-envelope-at' style={{marginRight: "10px"}}></i>Adresse email de contact</FormLabel>
                                                <FormControl type='text' className='form-control' placeholder="Rassurez vous de spécifier l'objet de la demande d'assistance"/>
                                            </Col>
                                        </Row>

                                        <Row className='mb-3' style={{ margin: "3rem", padding: "3rem", justifyContent: "center", alignItems: "center"}}>
                                            <Button variant="contained" type='submit'>
                                                {loading ? <Spinner /> : <>Envoyer ma demande <i className='bi bi-send' style={{ marginLeft: "10px"}}></i></>}
                                            </Button>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Form>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </section>
    );
}

export default ContactUs;
