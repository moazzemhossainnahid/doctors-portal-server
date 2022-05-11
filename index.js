const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;

// middleware 
app.use(express.json());
app.use(cors());



const uri = `mongodb+srv://doctors_admin:zY9QBegeqE3r8fYx@cluster0.ytub2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const run = async() => {
    try{
        await client.connect();
        const serviceCollection = client.db("DoctorsPortal").collection("Service");
        console.log('db connected');


        // get Service
        app.get('/services', async(req, res)=>{
            const query = {};
            const cursor = serviceCollection.find(query);
            const result = await cursor.toArray();
            res.send(result);
        })


    }finally{

    }
}

run().catch(console.dir);
app.get('/', (req, res) => {
    res.send('Doctors Portal Server is Running')
})

app.listen(port, () => {
    console.log('Listen to Port', port);
})