(this["webpackJsonpreact-drag-drop"]=this["webpackJsonpreact-drag-drop"]||[]).push([[0],{10:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t(1),c=t.n(n),d=t(3),i=t.n(d);t(9);var s=function(e){var a=function(e){e.preventDefault()};return Object(r.jsx)("div",{id:e.id,onDrop:function(e){e.preventDefault();var a=e.dataTransfer.getData("card_id"),t=document.getElementById(a);t.style.display="block",e.target.appendChild(t)},onDragOver:a,className:a,children:e.children})};var o=function(e){return Object(r.jsx)("div",{id:e.id,className:e.className,draggable:e.draggable,onDragStart:function(e){var a=e.target;e.dataTransfer.setData("card_id",a.id),setTimeout((function(){a.style.display="none"}),0)},onDragOver:function(e){e.stopPropagation()},children:e.children})};var l=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)("main",{className:"flexbox",children:[Object(r.jsx)(s,{id:"board-1",className:"board",children:Object(r.jsx)(o,{id:"card-1",className:"card",draggable:"true",children:Object(r.jsx)("p",{children:"Card one"})})}),Object(r.jsx)(s,{id:"board-2",className:"board",children:Object(r.jsx)(o,{id:"card-2",className:"card",draggable:"true",children:Object(r.jsx)("p",{children:"Card two"})})})]})})},u=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,11)).then((function(a){var t=a.getCLS,r=a.getFID,n=a.getFCP,c=a.getLCP,d=a.getTTFB;t(e),r(e),n(e),c(e),d(e)}))};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(l,{})}),document.getElementById("root")),u()},9:function(e,a,t){}},[[10,1,2]]]);
//# sourceMappingURL=main.42daf440.chunk.js.map