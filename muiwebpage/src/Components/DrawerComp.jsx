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
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PeopleIcon from '@mui/icons-material/People';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import logo from '../Images/Logo.png'

const DrawerComp = () => {
  const { toggle, menu } = useContext(AuthContext);

  const menuKaFirstList=[
    {
        text:"Dashboard",
        icon:<DashboardOutlinedIcon/>
    },
    {
        text:"Request",
        icon:<PendingActionsOutlinedIcon/>
    },
    {
        text:"Vehicles",
        icon:<LocalShippingIcon/>
    },
    {
        text:"Visitors",
        icon:<PeopleIcon/>
    },
    {
        text:"Check In",
        icon:<CheckBoxOutlinedIcon/>
    }
  ]

  const menuKaSecondList=[
    {
        text:"Settings",
        icon:<SettingsOutlinedIcon/>
    },
    {
        text:"Help & Support",
        icon:<HelpOutlineIcon/>
    },
    {
        text:"Logout",
        icon:<LogoutIcon/>
    }
]

  return (
    <div>
      {menu ? (
        <Box sx={{ width: "100%", backgroundColor:"#212529"}} color="#212529">
          <Drawer variant="permanent">
            <Box sx={{display:"flex"}}>
                <img src={logo}/>
                <Typography variant="h4" fontSize={34} fontWeight={700}>Logo</Typography>
            </Box>
            <List sx={{ width: "245px" }}>  
            {menuKaFirstList?.map((menuone,index)=>(
                <ListItemButton key={index}>
                <ListItemIcon>
                    {menuone.icon}
                </ListItemIcon>
                  <ListItemText> {menuone.text}</ListItemText>
              </ListItemButton>
            ))}
            </List>

            <List sx={{ width: "245px" }}>  
            {menuKaSecondList?.map((menutwo,index)=>(
                <ListItemButton key={index}>
                <ListItemIcon>
                    {menutwo.icon}
                </ListItemIcon>
                  <ListItemText> {menutwo.text}</ListItemText>
              </ListItemButton>
            ))}
            </List>
          </Drawer>
        </Box>
      ) : (
        <Box>
             <Drawer variant="permanent">
            <List sx={{ width: "40px" }}>
              <ListItemButton>
                <ListItemIcon>
                  <ListItemText>small</ListItemText>
                </ListItemIcon>
              </ListItemButton>
            </List>
          </Drawer>
        </Box>
      )}
    </div>
  );
};

export default DrawerComp;
