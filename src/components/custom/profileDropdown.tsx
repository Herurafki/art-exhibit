"use client";
import { IsLogin, LogOut, UserProfile } from "@/app/account/action";
import PersonIcon from "@/icons/person";
import type { $Enums } from "@prisma/client";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

type profileData = {
	peran: $Enums.Peran;
	nama: string;
	email: string;
	type: $Enums.TypePengguna;
};

export default function ProfileDropdown() {
	const dropdownItem = useRef<HTMLDivElement>(null);
	const [profile, setProfile] = useState<profileData>({
		nama: "",
		email: "",
		peran: "PELANGGAN",
		type: "NORMAL",
	});
	const handler = () => {
		if (!dropdownItem.current?.focus()) {
		}
		dropdownItem.current?.focus();
	};

	useEffect(() => {
		const getProfile = async () => {
			const token = await IsLogin();
			const profileData = await UserProfile(token || "");

			setProfile(
				profileData || {
					nama: "",
					email: "",
					peran: "PELANGGAN",
					type: "NORMAL",
				},
			);
		};
		getProfile();
	}, []);

	return (
		<div className="relative group">
			<div
				className={
					"flex size-12 relative rounded-full bg-slate-100 items-center justify-center hover:bg-slate-300 duration-300"
				}
			>
				<button
					onClick={handler}
					type="button"
					key={"Dropdown Trigger"}
					className={clsx(
						"rounded-full size-10 absolute bg-transparent group-focus-within:hidden",
					)}
				/>
				<span className="*:size-7 fill-slate-700">{<PersonIcon />}</span>
			</div>
			<div
				// Dropdown Menu
				key={"Dropdown Menu"}
				className={clsx(
					"duration-300 relative focus:scale-100 focus:opacity-100 scale-0 opacity-0 menu",
				)}
				tabIndex={-1}
				ref={dropdownItem}
			>
				<div
					className={
						"flex flex-col cursor-pointer *:rounded-xl items-start absolute top-1 p-3 right-0 *:text-sm hover:*:bg-blue-900 *:duration-300 *:p-3 space-y-2 p- w-52 duration-300 bg-blue-950 rounded-[0.5rem] *:w-full *:text-start"
					}
				>
					<div>{profile.email}</div>
					<div>{profile.nama}</div>
					<div>{profile.peran}</div>
					<div>{profile.type}</div>
					<div>Bookmark</div>
					<div>Notification</div>
					<div
						className="text-red-500"
						onKeyDown={() => {}}
						onClick={() => {
							LogOut();
						}}
					>
						Log Out
					</div>
				</div>
			</div>
		</div>
	);
}
