const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const multer = require('multer')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

const app = express()
const port = 4400

const uri = "mongodb+srv://naimur:naimur88@cluster0.esvfp.mongodb.net/backend?retryWrites=true&w=majority";


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

}

const userSchema = new mongoose.Schema({
    name: String
  });

const Dog = mongoose.model('Dog', userSchema);



app.post('/adduser', async(req, res) =>{
    console.log(req.body);
    const user = await new Dog(req.body);
    await user.save();
    res.send(user)
})

app.get('/', (req, res) => {
  res.send('Bismillah!')
})

app.get('/users', (req,res)=>{

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})