import React, { useState } from 'react';
import Image from 'next/image';

interface ImageWithModalProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const ImageWithModal = ({ src, alt, width, height, className }: ImageWithModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`cursor-pointer ${className}`}
        onClick={() => setIsModalOpen(true)}
      />
      
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-w-4xl max-h-[100vh]">
            <button
              className="absolute -top-10 right-0 text-wtsecondary text-xl p-2"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>
            <Image
              src={src}
              alt={alt}
              width={1200}
              height={800}
              className="w-full h-auto object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageWithModal;