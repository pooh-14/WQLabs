import React, { useContext } from "react";
import Navbar from "./Navbar";
import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import DrawerComp from "./DrawerComp";
import { AuthContext } from "./Context/AuthContext";
import PeopleIcon from "@mui/icons-material/People";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DomainVerificationIcon from "@mui/icons-material/DomainVerification";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SearchIcon from "@mui/icons-material/Search";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";

const Home = () => {
  const { menu, setMenu } = useContext(AuthContext);

  const ppr = {
    height: "100px",
    border: "1px solid #e4e4e5",
    borderRadius: "12px",
    display: "flex",
    padding: "15px",
    alignItems: "center",
    fontFamily: "Poppins",
  };

  const icn = {
    fontSize: "63px",
    // border:"1px solid blue",
    borderRadius: "50px",
    padding: "10px",
    marginRight: "15px",
  };

  const secdiv = {
    width: "97.2%",
    margin: "auto",
    borderRadius: "12px",
    backgroundColor: "white",
    marginTop: "22px",
    border: "1px solid #e4e4e5",
    padding: "15px",
    fontFamily: "Poppins",
  };

  const bttn = {
    textTransform: "none",
    padding: "7px 9px",
    fontSize: "13px",
    fontWeight: "600",
    display: { xs: "none", sm: "block", md: "block" },
  };

  const bttntwo = {
    border: "1px solid #1976d2",
    backgroundColor: "#1976d2",
    color: "white",
    width: "40px",
    padding: "6px 0px",
    fontSize: "13px",
    fontWeight: "600",
    display: { xs: "block", sm  : "none" , md: "none" },
  };

  const chevron = {
    border: "1px solid #b6c3ef",
    width: "21px",
    height: "21px",
    borderRadius: "3px",
    backgroundColor: "#b6c3ef",
    color: "white",
  };

  const one = {
    border: "1px solid #ebebeb",
    margin: "auto",
    width: "25px",
    height: "24px",
    borderRadius: "5px",
    fontSize: "15px",
    backgroundColor: "#ebebeb",
  };

  const page = {
    display: "flex",
    justifyContent: "space-between",
    // border: "1px solid red",
    width: "77px",
    alignItems: "center",
    textAlign: "center",
  };

  const show = {
    display: "flex",
    justifyContent: "space-between",
    padding: " 0 27px 0 20px",
    margin: "22px 0",
  };

  const celltwo = {
    padding: "5px",
    paddingLeft: "0px",
    color: "#4E4F4F",
    width: "187px",
    padding: { xs: "0px 7px", sm: "30px 20px 30px 10px",md: "0px 0px",},
    textWrap: "nowrap",
    fontSize:{sm:"20px", md:"14px"},
  };

  const tblcntnt = [
    {
      name: "Jose King",
      company: "Initech",
      phone: "8975894323",
      date: "20th Nov 2023",
      in: "12:11 PM",
      out: "12:03 PM",
    },

    {
      name: "Kevin Wilkinson",
      company: "Globex Corporation ",
      phone: "7856934434",
      date: "20th Nov 2023",
      in: "12:11 PM",
      out: "11:55 AM",
    },

    {
      name: "Jon Doe",
      company: "werq Labs",
      phone: "9867834423",
      date: "20th Nov 2023",
      in: "12:11 PM",
      out: "05:18 PM",
    },
  ];

  return (
    <Box sx={{ display: "flex", backgroundColor: "#f5f5f6" }}>
      {menu ? (
        <Box sx={{ width: { xs: "100%",sm:"100%", md: "300px" } }}>
          <DrawerComp menu={menu} setMenu={setMenu} />
        </Box>
      ) : (
        <Box sx={{ width: "62px", display: { xs: "none",sm: "none", md: "block" } }}>
          <DrawerComp menu={menu} setMenu={setMenu} />
        </Box>
      )}
      <Box sx={{ width: { xs: "100vw", sm:"100%", md: "100%" }, height: "100vh" }}>
        <Box>
          <Navbar menu={menu} setMenu={setMenu} />
        </Box>
        <Box>
          <Box sx={{ width: "97.2%", margin: "auto" }}>
            <Box sx={{ marginTop: "22px" }}>
              <Grid container spacing={{xs:1,sm:2,md:3}}>
                <Grid item xs={12} sm={6} md={3}>
                  <Paper sx={ppr} elevation={0}>
                    <Box>
                      <PeopleIcon
                        style={icn}
                        sx={{
                          color: "#fab044",
                          backgroundColor: "#fff1da",
                          border: "1px solid #fff1da",
                        }}
                      />
                    </Box>
                    <Box>
                      <Typography fontWeight={700} fontSize={17}>
                        Total Entries{" "}
                      </Typography>
                      <Typography
                        fontWeight={700}
                        sx={{
                          color: "#0A9338",
                          marginTop: "5px",
                          fontSize: "17px",
                        }}
                      >
                        361
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Paper sx={ppr} elevation={0}>
                    <Box>
                      <LocalShippingIcon
                        style={icn}
                        sx={{
                          color: "#767af5",
                          backgroundColor: "#e4e4fe",
                          border: "1px solid #e4e4fe",
                        }}
                      />
                    </Box>
                    <Box>
                      <Typography fontWeight={700} fontSize={17}>
                        Vehicles
                      </Typography>
                      <Typography
                        fontWeight={700}
                        sx={{
                          color: "#0A9338",
                          marginTop: "5px",
                          fontSize: "17px",
                        }}
                      >
                        5
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Paper sx={ppr} elevation={0}>
                    <Box>
                      <DomainVerificationIcon
                        style={icn}
                        sx={{
                          color: "#f09e7f",
                          backgroundColor: "#fdeae4",
                          border: "1px solid #fdeae4",
                        }}
                      />
                    </Box>
                    <Box>
                      <Typography fontWeight={700} fontSize={17}>
                        Check In
                      </Typography>
                      <Typography
                        fontWeight={700}
                        sx={{
                          color: "#0A9338",
                          marginTop: "5px",
                          fontSize: "17px",
                        }}
                      >
                        361
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Paper sx={ppr} elevation={0}>
                    <Box>
                      <ExitToAppIcon
                        style={icn}
                        sx={{
                          color: "#ac30d9",
                          backgroundColor: "#f7e4fe",
                          border: "1px solid #f7e4fe",
                        }}
                      />
                    </Box>
                    <Box>
                      <Typography fontWeight={700} fontSize={17}>
                        Check Out
                      </Typography>
                      <Typography
                        fontWeight={700}
                        sx={{
                          color: "#0A9338",
                          marginTop: "5px",
                          fontSize: "17px",
                        }}
                      >
                        361
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Box sx={secdiv}>
            <Box sx={{ display: "flex" }}>
              <Typography
                sx={{
                  fontSize: { xs: "15px", sm: "18px", md: "18px" },
                  fontWeight: "700",
                  alignSelf: "center",
                }}
              >
                Recent Visits
              </Typography>
              <Stack
                sx={{ alignItems: "center", marginLeft: "auto" }}
                spacing={2}
                direction="row"
              >
                {/* <TextField variant="outlined" placeholder="Search..." sx={{'& .MuiInputBase-root':{height:'25px'}}} 
              InputProps={{ endAdornment: <endAdornment position="End"><SearchIcon/></endAdornment>}}/>   */}

                <TextField
                  placeholder="Search..."
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                    sx: {
                      width: { xs: "172px", sm: "300px", md: "260px" },
                      height: { xs: "28px", sm: "38px", md: "38px" },
                      fontSize: "14px",
                    },
                  }}
                  variant="outlined"
                />
                <Button variant="contained" sx={bttn}>
                  Check In
                </Button>

                <IconButton variant="contained" sx={bttntwo}>
                  <OpenInBrowserIcon />
                </IconButton>
              </Stack>
            </Box>
            <TableContainer
              sx={{
                border: "1px solid #e4e4e5",
                marginTop: "15px",
                borderRadius: "5px",
              }}
            >
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell
                      align="left"
                      sx={{
                        paddingLeft: "10px",
                        width: "187px",
                        padding: { xs: "0px 7px", sm: "30px 20px 30px 10px",md: "0px 10px",},
                        textWrap: "nowrap",
                        fontSize:{sm:"20px", md:"14px"},
                      }}
                    >
                      <strong>Name</strong>
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        paddingLeft: "0px",
                        width: "187px",
                        textWrap: "nowrap",
                        fontSize:{sm:"20px", md:"14px"},
                      }}
                    >
                      <strong>Company Name</strong>
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        paddingLeft: "0px",
                        width: "187px",
                        padding: { xs: "0px 7px", sm: "30px 20px 30px 10px",md: "0px 0px",},
                        textWrap: "nowrap",
                        fontSize:{sm:"20px", md:"14px"},
                      }}
                    >
                      <strong>Phone</strong>
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        paddingLeft: "0px",
                        width: "187px",
                        padding: { xs: "0px 7px", sm: "30px 20px 30px 10px",md: "0px 0px",},
                        textWrap: "nowrap",
                        fontSize:{sm:"20px", md:"14px"},
                      }}
                    >
                      <strong>Date</strong>
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        paddingLeft: "0px",
                        width: "187px",
                        padding: { xs: "0px 7px", sm: "30px 20px 30px 10px",md: "0px 0px",},
                        textWrap: "nowrap",
                        fontSize:{sm:"20px", md:"14px"},
                      }}
                    >
                      <strong>Check In</strong>
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        paddingLeft: "0px",
                        width: "187px",
                        padding: { xs: "0px 7px", sm: "30px 20px 30px 10px",md: "0px 0px",},
                        textWrap: "nowrap",
                        fontSize:{sm:"20px", md:"14px"},
                      }}
                    >
                      <strong>Check Out</strong>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tblcntnt?.map((content, index) => (
                    <TableRow sx={{ padding: "-16px" }}>
                      <TableCell align="left" sx={{ padding: "5px 0" }}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            padding: "0px",
                            width: "187px",
                            padding: { xs: "0px 7px", sm: "2px 0px 0 10px",},
                            textWrap: "nowrap",
                            fontSize:{sm:"20px", md:"14px"},
                            margin: "0",
                            paddingLeft: "10px",
                            color: "#4E4F4F",
                            marginRight:{sm:"20px", md:"0"},
                          }}
                        >
                          <Avatar
                            sx={{ marginRight: "10px" }}
                            src="/broken-image.jpg"
                          />
                          {content.name}
                        </Box>
                      </TableCell>
                      <TableCell align="left" sx={celltwo}>
                        {content.company}
                      </TableCell>
                      <TableCell align="left" sx={celltwo}>
                        {content.phone}
                      </TableCell>
                      <TableCell align="left" sx={celltwo}>
                        {content.date}
                      </TableCell>
                      <TableCell align="left" sx={celltwo}>
                        {content.in}
                      </TableCell>
                      <TableCell align="left" sx={celltwo}>
                        {content.out}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Box sx={show}>
                <Typography fontSize={14}>
                  Showing <b>1</b> to <b>3</b> out of <b>3</b> People
                </Typography>
                <Box sx={page}>
                  <ChevronLeftIcon sx={chevron} />
                  <p style={one}>1</p>
                  <ChevronRightIcon sx={chevron} />
                </Box>
              </Box>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
