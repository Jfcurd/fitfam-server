import dotenv from "dotenv";
import express from "express";
import { RegisterRoutes } from "./api/routes/routes";

// Init env from .env config
dotenv.config();

const app = express();
const port = process.env.API_PORT;

// Middleware
// Let the client actually make requests to this API
app.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Get those routes created
RegisterRoutes(app);

// Start the server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
