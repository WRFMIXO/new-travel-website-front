// ServicePresentationSection.js

import { Grid, Paper, Typography, Button } from '@mui/material';
import React from 'react';
import { Card, CardBody, CardFooter, CardHeader, Col, Row } from "react-bootstrap";
import { Container } from 'react-bootstrap';
import "../../assets/EnterpriseServices.css";
import { Link } from 'react-router-dom';

function ServicePresentationSection() {
    return (
        <section className="services">
            <Container fluid style={{ width: "100%"}} id='servicesList'>
                <Paper className='paper' elevation={10} style={{ marginTop: "10rem", padding: "10rem", border: "none"}} >
                    <Grid spacing={10} alignItems="center" justifyContent="center" style={{ border: "none"}} >
                        <Typography variant='h2' className='services-title' style={{ color: "mediumslateblue"}} maxWidth={550}>
                            Chez nous vous pourrez bénéficier...
                        </Typography>
                        <Typography variant='body2' className='services-paragraph' style={{ fontFamily: "Segoe UI Light", fontWeight: "bold"}} maxWidth={550}>
                            <br></br>
                            Nous vous proposons entre autres des services liés à l'hébergement, aux demandes de visas, à l'étude de dossier et bien d'autres encore...
                        </Typography>
                        
    
                        <Grid spacing={10} alignItems="center" justifyContent="center" className='cards-grids' style={{ marginTop: "7rem", display: "flex"}} >
                            <Row>
                                <Col sm="12" md="4" lg="4" xl="4">
                                <Card className='services-card' style={{background: "#333", color: "#fff", border: "none", padding: "1rem",}}>
                                    <CardHeader style={{border: "none"}}>
                                        <Typography variant='h6' style={{ fontFamily: "Segoe UI Light", fontWeight: "bold"}}>
                                            D'un accompagnement pendant la procédure de demande de visa <i className='bi bi-passport' style={{marginLeft: "1rem"}}></i>
                                        </Typography>
                                        <br />
                                    </CardHeader>
                                    <CardBody>
                                        <Typography variant="body2" className='paragraph' style={{ fontFamily: "Segoe UI Light"}}>
                                            Notre service de demande de visa vous offre une assistance complète dans le processus parfois complexe d'obtention de visas pour les destinations internationales. Que vous voyagiez pour les affaires, le tourisme ou d'autres raisons, notre équipe expérimentée vous guide à travers chaque étape du processus, depuis la collecte des documents nécessaires jusqu'à la soumission de votre demande aux autorités compétentes. Avec notre expertise et notre engagement envers la satisfaction du client, nous vous assurons une expérience sans tracas.

                                        </Typography>
                                    </CardBody>

                                    <CardFooter style={{ marginTop: "2rem", border: "none"}}>
                                        <Link to="/service1" className="btn btn-primary">
                                            <i className="bi bi-arrow-right"></i> En savoir plus
                                        </Link>
                                    </CardFooter>
                                </Card>
                            </Col>

                            <Col sm="12" md="4" lg="4" xl="4">
                                <Card className='services-card' style={{background: "#333", color: "#fff", border: "none", padding: "1rem",}}>
                                    <CardHeader style={{border: "none"}}>
                                        <Typography variant='h6' style={{ fontFamily: "Segoe UI Light", fontWeight: "bold"}}>
                                            D'un système de support et d'aide à l'installation <i className='bi bi-bus-front' style={{marginLeft: "1rem"}}></i>
                                        </Typography>
                                        <br />
                                    </CardHeader>
                                    <CardBody>
                                        <Typography variant="body2" className='paragraph' style={{ fontFamily: "Segoe UI Light"}}>
                                            Nos services d'aide à l'installation vont au-delà de la simple assistance aux voyages. Nous comprenons les défis auxquels vous pourriez être confronté lors de l'installation dans un nouveau pays. Que ce soit pour obtenir un visa, un permis de séjour ou simplement trouver les bons logements et transports, notre équipe est là pour vous guider à chaque étape. Nous nous engageons à rendre votre installation aussi fluide et sans tracas que possible, vous offrant la tranquillité d'esprit nécessaire pour vous concentrer sur votre nouvelle aventure.

                                        </Typography>
                                    </CardBody>
                                    <CardFooter style={{ marginTop: "2rem", border: "none"}}>
                                        <Link to="/service1" className="btn btn-primary">
                                            <i className="bi bi-arrow-right"></i> En savoir plus
                                        </Link>
                                    </CardFooter>
                                </Card>
                            </Col>

                            <Col sm="12" md="12" lg="4" xs="4">
                                <Card className='services-card' style={{background: "#333", color: "#fff", border: "none", padding: "1rem",}}>
                                    <CardHeader>
                                        <Typography variant='h6' style={{ fontFamily: "Segoe UI Light", fontWeight: "bold"}}>
                                            D'une fiche de suivi et d'un support disponible et à l'écoute<i className='bi bi-headset' style={{marginLeft: "1rem"}}></i>
                                        </Typography>
                                        <br />
                                    </CardHeader>
                                    <CardBody>
                                        <Typography variant="body2" className='paragraph' style={{ fontFamily: "Segoe UI Light"}}>
                                            Notre service de fiche de suivi et de support disponible et à l'écoute est conçu pour vous offrir une assistance continue et personnalisée à chaque étape de votre voyage. Avec notre système de suivi efficace, vous restez informé de l'avancement de vos démarches, que ce soit pour l'obtention de visas, de permis de séjour ou d'autres documents administratifs. De plus, notre équipe de support dévouée est toujours à votre disposition pour répondre à vos questions, résoudre vos problèmes et vous fournir les conseils nécessaires, afin de garantir une expérience de voyage agréable.

                                        </Typography>
                                    </CardBody>
                                    <CardFooter style={{ marginTop: "2rem", border: "none"}}>
                                        <Link to="/service1" className="btn btn-primary">
                                            <i className="bi bi-arrow-right"></i> En savoir plus
                                        </Link>
                                    </CardFooter>
                                </Card>
                            </Col>
                            </Row>
                        </Grid>

                        
                    </Grid>

                    <Grid spacing={10} alignItems="center" justifyContent="center" style={{ border: "none", textAlign: "center"}}>
                        <Button variant="contained" className='actionButton' style={{margin: "4rem", marginTop: "5rem", marginBottom: "-5rem"}}>
                        <a href='/travel-website/services/' style={{ color: "white", textDecoration: "none",}}>Télécharger le catalogue des services</a><i className='bi bi-caret-right' style={{ marginLeft: "10px"}}></i>
                        </Button>
                    </Grid>
                    
                </Paper>
                
            </Container>
        </section>
    );
}

export default ServicePresentationSection;
