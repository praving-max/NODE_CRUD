import express from 'express';
import * as service from '../services/userService.js';

//import { v4 as uuidv4 } from 'uuid';
const router = express.Router();



router.get('/api/users/:id', async(req, res) => { 
    try{
        const result = await service.getUser(req.params.id);
        res.status(200).json(result)
    }catch(error){
        //throw error;
        res.status(500).send(error.message);
    }
}
);

router.get('/api/users/', async(req, res) => { 
    try{
        const result = await service.getAllUser();
        res.status(200).json(result)
    }catch(error){
        res.status(500).send(error.message);
    }

}
);
router.post('/api/users',async (req,res)=>{
    try{
        let postParam = req.body;
    let result  = await service.addUser(postParam);
    res.status(200).json(result);
    }catch(error){
       // console.log(err);
        res.status(500).send(error.message);
    }
    
})
router.put('/api/users/:id',async(req,res)=>{
    try{
        const userId = req.params.id;
        const updates = req.body;
       let result  = await service.updateUser(userId,updates);
        res.status(200).json(result);
    }catch(error){
        res.status(500).send(error.message);
    }
   
})
router.delete('/api/users/:id',async(req,res)=>{
    try{
        const userId = req.params.id;
        let result = await service.deleteUser(userId);
        res.status(200).json(result);
    }catch(error){
        res.status(500).send(error.message);
    }
    
})

export default router;