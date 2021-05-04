import dynamic from "next/dynamic";
// import SunMoon from "./SunMoonSVG";

export default function DarkModeButton() {
	let isDark = true;
	const SunMoon = dynamic(() => import("./SunMoonSVG"))

	if (typeof window !== "undefined") {
		var htmlTag = document.querySelector("html")!
		var overlay = document.querySelector("#overlay")!
		isDark = localStorage.getItem("theme") === "dark" ? true : false;
		if (isDark) {
			htmlTag.classList.add("dark");
			overlay.classList.add("mooned");
		}
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
		overlay.classList.toggle("mooned");
		document.documentElement.style.setProperty(
			"--hamb-color",
			isDark ? "#FFFFFF" : "#3a3a3a"
		);
		localStorage.setItem("theme", isDark ? "dark" : "");
	}

	return (
		<div onClick={toggleDarkMode} className="switch rounded-full h-8 w-16 bg-dark-black dark:bg-customBlue absolute right-8 top-4 shadow-2xl hover:ring ring-customBlue ring-opacity-50">
			<div className="ball  w-6 h-6 rounded-full absolute top-1 left-1.5 transform transition-all dark:translate-x-7 duration-500 ease-in-out" aria-label="Switch per Dark Mode">
				<SunMoon />
			</div>
			<style jsx>
				{`
        @media (max-width: 768px) {
          	.switch {
							transform: translate(-200%);
						}
						.switch.isOpen {
							transform: translateY(0%);
							transition: all 0.375s;
						}
        }
        `}
			</style>
		</div>
	);
}
