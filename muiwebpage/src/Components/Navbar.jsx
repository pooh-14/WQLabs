import React, { useContext } from "react";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { AuthContext } from "../../../muiwebpage/src/Components/Context/AuthContext";

const Navbar = () => {
  const { toggle,menu } = useContext(AuthContext);

  return (
    <>
      <AppBar sx={{ height: 72,justifyContent: "center",borderBottom:"1px solid #e4e4e5", zIndex:'1'}} color="inherit" position="sticky" elevation={0}>
        <Toolbar>
          {!menu?
          
          <MenuIcon fontSize="large" color="action" onClick={toggle}/>
        :null}
          <Stack sx={{ marginLeft: "auto" }} spacing={1} direction="row">
            <IconButton size="large" color="inherit">
              <Badge badgeContent={3} color="primary">
                <NotificationsNoneOutlinedIcon color="action"/>
              </Badge>
            </IconButton>
            <Box
              sx={{
                display: "flex",
                // border: "1px solid black",
                alignItems: "center",
                width: 143,
                justifyContent:"space-between"
              }}
            >
              <Avatar
                sx={{ width: 44, height: 44 }}
                src="https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=360"/>
              <Box>
                <Typography sx={{ fontSize: "16px", fontWeight:"700"}}>Vishnu Nair</Typography>
                <Typography sx={{ fontSize: "12px", marginTop:"-1px"}} color="text.secondary">User</Typography>
              </Box>
            </Box>
          </Stack>
        </Toolbar>
        {/* <DrawerComp/> */}
      </AppBar>
      </>
  
  );
};

export default Navbar;
