import type { CSSProperties } from "react";
import styles from "./ImageSlot.module.css";

type ImageSlotProps = {
  label: string;
  radius?: number;
  className?: string;
  style?: CSSProperties;
};

export default function ImageSlot({ label, radius = 12, className, style }: ImageSlotProps) {
  return (
    <div
      className={[styles.slot, className].filter(Boolean).join(" ")}
      style={{ borderRadius: radius, ...style }}
    >
      <div className={styles.inner}>
        <svg className={styles.icon} width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2.5"></rect>
          <circle cx="9" cy="9" r="2"></circle>
          <path d="M21 15l-5-5L5 21"></path>
        </svg>
        <span className={styles.caption}>{label}</span>
      </div>
    </div>
  );
}
