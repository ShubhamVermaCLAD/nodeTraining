const express=require('express');
const router=express.Router();

router.get('/:number',(req,res)=>{
    let number=req.params.number;
    if(number%5==0 && number%3==0){
        return res.send("FizzBuzz");
    }
    else if(number%3==0){
       return res.send("Fizz");
    }
    else if(number%5==0){
       return res.send('Buzz');
    }
    return res.send("number is not divided by 3 or 5 ");
});

module.exports=router;