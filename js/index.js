
window.onload = function(){
	
	var blogs = new Vue({
		el : "#blogs",
		data : {
			articles : articles
		},
		created:function(){
//			let article = {
//				imgsrc : "images/b1.jpg",
//				link : "https://www.cnblogs.com/maosonglin/p/9707807.html",
//				title : "SPRINGBOOT 前后端分离开发解决跨域访问",
//				author: "悦尔",
//				comments : 2,
//				reading : 50,
//				tag : 3,
//				content : "最近新学习了Java EE开发框架springboot，我在使用springboot前后台分离开发的过程中遇到了跨域求问题。在网上寻找答案的过程中发现网上的解决方案大多比较零散，我在这里整理一个解决方案，但未必是最好的方案。要在项目中解决跨域访问，需要解决三个问题：服务器需要接受不同域..."
//			}
//			this.articles.push(article)
		}
	})
}

var articles = [
	{
		imgsrc : "images/b1.jpg",
		link : "https://www.cnblogs.com/maosonglin/p/9707807.html",
		title : "SPRINGBOOT 前后端分离开发解决跨域访问",
		author: "悦尔",
		comments : 2,
		reading : 50,
		tag : 3,
		content : "最近新学习了Java EE开发框架springboot，我在使用springboot前后台分离开发的过程中遇到了跨域求问题。在网上寻找答案的过程中发现网上的解决方案大多比较零散，我在这里整理一个解决方案，但未必是最好的方案。要在项目中解决跨域访问，需要解决三个问题：服务器需要接受不同域..."
	},
	{
		imgsrc : "images/b2.jpg",
		link : "https://www.cnblogs.com/maosonglin/p/9397257.html",
		title : "java web应用调用python深度学习训练的模型",
		author : "悦尔",
		reading : 440,
		comments : 0,
		tag : 10,
		content : "之前参见了中国软件杯大赛，在大赛中用到了深度学习的相关算法，也训练了一些简单的模型。项目线上平台是用java编写的web应用程序，而深度学习使用的是python语言，这就涉及到了在java代码中调用python语言的方法..."
	},
	{
		imgsrc : "images/b3.jpg",
		link : "https://www.cnblogs.com/maosonglin/p/9396869.html",
		title : "封装TensorFlow神经网络",
		author : "悦尔",
		reading : 69,
		comments : 10,
		tag : 0,
		content : "为了参加今年的软件杯设计大赛，这几个月学习了很多新知识。现在大赛的第二轮作品优化已经提交，开始对这四个月所学知识做一些总结与记录。 用TensorFlow搭建神经网络。TensorFlow将神经网络的进行封装，使得深度学习变得简单已用..."
	}
]
