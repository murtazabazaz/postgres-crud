import db from '../index.db.js';

import createTodosTable from './create.js';

export const runDbMigrations = async()=>{
    console.log('Begin DB Migration');
    
    // single client transaction...

    const client = await db.connect()
    try {
        await client.query('BEGIN');

        await client.query(createTodosTable);

        await client.query('COMMIT');

        console.log('End DB Migration');
    } catch (e) {
        await client.query('ROLLBACK');

        console.log('DB Migration failed');

        throw e
    }
    finally {
        client.release()
    }

}