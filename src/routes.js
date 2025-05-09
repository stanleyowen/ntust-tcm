// @mui material components
import Icon from "@mui/material/Icon";

// @mui icons
import GitHubIcon from "@mui/icons-material/GitHub";

// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import Author from "layouts/pages/landing-pages/author";

// Sections
import Moxibustion from "layouts/sections/history/moxibustion";
import Acupuncture from "layouts/sections/history/acupuncture";
import Needle from "layouts/sections/history/needle";
import MedicalBooks from "layouts/sections/medical-books/medical-books";
import YellowEmperror from "layouts/sections/medical-books/yellow-emperor";
import NanChing from "layouts/sections/medical-books/nan-ching";
import FebrileDisease from "layouts/sections/medical-books/feberile-disease";
import MateriaMedica from "layouts/sections/medical-books/materia-medica";
import TwelveHour from "layouts/sections/classics/12-hour";

const routes = [
  {
    name: "Introduction",
    icon: <Icon>dashboard</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "landing pages",
        collapse: [
          {
            name: "history of TCM",
            route: "/pages/landing-pages/history",
            component: <AboutUs />,
          },
          {
            name: "author",
            route: "/pages/landing-pages/author",
            component: <Author />,
          },
        ],
      },
    ],
  },
  {
    name: "sections",
    icon: <Icon>view_day</Icon>,
    collapse: [
      {
        name: "history",
        description: "See all history",
        dropdown: true,
        collapse: [
          {
            name: "the origin of moxibustion",
            route: "/sections/history/moxibustion",
            component: <Moxibustion />,
          },
          {
            name: "the discovery of acupuncture",
            route: "/sections/history/acupuncture",
            component: <Acupuncture />,
          },
          {
            name: "the history of needle materials",
            route: "/sections/history/needles",
            component: <Needle />,
          },
        ],
      },
      {
        name: "medical books",
        description: "The medical books of TCM",
        dropdown: true,
        collapse: [
          {
            name: "Medical Books",
            route: "/sections/medical-books",
            component: <MedicalBooks />,
          },
          {
            name: "the yellow emperor's inner classic",
            route: "/sections/medical-books/the-yellow-emperors-inner-classic",
            component: <YellowEmperror />,
          },
          {
            name: "the classic of nan-ching",
            route: "/sections/medical-books/the-classic-of-nan-ching",
            component: <NanChing />,
          },
          {
            name: "treatise on feberile disease caused by cold",
            route: "/sections/medical-books/treatise-on-feberile-disease-caused-by-cold",
            component: <FebrileDisease />,
          },
          {
            name: "Shennong's Materia Medica",
            route: "/sections/medical-books/shennongs-materia-medica",
            component: <MateriaMedica />,
          },
        ],
      },
      {
        name: "classics",
        description: "The classics of TCM",
        dropdown: true,
        collapse: [
          {
            name: "Life Nourishing in 12 Two-Hour Periods",
            route: "/sections/navigation/pagination",
            component: <TwelveHour />,
          },
        ],
      },
    ],
  },
  {
    name: "github",
    icon: <GitHubIcon />,
    href: "https://github.com/stanleyowen/ntust-tcm",
  },
];

export default routes;
