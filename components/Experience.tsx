import { FaChevronDown, FaGear } from "react-icons/fa6";
import exp from "@/constants/exp";

const Experience = () => {

	return (
		<section
			id="experience"
			className="w-screen bg-gradient-to-b from-[#262925] to-[#1D1D1D] py-32 flex flex-col justify-center items-center"
		>
			<h2 className="font-bold text-5xl pb-24">Experience</h2>
			<ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
				{exp.map((job, index) => (
					<li key={index}>
						{index % 2 === 0 ? (
							<div className="timeline-start mb-10 md:text-end">
								<div className="flex flex-col">
									<div className="w-[40vw] bg-gray-900 flex flex-col rounded-2xl p-5">
										<div className="flex gap-4">
											<FaGear size={30} />
											<h2 className="font-bold text-2xl flex-grow text-start">
												{job.role}
											</h2>
											<FaChevronDown size={30} />
										</div>
										<div className="p-4 text-white text-lg text-start w-full">
											<pre className="whitespace-pre-wrap break-words">
												<code className="typing-p">
													<span className="text-blue-500">
														&lt;div&gt;
													</span>
													{"\n  "}
													<span className="text-[#BBA963]">
														&lt;h1&gt;
													</span>
													<span className="text-green-500">
														{job.duration}
													</span>
													<span className="text-[#BBA963]">
														&lt;/h1&gt;
													</span>
													{"\n  "}
													<span className="text-[#BBA963]">
														&lt;h2&gt;
													</span>
													<span className="text-green-500">
														{job.company}
													</span>
													<span className="text-[#BBA963]">
														&lt;/h2&gt;
													</span>
													{"\n  "}
													<span className="text-blue-500">
														&lt;p&gt;
													</span>
													{
														job.description
													}
													<span className="text-blue-500">
														&lt;/p&gt;
													</span>
													{"\n"}
													<span className="text-blue-500">
														&lt;/div&gt;
													</span>
												</code>
											</pre>
										</div>
									</div>
								</div>
							</div>
						) : (
							<div className="timeline-end mb-10 md:text-end">
								<div className="w-[40vw] bg-gray-900 flex flex-col rounded-2xl p-5">
									<div className="flex gap-4">
										<FaGear size={30} />
										<h2 className="font-bold text-2xl flex-grow text-start">
											{job.role}
										</h2>
										<FaChevronDown size={30} />
									</div>
									<div className="p-4 text-white text-lg text-start w-full">
											<pre className="whitespace-pre-wrap break-words">
												<code className="typing-p">
													<span className="text-blue-500">
														&lt;div&gt;
													</span>
													{"\n  "}
													<span className="text-[#BBA963]">
														&lt;h1&gt;
													</span>
													<span className="text-green-500">
														{job.duration}
													</span>
													<span className="text-[#BBA963]">
														&lt;/h1&gt;
													</span>
													{"\n  "}
													<span className="text-[#BBA963]">
														&lt;h2&gt;
													</span>
													<span className="text-green-500">
														{job.company}
													</span>
													<span className="text-[#BBA963]">
														&lt;/h2&gt;
													</span>
													{"\n  "}
													<span className="text-blue-500">
														&lt;p&gt;
													</span>
													{
														job.description
													}
													<span className="text-blue-500">
														&lt;/p&gt;
													</span>
													{"\n"}
													<span className="text-blue-500">
														&lt;/div&gt;
													</span>
												</code>
											</pre>
										</div>
								</div>
							</div>
						)}
						<div className="timeline-middle h-5 w-5 glass-code rounded-full" />
						{/* Only add <hr /> if it's not the last item */}
						{index !== exp.length - 1 && <hr />}
					</li>
				))}
			</ul>
		</section>
	);
};

export default Experience;
