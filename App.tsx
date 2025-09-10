import React, { useState } from 'react';
import ProfileImage from './components/ProfileImage';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import BinaryMarquee from './components/BinaryMarquee';
import { Tab } from './types';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.Profile);

  return (
    <div className="bg-[#0d1117] text-slate-300 min-h-screen flex font-mono">
      <BinaryMarquee />

      {/* Left: Profile Image */}
      <aside className="w-[35%] lg:w-[30%] h-screen sticky top-0">
        <ProfileImage />
      </aside>

      {/* Center: Content */}
      <main className="w-[65%] lg:w-[50%] px-8 md:px-16 pb-12 pt-24 overflow-y-auto">
        <Content activeTab={activeTab} />
      </main>

      {/* Right: Sidebar */}
      <nav className="hidden lg:flex w-[20%] sticky top-0 h-screen items-center justify-center">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </nav>
    </div>
  );
}

export default App;