import './global.css'
import type { Metadata } from 'next';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false

export const metadata: Metadata = {
  title: 'David Byron',
  description: 'Personal webpage for David Byron'
}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Dosis:wght@200..800&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="mt-[5vh] mx-[10vw] bg-tan text-dark-gray font-roboto">{children}</body>
    </html>
  );
}
