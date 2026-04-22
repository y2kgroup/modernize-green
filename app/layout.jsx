import './globals.css';
import site from '@/site.config.json';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: {
    default: site.site.name,
    template: `%s | ${site.site.name}`,
  },
  description: site.site.description,
  metadataBase: new URL(site.site.url),
  openGraph: {
    title: site.site.name,
    description: site.site.description,
    url: site.site.url,
    siteName: site.site.name,
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
