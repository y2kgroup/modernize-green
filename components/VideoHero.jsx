'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

export default function VideoHero({ data }) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  if (!data?.enabled) return null;

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <section className="relative bg-brand-dark text-white overflow-hidden">
      {data.videoBackground && (
        <>
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            onLoadedData={() => setVideoLoaded(true)}
          >
            <source src={data.videoBackground} type="video/mp4" />
          </video>
          {!videoLoaded && data.backgroundImage && (
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40"
              style={{ backgroundImage: `url('${data.backgroundImage}')` }}
            />
          )}
        </>
      )}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(31,33,28,0.4) 0%, rgba(31,33,28,0.85) 85%)',
        }}
      />
      <div className="relative container-narrow py-28 md:py-36 lg:py-44">
        {data.eyebrow && (
          <div className="eyebrow mb-5">{data.eyebrow}</div>
        )}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] max-w-4xl">
          {data.headline}
        </h1>
        {data.subheadline && (
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl">
            {data.subheadline}
          </p>
        )}
        {(data.primaryButton || data.secondaryButton) && (
          <div className="mt-10 flex flex-wrap gap-4">
            {data.primaryButton && (
              <Link href={data.primaryButton.href} className="btn-primary">
                {data.primaryButton.label}
              </Link>
            )}
            {data.secondaryButton && (
              <Link href={data.secondaryButton.href} className="btn-secondary">
                {data.secondaryButton.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
