import type { Metadata } from "next";
import { Crimson_Pro } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const crimsonPro = Crimson_Pro({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "JOSU - Jofer Usa",
	description: "Portfolio of Jofer Usa",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning={true} className="no-scrollbar">
			<body className={`${crimsonPro.className} antialiased`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
