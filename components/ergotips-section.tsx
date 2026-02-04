'use client';

import { Button } from '@/components/ui/button';

export function ErgoTipsSection() {
  const tips = [
    {
      time: '8:00 AM',
      tip: 'Start your day with ergonomic setup check—monitor at eye level, feet flat on floor.',
      icon: '👀',
    },
    {
      time: '10:30 AM',
      tip: 'Time to move! Stand for the next 30 minutes and use that standing desk height.',
      icon: '🚀',
    },
    {
      time: '12:30 PM',
      tip: 'Lunch break: Step away, stretch your shoulders, walk around for 10 minutes.',
      icon: '🥗',
    },
    {
      time: '3:00 PM',
      tip: 'Afternoon slump? Adjust lighting to peak brightness to combat fatigue.',
      icon: '💪',
    },
    {
      time: '5:00 PM',
      tip: 'Wind down: Dim lighting gradually and prepare for proper work closure.',
      icon: '🌅',
    },
    {
      time: '7:00 PM',
      tip: 'Personal time: Engage in light stretching and screen-free relaxation.',
      icon: '🧘',
    },
  ];

  return (
    <section className="w-full py-20 px-4 md:px-8 bg-gradient-to-b from-[#F0F9F8] to-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-outfit text-4xl md:text-5xl font-bold text-[#008080] mb-4 text-balance">
            Your Daily Ergo-Tips
          </h2>
          <p className="text-lg text-[#005566] max-w-2xl mx-auto">
            Follow science-backed wellness rituals for optimal productivity and health.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          {tips.map((item, idx) => (
            <div key={idx} className="glass-effect-dark rounded-xl p-6 flex items-center gap-6 hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl flex-shrink-0">{item.icon}</div>
              <div className="flex-1">
                <h3 className="font-outfit text-lg font-semibold text-[#008080] mb-2">
                  {item.time}
                </h3>
                <p className="text-[#005566]">
                  {item.tip}
                </p>
              </div>
              <div className="hidden sm:flex w-24 h-24 items-center justify-center rounded-full bg-gradient-to-br from-[#AAF0D1]/20 to-[#008080]/10">
                <span className="text-2xl">{item.icon}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-[#005566] mb-6 text-lg">
            Want personalized wellness recommendations?
          </p>
          <Button className="bg-[#008080] hover:bg-[#005566] text-white px-8 py-6 text-lg rounded-lg font-outfit">
            Get Your Personal Ritual
          </Button>
        </div>
      </div>
    </section>
  );
}
