import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { userRouter } from './routes/user.js';
import { recipesRouter } from './routes/recipes.js';



const app = express();

app.use(express.json());
app.use(cors());

app.use('/auth', userRouter);
app.use('/recipes', recipesRouter);

const PORT =  3001;

mongoose
.connect("mongodb+srv://Divyansh-admin:Bayana123@node.g0dlyzh.mongodb.net/?retryWrites=true&w=majority&appName=node")
.then(() => {
  console.log('Connected to the database');
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  })
  .catch((error) => {
    console.error('Database connection failed:', error);
  });
