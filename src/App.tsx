import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { AboutSection } from './components/sections/AboutSection';
import { DataLabSection } from './components/sections/DataLabSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';
import { ProjectModal } from './components/projects/ProjectModal';
import { Project } from './types';

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-[#F7F8F5] text-[#465466]">
      <Navbar />
      <main>
        <HeroSection onViewProjects={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} />
        <ProjectsSection onSelectProject={setSelectedProject} />
        <SkillsSection />
        <AboutSection />
        <DataLabSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}

export default App;
