import ScreenshotSlide from '@/slideshows/iariw-2026/slides/ScreenshotSlide';

/** Fallback if the network or the backend is slow. Replace with a fresh capture of a completed run before Tuesday. */
export default function DashboardScreenshotSlide() {
  return (
    <ScreenshotSlide
      title="Child Poverty Impact Dashboard"
      src="/screenshots/cpid-webinar-2026/dashboard-landing.png"
      alt="Child Poverty Impact Dashboard landing page"
      caption="Landing page as of September 8. Swap for a results screenshot (waterfall chart, poverty and budget cards) once the final build is up."
      url="child-poverty.policyengine.org"
    />
  );
}
