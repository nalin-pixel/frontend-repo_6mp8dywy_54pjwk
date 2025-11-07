import React from 'react';
import CampaignHero from './components/CampaignHero';
import CampaignProcess from './components/CampaignProcess';
import VerticalTabs from './components/VerticalTabs';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <CampaignHero />
      <CampaignProcess />
      <VerticalTabs />
      <CTA />
      <footer className="bg-slate-950 py-10 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Campaign — First Asia Community Vetting Platform
      </footer>
    </div>
  );
}

export default App;
