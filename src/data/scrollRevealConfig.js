export const defaultProps = {
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  distance: "30px",
  duration: 1000,
  desktop: true,
  mobile: true,
};

export const targetElements = [
  {
    element: ".section-title",
    animation: {
      delay: 300,
      distance: "0px",
      origin: "bottom",
    },
  },
  {
    element: ".hero-title",
    animation: {
      delay: 500,
      origin: window.innerWidth > 768 ? "left" : "bottom",
    },
  },
  {
    element: ".hero-cta",
    animation: {
      delay: 1000,
      origin: window.innerWidth > 768 ? "left" : "bottom",
    },
  },
  {
    element: ".hero-image",
    animation: {
      delay: 800,
      origin: window.innerWidth > 768 ? "right" : "bottom",
    },
  },
  {
    element: ".about-wrapper__image",
    animation: {
      delay: 600,
      origin: "bottom",
    },
  },
  {
    element: ".about-wrapper__info",
    animation: {
      delay: 1000,
      origin: window.innerWidth > 768 ? "left" : "bottom",
    },
  },
  {
    element: ".skills-wrapper__info",
    animation: {
      delay: 500,
      origin: "bottom",
    },
  },
  {
    element: ".project-wrapper__text",
    animation: {
      delay: 500,
      origin: window.innerWidth > 768 ? "left" : "bottom",
    },
  },
  {
    element: ".project-wrapper__image",
    animation: {
      delay: 1000,
      origin: window.innerWidth > 768 ? "right" : "bottom",
    },
  },
  {
    element: ".experience-card",
    animation: {
      delay: 600,
      origin: "bottom",
    },
  },
  {
    element: ".education-card",
    animation: {
      delay: 600,
      origin: "bottom",
    },
  },
  {
    element: ".skills-grid",
    animation: {
      delay: 600,
      origin: "bottom",
    },
  },
  {
    element: ".skill-card",
    animation: {
      delay: 200,
      origin: "bottom",
      interval: 100,
    },
  },
  {
    element: ".tools-grid",
    animation: {
      delay: 800,
      origin: "bottom",
    },
  },
  {
    element: ".tool-card",
    animation: {
      delay: 200,
      origin: "bottom",
      interval: 150,
    },
  },
  {
    element: ".github-contribution-chart",
    animation: {
      delay: 1000,
      origin: "bottom",
    },
  },
  {
    element: ".tools-title",
    animation: {
      delay: 400,
      origin: "bottom",
    },
  },
  {
    element: ".github-title",
    animation: {
      delay: 400,
      origin: "bottom",
    },
  },
  {
    element: ".contact-wrapper",
    animation: {
      delay: 800,
      origin: "bottom",
    },
  },
];
