'use client';

import React, { useState } from 'react';
import { useLeads } from '@/hooks/use-leads';
import { FilterPanel } from '@/components/leads/filters/filter-panel';
import { LeadsTable } from '@/components/leads/leads-table/leads-table';
import { LeadsSkeleton } from '@/components/leads/leads-table/leads-skeleton';
import { Download, Plus, Layers, Target, Users } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

export default function LeadsPage() {
    const [filters, setFilters] = useState({
        search: '',
        industry: 'All',
        size: 'All',
        status: 'All',
    });

    const { data: leads, isLoading } = useLeads(filters);

    const clearFilters = () => {
        setFilters({
            search: '',
            industry: 'All',
            size: 'All',
            status: 'All',
        });
    };

    return (
        <div className="flex flex-col h-full bg-zinc-950">
            <div className="px-8 py-8 border-b border-white/5 bg-zinc-900/10 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400">
                                <Target size={16} />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500/80">Intelligence Engine</span>
                        </div>
                        <h1 className="text-3xl font-black text-white tracking-tight flex items-center gap-3">
                            Leads Overview
                            <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-bold text-zinc-500 align-middle">
                                {leads?.length || 0} TOTAL
                            </span>
                        </h1>
                        <p className="text-zinc-500 text-sm mt-2 font-medium">
                            Real-time signals and intelligence for your sales pipeline.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="flex items-center px-4 py-2.5 text-[13px] font-bold text-zinc-400 hover:text-white bg-white/5 border border-white/10 rounded-xl transition-all hover:bg-white/10 active:scale-95">
                            <Download size={16} className="mr-2" />
                            Export Data
                        </button>
                        <button className="flex items-center px-5 py-2.5 text-[13px] font-bold text-white bg-blue-600 rounded-xl transition-all hover:bg-blue-500 shadow-xl shadow-blue-500/20 active:scale-95">
                            <Plus size={18} className="mr-2" />
                            Add Intelligence
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {[
                        { label: 'Active Leads', value: '1,284', change: '+12.5%', icon: Users, color: 'text-blue-400' },
                        { label: 'Conversion Rate', value: '4.2%', change: '+0.8%', icon: Target, color: 'text-emerald-400' },
                        { label: 'Pipeline Value', value: '$2.4M', change: '+18.2%', icon: Layers, color: 'text-violet-400' },
                    ].map((stat, i) => (
                        <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-4 hover:bg-white/[0.07] transition-all cursor-default group">
                            <div className={cn("p-3 rounded-xl bg-black border border-white/10 group-hover:scale-110 transition-transform", stat.color)}>
                                <stat.icon size={20} />
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">{stat.label}</p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-xl font-bold text-white">{stat.value}</span>
                                    <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded uppercase">{stat.change}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <FilterPanel
                    filters={filters}
                    setFilters={setFilters}
                    onClear={clearFilters}
                />
            </div>

            <div className="flex-1 overflow-hidden">
                {isLoading ? (
                    <LeadsSkeleton />
                ) : (
                    <LeadsTable leads={leads || []} />
                )}
            </div>
        </div>
    );
}
