(this.webpackJsonpclock=this.webpackJsonpclock||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c(4),n=c.n(a),r=(c(9),c(2)),d=(c(10),c(0)),l=function(){var e=Object(s.useState)("0"),t=Object(r.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)("0"),l=Object(r.a)(n,2),b=l[0],i=l[1],j=Object(s.useState)("0"),m=Object(r.a)(j,2),u=m[0],o=m[1],y=function(){var e=new Date,t=e.getSeconds()/60,c=(t+e.getMinutes())/60,s=(c+e.getHours()%12||12)/12;o(360*t),i(360*c),a(360*s)};return Object(s.useEffect)((function(){setInterval(y,1e3)}),[]),Object(d.jsxs)("div",{className:"clock-container",children:[Object(d.jsxs)("div",{className:"clock",children:[Object(d.jsx)("div",{className:"hand hour-hand",style:{"--rotateBy":"".concat(c,"deg")}}),Object(d.jsx)("div",{className:"hand minute-hand",style:{"--rotateBy":"".concat(b,"deg")}}),Object(d.jsx)("div",{className:"hand second-hand",style:{"--rotateBy":"".concat(u,"deg")}}),Object(d.jsx)("div",{className:"number",style:{"--rotateBy":"0deg","--number":12},children:"12"}),Object(d.jsx)("div",{className:"number",style:{"--rotateBy":"30deg","--number":1},children:"1"}),Object(d.jsx)("div",{className:"number",style:{"--rotateBy":"60deg","--number":2},children:"2"}),Object(d.jsx)("div",{className:"number",style:{"--rotateBy":"90deg","--number":3},children:"3"}),Object(d.jsx)("div",{className:"number",style:{"--rotateBy":"120deg","--number":4},children:"4"}),Object(d.jsx)("div",{className:"number",style:{"--rotateBy":"150deg","--number":5},children:"5"}),Object(d.jsx)("div",{className:"number",style:{"--rotateBy":"180deg","--number":6},children:"6"}),Object(d.jsx)("div",{className:"number",style:{"--rotateBy":"210deg","--number":7},children:"7"}),Object(d.jsx)("div",{className:"number",style:{"--rotateBy":"240deg","--number":8},children:"8"}),Object(d.jsx)("div",{className:"number",style:{"--rotateBy":"270deg","--number":9},children:"9"}),Object(d.jsx)("div",{className:"number",style:{"--rotateBy":"300deg","--number":10},children:"10"}),Object(d.jsx)("div",{className:"number",style:{"--rotateBy":"330deg","--number":11},children:"11"})]}),Object(d.jsx)("div",{className:"digital-time",children:(new Date).toLocaleTimeString()})]})};var b=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(l,{})})};n.a.render(Object(d.jsx)(b,{}),document.getElementById("root"))},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.d52e9a46.chunk.js.map