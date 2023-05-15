import "styles/globals.css";
import "styles/main.css";
import "animate.css";
import AnalyticsGoogle from "../utils/Analytics";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Dimas Triana",
  description:
    "Dimas Triana is a Frontend Developer and Web Designer with expertise in creating visually appealing and user-friendly websites. Get the best services from Dimas Triana for your business needs.",
  keywords: [
    "Dimas Triana",
    "Frontend",
    "Web Design",
    "UI Design",
    "Web Developer",
    "Frontend Developer",
    "Mobile Developer",
    "React",
    "Nextjs",
    "Tailwindcss",
    "Figma",
  ],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Analytics />
      <AnalyticsGoogle />
      <body>{children}</body>
    </html>
  );
}
