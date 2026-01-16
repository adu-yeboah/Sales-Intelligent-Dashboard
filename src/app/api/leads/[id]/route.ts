import { db } from "@/db";
import { leads, activities } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;

    try {
        const leadResult = await db.select().from(leads).where(eq(leads.id, id)).get();

        if (!leadResult) {
            return NextResponse.json({ error: "Lead not found" }, { status: 404 });
        }

        const activityResults = await db
            .select()
            .from(activities)
            .where(eq(activities.leadId, id))
            .all();

        return NextResponse.json({
            lead: leadResult,
            activities: activityResults,
        });
    } catch (error) {
        console.error("Database error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
