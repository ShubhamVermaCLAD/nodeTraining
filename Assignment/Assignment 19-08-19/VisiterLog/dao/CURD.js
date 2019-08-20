const path=require('path');
const fs=require('fs');

let CURD={
    save:function(content){
        file=path.join(__dirname,'/Data/VisiterLog.js');
        try{
            fs.writeFileSync(file,JSON.stringify(''),"UTF-8");
            fs.writeFileSync(file,JSON.stringify(content),"UTF-8");
            return true;
        }
        catch(err){
            return false;
        }
    },
    getData:function(){
        file=path.join(__dirname,'/Data/VisiterLog.js');
        try{
            return JSON.parse(fs.readFileSync(file,"UTF-8"));
        }
        catch(err){
            return {mag:"FIle not found"};
        }
    }
}

module.exports=CURD;