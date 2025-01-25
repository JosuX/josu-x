import React, { cloneElement, memo, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
	FaBitbucket,
	FaCss3,
	FaDartLang,
	FaFlutter,
	FaGit,
	FaGithub,
	FaGitlab,
	FaHtml5,
	FaJs,
	FaLinux,
	FaNode,
	FaPython,
	FaReact,
} from "react-icons/fa6";

const About = () => {
	const [radio, setRadio] = useState("languages");

	const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setRadio(e.target.value);
	};

	// Memoize the options array
	const options = useMemo(
		() => [
			{
				label: "Languages",
				value: "languages",
				icons: [<FaJs />, <FaPython />, <FaDartLang />, <FaCss3 />, <FaHtml5 />],
			},
			{
				label: "Technologies",
				value: "technologies",
				icons: [<FaNode />, <FaReact />, <FaFlutter />, <FaLinux />],
			},
			{
				label: "Versioning Tools",
				value: "versioning",
				icons: [<FaGit />, <FaGithub />, <FaGitlab />, <FaBitbucket />],
			},
		],
		[]
	);
	
	const memoizedImage = useMemo(
		() => (
			<Image
				className="object-cover py-5 px-4"
				fill
				src="/images/josu.jpg"
				alt="Jofer's Photo"
			/>
		),
		[]
	);

	return (
		<section
			id="about"
			className="flex justify-center items-center h-screen w-screen px-56 py-32 bg-gradient-to-b from-[#181818] to-[#262925]"
		>
			<div className="flex gap-24 h-[60vh]">
				<div className="glass-code h-full w-1/3">{memoizedImage}</div>
				<div className="h-full w-2/3 flex flex-col justify-center items-start gap-8">
					<h2 className="font-bold text-5xl">About Me</h2>
					<p className="text-2xl">
						I’m Jofer Usa, a passionate and dedicated software
						engineer and tech enthusiast from the Philippines. With
						years of experience in software and web development, I
						specialize in creating innovative, efficient, and
						user-friendly solutions that meet client needs and
						exceed expectations.
					</p>
					<hr className="w-full" />
					<div className="flex gap-5 font-medium text-lg">
						{options.map((option) => (
							<label
								key={option.value}
								className={`rounded-md py-2 px-6 cursor-pointer hover:bg-[#2B6BC0] ${
									radio === option.value
										? "bg-[#2B6BC0]"
										: "glass-code"
								}`}
							>
								<input
									type="radio"
									name="category"
									value={option.value}
									checked={radio === option.value}
									onChange={handleRadioChange}
									className="hidden"
								/>
								{option.label}
							</label>
						))}
					</div>
					<ul className="flex gap-5 pb-50">
						{options
							.find((option) => option.value === radio)
							?.icons.map((icon, idx) => (
								<li
									key={idx}
									className="glass-code rounded-md p-2 h-[60px] w-[60px] flex items-center justify-center"
								>
									{cloneElement(icon, {
										className: "w-4/5 h-4/5",
									})}
								</li>
							))}
					</ul>
					<div className="flex justify-center items-center gap-8 font-medium text-xl">
						<Link className="text-[#2B6BC0] underline" href="/documents/Jofer_Usa_Resume.pdf" target="_blank">Download Resume</Link>
						<Link href="#contact">Contact Me</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
