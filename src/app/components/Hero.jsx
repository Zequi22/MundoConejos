import { ImageWithFallback } from './figma/ImageWithFallback';
import { Blob, SunBurst, Sparkle, Daisy, Squiggle, WaveDivider } from './Decor';

export function Hero({
  image,
  eyebrow,
  title,
  highlight,
  description,
  children,
  tint = 'bg-butter',
  highlightColor = 'text-primary',
  badge,
  badgeColor = 'bg-secondary text-secondary-foreground'
}) {
  return (
    <section className={`relative overflow-hidden ${tint} pt-24 pb-28 md:pt-28 md:pb-32`}>
      <Blob className="absolute -left-24 -top-24 h-80 w-80 text-coral/40" />
      <Blob className="absolute -bottom-28 -right-20 h-[26rem] w-[26rem] rotate-45 text-teal/25" />
      <SunBurst className="absolute right-[8%] top-24 hidden h-24 w-24 text-mustard animate-spin-slow lg:block" />
      <Sparkle className="absolute left-[6%] top-40 h-9 w-9 text-terracotta animate-float" />
      <Sparkle className="absolute bottom-28 left-[26%] h-6 w-6 text-teal" />
      <Daisy className="absolute bottom-16 right-[16%] hidden h-14 w-14 text-rose lg:block animate-float" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="text-center lg:text-left">
          <span className="inline-flex rotate-[-2deg] items-center gap-2 rounded-full border-2 border-ink bg-card px-4 py-1.5 font-script text-xl text-ink shadow-hard animate-fade-up">
            {eyebrow}
          </span>

          <h1
            className="mt-6 text-4xl leading-[1.05] sm:text-5xl md:text-6xl animate-fade-up"
            style={{ animationDelay: '80ms' }}
          >
            {title}{' '}
            {highlight && (
              <span className="relative inline-block">
                <span className={`relative z-10 ${highlightColor}`}>{highlight}</span>
                <Squiggle className="absolute -bottom-3 left-0 h-4 w-full text-mustard" />
              </span>
            )}
          </h1>

          {description && (
            <p
              className="mx-auto mt-7 max-w-xl text-lg text-foreground/75 lg:mx-0 animate-fade-up"
              style={{ animationDelay: '160ms' }}
            >
              {description}
            </p>
          )}

          {children && (
            <div
              className="mt-9 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start animate-fade-up"
              style={{ animationDelay: '240ms' }}
            >
              {children}
            </div>
          )}
        </div>

        <div className="relative mx-auto w-full max-w-md animate-fade-up" style={{ animationDelay: '200ms' }}>
          <Blob className="absolute -inset-6 h-auto w-auto text-mustard/70" />
          <div className="relative overflow-hidden rounded-t-full border-4 border-ink bg-card shadow-hard-lg">
            <ImageWithFallback
              src={image}
              alt={typeof title === 'string' ? title : 'Conejo'}
              className="h-[420px] w-full object-cover md:h-[480px]"
            />
          </div>

          {badge && (
            <span
              className={`absolute -left-5 top-10 rotate-[-6deg] rounded-2xl border-2 border-ink px-4 py-2 font-script text-xl shadow-hard ${badgeColor}`}
            >
              {badge}
            </span>
          )}

          <Sparkle className="absolute -right-3 top-6 h-12 w-12 text-terracotta animate-float" />
        </div>
      </div>

      <WaveDivider className="absolute bottom-0 left-0 h-14 w-full text-cream md:h-20" />
    </section>
  );
}
