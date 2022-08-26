import React from 'react'
import { Box, Typography, Stack, Button } from "@mui/material"
import heroBannerImage from "../assets/images/banner.png"

const HeroBanner = () => {
    return (
        <Box paddingLeft="50px" sx={{ mt: { xl: "212px", xs: "70px" }, ml: { sm: "50px" } }} p="20px" >
            <Typography color="#ff2625" fontWeight="600" fontSize="26px" >
                Fitness Club
            </Typography>
            <Typography fontWeight="700" sx={{ fontSize: { lg: "44px", xs: "35px" } }} >Sweat Smile <br /> And Repeat </Typography>
            <Typography fontSize="22px" mb={3} lineHeight="30px" >Check out the most effective exercises </Typography>

            <Button variant="contained" href="#exercises" sx={{ backgroundColor: "#ff2625" }} >Explore Exercises</Button>

            <Typography fontWeight="600" fontSize="190px" ml="20px" color="#ff2625" sx={{
                opacity: "0.1", display: { sm: "none", lg: "block" }, padding: "30px 0 0 40px"
            }} >Exercise</Typography>

            <img className="hero-banner-img" src={heroBannerImage} alt='banner image' />
        </Box>
    )
}

export default HeroBanner
