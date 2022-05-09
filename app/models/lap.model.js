const { poolPromise } = require('../../config/database')

exports.create = async (data) => {
    const pool = await poolPromise;
    let date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const rs = await pool
        .request()
        .query(`INSERT INTO laps (tag_id, starttime, finishtime)
                VALUES ('${data.tag}', '${date}', '${date}')`)

    return rs.rowsAffected;
}

exports.start = async (data) => {
    const pool = await poolPromise;
    let date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const rs = await pool
        .request()
        .query(`INSERT INTO laps (tag_id, starttime)
                VALUES ('${data.TagId}', '${data.TagSeenTime}')`)

    return rs.rowsAffected;
}

exports.end = async (id, data) => {
    const pool = await poolPromise;
    let date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const rs = await pool
        .request()
        .query(`UPDATE laps SET
                finishtime = '${data.TagSeenTime}'                    
                WHERE id = ${id}`);

    return rs.rowsAffected;
}

exports.read = async () => {
    const pool = await poolPromise;
    const rs = await pool
        .request()
        .query(`SELECT *
                FROM laps`)

    return rs.recordset;
}

exports.update = async (id, data) => {
    const pool = await poolPromise;
    const rs = await pool
        .request()
        .query(`UPDATE laps SET
                name = '${data[0].name}'                    
                WHERE id = ${id}`);

    return rs.rowsAffected;
}

exports.delete = async (id) => {
    const pool = await poolPromise;
    const rs = await pool
        .request()
        .query(`DELETE FROM laps
                WHERE id = ${id}`)

    return rs.rowsAffected;
}

exports.readById = async(id) =>{
    const pool = await poolPromise;
    const rs = await pool
            .request()
            .query(`SELECT id, tag_id, CONVERT(VARCHAR(10), (finishtime-starttime), 108) time
                    FROM laps 
                    WHERE tag_id = '${id}' `);
    
            return rs.recordset;
}

exports.lastopenlapbyid = async(tagid) =>{
    const pool = await poolPromise;
    const rs = await pool
            .request()
            .query(`SELECT id
                    FROM laps 
                    WHERE id = (SELECT MAX(id) FROM laps WHERE tag_id = '${tagid}' AND finishtime IS NULL AND starttime IS NOT NULL);`);
            return rs.recordset;
}