import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

//routes imports
import userRouter from "./routes/user.route.js"

const app = express()

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}))


app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))
app.use(cookieParser())
import "./utilities/googleAuth.js"


// setup session
app.use(session({
  secret: "YOURSECRETKEY",
  resave: false,
  saveUninitialized: true
}))

// setuppassport
app.use(passport.initialize());
app.use(passport.session())

//routes
app.use("api/v1/user", userRouter)

export { app }