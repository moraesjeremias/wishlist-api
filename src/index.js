const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const dbConnect = require('./db/mongo')
const router = require('./routes/wishlist-routes');

dbConnect();

const port = 3000

app.use(bodyParser.json());

app.use(router);
app.get('/status', (req, res) => 
    res.send('API is Running!')
)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))