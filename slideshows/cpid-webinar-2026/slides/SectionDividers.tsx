import Slide from '@/components/core/Slide';

function Divider({ number, title, subtitle }: { number: string; title: string; subtitle: string }) {
  return (
    <Slide isCover>
      <div className="relative z-10 flex flex-col items-center text-center space-y-6">
        <span className="font-mono text-2xl text-white/60">{number}</span>
        <h1 className="font-display text-5xl font-bold text-white">{title}</h1>
        <p className="text-2xl text-white/80 max-w-3xl">{subtitle}</p>
      </div>
    </Slide>
  );
}

export function MicrosimulationDividerSlide() {
  return (
    <Divider
      number="01"
      title="How PolicyEngine measures child poverty"
      subtitle="Open-source rules, calibrated microdata, and the Supplemental Poverty Measure"
    />
  );
}

export function DashboardDividerSlide() {
  return (
    <Divider
      number="02"
      title="The Child Poverty Impact Dashboard"
      subtitle="Configure a reform, see what it does to child poverty and budgets in any state"
    />
  );
}

export function LookingAheadDividerSlide() {
  return (
    <Divider number="03" title="What comes next" subtitle="Scope, programs, and the years ahead" />
  );
}
