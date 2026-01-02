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
        <div className="p-8 max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-white tracking-tight">Saved Views</h1>
                    <p className="text-gray-400 text-sm mt-1">
                        Revisit your custom filtered segments quickly
                    </p>
                </div>
                <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20">
                    Create New View
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {MOCK_SAVED_VIEWS.map((view) => (
                    <div
                        key={view.id}
                        className="group bg-gray-900/40 border border-gray-800 p-6 rounded-2xl hover:border-blue-500/50 hover:bg-gray-900/60 transition-all cursor-pointer relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-5 transform translate-x-4 translate-y-[-4] group-hover:opacity-10 transition-opacity">
                            <Bookmark size={80} />
                        </div>

                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-500">
                                <Bookmark size={20} />
                            </div>
                            <h3 className="font-bold text-white group-hover:text-blue-400 transition-colors uppercase tracking-tight text-sm">
                                {view.name}
                            </h3>
                        </div>

                        <p className="text-xs text-gray-500 mb-6 font-medium">
                            {view.filters}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-800/50">
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-500">Leads</span>
                                <span className="text-sm font-bold text-white">{view.leadsCount}</span>
                            </div>
                            <div className="flex flex-col text-right">
                                <span className="text-xs text-gray-500">Last seen</span>
                                <span className="text-xs font-medium text-gray-400">{view.lastAccessed}</span>
                            </div>
                        </div>

                        <div className="mt-6 flex items-center text-xs font-bold text-blue-500 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all">
                            Apply View <ArrowRight size={14} className="ml-1" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
