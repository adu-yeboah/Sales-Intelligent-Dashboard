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
            <div className="flex items-center justify-center h-full">
                <div className="w-10 h-10 border-4 border-blue-600/20 border-t-blue-600 rounded-full animate-spin" />
            </div>
        );
    }

    if (!data) return <div>Lead not found</div>;

    const { lead, activities } = data;

    return (
        <div className="flex flex-col h-full bg-black">
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-4 border-b border-gray-800 bg-gray-950/20 sticky top-0 z-30">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => router.back()}
                        className="p-2 hover:bg-gray-800 rounded-lg text-gray-400 border border-gray-800 transition-colors"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 p-0.5 shadow-lg shadow-blue-600/10">
                            <div className="w-full h-full rounded-[10px] bg-gray-900 overflow-hidden">
                                <img src={lead.avatar} alt={lead.firstName} className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white tracking-tight">
                                {lead.firstName} {lead.lastName}
                            </h1>
                            <p className="text-sm text-gray-400">{lead.company} • {lead.title}</p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white bg-gray-900 border border-gray-800 rounded-lg hover:bg-gray-800 transition-all">
                        Edit
                    </button>
                    <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20">
                        Send Email
                    </button>
                    <button className="p-2 text-gray-400 hover:text-white bg-gray-900 border border-gray-800 rounded-lg hover:bg-gray-800 transition-all">
                        <MoreVertical size={20} />
                    </button>
                </div>
            </div>

            <div className="flex-1 grid grid-cols-12 overflow-hidden">
                {/* Left Column: Details & Insights */}
                <div className="col-span-4 border-r border-gray-800 overflow-y-auto p-8 space-y-8 bg-gray-950/10">
                    {/* AI Insights Card */}
                    <div className="bg-gradient-to-br from-blue-600/20 via-indigo-600/10 to-transparent border border-blue-500/30 p-6 rounded-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-3 opacity-20 transform translate-x-1 translate-y-[-1] transition-transform group-hover:scale-110">
                            <Sparkles size={48} className="text-blue-400" />
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                            <Sparkles size={18} className="text-blue-400" />
                            <h3 className="font-bold text-blue-400">AI Insights</h3>
                        </div>
                        <p className="text-sm text-blue-100/80 leading-relaxed mb-4">
                            Likely to buy in the next 30 days based on recent series B funding and expansion into the EMEA market.
                        </p>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-xs text-blue-300/60 font-medium">
                                <div className="w-1 h-1 rounded-full bg-blue-400" />
                                Recommendation: Offer Premium Demo
                            </div>
                            <div className="flex items-center gap-2 text-xs text-blue-300/60 font-medium">
                                <div className="w-1 h-1 rounded-full bg-blue-400" />
                                Pain point: Legacy systems integration
                            </div>
                        </div>
                    </div>

                    <section className="space-y-4">
                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Contact Information</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-sm text-gray-300 p-3 rounded-xl bg-gray-900/40 border border-gray-800/50">
                                <Mail size={16} className="text-blue-500" />
                                {lead.email}
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-300 p-3 rounded-xl bg-gray-900/40 border border-gray-800/50">
                                <Phone size={16} className="text-blue-500" />
                                +1 (555) 012-3456
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-300 p-3 rounded-xl bg-gray-900/40 border border-gray-800/50">
                                <Globe size={16} className="text-blue-500" />
                                www.{lead.company.toLowerCase().replace(' ', '')}.com
                            </div>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Company Details</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 rounded-xl bg-gray-900/40 border border-gray-800/50">
                                <span className="text-xs text-gray-500 block mb-1">Industry</span>
                                <span className="text-sm font-medium text-gray-200">{lead.industry}</span>
                            </div>
                            <div className="p-4 rounded-xl bg-gray-900/40 border border-gray-800/50">
                                <span className="text-xs text-gray-500 block mb-1">Company Size</span>
                                <span className="text-sm font-medium text-gray-200">{lead.size} employees</span>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Right Column: Activity Timeline */}
                <div className="col-span-8 overflow-y-auto p-8 flex flex-col">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-lg font-bold text-white">Activity Timeline</h3>
                        <div className="flex gap-2">
                            <button className="p-2 text-xs font-medium text-gray-400 bg-gray-900 border border-gray-800 rounded-lg hover:text-white transition-colors">
                                All
                            </button>
                            <button className="p-2 text-xs font-medium text-gray-400 hover:text-white transition-colors">
                                Notes
                            </button>
                            <button className="p-2 text-xs font-medium text-gray-400 hover:text-white transition-colors">
                                Emails
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 space-y-8 relative">
                        <div className="absolute left-6 top-8 bottom-0 w-px bg-gray-800/50" />

                        {/* Quick Note Input */}
                        <div className="relative pl-14">
                            <div className="absolute left-4 top-2 w-4 h-4 rounded-full border-2 border-blue-500 bg-black z-10" />
                            <div className="bg-gray-900/50 border border-gray-800 p-4 rounded-2xl focus-within:border-blue-500/50 focus-within:bg-gray-900 transition-all">
                                <textarea
                                    placeholder="Add a note or update activity..."
                                    className="w-full bg-transparent border-none outline-none text-sm resize-none mb-4 placeholder:text-gray-500"
                                    rows={2}
                                />
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-2">
                                        <button className="p-2 text-gray-500 hover:text-blue-400 transition-colors"><MessageSquare size={16} /></button>
                                        <button className="p-2 text-gray-500 hover:text-blue-400 transition-colors"><Calendar size={16} /></button>
                                    </div>
                                    <button className="flex items-center px-4 py-1.5 text-xs font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all">
                                        Post Note
                                    </button>
                                </div>
                            </div>
                        </div>

                        {activities.map((activity, idx) => (
                            <div key={activity.id} className="relative pl-14">
                                <div className={cn(
                                    "absolute left-4 top-2 w-4 h-4 rounded-full flex items-center justify-center z-10 border-2 bg-black",
                                    activity.type === 'email' ? "border-blue-500 text-blue-500" :
                                        activity.type === 'status_change' ? "border-emerald-500 text-emerald-500" :
                                            "border-gray-500 text-gray-500"
                                )}>
                                    <div className="w-1.5 h-1.5 rounded-full bg-current" />
                                </div>

                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-3">
                                        <span className="text-sm font-bold text-white">
                                            {activity.type === 'email' ? 'Email sent' :
                                                activity.type === 'status_change' ? 'Status update' :
                                                    'Note added'}
                                        </span>
                                        <span className="text-[10px] text-gray-500 font-mono">
                                            {new Date(activity.timestamp).toLocaleDateString()} at {new Date(activity.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </span>
                                    </div>
                                    <div className="text-sm text-gray-400 bg-gray-950/40 p-4 rounded-xl border border-gray-900 mt-2">
                                        {activity.content}
                                    </div>
                                    <div className="flex items-center gap-2 mt-2">
                                        <div className="w-5 h-5 rounded-full bg-gray-800 flex items-center justify-center text-[8px] font-bold">JD</div>
                                        <span className="text-[10px] text-gray-500">by {activity.performedBy}</span>
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
