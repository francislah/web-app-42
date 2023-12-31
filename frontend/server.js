require('dotenv').config();
const express = require("express");
const path = require("path");
const PORT = process.env.PORT ? process.env.PORT : 3000;
const app = express();

app.use("/static", express.static(path.resolve(__dirname, "static")));
app.get("/*", (req, res) => {
	res.sendFile(path.resolve("index.html"));
});
app.listen(PORT, () => console.log("Server running at http://localhost:" + PORT));