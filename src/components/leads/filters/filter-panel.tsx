'use client';

import React from 'react';
import { INDUSTRIES, COMPANY_SIZES, LEAD_STATUSES } from '@/constants/lead-constants';
import { MoreHorizontal, Filter, X } from 'lucide-react';
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
        <div className="flex flex-wrap items-center gap-3 py-4 lg:py-6">
            <div className="flex items-center text-sm font-medium text-gray-400 mr-2">
                <Filter size={16} className="mr-2" />
                Filters:
            </div>

            <div className="flex flex-wrap gap-2">
                {/* Industry Filter */}
                <select
                    value={filters.industry}
                    onChange={(e) => setFilters({ ...filters, industry: e.target.value })}
                    className="bg-gray-900 border border-gray-800 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 transition-colors cursor-pointer"
                >
                    <option value="All">All Industries</option>
                    {INDUSTRIES.map((industry) => (
                        <option key={industry} value={industry}>
                            {industry}
                        </option>
                    ))}
                </select>

                {/* Company Size Filter */}
                <select
                    value={filters.size}
                    onChange={(e) => setFilters({ ...filters, size: e.target.value })}
                    className="bg-gray-900 border border-gray-800 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 transition-colors cursor-pointer"
                >
                    <option value="All">All Sizes</option>
                    {COMPANY_SIZES.map((size) => (
                        <option key={size} value={size}>
                            {size}
                        </option>
                    ))}
                </select>

                {/* Status Filter */}
                <select
                    value={filters.status}
                    onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                    className="bg-gray-900 border border-gray-800 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 transition-colors cursor-pointer"
                >
                    <option value="All">All Statuses</option>
                    {LEAD_STATUSES.map((status) => (
                        <option key={status} value={status}>
                            {status}
                        </option>
                    ))}
                </select>

                {hasFilters && (
                    <button
                        onClick={onClear}
                        className="flex items-center px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors border border-dashed border-gray-800"
                    >
                        <X size={14} className="mr-1.5" />
                        Clear
                    </button>
                )}
            </div>

            <div className="ml-auto">
                <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors border border-gray-800">
                    <MoreHorizontal size={20} />
                </button>
            </div>
        </div>
    );
}
