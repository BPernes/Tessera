const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());

const routes = require('D:/Tessera/TesseraAPI/Routes/routes.js');
app.use('/api', routes);


app.listen(process.env.port || 4444, () => {
    console.log(`Server running at ${4444} !`);
})