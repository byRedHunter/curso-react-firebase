(this["webpackJsonpreact-firebase-slider"]=this["webpackJsonpreact-firebase-slider"]||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var c=a(2),s=a(1),n=a(14),r=a.n(n),i=(a(22),a(23),a(4)),l=(a(24),function(e){var t=e.setMedia,a=e.setLoading,n=Object(s.useState)(!1),r=Object(i.a)(n,2),l=r[0],o=r[1],u=Object(s.useState)(""),j=Object(i.a)(u,2),d=j[0],b=j[1],f=Object(s.useState)("drag__image"),O=Object(i.a)(f,2),m=O[0],g=O[1],v=Object(s.useState)(null),p=Object(i.a)(v,2),h=p[0],x=p[1],_=Object(s.useState)(null),N=Object(i.a)(_,2),S=N[0],D=N[1],w=["image/png","image/jpeg","image/jpg"],y=Object(s.useRef)(null),I=function(e){return e&&w.includes(e.type)?(o(!1),!0):(o(!0),b("File is incorrect"),x(""),!1)},k=function(e){var a=new FileReader;a.readAsDataURL(e),a.addEventListener("load",(function(e){x(e.target.result)})),D(e),t(e)};return Object(s.useEffect)((function(){setTimeout((function(){o(!1)}),5e3)}),[l]),Object(c.jsxs)("div",{className:"drag",children:[Object(c.jsx)("h2",{className:"drag__title",children:"Uploader your Image"}),Object(c.jsx)("div",{className:"drag__info",children:"Fire should be Jpeg, Png..."}),l&&Object(c.jsx)("div",{className:"drag__message",children:d}),Object(c.jsx)("input",{type:"file",name:"file",ref:y,onChange:function(e){var t=e.target.files[0];I(t)?k(t):D(null)}}),Object(c.jsxs)("div",{className:m,onDragOver:function(e){e.preventDefault(),g("drag__image active")},onDragLeave:function(e){e.preventDefault(),g("drag__image")},onClick:function(){y.current.click()},onDrop:function(e){e.preventDefault(),y.current.files=e.dataTransfer.files;var t=y.current.files[0];k(t)},children:[Object(c.jsx)("img",{src:h,alt:"",className:"drag__image--preview"}),Object(c.jsx)("span",{className:"drag__image--message",children:"Clic or Drag & Drop your image here."})]}),Object(c.jsx)("button",{className:"drag__action",onClick:function(){I(S)&&S?a(!0):(o(!0),b("Firt, upload an image."))},children:"Save Image"})]})}),o=a(16),u=a(11),j=a.n(u),d=a(15),b=a(9);a(35),a(26);b.a.initializeApp({apiKey:"AIzaSyA7GZlI1buhvfZcGiVJSEDdISvY3WyDYR4",authDomain:"slider-react-65431.firebaseapp.com",databaseURL:"https://slider-react-65431.firebaseio.com",projectId:"slider-react-65431",storageBucket:"slider-react-65431.appspot.com",messagingSenderId:"665974285349",appId:"1:665974285349:web:700b909e760f2366da4bcc"});var f=b.a.storage(),O=b.a.firestore(),m=b.a.firestore.FieldValue.serverTimestamp,g=function(e){var t=Object(s.useState)(0),a=Object(i.a)(t,2),c=a[0],n=a[1],r=Object(s.useState)(null),l=Object(i.a)(r,2),o=l[0],u=l[1],b=Object(s.useState)(null),g=Object(i.a)(b,2),v=g[0],p=g[1];return Object(s.useEffect)((function(){var t=f.ref(e.name),a=O.collection("images");t.put(e).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;n(t)}),(function(e){u(e)}),Object(d.a)(j.a.mark((function e(){var c,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDownloadURL();case 2:c=e.sent,s=m(),a.add({url:c,createdAt:s}),p(c);case 6:case"end":return e.stop()}}),e)}))))}),[e]),{progress:c,url:v,error:o}},v=(a(29),function(e){var t=e.file,a=e.setFile,n=e.setLoading,r=g(t),i=r.url,l=r.progress;return Object(s.useEffect)((function(){i&&(a(null),n(!1))}),[i,a,n]),Object(c.jsxs)("div",{className:"loader",children:[Object(c.jsx)("h3",{className:"loader__title",children:"Uploading..."}),Object(c.jsx)("div",{className:"loader__progress",children:Object(c.jsx)(o.a.div,{initial:{width:0},animate:{width:l+"%"},className:"loader__progress--bar"})})]})}),p=(a(30),function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),a=t[0],n=t[1],r=Object(s.useState)(null),o=Object(i.a)(r,2),u=o[0],j=o[1];return Object(c.jsx)("section",{className:"uploader",children:a?Object(c.jsx)(v,{file:u,setFile:j,setLoading:n}):Object(c.jsx)(l,{setMedia:j,setLoading:n})})}),h=(a(31),a(12)),x=function(e){var t=Object(s.useState)([]),a=Object(i.a)(t,2),c=a[0],n=a[1];return Object(s.useEffect)((function(){var t=O.collection(e).orderBy("createdAt","asc").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(h.a)(Object(h.a)({},e.data()),{},{id:e.id}))})),n(t)}));return function(){return t()}}),[e]),{docs:c}},_=function(e){var t=e.src;return Object(c.jsx)("img",{src:t,alt:"Slider Item"})},N=(a(32),function(){return Object(c.jsxs)("div",{className:"spinner",children:[Object(c.jsx)("div",{className:"dot1"}),Object(c.jsx)("div",{className:"dot2"})]})}),S=function(){var e=x("images").docs,t=Object(s.useState)([]),a=Object(i.a)(t,2),n=a[0],r=a[1],l=Object(s.useState)(null),o=Object(i.a)(l,2),u=o[0],j=o[1],d=Object(s.useState)(void 0),b=Object(i.a)(d,2),f=b[0],O=b[1];Object(s.useEffect)((function(){var t=[];e.map((function(e){var a=e.url;return t.push(a)})),r(t),j(t.length-1),O(t.length-1)}),[e]);return Object(c.jsxs)("section",{className:"slider",children:[Object(c.jsx)("h2",{className:"slider__title",children:"Your Images"}),Object(c.jsxs)("div",{className:"controls",children:[Object(c.jsx)("div",{className:"controls__item",onClick:function(){var e=u;e===f?e=0:e+=1,j(e)},children:Object(c.jsx)("i",{className:"arrow prev"})}),Object(c.jsx)("div",{className:"controls__item",onClick:function(){var e=u;0===e?e=f:e-=1,j(e)},children:Object(c.jsx)("i",{className:"arrow next"})})]}),Object(c.jsx)("div",{className:"slider__container",children:f>=0?Object(c.jsx)(_,{src:n[u]}):Object(c.jsx)(N,{})})]})},D=function(){return Object(c.jsx)("main",{className:"main",children:Object(c.jsxs)("div",{className:"main__container",children:[Object(c.jsx)(p,{}),Object(c.jsx)(S,{})]})})};r.a.render(Object(c.jsx)(D,{}),document.querySelector("#root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.5391d8e0.chunk.js.map