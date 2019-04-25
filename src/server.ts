import express from "express";

const app = express();
const port = 3000;

app.get( "/ping", ( _, res ) => {
  res.send("pong");
});

// Start the server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
