'use client';

import React, { useState } from 'react';
import { useLeads } from '@/hooks/use-leads';
import { FilterPanel } from '@/components/leads/filters/filter-panel';
import { LeadsTable } from '@/components/leads/leads-table/leads-table';
import { LeadsSkeleton } from '@/components/leads/leads-table/leads-skeleton';
import { Search, Download, Plus } from 'lucide-react';

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
        <div className="flex flex-col h-full">
            <div className="px-8 py-6 border-b border-gray-800 bg-gray-950/30">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-white tracking-tight">Leads</h1>
                        <p className="text-gray-400 text-sm mt-1">
                            Manage and track your potential customers
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-300 hover:text-white bg-gray-900 border border-gray-800 rounded-lg transition-all hover:bg-gray-800">
                            <Download size={18} className="mr-2" />
                            Export
                        </button>
                        <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg transition-all hover:bg-blue-700 shadow-lg shadow-blue-500/20">
                            <Plus size={18} className="mr-2" />
                            Add Lead
                        </button>
                    </div>
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
