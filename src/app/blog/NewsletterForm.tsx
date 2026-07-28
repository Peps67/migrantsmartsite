"use client";

export default function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 10,
        justifyContent: "center",
        marginTop: 28,
        maxWidth: 480,
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <input
        type="email"
        placeholder="you@email.com"
        aria-label="Email address"
        style={{
          flex: 1,
          minWidth: 220,
          background: "#1E1C2E",
          border: "1px solid #2E2B42",
          borderRadius: 999,
          padding: "15px 22px",
          color: "#fff",
          fontFamily: "inherit",
          fontSize: 15,
          outline: "none",
        }}
      />
      <button type="submit" className="btn btn-primary">
        Subscribe
      </button>
    </form>
  );
}
