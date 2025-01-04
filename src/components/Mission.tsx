"use client"
import { Bebas_Neue } from 'next/font/google';
import { useEffect, useState, useRef } from 'react';

const bebas_neue = Bebas_Neue({ subsets: ['latin'], weight: "400" });

interface TextItem {
  text: string;
  size: string;
  spacing?: string;
  highlight?: boolean;
}

const textLayout: TextItem[][] = [
  [
    { text: 'My', size: 'text-lg sm:text-2xl md:text-3xl', spacing: 'pr-1 sm:pr-2 md:pr-4' },
    { text: 'mission', size: 'text-5xl sm:text-7xl md:text-8xl', highlight: true },
    { text: 'is to', size: 'text-base sm:text-xl md:text-3xl', spacing: 'pr-1 sm:pr-2 md:pr-4' },
    { text: 'create', size: 'text-4xl sm:text-6xl md:text-6xl', highlight: true },
  ],
  [
    { text: 'a', size: 'text-lg sm:text-2xl md:text-4xl', spacing: 'pr-1 sm:pr-2 md:pr-4' },
    { text: 'legacy', size: 'text-8xl md:text-9xl', highlight: true },
    { text: 'by', size: 'text-2xl sm:text-5xl md:text-6xl', spacing: 'pr-1 sm:pr-2 md:pr-4' },
  ],
  [
    { text: 'fixing', size: 'text-4xl sm:text-5xl md:text-4xl', highlight: true },
    { text: 'problems', size: 'text-base sm:text-3xl md:text-5xl', spacing: 'pl-1 sm:pl-2 md:pl-4' },
    { text: 'and', size: 'text-2xl sm:text-xl md:text-3xl', spacing: 'pr-1 sm:pr-2 md:pr-4' },
    { text: 'sharing', size: 'text-4xl sm:text-6xl md:text-6xl', highlight: true },
  ],
  [
    { text: 'knowledge,', size: 'text-3xl sm:text-5xl md:text-7xl', spacing: 'pr-1 sm:pr-2 md:pr-4' },
    { text: 'being', size: 'text-lg sm:text-2xl md:text-4xl' },
    { text: 'creative', size: 'text-4xl sm:text-7xl md:text-6xl', highlight: true },
  ],
  [
    { text: 'as', size: 'text-base sm:text-xl md:text-3xl', spacing: 'pr-1 sm:pr-2 md:pr-4' },
    { text: 'I', size: 'text-lg sm:text-2xl md:text-4xl', spacing: 'pr-1 sm:pr-2 md:pr-4' },
    { text: 'build', size: 'text-3xl sm:text-6xl md:text-8xl', highlight: true },
    { text: 'it.', size: 'text-lg sm:text-2xl md:text-4xl', spacing: 'pl-1 sm:pl-2 md:pl-4' }
  ]
];

export default function Mission() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="flex pt-8 sm:pt-12 md:pt-20 bg-wtsecondary">
      <section ref={sectionRef} className="container mx-auto min-h-fit px-4">
        <div className={`${bebas_neue.className} flex flex-col items-center justify-center`}>
          {textLayout.map((line, lineIndex) => (
            <div
              key={lineIndex}
              className={`
                flex flex-wrap items-baseline justify-center w-full 
                space-x-1 sm:space-x-1.5 md:space-x-2
                mb-2 sm:mb-1 md:mb-0
                transition-all duration-1000
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
              style={{
                transitionDelay: isVisible ? `${lineIndex * 150}ms` : '0ms',
              }}
            >
              {line.map((word, wordIndex) => (
                <div
                  key={wordIndex}
                  className={`
                    transform
                    ${word.spacing || ''}
                    transition-all duration-300
                    hover:scale-105
                  `}
                >
                  <span className={`
                    ${word.size}
                    ${word.highlight ? 'text-indigo-600' : 'text-black'}
                    font-bold
                    transition-all duration-300
                    hover:drop-shadow-lg
                    whitespace-nowrap
                  `}>
                    {word.text}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}