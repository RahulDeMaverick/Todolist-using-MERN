import app from './api/app.js';

const port = 3001;


app.listen(port, () => {

  console.log(`todo app listening at http://localhost:${port}`)

});