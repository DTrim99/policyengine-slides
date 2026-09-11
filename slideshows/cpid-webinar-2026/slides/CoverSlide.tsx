import CoverSlideTemplate from '@/components/layout/CoverSlide';
import { speakers } from '@/lib/speakers';

/** Social-post style title slide: the four faces, the date, the hook. */
export default function CoverSlide() {
  return (
    <CoverSlideTemplate
      title="The new child poverty numbers, and how state reforms would affect them"
      subtitle="Census publishes the 2025 poverty numbers at 10am ET. Four hours later: guest remarks on the release, and a live demo of PolicyEngine's new Child Poverty Impact Dashboard."
      event="Live webinar"
      date="Tuesday, September 15, 2026 · 2:00 pm ET"
      speakers={[
        speakers['cynthia-osborne'],
        speakers['joshua-mccabe'],
        { ...speakers['david-trimmer'], title: 'Research Analyst, PolicyEngine' },
        { ...speakers['max-ghenis'], title: 'CEO, PolicyEngine' },
      ]}
    />
  );
}
