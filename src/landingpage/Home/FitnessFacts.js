import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';

// Sample fitness facts data
const fitnessFacts = [
    {
        title: "Consistency is Key",
        description: "Engaging in regular physical activity can lead to significant health improvements. Aim for at least 150 minutes of moderate-intensity aerobic exercise each week.",
        image: "/media/images/1.png", // Updated image path
    },
    {
        title: "Strength Training Benefits",
        description: "Incorporating strength training into your routine can boost metabolism, improve muscle tone, and increase bone density. Even two sessions a week can make a difference!",
        image: "/media/images/2.png", // Updated image path
    },
    {
        title: "Mental Health Boost",
        description: "Exercise releases endorphins, which are natural mood lifters. Just 30 minutes of physical activity can help reduce symptoms of anxiety and depression.",
        image: "/media/images/3.png", // Updated image path
    },
    {
        title: "Hydration Matters",
        description: "Staying hydrated is crucial for optimal performance. Aim to drink water before, during, and after your workouts to maintain hydration levels.",
        image: "/media/images/4.png", // Updated image path
    },
    {
        title: "The Importance of Warm-Up",
        description: "Warming up before exercising prepares your body for physical activity by increasing blood flow to the muscles and reducing the risk of injury.",
        image: "/media/images/5.png", // Updated image path
    },
    {
        title: "Variety is Vital",
        description: "Mixing different types of workouts—such as cardio, strength training, and flexibility exercises—can help prevent boredom and keep your body challenged.",
        image: "/media/images/6.png", // Updated image path
    },
    {
        title: "Rest and Recovery",
        description: "Allowing your body time to rest and recover is essential for muscle growth and overall fitness. Aim for at least one rest day per week.",
        image: "/media/images/7.png", // Updated image path
    },
    {
        title: "Nutrition Fuels Performance",
        description: "Eating a balanced diet rich in whole foods—such as fruits, vegetables, lean proteins, and whole grains—can enhance your workout performance and recovery.",
        image: "/media/images/8.png", // Updated image path
    },
    {
        title: "Set SMART Goals",
        description: "Setting Specific, Measurable, Achievable, Relevant, and Time-bound (SMART) goals can help you stay focused and motivated on your fitness journey.",
        image: "/media/images/9.png", // Updated image path
    },
    {
        title: "Every Bit Counts",
        description: "Small amounts of physical activity throughout the day can add up. Take the stairs, walk during breaks, or do quick workouts at home to boost your overall activity level.",
        image: "/media/images/10.png", // Updated image path
    },
];

function FitnessFacts() {
    return (
        <Box sx={{ backgroundColor: 'black', padding: 4 }}>
            <Typography variant="h3" align="center" sx={{ color: '#ff6d01', marginBottom: 4 }}>
                Fitness Facts
            </Typography>
            <Grid container spacing={4}>
                {fitnessFacts.map((fact, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ backgroundColor: '#1c1c1c', color: 'white' }}>
                            <img
                                src={fact.image}
                                alt={fact.title}
                                style={{ width: '100%', height: 'auto', maxHeight: '200px', objectFit: 'cover' }} // Adjusted for better fit
                            />
                            <CardContent>
                                <Typography variant="h5" sx={{ color: '#ff6d01' }}>
                                    {fact.title}
                                </Typography>
                                <Typography variant="body2">{fact.description}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default FitnessFacts;
