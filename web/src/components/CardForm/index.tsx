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
import { Txn } from "../../shared/interface";

const CardForm = (txn: Txn) => {
  const countries = [
    { name: "Nigeria", currency: "NGN", dialCode: "+234" },
    { name: "Ghana", currency: "GHC", dialCode: "+234" },
  ];

  const handleTxn = () => {};
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item sm={12}>
          <FormControl fullWidth>
            <InputLabel id="country-label">Country</InputLabel>
            <Select
              labelId="country-label"
              id="country"
              value={txn.country}
              label="Country"
              // onChange={handleTxn}
              color="secondary"
            >
              {countries.map((country) => (
                <MenuItem key={country.currency} value={country.currency}>
                  {country.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={12}>
          <FormControl fullWidth>
            <InputLabel id="country-label">Network provider</InputLabel>
            <Select
              labelId="country-label"
              id="country"
              value={txn.country}
              label="Country"
              // onChange={handleTxn}
              color="secondary"
            >
              {countries.map((country) => (
                <MenuItem key={country.currency} value={country.currency}>
                  {country.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
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

export default CardForm;
