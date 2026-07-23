"use client";

import { type RefObject, useEffect, useState } from "react";

/**
 * Devuelve true cuando el elemento referenciado está por entrar en pantalla
 * (o ya lo está). Se usa para diferir trabajo costoso —como el registro de
 * animaciones GSAP/ScrollTrigger— de secciones que están abajo del fold,
 * evitando que todas las secciones de la página compitan por el hilo
 * principal al mismo tiempo que se pinta el LCP.
 */
export function useNearViewport<T extends Element>(ref: RefObject<T | null>, rootMargin = "600px 0px") {
  const [isNear, setIsNear] = useState(false);

  useEffect(() => {
    if (isNear) return;
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsNear(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsNear(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current, isNear]);

  return isNear;
}
