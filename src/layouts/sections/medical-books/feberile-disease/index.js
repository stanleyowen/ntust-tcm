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
              alt="Shennong's Materia Medica"
              borderRadius="lg"
              width="25%"
              sx={{ objectFit: "cover", maxHeight: "450px" }}
            />
          </Grid>

          <Grid item>
            <MKTypography variant="h3" mt={3} mb={3}>
              Treatise on feberile disease caused by Cold
            </MKTypography>

            <MKTypography variant="h5" mt={3} mb={3}>
              Introduction
            </MKTypography>

            <MKTypography variant="body2" color="text" sx={{ textAlign: "justify" }} mb={3}>
              The Shanghan Lun, also known as the Treatise on Cold Damage, is one of the most
              important ancient books in Traditional Chinese Medicine (TCM). It was written by Zhang
              Zhongjing before 220 AD, near the end of the Han dynasty. This work is part of a
              larger text called the Shanghan Zabing Lun ("Treatise on Cold Damage and Miscellaneous
              Diseases").
            </MKTypography>

            <MKTypography variant="body2" color="text" sx={{ textAlign: "justify" }} mb={3}>
              The Shanghan Lun is one of the oldest complete clinical textbooks in the world. It
              stands alongside other famous medical works such as the Huangdi Neijing, the Jingui
              Yaolue, and Wen Bing Xue. It laid the foundation for how Chinese medicine approaches
              the diagnosis and treatment of illness, especially those caused by external cold.
            </MKTypography>

            <MKTypography variant="h5" mt={3} mb={3}>
              Contents
            </MKTypography>

            <MKTypography variant="body2" color="text" sx={{ textAlign: "justify" }} mb={3}>
              The Shanghan Lun contains: 398 sections 113 herbal prescriptions. The book is
              organized according to Six Divisions, which represent the different stages a disease
              can go through, based on how Yin and Yang interact in the body:
              <Container>
                <ol>
                  <li>
                    Taiyang (太陽, "Greater Yang")
                    <Container>
                      <ul>
                        <li>Early, mild stage.</li>
                        <li>Symptoms: chills, fever, headache, stiffness.</li>
                        <li>Treatment: sweating to release the exterior.</li>
                      </ul>
                    </Container>
                  </li>
                  <li>
                    Yang Ming (Yang Brightness 陽明)
                    <Container>
                      <ul>
                        <li>Severe, internal heat. </li>
                        <li>
                          Symptoms: high fever without chills, constipation, abdominal fullness.
                        </li>
                        <li>Treatment: clearing heat and purging. </li>
                      </ul>
                    </Container>
                  </li>
                  <li>
                    Shao Yang (Lesser Yang 少陽)
                    <Container>
                      <ul>
                        <li>Half exterior, half interior.</li>
                        <li>Symptoms: alternating chills and fever, chest discomfort.</li>
                        <li>Treatment: harmonizing.</li>
                      </ul>
                    </Container>
                  </li>
                  <li>
                    Tai Yin (Greater Yin 太陰)
                    <Container>
                      <ul>
                        <li>Cold in the interior.</li>
                        <li>Symptoms: chills, bloating, abdominal pain.</li>
                        <li>Treatment: warming and supplementing.</li>
                      </ul>
                    </Container>
                  </li>
                  <li>
                    Shao Yin (Lesser Yin 少陰)
                    <Container>
                      <ul>
                        <li>Deeper, more deficient stage.</li>
                        <li>Symptoms: fatigue, cold limbs, diarrhea, anxiety.</li>
                        <li>Treatment: warming and supporting the body.</li>
                      </ul>
                    </Container>
                  </li>
                  <li>
                    Jue Yin (Absolute Yin 厥陰)
                    <Container>
                      <ul>
                        <li>Final or critical stage.</li>
                        <li>Symptoms: thirst, trouble urinating, physical weakness or collapse.</li>
                        <li>Treatment: warming and restoring balance.</li>
                      </ul>
                    </Container>
                  </li>
                </ol>
              </Container>
            </MKTypography>
          </Grid>
        </Grid>
      </MKBox>
    </BaseLayout>
  );
}

export default Navbars;
