const path = require('path');


module.exports = {
	entry:['./public/index.js', './public/index2.js'],
	output:{
		path:path.resolve(__dirname,'build'),
		filename:"bundle.js"
	},
	devServer:{
		contentBase:'./build',  //设置服务器访问的基本目录
		host:'localhost', //服务器的ip地址
		port:7777,  //端口
		open:true  //自动打开页面
	}
}