import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

function BaseIcon({ size = 20, children, ...props }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {children}
    </svg>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M5 12h13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
      <path d="m13 6 6 6-6 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
    </BaseIcon>
  );
}

export function ArrowUpRight(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M5 19 19 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
      <path d="M8 5h11v11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
    </BaseIcon>
  );
}

export function Check(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m5 12 4.4 4.4L19 6.8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </BaseIcon>
  );
}

export function ChevronDown(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
    </BaseIcon>
  );
}

export function CodeIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m8.5 8-4 4 4 4M15.5 8l4 4-4 4M13.5 5l-3 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
    </BaseIcon>
  );
}

export function CopyIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect height="11" rx="2" stroke="currentColor" strokeWidth="1.6" width="11" x="8" y="8" />
      <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
    </BaseIcon>
  );
}

export function ExternalLinkIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M14 5h5v5M19 5l-8 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
      <path d="M18 13v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
    </BaseIcon>
  );
}

export function GithubIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M15 22v-3.2c.03-1-.38-1.7-1.03-2.2 3.38-.37 6.93-1.66 6.93-7.48A5.85 5.85 0 0 0 19.36 5.2 5.45 5.45 0 0 0 19.22.7S18.1.27 15 2.2a12.8 12.8 0 0 0-6 0C5.9.27 4.78.7 4.78.7a5.45 5.45 0 0 0-.14 4.5 5.85 5.85 0 0 0-1.54 4.12c0 5.81 3.55 7.11 6.93 7.48-.42.36-.79 1-.92 1.89-.83.37-2.94.86-4.24-1.03" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.55" />
    </BaseIcon>
  );
}

export function LayersIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.6" />
      <path d="m3 12 9 5 9-5M3 16l9 5 9-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
    </BaseIcon>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M6.5 8.5V18M6.5 6.1v.1M10.5 18v-5.1a3.1 3.1 0 0 1 6.2 0V18M10.5 10.8V18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </BaseIcon>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect height="14" rx="2" stroke="currentColor" strokeWidth="1.6" width="18" x="3" y="5" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
    </BaseIcon>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M20 10c0 5.5-8 11-8 11S4 15.5 4 10a8 8 0 1 1 16 0Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.6" />
      <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.6" />
    </BaseIcon>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
    </BaseIcon>
  );
}

export function MessageIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8.4 8.4 0 0 1-3.3-.66L4 20l1.5-3.7A7.1 7.1 0 0 1 4 11.5 7.5 7.5 0 0 1 12 4a7.5 7.5 0 0 1 8 7.5Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.6" />
      <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </BaseIcon>
  );
}

export function SendIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m21 3-7.2 18-3.5-7.3L3 10.2 21 3Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.6" />
      <path d="M10.3 13.7 21 3" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
    </BaseIcon>
  );
}

export function SparklesIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m12 3-1.2 4.3a4 4 0 0 1-2.8 2.8L3.7 11.3 8 12.5a4 4 0 0 1 2.8 2.8L12 19.7l1.2-4.4a4 4 0 0 1 2.8-2.8l4.3-1.2L16 10.1a4 4 0 0 1-2.8-2.8L12 3Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.45" />
      <path d="m19 3 .35 1.3a1.4 1.4 0 0 0 .95.95L21.6 5.6l-1.3.35a1.4 1.4 0 0 0-.95.95L19 8.2l-.35-1.3a1.4 1.4 0 0 0-.95-.95L16.4 5.6l1.3-.35a1.4 1.4 0 0 0 .95-.95L19 3Z" fill="currentColor" />
    </BaseIcon>
  );
}

export function TerminalIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect height="16" rx="2.5" stroke="currentColor" strokeWidth="1.6" width="19" x="2.5" y="4" />
      <path d="m6.5 9 2.2 2.2-2.2 2.2M11.5 14h4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
    </BaseIcon>
  );
}

export function WrenchIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M14.7 6.2a4.5 4.5 0 0 0-5.9 5.9L3.5 17.4a2.1 2.1 0 1 0 3 3l5.3-5.3a4.5 4.5 0 0 0 5.9-5.9l-2.7 2.7-2.6-.7-.7-2.6 2.9-2.4Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.55" />
    </BaseIcon>
  );
}

export function XIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
    </BaseIcon>
  );
}
