'use client';

import React, { useRef } from 'react';
import { Lead } from '@/types/lead';
import { useVirtualizer } from '@tanstack/react-virtual';
import { cn } from '@/lib/utils/cn';
import { useRouter } from 'next/navigation';
import { ExternalLink, MoreVertical } from 'lucide-react';

interface LeadsTableProps {
    leads: Lead[];
}

export function LeadsTable({ leads }: LeadsTableProps) {
    const parentRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const rowVirtualizer = useVirtualizer({
        count: leads.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 72,
        overscan: 10,
    });

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'New': return 'from-blue-500/10 to-blue-500/5 text-blue-400 border-blue-500/20';
            case 'Contacted': return 'from-amber-500/10 to-amber-500/5 text-amber-400 border-amber-500/20';
            case 'Qualified': return 'from-emerald-500/10 to-emerald-500/5 text-emerald-400 border-emerald-500/20';
            case 'Nurturing': return 'from-violet-500/10 to-violet-500/5 text-violet-400 border-violet-500/20';
            case 'Closed-Won': return 'from-green-500/10 to-green-500/5 text-green-400 border-green-500/20';
            case 'Closed-Lost': return 'from-rose-500/10 to-rose-500/5 text-rose-400 border-rose-500/20';
            default: return 'from-zinc-500/10 to-zinc-500/5 text-zinc-400 border-zinc-500/20';
        }
    };

    return (
        <div className="h-full flex flex-col bg-zinc-950">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-x-4 px-8 py-4 bg-zinc-900/30 backdrop-blur-md border-b border-white/5 text-[11px] font-bold text-zinc-500 uppercase tracking-[0.15em]">
                <div className="col-span-4 pl-12">Name / Company</div>
                <div className="col-span-2">Position</div>
                <div className="col-span-2">Market</div>
                <div className="col-span-2">Status</div>
                <div className="col-span-2 text-right">Last Touch</div>
            </div>

            {/* Table Body (Virtualized) */}
            <div
                ref={parentRef}
                className="flex-1 overflow-auto scrollbar-thin scrollbar-thumb-zinc-800"
            >
                <div
                    style={{
                        height: `${rowVirtualizer.getTotalSize()}px`,
                        width: '100%',
                        position: 'relative',
                    }}
                >
                    {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                        const lead = leads[virtualRow.index];
                        return (
                            <div
                                key={virtualRow.key}
                                className={cn(
                                    "absolute top-0 left-0 w-full grid grid-cols-12 gap-x-4 items-center px-8 border-b border-white/5 hover:bg-white/[0.02] transition-all duration-300 cursor-pointer group"
                                )}
                                style={{
                                    height: `${virtualRow.size}px`,
                                    transform: `translateY(${virtualRow.start}px)`,
                                }}
                                onClick={() => router.push(`/leads/${lead.id}`)}
                            >
                                <div className="col-span-4 flex items-center gap-4">
                                    <div className="p-0.5 rounded-2xl bg-gradient-to-tr from-white/10 to-transparent">
                                        <div className="w-10 h-10 rounded-[14px] bg-zinc-900 border border-white/5 overflow-hidden flex-shrink-0">
                                            <img src={lead.avatar} alt={lead.firstName} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col min-w-0">
                                        <div className="flex items-center gap-1.5">
                                            <span className="text-[14px] font-bold text-zinc-100 group-hover:text-blue-400 transition-colors truncate">
                                                {lead.firstName} {lead.lastName}
                                            </span>
                                            <ExternalLink size={12} className="text-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                        <span className="text-xs text-zinc-500 truncate mt-0.5">{lead.company}</span>
                                    </div>
                                </div>

                                <div className="col-span-2 truncate text-[13px] font-medium text-zinc-400">
                                    {lead.title}
                                </div>

                                <div className="col-span-2">
                                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-zinc-900 border border-white/5 text-zinc-400 uppercase tracking-wider">
                                        {lead.industry}
                                    </span>
                                </div>

                                <div className="col-span-2">
                                    <span className={cn(
                                        "text-[10px] font-black px-3 py-1 rounded-full border bg-gradient-to-br uppercase tracking-wide",
                                        getStatusColor(lead.status)
                                    )}>
                                        {lead.status}
                                    </span>
                                </div>

                                <div className="col-span-2 text-[12px] font-medium text-zinc-500 text-right pr-4">
                                    {new Date(lead.lastActivity).toLocaleDateString('en-US', {
                                        month: 'short',
                                        day: 'numeric',
                                        year: 'numeric'
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {leads.length === 0 && (
                    <div className="flex flex-col items-center justify-center p-20 text-zinc-600 animate-float">
                        <div className="w-20 h-20 bg-zinc-900/50 rounded-full flex items-center justify-center mb-6 border border-white/5 shadow-2xl">
                            <MoreVertical size={32} className="rotate-90" />
                        </div>
                        <p className="text-xl font-bold text-zinc-300">No signals found</p>
                        <p className="text-sm mt-2 text-center max-w-xs">Adjust your parameters to uncover potential intelligence targets.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
