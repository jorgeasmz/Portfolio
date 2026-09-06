import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Jorge Arias";

// The tab icon's monogram, set on a field: a link to the site itself needs a card
// that is not one of the project images.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b1220",
        }}
      >
        <div
          style={{
            width: 470,
            height: 470,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(140deg, #1e293b 0%, #0f172a 100%)",
            borderRadius: "22%",
            fontSize: 280,
            fontWeight: 700,
            letterSpacing: -16,
          }}
        >
          <span style={{ color: "#f8fafc" }}>J</span>
          <span style={{ color: "#3b82f6" }}>A</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
