<template>
		<div class="items quest" v-for="item in items" >
			<div class="qus">
				<img src="../images/quest.png">
				<span>在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前</span>
			</div>
			<div class="video">
				<div class="top">
					<img src="../images/head.png" v-link="{ path: '/other_homepage' }">
					<span class="name">罗永浩 | 锤子科技创始人</span>
				</div>
				<!-- video的poster属性的地址没有被顺利编译，所以要写static下已编译完加了hash值的地址，目录中无法看到 -->
				<div class="vid">
					<div class="ww"></div>
					<video src="http://www.w3school.com.cn/i/movie.mp4" poster="" controls="controls"></video>
					<img src="../images/videobg.png" alt="">
					<span>2元偷偷看</span>
				</div>
			</div>
			<p class="info">
					<span>14分钟前</span>
					<span class="right">
						<img class="eye" src="../images/eyes.png">
						<span class="eye">10750</span>
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
[v-cloak] {
  display: none;
}
	.items.quest{
		margin: 0 auto;
		background-color: white;
		position: relative;
		/*border: 1px solid red;*/
		border-bottom: 10px solid #f0f0f0;
		p.info{
			width: 344px;
			margin: 0 auto;
			padding-bottom: 16px;
			font-size: 13px;
			.right{
				float: right;
			}
			img{
				vertical-align: bottom;
				/*border: 1px solid black;*/
				height: 15px;
			}
			span.eye{
					padding-left: 0px;
				}
		}
		.qus{
		margin: 0 auto;
		width: 344px;
		background-color: #fafafa;
		margin-top: 15px;
		span{
			font-size: 15px;
			padding: 5px 5px 5px 0;
			width: 300px;
			display: inline-block;
			line-height: 20px;
		}
		img{
			/*width: 28px;*/
			height: 28px;
			vertical-align:top;
			margin-top: -10px;
		}
	}
	.video{
			margin: 0 auto;
			margin-top: 10px;
			width: 344px;
			/*border: 1px solid black;*/
			.top{
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
			}
			.vid{
				.ww{
					height: 170px;
				}
				img{
					position: absolute;
					bottom: 42.5px;
					height: 174px;
				}
				video{
					position: absolute;
					bottom: 42.5px;
					width: 345px;
					border-radius: 6px;
					height: 174px;
					background-color: #717171;
				}
				span{
					position: absolute;
					top :293px;
					left: 182px;
					vertical-align: middle;
					color: white;
					font-size: 14px;
				}
			}
			
		}
	}
	
</style>