<template>
<div id="edit">
	<div class="head">
			&nbsp<img src="../images/head.png">
		</div>
	<div class="acco">
		
		<div class="text">
			<span>姓名</span>
			<input type="text" placeholder="请输入姓名">
		</div>
		<div class="text">
			<span>头衔</span>
			<input type="text" placeholder="请输入头衔">
		</div>
		<div class="text">
			<span>答题费用</span>
			<input class="money" type="text" placeholder="450">
			<span>元</span>
		</div>
		<div class="text">
			<span>聊天费用</span>&nbsp&nbsp<span class="time">5分钟</span>
			<input class="money" type="text" placeholder="35">
			<span>元</span>
		</div>
	</div>
	<div class="put_questions" v-link="{ path: '/' }">
		<p>保存</p>
	</div>
</div>
</template>

<script>
//暴露data函数接口，返回本组件的vue选项
export default {
  data () {
    return {
    	checked:true,
    	text:0
	}
  },
  route: {//路由选项
    activate: function (transition) {
      console.log('hook-example activated!')
      document.body.style.backgroundColor = "#f0f0f0";
      //当路由停用当前组件,向父组件派发事件,隐藏菜单
      this.$dispatch('show-menu', false)
      // alert(document.title)
      document.title = '个人主页';
      // alert(document.title)
      //调用此函数处理切换过程的下一步
      transition.next()
    },
    deactivate: function (transition) {
      console.log('hook-example deactivated!');
      document.body.style.backgroundColor = "white";
      //当路由停用当前组件,向父组件派发事件,显示菜单
      this.$dispatch('show-menu', true)
      transition.next()
    }
  },
  methods:{
  	_length(){
  		// console.log(document.querySelector('textarea'))
  		var $self = this;
  		document.querySelector('textarea').onkeydown = function(){
  			$self.text = this.value.length+1;
  			if(this.value.length >= 52) {
		      event.returnValue = false;
  			}
  		}
  		console.log('set');
  	}
  }
}
</script>


<style lang="less">
#edit{
	height: 100%;
	.head{
		width: 100%;
		height: 145px;
		background-color: #22b9ff;
		text-align: center;
		margin-bottom: 10px;
		img{
			display: inline-block;
			margin-top: 24px;
			width: 93px;
			height: 93px;
			border-radius: 100%;
			border: 1px solid #d3f4ff;
		}
	}
	.acco{
		font-size: .14rem;
		// margin: 0 auto;
		// width: 344px;
		width: 100%;
		border-bottom: 1px solid #f8f8f8;
		background-color: white;
		.text{
			span{
				line-height: 49px;
			}
			input{
				vertical-align: middle;
				margin-top: -3px;
				border: 0;
				margin-left: 12px;
			}
			.money{
				width: 62px;
				border: 1px solid #e2e2e2;
				-webkit-appearance: none;
				color: #ff7300;
				text-align: center;
				margin-left: 10px;
			}
			.time{
				color: #6d6d6d;
			}
			width: 344px;
			height: 49px;
			margin: 0 auto;
		}
	}
	.put_questions{
		width: 100%;
		height: 50px;
		background-color: #34bbfc;
		text-align: center;
		position: fixed;
		bottom: 0;
		z-index: 9999;
		p{
			text-align: center;
			margin: 0;
			line-height: 50px;
			color: white;
		}
	}
}
</style>
