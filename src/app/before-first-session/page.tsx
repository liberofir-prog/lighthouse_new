import type { Metadata } from "next";
import SessionPage from "@/components/session/session-page";
import { firstSession } from "@/content/session-pages";
import { sessionMetadata } from "@/lib/session-metadata";
import { resolveSessionParams, type RawSearchParams } from "@/lib/session-params";

export const metadata: Metadata = sessionMetadata(firstSession);

export default async function BeforeFirstSessionPage({
  searchParams,
}: {
  searchParams: Promise<RawSearchParams>;
}) {
  return (
    <SessionPage
      content={firstSession}
      params={resolveSessionParams(await searchParams)}
    />
  );
}
