// @mui icons
import { EmailOutlined, Instagram, GitHub } from "@mui/icons-material";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-ct-dark.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Introduction to Traditional Chinese Medicine",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <EmailOutlined />,
      link: "mailto:b11315015@mail.ntust.edu.tw",
    },
    {
      icon: <Instagram />,
      link: "https://www.instagram.com/stanleyowennn/",
    },
    {
      icon: <GitHub />,
      link: "https://github.com/stanleyowen",
    },
  ],
  menus: [
    {
      name: "history",
      items: [
        { name: "history of traditional chinese medicine", route: "/pages/landing-pages/history" },
        { name: "the origin of moxibustion", route: "/sections/history/moxibustion" },
        {
          name: "the discovery of acupuncture",
          route: "/sections/history/acupuncture",
        },
        { name: "History of Needle Material", route: "/sections/history/needles" },
      ],
    },
    {
      name: "Medical Books",
      items: [
        {
          name: "Medical Books",
          route: "/sections/medical-books/medical-books",
        },
        {
          name: "the yellow emperor's inner classic",
          route: "/sections/medical-books/the-yellow-emperors-inner-classic",
        },
        {
          name: "the classic of nan-ching",
          route: "/sections/medical-books/the-classic-of-nan-ching",
        },
        {
          name: "treatise on feberile disease caused by cold",
          route: "/sections/medical-books/treatise-on-feberile-disease-caused-by-cold",
        },
        {
          name: "Shennong's Materia Medica",
          route: "/sections/medical-books/shennongs-materia-medica",
        },
      ],
    },
    {
      name: "Classics of TCM",
      items: [
        {
          name: "Life Life Nourishing in 12 Two-Hour Periods",
          route: "/sections/navigation/pagination",
        },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Traditional Chinese Medicine by{" "}
      <MKTypography
        component="a"
        href="https://github.com/stanleyowen/"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Stanley Owen 張銘元
      </MKTypography>
      .
    </MKTypography>
  ),
};
