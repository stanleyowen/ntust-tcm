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

// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";

// @mui material components
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function Navbars() {
  const firstImage =
    "http://www.atlanticskyacupuncture.com/wp-content/uploads/2014/07/qing-dynasty.jpg";
  const secondImage =
    "https://www.cgu.edu/wp-content/uploads/2014/12/CISAT-traditional-chinese-medicine5.jpg";
  const thirdImage =
    "https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/10/chinese_herbs_in_wooden_basket-1296x728-header-1296x729.jpg";
  const forthImage =
    "https://media.springernature.com/w580h326/nature-cms/uploads/collections/hero_image_of_collection_page-747354b5e519e25b6814a6164198efa8.png";

  return (
    <BaseLayout
      breadcrumb={[
        { label: "Classics", route: "/sections/classics/medical-books" },
        { label: "Medical Books" },
      ]}
    >
      <MKBox component="section">
        <Grid container>
          <Grid item>
            <MKTypography variant="h3" mt={6} mb={3}>
              Traditional Chinese Medicine Medical Books
            </MKTypography>
          </Grid>

          <Grid item>
            <MKBox
              component="img"
              src="https://m.media-amazon.com/images/I/81AKWccxFoL.jpg"
              alt="The Yellow Emperor's Inner Classic"
              borderRadius="lg"
              width="25%"
              mb={3}
              sx={{ objectFit: "cover", maxHeight: "450px" }}
            />
            <MKBox
              component="img"
              src="https://m.media-amazon.com/images/I/61YWTMa5++L._AC_UF1000,1000_QL80_.jpg"
              alt="The Classic of Nan-Ching"
              borderRadius="lg"
              width="25%"
              mb={3}
              sx={{ objectFit: "cover", maxHeight: "450px" }}
            />
            <MKBox
              component="img"
              src="https://m.media-amazon.com/images/I/51-7m2ttCYL._SY445_SX342_PQ46_.jpg"
              alt="Treatise on feberile disease caused by Cold"
              borderRadius="lg"
              width="25%"
              mb={3}
              sx={{ objectFit: "cover", maxHeight: "450px" }}
            />
            <MKBox
              component="img"
              src="https://m.media-amazon.com/images/I/51KSpFaI2mL._SY445_SX342_PQ46_.jpg"
              alt="Shennong's Materia Medica"
              borderRadius="lg"
              width="25%"
              mb={3}
              sx={{ objectFit: "cover", maxHeight: "450px" }}
            />
          </Grid>

          <Grid item>
            <MKTypography variant="body2" color="text" sx={{ textAlign: "justify" }} mb={3}>
              Traditional Chinese Medicine (TCM) is a complete medical system that has developed
              over thousands of years. It takes a holistic approach to health, focusing on balance
              between the body, mind, and environment. Instead of just treating symptoms, TCM looks
              for the root cause of illness, often using tools like herbs, acupuncture, diet,
              exercise, and lifestyle changes.
            </MKTypography>

            <MKTypography variant="body2" color="text" sx={{ textAlign: "justify" }} mb={3}>
              The knowledge and methods of TCM have been carefully recorded and passed down through
              ancient medical texts. These books are not just practical guides for treating
              disease—they also reflect Chinese philosophy, culture, and views on life. Many of them
              are written in a question-and-answer style, using symbolic language like yin and yang,
              the five elements, and qi to explain how the body works.
            </MKTypography>

            <MKTypography variant="body2" color="text" sx={{ textAlign: "justify" }} mb={3}>
              Among these, several classic texts stand out as the most important and influential in
              shaping Chinese medicine. These books laid the foundation for diagnosis, treatment,
              and understanding of health in TCM.
            </MKTypography>
          </Grid>
        </Grid>

        <MKBox mb={3} textAlign="center" mt={6}>
          <MKTypography variant="h3">Related Blogs</MKTypography>
        </MKBox>

        <Container>
          <Grid container spacing={3}>
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
                    )}, url(${firstImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <Container>
                  <MKTypography variant="h2" color="white" mb={1}>
                    The Yellow Emperor's Inner Classic
                  </MKTypography>
                  <MKTypography variant="body1" color="white" opacity={0.8} mb={2}>
                    An ancient therapy that involves burning dried mugwort on specific points of the
                    body to stimulate healing and improve energy flow.
                  </MKTypography>
                  <MKTypography
                    component={Link}
                    to="/sections/classics/the-yellow-emperors-inner-classic"
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
                    )}, url(${secondImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <Container>
                  <MKTypography variant="h2" color="white" mb={1}>
                    The Classic of Nan-Ching
                  </MKTypography>
                  <MKTypography variant="body1" color="white" opacity={0.8} mb={2}>
                    A traditional Chinese medicine practice that involves inserting thin needles
                    into specific points on the body to balance energy and promote healing.
                  </MKTypography>
                  <MKTypography
                    component={Link}
                    to="/sections/classics/the-classic-of-nan-ching"
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
                    )}, url(${thirdImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <Container>
                  <MKTypography variant="h2" color="white" mb={1}>
                    Treatise on feberile disease caused by Cold
                  </MKTypography>
                  <MKTypography variant="body1" color="white" opacity={0.8} mb={2}>
                    A traditional Chinese medicine practice that involves inserting thin needles
                    into specific points on the body to balance energy and promote healing.
                  </MKTypography>
                  <MKTypography
                    component={Link}
                    to="/sections/classics/treatise-on-feberile-disease-caused-by-cold"
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
                    )}, url(${forthImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <Container>
                  <MKTypography variant="h2" color="white" mb={1}>
                    Shennong's Materia Medica
                  </MKTypography>
                  <MKTypography variant="body1" color="white" opacity={0.8} mb={2}>
                    A traditional Chinese medicine practice that involves inserting thin needles
                    into specific points on the body to balance energy and promote healing.
                  </MKTypography>
                  <MKTypography
                    component={Link}
                    to="/sections/classics/shennongs-materia-medica"
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
      </MKBox>
    </BaseLayout>
  );
}

export default Navbars;
