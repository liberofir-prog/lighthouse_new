import { FadeIn } from "@/lib/motion";
import type { AudienceKey, AudienceNote } from "@/content/session-pages";

export default function AudienceNotes({
  notes,
  visible,
}: {
  notes: AudienceNote[];
  visible: AudienceKey[];
}) {
  const shown = notes.filter((note) => visible.includes(note.key));
  if (shown.length === 0) return null;

  return (
    <div className="space-y-4">
      {shown.map((note, index) => (
        <FadeIn key={note.key} delay={index * 0.05}>
          {/* Deliberately the one block that is not a plain panel - it speaks to
              a specific reader, so it earns the amber. Kept to a 3px rule so it
              still sits at the same weight as the panels around it. */}
          <div className="rounded-2xl border border-amber/25 border-r-[3px] border-r-amber bg-amber/[0.07] p-5 sm:p-6">
            <h3 className="text-lg font-bold text-primary">{note.label}</h3>
            {note.body.map((text) => (
              <p
                key={text}
                className="mt-2 text-[1.0625rem] leading-[1.75] text-muted-foreground"
              >
                {text}
              </p>
            ))}
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
