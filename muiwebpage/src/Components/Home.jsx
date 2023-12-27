import React, { useContext } from "react";
import Navbar from "./Navbar";
import {
  Avatar,
  Box,
  Button,
  Grid,
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
    width: "97.4%",
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
      company: "Werq Labs",
      phone: "9867834423",
      date: "20th Nov 2023",
      in: "12:11 PM",
      out: "05:18 PM",
    },
  ];

  return (
    <Box sx={{ display: "flex", backgroundColor: "#f5f5f6" }}>
      {menu ? (
        <Box sx={{ width: "300px" }}>
          <DrawerComp menu={menu} setMenu={setMenu} />
        </Box>
      ) : (
        <Box sx={{ width: "62px" }}>
          <DrawerComp menu={menu} setMenu={setMenu} />
        </Box>
      )}
      <Box sx={{ width: "100%" }}>
        <Box>
          <Navbar menu={menu} setMenu={setMenu} />
        </Box>
        <Box>
          <Box sx={{ width: "97.4%", margin: "auto" }}>
            <Box sx={{ marginTop: "22px" }}>
              <Grid container spacing={3}>
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
            <Box></Box>
          </Box>
          <Box sx={secdiv}>
            <Box sx={{ display: "flex" }}>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "700",
                  alignSelf: "center",
                }}
              >
                Recent Visits
              </Typography>
              <Stack
                sx={{ marginLeft: "auto", alignItems: "center" }}
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
                    style: {
                      width: "260px",
                      height: "38px",
                      fontSize: "14px",
                    },
                  }}
                  variant="outlined"
                />
                <Button variant="contained" sx={bttn}>
                  Check In
                </Button>
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
                    <TableCell>
                      <strong>Name</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Company Name</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Phone</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Date</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Check In</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Check Out</strong>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tblcntnt?.map((content, index) => (
                    <TableRow sx={{ padding: "-16px" }}>
                      <TableCell
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          padding: "6px",
                        }}
                      >
                        <Avatar
                          sx={{ marginRight: "10px" }}
                          src="/broken-image.jpg"
                        />
                        {content.name}
                      </TableCell>
                      <TableCell sx={{ padding: "6px" }}>
                        {content.company}
                      </TableCell>
                      <TableCell sx={{ padding: "6px" }}>
                        {content.phone}
                      </TableCell>
                      <TableCell sx={{ padding: "6px" }}>
                        {content.date}
                      </TableCell>
                      <TableCell sx={{ padding: "6px" }}>
                        {content.in}
                      </TableCell>
                      <TableCell sx={{ padding: "6px" }}>
                        {content.out}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Box sx={{ display: "flex", justifyContent: "space-between", paddingX:"20px", marginTop:"22px" }}>
                <Typography fontSize={14}>
                  Showing <b>1</b> to <b>3</b> out of <b>3</b> People{" "}
                </Typography>
                <Box sx={{ display: "flex" ,border:"1px solid red"}}>
                  <ChevronLeftIcon sx={{border:"1px solid blue"}}/>
                  <p  style={{border:"1px solid blue"}}>1</p>
                  <ChevronRightIcon  sx={{border:"1px solid blue"}}/>
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
