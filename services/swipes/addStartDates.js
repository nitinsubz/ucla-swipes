'use server';

import pool from '../db/pool';

const addStartDatesSql = `
INSERT INTO starting_swipes (quarter, start_date)
VALUES ($1, $2)
RETURNING *
`;

const addStartDates = async (quarter, start_date) => {
	const client = await pool.connect();

	try {
		const response = await client.query('SELECT version()');
		console.log(response.rows[0]);
		return response.rows[0];
	} finally {
		client.release();
	}
	// try {
	// 	const res = await pool.query(addStartDatesSql, [quarter, start_date]);
	// 	return res.rows;
	// } catch (e) {
	// 	throw new Error(`Error with addStartDates: ${e.message}`);
	// }
};

export default addStartDates;
