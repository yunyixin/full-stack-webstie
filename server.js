const express = require('express');
const mongoose = require('mongoose');
const bodyParse = require('body-parser')
const ejs = require('ejs')
const path = require('path')
const config = require('./config')
const apiRoutes = require("./routes/api")

// 创建服务器
const app = express();

//静态文件资源托管的，js css img等
app.use(express.static(path.join(__dirname, 'public')));

//定义应用使用的模板引擎
// app.engine('html', ejs.renderFile)
// app.set('views', path.join(__dirname, 'public'))
// app.set('view engine', 'html')

//加载bodyparser模块，用来解析前端提交过来的数据
// app.use(bodyParse.urlencoded({extended: true}));

// 使用模板的路由配置方式
// 分模块转发，便于管理
// const apiRouter = require("./routes/api")
// app.use("/", function (req, res) {
//   console.log('req', req.path)
//
//   if (req.path.indexOf('/api') !== -1) {
//     console.log('true', req.path)
//     app.get('/api/login', function (req, res) {  // User.loginAction
//       console.log('user api')
//     })
//   } else {
//     res.render("index");
//   }
// });
app.use('/api', apiRoutes);

app.get('/test/:name', function (req, res) {
  res.send('hello, ' + req.params.name)
})

// 使用前后端分离的项目
// app.all("*", function(req, res) {
//   res.render("index");
// })
app.listen(config.port, function () {
  console.log(`server is running on port ${config.port}`);
});

// 连接mongodb数据库
// mongoose.connect("mongodb://localhost:27017/myDemo");
// const db = mongoose.connection;
//
// db.once('open', function () {
//   console.log("Mongodb Connected, the database is myDemo");
//   app.listen(8888);
// });
//
// db.on('error', console.error.bind(console, "Mongoose Connection Error"));
//
// db.on('close', function () {
//   console.log('数据库断开，重新连接数据库');
//   // mongoose.connect(config.url, {server:{auto_reconnect:true}});
// });
