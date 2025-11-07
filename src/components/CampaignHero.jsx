import React from 'react';

const CampaignHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-[48rem] w-[48rem] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 right-1/3 h-[36rem] w-[36rem] rounded-full bg-cyan-400/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <span className="inline-block rounded-full bg-white/5 px-3 py-1 text-xs font-medium ring-1 ring-white/10">First Asia Community Vetting Platform</span>
        <h1 className="mt-6 text-3xl font-semibold tracking-tight sm:text-5xl">
          Campaign: where real community actions power trustworthy impact
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          We bridge mission-driven organizations with their communities. Through transparent challenges and verified actions, supporters help surface the most trusted, high-impact programs.
        </p>
      </div>
    </section>
  );
};

export default CampaignHero;
