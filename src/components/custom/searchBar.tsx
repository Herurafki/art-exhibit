import SearchIcon from "@/icons/search";

export default function SearchBar() {
	return (
		<div className="flex *:text-black relative items-center group">
			<div className="absolute left-2 group-focus-within:*:scale-0 group-focus-within:*:opacity-0 *:duration-300">
				<SearchIcon />
			</div>
			<input
				type="text"
				className="w-96 rounded p-2 pl-10 focus:pl-2 duration-300 hover:bg-blue-50 placeholder:italic"
				placeholder="Search..."
			/>
		</div>
	);
}
