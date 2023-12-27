// task 1
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/app11') {
        setTimeout(() => {
            const currentTime = new Date().toLocaleString('en-US', { timeZoneName: 'short' });
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(currentTime);
        }, 2000); 
    } else {
        fs.readFile('index11.html', 'utf8', (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('Not Found');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    }
});
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

