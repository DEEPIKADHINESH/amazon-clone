const functions = require("firebase-functions");
const express=require("express");
const cors=require("cors");
const { response } = require("express");
const stripe=require("stripe")
('sk_test_51JChdhSJvi8u57ulFJaQ5Zb9mZxk8AKbklahMtA2uwaFCTp8sbb4Ibx69GuXro5IY4mMtsOnfqIU7NW2kpp7dCwd00WHzkOWOb')
//APP config
const app=express();
//middleware
app.use(cors({origin:true}));
app.use(express.json());
//API routers
app.get("/",(req,res)=>{
    res.status(200).send("hello world");
})
app.post("/payemts/create",async(req,res)=>{
    const total=req.query.total;
    console.log("payment request received" ,total)

const paymentIntent=await stripe.paymentIntents.create({
    amount : total,
    currency:"usd"
});
response.status(201).send({
    clientSecrete=paymentIntent.client_secrete
}

)
})
//listen command
exports.api=functions.https.onRequest(app);