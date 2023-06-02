require('dotenv').config();
var express = require('express');
var logger = require('morgan');

var indexRouter = require('./routes/index');
const cors = require('cors');
const Sentry = require('@sentry/node');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

const {
    SENTRY_DSN,
    ENVIRONMENT
} = process.env;

Sentry.init({
    environment: ENVIRONMENT,
    dsn: SENTRY_DSN,
    integrations: [
        new Sentry.Integrations.Http({tracing: true}),
        new Sentry.Integrations.Express({app}),
        ...Sentry.autoDiscoverNodePerformanceMonitoringIntegrations(),
    ],
    tracesSampleRate: 1.0,
});
app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use('/images', express.static('public/images'));
app.set('view engine', 'ejs');

app.use(router);

// Sentry error handler
app.use(Sentry.Handlers.errorHandler());

// 500
app.use((err, req, res, next) => {
    console.log(err);
    return res.status(500).json({
        status: false,
        message: err.message,
        data: null
    });
});

module.exports = app;
