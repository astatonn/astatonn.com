import { useState, useEffect, useRef } from 'react';
import Image, { StaticImageData } from 'next/image';

type LazyImageProps = {
  src: string | StaticImageData; // Support both strings and StaticImageData
  alt: string;
  width: number;
  height?: number;
  className?: string;
};

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, width, height, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef<HTMLDivElement | null>(null);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.2 } 
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={imgRef}
      style={{
        minHeight: height || 200,
        minWidth: width,
      }}
      className={`${className} transition-opacity duration-500 ${
        hasLoaded ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {isVisible && (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height || 200}
          className="rounded-lg"
          onLoadingComplete={() => setHasLoaded(true)} // Trigger animation when image loads
        />
      )}
    </div>
  );
};

export default LazyImage;
