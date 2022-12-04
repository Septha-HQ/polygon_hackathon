import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    Grid,
    InputAdornment,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    TextField,
    Typography,
  } from "@mui/material";
  import React, { useState } from "react";
  
  const WaitListForm = () => {
  
    const handleTxn = () => {};
    return (
      <Box sx={{background:"#ffffff"}}>
        <Grid container spacing={2} p={7}>
          <Grid item sm={12}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                label="Phone"
                id="outlined-start-adornment"
                placeholder="8*********"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">+234</InputAdornment>
                  ),
                }}
              />
              <FormHelperText id="outlined-weight-helper-text">
                Enter phone number without the first zero
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item sm={12}>
            <FormControl fullWidth>
              <TextField id="outlined-basic" label="Amount" variant="outlined" />
            </FormControl>
          </Grid>
  
          <Grid item sm={12}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ height: 50 }}
              disabled
            >
              Top Up
            </Button>
          </Grid>
        </Grid>
      </Box>
    );
  };
  
  export default WaitListForm;
  