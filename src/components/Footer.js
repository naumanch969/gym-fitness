import { Box, Stack, Typography } from "@mui/material"
import Logo from "../assets/images/Logo-1.png"

const Footer = () => {
    return (
        <Box mt="80px" bgcolor="#fff3f4" >
            <Stack gap="0px" alignItems="center" px="30px" pt="24px" >
                <img src={Logo} width="180px" height="50px" alt="logo" />
                <Typography variant="h5" pb="15px" mt="10px" >Made with :heart: by NCH </Typography>
            </Stack>
        </Box>
    )
}

export default Footer
