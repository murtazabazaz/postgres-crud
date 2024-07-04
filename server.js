import 'dotenv/config';

import app from './app.js';
import { runDbMigrations } from './db/migrations/index.migration.js';



async function start(){

    await runDbMigrations();
    
    const port = process.env.PORT || 3000;

    app.listen(port, ()=> {
        console.log(`Server is running on port ${port} `);
    });
}

start();