import React from 'react';
import { Container, Grid, Typography } from '@mui/material';


const Footer = () => {
    return (
        <footer className='footer' style={{ background: "#333", color: "#fff", padding: "5rem"}}>
            <Container maxWidth="xl">
                <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3} style={{ color: "mediumslateblue"}}>
                    {/* Colonne 1 */}
                    <Typography variant="h2"><i className='bi bi-browser-edge'></i></Typography>
                    <Typography variant="h6">GLOBAL TRAVEL</Typography>
                    <Typography variant="body2" maxWidth={200}>Contactez nous et voyagez sans stress</Typography>
                    {/* Logo ici */}
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    {/* Colonne 2 */}
                    <Typography variant="h6">Liens utiles</Typography>
                    {/* Liens vers les sections du site ici */}
                    <ul style={{ listStyleType: "none"}}>
                        <li style={{ margin: "5px"}}>
                            <a style={{ textDecoration: "none"}} href='/travel-website/'>
                                Accueil
                            </a>
                        </li>
                        <li style={{ margin: "5px"}}>
                            <a style={{ textDecoration: "none"}} href='/travel-website/processes-page/'>
                                Procédure
                            </a>
                        </li>
                        <li style={{ margin: "5px"}}>
                            <a style={{ textDecoration: "none"}} href='/travel-website/services-page/'>
                                Services
                            </a>
                        </li>
                        <li style={{ margin: "5px"}}>
                            <a style={{ textDecoration: "none"}} href='/travel-website/team-page/'>
                                Equipe
                            </a>
                        </li>
                        <li style={{ margin: "5px"}}>
                            <a style={{ textDecoration: "none"}} href='/travel-website/faq-page/'>
                                F A Q
                            </a>
                        </li>
                        <li style={{ margin: "5px"}}>
                            <a style={{ textDecoration: "none"}} href='/travel-website/contacts-page/'>
                                Contacts
                            </a>
                        </li>
                    </ul>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    {/* Colonne 3 */}
                    <Typography variant="h6">Ressources</Typography>
                    {/* Liens vers la documentation en ligne et les réseaux sociaux ici */}
                    <ul style={{ listStyleType: "none", display: "flex"}}>
                        <li style={{ letterSpacing: "10px"}}>
                            <a href='https://www.instagram.com/globalTravel'><i className='bi bi-instagram'></i></a>
                        </li>
                        <li style={{ letterSpacing: "10px"}}>
                            <a href='https://www.instagram.com/globalTravel'><i className='bi bi-facebook'></i></a>
                        </li>
                        <li style={{ letterSpacing: "10px"}}>
                            <a href='https://www.instagram.com/globalTravel'><i className='bi bi-google'></i></a>
                        </li>
                    </ul>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    {/* Colonne 4 */}
                    <Typography variant="h6">Informations utiles</Typography>
                    {/* Informations supplémentaires ici */}
                </Grid>
                </Grid>
                <br />
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        {/* Deuxième ligne */}
                        <Typography variant="body2">&copy; {new Date().getFullYear()} GLOBAL TRAVEL SARL. Tous droits réservés.</Typography>
                        {/* Licence ici */}
                    </Grid>
                </Grid>
            </Container>
        </footer>
    );
};

export default Footer;
