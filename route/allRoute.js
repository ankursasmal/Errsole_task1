let express=require('express');
let route=express.Router();

route.get('/', (req,res)=>{
    res.json({
        mess:'gata get succesfully',
        success:true,
        error:false,
        status:200
    })
    })
route.get('/hello', (req,res)=>{
        res.json({
            mess:'Hello World',
            success:true,
            error:false,
            status:200
        })
        })
module.exports=route