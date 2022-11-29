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
    label: "Q4-2022, Recharge card",
    description: `Lorem ipsum dolor sit amet consectetur. At enim eleifend curabitur 
    bibendum dignissim vulputate at ac sed. Porta ultrices id magna 
    egestas amet sit id ac at. Morbi condimentum purus urna felis. 
    Eget turpis rhoncus varius in ac malesuada enim natoque. .`,
  },
  {
    label: "Q1-2023, Gift card and utility bills",
    description: `Lorem ipsum dolor sit amet consectetur. At enim eleifend curabitur 
      bibendum dignissim vulputate at ac sed. Porta ultrices id magna 
      egestas amet sit id ac at. Morbi condimentum purus urna felis. 
      Eget turpis rhoncus varius in ac malesuada enim natoque. `,
  },
  {
    label: "Q2-2023, Expand to other countries",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
  {
    label: "Q3-2023, Ecommerce",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
  {
    label: "Q1-2024, Virtual card",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
  {
    label: "Q4-2024, Build API’s to connect web2 apps",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
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
