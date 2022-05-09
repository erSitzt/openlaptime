const { poolPromise } = require('../../config/database')

exports.create = async (data) => {
    const pool = await poolPromise;
    const rs = await pool
        .request()
        .query(`INSERT INTO tags (tag_id, rider_id)
                VALUES ('${data.tag}', 1)`)

    return rs.rowsAffected;
}

exports.read = async () => {
    const pool = await poolPromise;
    const rs = await pool
        .request()
        .query(`SELECT DISTINCT tag_id
                FROM laps`)

    return rs.recordset;
}

exports.update = async (id, data) => {
    const pool = await poolPromise;
    const rs = await pool
        .request()
        .query(`UPDATE tags SET
                name = '${data[0].name}'                    
                WHERE id = ${id}`);

    return rs.rowsAffected;
}

exports.delete = async (id) => {
    const pool = await poolPromise;
    const rs = await pool
        .request()
        .query(`DELETE FROM tags
                WHERE id = ${id}`)

    return rs.rowsAffected;
}

exports.readById = async(id) =>{
    const pool = await poolPromise;
    const rs = await pool
            .request()
            .query(`SELECT id, tag_id, rider_id
                    FROM tags 
                    WHERE tag_id = ${id} `);
    
            return rs.recordset;
}

