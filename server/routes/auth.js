const Router=require("express").Router();
const passport=require("passport");


Router.get("/login/success",(res,req)=>{
    if(req.user){
        res.status(200).json({
            error:false,
            message:"successfully loged on",
            user:req.user,
        })

    }else{
        res.status(403).json({error:true,message:"not authorized"});


    }
})


Router.get("/login/failed",(res,req)=>{
    res.status(401).json({
        error:true,
        message:"log in failure",
    });
});

Router.get(
    "/google/callback",
    passport.authenticate("google",{
            successRedirect:process.env.CLIENT_URL,
            failureRedirect:"/login/failed",
    })
);

Router.get("/google",passport.authenticate("google",["profile","email"]));

Router.get("/logout",(req,res)=>{
    req.logout();
    res.redirect(process.env.CLIENT_URL);

});

module.exports=Router;