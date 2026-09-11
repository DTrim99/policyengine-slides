import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import BulletList from '@/components/content/BulletList';

/**
 * Architecture per the dashboard README. Run times measured on the final
 * build (PE-US 1.824.7, per-state slices, 9/11): household ~45-90s cold;
 * statewide 2-6 min for most states, ~10 min worst case (CA with several
 * provisions). Anything already computed — including every shared link
 * after its first open — loads instantly from the durable cache.
 */
export default function HowItRunsSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>How an estimate gets made</SlideTitle>
      </SlideHeader>
      <div className="mt-6 grid grid-cols-2 gap-8">
        <div className="content-card px-7 py-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Under the hood</h3>
          <BulletList
            size="md"
            items={[
              { text: 'PolicyEngine US: open-source tax and benefit rules', subtext: 'Federal rules plus every state income tax and the state programs the reform touches' },
              { text: 'Calibrated microdata for every state', subtext: 'Census survey households, enhanced with administrative data and weighted to official totals' },
              { text: 'Pinned model version', subtext: 'Every result cites the policyengine-us release it ran on' },
            ]}
          />
        </div>
        <div className="content-card px-7 py-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">What to expect live</h3>
          <BulletList
            size="md"
            items={[
              { text: 'Household impacts in about a minute' },
              { text: 'Statewide impacts in a few minutes', subtext: 'Two to six for most states; the demo starts a run early' },
              { text: 'Short shareable links for every result', subtext: 'Results cache durably, so shared links open instantly' },
              { text: 'Provision cards show only what actually changes' },
            ]}
          />
        </div>
      </div>
    </Slide>
  );
}
