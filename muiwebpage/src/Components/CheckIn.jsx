import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Paper,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import DrawerComp from "./DrawerComp";
import { AuthContext } from "./Context/AuthContext";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";

const CheckIn = () => {
  const { menu, setMenu } = useContext(AuthContext);
  const [activeStep, setActiveStep] = useState(0);

  const containr = {
    width: "85.5%",
    border: "1px solid #e4e4e5",
    margin: "auto",
    display: "flex",
    padding: "15px",
    marginTop: "32px",
    borderRadius: "10px",
    backgroundColor: "white",
  };

  const photo = {
    width: "100%",
    height: "270px",
    border: "1px solid #dddddd",
    backgroundColor: "#dddddd",
    borderRadius: "7px",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  return (
    <Box sx={{ display: "flex", backgroundColor: "#f5f5f6" }}>
      {menu ? (
        <Box sx={{ width: { xs: "100%", sm: "100%", md: "300px" } }}>
          <DrawerComp menu={menu} setMenu={setMenu} />
        </Box>
      ) : (
        <Box
          sx={{
            width: "62px",
            display: { xs: "none", sm: "none", md: "block" },
          }}
        >
          <DrawerComp menu={menu} setMenu={setMenu} />
        </Box>
      )}
      <Box
        sx={{ width: { xs: "100vw", sm: "100%", md: "100%" }, height: "100vh" }}
      >
        <Box>
          <Navbar menu={menu} setMenu={setMenu} />
        </Box>
        <Box sx={{ fontFamily: "Poppins" }}>
          <Box sx={{ marginTop: "32px" }}>
            <Stepper
              sx={{ width: "69%", margin: "auto" }}
              activeStep={activeStep}
            >
              <Step>
                <StepLabel>Visitor CheckIn</StepLabel>
              </Step>
              <Step>
                <StepLabel>Vehicle CheckIn</StepLabel>
              </Step>
              <Step>
                <StepLabel>Visitor Details</StepLabel>
              </Step>
            </Stepper>
          </Box>
          <Box sx={containr}>
            <Box sx={{ width: "29.5%", textAlign: "center" }}>
              <Box sx={photo}>
                <AddAPhotoOutlinedIcon
                  sx={{ color: "#cccccc", fontSize: "70px" }}
                />
                <Typography
                  sx={{ fontSize: "10px", color: "#cccccc", marginTop: "5px" }}
                >
                  Take Photo
                </Typography>
              </Box>
              <Button
                variant="contained"
                sx={{
                  marginTop: "17px",
                  textTransform: "none",
                  padding: "6px 8px",
                  backgroundColor: "#3e60d5",
                }}
              >
                Open Camera
              </Button>
            </Box>
            <Box sx={{ width: "70%", border: "1px solid blue" }}>
              <FormControl>
                <FormLabel>First Name</FormLabel>
                <TextField
                  placeholder="First Name"
                  InputProps={{ sx: { width: "180px" } }}
                />

                <FormLabel>Middle Name</FormLabel>
                <TextField
                  placeholder="Middle Name"
                  InputProps={{ sx: { width: "180px" } }}
                />

                <FormLabel>Last Name</FormLabel>
                <TextField
                  placeholder="Last Name"
                  InputProps={{ sx: { width: "180px" } }}
                />

                <FormLabel>Phone</FormLabel>
                <TextField
                  placeholder="Phone"
                  InputProps={{ sx: { width: "280px" } }}
                />

                <FormLabel>Email</FormLabel>
                <TextField
                  placeholder="Email"
                  InputProps={{ sx: { width: "280px" } }}
                />

                <FormLabel>Company</FormLabel>
                <TextField
                  placeholder="Company"
                  InputProps={{ sx: { width: "280px" } }}
                />

                <FormLabel>Contact Person</FormLabel>
                <TextField
                  placeholder="Contact Person"
                  InputProps={{ sx: { width: "280px" } }}
                />
              </FormControl>
            </Box>
          </Box>
          {/* <Box>
            <Typography>Back</Typography>
            <Button variant="contained">Next</Button>
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
};

export default CheckIn;
