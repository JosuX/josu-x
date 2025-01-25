"use client";
import Link from "next/link";
import { memo } from "react";
import {
	FaFacebookF,
	FaInstagram,
	FaLinkedin,
	FaGithub,
} from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";

// Memoized icons
const MemoizedFaFacebookF = memo(FaFacebookF);
const MemoizedFaInstagram = memo(FaInstagram);
const MemoizedFaLinkedin = memo(FaLinkedin);
const MemoizedFaGithub = memo(FaGithub);

const Hero = () => {
	return (
		<section
			id="hero"
			className="flex flex-col h-[90vh] w-screen px-10 md:px-64 pt-80 bg-[#181818]"
		>
			<div className="flex flex-col gap-8 w-[553px]">
				<div className="px-6 py-7 border-[1px] border-[#2A86FF] h-12 w-36 rounded-lg flex justify-center items-center glass-code font-medium text-lg">
					<p>Hi! I’m Jofer. </p>
				</div>
				<h1 className="inline-block text-5xl font-bold">
					<span>Your </span>
					<TypeAnimation
						sequence={[
							"Software Engineer..",
							"Frontend Developer..",
							"Backend Developer..",
							"Fullstack Developer..",
							"Web Developer..",
							"Mobile Developer..",
							"React Developer..",
							"Flutter Developer..",
							"DevOps Specialist..",
							"Solution Architect..",
							"Problem Solver..",
							"Team Player..",
						]}
						wrapper="span"
						speed={15}
						repeat={Infinity}
					/>
				</h1>
				<h3 className="text-2xl text-gray-500">
					Building tailored software solutions to transform your ideas
					into seamless digital experiences.
				</h3>
				<hr />
				<ul className="flex gap-8 social">
					<li className="glass-code rounded-md">
						<Link
						target="_blank"
							className="h-[60px] w-[60px] flex items-center justify-center  p-2"
							href="https://www.facebook.com/josuX00"
						>
							<MemoizedFaFacebookF className="w-3/5 h-3/5" />
						</Link>
					</li>
					<li className="glass-code rounded-md">
						<Link
						target="_blank"
							className="h-[60px] w-[60px] flex items-center justify-center  p-2"
							href="https://www.instagram.com/lazyjosu"
						>
							<MemoizedFaInstagram className="w-3/5 h-3/5" />
						</Link>
					</li>
					<li className="glass-code rounded-md">
						<Link
						target="_blank"
							className="h-[60px] w-[60px] flex items-center justify-center  p-2"
							href="https://www.linkedin.com/in/josu00"
						>
							<MemoizedFaLinkedin className="w-3/5 h-3/5" />
						</Link>
					</li>
					<li className="glass-code rounded-md">
						<Link
						target="_blank"
							className="h-[60px] w-[60px] flex items-center justify-center  p-2"
							href="https://github.com/JosuX"
						>
							<MemoizedFaGithub className="w-3/5 h-3/5" />
						</Link>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Hero;
