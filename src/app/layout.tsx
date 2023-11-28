import type { Metadata } from "next";
import { FontClassNames } from "./Styles/Font";
import "./Styles/GlobalStyles.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "GoodJam",
  description: "Generated by ChanghyeonOh",
};

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html>
        <body className={FontClassNames}>{children}</body>
        <Script
          src="https://developers.kakao.com/sdk/js/kakao.js"
          strategy="afterInteractive"
        />
        <Script
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&autoload=false&libraries=services`}
          strategy="afterInteractive"
        />
      </html>
    </>
  );
}
