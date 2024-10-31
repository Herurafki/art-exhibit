"use client";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { type SubmitHandler, useForm } from "react-hook-form";

type formField = {
	email: string;
	password: string;
};
export default function ProfileSignInPage() {
	const { register, handleSubmit } = useForm<formField>({
		defaultValues: {
			email: "ayam",
		},
	});
	return (
		<section className="flex flex-col justify-center items-center w-screen h-screen overflow-scroll">
			<h1 className="text-7xl font-semibold text-slate-200 text-center">
				Login
			</h1>
			<form
				className="m-10 justify-center space-y-10 *:w-96"
				onSubmit={handleSubmit(Submit)}
			>
				<Input type="email" label="Email" {...register("email")} />
				<Input type="password" label="Password" {...register("password")} />

				<Button className="bg-blue-300 p-5" type="submit">
					Sign In
				</Button>
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

const Submit: SubmitHandler<formField> = (data) => {
	console.log(data);
};
