"use client";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import CheckIcon from "@/icons/check";
export default function ProfileSignUpPage() {
	return (
		<section className="flex flex-col justify-center items-center w-screen h-screen overflow-scroll">
			<h1 className="text-5xl m-4 text-white font-semibold cursor-default">
				ArtSpace
			</h1>
			<h1 className="text-3xl m-3 font-semibold text-slate-300 text-center">
				Register
			</h1>
			<form className="m-5 min-w-fit w-[30vw] justify-center rounded-3xl space-y-7">
				<Input type="text" label="Full Name" />
				<Input type="email" label="Email" />
				<Input type="number" label="Phone Number" style={{}} />
				<Input type="password" label="Password" style={{}} />
				<Input type="password" label="Confirm Password" style={{}} />
				{/* Term And Service checkbox */}
				<label htmlFor="agreement" className="inline-flex items-center h-5">
					<input
						type="checkbox"
						name="agreement"
						id="agreement"
						className="size-5 duration-300 rounded-lg peer/chk hidden"
					/>
					<div className="size-6 bg-white peer-checked/chk:bg-blue-700 rounded-[5px] duration-300 flex items-center justify-center fill-white stroke-white stroke-[50px]">
						<CheckIcon />
					</div>
					<span className="m-3">I agree of Term and Service</span>
				</label>
				<div className="flex justify-end">
					<div className="w-full">
						Already Have Account try to{" "}
						<Link href={"/account/signin"} className="text-blue-300">
							Sign In
						</Link>
					</div>
					<Button className="scale-105 bg-blue-300">Sign Up</Button>
				</div>
			</form>
		</section>
	);
}
