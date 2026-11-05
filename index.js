 
const express = require('express');
const gameRouter = require('./gameRouter'); // Import the router
const app = express();
const port = 3000;
 
app.use(express.json());
 
app.use(`/` , gameRouter);
app.listen(port, ()=> {
    console.log(`Server started listening on port ${port}`);
});

