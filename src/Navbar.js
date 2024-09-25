import React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/joy/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';

function Navbar() {
    return (
        <div>
            <nav
                className="navbar navbar-expand-lg"
                style={{
                    backgroundColor: "transparent",
                    position: "fixed",
                    top: 0,
                    zIndex: 1000,
                    width: "100%",
                    backdropFilter: "blur(5px)",
                    display: "flex",
                    justifyContent: "space-between", // Change to space-between for better layout
                    alignItems: "center",
                    padding: '0 10px' // Add some padding for better spacing
                }}
            >
                <div className="container-fluid">
                    <a className="navbar-brand fw-bolder" href="#" style={{ color: "white" }}>
                        <Box
                            sx={{
                                width: {
                                    xs: "150px", // Width for extra-small screens
                                    sm: "150px", // Same as extra-small for small screens
                                    md: "200px"  // Width for medium screens and above
                                },
                                height: "100px", // Fixed height
                                overflow: "hidden", // Ensure any overflow is hidden
                            }}
                        >
                            <img
                                src="/media/logo.png"
                                alt=""
                                style={{
                                    width: "100%",  // Make image take full width of the Box
                                    height: "auto", // Maintain aspect ratio
                                    objectFit: "contain" // Ensure it fits within the Box
                                }}
                            />
                        </Box>
                    </a>

                    {/* Tabs only visible on medium screens and above */}
                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <Tabs centered>
                            <Tab label="Item One" style={{ color: "white", fontWeight: "bold" }} className='fs-6' />
                            <Tab label="Item Two" style={{ color: "white", fontWeight: "bold" }} className='fs-6' />
                            <Tab label="Item Three" style={{ color: "white", fontWeight: "bold" }} className='fs-6' />
                        </Tabs>
                    </Box>

                    {/* Buttons for location and contacts */}
                    <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
                        <Button style={{ background: "none", color: "white", border: "2px solid white" }}>
                            Bangalore<LocationOnIcon style={{ color: "white" }} className='btn-lg' />
                        </Button>
                        <Button style={{ background: "yellow", color: "black", border: "2px solid yellow" }} className='btn-lg ms-3'>
                            Contacts
                        </Button>
                    </Box>

                    {/* Dropdown menu for mobile view */}
                    <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                        <Dropdown>
                            <MenuButton>Actions</MenuButton>
                            <Menu style={{ backgroundColor: "black", border: "none" }}>
                                <MenuItem>Add item</MenuItem>
                                <MenuItem><Button style={{ background: "none", color: "gray", border: "2px solid white" }}>
                                    Bangalore<LocationOnIcon style={{ color: "white" }} className='btn-lg' />
                                </Button><Button style={{ background: "yellow", color: "black", border: "2px solid yellow" }} className='btn-lg ms-3'>
                                        Contacts
                                    </Button></MenuItem>
                            </Menu>
                        </Dropdown>
                    </Box>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
