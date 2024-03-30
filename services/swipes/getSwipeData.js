'use server';

import pool from '../pool';

import { arrayHelpers } from '@/services/lib/index.js';

const getSwipeDateSQL = `
SELECT * FROM exceptions
WHERE quarter = $1 AND plan = $2;
`;

export const byQuarterAndPlan = async (quarter, plan) => {
	try {
        if (arrayHelpers.hasUndefined(quarter, plan))
			throw new Error(`Invalid SQL query.`);
		const res = await pool.query(getSwipeDateSQL, [quarter, plan]);
		return res.rows;
	} catch (e) {
		throw new Error(`Error with getSwipeDateSQL: getDate ${e.message}`);
	}
};
