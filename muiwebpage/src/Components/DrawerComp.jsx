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
        <DashboardOutlinedIcon sx={{ fontSize: "28px", color: "white  " }} />
      ),
    },
    {
      text: "Requests",
      icon: (
        <PendingActionsOutlinedIcon
          sx={{ fontSize: "28px", color: "#9ca3af " }}
        />
      ),
    },
    {
      text: "Vehicles",
      icon: <LocalShippingIcon sx={{ fontSize: "28px", color: "#9ca3af  " }} />,
    },
    {
      text: "Visitors",
      icon: <PeopleIcon sx={{ fontSize: "28px", color: "#9ca3af " }} />,
    },
    {
      text: "Check In",
      icon: (
        <CheckBoxOutlinedIcon sx={{ fontSize: "28px", color: "#9ca3af " }} />
      ),
    },
  ];

  const menuKaSecondList = [
    {
      text: "Settings",
      icon: (
        <SettingsOutlinedIcon sx={{ fontSize: "28px", color: "#9ca3af " }} />
      ),
    },
    {
      text: "Help & Support",
      icon: <HelpOutlineIcon sx={{ fontSize: "28px", color: "white" }} />,
    },
    {
      text: "Logout",
      icon: <LogoutIcon sx={{ fontSize: "28px", color: "#9ca3af " }} />,
    },
  ];

  return (
    <div>
      {menu ? (
        <Box>
          <Drawer variant="permanent" sx={{ height: "100vh" }}>
            <Box style={bgclr} sx={{ overflow: "hidden" }}>
              <Box sx={{ display: "flex", padding: "12px 0px 0px 5px" }}>
                <img src={logo} />
                <Typography
                  variant="h4"
                  fontSize={29}
                  fontWeight={600}
                  sx={{
                    marginLeft: "17px",
                    marginTop: "10px",
                    fontFamily: "Poppins",
                  }}
                >
                  Logo
                </Typography>
              </Box>
              <List sx={{ width: "245px", marginTop: "12%" }}>
                {menuKaFirstList?.map((menuone, index) => (
                  <ListItemButton key={index} sx={{ padding: "15px 20px" }}>
                    <ListItemIcon>{menuone.icon}</ListItemIcon>
                    <ListItemText sx={{ marginLeft: "-11px" }}>
                      {" "}
                      {menuone.text}
                    </ListItemText>
                  </ListItemButton>
                ))}
              </List>

              <List sx={{ width: "245px", marginTop: "20%" }}>
                {menuKaSecondList?.map((menutwo, index) => (
                  <ListItemButton key={index} sx={{ padding: "11px 20px" }}>
                    <ListItemIcon>{menutwo.icon}</ListItemIcon>
                    <ListItemText sx={{ marginLeft: "-11px" }}>
                      {" "}
                      {menutwo.text}
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
            <Box style={bgclr} sx={{ overflow: "hidden",alignItems:"center" }}>
              <Box sx={{ display: "flex", padding:"10px 5px 0 0" }}>
                <img src={logo} />
              </Box>
              <List sx={{ width: "50px", marginTop: "55%" }}>
                {menuKaFirstList?.map((menuone, index) => (
                  <ListItemButton key={index} sx={{ padding: "17px 15px" }}>
                    <ListItemIcon>{menuone.icon}</ListItemIcon>
                  </ListItemButton>
                ))}
              </List>

              <List sx={{ width: "50px", marginTop: "82%" }}>
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
