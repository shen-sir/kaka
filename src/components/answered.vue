<template>
		<div class="items answered">
			<div class="qus">
				<img src="../images/head.png">
				<span class="name">小意思</span>
				<span class="money">￥500</span>
			</div>
			<div class="text">
				<span><i>【私密】</i>在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前</span>
			</div>
			<div class="video">
				<div class="top">
					<img src="../images/quest.png" >
					<span class="name">罗永浩 | 锤子科技创始人</span>
					<span class="status"><span class="money">￥200</span>&nbsp<span>待回答</span></span>
				</div>
				<!-- video的poster属性的地址没有被顺利编译，所以要写static下已编译完加了hash值的地址，目录中无法看到 -->
				<div class="vid">
					<div class="ww"></div>
					<video src="http://www.w3school.com.cn/i/movie.mp4" poster="" ></video>
					<img src="../images/videobg.png" alt="">
				</div>
			</div>
			<p class="info">
					<span>14分钟前</span>
					<span class="right">
						<img class="eye" src="../images/eyes.png">
						<span class="eye num">10750</span>&nbsp
						<span>分成:</span>
						<span class="num">￥50</span>
					</span>
			</p>
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
				
			}
		}
	}
	window.onload=function(){
		document.title = '问答';
	}
	
	// router.go('/bar')
</script>
<style lang='less'>
	.items.answered{
		margin: 0 auto;
		background-color: white;
		position: relative;
		p.info{
			width: 344px;
			margin: 0 auto;
			padding-bottom: 16px;
			font-size: 13px;
			color: #b6b6b7;
			.right{
				float: right;
				.num{
					color: #87878a;
				}
			}
			img{
				vertical-align: text-top;
				height: 15px;
			}
			span.eye{
					padding-left: 5px;
				}
		}
		.qus{
			margin: 0 auto;
			width: 344px;
			margin-top: 15px;
			span{
				font-size: 15px;
				display: inline-block;
				line-height: 20px;
			}
			span.money{
				color: #ff9e49;
				float: right;
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
			i{
				color: #ff0000;
			}
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
					height: 175px;
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