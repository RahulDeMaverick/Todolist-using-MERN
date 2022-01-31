import { json, request, response } from 'express';
import * as todoService from '../services/todo.js';
// error handling function
const errorHandler = (message, response) => {
    response.status(500);
    response.json({ error: message });
}
//setting up response data
const setSuccessResponse = (data, response) => {
    response.status(200);
   
    response.json(data);
}
//get method
export const get = async (request,response) =>{

try{

    const todos = await todoService.search();
    setSuccessResponse(todos, response);
    response.json(todos);
} catch(e){
    errorHandler(e.message, response); 
}
};
//post method
export const save = async (request, response) =>{

    try{
        const todo = {...request.body };
        console.log(todo);
        const newtodo = await todoService.create(todo);
        console.log(newtodo);
        setSuccessResponse(newtodo, response);
     }catch(e){
        errorHandler(e.message, response);
    }

};
//get by id
export const getbyid = async(request, response) => {

    try {

        const id = request.params.id;
        //console.log("dasdadadasdasdasda"+id);
        const todos = await todoService.get(id);
        setSuccessResponse(todos, response);
        
    } catch (e) {
        errorHandler(e.message, response);
    }
};
//put method
export const update = async(request, response) => {

    try {

        const id = request.params.id;
     const todo = {...request.body, id};
        const todos = await todoService.update(todo);
        setSuccessResponse(todos, response);
        
    } catch (e) {
        errorHandler(e.message, response);
    }
};
//delete method
export const remove = async(request, response) => {

    try {

        const id = request.params.id;
        console.log("dasdadadasdasdasda"+id);
        const todos = await todoService.remove(id);
        setSuccessResponse({ message: `todo ${id} removed sucessfully.`}, response);
        
    } catch (e) {
        errorHandler(e.message, response);
    }
};
