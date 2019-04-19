var express = require('express');
var bodyParser = require('body-parser');
// var session = require('express-session')

var app = express();

app.use(function(req, res, next) {
    // res.header("Access-Control-Allow-Origin",
    //     "http://localhost:3000, https://financetracker-project.herokuapp.com");
    var allowedOrigins = ['http://localhost:3000', 'https://financetracker-project.herokuapp.com'];
    var origin = req.headers.origin;
    if(allowedOrigins.indexOf(origin) > -1){
        res.setHeader('Access-Control-Allow-Origin', origin);
    }

    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});


var session = require('express-session')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
                    resave: false,
                    saveUninitialized: true,
                    secret: 'any string'
                }));


require('./data/db')()

const billService = require('./services/bills.service.server')
billService(app)

const propertyService = require('./services/property.service.server')
propertyService(app)

const transactionService = require('./services/transaction.service.server')
transactionService(app)

const userService = require('./services/user.service.server.js')
userService(app)

const sessionService = require('./services/session.service.server.js')
sessionService(app)

const guestService = require('./services/guest.service.server')
guestService(app)

const productService = require('./services/product.service.server')
productService(app)

const accountService = require('./services/account.service.server')
accountService(app)

const creditCardService = require('./services/creditCard.service.server')
creditCardService(app)

const stockService = require('./services/stock.service.server')
stockService(app)

const budgetService = require('./services/budget.service.server')
budgetService(app)

const universeService = require('./services/universe.service.server')
universeService(app)

app.listen(process.env.PORT||3000||8080||3001);
// app.listen(3001)
