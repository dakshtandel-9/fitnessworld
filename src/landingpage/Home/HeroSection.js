import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function HeroSection() {
    return (
        <Box
            sx={{
                position: 'relative',
                height: '100vh',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textAlign: 'center',
                background: 'rgba(0, 0, 0, 0.7)', // Adjusted for blending
            }}
        >
            <video
                src="/media/videos/heroVideo.mp4"
                autoPlay
                loop
                muted
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    minWidth: '100%',
                    minHeight: '100%',
                    width: 'auto',
                    height: 'auto',
                    zIndex: -1,
                    transform: 'translate(-50%, -50%)',
                }}
            />
            <Box sx={{ zIndex: 1 }}>
                <Typography variant="h2" gutterBottom>
                    Welcome to Fitness World
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Discover amazing content and services tailored for you.
                </Typography>
                <Button variant="contained" color="primary">
                    Get Started
                </Button>
            </Box>
        </Box>
    );
}

export default HeroSection;
