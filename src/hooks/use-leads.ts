'use client';

import { useQuery } from '@tanstack/react-query';
import { MOCK_LEADS } from '@/lib/mock-data/leads';
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
            // Simulate API delay
            await new Promise((resolve) => setTimeout(resolve, 500));

            let filteredLeads = [...MOCK_LEADS];

            if (filters.search) {
                const search = filters.search.toLowerCase();
                filteredLeads = filteredLeads.filter(
                    (lead) =>
                        `${lead.firstName} ${lead.lastName}`.toLowerCase().includes(search) ||
                        lead.company.toLowerCase().includes(search) ||
                        lead.email.toLowerCase().includes(search)
                );
            }

            if (filters.industry && filters.industry !== 'All') {
                filteredLeads = filteredLeads.filter(
                    (lead) => lead.industry === filters.industry
                );
            }

            if (filters.size && filters.size !== 'All') {
                filteredLeads = filteredLeads.filter((lead) => lead.size === filters.size);
            }

            if (filters.status && filters.status !== 'All') {
                filteredLeads = filteredLeads.filter(
                    (lead) => lead.status === filters.status
                );
            }

            return filteredLeads;
        },
    });
}
