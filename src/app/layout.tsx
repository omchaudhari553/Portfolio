import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Professional Portfolio | Om Nilesh Chaudhari",
  description:
    "Java Backend Developer portfolio — RESTful APIs, Microservices, Spring Boot, Hibernate/JPA, JWT, MySQL, PostgreSQL, Docker, AWS, and CI/CD.",
  keywords: [
    "portfolio",
    "Java Developer",
    "Spring Boot",
    "Microservices",
    "Backend Development",
    "React",
    "Next.js",
    "professional",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans bg-gray-900 text-white antialiased">
        {children}
        <Script
          src="https://www.noupe.com/embed/019a9671388271df81b8562be216dc05102c.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
