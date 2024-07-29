// const notes = require('./notes.js');
// var lodash = require('lodash');
// console.log("server file is loaded....");
// var a = notes.age;

// var result = notes.area(a + 18,10);
// console.log(result);

// var data = ["person","person",1,2,1,2,'name','age','2'];
// var filter = lodash.uniq(data);
// console.log(filter);

// console.log(lodash.isString("Rajesh"));


// //convert json string to object
// const jsonString = '{"name":"Rajesh","age":30,"city":"Vadodara"}';
// const jsonObject = JSON.parse(jsonString); 
// console.log(jsonObject.name);
// console.log(typeof jsonObject);


// //convert object to json string
// const person = {
//     name: 'John', 
//     age: 30, 
//     city: 'New York'
// };
// const jsonString2 = JSON.stringify(person);
// console.log(jsonString2);
// console.log(typeof jsonString2);


const express = require('express')
const app = express()
const db = require('./db')
require('dotenv').config();

const bodyParser = require('body-parser');
// app.use(bodyParser.json()); //req.body
app.use(express.json());
const PORT = process.env.PORT || 3000;

const Person = require('./models/Person');
const MenuItem = require('./models/MenuItem');

app.get('/', function (req, res) {
  res.send('Welcome to my hotel.. how i can help you?, we have list of menus');
})

// app.post('/person', async (req, res) => {
//   try {
//     const person = new Person(req.body)
//     const response = await person.save()
//     console.log("data saved");
//     res.status(200).json(response);
//     // res.send(person)
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// })


// app.get('/person', async (req, res) => {
//   try {
//     const data = await Person.find();
//     console.log("data fetched..");
//     res.status(200).json(data);
//   } catch (err) {
//     console.log(err)
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// })


// app.post('/menu', async (req, res) => {
//   try {
//     const menuItem = new MenuItem(req.body);
//     const response = await menuItem.save();
//     console.log('menu data saved');
//     res.status(200).json(response);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// })

// app.get('/menu', async (req, res) => {
//   try {
//     const data = await MenuItem.find();
//     console.log('data fetched.');
//     res.status(200).json(data);
//   } catch (err) {
//     console.log('err');
//     res.status(500).json({ error: 'Internal server error' });
//   }
// })

//: means make variable work
// app.get('/person/:workType', async (req,res)=>{
//   try{
//       const workType = req.params.workType;
//       if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
//         const response = await Person.find({work:workType});
//         console.log('response fetched.');
//         res.status(200).json(response);
//       }else{
//         res.status(404).json({error:'Invalid work type'});
//       }
//     }catch(err){
//       console.log(err);
//       res.status(500).json({erro:'Internal server error'});
//     }
// })



// app.get('/rathwa', (req,res) => res.send("My name is Hello world"))


const personRouter = require('./routes/personRoutes');
app.use('/person',personRouter);

const menuRouter = require('./routes/menuRoutes');
app.use('/menu',menuRouter);


app.listen(PORT, () => { console.log("server is listing on port 3000") })