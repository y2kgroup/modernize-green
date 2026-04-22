'use client';

import { useState, useEffect } from 'react';

export default function Testimonials({ data }) {
  if (!data?.enabled) return null;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % data.testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [data.testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + data.testimonials.length) % data.testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % data.testimonials.length);
  };

  return (
    <section className="py-16 md:py-20 bg-neutral-50">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-dark mb-12">
          {data.headline}
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm relative">
            {data.testimonials[currentIndex] && (
              <div className="text-center">
                <p className="text-lg md:text-xl text-brand-ink/80 leading-relaxed mb-6">
                  "{data.testimonials[currentIndex].text}"
                </p>
                {data.testimonials[currentIndex].author && (
                  <p className="font-semibold text-brand-dark">
                    — {data.testimonials[currentIndex].author}
                  </p>
                )}
              </div>
            )}
          </div>
          <div className="flex items-center justify-center mt-6 gap-4">
            <button
              onClick={goToPrevious}
              className="p-2 rounded-full border border-brand-dark/20 hover:bg-brand-dark/5 transition"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex gap-2">
              {data.testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition ${
                    index === currentIndex ? 'bg-brand-accent' : 'bg-brand-dark/20'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={goToNext}
              className="p-2 rounded-full border border-brand-dark/20 hover:bg-brand-dark/5 transition"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
