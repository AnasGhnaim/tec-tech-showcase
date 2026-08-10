import { testimonials } from "@/data/testimonials";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { useLang } from "@/i18n/LanguageProvider";
import { testimonialsAr } from "@/i18n/content";

export function Testimonials() {
  const { t, lang, isRtl } = useLang();

  return (
    <section className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow={t("testimonials.eyebrow")} title={t("testimonials.title")} />

        <Reveal delay={0.08} className="mt-12">
          <Carousel opts={{ align: "start", loop: true, direction: isRtl ? "rtl" : "ltr" }} className="w-full">
            <CarouselContent className="-ml-4">
              {testimonials.map((base) => {
                const ar = lang === "ar" ? testimonialsAr[base.id] : undefined;
                const tm = { ...base, ...(ar ?? {}) };
                return (
                  <CarouselItem key={tm.id} className="pl-4 md:basis-1/2">
                    <Card className="h-full border-border bg-card">
                      <CardContent className="flex h-full flex-col p-8">
                        <svg viewBox="0 0 24 24" className="size-7 text-accent" aria-hidden="true">
                          <path
                            d="M9 6c-3 1.6-4.5 4.2-4.5 7.8V18h6v-6H7.2c0-2 .7-3.4 2.4-4.4L9 6Zm10 0c-3 1.6-4.5 4.2-4.5 7.8V18h6v-6h-3.3c0-2 .7-3.4 2.4-4.4L19 6Z"
                            fill="currentColor"
                          />
                        </svg>
                        <blockquote className="mt-6 flex-1 text-[1.05rem] leading-relaxed">
                          {tm.quote}
                        </blockquote>
                        <div className="mt-8 flex items-center gap-3 border-t border-border pt-6">
                          <span className="flex size-10 items-center justify-center rounded-full border border-accent/50 font-mono text-xs text-accent">
                            {base.initials}
                          </span>
                          <div>
                            <p className="text-sm font-medium">{tm.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {tm.role}, {tm.company}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <div className="mt-8 flex gap-2">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}
