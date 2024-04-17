// ServicePresentationSection.js

import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from "react-slick";
import image1 from "../../assets/images/Capture.PNG";
import image2 from "../../assets/images/Capture2.PNG";
import image3 from "../../assets/images/Capture3.PNG";

// Slick Carousel Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Partners() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false
    };

    const styles = {
        marginTop: "2rem",
        justifyContent: "center",
        alignItems: "center",
    }

    return (
        <section className="services">
            <Container fluid style={{ width: "100%"}}>

                <Paper className='paper' elevation={10} style={{ marginTop: "10rem", padding: "10rem", border: "none"}}>

                    <Grid spacing={10} alignItems="center" justifyContent="center" style={{ border: "none"}}>

                        <Typography variant='h2' className='services-title' style={{ color: "mediumslateblue"}} maxWidth={550}>
                            Nous avons leur soutient...
                        </Typography>

                        <Typography variant='body2' className='services-paragraph' style={{ fontFamily: "Segoe UI Light", fontWeight: "bold"}} maxWidth={550}>
                            <br></br>
                            Plongez dans notre réseau dynamique de partenaires qui enrichissent notre mission d'ouvrir les portes du monde. Avec des collaborations solides, nous façonnons ensemble des expériences uniques pour chaque voyageur. Explorez nos alliances stratégiques et découvrez comment elles renforcent notre engagement envers l'excellence dans le domaine des services de voyage ...
                        </Typography>
                        <br />
                        <br />
                        <br />
                        <br />
                        <Slider {...settings} {...styles}>
                            <div className="slide">
                                <img src={image1} alt="Partner 1" style={{ height: "200px"}}/>
                            </div>
                            <div className="slide">
                                <img src={image2} alt="Partner 2" style={{ height: "200px"}}/>
                            </div>
                            <div className="slide">
                                <img src={image3} alt="Partner 3" style={{ height: "200px"}}/>
                            </div>
                        </Slider>
                        
                    </Grid>

                </Paper>
                
            </Container>
        </section>
    );
}

export default Partners;
