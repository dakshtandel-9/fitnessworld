// src/pages/NotFound.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router

function NotFound() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/'); // Redirect to home page
    };

    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                backgroundColor: '#121212', // Dark background
                color: 'white', // White text
            }}
        >
            <Typography variant="h1" component="h1" sx={{ color: '#ff5252', fontWeight: 'bold' }}>
                404
            </Typography>
            <Typography variant="h4" component="h2" sx={{ mb: 2, color: '#e0e0e0' }}>
                Oops! Page Not Found
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{ mb: 4, color: '#bdbdbd' }}>
                The page you are looking for does not exist or an error occurred.
            </Typography>
            <Button
                variant="contained"
                sx={{ backgroundColor: '#ff5252', '&:hover': { backgroundColor: '#ff1744' } }}
                onClick={handleGoBack}
            >
                Go Back to Home
            </Button>
        </Box>
    );
}

export default NotFound;
