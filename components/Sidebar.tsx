import React from 'react';
import { Tab } from '../types';

interface SidebarProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const tabs = Object.values(Tab);

  return (
    <div className="flex flex-col w-full pr-8">
      {/* Navigation Tabs */}
      <div className="flex flex-col space-y-6">
        {tabs.map((tab) => {
          const isActive = activeTab === tab;
          const baseStyle = "w-full text-right px-6 py-3 rounded-l-md transition-all duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-[#0d1117] font-semibold";
          const activeStyle = "bg-cyan-500 text-slate-900 shadow-lg scale-105 shadow-cyan-500/20";
          const inactiveStyle = "bg-slate-800 text-cyan-400 hover:bg-cyan-500 hover:text-slate-900 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105 hover:-translate-x-2";

          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`${baseStyle} ${isActive ? activeStyle : inactiveStyle}`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* Separator */}
      <div className="my-8 border-b-2 border-slate-700/50"></div>

      {/* Download CV Button */}
      <a
        href="/cv.pdf" // Assumes cv.pdf is placed in the project's public directory.
        download="JohnDoe_CV.pdf"
        className="group flex items-center justify-end w-full text-right px-6 py-3 rounded-l-md transition-all duration-300 ease-in-out transform font-semibold bg-slate-800 text-cyan-400 hover:bg-cyan-500 hover:text-slate-900 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105 hover:-translate-x-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-[#0d1117]"
        aria-label="Download CV as PDF"
      >
        <span>Download CV</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3 transition-transform duration-300 group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      </a>
    </div>
  );
};

export default Sidebar;
