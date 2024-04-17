// NewsletterSection.js

import React from 'react';
import { Grid, Paper } from '@mui/material';
import "../../assets/AboutEnterprise.css";


function NewsletterSection() {
    return (
        <section className="newsletter-section">
            <div className="container-fluid">
                <Paper className="paper" elevation={8}  style={{ marginTop: "5rem", padding: "10rem", border: "none"}}>
                    <Grid container spacing={5} alignItems="center" justifyContent="center" style={{ border: "none"}}>
                        <Grid item xs={12} md={8} >
                            <div className="row">
                                <div className="col-md-6 offset-md-3">
                                    <h2 className="text-center">Abonnez-vous à notre Newsletter</h2>
                                    <form>
                                        <div className="mb-3">
                                            <input type="email" className="form-control" placeholder="Entrez votre adresse e-mail" />
                                        </div>
                                        <button type="submit" className="btn btn-primary w-100">S'abonner</button>
                                    </form>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </section>
    );
}


export default NewsletterSection;

