const gin = require('gin-downloader');

module.exports = function (req, res) {
    gin[req.query.site].infoChapters(req.query.name)
        .then(res.send.bind(res))
        .catch(console.log);
    console.log("Sent manga info to client");
};