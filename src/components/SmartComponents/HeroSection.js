import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import "../../assets/HeroSection.css";

const HeroSection = ({ pageTitle, toReach }) => {

    return (
        <div style={{ background: "#333", backgroundSize: 'cover', backgroundPosition: 'center', height: 'calc(100vh - 64px)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Container maxWidth="xl" style={{ textAlign: 'center', color: 'white' }}>
                <div className='row'>
                    <div className='col'>
                        <Typography variant="h1" gutterBottom className='title'> 
                            GLOBAL TRAVEL
                        </Typography>
                        <Typography variant='h3' gutterBottom className='title'>{pageTitle}</Typography>
                        <Typography variant="body1" paragraph>
                            Nous vous accompagnons pendant toute votre procédure et voyagez sans stress
                        </Typography>
                        <Button variant="contained" className='actionButton' style={{margin: "4rem"}}>
                            <a href={toReach} style={{ color: "white", textDecoration: "none"}}> En savoir plus</a><i className='bi bi-caret-right' style={{ marginLeft: "10px"}}></i>
                        </Button>
                    </div>

                </div>

            </Container>
        </div>
    );
};

export default HeroSection;
