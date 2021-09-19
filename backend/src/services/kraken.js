const fastifyPlugin = require('fastify-plugin')
const named = require('yesql').pg

async function getLedger({ db }) {
  const client = db.connect()
  const { rows } = await client.query('select 1')
  return rows
}

function plugin(fastify, options, done) {


  fastify.decorate(
    'getLedger', 
    (params) => getLedger({ ...params, db: options.db })
  )
  done()
}
module.exports = fastifyPlugin(plugin)
