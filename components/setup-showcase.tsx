'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function SetupShowcase() {
  const setups = [
    {
      name: 'The Focus Flow',
      category: 'Professional',
      price: '$2,499',
      image: '/setup-focus-flow.jpg',
      items: ['Standing Desk', 'Ergonomic Chair', 'LED Lighting', 'Monitor Stand'],
    },
    {
      name: 'The Creative Haven',
      category: 'Creative Pro',
      price: '$3,299',
      image: '/setup-creative-haven.jpg',
      items: ['Curved Desk', 'Premium Chair', 'Dual Monitors', 'Ambient Lighting'],
    },
    {
      name: 'The Zen Zone',
      category: 'Wellness',
      price: '$1,899',
      image: '/setup-zen-zone.jpg',
      items: ['Minimalist Desk', 'Meditation Chair', 'Soft Lighting', 'Plant Stands'],
    },
    {
      name: 'The All-Star Suite',
      category: 'Ultimate',
      price: '$5,999',
      image: '/setup-all-star-suite.jpg',
      items: ['Premium Standing Desk', 'Luxury Chair', 'Advanced Lighting', 'Full Suite'],
    },
  ];

  return (
    <section className="w-full py-20 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-outfit text-4xl md:text-5xl font-bold text-[#008080] mb-4 text-balance">
            Curated Workspace Setups
          </h2>
          <p className="text-lg text-[#005566] max-w-2xl mx-auto">
            Choose a pre-configured setup or build your own perfect workspace.
          </p>
        </div>

        {/* Setups Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {setups.map((setup, idx) => (
            <Card key={idx} className="glass-effect-dark border-0 hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-6">
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-[#008080]/10 to-[#AAF0D1]/10">
                  <Image
                    src={setup.image || "/placeholder.svg"}
                    alt={setup.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-outfit text-xl font-semibold text-[#008080] mb-2">
                  {setup.name}
                </h3>
                <p className="text-xs text-[#AAF0D1] uppercase tracking-wide mb-3">
                  {setup.category}
                </p>
                <ul className="text-sm text-[#005566] space-y-1 mb-4">
                  {setup.items.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-[#AAF0D1] mr-2">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
                
                
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button className="bg-[#FFBF00] hover:bg-[#E6A800] text-black px-12 py-6 text-lg rounded-lg font-outfit font-semibold">
            Build Your Custom Setup
          </Button>
        </div>
      </div>
    </section>
  );
}
