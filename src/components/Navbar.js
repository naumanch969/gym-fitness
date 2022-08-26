import React from 'react'
import { Link } from "react-router-dom"
import { Stack } from "@mui/material"
import logo from "../assets/images/Logo.png"

const Navbar = () => {
    return (
        <Stack direction="row" alignItems="center" sx={{ gap: { xs: "122px", xl: "20px" }, mt: { sm: "22px", xs: "16px" }, padding: "0 25px" }} >
            <Link to="/" >
                <img src={logo} alt="logo" style={{ width: "60px", height: "60px", margin: "0 20px" }} />
            </Link>
            <Stack height="fit-content" direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
                <Link to="/" style={{ textDecoration: "none", color: "#3a1212", borderBottom: "3px solid #ff2625" }}>Home</Link>
                <a href="#exercises" style={{ textDecoration: "none", color: "#3a1212" }} >Exercises</a>
            </Stack>
        </Stack>
    )
}

export default Navbar
