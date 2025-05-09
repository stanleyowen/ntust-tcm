/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Kit 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

// @mui material components
import Icon from "@mui/material/Icon";

// @mui icons
import GitHubIcon from "@mui/icons-material/GitHub";

// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import Author from "layouts/pages/landing-pages/author";
import SignIn from "layouts/pages/authentication/sign-in";

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
      {
        name: "account",
        collapse: [
          {
            name: "sign in",
            route: "/pages/authentication/sign-in",
            component: <SignIn />,
          },
          {
            name: "sign up",
            route: "/pages/authentication/sign-in",
            component: <SignIn />,
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
            route: "/sections/classics/medical-books",
            component: <MedicalBooks />,
          },
          {
            name: "the yellow emperor's inner classic",
            route: "/sections/classics/the-yellow-emperors-inner-classic",
            component: <YellowEmperror />,
          },
          {
            name: "the classic of nan-ching",
            route: "/sections/classics/the-classic-of-nan-ching",
            component: <NanChing />,
          },
          {
            name: "treatise on feberile disease caused by cold",
            route: "/sections/classics/treatise-on-feberile-disease-caused-by-cold",
            component: <FebrileDisease />,
          },
          {
            name: "Shennong's Materia Medica",
            route: "/sections/classics/shennongs-materia-medica",
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
