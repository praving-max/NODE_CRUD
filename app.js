import express from 'express';
const app= express();
import dotenv from 'dotenv';
import route from './apps/CRUDServer/routes/rCrud.js';
 dotenv.config();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(route)
app.use((req, res) => {
     res.status(404).json({ error: 'Not Found' });
   });

app.listen(port,()=>{
     console.log(`Server is running at PORT ${port}`);
}  );