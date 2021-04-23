export default function DarkModeButton() {
	let isDark = true;

	if (typeof window !== "undefined") {
		isDark = localStorage.getItem("theme") === "dark" ? true : false;
		if (isDark) document.querySelector("html").classList.add("dark");
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
		document.querySelector("html").classList.toggle("dark");
		document.documentElement.style.setProperty(
			"--hamb-color",
			isDark ? "#FFFFFF" : "#3a3a3a"
		);
		localStorage.setItem("theme", isDark ? "dark" : null);
	}

	return (
		<div onClick={toggleDarkMode} className="switch">
			<div className="ball" aria-label="Switch per Dark Mode"></div>
		</div>
	);
}
