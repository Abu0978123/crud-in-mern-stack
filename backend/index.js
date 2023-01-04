const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const cors = require('cors')
const PORT = process.env.PORT || 4000;
require('dotenv').config();
const MY_DB_NAME = process.env.MY_DB_NAME;
// console.log(MY_DB_NAME)

// some configration of Express and Node 
const app = express();
app.use(express.json());
app.use(bodyParser.json({extended: true}));
app.use(express.urlencoded({extended: true}));
app.use(cors());
// here connection of DB
async function DB_conn() {
    await mongoose.connect(MY_DB_NAME).then(() => {
      console.log("connected successfully");
    });
  }
  DB_conn()
//   here schema and models
const register  = new mongoose.Schema({
    Fname: String,
    Lname: String,
    // password: String
})    
    const crud = new mongoose.model('crud',register) 

  app.get("/read", async (req, res) => {
    const data = await crud.find({});
    res.send(data);
  });

app.post('/create',async (req, res)=>{
    const { Fname, Lname} = req.body
            const user = new crud({
                Fname,
                Lname
                // password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        })
 
// so here we will login route to check either data present or not 
app.get("/read/:_id", async (request, response) => {
    try{
        const user = await crud.findById(request.params._id);
        response.status(200).json(user);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }

}) 

app.delete('/delete/:_id', async (request, response) => {
    try{
        await crud.deleteOne({_id: request.params._id});
        response.status(201).json("User deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}
)


app.listen(PORT, ()=>{
    console.log(`your app is running in ${PORT}`)
});