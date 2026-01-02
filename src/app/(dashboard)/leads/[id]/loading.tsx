import { Skeleton } from "@/components/ui/skeleton";

export default function LeadProfileLoading() {
    return (
        <div className="flex flex-col h-full bg-black">
            <div className="flex items-center justify-between px-8 py-4 border-b border-gray-800 bg-gray-950/20">
                <div className="flex items-center gap-4">
                    <Skeleton className="w-10 h-10 rounded-lg" />
                    <div className="flex items-center gap-3">
                        <Skeleton className="w-12 h-12 rounded-xl" />
                        <div className="space-y-2">
                            <Skeleton className="h-5 w-40" />
                            <Skeleton className="h-4 w-32" />
                        </div>
                    </div>
                </div>
                <div className="flex gap-3">
                    <Skeleton className="h-10 w-20" />
                    <Skeleton className="h-10 w-28" />
                    <Skeleton className="h-10 w-10" />
                </div>
            </div>

            <div className="flex-1 grid grid-cols-12">
                <div className="col-span-4 border-r border-gray-800 p-8 space-y-8">
                    <Skeleton className="h-40 w-full rounded-2xl" />
                    <div className="space-y-4">
                        <Skeleton className="h-4 w-32" />
                        <Skeleton className="h-12 w-full rounded-xl" />
                        <Skeleton className="h-12 w-full rounded-xl" />
                        <Skeleton className="h-12 w-full rounded-xl" />
                    </div>
                </div>
                <div className="col-span-8 p-8 space-y-8">
                    <div className="flex justify-between items-center">
                        <Skeleton className="h-6 w-40" />
                        <div className="flex gap-2">
                            <Skeleton className="h-8 w-12" />
                            <Skeleton className="h-8 w-16" />
                            <Skeleton className="h-8 w-16" />
                        </div>
                    </div>
                    <div className="space-y-8">
                        <Skeleton className="h-32 w-full rounded-2xl ml-14" />
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="relative pl-14">
                                <Skeleton className="absolute left-4 top-2 w-4 h-4 rounded-full" />
                                <div className="space-y-2">
                                    <Skeleton className="h-4 w-48" />
                                    <Skeleton className="h-20 w-full rounded-xl" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
