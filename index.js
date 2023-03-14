const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 6840;
// const CORS_ORIGIN = process.env.CORS_ORIGIN;
const cors = require("cors");
const videosRoutes = require("./routes/videos");

app.use(express.static("public/images")); // allows access to public folder
app.use(express.json()); // parses req.body
app.use(cors());

app.use("/videos", videosRoutes);

app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
