import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import image from "../../assets/images/firebase.png";
import Box from "@material-ui/core/Box";

const Logo = () => {
  return (
    <Grid container alignItems="center">
      <Grid item>
        <img src={image} alt="logo" style={{ maxHeight: 48, marginLeft: -8 }} />
      </Grid>
      <Grid item>
        <Typography color="textSecondary" component="div">
          <Box fontWeight={500} letterSpacing={0.4}>
            Bever Initiative
          </Box>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Logo;
