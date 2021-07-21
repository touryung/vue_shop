(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["users"],{"1da1":function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r("d3b7");function a(e,t,r,a,n,o,i){try{var s=e[o](i),l=s.value}catch(u){return void r(u)}s.done?t(l):Promise.resolve(l).then(a,n)}function n(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function s(e){a(i,n,o,s,l,"next",e)}function l(e){a(i,n,o,s,l,"throw",e)}s(void 0)}))}}},2666:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/welcome"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("用户管理")]),r("el-breadcrumb-item",[e._v("用户列表")])],1),r("el-card",[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:8}},[r("el-input",{attrs:{placeholder:"请输入内容",clearable:""},on:{clear:e.getUserList},model:{value:e.queryInfo.query,callback:function(t){e.$set(e.queryInfo,"query",t)},expression:"queryInfo.query"}},[r("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.getUserList},slot:"append"})],1)],1),r("el-col",{attrs:{span:4}},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addUserDialogVisible=!0}}},[e._v(" 添加用户 ")])],1)],1),r("el-table",{attrs:{data:e.userList,border:"",stripe:""}},[r("el-table-column",{attrs:{type:"index",label:"#"}}),r("el-table-column",{attrs:{prop:"username",label:"姓名"}}),r("el-table-column",{attrs:{prop:"email",label:"邮箱"}}),r("el-table-column",{attrs:{prop:"mobile",label:"电话"}}),r("el-table-column",{attrs:{prop:"role_name",label:"角色"}}),r("el-table-column",{attrs:{label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-switch",{on:{change:function(r){return e.handleStateChange(t.row)}},model:{value:t.row.mg_state,callback:function(r){e.$set(t.row,"mg_state",r)},expression:"scope.row.mg_state"}})]}}])}),r("el-table-column",{attrs:{label:"操作",width:"180px"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-tooltip",{attrs:{effect:"dark",content:"修改",placement:"top",enterable:!1}},[r("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(r){return e.showEditUserDialog(t.row.id)}}})],1),r("el-tooltip",{attrs:{effect:"dark",content:"删除",placement:"top",enterable:!1}},[r("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(r){return e.removeUserById(t.row.id)}}})],1),r("el-tooltip",{attrs:{effect:"dark",content:"权限",placement:"top",enterable:!1}},[r("el-button",{attrs:{type:"warning",icon:"el-icon-setting",size:"mini"},on:{click:function(r){return e.showSetRoleDialog(t.row)}}})],1)]}}])})],1),r("el-pagination",{attrs:{"current-page":e.queryInfo.pagenum,"page-sizes":[2,4,6,8,10],"page-size":e.queryInfo.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalUserNum,background:""},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),r("el-dialog",{attrs:{title:"添加用户",visible:e.addUserDialogVisible,width:"50%"},on:{"update:visible":function(t){e.addUserDialogVisible=t},close:e.addUserDialogClosed}},[r("el-form",{ref:"addUserFormRef",attrs:{model:e.addUserFormData,"label-width":"70px",rules:e.addUserFormRules}},[r("el-form-item",{attrs:{label:"用户名",prop:"username"}},[r("el-input",{model:{value:e.addUserFormData.username,callback:function(t){e.$set(e.addUserFormData,"username",t)},expression:"addUserFormData.username"}})],1),r("el-form-item",{attrs:{label:"密码",prop:"password"}},[r("el-input",{model:{value:e.addUserFormData.password,callback:function(t){e.$set(e.addUserFormData,"password",t)},expression:"addUserFormData.password"}})],1),r("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[r("el-input",{model:{value:e.addUserFormData.email,callback:function(t){e.$set(e.addUserFormData,"email",t)},expression:"addUserFormData.email"}})],1),r("el-form-item",{attrs:{label:"手机",prop:"mobile"}},[r("el-input",{model:{value:e.addUserFormData.mobile,callback:function(t){e.$set(e.addUserFormData,"mobile",t)},expression:"addUserFormData.mobile"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.addUserDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.addUser}},[e._v(" 确 定 ")])],1)],1),r("el-dialog",{attrs:{title:"修改用户",visible:e.editUserDialogVisible,width:"50%"},on:{"update:visible":function(t){e.editUserDialogVisible=t}}},[r("el-form",{ref:"editUserFormRef",attrs:{model:e.editUserFormData,"label-width":"70px",rules:e.addUserFormRules}},[r("el-form-item",{attrs:{label:"用户名",prop:"username"}},[r("el-input",{attrs:{value:e.editUserFormData.username,disabled:""}})],1),r("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[r("el-input",{model:{value:e.editUserFormData.email,callback:function(t){e.$set(e.editUserFormData,"email",t)},expression:"editUserFormData.email"}})],1),r("el-form-item",{attrs:{label:"手机",prop:"mobile"}},[r("el-input",{model:{value:e.editUserFormData.mobile,callback:function(t){e.$set(e.editUserFormData,"mobile",t)},expression:"editUserFormData.mobile"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.editUserDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.editUserInfo}},[e._v(" 确 定 ")])],1)],1),r("el-dialog",{attrs:{title:"分配角色",visible:e.setRoleDialogVisible,width:"50%"},on:{"update:visible":function(t){e.setRoleDialogVisible=t},close:e.setRoleDialogClosed}},[r("div",[r("p",[e._v("当前的用户："+e._s(e.setRoleUserInfo.username))]),r("p",[e._v("当前的角色："+e._s(e.setRoleUserInfo.role_name))]),r("p",[e._v(" 分配新角色："),r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.selectedRoleId,callback:function(t){e.selectedRoleId=t},expression:"selectedRoleId"}},e._l(e.roleList,(function(e){return r("el-option",{key:e.id,attrs:{label:e.roleName,value:e.id}})})),1)],1)]),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.setRoleDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.setRole}},[e._v(" 确 定 ")])],1)])],1)},n=[],o=r("1da1"),i=(r("99af"),r("96cf"),{data:function(){var e=function(e,t,r){return/^\w+@\w+\.\w+$/.test(t)?r():r(new Error("邮箱格式错误！"))},t=function(e,t,r){return/^1[3|4|5|7|8][0-9]{9}$/.test(t)?r():r(new Error("手机号格式错误！"))};return{queryInfo:{query:"",pagenum:1,pagesize:4},userList:[],totalUserNum:0,addUserDialogVisible:!1,addUserFormData:{username:"",password:"",email:"",mobile:""},addUserFormRules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:10,message:"用户名长度在 3 到 10 之间",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:15,message:"密码长度在 6 到 15 之间",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{validator:e,trigger:"blur"}],mobile:[{required:!0,message:"请输入手机号",trigger:"blur"},{validator:t,trigger:"blur"}]},editUserFormData:{},setRoleUserInfo:{},editUserDialogVisible:!1,setRoleDialogVisible:!1,roleList:[],selectedRoleId:""}},created:function(){this.getUserList()},methods:{getUserList:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.get("/users",{params:e.queryInfo});case 2:if(r=t.sent,a=r.data,200===a.meta.status){t.next=6;break}return t.abrupt("return",e.$message.error(a.meta.message));case 6:e.userList=a.data.users,e.totalUserNum=a.data.total;case 8:case"end":return t.stop()}}),t)})))()},handleSizeChange:function(e){this.queryInfo.pagesize=e,this.getUserList()},handleCurrentChange:function(e){this.queryInfo.pagenum=e,this.getUserList()},handleStateChange:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$axios.put("/users/".concat(e.id,"/state/").concat(e.mg_state));case 2:if(a=r.sent,n=a.data,200===n.meta.status){r.next=7;break}return e.mg_state=!e.mg_state,r.abrupt("return",t.$message.error("设置用户状态失败！"));case 7:t.$message.success(n.meta.msg);case 8:case"end":return r.stop()}}),r)})))()},addUserDialogClosed:function(){this.$refs.addUserFormRef.resetFields()},addUser:function(){var e=this;this.$refs.addUserFormRef.validate(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(r){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.$axios.post("/users",e.addUserFormData);case 4:if(a=t.sent,n=a.data,201===n.meta.status){t.next=8;break}return t.abrupt("return",e.$message.error(n.meta.msg));case 8:e.getUserList(),e.addUserDialogVisible=!1,e.$message.success(n.meta.msg);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},showEditUserDialog:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$axios.get("/users/".concat(e));case 2:if(a=r.sent,n=a.data,200===n.meta.status){r.next=6;break}return r.abrupt("return",t.$message.error(n.meta.msg));case 6:t.editUserDialogVisible=!0,t.editUserFormData=n.data;case 8:case"end":return r.stop()}}),r)})))()},editUserInfo:function(){var e=this;this.$refs.editUserFormRef.validate(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(r){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.$axios.put("/users/".concat(e.editUserFormData.id),{email:e.editUserFormData.email,mobile:e.editUserFormData.mobile});case 4:if(a=t.sent,n=a.data,200===n.meta.status){t.next=8;break}return t.abrupt("return",e.$message.error(n.meta.msg));case 8:e.getUserList(),e.editUserDialogVisible=!1,e.$message.success(n.meta.msg);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},removeUserById:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var a,n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).catch((function(e){return e}));case 2:if(a=r.sent,"confirm"===a){r.next=5;break}return r.abrupt("return",t.$message.info("已取消删除！"));case 5:return r.next=7,t.$axios.delete("/users/".concat(e));case 7:if(n=r.sent,o=n.data,200===o.meta.status){r.next=11;break}return r.abrupt("return",t.$message.error(o.meta.msg));case 11:t.getUserList(),t.$message.success(o.meta.msg);case 13:case"end":return r.stop()}}),r)})))()},showSetRoleDialog:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.setRoleUserInfo=e,r.next=3,t.$axios.get("/roles");case 3:if(a=r.sent,n=a.data,200===n.meta.status){r.next=7;break}return r.abrupt("return",t.$message.error(n.meta.msg));case 7:t.roleList=n.data,t.setRoleDialogVisible=!0;case 9:case"end":return r.stop()}}),r)})))()},setRole:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.selectedRoleId){t.next=2;break}return t.abrupt("return",e.$message.error("请选择要分配的角色！"));case 2:return t.next=4,e.$axios.put("users/".concat(e.setRoleUserInfo.id,"/role"),{rid:e.selectedRoleId});case 4:if(r=t.sent,a=r.data,200===a.meta.status){t.next=8;break}return t.abrupt("return",e.$message.error(a.meta.msg));case 8:e.getUserList(),e.setRoleDialogVisible=!1,e.$message.success(a.meta.msg);case 11:case"end":return t.stop()}}),t)})))()},setRoleDialogClosed:function(){this.setRoleUserInfo={},this.selectedRoleId=""}}}),s=i,l=r("2877"),u=Object(l["a"])(s,a,n,!1,null,"7a786aec",null);t["default"]=u.exports},"96cf":function(e,t){!function(t){"use strict";var r,a=Object.prototype,n=a.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag",u="object"===typeof e,c=t.regeneratorRuntime;if(c)u&&(e.exports=c);else{c=t.regeneratorRuntime=u?e.exports:{},c.wrap=w;var m="suspendedStart",d="suspendedYield",f="executing",p="completed",h={},g={};g[i]=function(){return this};var b=Object.getPrototypeOf,v=b&&b(b(j([])));v&&v!==a&&n.call(v,i)&&(g=v);var y=D.prototype=U.prototype=Object.create(g);k.prototype=y.constructor=D,D.constructor=k,D[l]=k.displayName="GeneratorFunction",c.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===k||"GeneratorFunction"===(t.displayName||t.name))},c.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,D):(e.__proto__=D,l in e||(e[l]="GeneratorFunction")),e.prototype=Object.create(y),e},c.awrap=function(e){return{__await:e}},R(L.prototype),L.prototype[s]=function(){return this},c.AsyncIterator=L,c.async=function(e,t,r,a){var n=new L(w(e,t,r,a));return c.isGeneratorFunction(t)?n:n.next().then((function(e){return e.done?e.value:n.next()}))},R(y),y[l]="Generator",y[i]=function(){return this},y.toString=function(){return"[object Generator]"},c.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){while(t.length){var a=t.pop();if(a in e)return r.value=a,r.done=!1,r}return r.done=!0,r}},c.values=j,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(I),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(a,n){return s.type="throw",s.arg=e,t.next=a,n&&(t.method="next",t.arg=r),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),I(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var a=r.completion;if("throw"===a.type){var n=a.arg;I(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:j(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=r),h}}}function w(e,t,r,a){var n=t&&t.prototype instanceof U?t:U,o=Object.create(n.prototype),i=new E(a||[]);return o._invoke=F(e,r,i),o}function x(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(a){return{type:"throw",arg:a}}}function U(){}function k(){}function D(){}function R(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function L(e){function t(r,a,o,i){var s=x(e[r],e,a);if("throw"!==s.type){var l=s.arg,u=l.value;return u&&"object"===typeof u&&n.call(u,"__await")?Promise.resolve(u.__await).then((function(e){t("next",e,o,i)}),(function(e){t("throw",e,o,i)})):Promise.resolve(u).then((function(e){l.value=e,o(l)}),i)}i(s.arg)}var r;function a(e,a){function n(){return new Promise((function(r,n){t(e,a,r,n)}))}return r=r?r.then(n,n):n()}this._invoke=a}function F(e,t,r){var a=m;return function(n,o){if(a===f)throw new Error("Generator is already running");if(a===p){if("throw"===n)throw o;return O()}r.method=n,r.arg=o;while(1){var i=r.delegate;if(i){var s=_(i,r);if(s){if(s===h)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===m)throw a=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=f;var l=x(e,t,r);if("normal"===l.type){if(a=r.done?p:d,l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(a=p,r.method="throw",r.arg=l.arg)}}}function _(e,t){var a=e.iterator[t.method];if(a===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=r,_(e,t),"throw"===t.method))return h;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=x(a,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,h;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,h):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function $(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function I(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach($,this),this.reset(!0)}function j(e){if(e){var t=e[i];if(t)return t.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function t(){while(++a<e.length)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=r,t.done=!0,t};return o.next=o}}return{next:O}}function O(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())}}]);
//# sourceMappingURL=users.05d98ada.js.map