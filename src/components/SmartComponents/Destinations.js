// DestinationsCoveredSection.js

import React from 'react';
import image1 from "../../assets/images/eiffel-tower.jpg";
import image3 from "../../assets/images/japan.jpg";
import image4 from "../../assets/images/london.jpg";
import { Card, CardBody, CardFooter, Col, Container, Row } from 'react-bootstrap';
import { Button, Grid, Paper, Typography } from '@mui/material';
import "../../assets/Destinations.css";


function DestinationsCoveredSection() {
  // Liste des destinations couvertes avec les images correspondantes
    const destinations = [
        { name: "Paris", image: image1, description: "Offre un mélange riche de patrimoine culturel, d'institutions renommées telles que la Sorbonne, et une scène artistique dynamique, offrant ainsi un cadre inspirant pour les étudiants." },
        { name: "Tokyo", image: image3, description: "Se distingue par ses universités de premier plan, son innovation technologique de pointe et son mélange vibrant de tradition et de modernité, offrant aux étudiants une immersion unique dans la culture japonaise et une éducation de classe mondiale." },
        { name: "Londres", image: image4, description: "Avec ses prestigieuses universités comme Oxford et Cambridge, son ambiance cosmopolite, et son accès aux opportunités professionnelles internationales, attire les étudiants du monde entier pour une expérience éducative enrichissante et diversifiée." },
        // Ajoute d'autres destinations au besoin
    ];

    return (
        <section className="destinations">
            <Container fluid style={{ width: "100%", background: "#333"}}>
                <Paper className='paper' elevation={10} style={{ marginTop: "10rem", padding: "10rem", border: "none", background: "#333"}}>
                    <Grid spacing={10} alignItems="center" justifyContent="center" style={{ border: "none"}}>
                        <Grid>
                            <Typography variant='h2' className='services-title' style={{ color: "mediumslateblue"}} maxWidth={550}>
                                Des destinations idéales...
                            </Typography>
                            <Typography variant='body2' className='services-paragraph' style={{ fontFamily: "Segoe UI Light", fontWeight: "bold", color: "white"}} maxWidth={550}>
                                <br></br>
                                Parcourez nos destinations déservies et laissez vous séduire par l'ambiance, le paysage ou les avantages qu'ils proposent...
                            </Typography>
                        </Grid>
                        
    
                        <Grid spacing={10} alignItems="center" justifyContent="center" className='cards-grids' style={{ marginTop: "7rem", display: "flex"}} >
                            <Row>
                                <Col>
                                    <div className="row justify-content-center" style={{ marginTop: "3rem"}}>
                                        {destinations.map((destination, index) => (
                                            <div key={index} className="col-md-4 mb-4 sm-12 lg-12 xl-12">
                                                <Card className="card" id='destinationCard' style={{ border: "none", background: "#333", color: "white"}}>
                                                    <img src={destination.image} className="card-img-top" id='cardImage' alt={destination.name} style={{ height: "350px"}}/>
                                                    <div className="card-body">
                                                        <h5 className="card-title">{destination.name}</h5>
                                                    </div>
                                                    <CardBody style={{ height: "180px"}}>
                                                        <Typography variant='body2>' className='paragraph'>
                                                            {destination.description}
                                                        </Typography>
                                                    </CardBody>

                                                    <CardFooter style={{ border: "none"}}>
                                                        
                                                    </CardFooter>
                                                </Card>
                                            </div>
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                        </Grid>
                    </Grid>

                    <Grid spacing={10} alignItems="center" justifyContent="center" style={{ border: "none", textAlign: "center"}}>
                        <Button variant="contained" className='actionButton' style={{margin: "4rem", marginTop: "5rem", marginBottom: "-5rem"}}>
                            <a href='/travel-website/destinations/' style={{ color: "white", textDecoration: "none",}}> Voir toutes les destinations </a><i className='bi bi-globe-europe-africa' style={{ marginLeft: "10px"}}></i>
                        </Button>
                    </Grid>
                    
                </Paper>
            </Container>
        </section>
    );
}

export default DestinationsCoveredSection;
