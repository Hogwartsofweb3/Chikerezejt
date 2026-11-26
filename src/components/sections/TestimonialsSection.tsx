import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../../data/testimonials';

export const TestimonialsSection: React.FC = () => (
  <section id="reviews" className="py-20" style={{ backgroundColor: '#F7F8F5' }}>
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Heading */}
      <div className="mb-10 max-w-2xl">
        <h2 className="text-3xl font-bold mb-3" style={{ color: '#142B4A' }}>
          What People Say
        </h2>
        <p className="text-base" style={{ color: '#465466' }}>
          Feedback from colleagues, supervisors, and collaborators.
        </p>
      </div>

      {/* Testimonial cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <article
            key={t.id}
            className="flex flex-col gap-4 bg-white rounded-2xl border p-6"
            style={{ borderColor: '#E4E9EC' }}
          >
            {/* Stars */}
            <div className="flex items-center gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star
                  key={i}
                  size={15}
                  className="fill-current"
                  style={{ color: '#D6A84B' }}
                  aria-hidden="true"
                />
              ))}
            </div>

            {/* Quote */}
            <blockquote
              className="text-sm leading-relaxed italic flex-1"
              style={{ color: '#465466' }}
            >
              "{t.message}"
            </blockquote>

            {/* Attribution */}
            <footer className="flex flex-col gap-0.5 pt-3 border-t" style={{ borderColor: '#E4E9EC' }}>
              <span className="text-sm font-semibold" style={{ color: '#142B4A' }}>
                {t.name}
              </span>
              <span className="text-xs" style={{ color: '#147D86' }}>
                {t.role}
              </span>
              <span className="text-xs" style={{ color: '#465466' }}>
                {t.organization}
              </span>
            </footer>
          </article>
        ))}
      </div>
    </div>
  </section>
);
