import months from "../../lib/monthsArray"

export default function DateUnderPost({ date }: { date: string }) {
	const dateArray = date.split("-");

	return (
		<p className="text-center font-light text-base m-0">
			{dateArray[0]} {months[Number(dateArray[1])]} {dateArray[2]}
			<style jsx>
				{`	@media (max-width: 768px){p{
						width: inherit;
						margin: auto;
					}}
					
				`}
			</style>
		</p>
	);
}
