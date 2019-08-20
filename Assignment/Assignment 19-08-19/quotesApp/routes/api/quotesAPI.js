
const express=require('express');
const route=express.Router();

const quotes=require('../../Data/Quotes');

//get all Quotes
route.get('/',(req,res)=>res.json(quotes));

route.get('/random/quote',(req,res)=>{
    res.json(quotes[Math.floor((Math.random() * quotes.length) + 1)]);
});

module.exports=route;