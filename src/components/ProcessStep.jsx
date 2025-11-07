import React from 'react';

const ProcessStep = ({ number, title, children }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-cyan-400 text-sm font-bold text-white shadow-inner shadow-white/20">
          {number}
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <p className="text-sm leading-6 text-white/80">{children}</p>
    </div>
  );
};

export default ProcessStep;
