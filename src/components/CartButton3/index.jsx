import React, { useEffect } from "react";
import { Link } from "@shopify/hydrogen";
import * as MuiMaterial from "@mui/material";
import * as EmotionReact from "@emotion/react";
import * as EmotionStyled from "@emotion/styled";
import * as MuiIconsMaterial from "@mui/icons-material";
import "./CartButton3.css";

function CartButton3() {
  return (
    <Link to="/cart-page-tablet">
      <div className="cart-button">
        <MuiMaterial.Button
          endIcon=""
          size="medium"
          color="primary"
          disabled={false}
          variant="outlined"
          disableElevation={false}
          startIcon={<MuiIconsMaterial.ShoppingCart />}
        >
          My Cart
        </MuiMaterial.Button>
      </div>
    </Link>
  );
}

export default CartButton3;
