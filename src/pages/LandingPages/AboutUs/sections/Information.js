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
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

import AcupuntureImage from "assets/images/acupunture.png";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center" mb={6}>
          <MKBox mb={3}>
            <MKTypography variant="h3">The four great periods of Chinese medicine</MKTypography>
          </MKBox>

          <MKTypography variant="body2" color="text">
            The history of Chinese medicine is divided into four great periods, each marked by
            significant developments and contributions from legendary figures. These periods reflect
          </MKTypography>
        </Grid>

        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="looks_one"
                    title="Mythical Era (29th-27th centuries BCE)"
                    description="The era of the three emperors—Fu Xi, Shennong, and Huangdi—marked the beginnings of Chinese medicine, blending myth and legend."
                  />
                </MKBox>
              </Grid>

              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="looks_two"
                    title="Bian Qiao's Era (5th century BCE)"
                    description="A period of legendary figures like Bian Qiao, where anecdotal material and early medical practices began to emerge."
                  />
                </MKBox>
              </Grid>

              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="looks_3"
                    title="Great Practitioners (CE 150-300)"
                    description="The time of Zhang Zhongjing, Wang Shuhe, and Hua Tuo, who made significant contributions to Chinese medicine."
                  />
                </MKBox>
              </Grid>

              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="looks_4"
                    title="Encyclopaedic Era (16th century CE)"
                    description="A period of compiling encyclopaedic works and commentaries, influenced by Western medicine."
                  />
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Container>
          <Grid container>
            <MKTypography variant="h3" mt={6} mb={3}>
              The practice of Traditional Chinese Medicine
            </MKTypography>

            <MKBox
              component="img"
              src="https://www.ctnaturalhealth.com/wp-content/uploads/2019/04/chineseMedicine.jpg"
              alt="Traditional Chinese Medicine"
              borderRadius="lg"
              width="100%"
              mb={3}
              sx={{ maxHeight: "300px", objectFit: "cover" }}
            />

            <MKTypography variant="body2" color="text" sx={{ textAlign: "justify" }}>
              Traditional Chinese medicine employs a wide range of techniques and remedies to
              restore balance and harmony in the body. Treatments may include{" "}
              <b>
                <i>acupuncture</i>
              </b>
              ,{" "}
              <b>
                <i>acupressure</i>
              </b>
              ,{" "}
              <b>
                <i>moxibustion</i>
              </b>{" "}
              (a therapy involving the burning of moxa), or cupping, where heated glass cups are
              applied to the skin to increase blood flow. Additionally, Chinese healers often
              prescribe herbal brews made from a combination of thousands of medicinal plants or
              dried animal parts, such as snakes, scorpions, insects, or deer antlers, which are
              integral to their extensive pharmaceutical practices.
            </MKTypography>
          </Grid>
        </Container>

        {/* <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
          <CenteredBlogCard
            image="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            title="Get insights on Search"
            description="Website visitors today demand a frictionless user expericence — especially when using search. Because of the hight standards."
            action={{
              type: "internal",
              route: "pages/company/about-us",
              color: "info",
              label: "find out more",
            }}
          />
        </Grid> */}
      </Container>
    </MKBox>
  );
}

export default Information;
