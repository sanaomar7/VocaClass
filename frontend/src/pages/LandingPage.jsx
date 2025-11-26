// frontend/src/pages/LandingPage.jsx
import Hero from '../components/hero/Hero.jsx';
import VisionSection from '../components/sections/VisionSection.jsx';
import VocaSection from '../components/sections/VocaSection.jsx';
import PreschoolSection from '../components/sections/PreschoolSection.jsx';
import TestimonialsSection from '../components/sections/TestimonialsSection.jsx';
import TeamSection from '../components/sections/TeamSection.jsx';
import ContactSection from '../components/sections/ContactSection.jsx';

const LandingPage = () => {
  return (
   <>
      <Hero />
      <VisionSection />
      <VocaSection />
      <PreschoolSection />
      <TestimonialsSection />
      <TeamSection />
      <ContactSection />
    </>
  );
};

export default LandingPage;
