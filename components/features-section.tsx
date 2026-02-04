'use client';

import { Button } from '@/components/ui/button';

export function FeaturesSection() {
  const features = [
    {
      icon: '🪑',
      title: 'Active Seating',
      description: 'Move with purpose. Our ergonomic chairs adapt to your body, promoting healthy posture and active engagement.',
    },
    {
      icon: '💡',
      title: 'Smart Lighting',
      description: 'Light that understands you. Dynamic circadian lighting reduces eye strain and syncs with your natural rhythms.',
    },
    {
      icon: '🎯',
      title: 'Standing Desks',
      description: 'Rise to occasion. Electric-powered desks transition seamlessly between sitting and standing throughout your day.',
    },
    {
      icon: '🌡️',
      title: 'Climate Control',
      description: 'Perfect temperature zones. Breathable materials and micro-climate tech keep you comfortable all day.',
    },
  ];

  return (
    <section className="w-full py-20 px-4 md:px-8 bg-gradient-to-b from-white via-[#F9F9FB] to-[#F0F9F8]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-outfit text-4xl md:text-5xl font-bold text-[#008080] mb-4 text-balance">
            The Science of Comfort
          </h2>
          <p className="text-lg text-[#005566] max-w-2xl mx-auto">
            Every element of SmartMove is designed with ergonomic science at its core.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="glass-effect-dark rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-outfit text-xl font-semibold text-[#008080] mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-[#005566] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
