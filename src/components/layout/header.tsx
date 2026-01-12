'use client';

import React from 'react';
import { useAuth } from '@/contexts/auth-context';
import { Bell, Search, User, Globe, HelpCircle } from 'lucide-react';

export function Header() {
    const { user } = useAuth();

    return (
        <header className="h-20 border-b border-white/5 bg-zinc-950/20 backdrop-blur-xl flex items-center justify-between px-8 sticky top-0 z-40">
            <div className="flex-1 max-w-xl">
                <div className="group relative flex items-center">
                    <Search size={18} className="absolute left-4 text-zinc-500 group-focus-within:text-blue-500 transition-colors" />
                    <input
                        type="text"
                        placeholder="Search anything..."
                        className="w-full h-11 bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 text-[14px] text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:border-blue-500/30 focus:bg-white/[0.08] transition-all font-sans"
                    />
                    <div className="absolute right-4 hidden md:flex items-center space-x-1">
                        <kbd className="h-5 px-1.5 rounded-md border border-white/10 bg-white/5 text-[10px] font-medium text-zinc-500 flex items-center justify-center">⌘</kbd>
                        <kbd className="h-5 px-1.5 rounded-md border border-white/10 bg-white/5 text-[10px] font-medium text-zinc-500 flex items-center justify-center">K</kbd>
                    </div>
                </div>
            </div>

            <div className="flex items-center space-x-2 ml-8">
                <div className="flex items-center space-x-1 mr-4 border-r border-white/5 pr-4">
                    <button className="p-2.5 text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl transition-all group" title="Support">
                        <HelpCircle size={20} className="group-hover:rotate-12 transition-transform" />
                    </button>
                    <button className="p-2.5 text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl transition-all group" title="Notifications">
                        <div className="relative">
                            <Bell size={20} className="group-hover:shake transition-transform" />
                            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-blue-500 rounded-full ring-2 ring-zinc-950" />
                        </div>
                    </button>
                    <button className="p-2.5 text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl transition-all group" title="Language">
                        <Globe size={20} />
                    </button>
                </div>

                <div className="flex items-center space-x-4 pl-2">
                    <div className="hidden sm:flex flex-col items-end">
                        <span className="text-sm font-semibold text-zinc-200 leading-none">{user?.name || 'Alexander Ace'}</span>
                        <span className="text-[10px] text-zinc-500 font-medium uppercase tracking-wider mt-1">{user?.role || 'Enterprise Admin'}</span>
                    </div>
                    <div className="relative group cursor-pointer">
                        <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 p-[1px]">
                            <div className="w-full h-full rounded-[15px] bg-zinc-950 flex items-center justify-center overflow-hidden">
                                {user?.avatar ? (
                                    <img src={user.avatar} alt="Avatar" className="w-full h-full object-cover" />
                                ) : (
                                    <User size={20} className="text-white" />
                                )}
                            </div>
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-zinc-950" />
                    </div>
                </div>
            </div>
        </header>
    );
}
