/* eslint-disable react/jsx-no-duplicate-props */
/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

// Images
import getInTouch from "assets/images/get-in-touch.png";

function Newsletter() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (!isClicked) {
      setIsClicked(true);

      alert(
        "Since this website is built within 2.5 month, the backend is not yet completed :( Hopefully I can finish it in the future :)"
      );

      setTimeout(() => {
        setIsClicked(false);
      }, 3000);
    }
  };

  return (
    <MKBox component="section" pt={6} my={6}>
      <Container>
        <Grid container alignItems="center">
          <Grid item sx={12} md={6}>
            <MKTypography variant="h4">Be the first to know</MKTypography>
            <MKTypography variant="body2" color="text" mb={3}>
              Subscribe to our newsletter and get the latest updates if you want to be the first to
              know ¯\_(ツ)_/¯
            </MKTypography>
            <Grid container spacing={1}>
              <Grid item xs={8}>
                <MKInput type="email" label="Email Here..." fullWidth />
              </Grid>
              <Grid item xs={4}>
                <MKButton
                  variant="gradient"
                  color="info"
                  sx={{ height: "100%" }}
                  onClick={handleClick}
                  disabled={isClicked}
                >
                  Subscribe
                </MKButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={5} sx={{ ml: "auto" }}>
            <MKBox position="relative">
              <MKBox component="img" src={getInTouch} alt="Get In Touch" width="100%" />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Newsletter;
