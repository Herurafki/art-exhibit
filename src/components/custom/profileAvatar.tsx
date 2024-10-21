"use client";
import PersonIcon from "@/icons/person";
import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import MyDropdown from "./dropdown";
import { IsLogin, Login } from "@/app/userValidation";

const login: ReactNode = (
	<MyDropdown>
		<PersonIcon />
	</MyDropdown>
);
const notLogin: ReactNode = (
	<div className="relative flex justify-end px-3 items-center space-x-3">
		<Link
			href={"/account/signin"}
			key={"SignIn"}
			className="hover:bg-blue-50 hover:text-black transition-all duration-300 rounded py-2 px-4"
		>
			{"Login / Sign Up"}
		</Link>
		<button
			className="bg-red-700 h-7"
			type="button"
			onClick={() => {
				Login();
				window.location.replace("/");
			}}
		>
			Login
		</button>
	</div>
);
export default function ProfileAvatar() {
	const [profileState, setProfile] = useState<ReactNode>(notLogin);

	useEffect(() => {
		async function getValidation() {
			const validation = await IsLogin();

			setProfile(validation ? login : notLogin);
		}
		getValidation();
	}, []);

	return profileState;
}
