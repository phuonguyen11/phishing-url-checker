import React from "react";
import { Grid, Button, Box, Typography } from "@mui/material";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { styled } from '@mui/material/styles';

const GetStartedButton = styled(Button)(({ theme }) => ({
    borderRadius: "100px",
    border: "2px solid #11D9C5",
    background: "radial-gradient(1027.76% 142.09% at 100% 2.36%, #122C6F 0%, #11D9C5 49%, rgba(18, 44, 111, 0.97) 97.83%)",
    display: 'inline-flex',
    height: "85px",
    padding: "28px 60px 28px 60px",
    justifyContent: "flex-end",
    alignItems: "center",
    flexShrink: 0,
}));
  
  
export const Introduction = () =>
{
    return (
        <Grid container spacing={2} alignItems={"center"}>
            <Grid item xs={6} md={8}>
            <Box margin={"10vh"}>
                <Box
                sx={{display: "flex"}}
                >
                <Typography variant="h2">Cybersecurity Doesn’t Wait</Typography>
                <AccessAlarmIcon
                sx={{ color:"#11D9C5", fontSize: '4.125rem', marginLeft: '10px'}}
                />
                </Box>                
                <Typography variant="text" lineHeight={"32px"}>
                We’re here for you. We understand the importance of online safety and the need for simplicity in achieving it. Your protection is our top priority, and we are committed to ensuring your digital well-being. Stay safe, stay secure, and stay confident in your online endeavors with our application at your side.
                </Typography>
                <GetStartedButton>
                <Typography style={{ textTransform: 'none', color: "#011126", fontWeight: 600, fontSize: 24}}>Get Started!</Typography>
                </GetStartedButton>
            </Box>
            </Grid>

        </Grid>
    )
}