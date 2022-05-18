import express from 'express'
import path from 'path'
const app = express();
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config({ path: "./config.env" });
app.use(cors());
app.use(express.json());

import serviceRoutes from './routes/service.js'
import userRoutes from './routes/user.js'
import uploadRoutes from './routes/uploadRoutes.js'

app.use("/api/users", userRoutes);
app.use("/api/services", serviceRoutes);
app.use('/api/upload', uploadRoutes);

// get driver connection
import connectDB from './db/connection.js';
dotenv.config()
connectDB()

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}
 
const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
)