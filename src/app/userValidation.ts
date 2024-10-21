"use server";
import { cookies } from "next/headers";

export async function Login() {
	cookies().set("id", "69");
}

export async function LogOut() {
	cookies().delete("id");
}

export async function IsLogin() {
	return cookies().get("id");
}
