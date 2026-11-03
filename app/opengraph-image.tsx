import { ImageResponse } from "next/og";
import { SITE_CONFIG } from "@/lib/utils";

export const alt =
  "Kashmir Corporation Pvt Ltd (KCL) — AFPA Authorized Flight Permission Agent in Pakistan";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0B2545",
          color: "#FFFFFF",
          padding: "64px",
          border: "8px solid #E8A200",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              backgroundColor: "#133661",
              border: "2px solid #E8A200",
              color: "#E8A200",
              padding: "10px 20px",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            {SITE_CONFIG.authorityBadge}
          </div>
          <div
            style={{
              color: "#CBD5E1",
              fontSize: 22,
            }}
          >
            FIR: OPKR (KARACHI) · OPLR (LAHORE)
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              fontSize: 58,
              fontWeight: 800,
              lineHeight: 1.12,
              color: "#FFFFFF",
            }}
          >
            Kashmir Corporation Pvt Ltd (KCL)
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#E8A200",
              fontWeight: 600,
            }}
          >
            Your Trusted Flight Permission Partner in Pakistan
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#CBD5E1",
              maxWidth: "960px",
            }}
          >
            Schedule &amp; Non-Schedule Permits · Ground Handling · Fuel Supply
            · Flight Catering · Crew Hotels · 24/7 Operations Desk
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "2px solid #334155",
            paddingTop: "24px",
            fontSize: 20,
            color: "#94A3B8",
          }}
        >
          <span>OPKC · OPLA · OPIS · OPPS · OPMT · OPQT</span>
          <span>24/7 H24 OPERATIONS WATCH</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
