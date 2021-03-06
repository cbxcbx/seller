var express = require('express');
var config = require('./config/index');

var port = process.env.PORT || config.build.port;
var app = express();
var router = express.Router();

router.get('/', function (req, res, next) {
    req.url = '/index.html'
    next();
})

app.use(router);
const appData = require('./data.json');
const seller = appData.seller;
const goods = appData.goods;
const ratings = appData.ratings;
const apiRoutes = express.Router();
app.get('/api/seller', function (req, res) {
    res.json({
        errno: 0,
        data: seller
    });
})
app.get('/api/goods', function (req, res) {
    res.json({
        errno: 0,
        data: goods
    });
})
app.get('/api/ratings', function (req, res) {
    res.json({
        errno: 0,
        data: ratings
    });
})
app.use('/api', apiRoutes);
app.use(express.static('./dist'));
module.exports = app.listen(port, function (err) {
    if (err) {
        console.log(err);
        return
    }
    console.log('Listening at http://localhost' + port + '\n')
});