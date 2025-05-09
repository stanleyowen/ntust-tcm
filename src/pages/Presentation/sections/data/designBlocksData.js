const imagesPrefix =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections";

export default [
  {
    title: "History of Traditional Chinese Medicine",
    description:
      "Explore the fascinating journey of Traditional Chinese Medicine, from its ancient origins to its profound influence on modern healthcare practices.",
    items: [
      {
        image: `${imagesPrefix}/headers.jpg`,
        name: "Introduction to Traditional Chinese Medicine",
        route: "/pages/landing-pages/history",
      },
      {
        image: `${imagesPrefix}/features.jpg`,
        name: "The Origin of Moxibustion",
        route: "/sections/history/moxibustion",
      },
      {
        image: `${imagesPrefix}/pricing.jpg`,
        name: "History of Needle Material",
        route: "/sections/history/needles",
      },
    ],
  },
  {
    title: "Medical Books",
    description:
      "Delve into the wisdom of ancient medical texts that have shaped Traditional Chinese Medicine for centuries, offering insights into holistic healing and natural remedies.",
    items: [
      {
        image: `${imagesPrefix}/navbars.jpg`,
        name: "Introduction to Medical Books",
        route: "/sections/medical-books",
      },
      {
        image: `${imagesPrefix}/navbars.jpg`,
        name: "The Yellow Emperor's Inner Classic",
        route: "/sections/medical-books/the-yellow-emperors-inner-classic",
      },
      {
        image: `${imagesPrefix}/navbars.jpg`,
        name: "The Classic of Nan-Ching",
        route: "/sections/medical-books/the-classic-of-nan-ching",
      },
      {
        image: `${imagesPrefix}/navbars.jpg`,
        name: "Treatise on Feverile Disease Caused by Cold",
        route: "/sections/medical-books/treatise-on-feberile-disease-caused-by-cold",
      },
      {
        image: `${imagesPrefix}/navbars.jpg`,
        name: "Shennong's Materia Medica",
        route: "/sections/medical-books/shennongs-materia-medica",
      },
    ],
  },
  {
    title: "Classics of TCM",
    description:
      "Uncover the timeless classics of Traditional Chinese Medicine, revealing the secrets of life balance, energy flow, and the art of living in harmony with nature.",
    items: [
      {
        image: `${imagesPrefix}/newsletters.jpg`,
        name: "Life Nourishing in 12 Two-Hour Periods",
        route: "/sections/navigation/pagination",
      },
    ],
  },
];
