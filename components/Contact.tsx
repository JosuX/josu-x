"use client";

import Link from "next/link";
import { useState } from "react";

const Contact = () => {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [status, setStatus] = useState("");

	const handleInputChange = (e: any) => {
		const { name, value } = e.target;
		setFormState((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formState),
			});

			if (res.ok) {
				setStatus("Message sent successfully!");
				setFormState({ name: "", email: "", message: "" });
			} else {
				setStatus("Failed to send message.");
			}
		} catch (error) {
			setStatus("An error occurred while sending the message.");
		}
	};

	return (
		<section id="contact" className="w-screen py-40 px-[270px] bg-gradient-to-b from-[#1A1A1A] to-[#2A2A2A]">
			<div className="mockup-window bg-[#2B6BC0] bg-opacity-50 border flex w-full">
				<div className="bg-[#2B6BC0] bg-opacity-30 flex gap-48 px-20 py-16">
					<div className="flex flex-col justify-between">
						<h5 className="font-bold text-[40px]">Contact Me</h5>
						<p className="font-medium text-lg">
							<Link href={"mailto:joferusa43@gmail.com"}>joferusa43@gmail.com</Link> | <Link href={"tel:+63927469570"}>+63927469570</Link>
						</p>
					</div>
					<form className="flex flex-grow flex-col w-[240px] gap-7" onSubmit={handleSubmit}>
						<label className="form-control w-full">
							<div className="label">
								<span className="label-text">Name</span>
							</div>
							<input
								type="text"
								name="name"
								className="input input-ghost input-bordered input-lg w-full"
								value={formState.name}
								onChange={handleInputChange}
								required
							/>
						</label>
						<label className="form-control w-full">
							<div className="label">
								<span className="label-text">Email</span>
							</div>
							<input
								type="email"
								name="email"
								className="input input-ghost input-bordered input-lg w-full"
								value={formState.email}
								onChange={handleInputChange}
								required
							/>
						</label>
						<label className="form-control flex-grow">
							<div className="label">
								<span className="label-text">Message</span>
							</div>
							<textarea
								name="message"
								className="textarea textarea-bordered textarea-ghost h-48"
								value={formState.message}
								onChange={handleInputChange}
								required
							></textarea>
						</label>
						<button type="submit" className="btn glass w-2/5 self-end border-[1px] border-gray-500 border-solid">
							Submit
						</button>
						{status && <p className="mt-4 text-sm self-end">{status}</p>}
					</form>
					
				</div>
			</div>
		</section>
	);
};

export default Contact;
