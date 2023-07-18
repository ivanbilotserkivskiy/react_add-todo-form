(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{16:function(e,t,r){},17:function(e,t,r){"use strict";r.r(t);var a=r(9),n=r.n(a),o=r(4),i=r(6),d=r(8),s=r(1),c=r(2),l=r(10),u=r.n(l),m=r(0),j=function(e){var t=e.user;return Object(m.jsx)("a",{className:"UserInfo",href:"mailto:".concat(null===t||void 0===t?void 0:t.email),children:null===t||void 0===t?void 0:t.name})},b=function(e){var t=e.todo;return Object(m.jsxs)("article",{"data-id":t.id,className:u()("TodoInfo",{"TodoInfo--completed":t.completed}),children:[Object(m.jsx)("h2",{className:"TodoInfo__title",children:t.title}),Object(m.jsx)(j,{user:t.user})]})},h=function(e){var t=e.todos;return Object(m.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(m.jsx)(b,{todo:e},e.id)}))})},O=(r(16),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]);function f(e){return O.find((function(t){return e===t.id}))}var p=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){var t=f(e.userId);return Object(s.a)(Object(s.a)({},e),{},{user:t})}));function v(e){var t=e.map((function(e){return e.id}));return Math.max.apply(Math,Object(d.a)(t))+1}var x=function(){var e=Object(c.useState)(p),t=Object(i.a)(e,2),r=t[0],a=t[1],n=Object(c.useState)({todoTitle:"",todoUserId:"0"}),l=Object(i.a)(n,2),u=l[0],j=l[1],b=Object(c.useState)({titleError:!1,userError:!1}),x=Object(i.a)(b,2),I=x[0],T=x[1];function y(e){j((function(t){return Object(s.a)(Object(s.a)({},t),{},Object(o.a)({},e.target.name,e.target.value))})),I.titleError&&"todoTitle"===e.target.name&&T((function(e){return Object(s.a)(Object(s.a)({},e),{},{titleError:!1})})),I.userError&&"todoUserId"===e.target.name&&T((function(e){return Object(s.a)(Object(s.a)({},e),{},{userError:!1})}))}return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Add todo form"}),Object(m.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:function(e){e.preventDefault();var t=f(+u.todoUserId),n={id:v(r),title:u.todoTitle,completed:!1,userId:+u.todoUserId,user:t};u.todoTitle.trim()||T((function(e){return Object(s.a)(Object(s.a)({},e),{},{titleError:!0})})),+u.todoUserId||T((function(e){return Object(s.a)(Object(s.a)({},e),{},{userError:!0})})),u.todoTitle.trim()&&+u.todoUserId&&(a((function(e){return[].concat(Object(d.a)(e),[n])})),j({todoTitle:"",todoUserId:"0"}))},children:[Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{htmlFor:"todoTitle",children:"Title: "}),Object(m.jsx)("input",{type:"text",id:"todoTitle","data-cy":"titleInput",name:"todoTitle",placeholder:"Enter a title",value:u.todoTitle,onChange:y}),I.titleError&&Object(m.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{htmlFor:"todoUserId",children:"User: "}),Object(m.jsxs)("select",{"data-cy":"userSelect",id:"todoUserId",name:"todoUserId",value:u.todoUserId,onChange:y,children:[Object(m.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),O.map((function(e){return Object(m.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),I.userError&&Object(m.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(m.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(m.jsx)(h,{todos:r})]})};n.a.render(Object(m.jsx)(x,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.787ac517.chunk.js.map