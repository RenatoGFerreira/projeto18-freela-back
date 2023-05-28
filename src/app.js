import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()
import viagensRoutes from "./routes/viagens.routes.js"


const port = process.env.PORT || 5000
const app = express()
app.use(cors())
app.use(express.json())
app.use(viagensRoutes)


app.listen(port, () => {
    console.log(`Server running in port ${port}`)
})

