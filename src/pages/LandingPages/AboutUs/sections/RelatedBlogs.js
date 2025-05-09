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
import { Link } from "react-router-dom";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function RelatedBlogs() {
  const moxibustionImage =
    "https://cdn.britannica.com/27/199927-050-85B901E3/moxibustion-cones-moxa-treatment-points-top-needles.jpg";
  const acupunctureImage =
    "https://media.allure.com/photos/5e909f76e3986e0008731c3b/16:9/w_2240,c_limit/acupuncture.jpg";

  return (
    <>
      <MKBox mb={3} textAlign="center" mt={6}>
        <MKTypography variant="h3">Related Blogs</MKTypography>
      </MKBox>

      <Container>
        <Grid container spacing={3}>
          <Grid item md={12} lg={12}>
            <MKBox
              display="flex"
              alignItems="center"
              borderRadius="xl"
              py={6}
              sx={{
                backgroundImage: ({
                  functions: { linearGradient, rgba },
                  palette: { gradients },
                }) =>
                  `${linearGradient(
                    rgba(gradients.dark.main, 0.8),
                    rgba(gradients.dark.state, 0.8)
                  )}, url(${moxibustionImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Container>
                <MKTypography variant="h4" color="white" fontWeight="bold">
                  The Origin of
                </MKTypography>
                <MKTypography variant="h1" color="white" mb={1}>
                  Moxibustion
                </MKTypography>
                <MKTypography variant="body1" color="white" opacity={0.8} mb={2}>
                  An ancient therapy that involves burning dried mugwort on specific points of the
                  body to stimulate healing and improve energy flow.
                </MKTypography>
                <MKTypography
                  component={Link}
                  to="/sections/history/moxibustion"
                  variant="body2"
                  color="white"
                  fontWeight="regular"
                  sx={{
                    display: "flex",
                    alignItems: "center",

                    "& .material-icons-round": {
                      fontSize: "1.125rem",
                      transform: `translateX(3px)`,
                      transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                    },

                    "&:hover .material-icons-round, &:focus .material-icons-round": {
                      transform: `translateX(6px)`,
                    },
                  }}
                >
                  Read more <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
                </MKTypography>
              </Container>
            </MKBox>
          </Grid>

          <Grid item md={12} lg={6}>
            <MKBox
              display="flex"
              alignItems="center"
              borderRadius="xl"
              py={6}
              sx={{
                backgroundImage: ({
                  functions: { linearGradient, rgba },
                  palette: { gradients },
                }) =>
                  `${linearGradient(
                    rgba(gradients.dark.main, 0.8),
                    rgba(gradients.dark.state, 0.8)
                  )}, url(${acupunctureImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Container>
                <MKTypography variant="h4" color="white" fontWeight="bold">
                  The Discovery of
                </MKTypography>
                <MKTypography variant="h1" color="white" mb={1}>
                  Acupuncture
                </MKTypography>
                <MKTypography variant="body1" color="white" opacity={0.8} mb={2}>
                  A traditional Chinese medicine practice that involves inserting thin needles into
                  specific points on the body to balance energy and promote healing.
                </MKTypography>
                <MKTypography
                  component={Link}
                  to="/sections/history/acupuncture"
                  variant="body2"
                  color="white"
                  fontWeight="regular"
                  sx={{
                    display: "flex",
                    alignItems: "center",

                    "& .material-icons-round": {
                      fontSize: "1.125rem",
                      transform: `translateX(3px)`,
                      transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                    },

                    "&:hover .material-icons-round, &:focus .material-icons-round": {
                      transform: `translateX(6px)`,
                    },
                  }}
                >
                  Read more <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
                </MKTypography>
              </Container>
            </MKBox>
          </Grid>

          <Grid item md={12} lg={6}>
            <MKBox
              display="flex"
              alignItems="center"
              borderRadius="xl"
              py={6}
              sx={{
                backgroundImage: ({
                  functions: { linearGradient, rgba },
                  palette: { gradients },
                }) =>
                  `${linearGradient(
                    rgba(gradients.dark.main, 0.8),
                    rgba(gradients.dark.state, 0.8)
                  )}, url(${moxibustionImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Container>
                <MKTypography variant="h4" color="white" fontWeight="bold">
                  The History of
                </MKTypography>
                <MKTypography variant="h1" color="white" mb={1}>
                  Needle Materials
                </MKTypography>
                <MKTypography variant="body1" color="white" opacity={0.8} mb={2}>
                  From stone—acupuncture and bone—acupuncture to silver and steel—acupuncture
                  needles tell a 10,000-year story of healing through innovation.
                </MKTypography>
                <MKTypography
                  component={Link}
                  to="/sections/history/moxibustion"
                  variant="body2"
                  color="white"
                  fontWeight="regular"
                  sx={{
                    display: "flex",
                    alignItems: "center",

                    "& .material-icons-round": {
                      fontSize: "1.125rem",
                      transform: `translateX(3px)`,
                      transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                    },

                    "&:hover .material-icons-round, &:focus .material-icons-round": {
                      transform: `translateX(6px)`,
                    },
                  }}
                >
                  Read more <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
                </MKTypography>
              </Container>
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default RelatedBlogs;
