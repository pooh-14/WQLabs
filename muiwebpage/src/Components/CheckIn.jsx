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
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const CheckIn = () => {
  const { menu, setMenu } = useContext(AuthContext);
  const [activeStep, setActiveStep] = useState(0);

  const containr = {
    width: { xs: "100%", md: "85.5%" },
    border: "1px solid #e4e4e5",
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    marginTop: "32px",
    borderRadius: "10px",
    backgroundColor: "white",
    flexDirection: { xs: "column", md: "row" },
    alignItems:{sm:"center", md:"start"}
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
        <Box sx={{ fontFamily: "Poppins", height:"100%" }}>
          <Box sx={{ marginTop: "32px",display:{xs:"block",sm:"none"} }}>
          <Stepper alternativeLabel  
              sx={{ width: {xs:"97%",md:"69.5%"}, margin: "auto", }}
              activeStep={activeStep}
            >
              <Step >
                <StepLabel>
                  <Typography  sx={{fontSize:{xs:"12px",sm:"20px", md:"15px"}}}>Visitor CheckIn</Typography>
                </StepLabel>
              </Step>
              <Step>
                <StepLabel>
                  <Typography  sx={{fontSize:{xs:"12px",sm:"20px", md:"15px"}}}>Vehicle CheckIn</Typography>
                </StepLabel>
              </Step>
              <Step>
                <StepLabel>
                  <Typography  sx={{fontSize:{xs:"12px",sm:"20px", md:"15px"}}}>Visitor Details</Typography>
                </StepLabel>
              </Step>
            </Stepper>  
          </Box>
          <Box sx={{ marginTop: "32px",display:{xs:"none",sm:"block"} }}>
          <Stepper linear 
              sx={{ width: {xs:"97%",md:"69.5%"}, margin: "auto", }}
              activeStep={activeStep}
            >
              <Step >
                <StepLabel>
                  <Typography  sx={{fontSize:{xs:"12px",sm:"20px", md:"15px"}}}>Visitor CheckIn</Typography>
                </StepLabel>
              </Step>
              <Step>
                <StepLabel>
                  <Typography  sx={{fontSize:{xs:"12px",sm:"20px", md:"15px"}}}>Vehicle CheckIn</Typography>
                </StepLabel>
              </Step>
              <Step>
                <StepLabel>
                  <Typography  sx={{fontSize:{xs:"12px",sm:"20px", md:"15px"}}}>Visitor Details</Typography>
                </StepLabel>
              </Step>
            </Stepper>
          </Box>
          <Box sx={containr}>
            <Box
              sx={{
                width: { xs: "100%", sm: "50%", md: "29.5%" },
                textAlign: "center",
              }}
            >
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
                  marginBottom: "2px",
                  fontSize:{xs:"17px",sm:"20px", md:"14px"},
                }}
              >
                Open Camera
              </Button>
            </Box>
            <Box sx={{ width: { xs: "100%", md: "67%" },marginTop:{xs:"30px", md:"0"} }}>
              <FormControl sx={{ width: "100%" }}>
                <Grid container spacing={2}>
                  <Grid
                    item
                    sx={{ display: "flex", flexDirection: "column" }}
                    xs={12}
                    sm={12}
                    md={4}
                  >
                    <FormLabel
                      sx={{
                        fontSize: {sm:"20px",md:"15px"},
                        fontWeight: "600",
                        color: "#3C3C3C",
                        marginBottom: "7px",
                      }}
                      required
                    >
                      First Name
                    </FormLabel>
                    <TextField
                      InputProps={{ sx: { height: "37px", fontSize:{sm:"18px", md:"14px"} } }}
                      placeholder="First Name"
                    />
                  </Grid>

                  <Grid
                    item
                    sx={{ display: "flex", flexDirection: "column" }}
                    xs={12}
                    sm={6}
                    md={4}
                  >
                    <FormLabel
                      sx={{
                        fontSize: {sm:"20px",md:"15px"},
                        fontWeight: "600",
                        color: "#3C3C3C",
                        marginBottom: "7px",
                      }}
                      required
                    >
                      Middle Name
                    </FormLabel>
                    <TextField
                      InputProps={{ sx: { height: "37px", fontSize:{sm:"18px", md:"14px"} } }}
                      placeholder="Middle Name"
                    />
                  </Grid>

                  <Grid
                    item
                    sx={{ display: "flex", flexDirection: "column" }}
                    xs={12}
                    sm={6}
                    md={4}
                  >
                    <FormLabel
                      sx={{
                        fontSize: {sm:"20px",md:"15px"},
                        fontWeight: "600",
                        color: "#3C3C3C",
                        marginBottom: "7px",
                      }}
                      required
                    >
                      Last Name
                    </FormLabel>
                    <TextField
                      InputProps={{ sx: { height: "37px", fontSize:{sm:"18px", md:"14px"} } }}
                      placeholder="Last Name"
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={2}>
                  <Grid
                    item
                    sx={{ display: "flex", flexDirection: "column" }}
                    xs={12}
                    sm={6}
                    md={6}
                  >
                    <FormLabel
                      sx={{
                        fontSize: {sm:"20px",md:"15px"},
                        fontWeight: "600",
                        color: "#3C3C3C",
                        marginBottom: "7px",
                        marginTop: {xs:"0px",sm:"22px",md:"22px"},
                      }}
                      required
                    >
                      Phone
                    </FormLabel>
                    <TextField
                      InputProps={{ sx: { height: "37px", fontSize:{sm:"18px", md:"14px"} } }}
                      placeholder="Phone"
                    />
                  </Grid>

                  <Grid
                    item
                    sx={{ display: "flex", flexDirection: "column" }}
                    xs={12}
                    sm={6}
                    md={6}
                  >
                    <FormLabel
                      sx={{
                        fontSize: {sm:"20px",md:"15px"},
                        fontWeight: "600",
                        color: "#3C3C3C",
                        marginBottom: "7px",
                        marginTop: {xs:"0px",sm:"22px",md:"22px"},
                      }}
                      required
                    >
                      Email
                    </FormLabel>
                    <TextField
                      InputProps={{ sx: { height: "37px", fontSize:{sm:"18px", md:"14px"} } }}
                      placeholder="Email"
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={2}>
                  <Grid
                    item
                    sx={{ display: "flex", flexDirection: "column" }}
                    xs={12}
                    sm={6}
                    md={6}
                  >
                    <FormLabel
                      sx={{
                        fontSize: {sm:"20px",md:"15px"},
                        fontWeight: "600",
                        color: "#3C3C3C",
                        marginBottom: "7px",
                        marginTop: {xs:"0px",sm:"22px",md:"22px"},
                      }}
                      required
                    >
                      Company
                    </FormLabel>
                    <TextField
                      InputProps={{ sx: { height: "37px", fontSize:{sm:"18px", md:"14px"} } }}
                      placeholder="Company"
                    />
                  </Grid>

                  <Grid
                    item
                    sx={{ display: "flex", flexDirection: "column" }}
                    xs={12}
                    sm={6}
                    md={6}
                  >
                    <FormLabel
                      sx={{
                        fontSize: {sm:"20px",md:"15px"},
                        fontWeight: "600",
                        color: "#3C3C3C",
                        marginBottom: "7px",
                        marginTop: {xs:"0px",sm:"22px",md:"22px"},
                      }}
                      required
                    >
                      Contact Person
                    </FormLabel>
                    <TextField
                      InputProps={{ sx: { height: "37px", fontSize:{sm:"18px", md:"14px"} } }}
                      placeholder="Contact Person"
                    />
                  </Grid>
                </Grid>
              </FormControl>
            </Box>
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "85.5%" },
              // border:"1px solid red",
              padding:{xs:"0 15px", md:"0"},
              margin: "auto",
              display: "flex",
              justifyContent: "space-between",
              marginTop: "30px",
              paddingBottom:{xs:"20px", md:"0"},
            }}
          >
            <Button variant="text" sx={{ textTransform: "none",fontSize:{sm:"20px",md:"13px"} }} disabled>
              Back
            </Button>
            <Button
              variant="contained" size="small"
              sx={{ textTransform: "none",fontSize:{sm:"20px",md:"13px"}, padding: "6px 8px" }}
              endIcon={<ArrowForwardIcon />}
            >
              Next
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CheckIn;
