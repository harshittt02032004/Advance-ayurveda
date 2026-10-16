type Props = { name: string; className?: string };

const paths: Record<string, React.ReactNode> = {
  leaf: (
    <>
      <path d="M4 20c0-8 4-14 16-16-1 10-6 15-14 16" />
      <path d="M4 20c4-5 8-8 12-10" />
    </>
  ),
  liver: (
    <>
      <path d="M3 10c0-3 3-5 7-5h6c3 0 5 2 5 5 0 5-6 9-11 9-4 0-7-3-7-9Z" />
      <path d="M8 9c2 1 3 3 3 6" />
    </>
  ),
  drop: (
    <>
      <path d="M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11Z" />
      <path d="M9 14a3 3 0 0 0 3 3" />
    </>
  ),
  kidney: (
    <>
      <path d="M8 4c-3 0-5 3-5 8s2 8 5 8c2 0 3-2 3-4V8c0-2-1-4-3-4Z" />
      <path d="M16 4c3 0 5 3 5 8s-2 8-5 8c-2 0-3-2-3-4V8c0-2 1-4 3-4Z" />
    </>
  ),
  bone: (
    <>
      <path d="M7 7a2.5 2.5 0 1 1 3.5 2.3l3.2 3.2A2.5 2.5 0 1 1 11.4 15l-3.2-3.2A2.5 2.5 0 1 1 7 7Z" />
      <path d="M17 17a2.5 2.5 0 1 1-3.5-2.3" />
    </>
  ),
  spine: (
    <>
      <path d="M12 3v18" />
      <path d="M8 6h8M8 10h8M8 14h8M8 18h8" />
    </>
  ),
  head: (
    <>
      <path d="M9 21v-3H6l1-3H5c-1 0-1.5-.8-1-1.6L6 11a7 7 0 1 1 11 4v6" />
      <path d="M13 9h.01M10 9h.01" />
    </>
  ),
  heart: (
    <>
      <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </>
  ),
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6.2 6.2l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z" />
  ),
  whatsapp: (
    <>
      <path d="M3 21l1.6-4.7A9 9 0 1 1 8 19.6L3 21Z" />
      <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1.2-1.4-1.9-.9-.9.9c-1-.4-1.9-1.3-2.3-2.3l.9-.9-.9-1.9L9 9.5Z" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  check: <path d="m5 12 5 5L20 7" />,
  shield: (
    <>
      <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  stethoscope: (
    <>
      <path d="M6 3v6a6 6 0 0 0 12 0V3" />
      <path d="M12 15v3a4 4 0 0 0 8 0v-2" />
      <circle cx="20" cy="14" r="2" />
    </>
  ),
  lotus: (
    <>
      <path d="M12 21c-5 0-9-3-9-7 3 0 5 1 6 3 0-4 1-8 3-11 2 3 3 7 3 11 1-2 3-3 6-3 0 4-4 7-9 7Z" />
    </>
  ),
  home: (
    <>
      <path d="m3 11 9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1v-9Z" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  star: (
    <path d="m12 3 2.7 5.6 6.2.9-4.5 4.3 1.1 6.2L12 17l-5.5 3 1.1-6.2L3.1 9.5l6.2-.9L12 3Z" />
  ),
  quote: (
    <>
      <path d="M7 7h4v5H8c0 2 1 3 3 3v2c-3 0-5-2-5-5V7Z" />
      <path d="M15 7h4v5h-3c0 2 1 3 3 3v2c-3 0-5-2-5-5V7Z" />
    </>
  ),
};

export function Icon({ name, className = "h-5 w-5" }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {paths[name] ?? paths.leaf}
    </svg>
  );
}
