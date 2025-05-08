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

function Features() {
  return (
    <BaseLayout
      breadcrumb={[
        { label: "History", route: "/pages/landing-pages/history" },
        { label: "Needle" },
      ]}
    >
      <MKBox component="section">
        <Grid container>
          <Grid item>
            <MKTypography variant="h3" mt={6} mb={3}>
              History of Needle Material
            </MKTypography>

            <MKBox
              component="img"
              src="https://www.sapiens.org/app/uploads/2019/01/01-Sewing-Needles_Adjusted_Compressed.jpg"
              alt="Traditional Chinese Medicine"
              borderRadius="lg"
              width="100%"
              mb={3}
              sx={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </Grid>

          <Grid item>
            <MKTypography variant="body2" color="text" sx={{ textAlign: "justify" }} mb={3}>
              The materials used to make acupuncture needles have changed greatly over time,
              reflecting both technological progress and deeper medical understanding. Each stage of
              this evolution—from sharp stones in the Neolithic Age to stainless steel in modern
              clinics—shows how people found new ways to improve healing with the tools they had.
            </MKTypography>
          </Grid>

          <Grid item>
            <MKBox
              component="img"
              src="https://www.science.org/cms/10.1126/sciadv.aay4573/asset/5ec572b6-321b-418c-80e6-d3929ed87de2/assets/graphic/aay4573-f6.jpeg"
              alt="Traditional Chinese Medicine"
              borderRadius="lg"
              width="60%"
              sx={{ objectFit: "cover", display: "block", margin: "0 auto" }}
            />

            <MKTypography variant="h4" mb={1} mt={3}>
              Neolithic Age (around 10,000 - 2000 BCE): Natural Materials and Early Tools
            </MKTypography>
            <MKTypography variant="body2" color="text" sx={{ textAlign: "justify" }} mb={3}>
              In the very beginning, long before written records, ancient humans relied on what
              nature provided. During the Neolithic Age, people discovered that sharp stones, later
              called Bain Stones (砭石), could be used to treat illnesses and relieve pain. These
              tools were used to cut open abscesses or stimulate the skin, similar to how
              acupuncture is practiced today. These stones weren't needles as we know them, but they
              were the starting point of the idea—that stimulating certain points on the body could
              help with healing. Later on, bone needles made from animal bones appeared. These tools
              were sharper and easier to shape than stone, making them more effective and less
              painful to use. Bamboo needles were also introduced during this time. Bamboo was more
              flexible than stone or bone and could be shaped into fine points. These early tools
              helped ancient healers experiment and begin to understand which body parts responded
              to pressure or poking.
            </MKTypography>
          </Grid>

          <Grid item>
            <MKBox
              component="img"
              src="https://www.researchgate.net/publication/284428975/figure/fig10/AS:669000073760778@1536513455753/Bronze-sewing-needles-for-sails.ppm"
              alt="Traditional Chinese Medicine"
              borderRadius="lg"
              sx={{
                objectFit: "cover",
                display: "block",
                margin: "0 auto",
                width: { xs: "80%", md: "40%", lg: "20%" },
              }}
            />

            <MKTypography variant="h4" mb={1} mt={3}>
              Shang Dynasty (c. 1600 - 1046 BCE): The Introduction of Metals
            </MKTypography>
            <MKTypography variant="body2" color="text" sx={{ textAlign: "justify" }} mb={3}>
              With the arrival of the Shang Dynasty, Chinese society entered the Bronze Age,
              bringing new materials and improved tools. This period saw the creation of bronze
              needles, which were more durable and precise than earlier stone or bone versions.
              Bronze could be shaped into thin, smooth points, allowing practitioners to insert them
              with greater accuracy. The invention of the Chinese character for "needle" (針) during
              this era reflects how important acupuncture was becoming as a medical practice.
            </MKTypography>
          </Grid>

          <Grid item>
            <MKBox
              component="img"
              src="https://rukminim2.flixcart.com/image/850/1000/js4yljk0/needle/p/v/f/emb254c-embroiderymaterial-original-imafdqxbyjgtpyft.jpeg?q=20&crop=false"
              alt="Traditional Chinese Medicine"
              borderRadius="lg"
              sx={{
                objectFit: "cover",
                display: "block",
                margin: "0 auto",
                width: { xs: "80%", md: "40%", lg: "20%" },
              }}
            />

            <MKTypography variant="h4" mb={1} mt={3}>
              Spring and Autumn Period (770 - 476 BCE): Stronger Needles for Advanced Techniques
            </MKTypography>
            <MKTypography variant="body2" color="text" sx={{ textAlign: "justify" }} mb={3}>
              As time passed, especially during the Spring and Autumn Period, iron needles began to
              replace bronze. Iron was even stronger and could be made into finer, more consistent
              shapes. This allowed for deeper needling and more advanced techniques. Iron needles
              were a major step forward, especially as acupuncture began to spread and develop into
              a more systematized form of medicine.
            </MKTypography>
          </Grid>

          <Grid item>
            <MKBox
              component="img"
              src="https://image.made-in-china.com/365f3j00HQDbZcoqYtgv/Full-Gold-Plated-Acupuncture-Needles-Aluminum-Foil-Packaging-100PCS-Box.webp"
              alt="Traditional Chinese Medicine"
              borderRadius="lg"
              sx={{
                objectFit: "cover",
                display: "block",
                margin: "0 auto",
                width: { xs: "80%", md: "40%", lg: "20%" },
              }}
            />

            <MKTypography variant="h4" mb={1}>
              Later Dynasties: Precious Metals for Healing
            </MKTypography>
            <MKTypography variant="body2" color="text" sx={{ textAlign: "justify" }} mb={3}>
              In later historical periods, acupuncture needles were also made from silver and gold.
              These materials were not only symbols of wealth but were believed to have specific
              healing properties.
              <Container>
                <ul>
                  <li>
                    {" "}
                    Silver needles were thought to help clear toxins from the body and were prized
                    for their antibacterial qualities.{" "}
                  </li>
                  <li>
                    Gold needles, on the other hand, were considered gentle and nourishing,
                    especially for treating people who were weak or elderly.
                  </li>
                </ul>
              </Container>
            </MKTypography>
          </Grid>
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

export default Features;
