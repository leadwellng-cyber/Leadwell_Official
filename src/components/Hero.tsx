import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { heroSlides } from "../data/site";
import { ButtonLink } from "./Button";
import { ArrowRight, ChevronLeft, ChevronRight } from "./icons";

const AUTO_MS = 6000;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const timer = useRef<number | null>(null);

  const count = heroSlides.length;

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + count) % count),
    [count]
  );

  useEffect(() => {
    if (paused) return;
    timer.current = window.setInterval(() => setIndex((i) => (i + 1) % count), AUTO_MS);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [paused, count]);

  const slide = heroSlides[index];

  return (
    <section
      className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-ink-950"
      aria-roledescription="carousel"
      aria-label="Featured stories"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <AnimatePresence mode="popLayout">
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduce ? 0 : 1.1, ease: "easeInOut" }}
        >
          <img
            src={slide.image}
            alt=""
            className={`h-full w-full object-cover ${reduce ? "" : "animate-slow-zoom"}`}
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "low"}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950/85 via-ink-950/55 to-ink-950/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-ink-950/20" />
        </motion.div>
      </AnimatePresence>

      <div className="container-lead relative z-10 flex h-full flex-col justify-end pb-20 sm:justify-center sm:pb-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="max-w-2xl"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow mb-4 text-gold-300">{slide.eyebrow}</p>
            <h1 className="font-display text-4xl font-semibold leading-[1.08] text-cream-50 sm:text-5xl lg:text-6xl">
              {slide.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-cream-100/80 sm:text-lg">
              {slide.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink to="/about" size="lg">
                Discover Leadwell
                <ArrowRight size={18} />
              </ButtonLink>
              <ButtonLink to="/projects" variant="outline-light" size="lg">
                Explore Our Projects
              </ButtonLink>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-7 left-0 right-0 z-20">
        <div className="container-lead flex items-center justify-between gap-4">
          <div className="flex items-center gap-2" role="tablist" aria-label="Slide indicators">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === index}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-gold-300" : "w-3 bg-cream-50/40 hover:bg-cream-50/70"
                }`}
              />
            ))}
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous slide"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream-50/30 text-cream-50 transition-colors hover:bg-cream-50 hover:text-ink-900"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next slide"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream-50/30 text-cream-50 transition-colors hover:bg-cream-50 hover:text-ink-900"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
