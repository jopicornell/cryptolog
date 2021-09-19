import { migrate } from 'postgres-migrations'

(async () => {
  const dbConfig = {
    database: "cryptolog",
    user: "cryptolog",
    password: process.env.DB_PASSWORD ?? 'cryptolog',
    host: "localhost",
    port: 5432,

    // Default: false for backwards-compatibility
    // This might change!
    ensureDatabaseExists: true,

    // Default: "postgres"
    // Used when checking/creating "database-name"
    defaultDatabase: "postgres"
  }

  await migrate(dbConfig, "migrations")
})()
