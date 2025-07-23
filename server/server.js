import express from "express"
import "dotenv/config";
import cors from "cors"
import http from "http"
import { connectDB } from "./lib/db.js";
// create expresss app and http server
const app = express();
const server = http.createServer(app)

// Middleware setup
app.use(express.json({ limit: "4mb" }))
app.use(cors())

// create route

app.use("/api/status", (req, res) => {
    res.send("server is live")
})
await connectDB();
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log("sever is running on port:",PORT)
})
