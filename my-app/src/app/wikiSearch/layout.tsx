import type { Metadata } from "next";
export const metadata: Metadata = {
    title: 'Wiki search',
    description: 'Demo page for tutorial search in next.js'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
        {children}
    </main>
  );
}


