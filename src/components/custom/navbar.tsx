"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import SearchBar from "./searchBar";
import { motion, type Variant } from "framer-motion";
import ProfileAvatar from "./profileAvatar";

type navType = {
	navtxt: string;
	href: string;
};

const navItem: navType[] = [
	{
		navtxt: "Home",
		href: "/dashboard",
	},
	{
		navtxt: "About",
		href: "/dashboard/about",
	},
	{
		navtxt: "More",
		href: "/dashboard/more",
	},
	{
		navtxt: "Contact",
		href: "/dashboard/contact",
	},
	{
		navtxt: "Trending",
		href: "/dashboard/trending",
	},
];

export default function Navbar() {
	const route = usePathname();
	const [position, setPosotion] = useState(0);
	const [width, setWidth] = useState(0);
	const [opacity, setOpacity] = useState(0);
	const [duration, setDuration] = useState(0);
	const navli = useRef<(HTMLLIElement | null)[]>([]);

	useEffect(() => {
		const activeIndex = navItem.findIndex((nav) => nav.href === route);
		const activeLi = navli.current[activeIndex];
		setWidth(() => activeLi?.offsetWidth ?? 0);
		setPosotion(() => activeLi?.offsetLeft ?? 0);
		const opac = navItem.find((n) => n.href === route) ? 1 : 0;
		setOpacity(opac);
	}, [route]);
	type animationVariant = {
		[index: string]: Variant;
	};

	const sliderVariants: animationVariant = {
		slider: {
			left: position,
			opacity: opacity,
			width: width,
			transition: { duration: duration },
		},
	};
	const clickHandler = () => {
		setDuration(0.3);
	};

	return (
		<nav
			className={clsx(
				"flex pt-10 pb-2 px-3 border-b-2 border-white sticky top-0 w-screen z-10 bg-slate-950",
			)}
		>
			<h1 className="text-4xl text-white m-4 font-semibold cursor-default">
				ArtSpace
			</h1>
			{/* Divider */}
			<div className="w-0.5 my-1 mx-5 bg-white" />
			<ul
				className="flex relative mx-5 items-center"
				onMouseEnter={clickHandler}
			>
				<motion.div
					// Navbar Cursor
					variants={sliderVariants}
					animate={"slider"}
					initial={"slider"}
					key={"Navbar Cursor"}
					className={"absolute h-12 bg-blue-100 z-[1] rounded"}
				/>
				{navItem.map((nav, index) => {
					return (
						<li
							// NavBar Item
							key={nav.navtxt}
							ref={(li) => {
								navli.current[index] = li;
							}}
						>
							<Link href={nav.href} className={""}>
								<div
									className={clsx(
										"font-medium w-auto mx-1 flex items-center px-10 py-3 justify-center rounded duration-300 relative hover:border-b-8 border-transparent z-[2]",
										{
											"text-black": route === nav.href,
										},
									)}
								>
									{nav.navtxt}
								</div>
							</Link>
						</li>
					);
				})}
			</ul>
			<div className="flex justify-end w-full px-5 gap-x-4 items-center">
				<SearchBar />
				<ProfileAvatar />
			</div>
		</nav>
	);
}
