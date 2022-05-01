const express = require('express')
const app = express()

const PORT = 3000

app.listen(process.env.port || PORT, () => {
    console.log(`Server running at ${PORT} !`);
})