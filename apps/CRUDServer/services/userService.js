import { v4 as uuidv4 } from 'uuid';
import NodeCache from 'node-cache';
import  array  from '../Database/data.js';
const myCache = new NodeCache();

export const addUser = async function  (user) {
    try{
        for(let i=0;i<user.length;i++){
            let id = uuidv4();
            let isPresent = false;
            if(array.length==0){
            for(let j=0;j<array.length;i++){
                if(array[j].user==user[i].email){
                    isPresent = true;
                    break;
                }
            }
         if(!isPresent){
            user[i].id = id;
         }
            
        }else{
            array.push({id:id,...user});
        }}
        array.push(...user);
        const cacheStore = await cacheSave(array);
        return cacheStore;
    }catch(error){
       throw error; 
    }finally{
        
        }

}

const cacheSave = async function (array) {
    try{
       
        myCache.set('users', array);
        const cachedData = myCache.get('users');

        return cachedData;
    }catch(error){
        throw error;    
    }
}

export const getUser = async function (id) {
    try{
        const getData  = await getDataFromCache(id);
         return getData;
    }catch(error){
        throw error;
    }finally{
        }
}

const  getDataFromCache = async function(id){
    let getUser = [];
    try{
        
        const cachedData = myCache.get('users');
       getUser =  cachedData.filter((user)=>{ return user.id==id})
        return getUser;
    }catch(error){
        throw error;
    }
}

export const updateUser = async function(userId,updates){
    try{
        const cachedData = myCache.get('users');
        let getUserIndex =  cachedData.findIndex((user)=>{ return user.id==userId})
        if (getUserIndex !== -1) {
         
            cachedData[getUserIndex] = {  ...updates,id:userId };
            let newCacheData = await cacheSave(cachedData);
            return newCacheData;
          } else {
           throw new Error("User  not found")
    }
    }catch(error){
        throw error
    }
    
}

export const deleteUser = async function(userId){
    try{
        const cachedData = myCache.get('users');
        let getUserIndex =  cachedData.findIndex((user)=>{ return user.id==userId})
        if (getUserIndex !== -1) {
            cachedData.splice(getUserIndex, 1);
            let newCacheData = await cacheSave(cachedData);
            return newCacheData;
          } else {
           throw new Error("User  not found")
    }
    }catch(error){
        throw error;
    }
    
}

export const getAllUser = async function(){
    try{
        const cachedData = myCache.get('users');
        return cachedData;
    }catch(error){
        throw error;
    }
    
}
