'use client';

import React from 'react';
import {
    TrendingUp,
    TrendingDown,
    Users,
    Target,
    DollarSign,
    Activity,
    ArrowUpRight,
    ArrowDownRight,
    Search,
    Filter,
    Calendar,
    ChevronRight,
    Zap,
    Briefcase,
    Globe
} from 'lucide-react';
import { cn } from '@/lib/utils/cn';

export default function DashboardPage() {
    return (
        <div className="flex flex-col h-full bg-zinc-950 overflow-y-auto custom-scrollbar pb-20">
            {/* Hero Section */}
            <div className="px-10 py-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <div className="p-1 px-2 rounded-md bg-blue-500/10 border border-blue-500/20 text-[10px] font-black uppercase tracking-[0.25em] text-blue-500">
                                System Online
                            </div>
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        </div>
                        <h1 className="text-4xl font-black text-white tracking-tighter sm:text-5xl">
                            Command <span className="text-zinc-500">Center</span>
                        </h1>
                        <p className="text-zinc-500 text-lg mt-3 font-medium max-w-lg">
                            An overview of your intelligence operations and market performance.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
                            <Calendar size={18} className="text-zinc-500" />
                            <span className="text-sm font-bold text-zinc-300">Jan 1 - Jan 7, 2026</span>
                        </div>
                        <button className="flex items-center px-6 py-3 text-sm font-black text-white bg-blue-600 rounded-2xl transition-all hover:bg-blue-500 shadow-2xl shadow-blue-500/30 active:scale-95">
                            Generate Report
                        </button>
                    </div>
                </div>

                {/* Core Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    {[
                        { label: 'Total Intelligence', value: '48,294', trend: '+14.2%', up: true, icon: Globe, color: 'blue' },
                        { label: 'Active Targets', value: '1,284', trend: '+5.1%', up: true, icon: Target, color: 'violet' },
                        { label: 'Revenue Signal', value: '$842,900', trend: '-2.4%', up: false, icon: DollarSign, color: 'emerald' },
                        { label: 'Ops Velocity', value: '94.2%', trend: '+0.8%', up: true, icon: Zap, color: 'amber' },
                    ].map((stat, i) => (
                        <div key={i} className="p-6 rounded-[2rem] bg-zinc-900/50 border border-white/5 hover:bg-zinc-800/50 transition-all duration-500 group relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:scale-125 transition-transform duration-700">
                                <stat.icon size={100} />
                            </div>
                            <div className="flex justify-between items-start mb-6">
                                <div className={cn("p-3 rounded-2xl bg-zinc-950 border border-white/10 group-hover:scale-110 transition-transform",
                                    stat.color === 'blue' ? 'text-blue-400' :
                                        stat.color === 'violet' ? 'text-violet-400' :
                                            stat.color === 'emerald' ? 'text-emerald-400' : 'text-amber-400'
                                )}>
                                    <stat.icon size={24} />
                                </div>
                                <div className={cn("flex items-center gap-1 text-[11px] font-black px-2 py-1 rounded-lg border",
                                    stat.up ? "text-emerald-500 bg-emerald-500/10 border-emerald-500/20" : "text-rose-500 bg-rose-500/10 border-rose-500/20"
                                )}>
                                    {stat.up ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                                    {stat.trend}
                                </div>
                            </div>
                            <div>
                                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-1">{stat.label}</p>
                                <p className="text-3xl font-black text-white tracking-tight">{stat.value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Activity Feed */}
                    <div className="lg:col-span-2 space-y-8">
                        <section>
                            <div className="flex items-center justify-between mb-6 px-2">
                                <h2 className="text-xl font-black text-white flex items-center gap-3 tracking-tight">
                                    <Activity className="text-blue-500" size={24} />
                                    Live Signals
                                </h2>
                                <button className="text-xs font-bold text-zinc-500 hover:text-white transition-colors uppercase tracking-widest">
                                    View Full Console
                                </button>
                            </div>
                            <div className="rounded-[2.5rem] bg-zinc-900/30 border border-white/5 overflow-hidden backdrop-blur-md">
                                {[1, 2, 3, 4].map((_, i) => (
                                    <div key={i} className="flex items-center justify-between p-6 border-b border-white/5 hover:bg-white/[0.02] transition-colors group cursor-pointer">
                                        <div className="flex items-center gap-5">
                                            <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:scale-110 transition-transform">
                                                <Briefcase size={20} />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">Strategic Partnership Detected</p>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <span className="text-xs font-medium text-zinc-500">TechNexus Corp</span>
                                                    <span className="w-1 h-1 rounded-full bg-zinc-700" />
                                                    <span className="text-[10px] font-bold text-zinc-600 uppercase">2 mins ago</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-black text-blue-400 uppercase tracking-wider">
                                                High Priority
                                            </div>
                                            <ChevronRight size={18} className="text-zinc-700 group-hover:text-white group-hover:translate-x-1 transition-all" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Chart Placeholder */}
                        <section>
                            <div className="flex items-center justify-between mb-6 px-2">
                                <h2 className="text-xl font-black text-white flex items-center gap-3 tracking-tight">
                                    <TrendingUp className="text-violet-500" size={24} />
                                    Market Trajectory
                                </h2>
                            </div>
                            <div className="h-80 rounded-[2.5rem] bg-zinc-900/30 border border-white/5 flex items-center justify-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 to-violet-600/5" />
                                <div className="flex flex-col items-center gap-4 relative z-10">
                                    <Activity className="text-zinc-700 group-hover:text-blue-500 group-hover:scale-110 transition-all duration-700" size={48} />
                                    <p className="text-[11px] font-black uppercase tracking-[0.3em] text-zinc-500">Visualization Engine Initializing...</p>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 h-40 flex items-end gap-2 px-10 pb-10 opacity-20">
                                    {[40, 70, 45, 90, 65, 80, 50, 95, 75, 85].map((h, i) => (
                                        <div key={i} className="flex-1 bg-gradient-to-t from-blue-500 to-violet-500 rounded-t-lg transition-all duration-1000" style={{ height: `${h}%` }} />
                                    ))}
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Side Sidebar Intelligence */}
                    <div className="space-y-8">
                        <section>
                            <h2 className="text-lg font-black text-white mb-6 px-2 tracking-tight">Top Prospects</h2>
                            <div className="space-y-4">
                                {[
                                    { name: 'Aether Dynamics', industry: 'Aerospace', value: '$2.4M', avatar: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop' },
                                    { name: 'Quantum Leap Solutions', industry: 'Compute', value: '$1.8M', avatar: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=100&h=100&fit=crop' },
                                    { name: 'NeuraLink Systems', industry: 'Biotech', value: '$940K', avatar: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&h=100&fit=crop' },
                                ].map((prospect, i) => (
                                    <div key={i} className="p-5 rounded-3xl bg-zinc-900/50 border border-white/5 hover:bg-zinc-800/50 transition-all cursor-pointer group">
                                        <div className="flex items-center gap-4">
                                            <img src={prospect.avatar} className="w-12 h-12 rounded-2xl object-cover border border-white/10 group-hover:scale-110 transition-transform" alt="" />
                                            <div className="flex-1">
                                                <p className="text-sm font-bold text-white mb-0.5">{prospect.name}</p>
                                                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{prospect.industry}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm font-black text-emerald-400">{prospect.value}</p>
                                                <p className="text-[8px] font-bold text-zinc-600 uppercase">Est. Value</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="w-full mt-6 py-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl text-[11px] font-black text-zinc-400 uppercase tracking-[0.2em] transition-all">
                                Load More Intel
                            </button>
                        </section>

                        <section className="p-8 rounded-[2.5rem] bg-gradient-to-br from-blue-600 to-indigo-700 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-6 opacity-20 rotate-12 group-hover:scale-125 transition-transform duration-700">
                                <Zap size={80} />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-xl font-black text-white mb-2 leading-tight">Identify High-Value Targets with AI</h3>
                                <p className="text-blue-100/70 text-sm mb-6 font-medium">Our neural engine analyzes thousands of signals to find your next major account.</p>
                                <button className="w-full py-4 bg-white text-blue-600 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-blue-50 transition-all shadow-xl active:scale-95">
                                    Activate AI Engine
                                </button>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
