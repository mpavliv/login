const express = require('express');
const authRouter = require('./authRouter');
const PORT = 5000;

const app = express();

app.use(express.json());
app.use('/auth', authRouter);

const start = () => {
    try{
        app.listen(PORT, () => console.log(`server started on port ${PORT}`));
    } catch(err){
        console.log(err);
    }
}

start();