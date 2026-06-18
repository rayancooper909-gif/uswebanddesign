import { type ComponentType, type ReactNode, Suspense, useEffect, useRef, useState } from 'react';

type LazySectionProps = {
  children: ReactNode;
  fallback?: ReactNode;
  minHeight?: string;
  rootMargin?: string;
};

export function SectionSkeleton({ minHeight = '360px' }: { minHeight?: string }) {
  return (
    <div className="container-custom py-14 md:py-20" style={{ minHeight }}>
      <div className="section-loader" aria-hidden="true">
        <div className="section-loader__line section-loader__line--short" />
        <div className="section-loader__line" />
        <div className="section-loader__grid">
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  );
}

export function LazySection({
  children,
  fallback,
  minHeight = '360px',
  rootMargin = '700px 0px',
}: LazySectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (shouldRender) return;

    const node = ref.current;
    if (!node || !('IntersectionObserver' in window)) {
      setShouldRender(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin, shouldRender]);

  return (
    <div ref={ref} style={shouldRender ? undefined : { minHeight }}>
      {shouldRender ? <Suspense fallback={fallback ?? <SectionSkeleton minHeight={minHeight} />}>{children}</Suspense> : fallback ?? <SectionSkeleton minHeight={minHeight} />}
    </div>
  );
}

export function lazyNamed<T extends ComponentType<unknown>>(
  loader: () => Promise<Record<string, T>>,
  exportName: string
) {
  return async () => {
    const module = await loader();
    return { default: module[exportName] };
  };
}
