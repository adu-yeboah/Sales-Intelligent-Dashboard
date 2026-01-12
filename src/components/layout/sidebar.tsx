'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils/cn';
import {
    Users,
    LayoutDashboard,
    Bookmark,
    Settings,
    BarChart3,
    ChevronLeft,
    ChevronRight,
    LogOut,
    Search,
    Command
} from 'lucide-react';
import { useAuth } from '@/contexts/auth-context';

const NAV_ITEMS = [
    { icon: LayoutDashboard, label: 'Overview', href: '/dashboard' },
    { icon: Users, label: 'Leads', href: '/leads' },
    { icon: Bookmark, label: 'Saved Views', href: '/saved-views' },
    { icon: BarChart3, label: 'Analytics', href: '/analytics' },
    { icon: Settings, label: 'Settings', href: '/settings' },
];

export function Sidebar() {
    const pathname = usePathname();
    const { logout, user } = useAuth();
    const [isCollapsed, setIsCollapsed] = React.useState(false);

    return (
        <aside
            className={cn(
                "flex flex-col h-screen bg-zinc-950/50 backdrop-blur-xl border-r border-white/5 transition-all duration-500 ease-in-out z-50",
                isCollapsed ? "w-20" : "w-72"
            )}
        >
            <div className="flex items-center justify-between px-6 h-20 border-b border-white/5">
                {!isCollapsed && (
                    <div className="flex items-center space-x-3 group cursor-pointer">
                        <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-violet-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                            <Command className="text-white" size={20} />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-white tracking-tight leading-none uppercase text-sm">Sales Intel</span>
                            <span className="text-[10px] text-zinc-500 font-medium uppercase tracking-widest mt-1">Intelligence</span>
                        </div>
                    </div>
                )}
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="p-2 hover:bg-white/5 border border-transparent hover:border-white/10 rounded-xl text-zinc-400 hover:text-white transition-all duration-300"
                >
                    {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
                </button>
            </div>

            <div className="px-4 py-6">
                {!isCollapsed && (
                    <div className="relative mb-6">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm text-zinc-300 placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all font-sans"
                        />
                    </div>
                )}

                <nav className="space-y-1.5 text-sans">
                    {NAV_ITEMS.map((item) => {
                        const isActive = pathname.startsWith(item.href);
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "flex items-center space-x-3 px-3.5 py-2.5 rounded-xl transition-all duration-300 group relative",
                                    isActive
                                        ? "bg-blue-600/10 text-blue-400"
                                        : "text-zinc-500 hover:text-zinc-100 hover:bg-white/5",
                                    isCollapsed && "justify-center px-0"
                                )}
                                title={item.label}
                            >
                                <item.icon size={20} className={cn(
                                    "transition-transform duration-300 group-hover:scale-110",
                                    isActive ? "text-blue-400" : "text-zinc-500 group-hover:text-zinc-100"
                                )} />
                                {!isCollapsed && (
                                    <span className="font-medium text-[15px]">{item.label}</span>
                                )}
                                {isActive && !isCollapsed && (
                                    <div className="absolute left-0 w-1 h-6 bg-blue-500 rounded-r-full" />
                                )}
                            </Link>
                        );
                    })}
                </nav>
            </div>

            <div className="mt-auto p-4 space-y-4">
                {!isCollapsed && (
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-600/10 to-violet-600/10 border border-white/5">
                        <p className="text-xs font-medium text-zinc-400 mb-2">Upgrade to Pro</p>
                        <p className="text-[11px] text-zinc-500 mb-3">Get advanced AI insights and unlimited leads.</p>
                        <button className="w-full py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-semibold text-white transition-all">
                            View Plans
                        </button>
                    </div>
                )}

                <div className="pt-4 border-t border-white/5">
                    <button
                        onClick={logout}
                        className={cn(
                            "flex items-center space-x-3 px-3.5 py-2.5 w-full text-zinc-500 hover:text-rose-400 hover:bg-rose-500/10 rounded-xl transition-all duration-300 group",
                            isCollapsed && "justify-center px-0"
                        )}
                    >
                        <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
                        {!isCollapsed && <span className="font-medium text-[15px]">Sign Out</span>}
                    </button>
                </div>

                {!isCollapsed && user && (
                    <div className="flex items-center space-x-3 px-2 py-1">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 flex items-center justify-center text-[10px] font-bold text-white shadow-lg">
                            {user.name?.charAt(0) || 'U'}
                        </div>
                        <div className="flex flex-col min-w-0">
                            <span className="text-xs font-semibold text-zinc-200 truncate">{user.name || 'User'}</span>
                            <span className="text-[10px] text-zinc-500 truncate">{user.email}</span>
                        </div>
                    </div>
                )}
            </div>
        </aside>
    );
}
