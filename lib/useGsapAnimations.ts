"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type UseGsapAnimationsOptions = {
  /**
   * Limits selectors to a single root element. Use when possible to avoid
   * matching elements across route transitions.
   */
  root?: HTMLElement | null;
};

function prefersReducedMotion() {
  if (typeof window === "undefined") return true;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? true;
}

export function useGsapAnimations(options: UseGsapAnimationsOptions = {}) {
  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    if (prefersReducedMotion()) return;

    gsap.registerPlugin(ScrollTrigger);

    const root: ParentNode = options.root ?? document;

    const ctx = gsap.context(() => {
      // 1) Section headline groups.
      root.querySelectorAll<HTMLElement>("[data-gsap='headline']").forEach(el => {
        const kids = el.querySelectorAll<HTMLElement>(
          "[data-gsap-child='badge'], [data-gsap-child='title'], [data-gsap-child='subtitle'], [data-gsap-child='cta']",
        );

        gsap.fromTo(
          kids.length ? kids : el,
          { y: 18, opacity: 0, filter: "blur(6px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.7,
            ease: "power2.out",
            stagger: kids.length ? 0.08 : undefined,
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
            },
          },
        );
      });

      // 2) Stagger cards / list items.
      root.querySelectorAll<HTMLElement>("[data-gsap='stagger']").forEach(el => {
        const items = el.querySelectorAll<HTMLElement>("[data-gsap-item]");
        if (!items.length) return;

        gsap.fromTo(
          items,
          { y: 22, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power2.out",
            stagger: 0.08,
            scrollTrigger: {
              trigger: el,
              start: "top 82%",
            },
          },
        );
      });

      // 3) Soft parallax (for hero images / big illustrations).
      root.querySelectorAll<HTMLElement>("[data-gsap='parallax']").forEach(el => {
        gsap.fromTo(
          el,
          { y: 0 },
          {
            y: -18,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });

      // 4) Tiny micro-interaction: float on hover for marked cards.
      root.querySelectorAll<HTMLElement>("[data-gsap-hover='lift']").forEach(el => {
        const onEnter = () =>
          gsap.to(el, {
            y: -4,
            duration: 0.18,
            ease: "power2.out",
          });
        const onLeave = () =>
          gsap.to(el, {
            y: 0,
            duration: 0.22,
            ease: "power2.out",
          });

        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);

        // Cleanup for this element.
        ScrollTrigger.create({
          trigger: el,
          start: "top bottom",
          once: true,
          onKill: () => {
            el.removeEventListener("mouseenter", onEnter);
            el.removeEventListener("mouseleave", onLeave);
          },
        });
      });
    }, options.root ?? undefined);

    return () => {
      ctx.revert();
    };
  }, [options.root]);
}

