const express = require('express');
const app = express();
const path = require('path');
const expressSession = require('express-session');
const jwt = require('jsonwebtoken');
const flash = require('connect-flash');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/users');


app.set('view engine','ejs');
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({ extended:true}));
app.use(expressSession({
    resave: false,
    saveUninitialized:false,
    secret:"Mohit"
}));
app.use(flash());  

app.get('/',(req,res)=>{
    res.render('index');
})

app.use('/users',userRouter); 

app.listen(process.env.PORT || 3000,()=>{
    console.log(`listening on ${process.env.PORT}`);
});