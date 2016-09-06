<template>
<div id="account">
	<div class="acco">
		<p>您的余额在工作日每天17点结算，自动转入您的支付宝账户</p>
		<div class="text">
			<span>支付宝账号</span>
			<input type="text" placeholder="请输入账号">
		</div>
		<div class="text">
			<span>支付宝姓名</span>
			<input type="text" placeholder="请输入姓名">
		</div>
	</div>
	<div class="put_questions" v-link="{ path: '/' }">
		<p>保存账户</p>
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
      //当路由停用当前组件,向父组件派发事件,隐藏菜单
      this.$dispatch('show-menu', false)
      // alert(document.title)
      document.title = '个人主页';
      // alert(document.title)
      //调用此函数处理切换过程的下一步
      transition.next()
    },
    deactivate: function (transition) {
      console.log('hook-example deactivated!')
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
#account{
	.acco{
		font-size: .14rem;
		margin: 0 auto;
		width: 344px;
		border-bottom: 1px solid #f8f8f8;
		p{
			text-align: center;
			color: #ff7300;
		}
		.text{
			span{
				line-height: 49px;
			}
			input{
				vertical-align: middle;
				margin-top: -3px;
				border: 0;
			}
			height: 49px;
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
