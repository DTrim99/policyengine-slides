import LiveAppSlide from '@/slideshows/iariw-2026/slides/LiveAppSlide';

/**
 * David's live demo. The iframe uses the Vercel host (valid before and
 * after the domain flip); the displayed URL is the production domain that
 * goes live the morning of 9/15 — verify it resolves before going on air,
 * and fall back to the Vercel URL on screen if the flip slips.
 */
const DASHBOARD_URL = 'https://child-poverty-impact-dashboard-sigma.vercel.app';

export default function DashboardLiveSlide() {
  return (
    <LiveAppSlide title="Live demo" url={DASHBOARD_URL} displayUrl="child-poverty.policyengine.org" sideWidth="0.5fr">
      <div className="content-card px-5 py-4">
        <p className="text-base font-semibold text-gray-800 mb-2">Demo path (David)</p>
        <ol className="list-decimal pl-5 space-y-1.5 text-base text-gray-700">
          <li>Pick a state and a reform</li>
          <li>Household view: one family across the earnings range</li>
          <li>Statewide view: poverty, budget, distribution</li>
          <li>Copy the shareable link</li>
        </ol>
      </div>
      <div className="content-card px-5 py-4">
        <p className="text-base text-gray-500">
          Statewide runs take a few minutes; start one before the section begins.
        </p>
      </div>
    </LiveAppSlide>
  );
}
