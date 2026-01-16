
import { db } from '../src/db';
import { leads, activities } from '../src/db/schema';

// Minimal mock data generation logic within the script to ensure it works
const FIRST_NAMES = ['James', 'Mary', 'Robert', 'Patricia', 'John', 'Jennifer', 'Michael', 'Linda', 'William', 'Elizabeth'];
const LAST_NAMES = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez'];
const COMPANIES = ['TechFlow', 'GlobalSync', 'Innovatech', 'CloudNative', 'DataDriven', 'NexGen', 'Vertex Solutions', 'Peak Performance', 'Skyline Systems', 'Core Logic'];
const TITLES = ['CEO', 'CTO', 'VP of Sales', 'Marketing Manager', 'Product Lead', 'Software Engineer', 'Account Executive', 'Operations Director'];
const INDUSTRIES = ['Technology', 'Healthcare', 'Finance', 'Education', 'Manufacturing', 'Retail', 'Real Estate', 'Transportation', 'Energy', 'Marketing'];
const COMPANY_SIZES = ['1-10', '11-50', '51-200', '201-500', '501-1000', '1000+'];
const LEAD_STATUSES = ['New', 'Contacted', 'Qualified', 'Nurturing', 'Closed-Won', 'Closed-Lost'];

async function main() {
    console.log('Seeding database...');

    try {
        console.log('Clearing existing data...');
        // These might fail if tables don't exist yet, but drizzle-kit push should have created them
        try {
            await db.delete(activities);
            await db.delete(leads);
        } catch (e) {
            console.log('Note: Could not clear tables (they might be empty or not exist yet)');
        }

        console.log('Generating mock data...');
        const mockLeadsData = Array.from({ length: 50 }, (_, i) => {
            const firstName = FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)];
            const lastName = LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)];
            const company = COMPANIES[Math.floor(Math.random() * COMPANIES.length)];

            return {
                id: `lead-${i + 1}-${Math.random().toString(36).substr(2, 9)}`,
                firstName,
                lastName,
                email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${company.toLowerCase().replace(' ', '')}.com`,
                title: TITLES[Math.floor(Math.random() * TITLES.length)],
                company,
                industry: INDUSTRIES[Math.floor(Math.random() * INDUSTRIES.length)],
                size: COMPANY_SIZES[Math.floor(Math.random() * COMPANY_SIZES.length)],
                status: LEAD_STATUSES[Math.floor(Math.random() * LEAD_STATUSES.length)],
                lastActivity: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString(),
                avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`,
            };
        });

        console.log('Inserting leads...');
        await db.insert(leads).values(mockLeadsData);

        console.log('Leads inserted.');

        console.log('Generating activities...');
        const allActivities = [];
        const activityTypes = ['email', 'call', 'note', 'status_change', 'meeting'];

        for (const lead of mockLeadsData) {
            const numActivities = Math.floor(Math.random() * 5) + 1;
            for (let i = 0; i < numActivities; i++) {
                allActivities.push({
                    leadId: lead.id,
                    type: activityTypes[Math.floor(Math.random() * activityTypes.length)],
                    content: `Signal intelligence update: High velocity engagement detected from ${lead.company} network. Strategic realignment recommended.`,
                    timestamp: new Date(Date.now() - Math.floor(Math.random() * 1000000000)).toISOString(),
                    performedBy: 'Nexus Agent Alpha',
                });
            }
        }

        if (allActivities.length > 0) {
            await db.insert(activities).values(allActivities);
        }

        console.log('Activities inserted.');
        console.log('Database seeded successfully!');

    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}

main();
