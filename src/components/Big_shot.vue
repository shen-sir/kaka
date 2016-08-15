<template>
<div id="big-shot">
  <div class="bigV">
    <div class="item">
      <img src="../images/head.png">
      <img src="../images/vicon.png">
      <span v-on:click="set">push botton</span>
    </div>
    <div class="item">
      <img src="../images/head.png">
      <img src="../images/vicon.png">
      <span>罗永浩</span>
    </div>
    <div class="item">
      <img src="../images/head.png">
      <img src="../images/vicon.png">
      <span>罗永浩</span>
    </div>
    <div class="item">
      <img src="../images/head.png">
      <img src="../images/vicon.png">
      <span>罗永浩</span>
    </div>
    <div class="item">
      <img src="../images/head.png">
      <img src="../images/vicon.png">
      <span>罗永浩</span>
    </div>
    <div class="item">
      <img src="../images/head.png">
      <img src="../images/vicon.png">
      <span>罗永浩</span>
    </div>
  </div>
  <div class="line l1">
      <span class="crowd">网红</span>
      <hr>    
  </div>
  <div class="transverse">
    <div class="item" v-for="item in items">
      <div class="outer">
        <img src="../images/head.png">  
      </div>
      <p>罗永浩1</p>
      <span>资深媒体人于传播砖家</span>
    </div>
  </div>
  <div class="line l2">
      <span class="crowd">电竞</span>
      <hr>    
  </div>
  <div class="transverse">
    <div class="item" v-for="item in items">
      <div class="outer">
        <img src="../images/head.png">  
      </div>
      <p>罗永浩</p>
      <span>资深媒体人于传播砖家</span>
    </div>
  </div>
  <div class="line l3">
      <span class="crowd">二次元</span>
      <hr>    
  </div>
  <div class="transverse">
    <div class="item" v-for="item in items">
      <div class="outer">
        <img src="../images/head.png">  
      </div>
      <p>罗永浩</p>
      <span>资深媒体人于传播砖家</span>
    </div>
  </div>
  <div class="line l4">
      <span class="crowd">创投圈</span>
      <hr>    
  </div>
  <div class="transverse">
    <div class="item" v-for="item in items">
      <div class="outer">
        <img src="../images/head.png">  
      </div>
      <p>罗永浩</p>
      <span>资深媒体人于传播砖家</span>
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
  },
  methods :{
    set (){
      this.items.push({b:2})
    }
  }
}
window.onload=function(){

  document.title = '大咖提问';
  /*var headicon = document.querySelectorAll('.bigV .item')[3];
  headicon.style.border = "2px solid black"*/
// elposition(headicon[0],0,0)
}
alert(1)

// function elposition(el,top,left){
//   el.style.border = 'red';
// }

// console.log(data)
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.bigV{
  width: 100%;
  height: 2.78rem;
  background-image: url('../images/bigshot.png');
  background-repeat: no-repeat;
  background-size:contain;
  position: relative;
  .item{
    width: .66rem;
    height: .90rem;
    position: absolute;
    img,span{
      margin: 0 auto;
      display: block;
    }
    img{
      margin-top: -.11rem;
    }
    img:first-child{
      width: .60rem;
      border-radius: 100%;
      border: .03rem solid #dfdfdf;
    }
    span{
      background-color: #22b9ff;
      color: white;
      border-radius: .05rem;
      text-align: center;
      line-height: .20rem;
      font-size: .14rem;
    }
  }
  .item:nth-child(1){
    top:.39rem;
    left: .10rem;
  }
  .item:nth-child(2){
    top:.50rem;
    left: 1.11rem;
  }
  .item:nth-child(3){
    top:.21rem;
    left: 2.24rem;
  }
  .item:nth-child(4){
    top:.90rem;
    left: 3.06rem;
  }
  .item:nth-child(5){
    top:1.47rem;
    left: .58rem;
  }
  .item:nth-child(6){
    top:1.37rem;
    left: 1.83rem;
  }
  .item:nth-child(1){
    top:.39rem;
    left: .10rem;
  }
}
.line{
  margin: 0 auto;
  margin-bottom: .11rem;
  text-align: center;
  .crowd{
    width: .91rem;
    height: .25rem;
    display: inline-block;
    border-radius: .13rem;
    text-align: center;
    color: white;
    font-size: .14rem;
    margin: 0 auto;
    line-height: .25rem;
    background-color: #ff615e;
  }
  hr{
    margin: 0;
    border: 0;
    border-top: 0.01rem solid #fafafa;
    margin-top: -0.125rem;
  }
}
.l2{
  .crowd{
    background-color: #22b9ff;
  }
}
.l3{
  .crowd{
    background-color: #ff6dcb;
  }
}
.l4{
  .crowd{
    background-color: #496dff;
  }
}
.transverse{
  width: 3.50rem;
  height: 1.54rem;
  overflow-x: scroll;
  padding-top: 0.3rem;
  padding-left: 0.25rem;
  white-space:nowrap;
  // display: flex;
  // flex-direction:row;
  overflow-x: scroll;
  .item{
    display: inline-block;
    width: .77rem;
    height: 1.24rem;
    margin-right: .25rem;
    white-space:normal;
    .outer{
      width: .63rem;
      height: .63rem;
      border: .01rem solid #e4e4e4;
      margin: 0 auto;
      border-radius: 100%;
      img{
        width: .61rem;
        height: .61rem;
        border-radius: 100%;
        border: .01rem solid white;
      } 
    }
    
    p{
      margin: .09rem 0rem;
      text-align: center;
    }
    span{
      width: 100%;
      display: inline-block;
      line-height: .16rem;
      font-size: .12rem;
      text-align: center;
    }
  }
}
</style>
