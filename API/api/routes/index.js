import todoRouter from  './todo.js';

export default (app) =>{
    
    /* todos router */

    app.use('/',todoRouter);
    
};