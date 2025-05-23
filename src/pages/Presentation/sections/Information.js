// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Feel the beauty of
                    <br />
                    Traditional Chinese Medicine
                  </>
                }
                description="Explore the rich history and profound knowledge of Traditional Chinese Medicine."
              />
              <RotatingCardBack
                image={bgBack}
                title="Discover More"
                description="Dive deeper into the world of Traditional Chinese Medicine and uncover its secrets."
                action={{
                  type: "internal",
                  route: "/pages/landing-pages/history",
                  label: "start exploring",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="history_edu"
                  title="Ancient Wisdom"
                  description="With over 3,000 years of history, TCM is rooted in ancient practices and knowledge passed down through generations."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="spa"
                  title="Natural Remedies"
                  description="TCM utilizes natural herbs, acupuncture, and other techniques to promote healing without relying on synthetic drugs."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="shield"
                  title="Preventive Care"
                  description="TCM emphasizes prevention by maintaining balance and harmony in the body to avoid illnesses before they occur."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="healing"
                  title="Holistic Healing"
                  description="Traditional Chinese Medicine focuses on treating the root cause of illnesses by restoring balance and harmony in the body."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
