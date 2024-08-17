import express from 'express';
import { connect } from 'mongoose';
import dotenv from "dotenv";
import router from './routes/index.js';
const app = express();
import cors from "cors";
dotenv.config();
const PORT = process.env.PORT;
const URI_DB = process.env.URI_DB;

connect(URI_DB);

app.use(cors({ origin: 'http://127.0.0.1:5500' }));
app.use(express.json());
app.use("/api", router);

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});