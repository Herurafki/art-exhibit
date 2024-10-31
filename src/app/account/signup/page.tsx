"use client";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Checkbox } from "@nextui-org/checkbox";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { SignUp } from "../action";

export type Register = {
	name: string;
	email: string;
	phone?: number;
	password: string;
	confirmPassword: string;
	agreement: boolean;
};

function Submit(data: Register) {
	SignUp(data);
}

export default function ProfileSignUpPage() {
	const [password, setPassword] = useState<string>("");
	const form = useForm<Register>({});
	return (
		<section className="flex flex-col justify-center items-center w-screen h-screen overflow-scroll">
			<h1 className="text-5xl m-4 text-white font-semibold cursor-default">
				ArtSpace
			</h1>
			<h1 className="text-3xl m-3 font-semibold text-slate-300 text-center">
				Register
			</h1>
			<form
				className="m-5 min-w-fit w-[30vw] justify-center rounded-3xl space-y-7"
				onSubmit={form.handleSubmit(Submit)}
			>
				<Input
					{...form.register("name")}
					isRequired
					type="text"
					label="Name"
					validationBehavior="native"
					minLength={5}
					errorMessage={(result) => {
						if (result.validationDetails.valueMissing) {
							return "Name is Required";
						}
						if (result.validationDetails.tooShort) {
							return "Name must be at least 5 characters long";
						}
					}}
				/>
				<Input
					{...form.register("email")}
					isRequired
					validationBehavior="native"
					errorMessage={(result) => {
						if (result.validationDetails.typeMismatch) {
							return "Email is Invalid";
						}
						if (result.validationDetails.valueMissing) {
							return "Email is Required";
						}
						if (result.validationDetails.customError) {
							return "Email has been used";
						}
					}}
					type="email"
					label="Email"
				/>

				<Input
					{...form.register("phone")}
					minLength={11}
					maxLength={13}
					validationBehavior="native"
					errorMessage={(phone) => {
						if (phone.validationDetails.tooShort) {
							return "Phone Number too Short at Least 11 Digits";
						}
						if (phone.validationDetails.tooLong) {
							return "Phone Number too Long at Most 13 Digits";
						}
					}}
					type="number"
					label="Phone Number"
				/>
				<Input
					{...form.register("password")}
					type="password"
					label="Password"
					validationBehavior="native"
					minLength={8}
					errorMessage={(validate) => {
						if (validate.validationDetails.valueMissing) {
							return "Password is Required";
						}
						if (validate.validationDetails.tooShort) {
							return "Password must be at least 8 characters long";
						}
					}}
					isRequired
					onChange={(e) => {
						setPassword(e.target.value);
					}}
				/>
				<Input
					{...form.register("confirmPassword")}
					type="password"
					label="Confirm Password"
					validationBehavior="native"
					validate={(value) => {
						if (value !== password) {
							return "Password Does Not Match";
						}
						return true;
					}}
				/>
				<Checkbox
					{...form.register("agreement")}
					color="primary"
					radius="md"
					isRequired
				>
					<span className="text-white">Agreement Term and Service</span>
				</Checkbox>

				<div className="flex justify-end">
					<div className="w-full">
						Already Have Account try to{" "}
						<Link href={"/account/signin"} className="text-blue-300">
							Sign In
						</Link>
					</div>
					<Button className="scale-105 bg-blue-300" type="submit">
						Sign Up
					</Button>
				</div>
			</form>
		</section>
	);
}
