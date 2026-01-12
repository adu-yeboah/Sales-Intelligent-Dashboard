import { Skeleton } from "@/components/ui/skeleton";

export function LeadsSkeleton() {
    return (
        <div className="h-full flex flex-col bg-zinc-950">
            <div className="grid grid-cols-12 gap-x-6 px-10 py-5 bg-zinc-900/40 border-b border-white/5 uppercase tracking-widest text-[10px] font-black text-zinc-600">
                <div className="col-span-5 pl-12"><Skeleton className="h-3 w-24" /></div>
                <div className="col-span-2"><Skeleton className="h-3 w-16" /></div>
                <div className="col-span-2"><Skeleton className="h-3 w-16" /></div>
                <div className="col-span-1"><Skeleton className="h-3 w-12" /></div>
                <div className="col-span-2 text-right"><Skeleton className="h-3 w-16 ml-auto" /></div>
            </div>

            <div className="flex-1 space-y-px overflow-hidden">
                {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="grid grid-cols-12 gap-x-6 items-center px-10 py-6 border-b border-white/[0.02]">
                        <div className="col-span-5 flex items-center gap-5">
                            <Skeleton className="w-10 h-10 rounded-2xl" />
                            <div className="flex flex-col gap-2">
                                <Skeleton className="h-4 w-40" />
                                <Skeleton className="h-3 w-28" />
                            </div>
                        </div>
                        <div className="col-span-2"><Skeleton className="h-4 w-24 rounded-lg" /></div>
                        <div className="col-span-2"><Skeleton className="h-4 w-20 rounded-lg" /></div>
                        <div className="col-span-1"><Skeleton className="h-6 w-16 rounded-xl" /></div>
                        <div className="col-span-2 flex justify-end"><Skeleton className="h-4 w-24 rounded-lg" /></div>
                    </div>
                ))}
            </div>
        </div>
    );
}
