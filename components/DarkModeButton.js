export default function DarkModeButton() {
	let isDark = true;

	if (typeof window !== "undefined") {
		isDark = localStorage.theme === "dark" ? true : false;
	}

	function toggleDarkMode() {
		isDark = !isDark;
		document.querySelector("html").classList.toggle("dark");
		localStorage.theme = isDark ? "dark" : "sergio";
	}

	return (
		<div onClick={toggleDarkMode} className="switch">
			<div className="ball">
				
			</div>
		</div>
	);
}
