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
      name: "Classics of TCM",
      items: [
        { name: "illustrations", route: "https://iradesign.io/" },
        { name: "bits & snippets", route: "https://www.creative-tim.com/bits" },
        { name: "affiliate program", route: "https://www.creative-tim.com/affiliates/new" },
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
