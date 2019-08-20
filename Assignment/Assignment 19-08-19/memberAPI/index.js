const Express=require('express');
const PATH=require('path');
const exphbs=require('express-handlebars');
const APP =Express();
const curd=require('./dao/CURD');
const logger=require('./logger/Logger');

const PORT=process.env.PORT  || 3000;

//Handlebars Middleware
APP.engine('handlebars',exphbs({defaultLayout:'main'}));
APP.set('view engine','handlebars');


//Body Parser Middleware
APP.use(Express.json());

//To handle url encoded data (for forms)
APP.use(Express.urlencoded({extended:false}));

//Home page Route
APP.get('/',(req,res)=>{
    let members=curd.getData();
    res.render('index',{
    title:'Member App',
    members

})});



// APP.get('/',(req,res)=>{
//     res.sendFile(PATH.join(__dirname,"public","index.html"));
// });

//use middleware
//APP.use(logger);

//Member API Route
APP.use('/api/members',require('./routes/api/memberAPI'));


//App hosted on PORT
APP.listen(PORT,()=>console.log(`Server Started on ${PORT}`));


