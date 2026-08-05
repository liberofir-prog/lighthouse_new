/**
 * Route constants safe to import from both server and client components.
 *
 * Kept apart from `admin-auth.ts` on purpose: that module pulls in `crypto`
 * and `next/headers`, so a client component cannot import from it.
 */

/** Inbal's sending tool, inside the OTP-protected admin area. */
export const SEND_TOOL_ROUTE = "/admin/shlicha";

/** Prefix shared by the three family-facing session pages. */
export const SESSION_ROUTE_PREFIX = "/before-";

/** Routes that are nobody's business but Inbal's and her families'. */
export const UNTRACKED_ROUTES = [SESSION_ROUTE_PREFIX, "/admin"];
