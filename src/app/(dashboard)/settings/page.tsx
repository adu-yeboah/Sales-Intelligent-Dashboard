'use client';

import React from 'react';
import {
    Settings,
    User,
    Bell,
    Shield,
    Zap,
    Globe,
    Key,
    Database,
    Cpu,
    ChevronRight,
    LogOut
} from 'lucide-react';
import { useAuth } from '@/contexts/auth-context';
import { cn } from '@/lib/utils/cn';

export default function SettingsPage() {
    const { user, logout } = useAuth();

    return (
        <div className="flex flex-col h-full bg-zinc-950 overflow-y-auto custom-scrollbar">
            <div className="px-10 py-10 max-w-5xl mx-auto w-full">
                {/* Header */}
                <div className="flex flex-col mb-12">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="p-1 px-2 rounded-md bg-blue-500/10 border border-blue-500/20 text-[10px] font-black uppercase tracking-[0.25em] text-blue-500">
                            System Control
                        </div>
                    </div>
                    <h1 className="text-4xl font-black text-white tracking-tighter sm:text-5xl">
                        Interface <span className="text-zinc-500">Settings</span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    {/* Navigation Sidebar */}
                    <div className="lg:col-span-1 space-y-2">
                        {[
                            { label: 'Profile Intelligence', icon: User, active: true },
                            { label: 'Neural Alerts', icon: Bell, active: false },
                            { label: 'Security Protocols', icon: Shield, active: false },
                            { label: 'Engine Config', icon: Cpu, active: false },
                            { label: 'Database Access', icon: Database, active: false }
                        ].map((item, i) => (
                            <div
                                key={i}
                                className={cn(
                                    "flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all cursor-pointer group",
                                    item.active ? "bg-white/5 text-white border border-white/10" : "text-zinc-600 hover:text-white hover:bg-white/[0.02]"
                                )}
                            >
                                <item.icon size={16} className={cn(item.active ? "text-blue-500" : "text-zinc-700 group-hover:text-zinc-500")} />
                                {item.label}
                            </div>
                        ))}
                    </div>

                    {/* Main Settings Content */}
                    <div className="lg:col-span-3 space-y-12">
                        {/* Profile Section */}
                        <section>
                            <h2 className="text-xl font-black text-white tracking-tight mb-8">Personnel Information</h2>
                            <div className="bg-zinc-900/40 border border-white/5 rounded-[2.5rem] p-8 space-y-8">
                                <div className="flex items-center gap-6 pb-8 border-b border-white/5">
                                    <div className="relative group">
                                        <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-blue-600 to-indigo-600 p-[1px]">
                                            <div className="w-full h-full rounded-[23px] bg-black flex items-center justify-center overflow-hidden">
                                                {user?.avatar ? (
                                                    <img src={user.avatar} className="w-full h-full object-cover" alt="" />
                                                ) : (
                                                    <User size={40} className="text-white/20" />
                                                )}
                                            </div>
                                        </div>
                                        <button className="absolute -bottom-2 -right-2 p-2 bg-blue-600 rounded-xl border border-black text-white hover:bg-blue-500 transition-all shadow-xl">
                                            <Zap size={14} />
                                        </button>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-black text-white tracking-tight">{user?.name || 'Authorized Personnel'}</h3>
                                        <p className="text-xs font-bold text-zinc-600 uppercase tracking-widest mt-1">{user?.role || 'Elite Access Level'}</p>
                                        <p className="text-[10px] font-medium text-zinc-500 mt-2">{user?.email}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">Codename</label>
                                        <input type="text" defaultValue={user?.name} className="w-full h-12 bg-black/50 border border-white/5 rounded-2xl px-5 text-sm font-bold text-white focus:outline-none focus:border-blue-500/50 transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">Personnel Email</label>
                                        <input type="text" defaultValue={user?.email} className="w-full h-12 bg-black/50 border border-white/5 rounded-2xl px-5 text-sm font-bold text-white focus:outline-none focus:border-blue-500/50 transition-all" />
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Security Section */}
                        <section>
                            <h2 className="text-xl font-black text-white tracking-tight mb-8">Security Protocols</h2>
                            <div className="bg-zinc-900/40 border border-white/5 rounded-[2.5rem] overflow-hidden">
                                {[
                                    { label: 'Two-Factor Authentication', icon: Key, enabled: true, color: 'text-emerald-500' },
                                    { label: 'Advanced Neural Encryption', icon: Shield, enabled: true, color: 'text-blue-500' },
                                    { label: 'Biometric Login', icon: Zap, enabled: false, color: 'text-zinc-600' }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between p-6 border-b border-white/5 hover:bg-white/[0.01] transition-colors last:border-0">
                                        <div className="flex items-center gap-4">
                                            <div className={cn("p-3 rounded-2xl bg-black border border-white/5", item.color)}>
                                                <item.icon size={20} />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-white">{item.label}</p>
                                                <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest mt-0.5">{item.enabled ? 'Protocol Active' : 'Offline'}</p>
                                            </div>
                                        </div>
                                        <div className={cn("w-12 h-6 rounded-full p-1 transition-all cursor-pointer relative", item.enabled ? "bg-blue-600" : "bg-zinc-800")}>
                                            <div className={cn("w-4 h-4 bg-white rounded-full transition-all shadow-lg", item.enabled ? "translate-x-6" : "translate-x-0")} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Dangerous Section */}
                        <section className="pt-10">
                            <div className="p-8 rounded-[2.5rem] border border-rose-500/20 bg-rose-500/[0.02] flex flex-col md:flex-row items-center justify-between gap-6">
                                <div>
                                    <h3 className="text-lg font-black text-rose-500 tracking-tight">Terminate Current Session</h3>
                                    <p className="text-xs font-medium text-zinc-600 mt-1 uppercase tracking-widest">Logged in from 127.0.0.1 (New York, US)</p>
                                </div>
                                <button
                                    onClick={logout}
                                    className="px-8 py-4 bg-rose-600/10 border border-rose-600/20 text-rose-500 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-rose-600 hover:text-white transition-all shadow-xl active:scale-95 flex items-center gap-3"
                                >
                                    <LogOut size={16} />
                                    Initialise Logout
                                </button>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
