import type { Metadata } from "next";
import SessionPage from "@/components/session/session-page";
import { parentsMeeting } from "@/content/session-pages";
import { sessionMetadata } from "@/lib/session-metadata";
import { resolveSessionParams, type RawSearchParams } from "@/lib/session-params";

export const metadata: Metadata = sessionMetadata(parentsMeeting);

export default async function BeforeParentsMeetingPage({
  searchParams,
}: {
  searchParams: Promise<RawSearchParams>;
}) {
  return (
    <SessionPage
      content={parentsMeeting}
      params={resolveSessionParams(await searchParams)}
    />
  );
}
