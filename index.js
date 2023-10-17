var express = require('express');
var cors = require('cors');

const app = express();

// parse application/json
app.use(express.json())

app.use(cors())

// PORT DECLARATION
const PORT = process.env.PORT || 8000;

// HOSTING PURPOSES
if (process.env.NODE_ENV == "production") {
    const root = require('path').join(__dirname, 'client', 'build')
    app.use(express.static(root));
    app.get("*", (req, res) => {
        res.sendFile('index.html', { root });
    })
}

// SERVER RUN
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})