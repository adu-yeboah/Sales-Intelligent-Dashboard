'use client';

import React from 'react';
import { useAuth } from '@/contexts/auth-context';
import { Bell, Search, User } from 'lucide-react';

export function Header() {
    const { user } = useAuth();

    return (
        <header className="h-16 border-b border-gray-800 bg-gray-950/50 backdrop-blur-md flex items-center justify-between px-8 sticky top-0 z-40">
            <div className="flex items-center bg-gray-900 border border-gray-800 rounded-full px-4 py-1.5 w-96 focus-within:ring-2 focus-within:ring-blue-500/50 transition-all">
                <Search size={18} className="text-gray-500 mr-2" />
                <input
                    type="text"
                    placeholder="Search leads, companies..."
                    className="bg-transparent border-none outline-none text-sm w-full placeholder:text-gray-500"
                />
            </div>

            <div className="flex items-center space-x-4">
                <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-full relative">
                    <Bell size={20} />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-blue-600 rounded-full border-2 border-gray-950" />
                </button>

                <div className="flex items-center space-x-3 pl-4 border-l border-gray-800">
                    <div className="text-right flex flex-col">
                        <span className="text-sm font-medium">{user?.name || 'User'}</span>
                        <span className="text-xs text-gray-500 capitalize">{user?.role || 'Member'}</span>
                    </div>
                    <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center border border-gray-800 shadow-lg">
                        <User size={18} className="text-white" />
                    </div>
                </div>
            </div>
        </header>
    );
}
