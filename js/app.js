(function(t){function e(e){for(var a,o,i=e[0],r=e[1],u=e[2],l=0,f=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&f.push(c[o][0]),c[o]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,i=1;i<n.length;i++){var r=n[i];0!==c[r]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},c={app:0},s=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],r=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var d=r;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0300":function(t,e,n){},"0e60":function(t,e,n){},"3b15":function(t,e,n){"use strict";n("78a9")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23");function c(t,e,n,c,s,o){var i=Object(a["i"])("TasksList"),r=Object(a["i"])("AddTaskButton");return Object(a["e"])(),Object(a["c"])("main",null,[Object(a["d"])(i,{class:"task-list",modelValue:s.tasks,"onUpdate:modelValue":[e[1]||(e[1]=function(t){return s.tasks=t}),o.onChange]},null,8,["modelValue","onUpdate:modelValue"]),Object(a["d"])(r,{class:"add-task-btn",onClicked:o.onNewTask},null,8,["onClicked"])])}var s=Object(a["m"])("data-v-0d46418a");Object(a["g"])("data-v-0d46418a");var o={class:"tasks-list"},i={class:"tasks-list__list"};Object(a["f"])();var r=s((function(t,e,n,c,s,r){var u=Object(a["i"])("TaskListItem");return Object(a["e"])(),Object(a["c"])("section",o,[Object(a["d"])("ul",i,[(Object(a["e"])(!0),Object(a["c"])(a["a"],null,Object(a["h"])(s.tasks,(function(t){return Object(a["e"])(),Object(a["c"])("li",{class:"tasks-list__item",key:t.id},[Object(a["d"])(u,{task:t,onChange:e[1]||(e[1]=function(t){return r.onChange(t)}),onDelete:e[2]||(e[2]=function(t){return r.onDelete(t)})},null,8,["task"])])})),128))])])})),u=(n("c740"),n("d81d"),n("a434"),Object(a["m"])("data-v-4387d2c5")),d=u((function(t,e,n,c,s,o){var i=Object(a["i"])("Checkbox"),r=Object(a["i"])("EditableText"),u=Object(a["i"])("DeleteButton");return Object(a["e"])(),Object(a["c"])("div",{id:"task_id_"+n.task.id,class:"task-list-item"},[Object(a["d"])(i,{class:"task-list-item__checkbox",modelValue:s.taskStatus,"onUpdate:modelValue":[e[1]||(e[1]=function(t){return s.taskStatus=t}),o.onChange]},null,8,["modelValue","onUpdate:modelValue"]),Object(a["d"])(r,{class:"task-list-item__text",modelValue:s.taskText,"onUpdate:modelValue":[e[2]||(e[2]=function(t){return s.taskText=t}),o.onChange]},null,8,["modelValue","onUpdate:modelValue"]),Object(a["d"])(u,{class:"task-list-item__delete-button",onDeleted:o.onDeleted},null,8,["onDeleted"])],8,["id"])})),l=Object(a["m"])("data-v-8ce7b862");Object(a["g"])("data-v-8ce7b862");var f={class:"checkbox"};Object(a["f"])();var b=l((function(t,e,n,c,s,o){return Object(a["e"])(),Object(a["c"])("div",f,[Object(a["d"])("input",{class:"checkbox__hidden-input",type:"checkbox",value:s.checked},null,8,["value"]),Object(a["d"])("span",{class:["checkbox__visible-input",o.getStateClass()],title:o.getTitle(),onClick:e[1]||(e[1]=function(t){return o.onClicked()})},Object(a["j"])(s.checked?"✔":" "),11,["title"])])})),k={name:"checkbox",props:{modelValue:{type:Boolean,required:!0,default:!1}},data:function(){return{checked:this.modelValue}},methods:{getTitle:function(){return this.checked?"mark task as undone":"mark task as done"},getStateClass:function(){return this.checked?"checkbox--checked":"checkbox--unchecked"},onClicked:function(){this.checked=!this.checked,this.$emit("update:modelValue",this.checked)}}};n("646d");k.render=b,k.__scopeId="data-v-8ce7b862";var h=k,p=Object(a["m"])("data-v-582eab61");Object(a["g"])("data-v-582eab61");var m={class:"editable-text"};Object(a["f"])();var v=p((function(t,e,n,c,s,o){return Object(a["e"])(),Object(a["c"])("div",m,[Object(a["l"])(Object(a["d"])("input",{class:"editable-text__input",type:"text","onUpdate:modelValue":e[1]||(e[1]=function(t){return s.text=t}),onChange:e[2]||(e[2]=function(){return o.emitChanges.apply(o,arguments)}),onBlur:e[3]||(e[3]=function(){return o.emitChanges.apply(o,arguments)})},null,544),[[a["k"],s.text]])])})),O={name:"EditableText",props:{modelValue:String},data:function(){return{text:this.modelValue,debounce:null}},methods:{emitChanges:function(){this.$emit("update:modelValue",this.text)}}};n("600a");O.render=v,O.__scopeId="data-v-582eab61";var j=O,g=Object(a["m"])("data-v-59d4fba4");Object(a["g"])("data-v-59d4fba4");var _={class:"delete-button"};Object(a["f"])();var x=g((function(t,e,n,c,s,o){return Object(a["e"])(),Object(a["c"])("div",_,[Object(a["d"])("button",{title:"delete task",class:"delete-button__button",onClick:e[1]||(e[1]=function(e){return t.$emit("deleted")})}," ✕ ")])})),y={name:"DeleteButton",emits:{deleted:null}};n("7e67");y.render=x,y.__scopeId="data-v-59d4fba4";var C=y,T={name:"TaskListItem",components:{Checkbox:h,EditableText:j,DeleteButton:C},props:{task:Object},emits:{change:null,delete:null},data:function(){return{taskStatus:this.task.done,taskText:this.task.text}},methods:{onChange:function(){this.taskText?this.$emit("change",{id:this.task.id,text:this.taskText,done:this.taskStatus}):this.onDeleted()},onDeleted:function(){this.$emit("delete",this.task.id)}}};n("7592");T.render=d,T.__scopeId="data-v-4387d2c5";var w=T,V={name:"TasksList",components:{TaskListItem:w},props:{modelValue:{type:Array,default:function(){return[]}}},data:function(){return{tasks:this.modelValue}},methods:{onChange:function(t){var e=void 0===t.id?-1:t.id;this.tasks=this.tasks.map((function(n){return n.id===e?{id:n.id,text:t.text,done:t.done}:n})),this.emitChanges()},onDelete:function(t){var e=t;if(void 0!==e){var n=this.tasks.findIndex((function(t){return t.id===e}));-1!==n&&(this.tasks.splice(n,1),this.emitChanges())}},emitChanges:function(){this.$emit("update:modelValue",this.tasks)}}};n("c862");V.render=r,V.__scopeId="data-v-0d46418a";var I=V,S=Object(a["m"])("data-v-56f7d93c"),D=S((function(t,e,n,c,s,o){return Object(a["e"])(),Object(a["c"])("section",{class:"add-task-section-container",title:"Add task button",onClick:e[1]||(e[1]=function(e){return t.$emit("clicked")})}," + New task ")})),N={name:"AddTaskButton",emits:{clicked:null}};n("3b15");N.render=D,N.__scopeId="data-v-56f7d93c";var B=N,E=n("5530"),L="suru:tasks-storage",P="suru:configs";function U(t){var e=F(),n=JSON.stringify(t);e.setItem(L,n)}function $(){var t=F(),e=t.getItem(L);try{return JSON.parse(e)||[]}catch(n){return[]}}function A(){var t=J(),e=t&&void 0!==t.lastId?t.lastId:1;return M(Object(E["a"])(Object(E["a"])({},t),{},{lastId:e+1})),e}function J(){var t=F(),e=t.getItem(P);try{return JSON.parse(e)}catch(n){return{}}}function M(t){var e=F(),n=JSON.stringify(t);e.setItem(P,n)}function F(){if(window.localStorage)return window.localStorage;throw new Error("Local storage not available on this browser")}var W={name:"App",components:{TasksList:I,AddTaskButton:B},data:function(){return{tasks:[]}},created:function(){var t=this;this.tasks=$(),document.onkeyup=function(e){var n=e.key,a=e.code;"Enter"===a&&n===a&&t.onNewTask()}},methods:{onChange:function(){U(this.tasks)},onNewTask:function(){var t=A();this.tasks.push({id:t,text:"",done:!1}),this.setFocusOnNewTask(t)},setFocusOnNewTask:function(t){setTimeout((function(){var e=document.getElementById("task_id_"+t),n=e.getElementsByClassName("editable-text__input")[0];n.focus()}),50)}}};n("64be");W.render=c;var q=W;"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("./service-worker.js")})),Object(a["b"])(q).mount("#app")},"5c13":function(t,e,n){},"600a":function(t,e,n){"use strict";n("0300")},"646d":function(t,e,n){"use strict";n("5c13")},"64be":function(t,e,n){"use strict";n("c894")},7592:function(t,e,n){"use strict";n("0e60")},"78a9":function(t,e,n){},"7e67":function(t,e,n){"use strict";n("8862")},8862:function(t,e,n){},c68a:function(t,e,n){},c862:function(t,e,n){"use strict";n("c68a")},c894:function(t,e,n){}});
//# sourceMappingURL=app.js.map