const check=(req,res,next)=>{
    const date=new Date()
    console.log(date.getHours())
const jour="mardi"
if(jour!="lundi")
{return res.status(400).send("closed")}
else{next()}
}

module.exports=check