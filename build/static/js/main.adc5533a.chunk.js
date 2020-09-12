(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(37)},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(14),u=t.n(o),c=t(4),l=t(2),i=function(e){var n=e.addName,t=e.newName,a=e.newNumber,o=e.handleNameChange,u=e.handleNumberChange;return r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:t,onChange:o})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:a,onChange:u})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},m=function(e){var n=e.persons,t=e.filter,a=e.deletePerson,o=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return r.a.createElement(r.a.Fragment,null,o.map((function(e){return r.a.createElement("p",{key:e.id},e.name," ",e.number,"\xa0",r.a.createElement("button",{onClick:function(){return a(e)}},"delete"))})))},d=function(e){var n=e.handleFilterChange;return r.a.createElement("div",null,"filter shown with",r.a.createElement("input",{onChange:n}))},f=t(3),h=t.n(f),s="http://localhost:3001/persons/",b=function(){return h.a.get(s).then((function(e){return e.data}))},p=function(e){return h.a.post(s,e).then((function(e){return e.data}))},E=function(e){if(window.confirm("Delete ".concat(e.name,"?")))return h.a.delete(s+e.id).then((function(e){return e.data}))},g=function(e){return h.a.put(s+e.id,e).then((function(e){return e.data}))},v=function(e){var n=e.message,t={background:"lightgrey",fontSize:"20",borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10};return null===n?null:("A"===n.charAt(0)?t.color="green":t.color="red",r.a.createElement("div",{style:t},n))},w=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],o=n[1],u=Object(a.useState)(""),f=Object(l.a)(u,2),h=f[0],s=f[1],w=Object(a.useState)(""),C=Object(l.a)(w,2),j=C[0],O=C[1],N=Object(a.useState)(""),k=Object(l.a)(N,2),S=k[0],y=k[1],A=Object(a.useState)(null),L=Object(l.a)(A,2),F=L[0],P=L[1];Object(a.useEffect)((function(){b().then((function(e){return o(e)}))}),[]);return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(v,{message:F}),r.a.createElement(d,{handleFilterChange:function(e){y(e.target.value)}}),r.a.createElement("h3",null,"Add a new"),r.a.createElement(i,{handleNameChange:function(e){s(e.target.value)},handleNumberChange:function(e){O(e.target.value)},newName:h,newNumber:j,addName:function(e){if(e.preventDefault(),t.filter((function(e){return e.name.toLowerCase()===h.toLowerCase()})).length>0){if(window.confirm("".concat(h," is already added to the phonebook, replace the old number with a new one?"))){var n=t.find((function(e){return e.name===h}));n=Object(c.a)(Object(c.a)({},n),{},{number:j}),g(n).then((function(){o(t.map((function(e){return e.name===h?n:e}))),P("Updated ".concat(h))})).catch((function(e){P("Information of ".concat(h," has already been removed from server"))}))}}else p({name:h,number:j}).then((function(e){return o(t.concat(e))})),P("Added ".concat(h));s(""),O("")}}),r.a.createElement("h3",null,"Numbers"),r.a.createElement(m,{persons:t,filter:S,deletePerson:function(e){E(e).then((function(){return o(t.filter((function(n){return n.id!==e.id})))}))}}))};u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.adc5533a.chunk.js.map