import { db } from "@/db";
import { leads } from "@/db/schema";
import { eq, and, like, or } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search");
    const industry = searchParams.get("industry");
    const size = searchParams.get("size");
    const status = searchParams.get("status");

    try {
        let query = db.select().from(leads);
        const filters = [];

        if (search) {
            filters.push(
                or(
                    like(leads.firstName, `%${search}%`),
                    like(leads.lastName, `%${search}%`),
                    like(leads.company, `%${search}%`),
                    like(leads.email, `%${search}%`)
                )
            );
        }

        if (industry && industry !== "All") {
            filters.push(eq(leads.industry, industry));
        }

        if (size && size !== "All") {
            filters.push(eq(leads.size, size));
        }

        if (status && status !== "All") {
            filters.push(eq(leads.status, status));
        }

        // Apply all filters
        const results = await (filters.length > 0
            ? db.select().from(leads).where(and(...filters))
            : db.select().from(leads));

        return NextResponse.json(results);
    } catch (error) {
        console.error("Database error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
