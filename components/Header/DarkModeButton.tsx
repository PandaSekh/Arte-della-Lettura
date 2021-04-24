export default function DarkModeButton() {
	let isDark = true;
	const htmlTag = document.querySelector("html")!

	if (typeof window !== "undefined") {
		isDark = localStorage.getItem("theme") === "dark" ? true : false;
		if (isDark) htmlTag.classList.add("dark");
		document.documentElement.style.setProperty(
			"--hamb-color",
			isDark ? "#FFFFFF" : "#3a3a3a"
		);
		document.documentElement.style.setProperty(
			"--header-bg-color",
			isDark ? "#3a3a3a" : "#ffffff"
		);
	}

	function toggleDarkMode() {
		isDark = !isDark;
		htmlTag.classList.toggle("dark");
		document.documentElement.style.setProperty(
			"--hamb-color",
			isDark ? "#FFFFFF" : "#3a3a3a"
		);
		localStorage.setItem("theme", isDark ? "dark" : "");
	}

	return (
		<div onClick={toggleDarkMode} className="switch">
			<div className="ball" aria-label="Switch per Dark Mode"></div>
		</div>
	);
}
