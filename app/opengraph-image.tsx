import { ImageResponse } from "next/og";

import { profile } from "@/app/data/portfolio";
import { siteConfig } from "@/app/lib/site";

export const alt = `${profile.name} — ${profile.role}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const midnight = "#05354c";
const midnightDeep = "#031f2d";
const mist = "#b1edf8";

export default async function OpengraphImage() {
  const hostname = new URL(siteConfig.url).hostname;
  const tags = ["Web", "Mobile", "Architecture", "IA appliquée", "Cloud"];

  return new ImageResponse(
    (
      <div
        style={{
          background: `linear-gradient(135deg, ${midnight} 0%, ${midnightDeep} 100%)`,
          color: "#eef9fa",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "76px 84px",
          width: "100%",
        }}
      >
        <div style={{ alignItems: "center", display: "flex", gap: 22 }}>
          <div
            style={{
              alignItems: "center",
              background: mist,
              borderRadius: 22,
              color: midnight,
              display: "flex",
              fontSize: 36,
              fontWeight: 700,
              height: 78,
              justifyContent: "center",
              width: 78,
            }}
          >
            {profile.initials}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{ color: mist, fontSize: 26, letterSpacing: 6 }}>PORTFOLIO</span>
            <span style={{ color: "#7fb7c8", fontSize: 24 }}>{hostname}</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 78, fontWeight: 700, letterSpacing: -2 }}>{profile.name}</div>
          <div style={{ color: mist, fontSize: 38 }}>{profile.role}</div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
          {tags.map((tag) => (
            <div
              key={tag}
              style={{
                border: "1px solid rgba(177, 237, 248, 0.32)",
                borderRadius: 999,
                color: mist,
                display: "flex",
                fontSize: 24,
                padding: "10px 24px",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}