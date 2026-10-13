import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';
import Lenis from 'lenis';

export function SmoothScroll({ children }) {
  const lenisRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      lerp: 0.08,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.4,
      smoothWheel: true
    });

    lenisRef.current = lenis;

    let frame;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return children;
}
