(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["goodsAdd"],{1276:function(e,t,a){"use strict";var r=a("d784"),o=a("44e7"),s=a("825a"),n=a("1d80"),i=a("4840"),l=a("8aa5"),c=a("50c4"),d=a("14c3"),u=a("9263"),p=a("9f7f"),m=p.UNSUPPORTED_Y,g=[].push,b=Math.min,f=4294967295;r("split",2,(function(e,t,a){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,a){var r=String(n(this)),s=void 0===a?f:a>>>0;if(0===s)return[];if(void 0===e)return[r];if(!o(e))return t.call(r,e,s);var i,l,c,d=[],p=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),m=0,b=new RegExp(e.source,p+"g");while(i=u.call(b,r)){if(l=b.lastIndex,l>m&&(d.push(r.slice(m,i.index)),i.length>1&&i.index<r.length&&g.apply(d,i.slice(1)),c=i[0].length,m=l,d.length>=s))break;b.lastIndex===i.index&&b.lastIndex++}return m===r.length?!c&&b.test("")||d.push(""):d.push(r.slice(m)),d.length>s?d.slice(0,s):d}:"0".split(void 0,0).length?function(e,a){return void 0===e&&0===a?[]:t.call(this,e,a)}:t,[function(t,a){var o=n(this),s=void 0==t?void 0:t[e];return void 0!==s?s.call(t,o,a):r.call(String(o),t,a)},function(e,o){var n=a(r,e,this,o,r!==t);if(n.done)return n.value;var u=s(e),p=String(this),g=i(u,RegExp),h=u.unicode,v=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(m?"g":"y"),_=new g(m?"^(?:"+u.source+")":u,v),x=void 0===o?f:o>>>0;if(0===x)return[];if(0===p.length)return null===d(_,p)?[p]:[];var w=0,D=0,F=[];while(D<p.length){_.lastIndex=m?0:D;var y,k=d(_,m?p.slice(D):p);if(null===k||(y=b(c(_.lastIndex+(m?D:0)),p.length))===w)D=l(p,D,h);else{if(F.push(p.slice(w,D)),F.length===x)return F;for(var $=1;$<=k.length-1;$++)if(F.push(k[$]),F.length===x)return F;D=w=y}}return F.push(p.slice(w)),F}]}),m)},"159b":function(e,t,a){var r=a("da84"),o=a("fdbc"),s=a("17c2"),n=a("9112");for(var i in o){var l=r[i],c=l&&l.prototype;if(c&&c.forEach!==s)try{n(c,"forEach",s)}catch(d){c.forEach=s}}},"17c2":function(e,t,a){"use strict";var r=a("b727").forEach,o=a("a640"),s=o("forEach");e.exports=s?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},"44e7":function(e,t,a){var r=a("861d"),o=a("c6b6"),s=a("b622"),n=s("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[n])?!!t:"RegExp"==o(e))}},"4f9b":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/welcome"}}},[e._v("首页")]),a("el-breadcrumb-item",[e._v("商品管理")]),a("el-breadcrumb-item",[e._v("添加商品")])],1),a("el-card",[a("el-alert",{attrs:{title:"添加商品信息",type:"info",center:"","show-icon":"",closable:!1}}),a("el-steps",{attrs:{space:200,active:Number(e.activeIndex),"finish-status":"success","align-center":""}},[a("el-step",{attrs:{title:"基本信息"}}),a("el-step",{attrs:{title:"商品参数"}}),a("el-step",{attrs:{title:"商品属性"}}),a("el-step",{attrs:{title:"商品图片"}}),a("el-step",{attrs:{title:"商品内容"}}),a("el-step",{attrs:{title:"完成"}})],1),a("el-form",{ref:"addFormRef",attrs:{model:e.addFormData,rules:e.addFormRules,"label-position":"top"}},[a("el-tabs",{attrs:{"tab-position":"left","before-leave":e.beforeTabLeave},on:{"tab-click":e.handleTabClicked},model:{value:e.activeIndex,callback:function(t){e.activeIndex=t},expression:"activeIndex"}},[a("el-tab-pane",{attrs:{label:"基本信息",name:"0"}},[a("el-form-item",{attrs:{label:"商品名称",prop:"goods_name"}},[a("el-input",{model:{value:e.addFormData.goods_name,callback:function(t){e.$set(e.addFormData,"goods_name",t)},expression:"addFormData.goods_name"}})],1),a("el-form-item",{attrs:{label:"商品价格",prop:"goods_price"}},[a("el-input",{model:{value:e.addFormData.goods_price,callback:function(t){e.$set(e.addFormData,"goods_price",t)},expression:"addFormData.goods_price"}})],1),a("el-form-item",{attrs:{label:"商品重量",prop:"goods_weight"}},[a("el-input",{model:{value:e.addFormData.goods_weight,callback:function(t){e.$set(e.addFormData,"goods_weight",t)},expression:"addFormData.goods_weight"}})],1),a("el-form-item",{attrs:{label:"商品数量",prop:"goods_number"}},[a("el-input",{model:{value:e.addFormData.goods_number,callback:function(t){e.$set(e.addFormData,"goods_number",t)},expression:"addFormData.goods_number"}})],1),a("el-form-item",{attrs:{label:"商品分类",prop:"goods_cat"}},[a("el-cascader",{attrs:{options:e.cateList,props:e.cascaderProps,clearable:""},on:{change:e.handleCateChanged},model:{value:e.addFormData.goods_cat,callback:function(t){e.$set(e.addFormData,"goods_cat",t)},expression:"addFormData.goods_cat"}})],1)],1),a("el-tab-pane",{attrs:{label:"商品参数",name:"1"}},e._l(e.manyTableData,(function(t){return a("el-form-item",{key:t.attr_id,attrs:{label:t.attr_name}},[a("el-checkbox-group",{model:{value:t.attr_vals,callback:function(a){e.$set(t,"attr_vals",a)},expression:"item.attr_vals"}},e._l(t.attr_vals,(function(e,t){return a("el-checkbox",{key:t,attrs:{label:e,border:"",size:"mini"}})})),1)],1)})),1),a("el-tab-pane",{attrs:{label:"商品属性",name:"2"}},e._l(e.onlyTableData,(function(t){return a("el-form-item",{key:t.attr_id,attrs:{label:t.attr_name}},[a("el-input",{model:{value:t.attr_vals,callback:function(a){e.$set(t,"attr_vals",a)},expression:"item.attr_vals"}})],1)})),1),a("el-tab-pane",{attrs:{label:"商品图片",name:"3"}},[a("el-upload",{attrs:{action:e.uploadUrl,headers:e.uploadHeader,"list-type":"picture","on-success":e.handleUploadSuccess,"on-preview":e.handlePreview,"on-remove":e.handleRemove}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")])],1)],1),a("el-tab-pane",{attrs:{label:"商品内容",name:"4"}},[a("quill-editor",{model:{value:e.addFormData.goods_introduce,callback:function(t){e.$set(e.addFormData,"goods_introduce",t)},expression:"addFormData.goods_introduce"}}),a("el-button",{staticClass:"goods-add-btn",attrs:{type:"primary"},on:{click:e.addGoods}},[e._v("添加商品")])],1)],1)],1)],1),a("el-dialog",{attrs:{title:"图片预览",visible:e.previewDialogVisible,width:"50%"},on:{"update:visible":function(t){e.previewDialogVisible=t}}},[a("img",{staticClass:"preview-img",attrs:{src:e.previewUrl,alt:"preview"}})])],1)},o=[],s=a("1da1"),n=(a("159b"),a("ac1f"),a("1276"),a("4de4"),a("a15b"),a("fb6a"),a("96cf"),{data:function(){return{activeIndex:"0",addFormData:{goods_name:"",goods_price:0,goods_weight:0,goods_number:0,goods_cat:[],pics:[],goods_introduce:"",attrs:[]},addFormRules:{goods_name:[{required:!0,message:"请输入商品名称",trigger:"blur"}],goods_price:[{required:!0,message:"请输入商品价格",trigger:"blur"}],goods_weight:[{required:!0,message:"请输入商品重量",trigger:"blur"}],goods_number:[{required:!0,message:"请输入商品数量",trigger:"blur"}],goods_cat:[{required:!0,message:"请选择商品分类",trigger:"blur"}]},cateList:[],cascaderProps:{value:"cat_id",label:"cat_name",children:"children",expandTrigger:"hover"},manyTableData:[],onlyTableData:[],uploadUrl:"http://www.ysqorz.top:8888/api/private/v1/upload",uploadHeader:{Authorization:window.sessionStorage.getItem("token")},previewUrl:"",previewDialogVisible:!1}},created:function(){this.getCateList()},methods:{getCateList:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.get("/categories",{params:{type:3}});case 2:if(a=t.sent,r=a.data,200===r.meta.status){t.next=6;break}return t.abrupt("return",e.$message.error(r.meta.msg));case 6:e.cateList=r.data;case 7:case"end":return t.stop()}}),t)})))()},handleCateChanged:function(){3===this.addFormData.goods_cat.length||(this.addFormData.goods_cat=[])},beforeTabLeave:function(e,t){if("0"===t&&3!==this.addFormData.goods_cat.length)return this.$message.error("请先选择商品分类！"),!1},handleTabClicked:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,r,o,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:t.t0=e.activeIndex,t.next="1"===t.t0?3:"2"===t.t0?12:20;break;case 3:return t.next=5,e.$axios.get("/categories/".concat(e.cateId,"/attributes/"),{params:{sel:"many"}});case 5:if(a=t.sent,r=a.data,200===r.meta.status){t.next=9;break}return t.abrupt("return",e.$message.error(r.meta.msg));case 9:return r.data.forEach((function(e){e.attr_vals=e.attr_vals?e.attr_vals.split(" "):[],e.inputVisible=!1,e.inputValue=""})),e.manyTableData=r.data,t.abrupt("break",20);case 12:return t.next=14,e.$axios.get("/categories/".concat(e.cateId,"/attributes/"),{params:{sel:"only"}});case 14:if(o=t.sent,s=o.data,200===s.meta.status){t.next=18;break}return t.abrupt("return",e.$message.error(s.meta.msg));case 18:return e.onlyTableData=s.data,t.abrupt("break",20);case 20:case"end":return t.stop()}}),t)})))()},handleUploadSuccess:function(e){this.addFormData.pics.push({pic:e.data.tmp_path})},handleRemove:function(e){var t=e.response.data.tmp_path;this.addFormData.pics=this.addFormData.pics.filter((function(e){return e.pic!==t}))},handlePreview:function(e){this.previewUrl=this.uploadUrl.split("/").slice(0,-4).join("/")+"/"+e.response.data.url.split("/").slice(-2).join("/"),this.previewDialogVisible=!0},addGoods:function(){var e=this;this.$refs.addFormRef.validate(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(a){var r,o,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a){t.next=2;break}return t.abrupt("return",e.$message.error("请填写必要的表单项！"));case 2:return r=e.$_.cloneDeep(e.addFormData),r.goods_cat=r.goods_cat.join(","),e.manyTableData.forEach((function(t){e.addFormData.attrs.push({attr_id:t.attr_id,attr_value:t.attr_vals.join(" ")})})),e.onlyTableData.forEach((function(t){e.addFormData.attrs.push({attr_id:t.attr_id,attr_value:t.attr_vals})})),r.attrs=e.addFormData.attrs,t.next=9,e.$axios.post("/goods",r);case 9:if(o=t.sent,s=o.data,201===s.meta.status){t.next=13;break}return t.abrupt("return",e.$message.error(s.meta.msg));case 13:e.$message.success(s.meta.msg),e.$router.push("/goods");case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},computed:{cateId:function(){return 3===this.addFormData.goods_cat.length?this.addFormData.goods_cat[2]:null}}}),i=n,l=(a("b30e"),a("2877")),c=Object(l["a"])(i,r,o,!1,null,"204a73f9",null);t["default"]=c.exports},"799b":function(e,t,a){},a15b:function(e,t,a){"use strict";var r=a("23e7"),o=a("44ad"),s=a("fc6a"),n=a("a640"),i=[].join,l=o!=Object,c=n("join",",");r({target:"Array",proto:!0,forced:l||!c},{join:function(e){return i.call(s(this),void 0===e?",":e)}})},a640:function(e,t,a){"use strict";var r=a("d039");e.exports=function(e,t){var a=[][e];return!!a&&r((function(){a.call(null,t||function(){throw 1},1)}))}},b30e:function(e,t,a){"use strict";a("799b")},fb6a:function(e,t,a){"use strict";var r=a("23e7"),o=a("861d"),s=a("e8b5"),n=a("23cb"),i=a("50c4"),l=a("fc6a"),c=a("8418"),d=a("b622"),u=a("1dde"),p=u("slice"),m=d("species"),g=[].slice,b=Math.max;r({target:"Array",proto:!0,forced:!p},{slice:function(e,t){var a,r,d,u=l(this),p=i(u.length),f=n(e,p),h=n(void 0===t?p:t,p);if(s(u)&&(a=u.constructor,"function"!=typeof a||a!==Array&&!s(a.prototype)?o(a)&&(a=a[m],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return g.call(u,f,h);for(r=new(void 0===a?Array:a)(b(h-f,0)),d=0;f<h;f++,d++)f in u&&c(r,d,u[f]);return r.length=d,r}})}}]);
//# sourceMappingURL=goodsAdd.27489856.js.map