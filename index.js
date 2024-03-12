const express = require('express')
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express()
const SmsRoutes = require('./modules/sms/sms_routes')
app.use(cors());
app.use(express.json());
app.use(express.static("files"));
app.use(bodyParser.text({ type: "/" }));


app.use("/sms",SmsRoutes)


app.get('/',(req,res)=>{
    res.send("Churchms backend")
})
const server = app.listen(5000,()=>{
  console.log("Server started at port 5000")
})

