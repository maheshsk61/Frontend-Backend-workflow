const express = require('express')
const app = express()
const port = 2000
const router = require('./routes')
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use("/data", router)
app.listen(port, () => {
    console.log(`Server runnnig on port ${port}`);
})