var express = require('express');
var path = require('path')
var bodyParser = require('body-parser')
var port = process.env.PORT || 3000;
var app = express()

app.set('views', './views/pages')
app.set('view engine','jade')
// app.use(express.bodyParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'bower_components')))
app.listen(port)

console.log('immoc started on port ' + port)
//index page
app.get('/',function(req, res){
	res.render('index',{
		title: 'imooc 首页',
		movies:[{
			title: '机械战警',
			_id:1,
			poster:'http://r3.ykimg.com/0516000530EEB63675839160D0B79D5'
		},{
			title: '机械战警',
			_id:2,
			poster:'http://v.youku.com/v_show/id_XMTU3NTkxNDIwMA==.html'
		},{
			title: '机械战警',
			_id:3,
			poster:'http://v.youku.com/v_show/id_XMTU3NTkxNDIwMA==.html'
		},{
			title: '机械战警',
			_id:4,
			poster:'http://v.youku.com/v_show/id_XMTU3NTkxNDIwMA==.html'
		},{
			title: '机械战警',
			_id:5,
			poster:'http://v.youku.com/v_show/id_XMTU3NTkxNDIwMA==.html'
		},{
			title: '机械战警',
			_id:6,
			poster:'http://v.youku.com/v_show/id_XMTU3NTkxNDIwMA==.html'
		}
		]
	})
})

//detail page
app.get('/detail',function(req, res){
	res.render('detail',{
		title: 'imooc 详情',
		movie:{
			doctor:'何塞.趴地利亚',
			country: 'US',
			title:'机械战警',
			year: 2014,
			poster:'http://v.youku.com/v_show/id_XMTU3NTkxNDIwMA==.html',
			language:'En',
			poster:'http://v.youku.com/v_show/id_XMTU3NTkxNDIwMA==.html',
			summary: 'dddkk dfkjdkfjdkjl dfdfd'
		}
	})
})

//admin page
app.get('/admin',function(req, res){
	res.render('admin',{
		title: 'imooc 后台录入页',
		movie:{
			title:'',
			doctor:'',
			country:'',
			year:'',
			poster:'',
			flash:'',
			summary:'',
			language:''
		}
	})
})

//list page
app.get('/list',function(req, res){
	res.render('list',{
		title: 'imooc 列表页',
		movies:[{
			title:'机械战警',
			_id:1,
			doctor:'何塞.趴地利亚',
			country: 'US',
			year: 2014,
			poster:'http://v.youku.com/v_show/id_XMTU3NTkxNDIwMA==.html',
			language:'En',
			poster:'http://v.youku.com/v_show/id_XMTU3NTkxNDIwMA==.html',
			summary: 'dddkk dfkjdkfjdkjl dfdfd'
		}]
	})
})