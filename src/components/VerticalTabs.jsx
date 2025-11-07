import React, { useState, Fragment } from 'react';
import { Rocket, Users, Shield, CheckCircle } from 'lucide-react';

const TABS = [
  {
    key: 'goals',
    title: 'Program Owner Goals',
    icon: Rocket,
    blurb:
      'Define success metrics, eligibility, and timelines so everyone is aligned from day one.',
    details:
      'Set your objectives, KPIs, timeframe, and the kind of impact you seek. This establishes a clear, measurable direction for the community to rally behind.',
  },
  {
    key: 'engagement',
    title: 'Shortlisted Applicants Engagement',
    icon: Users,
    blurb:
      'Invite finalists to share context, prototypes, and progress so the community can evaluate meaningfully.',
    details:
      'Create a structured space for shortlisted teams to present artifacts—videos, demos, roadmaps—so reviewers and supporters can compare apples to apples.',
  },
  {
    key: 'challenge',
    title: 'Supporters Challenge',
    icon: Shield,
    blurb:
      'Design a light-weight challenge that surfaces true commitment and signal from supporters.',
    details:
      'From micro-grants to attestations and reputation checks, a challenge filters noise and highlights projects with real backing and traction.',
  },
  {
    key: 'selection',
    title: 'Campaign for Good (Community Vetting)',
    icon: CheckCircle,
    blurb:
      'Transparent selection that blends expert review with community signal to fund high-impact teams.',
    details:
      'Aggregate qualitative reviews and quantitative signals to reach a fair, transparent outcome. Publish results and learnings to build trust over time.',
  },
];

function TabButton({ active, onClick, Icon, title, blurb }) {
  return (
    <button
      onClick={onClick}
      className={[
        'group w-full text-left rounded-xl p-4 transition-colors border',
        active
          ? 'bg-slate-800/70 border-slate-700'
          : 'hover:bg-slate-800/40 border-slate-800',
      ].join(' ')}
      aria-pressed={active}
    >
      <div className="flex items-start gap-3">
        <div
          className={[
            'flex h-10 w-10 items-center justify-center rounded-lg border',
            active ? 'border-slate-600 bg-slate-900' : 'border-slate-800 bg-slate-900/40',
          ].join(' ')}
        >
          <Icon
            className={active ? 'text-teal-400' : 'text-slate-400 group-hover:text-slate-200'}
            size={20}
          />
        </div>
        <div className="flex-1">
          <h4 className="text-sm font-semibold tracking-tight text-white">{title}</h4>
          <p className="mt-1 text-sm text-slate-400 leading-relaxed">{blurb}</p>
        </div>
      </div>
    </button>
  );
}

export default function VerticalTabs() {
  const [current, setCurrent] = useState(TABS[0].key);
  const activeTab = TABS.find((t) => t.key === current) || TABS[0];

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 text-center">
        <span className="inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-xs font-medium tracking-wide text-teal-300">
          Community Vetting, Simplified
        </span>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Explore the Campaign Flow
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-slate-400">
          Navigate the stages on the left to learn how Campaign helps align goals, engage applicants, and reach transparent outcomes.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-12">
        {/* Tabs list */}
        <div className="md:col-span-5 lg:col-span-4 space-y-3">
          {TABS.map((tab) => (
            <TabButton
              key={tab.key}
              active={tab.key === current}
              onClick={() => setCurrent(tab.key)}
              Icon={tab.icon}
              title={tab.title}
              blurb={tab.blurb}
            />
          ))}
        </div>

        {/* Content panel */}
        <div className="md:col-span-7 lg:col-span-8">
          <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/60 to-slate-900">
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-teal-400 shadow-[0_0_20px_2px] shadow-teal-500/40" />
                <h3 className="text-xl font-semibold text-white">{activeTab.title}</h3>
              </div>
              <p className="mt-3 text-slate-300 leading-relaxed">{activeTab.details}</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {TABS.slice(0, 2).map((sub, idx) => (
                  <Fragment key={sub.key + idx}>
                    <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                      <div className="flex items-center gap-2">
                        <sub.icon className="text-slate-300" size={18} />
                        <span className="text-sm font-medium text-white/90">Signal</span>
                      </div>
                      <p className="mt-2 text-sm text-slate-400">
                        Compare qualitative reviews and on-chain/off-chain signals to improve decision quality.
                      </p>
                    </div>
                    <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                      <div className="flex items-center gap-2">
                        <sub.icon className="text-slate-300" size={18} />
                        <span className="text-sm font-medium text-white/90">Transparency</span>
                      </div>
                      <p className="mt-2 text-sm text-slate-400">
                        Share criteria, workflows, and outcomes so participants understand how selections are made.
                      </p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-indigo-500/5" />
          </div>
        </div>
      </div>
    </section>
  );
}
