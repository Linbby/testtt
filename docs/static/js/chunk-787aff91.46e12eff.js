(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-787aff91"],{"02dd":function(e,t,r){"use strict";r("1751")},1751:function(e,t,r){},"9ed6":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login-container"},[r("div",{staticClass:"bg"}),r("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"on","label-position":"left"}},[r("div",{staticClass:"title-container"},[r("h3",{staticClass:"title"},[e._v("欢迎登陆")])]),r("el-form-item",{attrs:{prop:"username"}},[r("el-input",{ref:"username",attrs:{placeholder:"Username",name:"username",type:"text",tabindex:"1","auto-complete":"on"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"Password",name:"password",tabindex:"2","auto-complete":"on"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1),r("div",{staticClass:"bottom",on:{click:e.handleLogin}},[e._v(" 登陆 ")]),r("div",{staticClass:"tips"},[r("span",{staticStyle:{"margin-right":"20px"}},[e._v("username: admin")]),r("span",[e._v(" password: any")])])],1)],1)},s=[],a=(r("c13f"),r("5384"),r("61f7")),o=r("b775"),i=r("5f87"),l={name:"Login",data:function(){var e=function(e,t,r){Object(a["b"])(t)?r():r(new Error("Please enter the correct user name"))},t=function(e,t,r){t.length<6?r(new Error("The password can not be less than 6 digits")):r()};return{loginForm:{username:"admin",password:"111111"},loginRules:{username:[{required:!0,trigger:"blur",validator:e}],password:[{required:!0,trigger:"blur",validator:t}]},loading:!1,passwordType:"password",redirect:void 0}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},methods:{showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},handleLogin:function(){var e=this;this.$refs.loginForm.validate((function(t){if(!t)return console.log("error submit!!"),!1;e.loading=!0,Object(o["a"])({url:"/user/managerLogin",method:"post",data:{identity_card:"123456789098765432",password:"123456"}}).then((function(t){Object(i["c"])(t.data),e.loading=!1,e.$router.push({path:e.redirect||"/"})})).catch((function(t){e.loading=!1}))}))}}},d=l,c=(r("02dd"),r("ba8a"),r("829d")),u=Object(c["a"])(d,n,s,!1,null,"b3e7a894",null);t["default"]=u.exports},a7c8:function(e,t,r){},ba8a:function(e,t,r){"use strict";r("a7c8")}}]);