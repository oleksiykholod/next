import '@/app/ui/global.css';
import { mada } from './ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${mada.className} antialased`}>{children}</body>
    </html>
  );
}
