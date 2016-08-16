<template>
<div id="input_problem">
	<textarea type="text" placeholder="向老罗提问，对方必须录制小视频回答问题，如果超过36小时未回答，将退款至微信钱包" name="" v-on:keyup="_length"></textarea>
	 <p>{{text}}/52&nbsp</p>
	 <div class="check">
	 	<input type="checkbox" id="checkbox" v-model="checked">
		<label for="checkbox">公开问题，每有一个人偷看，您将得到一元的分成奖励</label>
	 </div>
	 
	 <div class="put_questions" v-link="{ path: '/input_problem' }">
		<p>向他提问&nbsp￥ <span>50</span></p>
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
      alert(document.title)
      document.title = '个人主页';
      alert(document.title)
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
  	_length(){//限制输入字符数
  		var $self = this;
  		document.querySelector('textarea').onkeydown = function(e){
  			$self.text = this.value.length+1;
  			if(this.value.length >= 52) {
		      event.returnValue = false;
		      this.value = this.value.slice(0,51);
  			}
  		}
  		console.log('set');
  	}
  }
}
</script>


<style lang="less">
#input_problem{
	textarea{
		margin: 0 auto;
		display: block;
		width: 352px;
		height: 170px;
		border: 1px solid #f1f1f1;
		border-radius: 5px;
		outline:none;
		margin-top: 15px;
		// 取消内阴影
		-webkit-appearance: none;
	}
	p{
		color: #c1c1c1;
		display: block;
		width: 352px;
		margin: -22px auto 0 auto;
		text-align: right;
	}
	.check{
		width: 354px;
		margin: 0 auto;
		margin-top: 20px;
		font-size: 13px;
	}
	label:active,input:active{
		background-color: white;
		border: 0;
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
