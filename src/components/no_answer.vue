<template>
		<div class="items no_answer">
			<div class="qus">
				<img src="../images/head.png">
				<span class="name">小意思</span>
				<span class="money">￥500</span>
			</div>
			<div class="text">
				<span><i>【私密】</i>在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前</span>
			</div>
			<div class="video">
				
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
				
			}
		}
	}
	window.onload=function(){
		document.title = '问答';
	}
	
	// router.go('/bar')
</script>
<style lang='less'>
	.items.no_answer{
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
					margin-top: 12px;
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