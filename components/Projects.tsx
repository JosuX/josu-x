const Projects = () => {
	const projects = Array(6).fill(null);
	return (
		<section
			id="projects"
			className="w-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#1D1D1D] to-[#1A1A1A] py-28"
		>
			<h2 className="font-bold text-5xl pb-24">Projects</h2>
			<div className="grid grid-cols-3 w-auto gap-16">
				{projects.map((_, index) => (
					<div key={index} className="w-96 h-[600px] flex flex-col gap-5">
						<div className="w-full h-1/2 bg-gray-500 rounded-2xl pb-5">
            
            </div>
            <div className="flex gap-3">
              <div className="glass-code py-1 px-4 rounded-2xl">React</div>
              <div className="glass-code py-1 px-4 rounded-2xl">Tailwind</div>
            </div>
            <h3>
              Project Name
            </h3>
            <p>Project Description</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Projects;
