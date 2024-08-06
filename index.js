require('dotenv').config();
let express=require('express');
let app=express();
const PORT=process.env.PORT | 3000;
let route=require('./route/allRoute');

app.use(route);

app.listen(PORT,()=>{
    console.log(`server Running in ${PORT}`)
})

