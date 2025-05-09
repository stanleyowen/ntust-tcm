// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import profilePicture from "assets/images/author.jpeg";

function Profile() {
  const references = [
    {
      citation:
        "“Traditional Chinese Medicine.” Britannica, www.britannica.com/science/traditional-Chinese-medicine.",
      link: "https://www.britannica.com/science/traditional-Chinese-medicine",
    },
    {
      citation:
        "“The Development of Traditional Chinese Medicine.” ScienceDirect, www.sciencedirect.com/science/article/pii/S2095754821000909.",
      link: "https://www.sciencedirect.com/science/article/pii/S2095754821000909",
    },
    {
      citation:
        "“Understanding Traditional Chinese Medicine Therapeutics: An Overview of the Basics and Clinical Applications.” PubMed Central, pmc.ncbi.nlm.nih.gov/articles/PMC8000828/.",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8000828/",
    },
    {
      citation:
        "“Integrating Artificial Intelligence into the Modernization of Traditional Chinese Medicine Industry.” Frontiers in Pharmacology, www.frontiersin.org/journals/pharmacology/articles/10.3389/fphar.2024.1181183/full.",
      link: "https://www.frontiersin.org/journals/pharmacology/articles/10.3389/fphar.2024.1181183/full",
    },
    {
      citation: "“Huangdi Neijing.” Wikipedia, en.wikipedia.org/wiki/Huangdi_Neijing.",
      link: "https://en.wikipedia.org/wiki/Huangdi_Neijing",
    },
    {
      citation:
        "“The Nan Jing or Classic of Difficulties.” Me and Qi, www.meandqi.com/journal/the-nan-jing-or-classic-of-difficulties.",
      link: "https://www.meandqi.com/journal/the-nan-jing-or-classic-of-difficulties",
    },
    {
      citation: "“Shanghan Lun.” Wikipedia, en.wikipedia.org/wiki/Shanghan_Lun.",
      link: "https://en.wikipedia.org/wiki/Shanghan_Lun",
    },
    {
      citation: "“Shennong Bencaojing.” Wikipedia, en.wikipedia.org/wiki/Shennong_Bencaojing.",
      link: "https://en.wikipedia.org/wiki/Shennong_Bencaojing",
    },
    {
      citation:
        "“Shen Nong Bencaojing 神農本草經.” ChinaKnowledge, www.chinaknowledge.de/Literature/Science/shennongbencaojing.html.",
      link: "http://www.chinaknowledge.de/Literature/Science/shennongbencaojing.html",
    },
  ];

  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
            <MKAvatar src={profilePicture} alt="Burce Mars" size="xxl" shadow="xl" />
          </MKBox>
          <Grid container justifyContent="center" py={6}>
            <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h3">
                  <span>Stanley Owen</span>
                  <span
                    style={{
                      // light gray
                      color: "#B0BEC5",
                    }}
                  >
                    {" "}
                    張銘元
                  </span>
                </MKTypography>
                <MKButton
                  variant="outlined"
                  color="info"
                  size="small"
                  href="https://github.com/stanleyowen"
                  target="_blank"
                >
                  Follow
                </MKButton>
              </MKBox>
              <Grid container spacing={3} mb={3}>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    26&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Followers
                  </MKTypography>
                </Grid>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    11&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Following
                  </MKTypography>
                </Grid>
              </Grid>
              <MKTypography variant="body1" fontWeight="light" color="text">
                I'm Stanley Owen, 張銘元, from Indonesia, a highly ambitious and self-motivated
                software developers with a passion for technology and innovation. Currently pursuing
                a Bachelor of Computer Science at National Taiwan University of Science and
                Technology. This website is a school project for my Traditional Chinese Medicine
                course, where I combine my knowledge of technology and traditional Chinese medicine.
                Any feedback or questions? Feel free to reach out!
                <br />
                <MKTypography
                  component="a"
                  href="https://github.com/stanleyowen"
                  target="_blank"
                  variant="body1"
                  fontWeight="light"
                  color="info"
                  mt={3}
                  mb={8}
                  sx={{
                    width: "max-content",
                    display: "flex",
                    alignItems: "center",

                    "& .material-icons-round": {
                      transform: `translateX(3px)`,
                      transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                    },

                    "&:hover .material-icons-round, &:focus .material-icons-round": {
                      transform: `translateX(6px)`,
                    },
                  }}
                >
                  More about me <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
                </MKTypography>
              </MKTypography>

              <MKBox display="flex" flexDirection="column">
                <MKTypography variant="h5" mb={2}>
                  References
                </MKTypography>
                {references.map((ref, index) => (
                  <MKBox key={index} mb={2}>
                    <MKTypography variant="body2" color="text" mb={1}>
                      {ref.citation}
                    </MKTypography>
                    <MKTypography
                      component="a"
                      href={ref.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="body2"
                      color="info"
                    >
                      {ref.link}
                    </MKTypography>
                  </MKBox>
                ))}
              </MKBox>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Profile;
