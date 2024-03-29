const express = require('express');

const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');
const errorHandler = require('./middlewares/errorHandlerMiddleware');
const dbConnect = require('./config/dbConfig');
const routes = require('./routes');

const app = express();

const PORT = 5000;

expressConfig(app);
handlebarsConfig(app);

dbConnect()
    .then(() => console.log('DB Connected successfully'))
    .catch(err => console.log('DB error: ', err.message));

app.use(routes);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));