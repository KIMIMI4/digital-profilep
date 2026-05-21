TypeScript
import { Router } from './routes/router';
import { HomeRoute } from './views/Home';
import { AboutRoute } from './views/About';
import { PortfolioRoute } from './views/Portfolio';
import { ExperienceRoute } from './views/Experience';
import { SkillsRoute } from './views/Skills';
import { TestimonialsRoute } from './views/Testimonials';
import { ContactRoute } from './views/Contact';

document.addEventListener('DOMContentLoaded', () => {
  // Bind router to root element wrapper
  const router = new Router('app');

  // Page registration
  router.register(HomeRoute);
  router.register(AboutRoute);
  router.register(PortfolioRoute);
  router.register(ExperienceRoute);
  router.register(SkillsRoute);
  router.register(TestimonialsRoute);
  router.register(ContactRoute);

  // Initialize entry navigation routing
  const initialPath = window.location.pathname;
  router.navigate(initialPath === '' ? '/' : initialPath);
});
