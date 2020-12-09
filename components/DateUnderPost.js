const months = [];
months[1] = "Gennaio";
months[2] = "Febbraio";
months[3] = "Marzo";
months[4] = "Aprile";
months[5] = "Maggio";
months[6] = "Giugno";
months[7] = "Luglio";
months[8] = "Agosto";
months[9] = "Settembre";
months[10] = "Ottobre";
months[11] = "Novembre";
months[12] = "Dicembre";

export default function DateUnderPost(props) {
	const date = props.date.split("-");
	const day = date[2].charAt(0) === "0" ? date[2].slice(1) : date[2];
	const month = months[Number(date[1])];

	return (
		<p className="homepageDate">
			{day} {month} {date[0]}
		</p>
	);
}
