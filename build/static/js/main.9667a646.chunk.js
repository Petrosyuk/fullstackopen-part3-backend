(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(8),a=n.n(c),r=n(17),i=n(3),o=n(1),u=n(0),s=function(e){var t=e.inputText,n=e.inputValueState,c=e.onChangeHandler;return Object(u.jsxs)("div",{children:[" ",t," ",Object(u.jsx)("input",{value:n,onChange:c})," "]})},l=function(e){var t=e.displayedPersons,n=e.deletePersonApiFunc;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Numbers"}),Object(u.jsx)("table",{children:Object(u.jsxs)("tbody",{children:[Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Name:"}),Object(u.jsx)("th",{children:"Number:"})]}),t.map((function(e){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:e.name}),Object(u.jsx)("td",{children:e.number}),Object(u.jsx)("td",{children:Object(u.jsx)("button",{onClick:function(){return n(e.id)},children:"delete"})})]},e.id)}))]})})]})},d=function(e){var t=e.addPerson,n=e.newName,c=e.handleNewName,a=e.newTel,r=e.handleNewTel;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("form",{onSubmit:t,autoComplete:"off",children:[Object(u.jsxs)("div",{children:["name: ",Object(u.jsx)("input",{value:n,onChange:c})]}),Object(u.jsxs)("div",{children:["tel: ",Object(u.jsx)("input",{value:a,onChange:r})]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{type:"submit",children:"add"})})]})})},j=n(5),b=n.n(j),h="./api/persons",f=function(){return b.a.get(h)},O=function(e){return b.a.post(h,e)},m=function(e){return b.a.delete("".concat(h,"/").concat(e))},x=function(e){b.a.patch("".concat(h,"/").concat(e.id),e)},v=function(e){var t=e.notificationMessage;return null===t?null:Object(u.jsx)("div",{className:"error",children:t})},p=function(e){var t=e.notificationMessage;return null===t?null:Object(u.jsx)("div",{className:"notification",children:t})},g=(n(41),function(){var e=Object(o.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],a=Object(o.useState)(n),j=Object(i.a)(a,2),b=j[0],h=j[1],g=Object(o.useState)(null),w=Object(i.a)(g,2),N=w[0],S=w[1],C=Object(o.useState)(null),k=Object(i.a)(C,2),y=k[0],P=k[1],T=Object(o.useState)(""),M=Object(i.a)(T,2),E=M[0],A=M[1],D=Object(o.useState)(""),F=Object(i.a)(D,2),V=F[0],H=F[1],J=Object(o.useState)(""),L=Object(i.a)(J,2),B=L[0],I=L[1];Object(o.useEffect)((function(){f().then((function(e){c(e.data),h(e.data)}))}),[]);var R=function(e,t){e(t),setTimeout((function(){return e(null)}),2300)};return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Phonebook"}),Object(u.jsx)(s,{inputText:"Search",inputValueState:B,onChangeHandler:function(e){I(e.target.value);var t=n.filter((function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())}));t&&h(t)}}),Object(u.jsx)(p,{notificationMessage:N}),Object(u.jsx)(v,{notificationMessage:y}),Object(u.jsx)("h3",{children:"Add a new"}),Object(u.jsx)(d,{addPerson:function(e){e.preventDefault();var t={name:E,number:V},a=n.filter((function(e){return e.name===E}));if(a.length)if(a[0].number!==V){if(window.confirm("".concat(a[0].name," already added to the phone book, replace the old number with the new one?"))){var i=a[0];i.number=V,console.log(i),x(i),A(""),H("")}}else R(P,"".concat(t.name," is already on the list!"));a.length||(O(t).then((function(e){console.log(e.data),h(Object(r.a)(e.data)),c([e.data]),A(""),H("")})),R(S,"".concat(t.name," has been added!")))},newName:E,handleNewName:function(e){A(e.target.value)},newTel:V,handleNewTel:function(e){H(e.target.value)}}),Object(u.jsx)(l,{displayedPersons:b,deletePersonApiFunc:function(e){var t=n.filter((function(t){return t.id===e}))[0];window.confirm("Delete ".concat(t.name," from the reccord?"))&&m(e).then((function(){var t=b.filter((function(t){return t.id!==e}));h(t),R(S,"REMOVED")})).catch((function(e){return R(P,e.message)}))}})]})});a.a.render(Object(u.jsx)(g,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.9667a646.chunk.js.map