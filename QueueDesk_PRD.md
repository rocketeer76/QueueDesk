# QueueDesk — Product Requirements Document

**Tagline:** Support tickets, solved together.

## Product Summary
QueueDesk is a lightweight support-ticket system for small teams. Customers or internal users can create support requests while support agents manage assignment, priority, status, discussion, and resolution.

## Goals
- Make support requests easy to submit and follow.
- Give agents a clear queue and workflow.
- Keep requester and internal-agent conversations separate where required.
- Maintain a clear activity trail for every ticket.
- Demonstrate a production-oriented Astro + Solid + TypeScript application.

## Target Users
**Requester:** create tickets, view own tickets, reply, upload attachments, reopen resolved tickets.

**Support Agent:** view team queue, assign tickets, change status and priority, reply publicly, add internal notes, resolve tickets.

**Administrator:** manage users, categories, permissions, and system settings.

## Core User Flows
### Requester
1. Sign in.
2. Create ticket.
3. Select category and priority.
4. Add description.
5. Optionally attach files.
6. Submit ticket.
7. Receive confirmation.
8. Follow replies and status changes.
9. Reply to agent.
10. Reopen a resolved ticket if allowed.

### Agent
1. Open ticket queue.
2. Filter by status, priority, category, or assignee.
3. Open a ticket.
4. Assign ticket.
5. Reply publicly or add internal note.
6. Change priority.
7. Move ticket through workflow.
8. Resolve ticket.

## Statuses
- `open`
- `in_progress`
- `waiting`
- `resolved`
- `closed`

## Priorities
- `low`
- `normal`
- `high`
- `urgent`

## Required Screens
- Sign in
- Dashboard
- Ticket queue
- New ticket
- Ticket detail
- Requester ticket list
- Team management
- Category management
- Reports
- Settings
- Mobile ticket list

## Dashboard Requirements
Display open, in-progress, waiting, and resolved ticket counts, recent activity, ticket trend, and oldest unresolved tickets.

## Ticket Queue
Filters: status, priority, category, assignee, requester.

Search: ticket number, title, requester, ticket body.

## Ticket Detail
Show ticket number, title, status, priority, requester, assignee, category, conversation, internal notes, attachments, activity timeline, and timestamps.

## Data Model
Core tables:
- `users`
- `tickets`
- `ticket_comments`
- `ticket_categories`
- `ticket_attachments`
- `ticket_activities`

Suggested `tickets` fields: `id`, `requester_id`, `assignee_id`, `category_id`, `title`, `description`, `status`, `priority`, `resolved_at`, `created_at`, `updated_at`.

## Authorization Rules
- Requesters can only view their own tickets.
- Agents can view all workspace tickets.
- Admins can manage all system data.
- Internal notes must never be visible to requesters.

## Files
Use Cloudflare R2 for attachments. Validate file type, size, ownership, and download authorization.

## Email
Use Resend for ticket created, ticket assigned, new public reply, and ticket resolved notifications.

## Validation
Use Zod for ticket creation, comment creation, assignment, status transition, priority changes, and admin mutations.

## Testing
### Vitest
- Status transition logic
- Authorization helpers
- Validation
- Search/filter helpers

### Playwright
- Requester creates ticket
- Agent assigns ticket
- Agent replies
- Requester replies
- Agent resolves ticket
- Unauthorized requester cannot access another ticket

## Technology Baseline
- Astro
- SolidJS
- TypeScript
- Vite
- Node.js
- Tailwind CSS
- Neon Postgres
- Neon Auth
- Direct SQL, no ORM
- Zod
- Cloudflare R2
- Resend
- Vitest
- Playwright
- ESLint
- Prettier
- Sentry
- GitHub Actions
- Netlify
- Cloudflare DNS
- Netlify-managed SSL, optionally proxied through Cloudflare

## Non-Functional Requirements
Responsive UI, accessible forms, no secrets in the client bundle, rate limiting on login and ticket creation, Sentry error capture, sanitized user-generated content, and fast server-rendered initial load.

## MVP Acceptance Criteria
- Requester can create a ticket.
- Agent can assign it.
- Agent and requester can exchange public replies.
- Agent can create an internal note.
- Agent can move ticket through workflow.
- Every status change is recorded.
- Authorization rules are enforced.
- Attachments work.
- Email notifications work.
- Main flows pass Playwright.
- Application deploys successfully on Netlify.
