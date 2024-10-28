import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default function Try() {
	const user = registerUser(prisma, {
		name: "rahman",
		email: "Ayam2",
		password: "Hebatnyaanaku",
	});
	console.log(user);
	return <>gugugaga</>;
}

async function registerUser(
	prisma: PrismaClient,
	userInput: {
		name: string;
		email: string;
		password: string;
	},
) {
	const { name, email, password } = userInput;

	// Validate input
	if (!name || !email || !password) {
		throw new Error("Please provide all required fields");
	}

	if (password.length < 8) {
		throw new Error("Password must be at least 8 characters long");
	}

	// Check if email is already taken
	const existingUser = await prisma.pengguna.findUnique({
		where: {
			email: email,
		},
	});

	if (existingUser) {
		throw new Error("Email already taken");
	}

	// Hash password

	// Create new user
	const user = await prisma.pengguna.create({
		data: {
			nama: name,
			email: email,
			kata_sandi: password,
		},
	});

	return user;
}
