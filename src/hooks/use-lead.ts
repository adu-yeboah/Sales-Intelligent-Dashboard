'use client';

import { useQuery } from '@tanstack/react-query';
import { Lead, LeadActivity } from '@/types/lead';

export function useLead(id: string) {
    return useQuery({
        queryKey: ['lead', id],
        queryFn: async () => {
            const res = await fetch(`/api/leads/${id}`);
            if (!res.ok) throw new Error('Failed to fetch lead');
            return res.json() as Promise<{ lead: Lead; activities: LeadActivity[] }>;
        },
    });
}
