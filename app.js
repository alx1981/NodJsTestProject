const express = require('express');

const port = 3000
const host = 'localhost';

// middlewares
const notFound = require('./middlewares/404')
const errorHandler = require('./middlewares/error')

const app = express()
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
const usersRoute = require('./routes/users');
const guestRoute = require('./routes/guests');
const githubRoute = require('./routes/github');

//urls
app.use('/', usersRoute);
app.use('/', guestRoute);
app.use('/github', githubRoute);

//errors
app.use(errorHandler);
app.use(notFound);


app.listen(port, host, () => {
  console.log(`Example app listening on port ${port}`)
})


