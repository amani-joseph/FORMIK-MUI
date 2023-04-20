import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { IconButton, Stack } from "@mui/material";
import React, { useState } from "react";

const PasswordAdornment = () => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignContent="center"
      alignItems="center"
    >
      {showPassword ? (
        <IconButton>
          <VisibilityOffIcon
            fontSize="small"
            // sx={{ marginY: "auto" }}
            onClick={() => {
              toggleShowPassword();
            }}
          />
        </IconButton>
      ) : (
        <IconButton>
          <RemoveRedEyeIcon
            fontSize="small"
            // sx={{ marginY: "auto" }}
            onClick={() => {
              toggleShowPassword();
            }}
          />
        </IconButton>
      )}
    </Stack>
  );
};

export default PasswordAdornment;
