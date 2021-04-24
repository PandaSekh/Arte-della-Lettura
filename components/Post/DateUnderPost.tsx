const months: Array<String> = [];
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

export default function DateUnderPost({ date }: { date: string }) {
	const dateArray = date.split("-");

	return (
		<p className="text-center font-light text-base m-0">
			{dateArray[0]} {months[Number(dateArray[1])]} {dateArray[2]}
			<style jsx>
				{`
					p{
						width: inherit;
					}
				`}
			</style>
		</p>
	);
}
