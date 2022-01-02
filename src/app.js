const express = require('express');
const cors = require('cors');
require("./db/connect");
const Mac = require('./models/mac_schema');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

const path = require('path');
const login_path = path.join(__dirname, "../public");
app.use(express.static(login_path));

var address = require('address');
var ip = address.ip();
var ipv6 = address.ipv6();

app.post("/login", async (req, res)=>{
    try {
        var datetime = new Date().toLocaleString();
        address.mac((e, addr)=>{
            const user = new Mac({
                MAC : addr,
                IP : ip,
                IPv6 : ipv6,
                DTime : datetime
            })
            const regisUser = user.save();
            res.status(201).send(user);
        })
    } catch(e) {
        res.status(400).send(e);
    }
})

app.listen(port, ()=>{
    console.log(`server running at port ${port}`);
});