import mongoose from "mongoose";
import cors from "cors"
import express from "express"
import { config } from "dotenv";

config()
const app = express()

app.use(cors())

app.listen(process.env.PORT, () => console.log('listening on port ' + process.env.PORT))

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Database is connected"))
  .catch((err) => console.error(err))
