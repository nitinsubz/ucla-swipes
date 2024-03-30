'use server';

import pool from '../pool';
import { arrayHelpers } from '@/services/lib/index.js';

const addSwipeDataSQL = `
INSERT INTO swipe_exceptions (quarter, plan, date, actual_swipes, expected_swipes)
VALUES ($1, $2, $3, $4, $5)
RETURNING *
`;

const addSwipeData = async (quarter, plan, date, actual_swipes, expected_swipes) => {
	try {
		if (arrayHelpers.hasUndefined(quarter, plan, date, actual_swipes, expected_swipes))
			throw new Error(`Invalid SQL query.`);

		const res = await pool.query(addSwipeDataSQL, [quarter, plan, date, actual_swipes, expected_swipes]);
		return res.rows;
	} catch (e) {
		throw new Error(`Error with addSwipeData: ${e.message}`);
	}
};

export default addSwipeData;
