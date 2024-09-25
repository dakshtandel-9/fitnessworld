import React from 'react';
import HeroSection from './HeroSection';
import PricingSection from './PricingSection';
import { Box } from '@mui/material';
import FitnessFacts from './FitnessFacts';

function Home() {
    return (
        <Box sx={{ position: 'relative' }}>
            <HeroSection />
            <FitnessFacts />
            <PricingSection />
        </Box>
    );
}

export default Home;
