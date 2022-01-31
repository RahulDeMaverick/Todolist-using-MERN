import express from 'express';

import  Mongoose  from 'mongoose';

import cookieParser from 'cookie-parser';

import routes from './routes/index.js';

import models from './models/index.js';

import cors from 'cors';

const app = express();
Mongoose.connect('mongodb://localhost:27017/tododb');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

routes(app);

export default app;