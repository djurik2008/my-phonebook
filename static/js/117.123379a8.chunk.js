"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[117],{2117:function(e,n,r){r.r(n),r.d(n,{default:function(){return B}});var t=r(4420),a=r(2791),o=r(5639),i=r(4942),s=r(1413),u=r(9439),l=r(7933),c=(0,r(3553).P1)([function(e){return e.contacts},function(e){return e.filter}],(function(e,n){var r=e.items,t=e.isLoading,a=e.error;if(!n)return{items:r,isLoading:t,error:a};var o=n.toLowerCase();return{items:r.filter((function(e){var n=e.name,r=e.number;return n.toLowerCase().includes(o)||r.includes(o)})),isLoading:t,error:a}})),m="PhoneBookForm_form__ln2Qf",d="PhoneBookForm_label__hl1Ol",f="PhoneBookForm_input__rY+Ws",h="PhoneBookForm_button__26FjX",_=r(184),j={name:"",number:""},v=function(){var e=(0,t.v9)(c).isLoading,n=(0,a.useState)((0,s.Z)({},j)),r=(0,u.Z)(n,2),v=r[0],x=r[1],p=(0,t.I0)(),b=(0,s.Z)({},v),g=function(e){var n=e.target,r=n.name,t=n.value;x((0,s.Z)((0,s.Z)({},v),{},(0,i.Z)({},r,t.trim())))},k=function(){x((0,s.Z)({},j))};return(0,_.jsxs)("form",{className:m,onSubmit:function(e){e.preventDefault(),p((0,o.uK)(b)),k()},children:[(0,_.jsxs)("label",{className:d,children:["Name",(0,_.jsx)("input",{type:"text",className:f,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",name:"name",onChange:g,value:v.name,required:!0})]}),(0,_.jsxs)("label",{className:d,children:["Number",(0,_.jsx)("input",{type:"phone",className:f,pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",name:"number",onChange:g,value:v.number,required:!0})]}),(0,_.jsx)("button",{type:"submit",className:h,children:"add"===e?(0,_.jsx)(l.Z,{}):"Add contact"})]})},x="PhoneBookList_list__V6lpG",p="PhoneBookList_item__trow3",b=r(6482),g=function(e){var n=e.loading,r=e.func;return(0,_.jsx)(b.ZP,{loading:n,htmlType:"button",size:"small",danger:!0,onClick:r,children:"Delete"})},k=function(){var e=(0,t.v9)(c),n=e.items,r=e.isLoading,a=e.error,i=(0,t.I0)(),s=function(e){return function(){return i((0,o.GK)(e))}},u=!1,m=n.map((function(e){var n=e.id,t=e.name,a=e.number;return r===n&&(u=!0),(0,_.jsxs)("li",{className:p,children:[t,": ",a,(0,_.jsx)(g,{loading:u,func:s(n)})]},n)}));return(0,_.jsxs)("div",{children:["fetch"===r&&(0,_.jsx)(l.Z,{}),a&&(0,_.jsx)("p",{children:a}),Boolean(n.length)&&(0,_.jsx)("ul",{className:x,children:m})]})},Z=r(5689),N="PhoneBookFilter_filter__rm6bD",L="PhoneBookFilter_filterInput__mJAwe",P=function(){var e=(0,t.I0)();return(0,_.jsx)("div",{className:N,children:(0,_.jsx)("input",{onChange:function(n){var r=n.target;return e((0,Z.T)(r.value.toLowerCase()))},name:"filter",placeholder:"Find contact",className:L})})},w=function(){var e=(0,t.I0)();return(0,a.useEffect)((function(){e((0,o.yF)())})),(0,_.jsxs)("div",{children:[(0,_.jsx)(v,{}),(0,_.jsx)(P,{}),(0,_.jsx)(k,{})]})},B=function(){return(0,_.jsx)("div",{children:(0,_.jsx)(w,{})})}}}]);
//# sourceMappingURL=117.123379a8.chunk.js.map