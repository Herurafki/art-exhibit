export default function TryPage() {
	return (
		<>
			Experiment
			<br />
			<nav className="bg-blue-300 text-3xl p-3 px-10">
				<div className="bg-red-300 h-10 w-20 absolute" />
				<ul className="flex gap-10 *:z-1">
					<li>Ayam</li>
					<li>Bebek</li>
					<li>Naga</li>
				</ul>
			</nav>
			<div className="w-10 h-10 dark:bg-red-400">Batak</div>
		</>
	);
}
