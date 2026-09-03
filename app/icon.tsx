import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// A monogram rather than a single letter: two marks give the tab something to
// recognise at 16px, where one letter reads as a smudge.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(140deg, #1e293b 0%, #0f172a 100%)",
          borderRadius: "22%",
          fontSize: 38,
          fontWeight: 700,
          letterSpacing: -2,
        }}
      >
        <span style={{ color: "#f8fafc" }}>J</span>
        <span style={{ color: "#3b82f6" }}>A</span>
      </div>
    ),
    { ...size }
  );
}
