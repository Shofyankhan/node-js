const http = require('http');

//using event emitter API
const server = http.createServer()
// emits request even
// subcribe to it / listen for it / respond to it
server.on('request', (req, res) => {
    res.end('Welcome')
})

server.listen(5000)