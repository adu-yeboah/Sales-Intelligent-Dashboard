import React from 'react';
import { Command } from 'lucide-react';

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#050505] text-white px-4 relative overflow-hidden font-sans">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.1),transparent_40%)] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.1),transparent_40%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />

            {/* Animated Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full animate-pulse-slow pointer-events-none" />

            <div className="w-full max-w-md z-10">
                <div className="flex flex-col items-center mb-10">
                    <div className="w-16 h-16 bg-gradient-to-tr from-blue-600 to-violet-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/20 mb-6 group cursor-pointer transition-transform hover:scale-110 duration-500">
                        <Command className="text-white" size={32} />
                    </div>
                    <h2 className="text-2xl font-black tracking-tighter text-white uppercase text-center">
                        Sales <span className="text-zinc-500">Intelligence</span>
                    </h2>
                    <div className="h-1 w-12 bg-blue-600 rounded-full mt-2" />
                </div>

                <div className="bg-zinc-900/40 border border-white/5 backdrop-blur-3xl p-10 rounded-[2.5rem] shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
                    {children}
                </div>

                <div className="mt-8 text-center">
                    <p className="text-zinc-500 text-xs font-medium uppercase tracking-[0.2em]">
                        Powered by Advanced Neural Engine
                    </p>
                </div>
            </div>
        </div>
    );
}
