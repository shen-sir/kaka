<template>
	<div class="item">
		<div class="qus">
			<img src="../images/quest.png">
			<span>在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前</span>
		</div>
		<div class="video">
			<div class="top">
				<img src="../images/quest.png" >
				<span class="name">罗永浩 | 锤子科技创始人</span>
			</div>
			<!-- video的poster属性的地址没有被顺利编译，所以要写static下已编译完加了hash值的地址，目录中无法看到 -->
			<div class="vid">
				<div class="ww"></div>
				<video src="http://www.w3school.com.cn/i/movie.mp4" poster="" ></video>
				<img src="../images/videobg.png" alt="">
			</div>
			
		</div>
	</div>
	<div class="item">
		<div class="qus">
			<img src="../images/quest.png">
			<span>在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前</span>
		</div>
		<div class="video">
			<div class="top">
				<img src="../images/quest.png" >
				<span class="name">罗永浩 | 锤子科技创始人</span>
			</div>
			<!-- video的poster属性的地址没有被顺利编译，所以要写static下已编译完加了hash值的地址，目录中无法看到 -->
			<div class="vid">
				<div class="ww"></div>
				<video src="http://www.w3school.com.cn/i/movie.mp4" poster="" ></video>
				<img src="../images/videobg.png" alt="">
			</div>
			
		</div>
	</div>
	<div class="item">
		<div class="qus">
			<img src="../images/quest.png">
			<span>在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前</span>
		</div>
		<div class="video">
			<div class="top">
				<img src="../images/quest.png" >
				<span class="name">罗永浩 | 锤子科技创始人</span>
			</div>
			<!-- video的poster属性的地址没有被顺利编译，所以要写static下已编译完加了hash值的地址，目录中无法看到 -->
			<div class="vid">
				<div class="ww"></div>
				<video src="http://www.w3school.com.cn/i/movie.mp4" poster="" ></video>
				<img src="../images/videobg.png" alt="">
			</div>
			
		</div>
	</div>
</template>
<script>
	module.exports={
		data (){
			return {}
		}
	}
	document.title = '问答';
</script>
<style lang='less'>
	.item{
		margin: 0 auto;
		background-color: white;
		position: relative;
		/*border: 1px solid red;*/
		border-bottom: 10px solid #f0f0f0;
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
			margin-bottom: -10px;
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
			/*position: relative;*/
			.ww{
				height: 175px;
			}
			img{
				position: absolute;
				bottom: 0;
				/*top:;*/
				/*left: 20%;
				bottom: 0;*/
			}
			video{
				position: absolute;
				bottom: 0;
				width: 344px;
				height: 175px;
				background-color: #717171;
			}
		}
		
	}
</style>