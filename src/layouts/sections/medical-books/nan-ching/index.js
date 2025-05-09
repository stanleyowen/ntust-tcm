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
        { label: "Medical Books", route: "/sections/classics/medical-books" },
        { label: "The Classic of Nan-Ching" },
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
              The Classic of Nan-Ching
            </MKTypography>

            <MKTypography variant="h5" mb={3}>
              Introduction
            </MKTypography>

            <MKTypography variant="body2" color="text" sx={{ textAlign: "justify" }} mb={3}>
              The Classic of Nan-Ching, also known as the Nan Jing (難經) or The Classic of
              Difficult Issues, is one of the most important books in the history of Traditional
              Chinese Medicine (TCM). Its full name is Huangdi Bashiyi Nan Jing (黃帝八十一難經),
              which means “The Yellow Emperor's Classic of Eighty-One Difficult Issues.”
            </MKTypography>

            <MKTypography variant="body2" color="text" sx={{ textAlign: "justify" }} mb={3}>
              This book was written a long time ago, most likely in the first century CE, during or
              just after the Han dynasty in China. Although we don't know exactly who wrote it, the
              ideas inside the book have had a major influence on how Chinese medicine is practiced,
              not just in China but also in places like Japan, where it became a key reference in
              Japanese acupuncture and traditional Japanese medicine (TJM).
            </MKTypography>

            <MKTypography variant="h5" mb={3}>
              Why is it called the Classic of "Difficult Issues"?
            </MKTypography>

            <MKTypography variant="body2" color="text" sx={{ textAlign: "justify" }} mb={3}>
              The Nan Jing is made up of 81 chapters, and each one tries to answer a “difficult
              question” that was unclear or confusing in another famous medical book: the Huangdi
              Neijing (黃帝內經), or Yellow Emperor’s Inner Classic. The Neijing was the first great
              book of Chinese medicine, but some parts of it were hard to understand. The Nan Jing
              was written to help explain those tricky parts more clearly.
            </MKTypography>

            <MKTypography variant="body2" color="text" sx={{ textAlign: "justify" }} mb={3}>
              The Nan Jing is written in a question-and-answer format, just like a conversation
              between a student and a wise teacher. Each chapter focuses on one important issue in
              Chinese medicine and gives a detailed explanation.
            </MKTypography>

            <MKTypography variant="h5" mb={3}>
              Topics Covered in the Nan Jing
            </MKTypography>

            <MKTypography variant="body2" color="text" sx={{ textAlign: "justify" }} mb={3}>
              The Nan Jing covers many important topics in Chinese medicine, especially things that
              were not fully explained in the Neijing. These include:
              <Container>
                <ul>
                  <li>
                    <b>Pulse Diagnosis</b>: how to understand the health of a person just by feeling
                    their pulse.
                  </li>
                  <li>
                    <b>The Organs</b>: how the heart, liver, lungs, kidneys, spleen, and others work
                    together.
                  </li>
                  <li>
                    <b>Meridians (經絡)</b>: the invisible energy pathways in the body that connect
                    organs and are used in acupuncture.
                  </li>
                  <li>
                    <b>Acupuncture Points and Techniques</b>: how to locate and use acupuncture
                    points to treat illness.
                  </li>
                  <li>
                    <b>The Eight Extraordinary Meridians (奇經八脈)</b>: special channels in the
                    body that store energy and help regulate the body's balance.
                  </li>
                  <li>
                    <b>The Mingmen (命門), or Gate of Life</b>: a concept that sees the right kidney
                    as the source of our original energy and life force.
                  </li>
                </ul>
              </Container>
            </MKTypography>
          </Grid>
        </Grid>
      </MKBox>
    </BaseLayout>
  );
}

export default Navbars;
