(function(t){function e(e){for(var o,a,c=e[0],r=e[1],d=e[2],l=0,f=[];l<c.length;l++)a=c[l],i[a]&&f.push(i[a][0]),i[a]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,d||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,c=1;c<n.length;c++){var r=n[c];0!==i[r]&&(o=!1)}o&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},i={app:0},s=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var u=r;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0916":function(t,e,n){"use strict";var o=n("712a"),i=n.n(o);i.a},"1d2c":function(t,e,n){"use strict";var o=n("edfe"),i=n.n(o);i.a},"21ae":function(t,e,n){"use strict";var o=n("8ed5"),i=n.n(o);i.a},"555a":function(t,e,n){"use strict";var o=n("ff1d"),i=n.n(o);i.a},"56d7":function(t,e,n){"use strict";n.r(e);var o={};n.r(o),n.d(o,"getTodo",function(){return Q}),n.d(o,"updateMenu",function(){return V});var i={};n.r(i),n.d(i,"getTodoList",function(){return W});n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},c=[],r=n("2877"),d={},u=Object(r["a"])(d,a,c,!1,null,null,null),l=u.exports,f=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container"},[n("section",{staticClass:"menu"},[n("menus")],1),n("section",{staticClass:"content"},[n("todo")],1)])},m=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list-todos"},[t._l(t.todoList,function(e,o){return n("a",{key:o,staticClass:"list-todo",class:{active:e.id===t.todoId},on:{click:function(n){return t.goList(e.id)}}},[e.locked?n("i",{staticClass:"fas fa-lock icon-lock"}):t._e(),t._v("\n    "+t._s(e.title)+"\n    "),e.count>0?n("span",{staticClass:"count"},[t._v(t._s(e.count))]):t._e()])}),n("a",{staticClass:"list-new",on:{click:t.addTodoList}},[n("i",{staticClass:"fas fa-plus icon-plus"}),t._v("\n    新增\n  ")])],2)},v=[],k=n("bc3a"),g=n.n(k),x=function(t){return g.a.get("/todo/list",{params:t})},w=function(t){return g.a.get("/todo/listId",{params:t})},y=function(t){return g.a.post("/todo/addRecord",t).then(function(t){return t.data})},b=function(t){return g.a.post("/todo/editTodo",t).then(function(t){return t.data})},C=function(t){return g.a.post("/todo/editRecord",t).then(function(t){return t.data})},_=function(t){return g.a.post("/todo/addTodo",t).then(function(t){return t.data})},T=n("5118"),O={data:function(){return{todoId:"",todoNum:0}},created:function(){var t=this;this.$store.dispatch("getTodo").then(function(){t.$nextTick(function(){t.goList(t.todoList[0].id)})})},computed:{todoList:function(){var t=this.$store.getters.getTodoList.length;return t<this.todoNum&&this.goList(this.$store.getTodoList[0].id),this.$store.getters.getTodoList}},watch:{todoId:function(t){this.$router.push({name:"todo",params:{id:t}})}},methods:{goList:function(t){this.todoId=t},addTodoList:function(){var t=this;_({}).then(function(e){t.$store.dispatch("getTodo").then(function(){t.$nextTick(function(){Object(T["setTimeout"])(function(){t.goList(t.todoList[t.todoList.length-1].id)},100)})})})}}},D=O,$=(n("21ae"),Object(r["a"])(D,h,v,!1,null,null,null)),L=$.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:!t.todo.isDelete,expression:"!todo.isDelete"}],staticClass:"page list-show"},[n("nav",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isUpdate,expression:"isUpdate"}],staticClass:"nav-group"},[t._m(0)]),n("h1",{directives:[{name:"show",rawName:"v-show",value:!t.isUpdate,expression:"!isUpdate"}],staticClass:"todo-title",on:{click:function(e){t.isUpdate=!0}}},[n("span",{staticClass:"title-wrapper"},[t._v(t._s(t.todo.title))]),n("span",{staticClass:"count"},[t._v(t._s(t.todo.count||0))])]),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isUpdate,expression:"!isUpdate"}],staticClass:"nav-group right"},[n("div",{staticClass:"options"},[n("a",{staticClass:"nav-item",on:{click:t.onLock}},[t.todo.locked?n("i",{staticClass:"fas fa-lock icon-lock"}):n("i",{staticClass:"fas fa-lock-open icon-unlock"})]),n("a",{staticClass:"nav-item"},[n("i",{staticClass:"fas fa-trash icon-trash",on:{click:t.onDelete}})])])]),n("div",{staticClass:"form todo-new input-symbol"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text",disabled:t.todo.locked,placeholder:"请输入。。。"},domProps:{value:t.text},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onAdd(e)},input:function(e){e.target.composing||(t.text=e.target.value)}}}),n("i",{staticClass:"fas fa-plus-circle icon-add"})])]),n("div",{staticClass:"content-scrollable list-items"},t._l(t.items,function(e,o){return n("div",{key:o},[n("item",{attrs:{item:e,index:o,id:t.todo.id,init:t.init,locked:t.todo.locked}})],1)}),0)])},N=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"nav-item"},[n("i",{staticClass:"fas fa-list"})])}],j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:!t.item.isDelete,expression:"!item.isDelete"}],staticClass:"list-item editing",class:{checked:t.item.checked}},[n("label",{staticClass:"checkbox"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.item.checked,expression:"item.checked"}],attrs:{type:"checkbox",disabled:t.locked},domProps:{checked:Array.isArray(t.item.checked)?t._i(t.item.checked,null)>-1:t.item.checked},on:{change:[function(e){var n=t.item.checked,o=e.target,i=!!o.checked;if(Array.isArray(n)){var s=null,a=t._i(n,s);o.checked?a<0&&t.$set(t.item,"checked",n.concat([s])):a>-1&&t.$set(t.item,"checked",n.slice(0,a).concat(n.slice(a+1)))}else t.$set(t.item,"checked",i)},t.onChange]}}),n("i",{staticClass:"fas fa-check checkbox-custom"})]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.item.text,expression:"item.text"}],attrs:{type:"text",placeholder:"写点什么。。。",disabled:t.item.checked||t.locked},domProps:{value:t.item.text},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onChange(e)},input:function(e){e.target.composing||t.$set(t.item,"text",e.target.value)}}}),t.item.checked&&!t.locked?n("a",{staticClass:"delete-item",on:{click:function(e){t.item.isDelete=!0,t.onChange()}}},[n("i",{staticClass:"fas fa-trash icon-trash"})]):t._e()])},E=[],U={props:{item:{type:Object,default:function(){return{checked:!1,text:"Hello world",isDelete:!1}}},index:{},id:{},init:{},locked:{}},methods:{onChange:function(){var t=this;C({id:this.id,record:this.item,index:this.index}).then(function(e){t.init(),t.$store.dispatch("getTodo")})}}},R=U,S=(n("0916"),Object(r["a"])(R,j,E,!1,null,null,null)),I=S.exports,M={components:{item:I},data:function(){return{todo:{},items:[],text:"",isUpdate:!1}},created:function(){this.init()},watch:{"$route.params.id":function(){this.init()}},methods:{init:function(){var t=this,e=this.$route.params.id;w({id:e}).then(function(e){var n=e.data.todo,o=n.id,i=n.title,s=n.count,a=n.isDelete,c=n.locked,r=n.record;t.items=r,t.todo={id:o,title:i,count:s,locked:c,isDelete:a}})},onLock:function(){this.todo.locked=!this.todo.locked},onAdd:function(){var t=this,e=this.$route.params.id;y({id:e,text:this.text}).then(function(e){t.text="",t.init()})},onDelete:function(){this.todo.isDelete=!0,this.updateTodo()},updateTodo:function(){var t=this;b({todo:this.todo}).then(function(e){t.$store.dispatch("getTodo")})},updateTitle:function(){this.updateTodo(),this.isUpdate=!1}}},A=M,J=(n("555a"),Object(r["a"])(A,P,N,!1,null,null,null)),G=J.exports,H={components:{menus:L,todo:G}},q=H,z=(n("1d2c"),Object(r["a"])(q,p,m,!1,null,null,null)),B=z.exports;s["a"].use(f["a"]);var F=new f["a"]({routes:[{path:"/",name:"layout",component:B,children:[{path:"todo/:id",name:"todo",component:G}]}]}),K=n("2f62"),Q=function(t){var e=t.commit;return new Promise(function(t){x().then(function(n){e("EDITTODO",n.data.todos),t()})})},V=function(t){var e=t.commit;e("MENUOPEN")},W=function(t){return t.todoList};s["a"].use(K["a"]);for(var X={todoList:[],menuOpen:!1},Y={EDITTODO:function(t,e){t.todoList=e},MENUOPEN:function(t){t.menuOpen=!t.menuOpen}},Z=new K["a"].Store({actions:o,getters:i,state:X,mutations:Y}),tt=(n("7514"),n("94db")),et=n.n(tt),nt=n("96eb"),ot=n.n(nt),it=[],st=[1,2,3,4,5],at=0;at<st.length;at++)it.push(ot.a.mock({id:ot.a.Random.guid(),title:ot.a.Random.first(),isDelete:!1,locked:ot.a.Random.boolean(),record:st.map(function(){return{text:ot.a.Random.cparagraph(2),isDelete:!1,checked:ot.a.Random.boolean()}})}));var ct={start:function(){var t=new et.a(g.a);t.onGet("/todo/list").reply(function(t){var e=it.map(function(t){return{id:t.id,title:t.title,count:t.record.filter(function(t){return!1===t.checked}).length,locked:t.locked,isDelete:t.isDelete}}).filter(function(t){return!0!==t.isDelete});return new Promise(function(t,n){setTimeout(function(){t([200,{todos:e}])},200)})}),t.onPost("/todo/addTodo").reply(function(t){return it.push({id:ot.a.Random.guid(),title:"newList",isDelete:!1,locked:!1,record:[]}),new Promise(function(t,e){setTimeout(function(){t([200])},200)})}),t.onGet("/todo/listId").reply(function(t){var e=t.params.id,n=it.find(function(t){return e&&t.id===e});return n.count=n.record.filter(function(t){return!1===t.checked}).length,new Promise(function(t,e){setTimeout(function(){t([200,{todo:n}])},200)})}),t.onPost("/todo/addRecord").reply(function(t){var e=JSON.parse(t.data),n=e.id,o=e.text;return it.some(function(t,e){if(t.id===n)return t.record.push({text:o,isDelete:!1,checked:!1}),!0}),new Promise(function(t,e){setTimeout(function(){t([200])},200)})}),t.onPost("/todo/editTodo").reply(function(t){var e=JSON.parse(t.data),n=e.todo;return it.some(function(t,e){if(t.id===n.id)return t.title=n.title,t.locked=n.locked,t.isDelete=n.isDelete,!0}),new Promise(function(t,e){setTimeout(function(){t([200])},200)})}),t.onPost("/todo/editRecord").reply(function(t){var e=JSON.parse(t.data),n=e.id,o=e.record,i=e.index;return it.some(function(t){if(t.id===n)return t.record[i]=o,!0}),new Promise(function(t,e){setTimeout(function(){t([200])},200)})})}},rt=ct;rt.start(),s["a"].config.productionTip=!1,new s["a"]({router:F,store:Z,render:function(t){return t(l)}}).$mount("#app")},"712a":function(t,e,n){},"8ed5":function(t,e,n){},edfe:function(t,e,n){},ff1d:function(t,e,n){}});
//# sourceMappingURL=app.3281b187.js.map