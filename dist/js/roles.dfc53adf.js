(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["roles"],{"057f":function(t,e,r){var n=r("fc6a"),o=r("241c").f,a={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return o(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==a.call(t)?s(t):o(n(t))}},"159b":function(t,e,r){var n=r("da84"),o=r("fdbc"),a=r("17c2"),i=r("9112");for(var s in o){var c=n[s],l=c&&c.prototype;if(l&&l.forEach!==a)try{i(l,"forEach",a)}catch(u){l.forEach=a}}},1747:function(t,e,r){},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,o=r("a640"),a=o("forEach");t.exports=a?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("d3b7");function n(t,e,r,n,o,a,i){try{var s=t[a](i),c=s.value}catch(l){return void r(l)}s.done?e(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function s(t){n(i,o,a,s,c,"next",t)}function c(t){n(i,o,a,s,c,"throw",t)}s(void 0)}))}}},3024:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/welcome"}}},[t._v("首页")]),r("el-breadcrumb-item",[t._v("权限管理")]),r("el-breadcrumb-item",[t._v("角色列表")])],1),r("el-card",[r("el-row",[r("el-col",[r("el-button",{attrs:{type:"primary"},on:{click:function(e){t.addRoleDialogVisible=!0}}},[t._v(" 添加角色 ")])],1)],1),r("el-table",{attrs:{data:t.roleList,border:"",stripe:""}},[r("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.children,(function(n){return r("el-row",{key:n.id,class:["border-bottom vcenter",0===t.index?"border-top":""]},[r("el-col",{attrs:{span:5}},[r("el-tag",{attrs:{closable:""},on:{close:function(r){return t.removeRightById(e.row,n.id)}}},[t._v(t._s(n.authName))]),r("i",{staticClass:"el-icon-caret-right"})],1),r("el-col",{attrs:{span:19}},t._l(n.children,(function(n){return r("el-row",{key:n.id,class:["vcenter",0===t.index2?"":"border-top"]},[r("el-col",{attrs:{span:6}},[r("el-tag",{attrs:{type:"success",closable:""},on:{close:function(r){return t.removeRightById(e.row,n.id)}}},[t._v(t._s(n.authName))]),r("i",{staticClass:"el-icon-caret-right"})],1),r("el-col",{attrs:{span:18}},t._l(n.children,(function(n){return r("el-tag",{key:n.id,attrs:{type:"warning",closable:""},on:{close:function(r){return t.removeRightById(e.row,n.id)}}},[t._v(t._s(n.authName))])})),1)],1)})),1)],1)}))}}])}),r("el-table-column",{attrs:{type:"index",label:"#"}}),r("el-table-column",{attrs:{prop:"roleName",label:"角色名称"}}),r("el-table-column",{attrs:{prop:"roleDesc",label:"角色描述"}}),r("el-table-column",{attrs:{label:"操作",width:"300px"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(r){return t.showEditRoleDialog(e.row.id)}}},[t._v(" 编辑 ")]),r("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(r){return t.removeRoleById(e.row.id)}}},[t._v(" 删除 ")]),r("el-button",{attrs:{type:"warning",icon:"el-icon-setting",size:"mini"},on:{click:function(r){return t.showSetRightDialog(e.row)}}},[t._v(" 分配权限 ")])]}}])})],1)],1),r("el-dialog",{attrs:{title:"编辑用户",visible:t.editRoleDialogVisible,width:"50%"},on:{"update:visible":function(e){t.editRoleDialogVisible=e},close:t.editRoleDialogClosed}},[r("el-form",{ref:"editRoleFormRef",attrs:{model:t.editRoleFormData,"label-width":"80px",rules:t.editRoleFormRules}},[r("el-form-item",{attrs:{label:"角色名称",prop:"roleName"}},[r("el-input",{model:{value:t.editRoleFormData.roleName,callback:function(e){t.$set(t.editRoleFormData,"roleName",e)},expression:"editRoleFormData.roleName"}})],1),r("el-form-item",{attrs:{label:"角色描述",prop:"roleDesc"}},[r("el-input",{model:{value:t.editRoleFormData.roleDesc,callback:function(e){t.$set(t.editRoleFormData,"roleDesc",e)},expression:"editRoleFormData.roleDesc"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.editRoleDialogVisible=!1}}},[t._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:t.editRole}},[t._v(" 确 定 ")])],1)],1),r("el-dialog",{attrs:{title:"添加用户",visible:t.addRoleDialogVisible,width:"50%"},on:{"update:visible":function(e){t.addRoleDialogVisible=e},close:t.addRoleDialogClosed}},[r("el-form",{ref:"addRoleFormRef",attrs:{model:t.addRoleFormData,"label-width":"80px",rules:t.editRoleFormRules}},[r("el-form-item",{attrs:{label:"角色名称",prop:"roleName"}},[r("el-input",{model:{value:t.addRoleFormData.roleName,callback:function(e){t.$set(t.addRoleFormData,"roleName",e)},expression:"addRoleFormData.roleName"}})],1),r("el-form-item",{attrs:{label:"角色描述",prop:"roleDesc"}},[r("el-input",{model:{value:t.addRoleFormData.roleDesc,callback:function(e){t.$set(t.addRoleFormData,"roleDesc",e)},expression:"addRoleFormData.roleDesc"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.addRoleDialogVisible=!1}}},[t._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:t.addRole}},[t._v(" 确 定 ")])],1)],1),r("el-dialog",{attrs:{title:"分配权限",visible:t.setRightDialogVisible,width:"50%"},on:{"update:visible":function(e){t.setRightDialogVisible=e}}},[r("el-tree",{ref:"treeRef",attrs:{data:t.rightsList,props:t.treeProps,"node-key":"id","default-checked-keys":t.defaultKeys,"show-checkbox":"","default-expand-all":""}}),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.setRightDialogVisible=!1}}},[t._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:t.allotRights}},[t._v(" 确 定 ")])],1)],1)],1)},o=[];function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function i(t){if(Array.isArray(t))return a(t)}r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("a630");function s(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}r("fb6a"),r("b0c0");function c(t,e){if(t){if("string"===typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(t,e):void 0}}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t){return i(t)||s(t)||c(t)||l()}var f=r("1da1"),d=(r("99af"),r("159b"),r("a15b"),r("96cf"),{data:function(){return{roleList:[],editRoleDialogVisible:!1,editRoleFormData:{},editRoleFormRules:{roleName:[{required:!0,message:"请输入角色名称",trigger:"blur"}],roleDesc:[{required:!0,message:"请输入角色描述",trigger:"blur"}]},addRoleDialogVisible:!1,addRoleFormData:{},setRightDialogVisible:!1,rightsList:[],treeProps:{label:"authName",children:"children"},defaultKeys:[],allotRightsRoleId:""}},created:function(){this.getRoleList()},methods:{getRoleList:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/roles");case 2:if(r=e.sent,n=r.data,200===n.meta.status){e.next=6;break}return e.abrupt("return",t.$message.error(n.meta.msg));case 6:t.roleList=n.data;case 7:case"end":return e.stop()}}),e)})))()},showEditRoleDialog:function(t){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.$axios.get("/roles/".concat(t));case 2:if(n=r.sent,o=n.data,200===o.meta.status){r.next=6;break}return r.abrupt("return",e.$message.error(o.meta.mag));case 6:e.editRoleFormData=o.data,e.editRoleDialogVisible=!0;case 8:case"end":return r.stop()}}),r)})))()},editRole:function(){var t=this;this.$refs.editRoleFormRef.validate(function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(r){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.$axios.put("/roles/".concat(t.editRoleFormData.roleId),{roleName:t.editRoleFormData.roleName,roleDesc:t.editRoleFormData.roleDesc});case 4:if(n=e.sent,o=n.data,200===o.meta.status){e.next=8;break}return e.abrupt("return",t.$message.error(o.meta.msg));case 8:t.editRoleDialogVisible=!1,t.getRoleList(),t.$message.success(o.meta.msg);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},addRole:function(){var t=this;this.$refs.addRoleFormRef.validate(function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(r){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.$axios.post("/roles",t.addRoleFormData);case 4:if(n=e.sent,o=n.data,201===o.meta.status){e.next=8;break}return e.abrupt("return",t.$message.error(o.meta.msg));case 8:t.addRoleDialogVisible=!1,t.getRoleList(),t.$message.success(o.meta.msg);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},addRoleDialogClosed:function(){this.$refs.addRoleFormRef.resetFields()},editRoleDialogClosed:function(){this.$refs.editRoleFormRef.resetFields()},removeRoleById:function(t){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function r(){var n,o,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.$confirm("此操作将永久删除该角色, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch((function(t){return t}));case 2:if(n=r.sent,"confirm"===n){r.next=5;break}return r.abrupt("return",e.$message.info("已取消删除！"));case 5:return r.next=7,e.$axios.delete("/roles/".concat(t));case 7:if(o=r.sent,a=o.data,200===a.meta.status){r.next=11;break}return r.abrupt("return",e.$message.error(a.meta.msg));case 11:e.getRoleList(),e.$message.success(a.meta.msg);case 13:case"end":return r.stop()}}),r)})))()},removeRightById:function(t,e){var r=this;return Object(f["a"])(regeneratorRuntime.mark((function n(){var o,a,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,r.$confirm("此操作将永久删除权限, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch((function(t){return t}));case 2:if(o=n.sent,"confirm"===o){n.next=5;break}return n.abrupt("return",r.$message.info("已取消删除！"));case 5:return n.next=7,r.$axios.delete("roles/".concat(t.id,"/rights/").concat(e));case 7:if(a=n.sent,i=a.data,200===i.meta.status){n.next=11;break}return n.abrupt("return",r.$message.error(i.meta.msg));case 11:t.children=i.data,r.$message.success(i.meta.msg);case 13:case"end":return n.stop()}}),n)})))()},showSetRightDialog:function(t){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.$axios.get("/rights/tree");case 2:if(n=r.sent,o=n.data,200===o.meta.status){r.next=6;break}return r.abrupt("return",e.$message.error(o.meta.msg));case 6:e.defaultKeys=[],e.allotRightsRoleId=t.id,e.getLeafKeys(t,e.defaultKeys),e.rightsList=o.data,e.setRightDialogVisible=!0;case 11:case"end":return r.stop()}}),r)})))()},getLeafKeys:function(t,e){var r=this;if(!t.children)return e.push(t.id);t.children.forEach((function(t){return r.getLeafKeys(t,e)}))},allotRights:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=[].concat(u(t.$refs.treeRef.getCheckedKeys()),u(t.$refs.treeRef.getHalfCheckedKeys())).join(","),e.next=3,t.$axios.post("roles/".concat(t.allotRightsRoleId,"/rights"),{rids:r});case 3:if(n=e.sent,o=n.data,200===o.meta.status){e.next=7;break}return e.abrupt("return",t.$message.error(o.meta.msg));case 7:t.getRoleList(),t.setRightDialogVisible=!1,t.$message.success(o.meta.msg);case 10:case"end":return e.stop()}}),e)})))()}}}),h=d,p=(r("efdd"),r("2877")),m=Object(p["a"])(h,n,o,!1,null,"33ab37ee",null);e["default"]=m.exports},"4df4":function(t,e,r){"use strict";var n=r("0366"),o=r("7b0b"),a=r("9bdd"),i=r("e95a"),s=r("50c4"),c=r("8418"),l=r("35a1");t.exports=function(t){var e,r,u,f,d,h,p=o(t),m="function"==typeof this?this:Array,g=arguments.length,b=g>1?arguments[1]:void 0,v=void 0!==b,y=l(p),w=0;if(v&&(b=n(b,g>2?arguments[2]:void 0,2)),void 0==y||m==Array&&i(y))for(e=s(p.length),r=new m(e);e>w;w++)h=v?b(p[w],w):p[w],c(r,w,h);else for(f=y.call(p),d=f.next,r=new m;!(u=d.call(f)).done;w++)h=v?a(f,b,[u.value,w],!0):u.value,c(r,w,h);return r.length=w,r}},"746f":function(t,e,r){var n=r("428f"),o=r("5135"),a=r("e538"),i=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||i(e,t,{value:a.f(t)})}},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag",l="object"===typeof t,u=e.regeneratorRuntime;if(u)l&&(t.exports=u);else{u=e.regeneratorRuntime=l?t.exports:{},u.wrap=w;var f="suspendedStart",d="suspendedYield",h="executing",p="completed",m={},g={};g[i]=function(){return this};var b=Object.getPrototypeOf,v=b&&b(b(E([])));v&&v!==n&&o.call(v,i)&&(g=v);var y=k.prototype=x.prototype=Object.create(g);D.prototype=y.constructor=k,k.constructor=D,k[c]=D.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===D||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(y),t},u.awrap=function(t){return{__await:t}},L(O.prototype),O.prototype[s]=function(){return this},u.AsyncIterator=O,u.async=function(t,e,r,n){var o=new O(w(t,e,r,n));return u.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},L(y),y[c]="Generator",y[i]=function(){return this},y.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},u.values=E,$.prototype={constructor:$,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return s.type="throw",s.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),l=o.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:E(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),m}}}function w(t,e,r,n){var o=e&&e.prototype instanceof x?e:x,a=Object.create(o.prototype),i=new $(n||[]);return a._invoke=F(t,r,i),a}function R(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}function x(){}function D(){}function k(){}function L(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function O(t){function e(r,n,a,i){var s=R(t[r],t,n);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"===typeof l&&o.call(l,"__await")?Promise.resolve(l.__await).then((function(t){e("next",t,a,i)}),(function(t){e("throw",t,a,i)})):Promise.resolve(l).then((function(t){c.value=t,a(c)}),i)}i(s.arg)}var r;function n(t,n){function o(){return new Promise((function(r,o){e(t,n,r,o)}))}return r=r?r.then(o,o):o()}this._invoke=n}function F(t,e,r){var n=f;return function(o,a){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw a;return N()}r.method=o,r.arg=a;while(1){var i=r.delegate;if(i){var s=_(i,r);if(s){if(s===m)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var c=R(t,e,r);if("normal"===c.type){if(n=r.done?p:d,c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=p,r.method="throw",r.arg=c.arg)}}}function _(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,_(t,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=R(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,m;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,m):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function $(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function E(t){if(t){var e=t[i];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){while(++n<t.length)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:N}}function N(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},"9bdd":function(t,e,r){var n=r("825a"),o=r("2a62");t.exports=function(t,e,r,a){try{return a?e(n(r)[0],r[1]):e(r)}catch(i){throw o(t),i}}},a15b:function(t,e,r){"use strict";var n=r("23e7"),o=r("44ad"),a=r("fc6a"),i=r("a640"),s=[].join,c=o!=Object,l=i("join",",");n({target:"Array",proto:!0,forced:c||!l},{join:function(t){return s.call(a(this),void 0===t?",":t)}})},a4d3:function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),a=r("d066"),i=r("c430"),s=r("83ab"),c=r("4930"),l=r("fdbf"),u=r("d039"),f=r("5135"),d=r("e8b5"),h=r("861d"),p=r("825a"),m=r("7b0b"),g=r("fc6a"),b=r("c04e"),v=r("5c6c"),y=r("7c73"),w=r("df75"),R=r("241c"),x=r("057f"),D=r("7418"),k=r("06cf"),L=r("9bf2"),O=r("d1e7"),F=r("9112"),_=r("6eeb"),j=r("5692"),S=r("f772"),$=r("d012"),E=r("90e3"),N=r("b622"),P=r("e538"),A=r("746f"),V=r("d44e"),I=r("69f3"),C=r("b727").forEach,T=S("hidden"),B="Symbol",K="prototype",G=N("toPrimitive"),J=I.set,z=I.getterFor(B),q=Object[K],M=o.Symbol,Y=a("JSON","stringify"),H=k.f,Q=L.f,U=x.f,W=O.f,X=j("symbols"),Z=j("op-symbols"),tt=j("string-to-symbol-registry"),et=j("symbol-to-string-registry"),rt=j("wks"),nt=o.QObject,ot=!nt||!nt[K]||!nt[K].findChild,at=s&&u((function(){return 7!=y(Q({},"a",{get:function(){return Q(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=H(q,e);n&&delete q[e],Q(t,e,r),n&&t!==q&&Q(q,e,n)}:Q,it=function(t,e){var r=X[t]=y(M[K]);return J(r,{type:B,tag:t,description:e}),s||(r.description=e),r},st=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof M},ct=function(t,e,r){t===q&&ct(Z,e,r),p(t);var n=b(e,!0);return p(r),f(X,n)?(r.enumerable?(f(t,T)&&t[T][n]&&(t[T][n]=!1),r=y(r,{enumerable:v(0,!1)})):(f(t,T)||Q(t,T,v(1,{})),t[T][n]=!0),at(t,n,r)):Q(t,n,r)},lt=function(t,e){p(t);var r=g(e),n=w(r).concat(pt(r));return C(n,(function(e){s&&!ft.call(r,e)||ct(t,e,r[e])})),t},ut=function(t,e){return void 0===e?y(t):lt(y(t),e)},ft=function(t){var e=b(t,!0),r=W.call(this,e);return!(this===q&&f(X,e)&&!f(Z,e))&&(!(r||!f(this,e)||!f(X,e)||f(this,T)&&this[T][e])||r)},dt=function(t,e){var r=g(t),n=b(e,!0);if(r!==q||!f(X,n)||f(Z,n)){var o=H(r,n);return!o||!f(X,n)||f(r,T)&&r[T][n]||(o.enumerable=!0),o}},ht=function(t){var e=U(g(t)),r=[];return C(e,(function(t){f(X,t)||f($,t)||r.push(t)})),r},pt=function(t){var e=t===q,r=U(e?Z:g(t)),n=[];return C(r,(function(t){!f(X,t)||e&&!f(q,t)||n.push(X[t])})),n};if(c||(M=function(){if(this instanceof M)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=E(t),r=function(t){this===q&&r.call(Z,t),f(this,T)&&f(this[T],e)&&(this[T][e]=!1),at(this,e,v(1,t))};return s&&ot&&at(q,e,{configurable:!0,set:r}),it(e,t)},_(M[K],"toString",(function(){return z(this).tag})),_(M,"withoutSetter",(function(t){return it(E(t),t)})),O.f=ft,L.f=ct,k.f=dt,R.f=x.f=ht,D.f=pt,P.f=function(t){return it(N(t),t)},s&&(Q(M[K],"description",{configurable:!0,get:function(){return z(this).description}}),i||_(q,"propertyIsEnumerable",ft,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:M}),C(w(rt),(function(t){A(t)})),n({target:B,stat:!0,forced:!c},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var r=M(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),n({target:"Object",stat:!0,forced:!c,sham:!s},{create:ut,defineProperty:ct,defineProperties:lt,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:ht,getOwnPropertySymbols:pt}),n({target:"Object",stat:!0,forced:u((function(){D.f(1)}))},{getOwnPropertySymbols:function(t){return D.f(m(t))}}),Y){var mt=!c||u((function(){var t=M();return"[null]"!=Y([t])||"{}"!=Y({a:t})||"{}"!=Y(Object(t))}));n({target:"JSON",stat:!0,forced:mt},{stringify:function(t,e,r){var n,o=[t],a=1;while(arguments.length>a)o.push(arguments[a++]);if(n=e,(h(e)||void 0!==t)&&!st(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!st(e))return e}),o[1]=e,Y.apply(null,o)}})}M[K][G]||F(M[K],G,M[K].valueOf),V(M,B),$[T]=!0},a630:function(t,e,r){var n=r("23e7"),o=r("4df4"),a=r("1c7e"),i=!a((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:i},{from:o})},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},b0c0:function(t,e,r){var n=r("83ab"),o=r("9bf2").f,a=Function.prototype,i=a.toString,s=/^\s*function ([^ (]*)/,c="name";n&&!(c in a)&&o(a,c,{configurable:!0,get:function(){try{return i.call(this).match(s)[1]}catch(t){return""}}})},d28b:function(t,e,r){var n=r("746f");n("iterator")},e01a:function(t,e,r){"use strict";var n=r("23e7"),o=r("83ab"),a=r("da84"),i=r("5135"),s=r("861d"),c=r("9bf2").f,l=r("e893"),u=a.Symbol;if(o&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var f={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new u(t):void 0===t?u():u(t);return""===t&&(f[e]=!0),e};l(d,u);var h=d.prototype=u.prototype;h.constructor=d;var p=h.toString,m="Symbol(test)"==String(u("test")),g=/^Symbol\((.*)\)[^)]+$/;c(h,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=p.call(t);if(i(f,t))return"";var r=m?e.slice(7,-1):e.replace(g,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:d})}},e538:function(t,e,r){var n=r("b622");e.f=n},efdd:function(t,e,r){"use strict";r("1747")},fb6a:function(t,e,r){"use strict";var n=r("23e7"),o=r("861d"),a=r("e8b5"),i=r("23cb"),s=r("50c4"),c=r("fc6a"),l=r("8418"),u=r("b622"),f=r("1dde"),d=f("slice"),h=u("species"),p=[].slice,m=Math.max;n({target:"Array",proto:!0,forced:!d},{slice:function(t,e){var r,n,u,f=c(this),d=s(f.length),g=i(t,d),b=i(void 0===e?d:e,d);if(a(f)&&(r=f.constructor,"function"!=typeof r||r!==Array&&!a(r.prototype)?o(r)&&(r=r[h],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return p.call(f,g,b);for(n=new(void 0===r?Array:r)(m(b-g,0)),u=0;g<b;g++,u++)g in f&&l(n,u,f[g]);return n.length=u,n}})}}]);
//# sourceMappingURL=roles.dfc53adf.js.map