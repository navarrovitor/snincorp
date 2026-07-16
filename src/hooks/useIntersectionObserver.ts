"use client";

import { useEffect, useRef, useState } from "react";

interface UseIntersectionObserverOptions extends IntersectionObserverInit {
  /** Once true, stop observing (useful for one-time fade-in animations). */
  freezeOnceVisible?: boolean;
}

export function useIntersectionObserver<T extends Element>({
  threshold = 0.15,
  root = null,
  rootMargin = "0px",
  freezeOnceVisible = true,
}: UseIntersectionObserverOptions = {}) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (freezeOnceVisible && isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;
        setIsVisible(visible);

        if (visible && freezeOnceVisible) {
          observer.disconnect();
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [threshold, root, rootMargin, freezeOnceVisible, isVisible]);

  return { ref, isVisible };
}
