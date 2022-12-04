import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const steps = [
  {
    label: "Q1-2023, Recharge card",
    description: `This is our starting point. The recharge feature will enable 
    users to quickly recharge their phones with their crypto assets. And we will
     be launching in Nigeria and Ghana`,
  },
  {
    label: "Q2-2023, Gift card and utility bills",
    description: `We will expand to other products including gift cards and 
    utility bills. Imagining using your Matic token to pay electricity bills`,
  },
  {
    label: "Q3-2023, Expand to other countries",
    description: `The pilot stage of this project is Nigeria. We are looking 
    to expanding to other countries in Africa like Ghana, Rwanda, etc`,
  },
  {
    label: "Q4-2023, Ecommerce",
    description: `Small businesses should be able to use our platform to 
    swiftly carry out transactions with their customers.`,
  },
  {
    label: "Q1-2024, Virtual card",
    description: `Creation and Management of virtual cards for local and 
    foreign transactions.`,
  },
  // {
  //   label: "Q4-2024, Build API’s to connect web2 apps",
  //   description: ``,
  // },
];

type Props = {};

const Roadmap = (props: Props) => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 700, mb: 15 }}>
      <Stepper nonLinear activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
              sx={{ fontSize: 28, color: "#ffffff" }}
              onClick={handleStep(index)}
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography variant="body2">{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1, px: 10 }}
                  >
                    {index === steps.length - 1
                      ? "This is just the beginning"
                      : "Next milestone"}
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default Roadmap;
