import React from "react";
import { useState } from "react";
import { Grid, Box, Typography, FormControl, TextField, Button, Stack } from "@mui/material";
import { styled } from '@mui/material/styles';
import LinearProgress from '@mui/material/LinearProgress';
  
const height = 100
const width = 600
const labelOffset = -6
const CheckButton = styled(Button)(({ theme }) => ({
    borderRadius: "5px",
    border: "2px solid #11D9C5",
    background: "027373",
    flexShrink: 0,
    width: "211px",
    height: "67px",
}));

export const Checker = () => {
    const [url, setUrl] = useState("")
    const [isPhishing, setIsPhishing] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const handleChange = (event) => {
        setUrl(event.target.value);
    }    
    const handleClick = () => 
    {
        setIsLoading(true);
    }
  
    return (
        <Grid container spacing={2} alignItems={"center"} id="checkerSection">
            <Grid item xs={6} md={8}>
            <Box margin="10vh">
                <Box
                sx={{display: "flex", marginBottom: "20px"}}
                >
                <Typography variant="h2">Phising URL Checker</Typography>
                </Box>                
                <Typography variant="text" 
                sx={{lineHeight: "32px"}}
                >
                Our phishing URL checker detects if a URL is malicious or contains a phishing link.
                </Typography>
                <FormControl>
                <TextField
                sx={{
                marginTop: "30px",
                background: "rgba(237, 242, 244, 0.10)",
                borderRadius: "3px",
                }}
                style={{ height, width }}
                InputLabelProps={{
                    style: {
                      height,
                      width,
                      fontSize: "20px",
                      fontWeight: "700",
                      lineHeight: "normal",
                      ...( { top: `${labelOffset}px` })
                    },
                  }}
                  inputProps={{
                      style: {
                        height,
                        width,
                        padding: '0 14px',
                      },
                  }}                
                size="large"
                label="URL"
                value={url}
                onChange={handleChange}
                >
                </TextField>
                {
                url?
                isLoading?
                <Stack sx={{ width: '100%', marginTop: "20px"}} spacing={2}>
                      <LinearProgress 
                      sx={{
                        backgroundColor: 'white',
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: '#11D9C5'
                        }
                      }}
                    />
                </Stack>
                : isPhishing?
                <Typography style={{ marginTop: "15px", textTransform: 'none', color: "#FFF", fontWeight: 500, fontStyle: "italic", fontSize: 20 }}>
                This URL has been identified as a <span style={{ color: "#FF6161" }}>PHISHING</span> attack.
                </Typography>
                :
                <Typography style={{ marginTop: "15px", textTransform: 'none', color: "#FFF", fontWeight: 500, fontStyle: "italic", fontSize: 20 }}>
                This URL is <span style={{ color: "#11D9C5" }}>SAFE</span>!
                </Typography>
                : <></>
                }
                <CheckButton type="submit"
                sx={{marginTop: "30px"}}
                onClick={handleClick}
                >
                <Typography style={{ textTransform: 'none', color: "#FFF", fontWeight: 700, fontSize: 20}}>CHECK</Typography>
                </CheckButton>
                </FormControl>
            </Box>
            </Grid>
        </Grid>
    )
}