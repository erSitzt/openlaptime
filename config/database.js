const sql = require('mssql')

const poolPromise = new sql.ConnectionPool({
  user: 'sa',
  password: 'P@ssword123',
  server: 'db',
  database: 'laptimes',
  port: 1433,
  options: {
    trustedConnection: true,
    encrypt: true,
    enableArithAbort: true,
    trustServerCertificate: true,
  },
})
  .connect()
  .then(pool => {
    console.log('Connected to SQLServer...');
    return pool;
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err));

module.exports = {
  sql, poolPromise
};