export function LogoMark({ className = '' }) {
  return (
    <svg viewBox="0 0 72 72" className={className} aria-hidden="true" focusable="false">
      <path
        d="M8 66V34a28 28 0 0 1 56 0v32Z"
        fill="#e76f51"
        stroke="#3b2a1f"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <g fill="#fff8ee" stroke="#3b2a1f" strokeWidth="2.4" strokeLinejoin="round">
        <ellipse cx="30" cy="31" rx="4.6" ry="10.5" transform="rotate(-14 30 31)" />
        <ellipse cx="42" cy="31" rx="4.6" ry="10.5" transform="rotate(14 42 31)" />
        <circle cx="36" cy="48" r="11" />
      </g>
      <circle cx="32" cy="47" r="1.7" fill="#3b2a1f" />
      <circle cx="40" cy="47" r="1.7" fill="#3b2a1f" />
      <path d="M36 51l-1.9 1.9h3.8Z" fill="#3b2a1f" />
    </svg>
  );
}

export function Logo({ className = '', wordClassName = '' }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-11 w-11 transition-transform duration-300 group-hover:-rotate-6" />
      <span className={`font-display text-xl font-bold tracking-tight ${wordClassName}`}>
        Mundo<span className="text-primary">Conejos</span>
      </span>
    </span>
  );
}
