const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());


app.put(`/data`, cors(), (req, res) => {
    res.send({cors: "success"});
});
app.listen(3000);