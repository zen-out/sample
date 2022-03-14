const express = require("express")
const { see, problem } = require("code_clarity")
const { upset } = require("whats_wrong")
const path = require('path');
var express = require('express');
const hbs = require("express-hbs")
const cors = require('cors');
const logger = require('morgan');
var cookieParser = require('cookie-parser');
var methodOverride = require('method-override');
const helpers = require("lesleys_hbs");
const bodyParser = require("body-parser");
var fp = require('path');
const i18n = require("i18n")
const YAML = require('yamljs');
const swaggerUi = require('swagger-ui-express');
const ymlDocument = YAML.load(path.join(__dirname, "/controller/docs/swagger.yaml"))
const app = express()

app.use(bodyParser.json())



app.use(express.urlencoded({
    extended: true
}));

function relative(path) {
    return fp.join(__dirname, path);
}



app.use('/swag', swaggerUi.serve, swaggerUi.setup(ymlDocument));


app.use(cors());
app.use(cookieParser());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, "/public")));
app.use("/jsdocs",
    express.static(path.join(__dirname, "/jsdocs"))
);

// Handlebars starts here
app.engine('hbs', hbs.express4({
    partialsDir: [relative('views/layouts'), relative('views/partials'), relative('views/pages')],
    // layoutsDir: relative('views/layout'),
    defaultLayout: relative('views/layouts/main.hbs'),
    i18n: i18n.configure({
        locales: ['en', 'fr'],
        cookie: 'locale',
        directory: __dirname + "public/locales"
    }),
}));

// init i18n module
app.use(i18n.init);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, "views"));
// Register sync helper
hbs.registerHelper(helpers)


module.exports = {
    app
};