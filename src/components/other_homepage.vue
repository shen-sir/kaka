<template>
<div id="other_home">
	<div class="head">
		<div class="userimg">
			<img class="usm" src="../images/head.png" >
			<img class="usv" src="../images/userV.png" >
		</div>
		<div class="name">
			<p>
				卫斯理
				<img src="../images/sex.png" >
				<span>一直特立独行的猪猪猪</span>
			</p>
			<span>
				107  关注  |  800  粉丝
			</span>
			<h2>
				<span>总收入：￥</span>45
			</h2>
		</div>

	</div>
	<div class="status">
		<div class="item">
			<p>106<span>&nbsp个</span></p>
			<span class="type">答题</span>
		</div>
		<div class="item">
			<p>106<span>&nbsp次</span></p>
			<span class="type">聊天</span>
		</div>
		<div class="item" >
			<p>106<span>&nbsp元</span></p>
			<span class="type">收入</span>
		</div>
	</div>
	<div class="list">
		<div class="nav">
			<span v-link="{ path: '/other_homepage/' }">他问(15)</span>
			<span v-link="{ path: '/other_homepage/right' }">他答(15)</span>
		</div>
		<router-view></router-view>
	</div>
</div>
</template>

<script>
export default {
  data () {
    return {
      items:[
        {a:1},
        {a:1},
        {a:1},
        {a:1},
      ]
    }
  }
}
</script>


<style lang="less">
#other_home .head{
	width: 100%;
	height: 1.45rem;
	background-color: #22b9ff;
	padding-top: .25rem;
	.userimg{
		vertical-align: top;
		margin-left: .18rem;
		margin-right: .3rem;
		margin-top: 0.12rem;
		display: inline-block;
		.usm{
			width: .90rem;
			height: .90rem;
			border-radius: 100%;
			border: .02rem solid #abe5ff;
		}
		.usv{
			width: .19rem;
			height: .19rem;
			margin-top: .04rem;
			vertical-align:top;
			margin-left: -0.22rem;
		}
	}
	.name{
		color: white;
		display: inline-block;
		p{
			font-size: .15rem;
			margin-bottom: .05rem;
			img{
				width: .15rem;
				height: .15rem;
				// margin-top: -0.05rem;
				margin-top: -2px;
				vertical-align: middle;
			}
			span{
				vertical-align: middle;
				font-size: .13rem;
			}
		}
		span{
			font-size: .14rem;
		}
		h2{
			margin-top: .10rem;
			font-weight: normal;
			span{
				font-size: .14rem;
			}
		}
	}
}
#other_home .status{
	width: 100%;
	text-align: center;
	border-bottom: .10rem solid #f0f0f0;
	padding-bottom: .20rem;
	.item{
		display: inline-block;
		width: 32%;
		p{
			margin: 0.08rem 0.04rem 0;
			span{
				font-size: 13px;
			}
		}
		span.type{
			padding-right: 4px;
			font-size: 13px;	
			color: #b5b5b5;
		}
	}
}
#other_home .list{
	.nav{
		text-align: center;
		padding: 22px 0;
		span{
			width: 49%;
			display: inline-block;
		}
	}
}
</style>
