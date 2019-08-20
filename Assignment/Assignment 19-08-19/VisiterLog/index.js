const express=require('express');

const app=express();
const PORT=3000;
const visiter=(req,res,next)=>{
    const curd=require('./dao/CURD');
    visit=curd.getData();
   
    visit.count++;
    curd.save(visit);
    res.json({"Number of Visiter are":visit.count})
    next();
}
app.use(visiter);

app.listen(3000,()=>console.log(`Web is Hosted at PORT : ${PORT}`));