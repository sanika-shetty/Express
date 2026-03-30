import express from 'express';
const app=express();
const PORT=3000;
app.use(express.json());
let students=[
    {id:1,name:"shradha",course:"python"},
    {id:2,name:"methali",course:"drama"}
 
];

 app.use(express.json());
app.get('/',(req,res)=>{
    res.json("app is working");
 }); app.get('/students',(req,res)=>{
    res.json(students);
 });

 app.get('/students/:id',(req,res)=>{
    const student =student.find(s=>s.id==req.params.id);
    if(!student)
    {
        return res.status(404).json({message:"student not found"});
    }
    res.json(student);
 });

 app.listen(PORT,()=>{
console.log(`server running on http://localhost:${PORT}`);
 });