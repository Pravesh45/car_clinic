const mysql = require('mysql')
const util = require('util')
const config = require('../config/dbconfig')

var con = mysql.createConnection(config)

con.connect((err) => {
    if (err)
        throw err
    console.log('Connected')
    con.query('call create_tables()', (err, res) => {
        if (err)
            throw err
        console.log('Tables created if not exists')
    })
    con.end()
})

function database(config) {
    const connection = mysql.createConnection(config)

    return {
        async query(sql, args) {
            return util.promisify(connection.query).call(connection, sql, args)
        },
        async close() {
            return util.promisify(connection.end).call(connection)
        },
        async beginTransaction() {
            return util.promisify(connection.beginTransaction).call(connection)
        },
        async commit() {
            return util.promisify(connection.commit).call(connection)
        },
        async rollback() {
            return util.promisify(connection.rollback).call(connection)
        }
    }
}

async function withTransaction(db, callback) {
    try {
        await db.beginTransaction()
        await callback()
        await db.commit()
    }
    catch (err) {
        await db.rollback()
        throw err;
    }
    finally {
        await db.close()
    }
}


module.exports = { database: database, withTransaction: withTransaction }