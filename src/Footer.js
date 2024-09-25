import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

function Footer() {
    return (
        <Box sx={{ bgcolor: 'background.paper', p: 4 }}>
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="space-between">
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            About Us
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            We are committed to providing the best service for our customers.
                            Learn more about our mission and values.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            Links
                        </Typography>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li>
                                <Link href="#" color="inherit">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="#" color="inherit">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="#" color="inherit">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="#" color="inherit">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            Contact Us
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Email: info@example.com
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Phone: (123) 456-7890
                        </Typography>
                    </Grid>
                </Grid>
                <Box sx={{ textAlign: 'center', mt: 4 }}>
                    <Typography variant="body2" color="text.secondary">
                        © {new Date().getFullYear()} Your Company Name. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;
