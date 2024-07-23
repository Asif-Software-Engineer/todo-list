const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.post('/login', (req, res) => {
    res.json({
        token: 'test123'
    })
})

app.listen(8080, () => console.log('API is running on localhost:8080/login') )