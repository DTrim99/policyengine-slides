import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import { IconMap2, IconStack2, IconGavel, IconCalendarTime, type Icon } from '@tabler/icons-react';

/** Directions raised at the September 11 stand-up. Trim to what the team is willing to say out loud. */
const items: { icon: Icon; title: string; text: string }[] = [
  { icon: IconMap2, title: 'More levels of government', text: 'Federal proposals alongside state ones; city and county reforms where the data supports it' },
  { icon: IconStack2, title: 'More programs', text: 'TANF, CCDF child care subsidies, SNAP, Medicaid and CHIP, LIHEAP' },
  { icon: IconGavel, title: 'Bills, not just parameters', text: 'Score reforms as they appear in state legislative bill trackers' },
  { icon: IconCalendarTime, title: 'More years', text: 'Project 2026, 2027, and 2028 as the baseline moves' },
];

export default function WhatsNextSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Where this goes next</SlideTitle>
      </SlideHeader>
      <div className="mt-8 grid grid-cols-2 gap-6">
        {items.map((item) => (
          <div key={item.title} className="content-card px-6 py-5 flex gap-5 items-start">
            <item.icon size={36} stroke={1.5} className="text-pe-teal shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">{item.title}</h3>
              <p className="text-lg text-gray-700 leading-snug">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </Slide>
  );
}
