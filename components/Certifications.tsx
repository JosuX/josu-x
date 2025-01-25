"use client";

import Link from "next/link";
import certs from "@/constants/certs";
import Image from "next/image";
const Certifications = () => {
	return (
		<section
			id="certs"
			className="w-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#1D1D1D] to-[#1A1A1A] py-28"
		>
			<h2 className="font-bold text-5xl pb-24">Certifications</h2>
			<div className="grid grid-cols-3 grid-rows-2 w-auto mx-32">
				{certs.map((cert, index) => (
					<div
						key={index}
						className={`flex flex-col items-center justify-center w-full border border-gray-500 py-9 px-9 ${
							index < 3 ? "border-t-0" : "" // Remove top border for the first row
						} ${
							index % 3 === 0 ? "border-l-0" : "" // Remove left border for the first column
						} ${
							(index + 1) % 3 === 0 ? "border-r-0" : "" // Remove right border for the last column
						} ${
							index >= 3 ? "border-b-0" : "" // Remove bottom border for the last row
						}`}
					>
						{cert.icon !== "" ? (
							<div className="h-[90px] w-[90px] glass-code rounded-full mb-5">
								<Image className="p-5" src={cert.icon} alt={cert.icon} fill />
							</div>
						) : (
							<div className="h-[90px] w-[90px] glass-code rounded-full mb-5" />
						)}
						<h3 className="font-bold text-2xl mb-4 text-center">
							{cert.title}
						</h3>
						<p className="mb-7 text-center text-sm text-opacity-50">
							{cert.description !== ""
								? cert.description
								: "Lorem ipsum"}
						</p>
						{cert.url !== "" ? (
							<Link className="pb-9" href={`${cert.url}`} target="_blank">
								<span className="text-blue-500 underline">
									View Certificate
								</span>
							</Link>
						) : (
							<></>
						)}
					</div>
				))}
			</div>
		</section>
	);
};

export default Certifications;
