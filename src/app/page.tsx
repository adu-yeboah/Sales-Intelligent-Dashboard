'use client';
import React from 'react';
import Link from 'next/link';
import { Command, Shield, Zap, Globe, ArrowRight,  Target, } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30 overflow-hidden font-sans">
      
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none -mr-48 -mt-48 z-0" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-violet-600/10 blur-[120px] rounded-full pointer-events-none -ml-32 -mb-32 z-0" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.02] pointer-events-none" />

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-10 h-24 max-w-7xl mx-auto">
        <div className="flex items-center space-x-3 group cursor-pointer">
          <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-violet-600 rounded-xl flex items-center justify-center shadow-2xl shadow-blue-500/20 group-hover:scale-110 transition-transform duration-500">
            <Command className="text-white" size={24} />
          </div>
          <span className="text-xl font-black tracking-tighter uppercase">Sales <span className="text-zinc-500">Intel</span></span>
        </div>

        <div className="hidden md:flex items-center space-x-10">
          {['Intelligence', 'Solutions', 'Network', 'Compliance'].map((item) => (
            <a key={item} href="#" className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors">{item}</a>
          ))}
        </div>

        <div className="flex items-center space-x-6">
          <Link href="/login" className="text-sm font-black uppercase tracking-widest hover:text-blue-400 transition-colors">Sign In</Link>
          <Link href="/signup" className="px-6 py-3 bg-white text-black text-xs font-black uppercase tracking-widest rounded-xl hover:bg-zinc-200 transition-all active:scale-95 shadow-xl shadow-white/5">Request Access</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-10 pt-32 pb-20">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/5 border border-blue-500/10 mb-8 animate-float">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500">Next-Gen Intelligence v4.0 Active</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
            Dominance Through <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-600">Pure Intelligence.</span>
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-zinc-500 font-medium leading-relaxed mb-12">
            Uncover high-value targets, analyze market signals, and execute with surgical precision.
            The world's most advanced AI-driven sales intelligence platform.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Link href="/signup" className="group flex items-center gap-3 px-8 py-5 bg-blue-600 rounded-[2rem] text-sm font-black uppercase tracking-widest hover:bg-blue-500 transition-all shadow-2xl shadow-blue-600/20 active:scale-95">
              Initialize Operations
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="flex items-center gap-3 px-8 py-5 bg-white/5 border border-white/10 rounded-[2rem] text-sm font-black uppercase tracking-widest hover:bg-white/10 transition-all active:scale-95">
              Watch Protocol
            </button>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-32 relative group">
          <div className="absolute inset-0 bg-blue-600/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />
          <div className="rounded-[3rem] bg-zinc-900/50 border border-white/10 p-4 backdrop-blur-2xl shadow-2xl relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            <div className="rounded-[2.5rem] bg-black aspect-[16/9] overflow-hidden flex items-center justify-center relative">
              <div className="flex flex-col items-center gap-4">
                <Zap className="text-blue-500 animate-pulse" size={48} />
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-700">Encrypted Dashboard Preview</p>
              </div>
              {/* Decorative bits */}
              <div className="absolute top-10 left-10 w-48 h-20 bg-white/5 rounded-2xl border border-white/5" />
              <div className="absolute bottom-10 right-10 w-64 h-32 bg-white/5 rounded-3xl border border-white/5" />
              <div className="absolute top-10 right-10 w-12 h-12 bg-blue-600/20 rounded-xl border border-blue-500/20" />
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-40">
          {[
            { icon: Globe, label: 'Global Signals', desc: 'Real-time monitoring of corporate events and market shifts worldwide.' },
            { icon: Target, label: 'Neural Matching', desc: 'Advanced AI that identifies leads matching your ideal customer profile with 99% accuracy.' },
            { icon: Shield, label: 'Sovereign Security', desc: 'Enterprise-grade encryption protecting your most sensitive market intelligence.' },
          ].map((feature, i) => (
            <div key={i} className="group p-8 rounded-[2.5rem] bg-zinc-900/30 border border-white/5 hover:bg-white/[0.03] transition-all duration-500">
              <div className="w-14 h-14 bg-gradient-to-tr from-zinc-800 to-zinc-900 rounded-2xl flex items-center justify-center mb-8 border border-white/5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                <feature.icon className="text-blue-500" size={28} />
              </div>
              <h3 className="text-xl font-black mb-4 tracking-tight">{feature.label}</h3>
              <p className="text-zinc-500 font-medium leading-relaxed uppercase text-[10px] tracking-widest">{feature.desc}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-20 bg-black/50 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex items-center space-x-3">
            <Command className="text-blue-600" size={24} />
            <span className="text-lg font-black tracking-tighter uppercase italic">Nexus Intelligence Systems</span>
          </div>
          <div className="flex gap-10">
            {['Privacy', 'Legal', 'Infrastructure', 'API'].map((item) => (
              <a key={item} href="#" className="text-[10px] font-black uppercase tracking-widest text-zinc-600 hover:text-white transition-colors">{item}</a>
            ))}
          </div>
          <p className="text-[10px] font-bold text-zinc-700 uppercase tracking-widest">© 2026 Nexus Intel. Restricted Access.</p>
        </div>
      </footer>
      
    </div>
  );
}
