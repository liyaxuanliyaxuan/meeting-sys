(this["webpackJsonpmeeting-system"]=this["webpackJsonpmeeting-system"]||[]).push([[16],{339:function(e,n,a){"use strict";a(77);var t=a(11),i=a(0),r=a.n(i),s=a(340),c=a.n(s);var u=function(e){var n=e.type,a=void 0===n?"button":n,i=e.value,s=e.className,u=e.color,o=e.fontSize,m=e.onClick,l=e.loading,d=void 0!==l&&l,p=e.disabled,b=e.size;return r.a.createElement(t.a,{type:"primary",size:b,htmlType:a,loading:d,className:"".concat(c.a.btn," ").concat(s),style:{backgroundColor:u,fontSize:"".concat(o,"px")},onClick:m,disabled:p},i)};a.d(n,"a",(function(){return u}))},340:function(e,n,a){e.exports={btn:"Button_btn__2fuTG"}},342:function(e,n,a){"use strict";a(354);var t=a(353),i=a(4),r=a(0),s=a.n(r),c=a(475),u=a(476),o=a(344),m=a.n(o);n.a=function(e){var n=e.type,a=e.name,o=e.placeholder,l=void 0===o?"\u70b9\u51fb\u7f16\u8f91\u5185\u5bb9":o,d=e.bind,p=e.msg,b=e.warn,g=void 0!==b&&b,f=e.readOnly,w=void 0!==f&&f,h=e.update,v=void 0!==h&&h,_=e.value,N=e.hasBtn,O=void 0!==N&&N,j=e.btnValue,E=void 0===j?"":j,R=e.btnCallback,y=e.btnStatus,I=void 0!==y&&y,k=e.dateCallback,P=e.onFocus,C=e.onBlur,S=e.onInput,x=Object(r.useState)(!1),z=Object(i.a)(x,2),L=z[0],q=z[1],A=Object(r.useState)(w),G=Object(i.a)(A,2),Z=G[0],B=G[1],D=function(){q(!L)};return s.a.createElement("div",{className:"".concat(m.a.container," ").concat(e.className)},s.a.createElement("label",{className:m.a.label},s.a.createElement("span",{className:m.a.name},a),"Date"===n?s.a.createElement(t.a,{className:m.a.input,placeholder:"\u9009\u62e9\u65e5\u671f",onChange:k}):s.a.createElement("input",Object.assign({className:m.a.input,type:"password"!==n?n:L?"text":"password",placeholder:l,readOnly:Z,value:_||""},null===d||void 0===d?void 0:d.bindEvent,{onFocus:P,onBlur:C,onInput:S})),"password"===n?L?s.a.createElement(c.a,{className:m.a.eye,onClick:D}):s.a.createElement(u.a,{className:m.a.eye,onClick:D}):null,O?s.a.createElement("button",{className:I?m.a.disabled:m.a.btn,disabled:I,onClick:R},E):null,v?s.a.createElement("span",{className:m.a.update,onClick:function(){return B(!1)}},"\u4fee\u6539"):null),s.a.createElement("span",{className:g?m.a.warn:m.a.msg},p))}},344:function(e,n,a){e.exports={container:"Input_container__3-eAs",label:"Input_label__3ZyMx",name:"Input_name__2N1NA",input:"Input_input__1mIb6",btn:"Input_btn__1Ye5Q",disabled:"Input_disabled__1kEQs",eye:"Input_eye__3KZCz",msg:"Input_msg__1Vo6u",warn:"Input_warn__1I9dP",update:"Input_update__1venh"}},349:function(e,n,a){"use strict";var t=a(135),i=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,r=/^1[34578]\d{9}$/,s=function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)};s.required=function(e){return!Object(t.isNull)(e)&&!Object(t.isEmpty)(e)},s.checkLength=function(e,n){return e.length<=n},s.isEmail=function(e){return i.test(e)},s.isPhoneNumber=function(e){return r.test(e)};n.a=s},356:function(e,n,a){e.exports={container:"RadioGroup_container__1_K-d",name:"RadioGroup_name__2eY-s",radioList:"RadioGroup_radioList__1s6DY",radio:"RadioGroup_radio__Jh28g"}},362:function(e,n,a){"use strict";var t=a(4),i=a(0),r=a.n(i),s=a(51),c=a(356),u=a.n(c);var o=function(e){var n=e.name,a=e.radioList,c=e.bind,o=e.initialData,m=void 0===o?a[0]:o,l=Object(i.useState)(m),d=Object(t.a)(l,2),p=d[0],b=d[1];return Object(s.e)((function(){b(m)}),[m]),r.a.createElement("div",{className:u.a.container},r.a.createElement("span",{className:u.a.name},n),r.a.createElement("div",{className:u.a.radioList,onChange:function(e){c(e.target.value),b(e.target.value)}},a.map((function(e){return r.a.createElement("label",{className:u.a.radio,key:e},r.a.createElement("input",{type:"radio",name:n,value:e,checked:p===e,onChange:function(){}}),r.a.createElement("span",null,e))}))))};a.d(n,"a",(function(){return o}))},465:function(e,n,a){e.exports={form:"Signup_form__29rhY",btn:"Signup_btn__1EwQ2"}},482:function(e,n,a){"use strict";a.r(n);var t=a(32),i=a.n(t),r=a(65),s=(a(134),a(53)),c=a(4),u=a(76),o=a(0),m=a.n(o),l=a(39),d=a(341),p=a(339),b=a(342),g=a(362),f=a(51),w=a(136),h=a(349),v=a(131),_=a(465),N=a.n(_);n.default=function(e){Object(u.a)(e);var n=Object(o.useState)("\u7537"),a=Object(c.a)(n,2),t=a[0],_=a[1],O=Object(f.b)(""),j=Object(f.b)(""),E=Object(f.b)(""),R=Object(f.b)(""),y=Object(f.b)(""),I=Object(o.useState)(!1),k=Object(c.a)(I,2),P=k[0],C=k[1],S=Object(d.a)({userName:{msg:"\u6700\u957f\u4e0d\u8d85\u8fc77\u4e2a\u5b57\u7b26",warn:!1,isRight:!1},pwd:{msg:"\u5bc6\u7801\u4e0d\u5c11\u4e8e8\u4f4d",warn:!1,isRight:!1},confirmPwd:{msg:"\u5bc6\u7801\u4e0d\u5c11\u4e8e8\u4f4d",warn:!1,isRight:!1},mail:{msg:"",warn:!1,isRight:!1},phone:{msg:"",warn:!1,isRight:!1}}),x=Object(c.a)(S,2),z=x[0],L=x[1],q=Object(l.h)(),A=Object(l.g)(),G=Object(v.d)(w.e,{manual:!0,onSuccess:function(e,n){e.code>=0&&(s.a.success("\u6ce8\u518c\u6210\u529f,\u8bf7\u524d\u5f80\u767b\u5f55"),A.push("/login/pwd"))}}),Z=function(){return h.a.required(O.value)?h.a.checkLength(O.value,7)?(L((function(e){e.userName.msg="\u6700\u957f\u4e0d\u8d85\u8fc77\u4e2a\u5b57\u7b26",e.userName.warn=!1,e.userName.isRight=!0})),!0):(L((function(e){e.userName.msg="\u6700\u957f\u4e0d\u8d85\u8fc77\u4e2a\u5b57\u7b26",e.userName.warn=!0,e.userName.isRight=!1})),!1):(L((function(e){e.userName.msg="\u7528\u6237\u540d\u4e0d\u80fd\u4e3a\u7a7a",e.userName.warn=!0,e.userName.isRight=!1})),!1)},B=function(){return h.a.required(j.value)?h.a.checkLength(j.value,8)?(L((function(e){e.pwd.msg="\u5bc6\u7801\u4e0d\u5c11\u4e8e8\u4f4d",e.pwd.warn=!0,e.pwd.isRight=!1})),!1):(L((function(e){e.pwd.msg="\u5bc6\u7801\u4e0d\u5c11\u4e8e8\u4f4d",e.pwd.warn=!1,e.pwd.isRight=!0})),!0):(L((function(e){e.pwd.msg="\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a",e.pwd.warn=!0,e.pwd.isRight=!1})),!1)},D=function(){return h.a.required(E.value)?j.value===E.value?(L((function(e){e.confirmPwd.msg="\u5bc6\u7801\u4e0d\u5c11\u4e8e8\u4f4d",e.confirmPwd.warn=!1,e.confirmPwd.isRight=!0})),!0):(L((function(e){e.confirmPwd.msg="\u786e\u8ba4\u5bc6\u7801\u4e0d\u539f\u5bc6\u7801\u4e0d\u76f8\u540c",e.confirmPwd.warn=!0,e.confirmPwd.isRight=!1})),!1):(L((function(e){e.confirmPwd.msg="\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a",e.confirmPwd.warn=!0,e.confirmPwd.isRight=!1})),!1)},Y=function(){return h.a.required(R.value)?h.a.isEmail(R.value)?(L((function(e){e.mail.msg="",e.mail.warn=!1,e.mail.isRight=!0})),!0):(L((function(e){e.mail.msg="\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u90ae\u7bb1\u683c\u5f0f",e.mail.warn=!0,e.mail.isRight=!1})),!1):(L((function(e){e.mail.msg="\u90ae\u7bb1\u4e0d\u80fd\u4e3a\u7a7a",e.mail.warn=!0,e.mail.isRight=!1})),!1)},J=function(){return h.a.required(y.value)?h.a.isPhoneNumber(y.value)?(L((function(e){e.phone.msg="",e.phone.warn=!1,e.phone.isRight=!0})),!0):(L((function(e){e.phone.msg="\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u7535\u8bdd\u683c\u5f0f",e.phone.warn=!0,e.phone.isRight=!1})),!1):(L((function(e){e.phone.msg="\u7535\u8bdd\u4e0d\u80fd\u4e3a\u7a7a",e.phone.warn=!0,e.phone.isRight=!1})),!1)},Q=Object(v.b)(Z,300),T=Object(v.b)(B,300),F=Object(v.b)(D,300),K=Object(v.b)(Y,300),V=Object(v.b)(J,300),$=Object(v.b)((function(){z.userName.isRight&&z.pwd.isRight&&z.confirmPwd.isRight&&z.mail.isRight&&z.phone.isRight?C(!0):C(!1)}),300),M=function(){var e=Object(r.a)(i.a.mark((function e(n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),G.run({username:O.value,gender:t,emailaddr:R.value,phone:y.value,password:j.value},q.state.verificationCode);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return m.a.createElement("form",{className:N.a.form,onSubmit:M,onInput:$.run},m.a.createElement(b.a,{type:"text",onInput:Q.run,bind:O,name:"\u7528\u6237\u540d",msg:z.userName.msg,warn:z.userName.warn}),m.a.createElement(g.a,{name:"\u6027\u522b",radioList:["\u7537","\u5973"],bind:_}),m.a.createElement(b.a,{type:"password",onInput:T.run,bind:j,name:"\u5bc6\u7801",msg:z.pwd.msg,warn:z.pwd.warn}),m.a.createElement(b.a,{type:"password",onInput:F.run,bind:E,name:"\u786e\u8ba4\u5bc6\u7801",msg:z.confirmPwd.msg,warn:z.confirmPwd.warn}),m.a.createElement(b.a,{type:"text",onInput:K.run,bind:R,name:"\u90ae\u7bb1",msg:z.mail.msg,warn:z.mail.warn}),m.a.createElement(b.a,{type:"text",onInput:V.run,bind:y,name:"\u7535\u8bdd",msg:z.phone.msg,warn:z.phone.warn}),m.a.createElement(p.a,{value:"\u4fdd\u5b58",disabled:!P,type:"submit",className:N.a.btn,loading:G.loading}))}}}]);
//# sourceMappingURL=16.def800ee.chunk.js.map