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
        { label: "Classics" },
        { label: "Medical Books", route: "/sections/classics/medical-books" },
        { label: "Treatise on feberile disease caused by Cold" },
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
              alt="Shennong`s Materia Medica"
              borderRadius="lg"
              width="25%"
              sx={{ objectFit: "cover", maxHeight: "450px" }}
            />
          </Grid>

          <Grid item>
            <MKTypography variant="h3" mt={3} mb={3}>
              Treatise on feberile disease caused by Cold
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

            <MKTypography variant="h5" mt={6} mb={3}>
              The Yellow Emperor's Inner Classic{" "}
            </MKTypography>
          </Grid>

          <MKBox
            component="img"
            src="https://media.allure.com/photos/5e909f76e3986e0008731c3b/16:9/w_2240,c_limit/acupuncture.jpg"
            alt="Traditional Chinese Medicine"
            borderRadius="lg"
            width="60%"
            mb={3}
            sx={{ maxHeight: "800px", objectFit: "cover", mx: "auto", display: "block" }}
          />

          <MKTypography variant="body2" color="text" sx={{ textAlign: "justify" }} mb={3}>
            The Chinese character for "needle" (針) reflects this history, combining the concepts of
            sharpness and precision. Similarly, the character for "Bain Stone" (砭) represents the
            early use of stones for medical purposes. These discoveries highlight the ingenuity of
            ancient humans, who developed techniques to stimulate specific points on the body to
            restore balance and harmony.
          </MKTypography>

          <MKTypography variant="body2" color="text" sx={{ textAlign: "justify" }} mb={3}>
            As technology advanced, the tools used in acupuncture evolved. The stone needles were
            replaced with bamboo and later with metals, allowing for greater precision and
            effectiveness. Today, acupuncture is practiced in various styles, including Japanese
            acupuncture, Korean hand acupuncture, Leamington Five-Elements acupuncture, French
            energetic acupuncture, and the traditional Chinese TCM style. Specialized approaches,
            such as hand–foot acupuncture, auricular acupuncture, and scalp acupuncture, have also
            emerged.
          </MKTypography>

          <MKTypography variant="body2" color="text" sx={{ textAlign: "justify" }} mb={3}>
            While the use of metal needles and moxibustion remains the most common technical
            approach, modern innovations have introduced electricity and lasers as alternatives to
            handheld needles in certain circumstances. Despite these advancements, acupuncture
            remains deeply rooted in its historical origins, continuing to honor the practices and
            discoveries of ancient humans.
          </MKTypography>
        </Grid>

        <MKBox
          component="section"
          variant="gradient"
          bgColor="dark"
          position="relative"
          py={6}
          px={{ xs: 2, lg: 0 }}
          mx={-2}
        >
          <Container>
            <Grid container>
              <MKTypography variant="h3" color="white">
                From Stone to Silicon: The Evolution of Acupuncture
              </MKTypography>

              <MKBox
                component="img"
                src="https://www.jrheum.org/content/jrheum/48/6/924/F2.large.jpg"
                alt="Traditional Chinese Medicine"
                borderRadius="lg"
                width="100%"
                mb={3}
                mt={3}
                sx={{ maxHeight: "400px", objectFit: "cover" }}
              />

              <MKTypography variant="body2" color="white" opacity={0.8} mt={3} textAlign="justify">
                Just as ancient humans used sharp stones to relieve pain and promote healing, modern
                science and technology have introduced new ways to understand and apply acupuncture.
                Today, researchers use neuroimaging technologies like fMRI and PET scans to study
                how acupuncture affects the brain and nervous system. These tools provide evidence
                for acupuncture’s effects on pain pathways, emotion regulation, and organ function.
                In addition, artificial intelligence (AI) is being used to analyze vast databases of
                acupuncture cases and outcomes, helping to identify the most effective point
                combinations for specific conditions. Robotic acupuncture systems, guided by AI and
                real-time imaging, are also being developed to deliver precise needle placement with
                minimal discomfort. Furthermore, electroacupuncture and laser acupuncture offer
                needle-free alternatives that simulate traditional acupuncture using electrical or
                light energy—making treatments more accessible, especially for needle-sensitive
                patients. Just as early humans used the tools they had to explore healing, we now
                use technology to refine, validate, and expand these ancient practices for a modern
                world.
              </MKTypography>
            </Grid>
          </Container>
        </MKBox>
      </MKBox>
    </BaseLayout>
  );
}

export default Navbars;
