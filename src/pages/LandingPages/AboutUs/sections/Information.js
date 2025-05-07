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
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        {/* Title */}
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
                    title="Mythical Era (29th–27th centuries BCE)"
                    description="The era of the three emperors—Fu Xi, Shennong, and Huangdi—marked the beginnings of Chinese medicine, blending myth and legend."
                  />
                </MKBox>
              </Grid>

              {/* Card 2: Bian Qiao's Era */}
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="looks_two"
                    title="Bian Qiao's Era (5th century BCE)"
                    description="A period of legendary figures like Bian Qiao, where anecdotal material and early medical practices began to emerge."
                  />
                </MKBox>
              </Grid>

              {/* Card 3: Great Practitioners */}
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="looks_3"
                    title="Great Practitioners (CE 150–300)"
                    description="The time of Zhang Zhongjing, Wang Shuhe, and Hua Tuo, who made significant contributions to Chinese medicine."
                  />
                </MKBox>
              </Grid>

              {/* Card 4: Encyclopaedic Era */}
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

        <MKTypography variant="h3" mt={6} mb={3}>
          The practice of Traditional Chinese Medicine
        </MKTypography>

        <MKBox
          component="img"
          src="https://cdn.britannica.com/27/199927-050-85B901E3/moxibustion-cones-moxa-treatment-points-top-needles.jpg"
          alt="Traditional Chinese Medicine"
          borderRadius="lg"
          width="100%"
          mb={3}
          sx={{ maxHeight: "400px", objectFit: "cover" }}
        />

        <MKTypography variant="body2" color="text" sx={{ textAlign: "justify" }}>
          Traditional Chinese medicine employs a wide range of techniques and remedies to restore
          balance and harmony in the body. Treatments may include{" "}
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
          (a therapy involving the burning of moxa), or cupping, where heated glass cups are applied
          to the skin to increase blood flow. Additionally, Chinese healers often prescribe herbal
          brews made from a combination of thousands of medicinal plants or dried animal parts, such
          as snakes, scorpions, insects, or deer antlers, which are integral to their extensive
          pharmaceutical practices.
        </MKTypography>

        <MKTypography variant="h3" mt={6} mb={3}>
          The origin of Moxibustion
        </MKTypography>

        <MKTypography variant="body2" color="text" sx={{ textAlign: "justify" }}>
          The origin of moxibustion is deeply intertwined with the discovery of fire, a pivotal
          moment in human history that not only revolutionized survival but also laid the groundwork
          for early medicine and pharmacology. Early humans, while navigating the challenges of
          their environment, discovered that fire could serve multiple purposes beyond providing
          warmth and protection. Initially, fire was used to cook food, making it easier to digest
          and enhancing its flavor. This discovery was transformative, as it allowed humans to
          consume a wider variety of foods and extract more nutrients, which contributed to their
          overall health and survival.
        </MKTypography>

        <MKBox
          component="img"
          src="https://media.istockphoto.com/id/1194512789/photo/neanderthal-or-homo-sapiens-family-cooking-animal-meat-over-bonfire-and-then-eating-it-tribe.jpg?s=612x612&w=0&k=20&c=-HUACskmDwnRH5HoVTr3IN4p09NREe9nOvfqdsTgoVk="
          alt="Traditional Chinese Medicine"
          borderRadius="lg"
          width="100%"
          mb={3}
          mt={3}
          sx={{ maxHeight: "700px", objectFit: "cover" }}
        />

        <MKTypography variant="body2" color="text" sx={{ textAlign: "justify" }}>
          Over time, humans began to observe the therapeutic effects of heat. They noticed that
          applying heat to specific areas of the body could alleviate pain, improve circulation, and
          promote healing. This realization led to the development of rudimentary techniques such as
          the ironing method, where heated objects were applied to the body to provide relief. These
          practices eventually evolved into more sophisticated methods, including moxibustion.
          Moxibustion, in particular, became a cornerstone of traditional Chinese medicine. This
          technique involves burning moxa, a dried plant material, near the skin to stimulate
          circulation and enhance the body's natural healing processes. The heat generated by the
          burning moxa was found to penetrate deeply into the body, targeting specific points to
          restore balance and harmony. This practice was not only used to treat physical ailments
          but also to prevent illnesses by strengthening the body's resistance to disease. The
          discovery of fire and its application in therapeutic practices like moxibustion marked the
          beginning of a systematic approach to healing. It demonstrated an early understanding of
          the connection between external stimuli and internal health, paving the way for the
          development of traditional medicine. These early innovations highlight the ingenuity of
          ancient humans and their ability to harness natural elements to improve their quality of
          life. Moxibustion remains a testament to this legacy, continuing to be practiced and
          revered in traditional Chinese medicine for its profound healing properties.
        </MKTypography>

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
