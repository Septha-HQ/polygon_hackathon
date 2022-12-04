import { ChangeEvent, useContext, useState } from "react";
import Joi from "joi";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { TxnContext } from "../../context/TransactionContext";

const countries = [
  { name: "Nigeria", currency: "NGN", dialCode: "+234" },
  { name: "Ghana", currency: "GHC", dialCode: "+233" },
];

export const providers = [
  { id: "1", name: "MTN", color: "#000000", bgcolor: "#FFCC00" },
  { id: "2", name: "GLO", color: "#ffffff", bgcolor: "#006836" },
  { id: "3", name: "Airtel", color: "#ffffff", bgcolor: "#AA0201" },
  { id: "4", name: "Etisalat", color: "#ffffff", bgcolor: "#006847" },
];

const CardForm = () => {
  const [countryDial, setCountryDial] = useState("+");
  const [isValid, setIsValid] = useState(false);
  const { isCurrentNetwork, txn, setTxn, sendTxn } = useContext(TxnContext)!;

  const schema = Joi.object({
    ref: Joi.string().required(),
    amount: Joi.number().required(),
    country: Joi.string().required(),
    curr: Joi.string().required(),
    provider: Joi.string().required(),
    cat: Joi.number(),
  });

  const validate = () => {
    const result = schema.validate(txn, { abortEarly: false });

    setIsValid(result.error ? false : true);
  };

  const handleCountry = (e: any) => {
    const nex_txn = { ...txn };
    const curr = e.target.value;

    const country = countries.find((x) => x.currency == curr);

    // set currency
    nex_txn.curr = country?.currency!;

    // set country
    nex_txn.country = country?.name!;

    // set countryDial
    setCountryDial(country?.dialCode!);

    setTxn({ ...nex_txn });

    // update valid state
    validate();
  };

  const handleProvider = (e: any) => {
    const nex_txn = { ...txn };
    const provider = e.target.value;

    // set currency
    nex_txn.provider = provider!;

    setTxn({ ...nex_txn });

    // update valid state
    validate();
  };

  const handleText = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setTxn({ ...txn, [name]: value });

    // update valid state
    validate();
  };

  // const submitTxn = () => {
  //   validate()
  //   console.log(txn);
  // };

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item sm={12}>
          <FormControl fullWidth>
            <InputLabel id="country-label">Country</InputLabel>
            <Select
              labelId="country-label"
              id="country"
              value={txn.curr}
              label="Country"
              name="country"
              onChange={handleCountry}
              color="secondary"
              disabled={!isCurrentNetwork}
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
              value={txn.provider}
              label="Country"
              onChange={handleProvider}
              color="secondary"
              disabled={!isCurrentNetwork}
            >
              {providers.map((provider) => (
                <MenuItem key={provider.id} value={provider.name}>
                  {provider.name}
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
              name="ref"
              type="number"
              onChange={handleText}
              disabled={!isCurrentNetwork}
              color="secondary"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {countryDial}
                  </InputAdornment>
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
            <TextField
              id="outlined-basic"
              label="Amount"
              variant="outlined"
              name="amount"
              type="number"
              onChange={handleText}
              color="secondary"
              disabled={!isCurrentNetwork}
            />
          </FormControl>
        </Grid>

        <Grid item sm={12}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ height: 50 }}
            onClick={sendTxn}
            disabled={!isCurrentNetwork || !isValid}
          >
            Top Up
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CardForm;
