export function getDateFrom_MM_DD_YYYY(date) {
	const parts = date.split("-");
	return new Date(`${parts[1]}-${parts[0]}-${parts[2]}`);
}
