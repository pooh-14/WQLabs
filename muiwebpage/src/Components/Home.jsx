import React, { useContext } from "react";
import Navbar from "./Navbar";
import { Box, Typography } from "@mui/material";
import DrawerComp from "./DrawerComp";
import { AuthContext } from "./Context/AuthContext";

const Home = () => {
  const { menu, setMenu } = useContext(AuthContext);

  return (
    <Box sx={{display:"flex"}}>
      {menu ?
      <Box sx={{ width: "300px", border: "1px solid blue" }}>
      <DrawerComp menu={menu} setMenu={setMenu} />
    </Box>
    :
    <Box sx={{ width: "40px", border: "1px solid blue" }}>
      <DrawerComp menu={menu} setMenu={setMenu} />
    </Box>}
      <Box sx={{ width: "100%", border: "1px solid red" }}>
        <Box>
          <Navbar menu={menu} setMenu={setMenu} />
        </Box>
        <Box>
          <Typography variant="h1">home content</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
