
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import type { AdapterAccountType } from 'next-auth/adapters';

export const users = sqliteTable("user", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    name: text("name"),
    email: text("email").unique(),
    emailVerified: integer("emailVerified", { mode: "timestamp_ms" }),
    image: text("image"),
});

export const accounts = sqliteTable(
    "account",
    {
        userId: text("userId")
            .notNull()
            .references(() => users.id, { onDelete: "cascade" }),
        type: text("type").$type<AdapterAccountType>().notNull(),
        provider: text("provider").notNull(),
        providerAccountId: text("providerAccountId").notNull(),
        refresh_token: text("refresh_token"),
        access_token: text("access_token"),
        expires_at: integer("expires_at"),
        token_type: text("token_type"),
        scope: text("scope"),
        id_token: text("id_token"),
        session_state: text("session_state"),
    },
    (account) => ({
        compoundKey: {
            columns: [account.provider, account.providerAccountId],
            name: "account_provider_providerAccountId_pk",
        }
    })
);

export const sessions = sqliteTable("session", {
    sessionToken: text("sessionToken").primaryKey(),
    userId: text("userId")
        .notNull()
        .references(() => users.id, { onDelete: "cascade" }),
    expires: integer("expires", { mode: "timestamp_ms" }).notNull(),
});

export const verificationTokens = sqliteTable(
    "verificationToken",
    {
        identifier: text("identifier").notNull(),
        token: text("token").notNull(),
        expires: integer("expires", { mode: "timestamp_ms" }).notNull(),
    },
    (verificationToken) => ({
        compositePk: {
            columns: [verificationToken.identifier, verificationToken.token],
            name: "verificationToken_identifier_token_pk",
        }
    })
);

// App Domain Tables

export const leads = sqliteTable('leads', {
    id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
    firstName: text('firstName').notNull(),
    lastName: text('lastName').notNull(),
    email: text('email').notNull(),
    title: text('title'),
    company: text('company').notNull(),
    industry: text('industry'),
    size: text('size'), // '1-10' | '11-50' etc
    status: text('status'), // 'New' | 'Contacted' etc
    lastActivity: text('lastActivity'), // ISO string
    avatar: text('avatar'),
});

export const activities = sqliteTable('activities', {
    id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
    leadId: text('leadId').notNull().references(() => leads.id, { onDelete: 'cascade' }),
    type: text('type').notNull(), // 'email' | 'call' etc
    content: text('content').notNull(),
    timestamp: text('timestamp').notNull(),
    performedBy: text('performedBy').notNull(),
});
