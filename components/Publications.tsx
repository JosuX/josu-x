import Link from "next/link";
import React from "react";

const Publications = () => {
	return (
		<section
			id="publications"
			className="w-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#1D1D1D] to-[#1A1A1A] py-28 px-96"
		>
			<div className="text-lg flex flex-col justify-center items-center pb-12">
				<h2 className="font-bold text-5xl pb-16">Publications</h2>
				<h3 className="font-bold text-3xl">
					A Hospital Bed Availability Monitoring System Using the
					Internet of Things
				</h3>
				<p>
					September 2024 | &nbsp;
					<Link
						target="_blank"
						className="underline"
						href="https://www.researchgate.net/journal/International-Journal-on-Information-Technologies-and-Security-1313-8251?_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InB1YmxpY2F0aW9uIiwicGFnZSI6InB1YmxpY2F0aW9uIn19"
					>
						International Journal on Information Technologies and
						Security
					</Link>
					&nbsp; 16(3):13-26
				</p>

				<Link
					className="underline"
					href="http://dx.doi.org/10.59035/NKFQ4271"
					target="_blank"
				>
					DOI:10.59035/NKFQ4271
				</Link>
			</div>
			<h4 className="font-bold text-2xl pb-2">Abstract</h4>
			<p className="text-xl text-justify pb-6">
				Hospitals are considered the backbone of healthcare systems, and
				their significance is particularly pronounced during
				emergencies. However, the rapid overpopulation and recent
				pandemics have caused tremendous shortages of hospital beds,
				raising major threats to public health. This developmental
				research study aims to help improve the management of hospital
				beds through the design, development, testing, and evaluation of
				an Internet of Things (IoT)-based monitoring system implemented
				using Agile Scrum methodology. Based on the results of the
				hypothesis testing, the authors found that the optical sensors
				installed in 4 hospital rooms, with varying distance readings,
				are consistently accurate (F (3, 388) = 1.000, p=0.393), hence
				the authors accepted the proposed null hypothesis. Moreover, the
				beneficiaries, composed of the public, hospital staff, nurses,
				and a doctor evaluated the system to be overall very good, very
				efficient, very suitable, reliable, very usable, and very
				satisfactory. The outcome of this research aims to contribute to
				the United Nations' Sustainable Development Goals (UN-SDG) on
				good health and well-being (SDG 3).
			</p>
			<p className="text-2xl">
				Publication available at &nbsp;
				<Link
                className="text-[#2A86FF] underline"
					target="_blank"
					href="https://www.researchgate.net/publication/380465887_A_Hospital_Bed_Availability_Monitoring_System_Using_the_Internet_of_Things"
				>
					ResearchGate
				</Link>
			</p>
		</section>
	);
};

export default Publications;
