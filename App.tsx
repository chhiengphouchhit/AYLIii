import React from 'react';
import Header from './components/Header';
import CoverPage from './components/CoverPage';
import AboutSection from './components/AboutSection';
import MissionVisionGoalSection from './components/MissionVisionGoalSection';
import ValuesSection from './components/ValuesSection';
import GoalsSection from './components/GoalsSection';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

const App: React.FC = () => {
  return (
    <div className="bg-white text-[#002B49] min-h-screen">
      <Header />
      <CoverPage />
      <main>
        <AboutSection />
        <MissionVisionGoalSection />
        <ValuesSection />
        <GoalsSection />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;