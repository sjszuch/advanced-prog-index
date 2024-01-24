const express = require('express');
const app = express();

// Path tp do
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Port to run app
app.listen(3000, () => {
    console.log('Listening to port.');
});