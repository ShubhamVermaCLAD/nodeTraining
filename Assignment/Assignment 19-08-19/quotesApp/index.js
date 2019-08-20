const express=require('express');
const app=express();
const PORT=3000;


app.use(express.json());

app.use('/api/quotes',require('./routes/api/quotesAPI'));

app.listen(PORT,()=>console.log(`Web is Host at port ${PORT}`));