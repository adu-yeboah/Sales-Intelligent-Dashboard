'use client';

import React, { use } from 'react';
import { useLead } from '@/hooks/use-lead';
import {
    Mail,
    Phone,
    Globe,
    Building2,
    ChevronLeft,
    MoreVertical,
    Send,
    Calendar,
    Clock,
    MessageSquare,
    Sparkles
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils/cn';

export default function LeadProfilePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const router = useRouter();
    const { data, isLoading } = useLead(id);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-full bg-zinc-950">
                <div className="w-12 h-12 border-4 border-blue-600/10 border-t-blue-600 rounded-full animate-spin" />
            </div>
        );
    }

    if (!data) return <div className="p-10 text-white font-black">LEAD PROTOCOL NOT FOUND</div>;

    const { lead, activities } = data;

    return (
        <div className="flex flex-col h-full bg-zinc-950 font-sans">
            {/* Header */}
            <div className="flex items-center justify-between px-10 py-6 border-b border-white/5 bg-zinc-900/10 backdrop-blur-xl sticky top-0 z-40">
                <div className="flex items-center gap-6">
                    <button
                        onClick={() => router.back()}
                        className="p-3 bg-white/5 hover:bg-white/10 rounded-2xl text-zinc-400 border border-white/5 transition-all active:scale-95 group"
                    >
                        <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
                    </button>
                    <div className="flex items-center gap-5">
                        <div className="relative group">
                            <div className="w-16 h-16 rounded-[2rem] bg-gradient-to-tr from-blue-600 to-indigo-600 p-[1px] shadow-2xl shadow-blue-500/20 group-hover:scale-105 transition-transform duration-500">
                                <div className="w-full h-full rounded-[31px] bg-zinc-950 overflow-hidden">
                                    <img src={lead.avatar} alt={lead.firstName} className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-4 border-zinc-950 shadow-lg shadow-emerald-500/20" />
                        </div>
                        <div>
                            <div className="flex items-center gap-3">
                                <h1 className="text-2xl font-black text-white tracking-tight">
                                    {lead.firstName} {lead.lastName}
                                </h1>
                                <span className="px-2 py-0.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-[10px] font-black text-blue-400 uppercase tracking-widest leading-none">
                                    {lead.status}
                                </span>
                            </div>
                            <p className="text-sm text-zinc-500 font-medium mt-1 uppercase tracking-wider">{lead.company} // {lead.title}</p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <button className="px-5 py-3 text-xs font-black uppercase tracking-widest text-zinc-400 hover:text-white bg-white/5 border border-white/10 rounded-2xl transition-all hover:bg-white/10 active:scale-95">
                        Edit Entity
                    </button>
                    <button className="px-6 py-3 text-xs font-black uppercase tracking-widest text-white bg-blue-600 rounded-2xl transition-all hover:bg-blue-500 shadow-2xl shadow-blue-600/20 active:scale-95 flex items-center gap-2">
                        <Send size={16} />
                        Transmit Message
                    </button>
                    <button className="p-3 text-zinc-500 hover:text-white bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-all">
                        <MoreVertical size={20} />
                    </button>
                </div>
            </div>

            <div className="flex-1 grid grid-cols-12 overflow-hidden">
                {/* Left Column: Intelligence & Profile */}
                <div className="col-span-4 border-r border-white/5 overflow-y-auto p-10 space-y-10 custom-scrollbar">
                    {/* Neural Insight Card */}
                    <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-blue-600/10 via-indigo-600/5 to-transparent border border-blue-500/20 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-6 opacity-20 rotate-12 group-hover:scale-125 transition-transform duration-700">
                            <Sparkles size={100} className="text-blue-500" />
                        </div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                    <Sparkles size={18} />
                                </div>
                                <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-400">Neural Intelligence</h3>
                            </div>
                            <p className="text-lg font-black text-white leading-tight mb-4 tracking-tight">
                                Acquisition likelihood at 94% following Q3 expansion signals.
                            </p>
                            <p className="text-sm text-zinc-500 font-medium leading-relaxed mb-8">
                                Engagement patterns suggest high interest in enterprise infrastructure solutions.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                    <span className="text-[11px] font-bold text-zinc-300 uppercase tracking-widest">Pain Point: System Latency</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                                    <span className="text-[11px] font-bold text-zinc-300 uppercase tracking-widest">Urgency: Critical Next 30D</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="space-y-6">
                        <h3 className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.3em] ml-1">Communication Channels</h3>
                        <div className="space-y-4">
                            {[
                                { icon: Mail, label: lead.email, sub: 'Personnel Email' },
                                { icon: Phone, label: '+1 (555) 012-3456', sub: 'Secure Direct Line' },
                                { icon: Globe, label: `nexus-systems-${lead.company.toLowerCase()}.intel`, sub: 'Corporate Domain' }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-5 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all group">
                                    <div className="w-12 h-12 rounded-2xl bg-zinc-950 border border-white/5 flex items-center justify-center text-zinc-600 group-hover:text-blue-500 group-hover:border-blue-500/30 transition-all">
                                        <item.icon size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-white mb-0.5">{item.label}</p>
                                        <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">{item.sub}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="space-y-6">
                        <h3 className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.3em] ml-1">Entity Profile</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: 'Sector', val: lead.industry },
                                { label: 'Magnitude', val: lead.size + ' EMP' },
                                { label: 'Valuation', val: '$240M Est.' },
                                { label: 'Location', val: 'New York, US' }
                            ].map((item, i) => (
                                <div key={i} className="p-5 rounded-3xl bg-white/[0.02] border border-white/5">
                                    <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest block mb-1.5">{item.label}</span>
                                    <span className="text-sm font-black text-zinc-300 tracking-tight">{item.val}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Right Column: Signal Logs / Timeline */}
                <div className="col-span-8 overflow-y-auto p-10 flex flex-col custom-scrollbar bg-zinc-950">
                    <div className="flex items-center justify-between mb-10">
                        <h3 className="text-2xl font-black text-white tracking-tight flex items-center gap-4">
                            Signal Intelligence Logs
                            <span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-bold text-zinc-500">{activities.length} Events</span>
                        </h3>
                        <div className="flex bg-white/5 border border-white/10 rounded-xl p-1">
                            {['All Signals', 'Notes', 'Transmissions'].map((tab, i) => (
                                <button key={i} className={cn(
                                    "px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all",
                                    i === 0 ? "bg-white/10 text-white" : "text-zinc-600 hover:text-zinc-400"
                                )}>
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 space-y-10 relative">
                        <div className="absolute left-[27px] top-6 bottom-0 w-px bg-white/5" />

                        {/* Input Area */}
                        <div className="relative pl-16">
                            <div className="absolute left-[23px] top-4 w-3 h-3 rounded-full border-2 border-blue-500 bg-zinc-950 z-10 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                            <div className="bg-zinc-900/30 border border-white/5 p-6 rounded-[2.5rem] focus-within:border-blue-500/30 transition-all backdrop-blur-sm relative group overflow-hidden">
                                <div className="absolute inset-0 bg-blue-600/[0.02] opacity-0 group-focus-within:opacity-100 transition-opacity" />
                                <textarea
                                    placeholder="Log new intelligence or mission update..."
                                    className="w-full bg-transparent border-none outline-none text-[15px] font-medium text-zinc-300 resize-none mb-6 placeholder:text-zinc-700 relative z-10"
                                    rows={2}
                                />
                                <div className="flex justify-between items-center relative z-10">
                                    <div className="flex gap-4">
                                        <button className="p-2.5 text-zinc-600 hover:text-blue-400 hover:bg-blue-500/5 rounded-xl transition-all"><MessageSquare size={18} /></button>
                                        <button className="p-2.5 text-zinc-600 hover:text-violet-400 hover:bg-violet-500/5 rounded-xl transition-all"><Building2 size={18} /></button>
                                        <button className="p-2.5 text-zinc-600 hover:text-emerald-400 hover:bg-emerald-500/5 rounded-xl transition-all"><Calendar size={18} /></button>
                                    </div>
                                    <button className="flex items-center px-6 py-3 text-xs font-black uppercase tracking-widest text-white bg-blue-600 rounded-2xl hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20 active:scale-95">
                                        Update Logs
                                    </button>
                                </div>
                            </div>
                        </div>

                        {activities.map((activity, idx) => (
                            <div key={activity.id} className="relative pl-16 group/item">
                                <div className={cn(
                                    "absolute left-[23px] top-4 w-3 h-3 rounded-full z-10 border-2 bg-zinc-950 transition-all group-hover/item:scale-125",
                                    activity.type === 'email' ? "border-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.4)]" :
                                        activity.type === 'status_change' ? "border-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" :
                                            "border-zinc-700"
                                )} />

                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-4 mb-3">
                                        <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white">
                                            {activity.type === 'email' ? 'Signal: Transmission' :
                                                activity.type === 'status_change' ? 'Signal: Status Shift' :
                                                    'Signal: Intel Memo'}
                                        </span>
                                        <div className="h-px flex-1 bg-white/5" />
                                        <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">
                                            {new Date(activity.timestamp).toLocaleDateString()} // {new Date(activity.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </span>
                                    </div>
                                    <div className="text-[15px] font-medium text-zinc-400 bg-white/[0.02] p-6 rounded-[2rem] border border-white/5 group-hover/item:border-white/10 transition-all leading-relaxed">
                                        {activity.content}
                                    </div>
                                    <div className="flex items-center gap-2.5 mt-4 px-2">
                                        <div className="w-6 h-6 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-[8px] font-black text-zinc-500">
                                            {activity.performedBy.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <span className="text-[10px] font-black text-zinc-700 uppercase tracking-widest">Agent {activity.performedBy}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
