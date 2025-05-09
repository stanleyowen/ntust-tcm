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
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function Navbars() {
  return (
    <BaseLayout
      breadcrumb={[
        { label: "Medical Books", route: "/sections/medical-books" },
        { label: "The Yellow Emperor's Inner Classic" },
      ]}
    >
      <MKBox component="section">
        <Grid container>
          <Grid item>
            <MKBox
              component="img"
              src="https://m.media-amazon.com/images/I/81AKWccxFoL.jpg"
              alt="The Yellow Emperor's Inner Classic"
              borderRadius="lg"
              width="25%"
              sx={{ objectFit: "cover", maxHeight: "450px" }}
            />
            <MKBox
              component="img"
              src="https://m.media-amazon.com/images/I/61YWTMa5++L._AC_UF1000,1000_QL80_.jpg"
              alt="The Classic of Nan-Ching"
              borderRadius="lg"
              width="25%"
              sx={{ objectFit: "cover", maxHeight: "450px" }}
            />
            <MKBox
              component="img"
              src="https://m.media-amazon.com/images/I/51-7m2ttCYL._SY445_SX342_PQ46_.jpg"
              alt="Treatise on feberile disease caused by Cold"
              borderRadius="lg"
              width="25%"
              sx={{ objectFit: "cover", maxHeight: "450px" }}
            />
            <MKBox
              component="img"
              src="https://m.media-amazon.com/images/I/51KSpFaI2mL._SY445_SX342_PQ46_.jpg"
              alt="Shennong's Materia Medica"
              borderRadius="lg"
              width="25%"
              sx={{ objectFit: "cover", maxHeight: "450px" }}
            />
          </Grid>

          <Grid item>
            <MKTypography variant="h3" mt={3} mb={3}>
              The Yellow Emperor's Inner Classic{" "}
            </MKTypography>

            <MKTypography variant="h5" mb={3}>
              Introduction
            </MKTypography>

            <MKTypography variant="body2" color="text" sx={{ textAlign: "justify" }} mb={3}>
              The <b>Huangdi Neijing</b>, also known as the <i>Yellow Emperor’s Inner Classic</i>,
              is one of the most important and oldest books in Chinese medicine. It has been a key
              source of knowledge for over 2,000 years. Written as a conversation between the
              legendary Yellow Emperor and his ministers, especially a doctor named Qíbó, the book
              provides foundational insights into Chinese medicine.
            </MKTypography>

            <MKTypography variant="body2" color="text" sx={{ textAlign: "justify" }} mb={3}>
              The book is divided into two main parts:
              <Container>
                <ul>
                  <li>
                    Suwen (素問, “Basic Questions”) <br />
                    This part explains the basic ideas of Chinese medicine, such as how the body
                    works, how to diagnose illnesses, and how to maintain health. It serves as the
                    theoretical foundation for traditional Chinese medicine.
                  </li>
                  <li>
                    Lingshu (靈樞, “Spiritual Pivot”) <br />
                    This part focuses on acupuncture and its application in treating illnesses. It
                    provides detailed guidance on acupuncture techniques and the meridian system,
                    which are central to traditional Chinese medicine practices.
                  </li>
                </ul>
              </Container>
            </MKTypography>
          </Grid>

          <Grid item>
            <MKTypography variant="h5" mb={3}>
              Background
            </MKTypography>
            <MKTypography variant="body2" color="text" sx={{ textAlign: "justify" }} mb={3}>
              The book was first mentioned around the year 111 CE. A scholar named Huangfu Mi
              (around 215-282 CE) said the Neijing actually included two books: the Suwen and
              another one called the Zhenjing, which is likely an older name for the Lingshu.
            </MKTypography>
          </Grid>

          <Grid item>
            <MKTypography variant="h5" mb={3}>
              Main Ideas
            </MKTypography>
            <MKTypography variant="body2" color="text" sx={{ textAlign: "justify" }} mb={3}>
              <Container>
                <ul>
                  <li>
                    It replaced older beliefs that illness came from evil spirits. Instead, it
                    explained disease as a result of imbalances in things like diet, emotions,
                    lifestyle, or the environment.
                  </li>
                  <li>
                    The Neijing uses symbols and patterns (like yin and yang, the five elements, and
                    qi) to explain how the body works, just like we use letters and numbers in
                    science and math.
                  </li>
                  <li>
                    It teaches that humans are like a small version of the universe—what happens in
                    nature also affects our bodies.
                  </li>
                  <li>
                    Good health comes from keeping everything in balance—inside us and with the
                    world around us.
                  </li>
                </ul>
              </Container>
            </MKTypography>
          </Grid>
        </Grid>
      </MKBox>
    </BaseLayout>
  );
}

export default Navbars;
