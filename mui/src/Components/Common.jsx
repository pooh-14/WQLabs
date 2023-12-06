import React from "react";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import LockIcon from "@mui/icons-material/Lock";
import FaceIcon from "@mui/icons-material/Face";
import Switch from "@mui/material/Switch";
import Register from "./Register";
import Login from "./Login";

const Common = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <Paper elevation={4} style={{padding:"20px", marginTop:"30px"}}>
        {checked ? (
          <Chip
            icon={<LockIcon />}
            label="Login"
            color="primary"
            variant="outlined"
          />
        ) : (
          <Chip
            icon={<FaceIcon />}
            label="Sign Up"
            color="primary"
            variant="outlined"
          />
        )}
        <br />

        <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
        <br />

        {checked ? (
          <Login/>
        ) : (
          <Register/>
        )}
      </Paper>
    </div>
  );
};

export default Common;
