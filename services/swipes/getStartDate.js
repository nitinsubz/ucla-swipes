'use server';

import pool from '../pool';

const getStartDateSQL = `
SELECT * FROM start_dates
WHERE start_date < Date.today
ORDER BY start_date DESC
LIMIT 1;
`;

export const getDate = async () => {
	try {

		const res = await pool.query(getStartDateSQL);
		return res.rows;
	} catch (e) {
		throw new Error(`Error with getStartDate: getDate ${e.message}`);
	}
};
