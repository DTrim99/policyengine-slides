import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import BulletList from '@/components/content/BulletList';

/**
 * Architecture per the dashboard README; run times as David reported them at
 * the September 11 stand-up. Confirm both against the final build.
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
              { text: 'Household impacts in about 30 to 60 seconds' },
              { text: 'Statewide impacts in about 4 to 6 minutes', subtext: 'The demo starts a run early' },
              { text: 'Short shareable links for every result' },
              { text: 'Provision cards show only what actually changes' },
            ]}
          />
        </div>
      </div>
    </Slide>
  );
}
