// import { Pool } from 'pg';

// const pool = new Pool({
// 	user: process.env.AWS_AURORA_USER,
// 	host: process.env.AWS_AURORA_HOST,
// 	database: process.env.AWS_AURORA_DB,
// 	password: process.env.AWS_AURORA_PASSWORD,
// 	port: process.env.AWS_AURORA_PORT,
// });

// export default pool;
// pages/api/hello_world.js

import { Pool } from 'pg';

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;


const pool = new Pool({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
});

export default pool;