import { useSprings, animated, SpringValue } from '@react-spring/web';
import React, { useRef, useEffect, useState } from 'react';

type BlurTextProps = {
  animateBy?: 'words' | 'letters';
  animationFrom?: Record<string, string | number>;
  animationTo?: Array<Record<string, string | number>>;
  className?: string;
  delay?: number;
  direction?: 'top' | 'bottom';
  easing?: (t: number) => number;
  onAnimationComplete?: () => void;
  rootMargin?: string;
  text?: string;
  threshold?: number;
};

const BlurText: React.FC<BlurTextProps> = ({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = (t) => t, // Default to linear easing
  onAnimationComplete,
}) => {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);
  const animatedCount = useRef(0);

  // Default animations based on direction
  const defaultFrom =
    direction === 'top'
      ? { filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,-50px,0)' }
      : { filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,50px,0)' };

  const defaultTo = [
    {
      filter: 'blur(5px)',
      opacity: 0.5,
      transform: direction === 'top' ? 'translate3d(0,5px,0)' : 'translate3d(0,-5px,0)',
    },
    { filter: 'blur(0px)', opacity: 1, transform: 'translate3d(0,0,0)' },
  ];

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current!);
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const springs = useSprings(elements.length, (i) => ({
    config: { easing },
    delay: i * delay,
    from: animationFrom || defaultFrom,
    to: inView
      ? async (next: (step: Record<string, string | number>) => Promise<void>) => {
        for (const step of animationTo || defaultTo) {
          await next(step);
        }
        animatedCount.current += 1;
        if (animatedCount.current === elements.length && onAnimationComplete) {
          onAnimationComplete();
        }
      }
      : animationFrom || defaultFrom,
  }));

  return (
    <div
      className={className}
      ref={ref}
      style={{ display: 'flex', flexWrap: 'wrap' }}
    >
      {springs[0].map((props, index) => (
        <animated.span
          key={index}
          style={{
            ...props,
            display: 'inline-block',
            willChange: 'transform, filter, opacity',
          } as unknown as { [key: string]: SpringValue<string | number> }}
        >
          {elements[index] === ' ' ? '\u00A0' : elements[index]}
          {animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
        </animated.span>
      ))}
    </div>
  );
};

export default BlurText;
