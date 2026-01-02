export type LeadStatus = 'New' | 'Contacted' | 'Qualified' | 'Nurturing' | 'Closed-Won' | 'Closed-Lost';

export type CompanySize = '1-10' | '11-50' | '51-200' | '201-500' | '501-1000' | '1000+';

export interface Lead {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    title: string;
    company: string;
    industry: string;
    size: CompanySize;
    status: LeadStatus;
    lastActivity: string;
    avatar?: string;
}

export interface LeadActivity {
    id: string;
    leadId: string;
    type: 'email' | 'call' | 'note' | 'status_change' | 'meeting';
    content: string;
    timestamp: string;
    performedBy: string;
}
