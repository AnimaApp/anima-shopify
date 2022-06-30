import React, { useEffect } from "react";
import * as MuiMaterial from "@mui/material";
import * as EmotionReact from "@emotion/react";
import * as EmotionStyled from "@emotion/styled";
import * as MuiIconsMaterial from "@mui/icons-material";
import "./Button4.css";

function Button4() {
  return (
    <div className="link">
      <MuiMaterial.Button
        endIcon=""
        size="medium"
        variant="text"
        color="primary"
        disabled={false}
        disableElevation={false}
        startIcon={<MuiIconsMaterial.Checkroom />}
      >
        Clothing & Shoes
      </MuiMaterial.Button>
    </div>
  );
}

export default Button4;
