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
        { label: "Shennong's Materia Medica" },
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
              Shennong's Materia Medica
            </MKTypography>

            <MKTypography variant="body2" color="text" sx={{ textAlign: "justify" }} mb={3}>
              The Shen Nong Bencao Jing, also known as The Divine Farmer's Classic of Materia
              Medica, is the oldest known Chinese book on medicinal substances. It is traditionally
              attributed to the mythical figure Shen Nong (神農), considered the inventor of herbal
              medicine in Chinese legend. However, the real author is unknown, and the text was
              likely compiled during the Han dynasty (206 BCE - 220 CE) or even earlier in the
              Warring States period.
            </MKTypography>

            <MKTypography variant="body2" color="text" sx={{ textAlign: "justify" }} mb={3}>
              Although the original book was lost during the Tang dynasty, large parts of it were
              preserved through quotations in later texts and reconstructed by scholars, especially
              during the Ming and Qing periods. The best-known version today is the one revised by
              Tao Hongjing (陶弘景).
            </MKTypography>

            <MKTypography variant="h3" mt={3} mb={3}>
              Content
            </MKTypography>

            <MKTypography variant="body2" color="text" sx={{ textAlign: "justify" }} mb={3}>
              The Shen Nong Bencao Jing is divided into three volumes (juan) and describes 365
              medicinal substances, which include:
              <Container>
                <ul>
                  <li>252 plants</li>
                  <li>67 animal-based items</li>
                  <li>46 minerals or other inorganic materials</li>
                </ul>
              </Container>
            </MKTypography>

            <MKTypography variant="body2" color="text" sx={{ textAlign: "justify" }} mb={3}>
              Each item is categorized into three grades based on its properties and effects:
              <Container>
                <ol>
                  <li>
                    Superior Grade (上品 / jun 君 “lords”)
                    <Container>
                      <ul>
                        <li>120 non-toxic items that promote long-term health and prolong life</li>
                        <li>Can be taken regularly in large doses</li>
                        <li>Examples: Ginseng, Astragalus</li>
                      </ul>
                    </Container>
                  </li>
                  <li>
                    Medium Grade (中品 / chen 臣 “ministers”)
                    <Container>
                      <ul>
                        <li>120 items used to maintain general health</li>
                        <li>May have mild side effects and require moderate use</li>
                      </ul>
                    </Container>
                  </li>
                  <li>
                    Lower Grade (下品 / zuoshi 佐使 “assistants and envoys”)
                    <Container>
                      <ul>
                        <li>125 items used for treating specific illnesses</li>
                        <li>Often toxic and should be used in small doses and short periods</li>
                      </ul>
                    </Container>
                  </li>
                </ol>
              </Container>
            </MKTypography>

            <MKTypography variant="body2" color="text" sx={{ textAlign: "justify" }} mb={3}>
              Each entry includes:
              <Container>
                <ol>
                  <li>The name, flavor, and nature (hot, cold, warm, cool) of the substance</li>
                  <li>Its functions, therapeutic uses, and preparation methods</li>
                  <li>Toxicity, combinations with other herbs, and collection timing</li>
                </ol>
              </Container>
            </MKTypography>

            <MKTypography variant="body2" color="text" sx={{ textAlign: "justify" }} mb={3}>
              The book also explains how herbs interact through the concept of “seven affects”
              (七情)—whether they support, oppose, or neutralize each other. It includes information
              on the five flavors (sour, salty, sweet, bitter, spicy) and four energies (hot, warm,
              cool, cold), crucial in Traditional Chinese Medicine for balancing Yin and Yang in the
              body.
            </MKTypography>
          </Grid>
        </Grid>
      </MKBox>
    </BaseLayout>
  );
}

export default Navbars;
