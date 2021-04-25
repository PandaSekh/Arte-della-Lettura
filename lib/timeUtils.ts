export function getDateFrom_MM_DD_YYYY(date: string): Date {
	const parts = date.split("-");
	return new Date(`${parts[1]}-${parts[0]}-${parts[2]}`);
}

/**
 * 
 * @param date DD-MM-YYYY
 */
export function getMonthFromDate(date: string): number {
	const parts = date.split("-");
	return Number.parseInt(parts[1]);
}
