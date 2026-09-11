import EndSlideTemplate from '@/components/layout/EndSlide';

export default function EndSlide() {
  return (
    <EndSlideTemplate
      message="Thank you"
      subtitle="The dashboard is open now. The recording and slides follow by email."
      links={[
        { label: '[dashboard URL]', url: 'https://child-poverty-impact-dashboard-sigma.vercel.app' },
        { label: 'policyengine.org', url: 'https://policyengine.org' },
        { label: 'hello@policyengine.org', url: 'mailto:hello@policyengine.org' },
      ]}
    />
  );
}
