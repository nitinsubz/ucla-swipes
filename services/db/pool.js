import Pool from 'pg';


const pool = new Pool({
  connectionString: "postgres://default:QDCbdf1q9owG@ep-empty-wave-a4mpyn7e-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require",
})