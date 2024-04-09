import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send({ message: "hi" })
})



const startService = async () => {

  // connectDB();

  app.listen(process.env.PORT || 3000, () => {
    console.log(`server started at port ${process.env.PORT || 3000} `)
  })
}

startService();