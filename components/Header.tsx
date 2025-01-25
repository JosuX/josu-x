"use client";

import { useState, useEffect, useMemo } from "react";
import localFont from "next/font/local";
import { FaCode } from "react-icons/fa6";
import Link from "next/link";

const chillaxSemiBold = localFont({
	src: "../app/fonts/Chillax-Semibold.woff2",
});

const Header = () => {
	const memoizedFaCode = useMemo(() => <FaCode />, []);
	const [isScrolled, setIsScrolled] = useState(false);

	// Handle scroll event
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 65) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div
			className={`flex justify-between items-center w-screen h-[114px] px-10 md:px-[130px] drawer drawer-end fixed z-50 backdrop-blur-md transition-colors duration-300 ${
				isScrolled
					? "bg-black bg-opacity-30 backdrop-blur-md"
					: "bg-[#181818]"
			}`}
		>
			<input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
			<Link href={"#hero"}>
				<h1 className={`${chillaxSemiBold.className} text-[2rem]`}>
					JOSU
				</h1>
			</Link>

			<nav className="flex text-xl font-medium drawer-content">
				<div className="hidden md:flex gap-[50px] justify-center items-center">
					<Link
						className="flex justify-center items-center"
						href={"#about"}
					>
						About
					</Link>
					<Link
						className="flex justify-center items-center"
						href={"#experience"}
					>
						Experience
					</Link>
					<Link
						className="flex justify-center items-center"
						href={"#certs"}
					>
						Certifications
					</Link>
					{/* <Link
						className="flex justify-center items-center"
						href={"#projects"}
					>
						Projects
					</Link> */}
					<Link
						className="flex justify-center items-center"
						href={"#publications"}
					>
						Publications
					</Link>
					
					<Link
						className="flex justify-center items-center"
						href={"#contact"}
					>
						Contact
					</Link>
					<Link
						className="w-[40px] h-[40px] rounded-full glass-code justify-center items-center flex"
						href="https://github.com/JosuX/josu-x"
						target="_blank"
					>
						{memoizedFaCode}
					</Link>
				</div>
				<label
					htmlFor="my-drawer-4"
					aria-label="open sidebar"
					className="btn btn-square btn-ghost md:hidden"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						className="inline-block h-6 w-6 stroke-current"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16M4 18h16"
						></path>
					</svg>
				</label>
			</nav>
			<div className="drawer-side">
				<label
					htmlFor="my-drawer-4"
					aria-label="close sidebar"
					className="drawer-overlay"
				></label>
				<ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 text-[16px]">
					<li>
						<Link
							className="flex justify-center items-center"
							href={""}
						>
							About
						</Link>
					</li>
					<li>
						<Link
							className="flex justify-center items-center"
							href={""}
						>
							Experience
						</Link>
					</li>
					<li>
						<Link
							className="flex justify-center items-center"
							href={""}
						>
							Projects
						</Link>
					</li>
					<li>
						<Link
							className="flex justify-center items-center"
							href={""}
						>
							Contact
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
