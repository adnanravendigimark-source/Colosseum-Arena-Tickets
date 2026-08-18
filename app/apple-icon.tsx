import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #34412D 0%, #1d2519 100%)",
          borderRadius: "40px",
          border: "4px solid #78816A",
        }}
      >
        <svg
          width="110"
          height="110"
          viewBox="0 0 48 48"
          fill="none"
        >
          <path
            d="M6 34C6 24 14 16 24 16C34 16 42 24 42 34"
            stroke="#D8D0BE"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M10 28C10 20.5 16.2 14.5 24 14.5C31.8 14.5 38 20.5 38 28"
            stroke="#78816A"
            strokeWidth="2"
            strokeDasharray="3 2"
          />
          <path d="M12 34V26C12 24.5 13.5 23 15 23C16.5 23 18 24.5 18 26V34" stroke="#F4F0E6" strokeWidth="2" />
          <path d="M21 34V24C21 22.5 22.5 21 24 21C25.5 21 27 22.5 27 24V34" stroke="#F4F0E6" strokeWidth="2" />
          <path d="M30 34V26C30 24.5 31.5 23 33 23C34.5 23 36 24.5 36 26V34" stroke="#F4F0E6" strokeWidth="2" />
          <path d="M19 12L29 20M29 12L19 20" stroke="#D8D0BE" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M4 36H44" stroke="#78816A" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
