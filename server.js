const express = require('express');
    const helmet = require('helmet');
    const actionRoute = require('./data/routes/actionRoute');
    const projectRoute = require('./data/routes/projectRoute');

    const server = express()

    server.use(
        express.json(),
        helmet(),
    )
    server.use("/actions", actionRoute);
    server.use("/projects", projectRoute);



    server.get('/', (req,res) => {
        
        res.send({message: 'hello server is live and im gonna prob fail this sprint but ill try my best ya know'})
    })
    
    module.exports = server