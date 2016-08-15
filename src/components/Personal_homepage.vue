<template>
<div id="home">
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
	<div class="money">
		<p>未提现金额<span>￥15</span>，工作日每天17点结算，自动转入支付宝账户</p>
		<a >填写支付宝账户</a>
	</div>
	<div class="menulist">
		<div class="item">
			<span>我的提现</span>
			<img src="../images/right.png" >
		</div>
		<div class="item" v-link="{ path: '/my_question' }">
			<span>我的提问</span>
			<img src="../images/right.png" >
		</div>
		<div class="item" v-link="{ path: '/my_answer' }" >
			<span>我的回答</span>
			<img src="../images/right.png" >
		</div>
		<div class="item">
			<span>我的偷看</span>
			<img src="../images/right.png" >
		</div>
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
#home .head{
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
#home .money{
	width: 100%;
	text-align: center;
	border-bottom: .10rem solid #f0f0f0;
	padding-bottom: .20rem;
		p{
			span{
				color: #ff9834;
			}
			padding: 0 .32rem;
			color: #bdbdbd;
			text-align: center;
			font-size: .14rem;
		}
		a{
			border: 1px solid #ffbb79;
			color: #ffbb79;
			border-radius: .25rem;
			padding: .09rem	.2rem;
			display: inline-block;
			margin-top: .14rem;
		}
	}
#home .menulist{
	padding-left: .14rem;
	.item{
		width: 100%;
		padding: .14rem 0;
		border-bottom: 1px solid #f8f8f8;
		color: #3a3a3d;
		img{
			float: right;
			margin-right: .15rem;
		}
	}
}
</style>
