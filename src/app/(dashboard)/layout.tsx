import React from 'react';
import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen bg-black overflow-hidden font-sans selection:bg-blue-500/30">
            <Sidebar />
            <div className="flex flex-col flex-1 overflow-hidden relative">
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -mr-48 -mt-48 z-0" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-600/10 blur-[100px] rounded-full pointer-events-none -ml-32 -mb-32 z-0" />

                <Header />
                <main className="flex-1 overflow-y-auto bg-transparent relative z-10 custom-scrollbar">
                    {children}
                </main>
            </div>
        </div>
    );
}
