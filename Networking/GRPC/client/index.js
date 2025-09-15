const bodyParser = require('body-parser');
const express = require('express');
const client =  require('./client.js');

const app = express();

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

const PORT = '5011';

app.listen(PORT, () => {
    console.log(`Server launched on port : ${PORT}`);
})

app.get('/', (req, res) => {
    client.getAll(null, (err, data) => {
        if (!err) {
            res.send(data.customers);
        }
    })
})

app.post('/create',(req,res)=>{
    client.insert(req.body,(err,data)=>{
        if(!err){
            res.status(201).json({
                message: "Added new Customer Successfully",
                customer: data
            })
        }
    })
})

app.post('/update',(req,res)=>{
    console.log(req.body);
    if(req?.body?.id){
        client.update(req.body,(err,data)=>{
            if(!err){
                res.status(200).json({
                    message:"Customer Updated Successfully",
                    customer: data
                })
            }
            else{
                res.send({
                    message:err
                })
            }
        });
    }
    else{
        res.status(401).json({
            message:"Customer ID is mandatory"
        })
    }
})

app.post('/remove',(req,res)=>{
    client.remove(req.body,(err,data)=>{
        if(!err){
            res.status(200).json({
                message:`Removed customer with ${req.body.id} Successfully`
            })
        }
        else{
            res.status(401).json({
                message:err
            })
        }
    })
})

// app.post('/create',(req,res)=>{
    
// })