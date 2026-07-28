type IconProps = {
  size?: number;
};

export function CircleTargetIcon({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9"></circle>
      <circle cx="12" cy="12" r="5"></circle>
      <circle cx="12" cy="12" r="1.4"></circle>
    </svg>
  );
}

export function PeopleIcon({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 19v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1"></path>
      <circle cx="9.5" cy="8" r="3.2"></circle>
      <path d="M16.5 5.3a3.2 3.2 0 0 1 0 6"></path>
      <path d="M21 19v-1a4 4 0 0 0-3-3.8"></path>
    </svg>
  );
}

export function CalendarIcon({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3.5" y="5" width="17" height="15" rx="2.5"></rect>
      <path d="M3.5 9.5h17M8 3v4M16 3v4"></path>
      <circle cx="12" cy="14.5" r="2"></circle>
    </svg>
  );
}

export function WorkshopIcon({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4.5" width="18" height="12" rx="2"></rect>
      <path d="M12 16.5V20M8.5 20h7"></path>
      <path d="M8 10.7l2.3 2.3L15 8.3"></path>
    </svg>
  );
}

export function CheckIcon({ size = 19 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12l5 5L20 6"></path>
    </svg>
  );
}

export function CheckAltIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5"></path>
    </svg>
  );
}

export function YouTubeIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 8.2a2.8 2.8 0 0 0-2-2C18.2 5.7 12 5.7 12 5.7s-6.2 0-8 .5a2.8 2.8 0 0 0-2 2C1.5 10 1.5 12 1.5 12s0 2 .5 3.8a2.8 2.8 0 0 0 2 2c1.8.5 8 .5 8 .5s6.2 0 8-.5a2.8 2.8 0 0 0 2-2c.5-1.8.5-3.8.5-3.8s0-2-.5-3.8zM10 15.2V8.8l5.2 3.2z"></path>
    </svg>
  );
}

export function MissionIcon({ size = 26 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9"></circle>
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  );
}

export function VisionIcon({ size = 26 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  );
}

export function StarIcon({ size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l2.2 5.8L20 8.5l-4.4 4 1.3 6L12 15.8 7.1 18.5l1.3-6L4 8.5l5.8-.7z"></path>
    </svg>
  );
}

export function ChatIcon({ size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H8l-4 4V5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2z"></path>
    </svg>
  );
}
