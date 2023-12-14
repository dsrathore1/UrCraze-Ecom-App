
const client2 = require('../../../../helper/DB/connectDB.js');

async function getDataById(id) {
    const getDataById = await client2.query(getContactDataByID, [id]);
    return NextResponse.json(getDataById.rows);
}

getDataById(10);