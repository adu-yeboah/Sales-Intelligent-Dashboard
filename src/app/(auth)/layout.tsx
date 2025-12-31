import React from 'react';

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(29,78,216,0.15),transparent)] pointer-events-none" />
            <div className="w-full max-w-md z-10">
                <div className="flex justify-center mb-8">
                    <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl">
                            S
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white">
                            Sales Intel
                        </span>
                    </div>
                </div>
                <div className="bg-gray-900/40 border border-gray-800 backdrop-blur-xl p-8 rounded-2xl shadow-2xl">
                    {children}
                </div>
            </div>
        </div>
    );
}
