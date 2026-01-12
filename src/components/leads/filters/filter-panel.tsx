'use client';

import React from 'react';
import { INDUSTRIES, COMPANY_SIZES, LEAD_STATUSES } from '@/constants/lead-constants';
import { MoreHorizontal, Filter, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

interface FilterPanelProps {
    filters: {
        industry: string;
        size: string;
        status: string;
    };
    setFilters: (filters: any) => void;
    onClear: () => void;
}

export function FilterPanel({ filters, setFilters, onClear }: FilterPanelProps) {
    const hasFilters = filters.industry !== 'All' || filters.size !== 'All' || filters.status !== 'All';

    return (
        <div className="flex flex-wrap items-center gap-4 py-6">
            <div className="flex items-center space-x-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-zinc-400">
                <Filter size={14} className="text-zinc-500" />
                <span className="text-xs font-semibold uppercase tracking-wider">Refine By</span>
            </div>

            <div className="flex flex-wrap gap-3">
                {/* Industry Filter */}
                <div className="relative group">
                    <select
                        value={filters.industry}
                        onChange={(e) => setFilters({ ...filters, industry: e.target.value })}
                        className="appearance-none bg-zinc-900/50 border border-white/10 text-zinc-300 text-[13px] font-medium rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 block w-full pl-4 pr-10 py-2.5 transition-all cursor-pointer hover:bg-zinc-800/50 outline-none"
                    >
                        <option value="All">All Industries</option>
                        {INDUSTRIES.map((industry) => (
                            <option key={industry} value={industry}>
                                {industry}
                            </option>
                        ))}
                    </select>
                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none group-hover:text-zinc-300 transition-colors" />
                </div>

                {/* Company Size Filter */}
                <div className="relative group">
                    <select
                        value={filters.size}
                        onChange={(e) => setFilters({ ...filters, size: e.target.value })}
                        className="appearance-none bg-zinc-900/50 border border-white/10 text-zinc-300 text-[13px] font-medium rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 block w-full pl-4 pr-10 py-2.5 transition-all cursor-pointer hover:bg-zinc-800/50 outline-none"
                    >
                        <option value="All">All Sizes</option>
                        {COMPANY_SIZES.map((size) => (
                            <option key={size} value={size}>
                                {size}
                            </option>
                        ))}
                    </select>
                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none group-hover:text-zinc-300 transition-colors" />
                </div>

                {/* Status Filter */}
                <div className="relative group">
                    <select
                        value={filters.status}
                        onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                        className="appearance-none bg-zinc-900/50 border border-white/10 text-zinc-300 text-[13px] font-medium rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 block w-full pl-4 pr-10 py-2.5 transition-all cursor-pointer hover:bg-zinc-800/50 outline-none"
                    >
                        <option value="All">All Statuses</option>
                        {LEAD_STATUSES.map((status) => (
                            <option key={status} value={status}>
                                {status}
                            </option>
                        ))}
                    </select>
                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none group-hover:text-zinc-300 transition-colors" />
                </div>

                {hasFilters && (
                    <button
                        onClick={onClear}
                        className="flex items-center px-4 py-2.5 text-[13px] font-semibold text-rose-400 hover:text-rose-300 bg-rose-500/5 hover:bg-rose-500/10 border border-rose-500/20 rounded-xl transition-all"
                    >
                        <X size={14} className="mr-2" />
                        Reset Filters
                    </button>
                )}
            </div>

            <div className="ml-auto">
                <button className="p-2.5 text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl transition-all border border-white/10">
                    <MoreHorizontal size={18} />
                </button>
            </div>
        </div>
    );
}
