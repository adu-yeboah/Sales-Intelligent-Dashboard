import { LeadsSkeleton } from "@/components/leads/leads-table/leads-skeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function LeadsLoading() {
    return (
        <div className="flex flex-col h-full">
            <div className="px-8 py-6 border-b border-gray-800 bg-gray-950/30">
                <div className="flex justify-between items-center mb-6">
                    <div className="space-y-2">
                        <Skeleton className="h-8 w-48" />
                        <Skeleton className="h-4 w-64" />
                    </div>
                    <div className="flex gap-3">
                        <Skeleton className="h-10 w-24" />
                        <Skeleton className="h-10 w-28" />
                    </div>
                </div>
                <div className="flex gap-3 py-4">
                    <Skeleton className="h-10 w-40" />
                    <Skeleton className="h-10 w-32" />
                    <Skeleton className="h-10 w-32" />
                </div>
            </div>
            <div className="flex-1">
                <LeadsSkeleton />
            </div>
        </div>
    );
}
