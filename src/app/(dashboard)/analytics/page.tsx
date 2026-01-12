'use client';

import React from 'react';
import {
    BarChart3,
    TrendingUp,
    ArrowUpRight,
    ArrowDownRight,
    PieChart,
    Activity,
    Globe,
    Zap,
    Users,
    ChevronDown,
    Calendar,
    Download
} from 'lucide-react';
import { cn } from '@/lib/utils/cn';

export default function AnalyticsPage() {
    return (
        <div className="flex flex-col h-full bg-zinc-950 overflow-y-auto custom-scrollbar">
            <div className="px-10 py-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <div className="p-1 px-2 rounded-md bg-blue-500/10 border border-blue-500/20 text-[10px] font-black uppercase tracking-[0.25em] text-blue-500">
                                Global Analytics
                            </div>
                        </div>
                        <h1 className="text-4xl font-black text-white tracking-tighter sm:text-5xl">
                            Performance <span className="text-zinc-500">Metrics</span>
                        </h1>
                        <p className="text-zinc-500 text-lg mt-3 font-medium max-w-lg">
                            Deep dive into your market coverage and conversion signals.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-2xl px-4 py-3 cursor-pointer hover:bg-white/10 transition-all">
                            <Calendar size={18} className="text-zinc-500" />
                            <span className="text-sm font-bold text-zinc-300">All Time</span>
                            <ChevronDown size={16} className="text-zinc-500" />
                        </div>
                        <button className="flex items-center px-6 py-3 text-sm font-black text-white bg-white/5 border border-white/10 rounded-2xl transition-all hover:bg-white/10 active:scale-95">
                            <Download size={18} className="mr-2" />
                            Export Data
                        </button>
                    </div>
                </div>

                {/* Growth Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {[
                        { label: 'Capture Rate', value: '78.4%', trend: '+12.5%', up: true, subtitle: 'Vs last 30 days' },
                        { label: 'Signal Velocity', value: '1.2s', trend: '-0.3s', up: true, subtitle: 'Average response' },
                        { label: 'Market Depth', value: '$8.2M', trend: '+4.2%', up: true, subtitle: 'Qualified pipeline' }
                    ].map((stat, i) => (
                        <div key={i} className="p-8 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
                            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-2">{stat.label}</p>
                            <div className="flex items-baseline gap-4 mb-4">
                                <span className="text-4xl font-black text-white tracking-tighter">{stat.value}</span>
                                <div className={cn("flex items-center gap-1 text-[11px] font-black px-2 py-0.5 rounded border uppercase tracking-wider",
                                    stat.up ? "text-emerald-500 bg-emerald-500/10 border-emerald-500/20" : "text-rose-500 bg-rose-500/10 border-rose-500/20"
                                )}>
                                    {stat.trend}
                                </div>
                            </div>
                            <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest leading-none">{stat.subtitle}</p>
                        </div>
                    ))}
                </div>

                {/* Charts Placeholder Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Primary Chart */}
                    <div className="p-8 rounded-[3rem] bg-zinc-900/20 border border-white/5 relative overflow-hidden group min-h-[400px]">
                        <div className="flex items-center justify-between mb-10">
                            <div>
                                <h3 className="text-xl font-black text-white tracking-tight">Signal Distribution</h3>
                                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1">Cross-industry analysis</p>
                            </div>
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-blue-500" />
                                <div className="w-3 h-3 rounded-full bg-violet-500" />
                                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                            </div>
                        </div>

                        <div className="flex items-end justify-between gap-4 h-56 relative border-b border-white/5 pb-2">
                            {[40, 70, 55, 90, 65, 85, 50, 75, 95, 60, 80, 45].map((h, i) => (
                                <div key={i} className="flex-1 group/bar relative">
                                    <div
                                        className="w-full bg-blue-600/20 group-hover/bar:bg-blue-600/40 rounded-t-lg transition-all duration-700 relative"
                                        style={{ height: `${h}%` }}
                                    >
                                        <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500 rounded-t-lg" />
                                    </div>
                                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] font-black text-zinc-700 uppercase tracking-widest">W{i + 1}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Secondary Insights */}
                    <div className="space-y-8">
                        <div className="p-8 rounded-[3.5rem] bg-gradient-to-br from-blue-600/10 to-transparent border border-white/5">
                            <h3 className="text-xl font-black text-white tracking-tight mb-6">Market Sector Velocity</h3>
                            <div className="space-y-5">
                                {[
                                    { label: 'Technology', value: 85, color: 'bg-blue-500' },
                                    { label: 'Quantum Computing', value: 64, color: 'bg-violet-500' },
                                    { label: 'Aerospace', value: 42, color: 'bg-emerald-500' },
                                    { label: 'BioEngineering', value: 28, color: 'bg-amber-500' }
                                ].map((sector, i) => (
                                    <div key={i} className="space-y-2">
                                        <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest">
                                            <span className="text-zinc-400">{sector.label}</span>
                                            <span className="text-white">{sector.value}%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                            <div className={cn("h-full rounded-full transition-all duration-1000", sector.color)} style={{ width: `${sector.value}%` }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-8 rounded-[3.5rem] bg-zinc-900/30 border border-white/5 flex items-center gap-6">
                            <div className="w-20 h-20 rounded-full border-4 border-blue-500/20 border-t-blue-500 flex items-center justify-center relative">
                                <Zap className="text-blue-500 animate-pulse" size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-black text-white tracking-tight">AI Optimizing...</h4>
                                <p className="text-xs text-zinc-500 font-medium leading-relaxed max-w-[200px]">Our neural engine is recalculating market signals based on recent shifts.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
