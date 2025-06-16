import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import ProfileSetup from './components/ProfileSetup';
import SimulationIntro from './components/SimulationIntro';
import DashboardPreview from './components/DashboardPreview';
import NotificationPrefs from './components/NotificationPrefs';
import FinalStep from './components/FinalStep';

const App = () => {
  const [step, setStep] = useState(0);
  const next = () => setStep(step + 1);

  const screens = [
    <WelcomeScreen onNext={next} />,
    <ProfileSetup onNext={next} />,
    <SimulationIntro onNext={next} />,
    <DashboardPreview onNext={next} />,
    <NotificationPrefs onNext={next} />,
    <FinalStep />
  ];

  return <div className="min-h-screen bg-gray-100 flex items-center justify-center">{screens[step]}</div>;
};

export default App;
