import React from 'react';
import ProcessStep from './ProcessStep';

const CampaignProcess = () => {
  return (
    <section className="relative bg-slate-950 py-14 text-white sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between gap-8">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">How Campaign powers community vetting</h2>
            <p className="mt-2 max-w-2xl text-sm text-white/70">A transparent flow that aligns goals, activates communities, and verifies trust through real actions.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <ProcessStep number={1} title="Program Owner Goals">
            Together with the Program Owner, we defined project goals and success metrics mapping the impact we aimed to achieve and how to measure it through real community actions.
          </ProcessStep>
          <ProcessStep number={2} title="Shortlisted Applicants Engagement">
            Campaign onboarded shortlisted applicants and helped design simple, action-based challenges that reflected their mission and impact, serving as a becoming a medium for public participation.
          </ProcessStep>
          <ProcessStep number={3} title="Supporters Challenge">
            Once published on the Campaign App and Web, supporters could take meaningful, verified actions to show their trust and belief in the organizations they supported.
          </ProcessStep>
          <ProcessStep number={4} title="Campaign for Good (Selection of Community Vetting)">
            Using verified data and community insights, Campaign for Good identified top performing applicants and delivered a transparent impact report that captured the entire journey from engagement numbers to impact stories.
          </ProcessStep>
        </div>
      </div>
    </section>
  );
};

export default CampaignProcess;
