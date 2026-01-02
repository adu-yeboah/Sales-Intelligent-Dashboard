import { Lead, LeadStatus, CompanySize } from '@/types/lead';
import { INDUSTRIES, COMPANY_SIZES, LEAD_STATUSES } from '@/constants/lead-constants';

const FIRST_NAMES = ['James', 'Mary', 'Robert', 'Patricia', 'John', 'Jennifer', 'Michael', 'Linda', 'William', 'Elizabeth'];
const LAST_NAMES = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez'];
const COMPANIES = ['TechFlow', 'GlobalSync', 'Innovatech', 'CloudNative', 'DataDriven', 'NexGen', 'Vertex Solutions', 'Peak Performance', 'Skyline Systems', 'Core Logic'];
const TITLES = ['CEO', 'CTO', 'VP of Sales', 'Marketing Manager', 'Product Lead', 'Software Engineer', 'Account Executive', 'Operations Director'];

export function generateMockLeads(count: number): Lead[] {
    return Array.from({ length: count }, (_, i) => {
        const firstName = FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)];
        const lastName = LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)];
        const company = COMPANIES[Math.floor(Math.random() * COMPANIES.length)];

        return {
            id: `lead-${i + 1}`,
            firstName,
            lastName,
            email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${company.toLowerCase().replace(' ', '')}.com`,
            title: TITLES[Math.floor(Math.random() * TITLES.length)],
            company,
            industry: INDUSTRIES[Math.floor(Math.random() * INDUSTRIES.length)],
            size: COMPANY_SIZES[Math.floor(Math.random() * COMPANY_SIZES.length)] as CompanySize,
            status: LEAD_STATUSES[Math.floor(Math.random() * LEAD_STATUSES.length)] as LeadStatus,
            lastActivity: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString(),
            avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`,
        };
    });
}

export const MOCK_LEADS = generateMockLeads(1000);
