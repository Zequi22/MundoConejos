export function Blob({ className = '' }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M43.9,-72.9C56.5,-65.6,66.2,-53.5,73.4,-40C80.6,-26.5,85.2,-11.5,84.2,3.1C83.2,17.7,76.6,31.9,67.7,44.1C58.8,56.3,47.6,66.5,34.7,72.5C21.8,78.5,7.2,80.3,-7.6,79.3C-22.4,78.3,-37.5,74.5,-49.9,66.1C-62.3,57.7,-71.9,44.7,-77.4,30.1C-82.9,15.5,-84.2,-0.7,-80.2,-15.3C-76.2,-29.9,-66.9,-42.9,-54.9,-50.5C-42.9,-58.1,-28.2,-60.3,-15,-62.9C-1.8,-65.5,9.9,-68.5,22.4,-70.7C34.9,-72.9,31.3,-80.2,43.9,-72.9Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

export function Sparkle({ className = '' }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M50 0c3.4 28.6 18 43.2 50 50-32 6.8-46.6 21.4-50 50-3.4-28.6-18-43.2-50-50 32-6.8 46.6-21.4 50-50Z"
      />
    </svg>
  );
}

export function SunBurst({ className = '' }) {
  const rays = Array.from({ length: 16 }, (_, i) => {
    const angle = (i * 360) / 16;
    return <rect key={i} x="48.5" y="2" width="3" height="16" rx="1.5" transform={`rotate(${angle} 50 50)`} />;
  });
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" focusable="false">
      <g fill="currentColor">
        {rays}
        <circle cx="50" cy="50" r="20" />
      </g>
    </svg>
  );
}

export function Squiggle({ className = '' }) {
  return (
    <svg viewBox="0 0 140 24" className={className} aria-hidden="true" focusable="false">
      <path
        d="M3 14c10-14 20-14 30 0s20 14 30 0 20-14 30 0 20 14 30 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function WaveDivider({ className = '', flip = false }) {
  return (
    <svg
      viewBox="0 0 1440 110"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
      focusable="false"
      style={flip ? { transform: 'scaleY(-1)' } : undefined}
    >
      <path
        fill="currentColor"
        d="M0 42c120 46 240 46 360 18s240-56 360-28 240 74 360 46 240-58 360-46v78H0Z"
      />
    </svg>
  );
}

export function Rainbow({ className = '' }) {
  return (
    <svg viewBox="0 0 200 110" className={className} aria-hidden="true" focusable="false">
      <g fill="none" strokeWidth="15" strokeLinecap="round">
        <path d="M15 100a85 85 0 0 1 170 0" stroke="#e76f51" />
        <path d="M32 100a68 68 0 0 1 136 0" stroke="#e9c46a" />
        <path d="M49 100a51 51 0 0 1 102 0" stroke="#2a9d8f" />
      </g>
    </svg>
  );
}

export function Daisy({ className = '' }) {
  const petals = [0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
    <ellipse key={a} cx="50" cy="24" rx="10" ry="18" transform={`rotate(${a} 50 50)`} />
  ));
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" focusable="false">
      <g fill="currentColor">{petals}</g>
      <circle cx="50" cy="50" r="12" fill="#e9c46a" />
    </svg>
  );
}
