let path=require('path');
let express=require('express');
let body=require('body-parser')
let mongoose=require('mongoose');
const port=process.env.PORT ||8000;
// const { urlencoded } = require('body-parser');
// const { PRIORITY_ABOVE_NORMAL } = require('constants');
mongoose.connect('mongodb://localhost:27017/instagram',{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{
    console.log('connection is succesfull')
}).catch((err)=>{
    console.log(err)
});
let instagradataschema=new mongoose.Schema({
    instaid:String,
    password:String
    
})
let instadata= mongoose.model('instadata',instagradataschema);

const app=express();
app.use('/static',express.static('static'));
app.use(express.urlencoded());
app.set('view engine','hbs');
app.set('views',path.join(__dirname,'views'))
// app.use(express.static(path.join(__dirname,'/views')));
app.get('/',(req,res)=>{
    res.render('index')
})
app.post('/',(req,res)=>{
    var mydata=new instadata(req.body);
    mydata.save().then(()=>{
       res.render('index');
        
    }).catch(()=>{
        console.log('data is not saved')
        res.send();
    })

})
app.listen(port,'127.0.0.1',()=>{
    console.log('the server is running at port 80')
});