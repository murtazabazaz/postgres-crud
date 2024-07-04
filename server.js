import app from './app.js';

async function start(){
    const port = process.env.PORT || 3000;

    app.listen(port, ()=> {
        console.log(`Server is running on port ${port} `);
    });
}

start();