"use client";
import { LogOut } from "@/app/userValidation";
import clsx from "clsx";
import { useRef, type ReactNode } from "react";

export default function MyDropdown({ children }: { children: ReactNode }) {
	const dropdownItem = useRef<HTMLDivElement>(null);
	const handler = () => {
		if (!dropdownItem.current?.focus()) {
		}
		dropdownItem.current?.focus();
	};

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
				<span className="*:size-7 fill-slate-700">{children}</span>
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
					<div>Stranger@gg.com</div>
					<div>My Profile</div>
					<div>Bookmark</div>
					<div>Notification</div>
					<div
						className="text-red-500"
						onKeyDown={() => {}}
						onClick={() => {
							LogOut();
							window.location.replace("/");
						}}
					>
						Log Out
					</div>
				</div>
			</div>
		</div>
	);
}
