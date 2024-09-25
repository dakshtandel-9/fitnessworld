import React from 'react';
import { Box, Grid, Typography, Card, CardContent, Button } from '@mui/material';
import './Membership.css'; // Import the CSS for animation

function MembershipPricing() {
    const plans = [
        {
            title: 'Basic Plan',
            price: '₹999',
            duration: 'per month',
            features: ['Access to gym', 'Free fitness assessment', 'Basic equipment'],
        },
        {
            title: 'Premium Plan',
            price: '₹1999',
            duration: 'per month',
            features: ['Access to gym', 'Free fitness assessment', 'Personal Trainer', 'Advanced equipment'],
        },
        {
            title: 'Elite Plan',
            price: '₹2999',
            duration: 'per month',
            features: ['Access to gym', 'Personal Trainer', 'Nutrition Guide', 'Unlimited Classes', 'Access to all equipment'],
        },
    ];

    return (
        <Box
            className="membership-background"
            sx={{
                backgroundColor: '#121212', // Dark background
                color: '#ffffff', // White text for contrast
                minHeight: '100vh',
                padding: '4rem 2rem',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Typography className='pt-5 pb-5' variant="h2" component="h1" sx={{ mb: 4, color: '#ff6d00', fontWeight: 'bold' }}>
                Membership Plans
            </Typography>

            <Grid container spacing={4} justifyContent="center">
                {plans.map((plan, index) => (
                    <Grid item key={index} xs={12} md={4}>
                        <Card
                            className="card-animation"
                            sx={{
                                backgroundColor: '#1f1f1f',
                                color: 'white',
                                borderRadius: '15px',
                                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5)',
                                height: '100%', // Ensures all cards are of equal height
                                display: 'flex',
                                flexDirection: 'column', // Stack elements vertically
                            }}
                        >
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography variant="h4" sx={{ color: '#ff6d00', fontWeight: 'bold' }}>
                                    {plan.title}
                                </Typography>
                                <Typography variant="h5" sx={{ my: 2 }}>
                                    {plan.price}
                                </Typography>
                                <Typography variant="body2" sx={{ mb: 2, color: '#f5f5f5' }}>
                                    {plan.duration}
                                </Typography>
                                <Typography variant="h6" sx={{ mb: 2, color: '#ff6d00' }}>
                                    Features:
                                </Typography>
                                <ul style={{ listStyleType: 'none', padding: 0 }}>
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} style={{ marginBottom: '0.5rem', color: '#bdbdbd' }}>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <Button
                                variant="contained"
                                fullWidth
                                sx={{
                                    backgroundColor: '#ff6d00',
                                    '&:hover': { backgroundColor: '#ff8e00' },
                                }}
                            >
                                Choose Plan
                            </Button>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default MembershipPricing;