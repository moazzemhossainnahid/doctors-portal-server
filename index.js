const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middleware 
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Doctors Portal Server is Running')
})

app.listen(port, () => {
    console.log('Listen to Port', port);
})