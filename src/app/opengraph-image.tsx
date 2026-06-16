import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Vatsal Dendpara — Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const bg = "#18191f";
const card = "#1e2030";
const brand = "#7c6af0";
const brandLight = "#a89cf5";
const fg = "#f0f0f8";
const muted = "#8b8da8";
const border = "#2e3050";

const stack = ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "Docker"];

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: bg,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Brand glow orbs */}
      <div
        style={{
          position: "absolute",
          top: -120,
          right: -80,
          width: 480,
          height: 480,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${brand}55 0%, transparent 70%)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -100,
          left: -60,
          width: 360,
          height: 360,
          borderRadius: "50%",
          background: `radial-gradient(circle, #5c8af055 0%, transparent 70%)`,
        }}
      />

      {/* Grid pattern overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(${border}44 1px, transparent 1px), linear-gradient(90deg, ${border}44 1px, transparent 1px)`,
          backgroundSize: "56px 56px",
          opacity: 0.4,
        }}
      />

      {/* Main content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          padding: "60px 72px",
          position: "relative",
        }}
      >
        {/* Top: logo + availability badge */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo mark */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 10,
                background: `linear-gradient(135deg, ${brand}, ${brandLight})`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
                color: "#fff",
                fontWeight: 700,
              }}
            >
              {"</>"}
            </div>
            <span style={{ color: muted, fontSize: 18, fontWeight: 500 }}>vatsaldendpara.dev</span>
          </div>

          {/* Available badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: card,
              border: `1px solid ${border}`,
              borderRadius: 999,
              padding: "8px 18px",
              fontSize: 15,
              color: muted,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#4ade80",
              }}
            />
            Available for new projects
          </div>
        </div>

        {/* Center: name + title */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 16,
              color: brand,
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Full-Stack Developer
          </div>
          <div
            style={{
              fontSize: 80,
              fontWeight: 800,
              color: fg,
              lineHeight: 1.0,
              letterSpacing: "-2px",
            }}
          >
            Vatsal
          </div>
          <div
            style={{
              fontSize: 80,
              fontWeight: 800,
              color: fg,
              lineHeight: 1.0,
              letterSpacing: "-2px",
              marginTop: -8,
            }}
          >
            Dendpara
          </div>
          <div
            style={{
              fontSize: 22,
              color: muted,
              marginTop: 8,
              maxWidth: 640,
              lineHeight: 1.5,
            }}
          >
            Building AI-powered SaaS products with React, Node.js & modern cloud infrastructure.
          </div>
        </div>

        {/* Bottom: tech stack pills */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
          {stack.map((item) => (
            <div
              key={item}
              style={{
                background: card,
                border: `1px solid ${border}`,
                borderRadius: 999,
                padding: "7px 18px",
                fontSize: 15,
                color: muted,
                fontWeight: 500,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>,
    { ...size },
  );
}
