'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useAuth } from '@/contexts/auth-context';
import { cn } from '@/lib/utils/cn';
import { Loader2, Mail, Lock } from 'lucide-react';
import Link from 'next/link';

const loginSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginValues = z.infer<typeof loginSchema>;

export function LoginForm() {
    const { login, isLoading } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginValues>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: LoginValues) => {
        try {
            await login(data.email, data.password);
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <div className="w-full space-y-8">
            <div className="text-center">
                <h1 className="text-3xl font-black text-white tracking-tight">Welcome Back</h1>
                <p className="mt-2 text-sm text-zinc-500 font-medium tracking-tight">
                    Synchronize your intelligence profile to continue.
                </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="space-y-2">
                    <label
                        htmlFor="email"
                        className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1"
                    >
                        Personnel Email
                    </label>
                    <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-600 group-focus-within:text-blue-500 transition-colors" />
                        <input
                            {...register('email')}
                            id="email"
                            type="email"
                            placeholder="name@nexus.intel"
                            className={cn(
                                "flex h-12 w-full rounded-2xl border border-white/5 bg-white/5 px-12 py-2 text-[14px] text-zinc-200 ring-offset-background placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all",
                                errors.email && "border-rose-500/50 focus:border-rose-500"
                            )}
                        />
                    </div>
                    {errors.email && (
                        <p className="text-xs font-bold text-rose-500 px-1">{errors.email.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <div className="flex items-center justify-between px-1">
                        <label
                            htmlFor="password"
                            className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500"
                        >
                            Security Key
                        </label>
                        <a href="#" className="text-[10px] font-black uppercase tracking-widest text-blue-500 hover:text-blue-400 transition-colors">
                            Forgot?
                        </a>
                    </div>
                    <div className="relative group">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-600 group-focus-within:text-blue-500 transition-colors" />
                        <input
                            {...register('password')}
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            className={cn(
                                "flex h-12 w-full rounded-2xl border border-white/5 bg-white/5 px-12 py-2 text-[14px] text-zinc-200 ring-offset-background placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all",
                                errors.password && "border-rose-500/50 focus:border-rose-500"
                            )}
                        />
                    </div>
                    {errors.password && (
                        <p className="text-xs font-bold text-rose-500 px-1">
                            {errors.password.message}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="relative h-12 w-full flex items-center justify-center rounded-2xl bg-blue-600 text-sm font-black text-white transition-all hover:bg-blue-500 hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-blue-500/20 disabled:opacity-50 disabled:pointer-events-none group overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
                    {isLoading ? (
                        <div className="flex items-center gap-2">
                            <Loader2 className="h-4 w-4 animate-spin" />
                            <span>Establishing Connection...</span>
                        </div>
                    ) : (
                        <span className="uppercase tracking-[0.2em]">Initialize Session</span>
                    )}
                </button>
            </form>

            <div className="text-center pt-2">
                <span className="text-zinc-500 text-xs font-medium">New analyst? </span>
                <Link href="/signup" className="text-xs font-black uppercase tracking-widest text-white hover:text-blue-400 transition-all border-b border-white/10 hover:border-blue-500 ml-1">
                    Request Access
                </Link>
            </div>
        </div>
    );
}
