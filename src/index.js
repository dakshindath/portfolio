import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { initContributionChart } from "./scripts/contributionChart";
import SideNavbar from "./scripts/sideNavbar";
import HeroParticles from "./scripts/heroParticles";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

// Wait for DOM to be loaded before initializing
document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal(targetElements, defaultProps);
  initTiltEffect();
  initContributionChart();
  // Initialize side navbar
  new SideNavbar();
  // Initialize hero particles
  new HeroParticles();
});
