const express = require('express');
const app = express();
const server = require('http').createServer(app);
const PORT = process.env.PORT || 3000; 

// In dev mode just hide hide app.uss(... ) below
if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname,  "build", "index.html"));
  });
}

server.listen(PORT, () => console.log('Server running @ ' + PORT));
