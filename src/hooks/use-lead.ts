'use client';

import { useQuery } from '@tanstack/react-query';
import { MOCK_LEADS } from '@/lib/mock-data/leads';
import { Lead, LeadActivity } from '@/types/lead';

export function useLead(id: string) {
    return useQuery({
        queryKey: ['lead', id],
        queryFn: async () => {
            // Simulate API delay
            await new Promise((resolve) => setTimeout(resolve, 400));

            const lead = MOCK_LEADS.find((l) => l.id === id);
            if (!lead) throw new Error('Lead not found');

            // Mock activities for this lead
            const activities: LeadActivity[] = [
                {
                    id: 'a1',
                    leadId: id,
                    type: 'status_change',
                    content: `Status changed from New to ${lead.status}`,
                    timestamp: new Date(Date.now() - 3600000 * 48).toISOString(),
                    performedBy: 'System',
                },
                {
                    id: 'a2',
                    leadId: id,
                    type: 'email',
                    content: 'Sent "Introduction to Sales Intel" email',
                    timestamp: new Date(Date.now() - 3600000 * 24).toISOString(),
                    performedBy: 'John Doe',
                },
                {
                    id: 'a3',
                    leadId: id,
                    type: 'note',
                    content: 'Very interested in our enterprise plan. Needs a demo next week.',
                    timestamp: new Date(Date.now() - 3600000 * 2).toISOString(),
                    performedBy: 'John Doe',
                }
            ];

            return { lead, activities };
        },
    });
}
