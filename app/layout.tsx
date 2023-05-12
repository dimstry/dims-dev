import "styles/globals.css";
import "styles/main.css";
import "animate.css";
import Analytics from "../utils/Analytics";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Analytics />
      <body>{children}</body>
    </html>
  );
}
