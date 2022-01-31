import express from "express";

import * as todoController from '../controllers/todo.js'

/* 
Router is the starting point of rest api. 

router routes to controller based on the method used

*/

const router = express.Router();

router.route('/todos')
.get(todoController.get)
.post(todoController.save);

 router.route('/todos/:id')
 .get(todoController.getbyid)
 .put(todoController.update)
 .delete(todoController.remove);


export default router;