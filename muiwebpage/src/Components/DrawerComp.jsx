import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { AuthContext } from "../../../muiwebpage/src/Components/Context/AuthContext";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PeopleIcon from "@mui/icons-material/People";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import logo from "../Images/Logo.png";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const DrawerComp = () => {
  const { toggle, menu } = useContext(AuthContext);

  const bgclr = {
    backgroundColor: "#212529",
    color: "white",
    
  };

  const menuKaFirstList = [
    {
      text: "Dashboard",
      icon: (
        <DashboardOutlinedIcon sx={{ fontSize: {xs:"33px",md:"28px"}, color: "white  " }} />
      ),
    },
    {
      text: "Requests",
      icon: (
        <PendingActionsOutlinedIcon
          sx={{ fontSize: {xs:"33px",md:"28px"}, color: "#9ca3af " }}
        />
      ),
    },
    {
      text: "Vehicles",
      icon: <LocalShippingIcon sx={{ fontSize: {xs:"33px",md:"28px"}, color: "#9ca3af  " }} />,
    },
    {
      text: "Visitors",
      icon: <PeopleIcon sx={{ fontSize: {xs:"33px",md:"28px"}, color: "#9ca3af " }} />,
    },
    {
      text: "Check In",
      icon: (
        <CheckBoxOutlinedIcon sx={{ fontSize: {xs:"33px",md:"28px"}, color: "#9ca3af " }} />
      ),
    },
  ];

  const menuKaSecondList = [
    {
      text: "Settings",
      icon: (
        <SettingsOutlinedIcon sx={{ fontSize: {xs:"33px",md:"28px"}, color: "#9ca3af " }} />
      ),
    },
    {
      text: "Help & Support",
      icon: <HelpOutlineIcon sx={{ fontSize: {xs:"33px",md:"28px"}, color: "white" }} />,
    },
    {
      text: "Logout",
      icon: <LogoutIcon sx={{ fontSize: {xs:"33px",md:"28px"}, color: "#9ca3af " }} />,
    },
  ];

  return (
    <div>
      {menu ? (
        <Box>
          <Drawer variant="permanent" sx={{ height: "100vh" }}>
            <Box style={bgclr} sx={{ height: "100vh", overflow: "hidden",width: {xs:"100vw", md:"100%"},display:"flex",flexDirection:"column", justifyContent:"space-between" }}>
              <Box
                sx={{
                  display: "flex",
                  padding: "12px 15px 0px 5px",
                  alignItems: "center",
                  justifyContent:"space-between",  
                }}
              >
                <img style={{width:{sm:"200px"},height:{sm:"200px"}}} src={logo} />
                <Typography
                  variant="h4"
                  fontSize={{sm:50,md:29}}
                  fontWeight={600}
                  sx={{
                    marginLeft: {xs:"-120px",sm:"-440px",md:"8px"},
                    marginTop: "10px",
                    fontFamily: "Poppins",
                    marginRight: "50px",
                  }}
                >
                  Logo
                </Typography>
                <ChevronLeftIcon sx={{ marginTop: "10px" ,fontSize: {xs:"30px",sm:"50px",md:"25px"},}} onClick={toggle} />
              </Box>
              <List sx={{ width: {sm:"400px",md:"245px"},marginTop:{xs:"-50px",sm:"-170px",md:"-20px"}  }}>
                {menuKaFirstList?.map((menuone, index) => (
                  <ListItemButton key={index} sx={{ padding: "16px 20px" }}>
                    <ListItemIcon>{menuone.icon}</ListItemIcon>
                    <ListItemText sx={{ marginLeft: "-11px" }}>
                      <Typography fontSize={{sm:"30px", md:"15px"}} >{menuone.text}</Typography>
                    </ListItemText>
                  </ListItemButton>
                ))}
              </List>

              <List sx={{ width: {sm:"400px",md:"245px"}, }}>
                {menuKaSecondList?.map((menutwo, index) => (
                  <ListItemButton key={index} sx={{ padding: "12px 20px" }}>
                    <ListItemIcon>{menutwo.icon}</ListItemIcon>
                    <ListItemText sx={{ marginLeft: {sm:"0",md:"-11px"} }}>
                      <Typography fontSize={{sm:"30px", md:"15px"}} >{menutwo.text}</Typography>
                    </ListItemText>
                  </ListItemButton>
                ))}
              </List>
            </Box>
          </Drawer>
        </Box>
      ) : (
        <Box>
          <Drawer variant="permanent" sx={{ height: "100vh" }}>
            <Box
              style={bgclr}
              sx={{ height: "100%", overflow: "hidden", alignItems: "center",display:"flex",flexDirection:"column", justifyContent:"space-between" }}
            >
              <Box sx={{ display: "flex", padding: "10px 5px 0 0" }}>
                <img src={logo} />
              </Box>
              <List sx={{ width: "50px"}}>
                {menuKaFirstList?.map((menuone, index) => (
                  <ListItemButton key={index} sx={{ padding: "17px 15px" }}>
                    <ListItemIcon>{menuone.icon}</ListItemIcon>
                  </ListItemButton>
                ))}
              </List>

              <List sx={{ width: "50px", }}>
                {menuKaSecondList?.map((menutwo, index) => (
                  <ListItemButton key={index} sx={{ padding: "13px 15px" }}>
                    <ListItemIcon>{menutwo.icon}</ListItemIcon>
                  </ListItemButton>
                ))}
              </List>
            </Box>
          </Drawer>
        </Box>
      )}
    </div>
  );
};

export default DrawerComp;
