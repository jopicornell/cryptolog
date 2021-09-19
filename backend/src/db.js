const { Pool } = require('pg')
module.exports = new Pool({
  connectionString: 'postgres://cryptolog:cryptolog@localhost/cryptolog',
})
