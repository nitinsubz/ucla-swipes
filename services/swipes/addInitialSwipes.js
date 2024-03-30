'use server';

import pool from '../pool';
import { arrayHelpers } from '@/services/lib/index.js';

const addInitalSwipesSQL = `
INSERT INTO starting_swipes (quarter, plan, intial_swipes)
VALUES ($1, $2, $3)
RETURNING *
`;

const addInitalSwipes = async (quarter, plan, initial_swipes) => {
	try {
		if (arrayHelpers.hasUndefined(quarter, plan, initial_swipes))
			throw new Error(`Invalid SQL query.`);

		const res = await pool.query(addInitalSwipesSQL, [quarter, plan, initial_swipes]);
		return res.rows;
	} catch (e) {
		throw new Error(`Error with addInitalSwipes: ${e.message}`);
	}
};

export default addInitalSwipes;
