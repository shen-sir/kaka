<template>
		<div class="items quest" v-for="item in items" >
			<div class="qus">
				<img src="../images/quest.png">
				<span>在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前在创立锤子科技之前</span>
			</div>
			<div class="video">
				<div class="top">
					<img v-bind:src="item.userPic" v-link="{ path: '/other_homepage' }">
					<span class="name">{{item.userName}}</span>
				</div>
				<!-- video的poster属性的地址没有被顺利编译，所以要写static下已编译完加了hash值的地址，目录中无法看到 -->
				<div class="vid">
					<div class="ww"></div>
					<video src="http://www.w3school.com.cn/i/movie.mp4" poster="" controls="controls"></video>
					<img src="../images/videobg.png" alt="">
					<span>{{item.viewPrice}}元偷偷看</span>
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
import { getHome_ask_list } from '../vuex/getters'
import { inuser } from '../vuex/actions'
import { inhome_ask_list } from '../vuex/actions'

	module.exports={
		data (){
			return {
				items:this.list
			}
		},
		route:{
			activate (done){
				/*这里使用的router钩子，与vue组件钩子用法不同，虽然同名*/
				/*可以在这里使用HTTP，当切入组简时再次请求，在success里dispatch更改state，最后.next()*/
				
				this.getLIst(1,20,1,()=>{done.next()})
			}
		},
		methods:{
			getLIst(pageIndex,pageSize,type,fn){
				this.$http.get('http://localhost:3000/kaka-server-service/restful/V2/question/info?pageIndex='+pageIndex+'&pageSize='+pageSize+'&queryType=' + type).then((response) => {
			        // success callback
			        // debugger;
			        // 当router钩子调用时需要的.next()传参
			        this.ask_list(response);
			        // debugger;
			        if(typeof fn != "undefined"){
			        	fn()
			        }
			        
			    }, (response) => {
			        // error callback
			    });
			}
		},
		vuex: {
	    	getters: {
		        // 注意在这里你需要 `getCount` 函数本身而不是它的执行结果 'getCount()'
		        list: function (state) {
		        	// debugger;
		        	console.log(state.Home_ask_list)
			      return state.Home_ask_list
			    }
	      	},
	      	actions: {
		      	user: inuser,
		      	ask_list: inhome_ask_list
		    }
	    },
	    // 生命周期，在实例开始初始化时同步调用,init钩子调用时并没有初始化时间处理器所以这里不能调用methods
	    init(){
	    	var code = '';
	    	if (!window.location.href.split("?")[1]) {
			    window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx49b69516e91e8565&redirect_uri=http%3A%2F%2Fxiugr.com&response_type=code&scope=snsapi_userinfo#wechat_redirect";
			    code = window.location.href.split('code=')[1].split('&')[0];
			// 获取CODE后请求用户ID
			// 可以考虑将请求放入事件处理器，但要注意生命周期
			this.$http.get('http://localhost:3000/kaka-server-service/restful/user/wx/login?code='+code).then((response) => {
		        // success callback
		        // 调用actions 的 dispatch
		        this.user(response);
		    }, (response) => {
		        // error callback
		    });
			}
			
	    },
	    ready() {
		    // GET /someUrl
		    // this.getLIst();
		    
	    }
	}
/*	window.onload=function(){
		document.title = '问答';
	}*/
	
	// router.go('/bar')
</script>
<style lang='less'>
/*数据未渲染样式*/
[v-cloak] {
  display: none;
}
	.items.quest{
		margin: 0 auto;
		background-color: white;
		position: relative;
		border-bottom: .10rem solid #f0f0f0;
		p.info{
			width: 3.44rem;
			margin: 0 auto;
			padding-bottom: .16rem;
			font-size: .13rem;
			.right{
				float: right;
			}
			img{
				vertical-align: bottom;
				height: .15rem;
			}
			span.eye{
					padding-left: 0rem;
				}
		}
		.qus{
		margin: 0 auto;
		width: 3.44rem;
		background-color: #fafafa;
		margin-top: .15rem;
		span{
			font-size: .15rem;
			padding: .05rem .05rem .05rem 0;
			width: 3.00rem;
			display: inline-block;
			line-height: .20rem;
		}
		img{
			/*width: 28rem;*/
			height: 0.28rem;
			vertical-align:top;
			margin-top: -0.10rem;
		}
	}
	.video{
			margin: 0 auto;
			margin-top: .10rem;
			width: 3.44rem;
			.top{
				position: relative;
				z-index: 99;
				margin-bottom: .03rem;
				img{
					margin-bottom: -0.07rem;
					margin-left: 0.07rem;
					width: .52rem;
					height: .52rem;
					border: 0.02rem solid white;
					border-radius: 100%;
					vertical-align:middle;
				}
			}
			.vid{
				.ww{
					height: 1.70rem;
				}
				img{
					position: absolute;
					bottom: .425rem;
					height: 1.74rem;
				}
				video{
					position: absolute;
					bottom: .425rem;
					width: 3.45rem;
					border-radius:.06rem;
					height: 1.74rem;
					background-color: #717171;
				}
				span{
					position: absolute;
					top :2.93rem;
					left: 1.82rem;
					vertical-align: middle;
					color: white;
					font-size: .14rem;
				}
			}
			
		}
	}
	
</style>