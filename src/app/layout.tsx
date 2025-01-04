import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";
import { Metadata } from "next";
import Script from 'next/script'

export const metadata: Metadata = {
  title: {
    default: 'Lucas Lima - Astatonn | Developer',
    template: '%s | Lucas Lima - Astatonn'
  },
  description: 'Professional developer specializing in Python, Laravel, PHP, Next.js, and modern web technologies. Check out my portfolio of projects and development expertise.',
  keywords: ['web developer', 'frontend developer', 'backend developer', 'Next.js', 'full-stack developer', 'Astatonn', 'Lucas Lima', 'Tech', 'Brasil'],
  authors: [{ name: 'Lucas Lima - Astatonn' }],
  creator: 'Lucas Lima - Astatonn',
  metadataBase: new URL('https://astatonn.com'),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://astatonn.com',
    siteName: 'Lucas Lima - Astatonn - Developer Portfolio',
    title: 'Lucas Lima - Astatonn | Professional Developer',
    description: 'Professional developer specializing in Python, Laravel, PHP, Next.js, and modern web technologies.',
    images: [
      {
        url: '/imgs/hero/astatonnlogo.png',
        width: 1080,
        height: 1080,
        alt: 'Lucas Lima - Astatonn - Developer Portfolio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lucas Lima - Astatonn | Developer',
    description: 'Professional developer specializing in Python, Laravel, PHP, Next.js, and modern web technologies.',
    images: ['/imgs/hero/astatonnlogo.png'],
    creator: '@astatonn_'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '7_07Er3gNVckki1XYFj0-DKIkgkHXsyRlEaXwLNka8I',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://astatonn.com" />
        <link rel="icon" href="/imgs/hero/astatonnlogo.png" />
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Your Name",
              url: "https://astatonn.com",
              jobTitle: "Developer",
              sameAs: [
                "https://github.com/astatonn",
                "https://linkedin.com/in/astatonn",
                "https://twitter.com/astatonn_"
              ],
              image: "/imgs/hero/astatonnlogo.png",
              description: "Professional developer specializing in Python, Laravel, PHP, Next.js, and modern web technologies.",
              knowsAbout: [
                "React",
                "Next.js",
                "Python",
                "Laravel",
                "PHP",
                "Brasil",
                "TypeScript",
                "JavaScript",
                "Web Development",
                "Developer"
              ]
            })
          }}
        />
      </head>
      <body>
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
