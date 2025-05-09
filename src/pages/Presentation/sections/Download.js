// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/shapes/waves-white.svg";
import { Link } from "react-router-dom";

function Download() {
  return (
    <MKBox component="section" py={{ xs: 0 }}>
      <MKBox
        variant="gradient"
        bgColor="dark"
        position="relative"
        borderRadius="xl"
        sx={{ overflow: "hidden" }}
      >
        <MKBox
          component="img"
          src={bgImage}
          alt="pattern-lines"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          zIndex={1}
          opacity={0.2}
        />
        <Container sx={{ position: "relative", zIndex: 2, py: 12 }}>
          <Grid container item xs={12} md={7} justifyContent="center" mx="auto" textAlign="center">
            <MKTypography variant="h3" color="white">
              Are you fascinated by the world of
            </MKTypography>
            <MKTypography variant="h3" color="white" mb={1}>
              Traditional Chinese Medicine?
            </MKTypography>
            <MKTypography variant="body2" color="white" mb={6}>
              Dive into the rich history, profound knowledge, and holistic healing practices of TCM.
              Click the button below to explore our resources and start your journey into the
              ancient art of Traditional Chinese Medicine today!
            </MKTypography>
            <MKButton
              variant="gradient"
              color="info"
              size="large"
              component={Link}
              to="/pages/landing-pages/history"
              sx={{ mb: 2 }}
            >
              Explore Now
            </MKButton>
          </Grid>
        </Container>
      </MKBox>
    </MKBox>
  );
}

export default Download;
