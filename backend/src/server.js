const db = require('./db')
module.exports = async function (fastify, opts) {
  fastify.setErrorHandler(err=>console.error(err))

  fastify.get('/', async (request, reply) => {
    const client = await db.connect()
    const { rows } = await client.query('Select 1')
    client.release()
    return { hello: rows }
  })
}
