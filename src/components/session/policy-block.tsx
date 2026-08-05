import { FadeIn } from "@/lib/motion";
import { cancellationPolicy, paymentBlock } from "@/content/session-pages";

export function PaymentBlock({
  price,
  payments,
}: {
  price: number | null;
  payments: string[];
}) {
  return (
    <FadeIn>
      <div className="rounded-2xl border border-border bg-card p-5 shadow-warm sm:p-6">
        {/* The amount is set in bold at body size, not enlarged. A price is
            not the message of this page, and a big number reads as a sales
            figure on what is meant to be a reassuring note. */}
        {price !== null && (
          <p className="mb-3 text-[1.0625rem] leading-[1.75] text-muted-foreground">
            {paymentBlock.priceLabel}{" "}
            <strong className="font-bold text-foreground">
              {`${price} ש"ח`}
            </strong>
          </p>
        )}

        <p className="text-[1.0625rem] leading-[1.75] text-muted-foreground">
          {paymentBlock.body}
        </p>

        <p className="mt-5 text-center text-sm font-medium text-muted-foreground/80">
          {paymentBlock.methodsLabel}
        </p>
        <ul className="mt-2.5 flex flex-wrap justify-center gap-2">
          {payments.map((method) => (
            <li
              key={method}
              className="rounded-full bg-amber/15 px-3.5 py-1.5 text-sm text-amber-foreground"
            >
              {method}
            </li>
          ))}
        </ul>
      </div>
    </FadeIn>
  );
}

export function CancellationBlock() {
  return (
    <FadeIn>
      <div className="rounded-2xl border border-border bg-secondary/40 p-5 sm:p-6">
        <p className="text-base leading-relaxed text-muted-foreground">
          {cancellationPolicy.intro}
        </p>
        <p className="mt-4 font-medium text-foreground">
          {cancellationPolicy.leadIn}
        </p>
        <ul className="mt-2 space-y-1.5">
          {cancellationPolicy.items.map((item) => (
            <li
              key={item}
              className="flex gap-2 text-base leading-relaxed text-muted-foreground"
            >
              <span aria-hidden="true" className="text-amber">
                •
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </FadeIn>
  );
}
