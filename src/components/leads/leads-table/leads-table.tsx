'use client';

import React, { useRef } from 'react';
import { Lead } from '@/types/lead';
import { useVirtualizer } from '@tanstack/react-virtual';
import { cn } from '@/lib/utils/cn';
import { useRouter } from 'next/navigation';

interface LeadsTableProps {
    leads: Lead[];
}

export function LeadsTable({ leads }: LeadsTableProps) {
    const parentRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const rowVirtualizer = useVirtualizer({
        count: leads.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 64,
        overscan: 10,
    });

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'New': return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
            case 'Contacted': return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
            case 'Qualified': return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';
            case 'Nurturing': return 'bg-purple-500/10 text-purple-500 border-purple-500/20';
            case 'Closed-Won': return 'bg-green-500/10 text-green-500 border-green-500/20';
            case 'Closed-Lost': return 'bg-red-500/10 text-red-500 border-red-500/20';
            default: return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
        }
    };

    return (
        <div className="h-full flex flex-col bg-black">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-x-4 px-8 py-3 bg-gray-950/60 border-b border-gray-800 text-xs font-semibold text-gray-500 uppercase tracking-widest uppercase">
                <div className="col-span-4 pl-8">Name / Company</div>
                <div className="col-span-2">Title</div>
                <div className="col-span-2">Industry</div>
                <div className="col-span-2">Status</div>
                <div className="col-span-2">Last Activity</div>
            </div>

            {/* Table Body (Virtualized) */}
            <div
                ref={parentRef}
                className="flex-1 overflow-auto scrollbar-thin scrollbar-thumb-gray-800"
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
                                key={virtualRow.index}
                                className={cn(
                                    "absolute top-0 left-0 w-full grid grid-cols-12 gap-x-4 items-center px-8 border-b border-gray-900/50 hover:bg-gray-900/30 transition-colors cursor-pointer group"
                                )}
                                style={{
                                    height: `${virtualRow.size}px`,
                                    transform: `translateY(${virtualRow.start}px)`,
                                }}
                                onClick={() => router.push(`/leads/${lead.id}`)}
                            >
                                <div className="col-span-4 flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 overflow-hidden flex-shrink-0">
                                        <img src={lead.avatar} alt={lead.firstName} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex flex-col min-w-0">
                                        <span className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors truncate">
                                            {lead.firstName} {lead.lastName}
                                        </span>
                                        <span className="text-xs text-gray-500 truncate">{lead.company}</span>
                                    </div>
                                </div>

                                <div className="col-span-2 truncate text-sm text-gray-400">
                                    {lead.title}
                                </div>

                                <div className="col-span-2">
                                    <span className="text-xs font-medium px-2 py-0.5 rounded bg-gray-800 text-gray-300 border border-gray-700">
                                        {lead.industry}
                                    </span>
                                </div>

                                <div className="col-span-2">
                                    <span className={cn(
                                        "text-[10px] font-bold px-2 py-0.5 rounded-full border",
                                        getStatusColor(lead.status)
                                    )}>
                                        {lead.status}
                                    </span>
                                </div>

                                <div className="col-span-2 text-xs text-gray-500">
                                    {new Date(lead.lastActivity).toLocaleDateString()}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {leads.length === 0 && (
                    <div className="flex flex-col items-center justify-center h-full text-gray-500">
                        <p className="text-lg">No leads found</p>
                        <p className="text-sm mt-1">Try adjusting your filters</p>
                    </div>
                )}
            </div>
        </div>
    );
}
