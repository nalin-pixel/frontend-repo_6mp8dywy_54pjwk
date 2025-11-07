import React from 'react';

const CTA = () => {
  return (
    <section className="relative bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-600/20 to-cyan-500/20 p-8 sm:p-10">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">Ready to run a community-vetted campaign?</h3>
              <p className="mt-2 max-w-2xl text-white/80">Invite your community, design verified actions, and make trust measurable.</p>
            </div>
            <div className="flex gap-3">
              <a href="#" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-black/20 transition hover:scale-[1.02]">
                Get Started
              </a>
              <a href="#" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/10">
                Talk to us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
