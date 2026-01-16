'use client';

import { useQuery } from '@tanstack/react-query';
import { Lead } from '@/types/lead';

interface FilterOptions {
    search?: string;
    industry?: string;
    size?: string;
    status?: string;
}

export function useLeads(filters: FilterOptions) {
    return useQuery({
        queryKey: ['leads', filters],
        queryFn: async () => {
            const params = new URLSearchParams();
            if (filters.search) params.append('search', filters.search);
            if (filters.industry) params.append('industry', filters.industry);
            if (filters.size) params.append('size', filters.size);
            if (filters.status) params.append('status', filters.status);

            const res = await fetch(`/api/leads?${params.toString()}`);
            if (!res.ok) throw new Error('Failed to fetch leads');
            return res.json() as Promise<Lead[]>;
        },
    });
}
