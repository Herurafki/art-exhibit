"use client";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import Link from "next/link";
export default function ProfileSignInPage() {
	return (
		<section className="flex flex-col justify-center items-center w-screen h-screen overflow-scroll">
			<h1 className="text-7xl font-semibold text-slate-200 text-center">
				Login
			</h1>
			<form className="m-10 justify-center space-y-10 *:w-96">
				<Input type="email" label="Email" />
				<Input type="password" label="Password" />
				<Button className="bg-blue-300 p-5">Sign In</Button>
				<div className="px-3">
					<p>
						{`Don't Have Account yet, try to`}{" "}
						<Link href={"/account/signup"} className="text-blue-300">
							Sign Up
						</Link>
					</p>
					<div className="mt-5 ">
						<Link
							href={""}
							className="hover:text-red-500 duration-300 text-blue-300"
						>
							Forget Password{" "}
						</Link>
					</div>
				</div>
			</form>
		</section>
	);
}
