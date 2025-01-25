import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_KEY);

export async function POST(request: any) {
	try {
		const { name, email, message } = await request.json();

		await resend.emails.send({
			from: email,
			to: "joferusa43@gmail.com",
			subject: `New Message from ${name}`,
			html: `
				${message}
			`,
		});

		return new Response(JSON.stringify({ success: true }), { status: 200 });
	} catch (error : any) {
		console.error("Error sending email:", error);
		return new Response(
			JSON.stringify({ success: false, error: error.message }),
			{ status: 500 }
		);
	}
}
