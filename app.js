const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const Blog = require('./models/blog');
const { result } = require('lodash');
// express app
const app = express();

//connect to mongodb
const dbURI = "mongodb+srv://shantanu:a0N19mLQ3t3fjBlB@shantanu.dpnm9.mongodb.net/Shantanu?retryWrites=true&w=majority";
mongoose.connect(dbURI,{useNewUrlParser: true, useUnifiedTopology: true})
.then((result)=>app.listen(8000))
.catch((err)=> console.log(err))

app.set('view engine', 'ejs');
// listen for requests
const connection


// register view engine


// middleware & static files
app.use(express.static('public'));

// app.use((req, res, next) => {
//   console.log('new request made:'); 
//   console.log('host: ', req.hostname);
//   console.log('path: ', req.path);
//   console.log('method: ', req.method);
//   next();
// });
const connection = mongoose.createConnection(dbURI,{useNewUrlParser: true, useUnifiedTopology: true})
app.use((req, res, next) => {
  console.log('in the next middleware');
  next();
});

app.use(morgan('dev'));

app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});
const store = new MongoDStore({
  mongooseConnection: connection,
  collection: 'sessions'
})
app.use(
  session({
      secret: 'flutter-viking-secret',
     
      store: store,
      resave: false,
      saveUninitialized: true,
      cookie: {
        maxAge: 1000*60*60*24
      }
  })
);

app.get('/', (req, res) => {
  res.redirect("/blogs")
  res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});
app.get("/blogs",(req,res)=>{
Blog.find().sort({createdAt:-1})
.then((result)=>{
  res.render('index', { title: 'all BLogs', blogs: result });
}).catch((err)=>{
  console.log(err)
})
})
app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
