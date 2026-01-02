import { Skeleton } from "@/components/ui/skeleton";

export function LeadsSkeleton() {
    return (
        <div className="h-full flex flex-col bg-black">
            <div className="grid grid-cols-12 gap-x-4 px-8 py-3 bg-gray-950/60 border-b border-gray-800">
                <div className="col-span-4 pl-8"><Skeleton className="h-4 w-24" /></div>
                <div className="col-span-2"><Skeleton className="h-4 w-16" /></div>
                <div className="col-span-2"><Skeleton className="h-4 w-20" /></div>
                <div className="col-span-2"><Skeleton className="h-4 w-16" /></div>
                <div className="col-span-2"><Skeleton className="h-4 w-20" /></div>
            </div>

            <div className="flex-1 space-y-px">
                {Array.from({ length: 15 }).map((_, i) => (
                    <div key={i} className="grid grid-cols-12 gap-x-4 items-center px-8 py-4 border-b border-gray-900/50">
                        <div className="col-span-4 flex items-center gap-3">
                            <Skeleton className="w-8 h-8 rounded-full" />
                            <div className="flex flex-col gap-1.5">
                                <Skeleton className="h-4 w-32" />
                                <Skeleton className="h-3 w-24" />
                            </div>
                        </div>
                        <div className="col-span-2"><Skeleton className="h-4 w-24" /></div>
                        <div className="col-span-2"><Skeleton className="h-5 w-16 rounded" /></div>
                        <div className="col-span-2"><Skeleton className="h-5 w-16 rounded-full" /></div>
                        <div className="col-span-2"><Skeleton className="h-4 w-20" /></div>
                    </div>
                ))}
            </div>
        </div>
    );
}
