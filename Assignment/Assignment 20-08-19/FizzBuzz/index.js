const express=require('express');
const app=express();

app.use(express.json());

app.use('/api',require('./routes/api/FizzbuzzApi'));

app.listen(3000,()=>console.log("Web is hosted at port 3000"));