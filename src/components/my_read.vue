<template>
		<div class="items my_read" v-for="item in items">
			<div class="qus">
				<img src="../images/head.png">
				<span class="name">小意思 | 最牛设计师</span>
			</div>
			<div class="text">
				<span>在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前</span>
			</div>
			<div class="video">
				<div class="top">
					<img src="../images/quest.png" >
					<span class="name">罗永浩 | 锤子科技创始人</span>
					<span class="status"><span>偷看数：</span><span class="money">200</span></span>
				</div>
				<!-- video的poster属性的地址没有被顺利编译，所以要写static下已编译完加了hash值的地址，目录中无法看到 -->
				<div class="vid">
					<div class="ww"></div>
					<video src="http://www.w3school.com.cn/i/movie.mp4" poster="" ></video>
				</div>
			</div>
		</div>
		
</template>
<script>
/*  ****jroll test  */
/*const JRoll = require('./jroll.js');
window.onload=function(){
// 	var b = document.querySelector("#wrapper");
// console.log(b)
new JRoll("#wrapper")
}*/

// var jroll = new JRoll("#wrapper",'#scroller');
// jroll.infinite();
/*  ****  */
	module.exports={
		data (){
			return {
				items:[
			       {a:1},
			       {a:1},
			       {a:1},
			       {a:1},
			       {a:1},
			       {a:1},
		      	]
			}
		}
	}
	window.onload=function(){
		document.title = '问答';
	}
	
	// router.go('/bar')
</script>
<style lang='less'>
	.items.my_read{
		margin: 0 auto;
		background-color: white;
		position: relative;
		.qus{
			margin: 0 auto;
			width: 344px;
			margin-top: 15px;
			span{
				font-size: 15px;
				display: inline-block;
				line-height: 20px;
			}
			img{
				display: inline-block;
				width: 51px;
				height: 51px;
				vertical-align:top;
				margin-top: -10px;
			}
		}
		.text{
			width: 314px;
			margin: 0 auto;
			margin-top: -15px;
			background-color: #fafafa;
			border: 1px solid #f5f5f5;
			border-radius: 8px;
			padding: 15px;
		}
		.video{
			margin: 0 auto;
			margin-top: 25px;
			width: 344px;
			border-top: 1px dashed #e8e8e8; 
			.top{
				font-size: 14px;
				position: relative;
				z-index: 99;
				margin-bottom: 3px;
				img{
					margin-bottom: -7px;
					margin-left: 7px;
					width: 52px;
					height: 52px;
					border: 2px solid white;
					border-radius: 100%;
					vertical-align:middle;
				}
				.status{
					float: right;
					margin-top: 13px;
				}
			}
			.vid{
				.ww{
					height: 203px;
				}
				img{
					position: absolute;
					bottom: 42.5px;
				}
				video{
					position: absolute;
					bottom: 42.5px;
					width: 344px;
					height: 175px;
					background-color: #717171;
				}
			}
			
		}
	}
	
</style>