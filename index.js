const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));
app.get('/api/', cors(), async (req, res, next) => {
    try {
        const message = {text: 'Hello'};
        res.json({message})
    } catch (err) {
        next(err)
    }
});
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'))
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Mixing it up on port ${PORT}`)
});