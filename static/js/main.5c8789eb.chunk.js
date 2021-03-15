(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(9),r=n.n(c),o=(n(15),n(10)),i=n(2),s=n(3),l=n(6),u=n(5),h=n(4),m=n(23),b=(n(16),n(0)),d={name:"",number:""},j=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state=d,t.handleChangeForm=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(h.a)({},a,c))},t.handleSubmitForm=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number,r=t.props.onAdd;t.validateForm()&&(r({id:Object(m.a)(),name:a,number:c}),t.resetForm())},t.validateForm=function(){var e=t.state,n=e.name,a=e.number,c=t.props.onCheckUnique;return a?c(n):(alert("Some filed is empty"),!1)},t.resetForm=function(){return t.setState(d)},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(b.jsxs)("form",{onSubmit:this.handleSubmitForm,children:[Object(b.jsx)("h3",{children:"Name"}),Object(b.jsx)("label",{children:Object(b.jsx)("input",{type:"text",name:"name",placeholder:"Enter name",value:e,onChange:this.handleChangeForm})}),Object(b.jsx)("br",{}),Object(b.jsx)("h3",{children:"Number"}),Object(b.jsx)("label",{children:Object(b.jsx)("input",{type:"tel",name:"number",placeholder:"Enter phone number",value:n,onChange:this.handleChangeForm})}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{type:"submit",className:"buttonForm",children:"Add contact"})]})}}]),n}(a.Component),f=n(8),v=(n(18),function(t){var e=t.id,n=t.name,a=t.number,c=t.onRemove;return Object(b.jsxs)("li",{className:"ContactListItem",children:[n,": ",a,Object(b.jsx)("button",{type:"button",className:"ContactsList-button",onClick:function(){return c(e)},children:"Delete"})]})}),O=function(t){var e=t.contacts,n=t.onRemove;return 0===e.length?null:Object(b.jsx)("ul",{className:"ContactsList",children:e.map((function(t){return Object(b.jsx)(v,Object(f.a)(Object(f.a)({},t),{},{onRemove:n}))}))})},p=(n(19),function(t){var e=t.filter,n=t.onChange;return Object(b.jsxs)("div",{className:"Filter",children:[Object(b.jsx)("p",{children:"Find contacts by name"}),Object(b.jsx)("input",{type:"text",name:"filter",value:e,onChange:function(t){var e=t.target;return n(e.value)},placeholder:"Enter name for Search"})]})});p.defaultProps={value:""};var C=p,x=(n(20),function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.handleAddContact=function(e){t.setState((function(t){return{contacts:[].concat(Object(o.a)(t.contacts),[e])}}))},t.handleCheckUniqueContact=function(e){var n=!!t.state.contacts.find((function(t){return t.name===e}));return n&&alert("".concat(n.name," is already in contacts!")),!n},t.handleRemoveContact=function(e){return t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.handleChangeFilter=function(e){return t.setState({filter:e})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);console.log(e),e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t){var e=this.state.contacts;e!==t.contacts&&localStorage.setItem("contacts",JSON.stringify(e))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=this.getVisibleContacts();return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"Container",children:[Object(b.jsxs)("section",{title:"Phonebook",className:"Section",children:[Object(b.jsx)("h1",{children:"Phonebook"}),Object(b.jsx)(j,{contacts:e,onAdd:this.handleAddContact,onCheckUnique:this.handleCheckUniqueContact})]}),Object(b.jsxs)("section",{title:"Contacts",className:"Section",children:[Object(b.jsx)("h2",{children:"Contacts"}),Object(b.jsx)(C,{filter:n,onChange:this.handleChangeFilter}),Object(b.jsx)(O,{contacts:a,onRemove:this.handleRemoveContact})]})]})})}}]),n}(a.Component));r.a.render(Object(b.jsx)(x,{}),document.querySelector("#root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.5c8789eb.chunk.js.map