const express = require('express')
const path = require('path')

const app = express()
const port = 3000

// import several functions from the readability.js file
const readability = require('./readability')

app.use('/static', express.static('public'))

// behavior upon visiting localhost:3000/
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// behavior upon visiting localhost:3000/results
app.get('/results', (req, res) => {
    // TODO - use parseCSV to get the results and send them to the client
})

app.listen(port, () => console.log(`Listening on port ${port}...`))
