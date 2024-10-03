const express = require("express");
const dtEt = require("./dateTime")
const fs = require("fs")

//päringu lahtiarutamiseks POST päringute puhul
const bodyparser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended: false}));
//päringu URL-i parsimine, false, kui ainult tekst, true, kui muud ka

app.get("/", (req, res)=>{
    //res.send("Express läks käima! ")
    res.render("index.ejs");
});

app.get("/timenow", (req, res)=>{
    const weekdayNow = dtEt.dayEt();
    const dateNow = dtEt.dateEt();
    const timeNow = dtEt.timeEt();
    res.render("timenow", {nowWD: weekdayNow, nowD: dateNow, nowT: timeNow});
});

app.get("/justlist", (req, res)=>{
    let folkWisdom = [];
    fs.readFile("public/txt/vanasonad.txt", "utf8", (err, data)=>{
        if (err){
            throw err;
        }
        else {
            folkWisdom = data.split(";");
            res.render("justlist", {h2: "Vanasõnad", listData: folkWisdom});
        }
    });
});

app.get("/regvisit", (req, res)=>{
    res.render("regvisit");
});

app.post("/regvisit", (req, res)=>{
    console.log(req.body);
    fs.open("public/txt/visitlog.txt", "a", (err, file)=>{
        if(err){
            throw err;
        }
        else {
            fs.appendFile ("public/txt/visitlog.txt", req.body.firstNameInput + " " + req.body.lastNameInput + ";" , (err)=>{
                if (err){
                    throw err;
                }
                else {
                    console.log("Faili kirjutati");
                    res.render("regvisit");
                }
            });
        }
    });
    
});


app.listen(5132);