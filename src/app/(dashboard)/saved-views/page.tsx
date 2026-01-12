'use client';

import React from 'react';
import { Bookmark, Search, Clock, Users, ArrowRight } from 'lucide-react';

const MOCK_SAVED_VIEWS = [
    {
        id: '1',
        name: 'High Priority Tech',
        filters: 'Industry: Technology, Size: 501-1000+',
        leadsCount: 124,
        lastAccessed: '2 hours ago',
    },
    {
        id: '2',
        name: 'New Qualified Leads',
        filters: 'Status: Qualified, Last Activity: Last 7 days',
        leadsCount: 42,
        lastAccessed: 'Yesterday',
    },
    {
        id: '3',
        name: 'Retail Expansion',
        filters: 'Industry: Retail, Size: 51-200',
        leadsCount: 89,
        lastAccessed: '3 days ago',
    }
];

export default function SavedViewsPage() {
    return (
        <div className="p-10 max-w-7xl mx-auto bg-zinc-950 min-h-full">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <div className="p-1.5 rounded-lg bg-violet-500/10 text-violet-400">
                            <Bookmark size={16} />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-violet-500/80">Segment Intelligence</span>
                    </div>
                    <h1 className="text-3xl font-black text-white tracking-tight">Saved Configurations</h1>
                    <p className="text-zinc-500 text-sm mt-2 font-medium">
                        Quickly deploy your custom audience filters and data projections.
                    </p>
                </div>
                <button className="flex items-center px-6 py-3 text-sm font-black text-white bg-blue-600 rounded-2xl hover:bg-blue-500 transition-all shadow-2xl shadow-blue-600/20 active:scale-95">
                    Deploy New Configuration
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {MOCK_SAVED_VIEWS.map((view) => (
                    <div
                        key={view.id}
                        className="group bg-zinc-900/40 border border-white/5 p-8 rounded-[2.5rem] hover:bg-white/[0.03] transition-all duration-500 cursor-pointer relative overflow-hidden backdrop-blur-xl"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-[0.02] transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-700">
                            <Bookmark size={120} />
                        </div>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-zinc-950 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:scale-110 group-hover:border-blue-500/30 transition-all">
                                <Bookmark size={24} />
                            </div>
                            <div>
                                <h3 className="font-black text-white group-hover:text-blue-400 transition-colors tracking-tight text-lg">
                                    {view.name}
                                </h3>
                                <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest mt-0.5">Preset ID: {view.id}4A</p>
                            </div>
                        </div>

                        <div className="bg-black/40 rounded-2xl p-4 border border-white/5 mb-8">
                            <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-wider mb-2">Active Parameters:</p>
                            <p className="text-xs text-zinc-400 font-medium leading-relaxed">
                                {view.filters}
                            </p>
                        </div>

                        <div className="flex items-center justify-between pt-6 border-t border-white/5">
                            <div className="flex items-center gap-3">
                                <div className="text-left flex flex-col">
                                    <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">Targets</span>
                                    <span className="text-lg font-black text-white">{view.leadsCount}</span>
                                </div>
                            </div>
                            <div className="text-right flex flex-col">
                                <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">Last Deploy</span>
                                <span className="text-xs font-bold text-zinc-400 mt-1">{view.lastAccessed}</span>
                            </div>
                        </div>

                        <div className="mt-8 flex items-center justify-center py-3 bg-white/5 rounded-xl text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 border border-blue-500/10">
                            Synchronize & View <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>
                ))}

                {/* Create New Card */}
                <div className="group border-2 border-dashed border-white/5 p-8 rounded-[2.5rem] hover:border-blue-500/30 transition-all duration-500 cursor-pointer flex flex-col items-center justify-center text-center py-20">
                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-zinc-600 group-hover:scale-110 group-hover:text-blue-500 group-hover:bg-blue-500/10 transition-all mb-4">
                        <Bookmark size={32} />
                    </div>
                    <p className="text-sm font-black text-zinc-500 uppercase tracking-widest">Define New Parameter Set</p>
                </div>
            </div>
        </div>
    );
}
