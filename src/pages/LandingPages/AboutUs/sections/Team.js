// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function Team() {
  return (
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
            The Role of Technology in Modernizing Traditional Chinese Medicine
          </MKTypography>
          <MKTypography variant="body2" color="white" opacity={0.8} mt={3} textAlign="justify">
            In recent years, the fusion of Traditional Chinese Medicine (TCM) with modern
            technology—particularly artificial intelligence—has opened new avenues for its
            modernization, preservation, and global integration. Ancient medical texts are now being
            digitized using optical character recognition (OCR) and natural language processing
            (NLP), creating searchable databases that allow researchers to uncover patterns across
            centuries of medical knowledge.
          </MKTypography>

          <MKBox
            component="img"
            src="https://largeformatscanners.com/wp-content/uploads/2024/03/BE5-V3A_RENDER_DIAGONAL_BOOK_UP.png"
            alt="Traditional Chinese Medicine"
            borderRadius="lg"
            width="50%"
            mb={4}
            mt={4}
            sx={{ maxHeight: "500px", objectFit: "cover" }}
          />
          <MKBox
            component="img"
            src="https://capacity.com/wp-content/uploads/2021/01/Natural-language-processing-1024x532.png"
            alt="Traditional Chinese Medicine"
            borderRadius="lg"
            width="50%"
            mb={4}
            mt={4}
            sx={{ maxHeight: "500px", objectFit: "cover" }}
          />

          <MKTypography variant="body2" color="white" opacity={0.8} mt={3} textAlign="justify">
            AI technologies are enhancing various aspects of TCM, including drug discovery, symptom
            analysis, data mining, quality standardization, and industrial processes. For instance,
            machine learning algorithms can process vast datasets to identify potential therapeutic
            compounds from herbal medicines, accelerating the development of new treatments.
            AI-driven data mining also aids in standardizing treatment protocols and extracting
            insights from historical case records, helping ensure consistency and reliability in
            practice. Mobile health applications and wearable devices are further supporting this
            integration by monitoring vital signs and energy flow, thereby augmenting practices such
            as acupuncture and moxibustion with real-time data. Despite ongoing challenges—such as
            limited pharmacological validation, data quality issues, and the complexity of modeling
            traditional diagnostic logic—these technological advancements represent a significant
            step toward bridging traditional healing wisdom with contemporary scientific innovation.
            They promise not only increased efficacy but also broader acceptance and accessibility
            of TCM in the global healthcare landscape.
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
