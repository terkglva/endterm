// src/components/LazyImage.jsx
import React, { useState, useEffect, useRef } from 'react';

const LazyImage = ({ src, alt, className, style }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before image enters viewport
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const skeletonStyle = {
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%)',
    backgroundSize: '200% 100%',
    animation: 'skeleton-loading 1.5s ease-in-out infinite',
    borderRadius: '8px',
  };

  const imgStyle = {
    ...style,
    opacity: isLoading ? 0 : 1,
    transition: 'opacity 0.5s ease-in-out',
  };

  return (
    <div ref={imgRef} style={{ position: 'relative', ...style }}>
      {/* Skeleton Loader */}
      {isLoading && <div style={skeletonStyle} />}

      {/* Actual Image */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={className}
          style={imgStyle}
          onLoad={handleLoad}
        />
      )}

      {/* Add animation keyframes to document */}
      <style jsx>{`
        @keyframes skeleton-loading {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      `}</style>
    </div>
  );
};

export default LazyImage;