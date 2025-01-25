import Link from "next/link";

const Footer = () => {
	return (
		<footer className="flex justify-between items-center w-screen h-[200px] px-[130px] bg-gradient-to-b from-[#2A2A2A] to-[#181818]">
			<p>@{new Date().getFullYear()} Jofer Usa. All Rights Reserved</p>
			<span className="flex gap-2">
				<Link href="https://www.facebook.com/josuX00" target="_blank">Facebook</Link>
				<p>|</p>
				<Link href="https://www.instagram.com/lazyjosu" target="_blank">Instagram</Link>
				<p>|</p>
				<Link href="https://github.com/JosuX" target="_blank">GitHub</Link>
				<p>|</p>
				<Link href="https://www.linkedin.com/in/josu00" target="_blank">LinkedIn</Link>
			</span>
		</footer>
	);
};

export default Footer;
