"use client";

import { useEffect, useRef } from "react";

export default function AboutPage() {
	const caro = useRef<HTMLDivElement>(null);

	useEffect(() => {
		document.getElementById("active")?.classList.add("opacity-0");
	});

	const press = () => {
		caro.current?.scrollIntoView({ behavior: "smooth" });
		caro.current?.classList.toggle("bg-black");
	};
	return (
		<>
			<div
				className="p-3 bg-cyan-700 inline-block"
				onKeyDown={() => {}}
				onClick={() => {
					press();
				}}
			>
				Press this
			</div>
			<div className="w-[1000px] bg-red-300 gap-3 p-3 overflow-hidden">
				<div className="*:w-[200px] *:h-[200px] *:bg-blue-300 gap-3 grid grid-flow-col grid-rows-1">
					<div id="active" />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div ref={caro} />
				</div>
			</div>
		</>
	);
}
