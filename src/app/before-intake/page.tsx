import type { Metadata } from "next";
import SessionPage from "@/components/session/session-page";
import { intake } from "@/content/session-pages";
import { sessionMetadata } from "@/lib/session-metadata";
import { resolveSessionParams, type RawSearchParams } from "@/lib/session-params";

export const metadata: Metadata = sessionMetadata(intake);

export default async function BeforeIntakePage({
  searchParams,
}: {
  searchParams: Promise<RawSearchParams>;
}) {
  return (
    <SessionPage
      content={intake}
      params={resolveSessionParams(await searchParams)}
    />
  );
}
