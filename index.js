const mongoose=require('mongoose');
const Shops=require("./shopdata");
var _=require("lodash"); 


const express=require("express");
const bodyParser=require("body-parser");

const date=require(__dirname+"/date.js");
 
const app=express();

const allShops=Shops.allShops();

console.log(allShops);

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"));

mongoose.connect("mongodb+srv://DhananjaySarathe:pass123@cluster0.fc6puri.mongodb.net/bycMain",{useNewUrlParser: true});

// mongoose.connect('mongodb://localhost:27017/byc',{useNewUrlParser: true});
//mongoose.connect('mongodb://localhost:27017/myapptry1234',{useNewUrlParser: true});


const entrySchema={
    name:String,
    contact:String,
    service:String,
    date:Date,
    time:String,
};

const Entry=mongoose.model("Entry",entrySchema);


let data=[];
let temp2=[]
// let database=[];

app.get("/",function(req,res)
{
    res.render("lists")
});

// app.get("/about",function(req,res)
// {
//     res.render("about")
// });

app.get("/contact",function(req,res)
{
    res.render("contact");
})

app.get("/book",function(req,res)
{
    let temp=[];
    allShops.forEach(e=>{
        console.log(e.city);
        if(e.city===data[0] || e.locality===data[0])
        {
            temp.push(e);
        }
    });

    if(temp.length==0)
    {
        // temp.push("No shops here currently.Kindly share location with us in feedback");
    }
    res.render("book",{data:data[0],shop:temp});

    // if(data[0]===)
});

app.get("/success",function(req,res)
{

    

    res.render("success");                                          
  

})

app.get("/talktous",function(req,res)
{
    res.render("talktous");
});

app.get("/finalbook",function(req,res)
{
    // temp2.pop();
    res.render("finalbook",{book:temp2[0]});
});


app.post("/book",function(req,res)
{
    var naam=req.body.naam;
    console.log(naam);
    allShops.forEach(e=>{
        if(e.name===naam)
        {
            temp2.push(e);
        }
    });
    res.redirect("/finalbook");

});

app.post("/finalbook",function(req,res)
{

    let naam=req.body.name;
    let call=req.body.contact;
    let seva=req.body.services;
    let dinank=req.body.date;
    let vakt=req.body.time;


    const entry = new Entry({
        name:naam,
        contact:call,
        service:seva,
        date:dinank,
        time:vakt
    });

    entry.save();
    console.log("All saved");
   res.redirect("/success");
})

// entry1.save();





app.post("/",function(req,res)
{
    
    var city=req.body.city;
    var locality=req.body.locality;
    let temp=locality;
    data.pop();
    if(city.length>=1)
    {
        temp=city;
    }
    let temp2=_.lowerCase(temp);
    console.log(temp);
    data.push(temp2);

    res.redirect("/book");
});




app.listen(process.env.PORT || 3000,function(req,res)
{
    console.log("Server is Started at localHost 3000");
})
