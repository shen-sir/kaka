webpackJsonp([14,13],{0:function(n,t,e){"use strict";function o(n){return n&&n.__esModule?n:{"default":n}}var i=e(13),u=o(i),a=e(87),l=o(a),s=e(73),c=o(s),p=e(86),r=o(p);u["default"].use(l["default"]),u["default"].use(r["default"]);var f=new l["default"];f.map({"/":{component:function(n){e.e(1,function(t){var e=[t(85)];n.apply(null,e)}.bind(this))}},"/big_shot":{component:function(n){e.e(0,function(t){var e=[t(12)];n.apply(null,e)}.bind(this))}},"/personal_homepage":{component:function(n){e.e(2,function(t){var e=[t(74)];n.apply(null,e)}.bind(this))}},"/my_question":{component:function(n){e.e(3,function(t){var e=[t(82)];n.apply(null,e)}.bind(this))}},"/my_answer":{component:function(n){e.e(4,function(t){var e=[t(81)];n.apply(null,e)}.bind(this))}},"/details_of_my_questions":{component:function(n){e.e(5,function(t){var e=[t(78)];n.apply(null,e)}.bind(this))}},"/answered":{component:function(n){e.e(8,function(t){var e=[t(76)];n.apply(null,e)}.bind(this))}},"/my_read":{component:function(n){e.e(9,function(t){var e=[t(83)];n.apply(null,e)}.bind(this))}},"/other_homepage":{component:function(n){e.e(7,function(t){var e=[t(84)];n.apply(null,e)}.bind(this))},subRoutes:{"/":{component:function(n){e.e(6,function(t){var e=[t(77)];n.apply(null,e)}.bind(this))}},"/right":{component:function(n){e.e(0,function(t){var e=[t(12)];n.apply(null,e)}.bind(this))}}}},"/input_problem":{component:function(n){e.e(11,function(t){var e=[t(80)];n.apply(null,e)}.bind(this))}},"/account":{component:function(n){e.e(12,function(t){var e=[t(75)];n.apply(null,e)}.bind(this))}},"/edit":{component:function(n){e.e(10,function(t){var e=[t(79)];n.apply(null,e)}.bind(this))}}}),f.start(c["default"],"#app")},10:function(n,t,e){n.exports=e.p+"static/img/mbar.eb3e01b.png"},15:function(n,t,e){"use strict";function o(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0});var i=e(13),u=o(i),a=e(88),l=o(a);u["default"].use(l["default"]);var s={user:{},Home_ask_list:[{a:1},{a:1},{a:1},{a:1},{a:1},{a:1}],count:0},c={INCREMENT:function(n,t){n.count=n.count+t},HOME_ASK_LIST:function(n,t){n.Home_ask_list=n.Home_ask_list.push(t)},USER:function(n,t){n.user=t}};t["default"]=new l["default"].Store({state:s,mutations:c})},16:function(n,t,e){"use strict";function o(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0});var i=e(15),u=o(i);t["default"]={data:function(){return{button:!0}},events:{"show-menu":function(n){this.button=n}},store:u["default"]}},43:function(n,t){},59:function(n,t,e){n.exports=" <div id=app> <div class=main> <router-view></router-view> </div> <div class=menubar v-show=button> <a v-link=\"{ path: '/' }\"><div class=item><img src="+e(10)+' alt=""></div></a> <a v-link="{ path: \'/big_shot\' }"><div class=item><img src='+e(10)+' alt=""></div></a> <a v-link="{ path: \'/personal_homepage\' }"><div class=item><img src='+e(10)+' alt=""></div></a> </div> </div> '},73:function(n,t,e){var o,i;e(43),o=e(16),i=e(59),n.exports=o||{},n.exports.__esModule&&(n.exports=n.exports["default"]),i&&(("function"==typeof n.exports?n.exports.options||(n.exports.options={}):n.exports).template=i)}});
//# sourceMappingURL=app.a0d53c5f01f21664a07c.js.map