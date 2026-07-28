type CtaBandProps = {
  heading: string;
  lede: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export default function CtaBand({
  heading,
  lede,
  ctaLabel = "Join the community →",
  ctaHref = "https://chat.whatsapp.com/",
}: CtaBandProps) {
  return (
    <section style={{ padding: "8px 32px clamp(56px,7vw,88px)" }}>
      <div className="cta-band">
        <span className="cta-band-blob" style={{ right: -60, top: -60, width: 220, height: 220 }}></span>
        <span className="cta-band-blob" style={{ left: -50, bottom: -70, width: 200, height: 200 }}></span>
        <div className="cta-band-content">
          <h2 className="cta-heading">{heading}</h2>
          <p className="cta-lede">{lede}</p>
          <a href={ctaHref} target="_blank" rel="noopener" className="btn btn-white" style={{ marginTop: 30 }}>
            {ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
