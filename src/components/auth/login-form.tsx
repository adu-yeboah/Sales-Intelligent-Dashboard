'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useAuth } from '@/contexts/auth-context';
import { cn } from '@/lib/utils/cn';
import { Loader2, Mail, Lock } from 'lucide-react';

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
        <div className="w-full max-w-md space-y-6">
            <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
                <p className="mt-2 text-sm text-gray-400">
                    Enter your credentials to access your dashboard
                </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="gap-2">
                    <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Email Address
                    </label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
                        <input
                            {...register('email')}
                            id="email"
                            type="email"
                            placeholder="name@example.com"
                            className={cn(
                                "flex h-10 w-full rounded-md border border-gray-700 bg-gray-900/50 px-10 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                                errors.email && "border-red-500 focus-visible:ring-red-500"
                            )}
                        />
                    </div>
                    {errors.email && (
                        <p className="text-sm font-medium text-red-500">{errors.email.message}</p>
                    )}
                </div>

                <div className="gap-2">
                    <label
                        htmlFor="password"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Password
                    </label>
                    <div className="relative">
                        <Lock className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
                        <input
                            {...register('password')}
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            className={cn(
                                "flex h-10 w-full rounded-md border border-gray-700 bg-gray-900/50 px-10 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                                errors.password && "border-red-500 focus-visible:ring-red-500"
                            )}
                        />
                    </div>
                    {errors.password && (
                        <p className="text-sm font-medium text-red-500">
                            {errors.password.message}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="inline-flex h-10 w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Signing in...
                        </>
                    ) : (
                        'Sign In'
                    )}
                </button>
            </form>

            <div className="text-center text-sm">
                <span className="text-gray-400">Don&apos;t have an account? </span>
                <a href="/signup" className="font-semibold text-blue-500 hover:text-blue-400">
                    Sign up
                </a>
            </div>
        </div>
    );
}
