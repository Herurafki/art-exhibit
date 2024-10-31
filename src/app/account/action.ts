"use server";

import { PrismaClient } from "@prisma/client";
import type { Register } from "./signup/page";
// biome-ignore lint/style/useNodejsImportProtocol: <explanation>
import { createHash } from "crypto";

const prisma = new PrismaClient();

export const SignUp = async (data: Register) => {
	const hashPassword = createHash("sha256")
		.update(data.password)
		.digest("base64");
	const phone = data.phone || null;

	try {
		await prisma.pengguna.create({
			data: {
				nama: data.name,
				email: data.email,
				kata_sandi: hashPassword,
				no_telepon: phone,
			},
		});
	} catch (error) {
		prisma.$disconnect();
		const err = error as { meta: { modelName: string; target: string } };
		console.log(err.meta.target);
		if (err.meta.target.includes("email")) {
			return "Email already taken";
		}
	}
	prisma.$disconnect();
	return false;
};
