import SessionHero from "@/components/session/session-hero";
import SessionSection from "@/components/session/session-section";
import InfoCards from "@/components/session/info-cards";
import AudienceNotes from "@/components/session/audience-notes";
import LocationBlock from "@/components/session/location-block";
import { PaymentBlock, CancellationBlock } from "@/components/session/policy-block";
import SessionFaq from "@/components/session/session-faq";
import PersonalNote from "@/components/session/personal-note";
import ClosingCta from "@/components/session/closing-cta";
import { FadeIn } from "@/lib/motion";
import {
  cancellationPolicy,
  faqTitle,
  locationBlock,
  paymentBlock,
  timingBlock,
  type PageSection,
  type SessionPageContent,
} from "@/content/session-pages";
import type { SessionParams } from "@/lib/session-params";

type Tone = "plain" | "tinted";

/** Consecutive sections of the same tone become one colour band. */
function groupByTone(sections: PageSection[]) {
  return sections.reduce<{ tone: Tone; items: PageSection[] }[]>(
    (groups, section) => {
      const tone: Tone = section.tone ?? "plain";
      const last = groups[groups.length - 1];
      if (last?.tone === tone) last.items.push(section);
      else groups.push({ tone, items: [section] });
      return groups;
    },
    [],
  );
}

function SectionBody({
  section,
  audiences,
}: {
  section: PageSection;
  audiences: SessionParams["audiences"];
}) {
  if (section.audienceNotes) {
    return <AudienceNotes notes={section.audienceNotes} visible={audiences} />;
  }
  if (section.cards) {
    return <InfoCards cards={section.cards} />;
  }
  return (
    <FadeIn>
      <div className="space-y-3.5 rounded-2xl border border-border bg-card p-5 shadow-warm sm:p-6">
        {section.paragraphs?.map((text) => (
          <p
            key={text}
            className="text-[1.0625rem] leading-[1.75] text-muted-foreground"
          >
            {text}
          </p>
        ))}
      </div>
    </FadeIn>
  );
}

/**
 * A tinted band is marked by a warm rule at each end rather than by a wave
 * cut-out. The marketing site separates its sections the same way, and a
 * decorative wave would pull attention on a page whose job is to reassure.
 */
function ToneBand({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative bg-secondary/30">
      <div aria-hidden="true" className="divider-warm absolute inset-x-0 top-0" />
      {children}
      <div
        aria-hidden="true"
        className="divider-warm absolute inset-x-0 bottom-0"
      />
    </div>
  );
}

/**
 * Renders a complete family-facing session page from its content object.
 * The practical blocks (location, timing, payment, cancellation, FAQ, personal
 * note, CTA) are identical on every page and are appended automatically.
 */
export default function SessionPage({
  content,
  params,
}: {
  content: SessionPageContent;
  params: SessionParams;
}) {
  const groups = groupByTone(content.sections);

  return (
    <main className="bg-background">
      <SessionHero
        pageTitle={content.pageTitle}
        greeting={content.hero.greeting}
        paragraphs={content.hero.paragraphs}
        patientName={params.patientName}
      />

      {groups.map((group) => {
        const body = group.items.map((section) => (
          <SessionSection
            key={section.id}
            title={section.title}
            subtitle={section.subtitle}
          >
            <SectionBody section={section} audiences={params.audiences} />
          </SessionSection>
        ));

        return group.tone === "tinted" ? (
          <ToneBand key={group.items[0].id}>{body}</ToneBand>
        ) : (
          <div key={group.items[0].id}>{body}</div>
        );
      })}

      <SessionSection title={locationBlock.title}>
        <LocationBlock
          locations={params.locations}
          isSpecific={params.hasSpecificLocation}
        />
      </SessionSection>

      <SessionSection title={timingBlock.title}>
        <FadeIn>
          <div className="rounded-2xl border border-border bg-card p-5 shadow-warm sm:p-6">
            <p className="text-[1.0625rem] leading-[1.75] text-muted-foreground">
              {timingBlock.body}
            </p>
          </div>
        </FadeIn>
      </SessionSection>

      <SessionSection title={paymentBlock.title}>
        <PaymentBlock price={params.price} payments={params.payments} />
      </SessionSection>

      {content.showCancellationPolicy && (
        <SessionSection title={cancellationPolicy.title}>
          <CancellationBlock />
        </SessionSection>
      )}

      <ToneBand>
        <SessionSection title={faqTitle}>
          <SessionFaq items={content.faq} />
        </SessionSection>
      </ToneBand>

      <SessionSection>
        <PersonalNote {...content.personalNote} />
      </SessionSection>

      <SessionSection className="pb-20">
        <ClosingCta message={content.whatsappMessage} />
      </SessionSection>
    </main>
  );
}
