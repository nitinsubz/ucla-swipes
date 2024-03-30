'use server';

import pool from '../db/pool';

const addStartDatesSql = `
INSERT INTO starting_swipes (quarter, start_date)
VALUES ($1, $2)
RETURNING *
`;

const addStartDates = async (quarter, start_date) => {
	try {
		const res = await pool.query(addStartDatesSql, [quarter, start_date]);
		return res.rows;
	} catch (e) {
		throw new Error(`Error with addStartDates: ${e.message}`);
	}
};

export default addStartDates;
