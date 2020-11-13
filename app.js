const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const mongoURI = require('./config/keys').mongoURI;
const memberRoutes = require('./routes/member');
const userRoutes = require('./routes/user');
const analysisRoutes = require('./routes/analysis');
const authRoutes = require("./routes/auth");
const groupRoutes = require('./routes/group');
const smsRoutes = require('./routes/sms');
const app = express();

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('mongodb successfully connected');
  })
  .catch((error) => {
    console.log(error);
  });

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Request-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());
app.use(passport.initialize());
require('./middlewares/auth')(passport);

app.use("/api/auth", authRoutes);
app.use('/api/member', memberRoutes);
app.use('/api/users', userRoutes);
app.use('/api/groups', groupRoutes);
app.use('/api/sms', smsRoutes);
app.use('/api/analysis', analysisRoutes);

module.exports = app;
