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
    LogOut
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
    const { logout } = useAuth();
    const [isCollapsed, setIsCollapsed] = React.useState(false);

    return (
        <div
            className={cn(
                "flex flex-col h-screen bg-gray-950 border-r border-gray-800 transition-all duration-300",
                isCollapsed ? "w-20" : "w-64"
            )}
        >
            <div className="flex items-center justify-between p-6 h-16 border-b border-gray-800">
                {!isCollapsed && (
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold">
                            S
                        </div>
                        <span className="font-bold text-lg tracking-tight">Sales Intel</span>
                    </div>
                )}
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="p-1 hover:bg-gray-800 rounded-md text-gray-400"
                >
                    {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
                </button>
            </div>

            <nav className="flex-1 px-4 py-6 space-y-2">
                {NAV_ITEMS.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                            "flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors",
                            pathname.startsWith(item.href)
                                ? "bg-blue-600/10 text-blue-500"
                                : "text-gray-400 hover:text-white hover:bg-gray-900",
                            isCollapsed && "justify-center px-0"
                        )}
                        title={item.label}
                    >
                        <item.icon size={22} />
                        {!isCollapsed && <span className="font-medium">{item.label}</span>}
                    </Link>
                ))}
            </nav>

            <div className="p-4 border-t border-gray-800">
                <button
                    onClick={logout}
                    className={cn(
                        "flex items-center space-x-3 px-3 py-2 w-full text-gray-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors",
                        isCollapsed && "justify-center px-0"
                    )}
                >
                    <LogOut size={22} />
                    {!isCollapsed && <span className="font-medium">Logout</span>}
                </button>
            </div>
        </div>
    );
}
