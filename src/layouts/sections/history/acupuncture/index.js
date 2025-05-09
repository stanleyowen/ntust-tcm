// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";

// @mui material components
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import AcupuntureImage from "assets/images/acupunture.png";

function Features() {
  return (
    <BaseLayout
      breadcrumb={[
        { label: "History", route: "/pages/landing-pages/history" },
        { label: "Acupuncture" },
      ]}
    >
      <MKBox component="section">
        <Grid container>
          <MKTypography variant="h3" mt={6} mb={3}>
            The Discovery of Acupuncture
          </MKTypography>

          <MKBox
            component="img"
            src="https://media.allure.com/photos/5e909f76e3986e0008731c3b/16:9/w_2240,c_limit/acupuncture.jpg"
            alt="Traditional Chinese Medicine"
            borderRadius="lg"
            width="100%"
            mb={3}
            sx={{ maxHeight: "400px", objectFit: "cover" }}
          />

          <MKTypography variant="body2" color="text" sx={{ textAlign: "justify" }} mb={3}>
            Acupuncture has its roots in the survival and healing practices of ancient humans.
            During the Stone Age in ancient China, early humans, while hunting with sharp stones and
            arrows, often sustained injuries and trauma. Through these experiences, they discovered
            that sharp tools, such as stones, could be used not only for hunting but also for
            treating wounds. For instance, when an abscess formed, they learned to cut it open to
            release pus, which facilitated healing. This marked the beginning of using tools like
            the Bain Stone (砭石) to treat abscesses and stimulate specific areas of the body.
          </MKTypography>

          <MKTypography variant="body2" color="text" sx={{ textAlign: "justify" }} mb={3}>
            Over time, these sharp stones evolved into more refined tools, eventually resembling the
            thin, sharp needles we associate with acupuncture today. Ancient practitioners observed
            that stimulating specific points on the body with these tools could relieve pain,
            improve circulation, and promote healing. This understanding laid the foundation for
            acupuncture as a therapeutic practice and a cornerstone of traditional Chinese medicine.
          </MKTypography>

          <MKBox
            component="img"
            src={AcupuntureImage}
            alt="Traditional Chinese Medicine"
            borderRadius="lg"
            width="60%"
            mb={3}
            // align center
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
                The Legacy of Acupuncture: From Primitive Tools to Advanced Therapies
              </MKTypography>

              <MKBox
                component="img"
                src="https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41598-017-18870-1/MediaObjects/41598_2017_18870_Fig5_HTML.jpg"
                alt="Traditional Chinese Medicine"
                borderRadius="lg"
                width="100%"
                mb={3}
                mt={3}
                sx={{ objectFit: "cover" }}
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

export default Features;
