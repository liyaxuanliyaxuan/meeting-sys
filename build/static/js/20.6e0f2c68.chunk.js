(this["webpackJsonpmeeting-system"]=this["webpackJsonpmeeting-system"]||[]).push([[20],{380:function(e,i,n){"use strict";n.d(i,"a",(function(){return t}));var t=5},463:function(e,i,n){e.exports={form:"Msg_form__J-iFi",btn:"Msg_btn__3lslh"}},480:function(e,i,n){"use strict";n.r(i);var t=n(4),a=n(76),r=n(0),c=n.n(r),o=n(39),s=n(391),u=n(392),l=n(51),m=n(131),b=n(136),f=n(349),h=n(341),O=n(380),v=n(463),g=n.n(v);i.default=function(e){Object(a.a)(e);var i=Object(l.c)(O.a),n=Object(t.a)(i,3),v=n[0],d=n[1],j=n[2],p=Object(r.useState)("\u83b7\u53d6\u9a8c\u8bc1\u7801"),P=Object(t.a)(p,2),w=P[0],R=P[1],_=Object(l.b)(""),E=Object(l.b)(""),M=Object(r.useState)(!1),y=Object(t.a)(M,2),S=y[0],k=y[1],x=Object(h.a)({mailOrPhone:{msg:"\u624b\u673a\u53f7\u5c3d\u91cf\u4e0e\u5fae\u4fe1\u53f7\u4fdd\u6301\u4e00\u81f4",warn:!1,isRight:!1},verification:{msg:"",warn:!1,isRight:!1}}),I=Object(t.a)(x,2),J=I[0],N=I[1],V=Object(o.g)(),q=Object(m.d)(b.c,{manual:!0});Object(l.e)((function(){R(!0===j?"\u91cd\u65b0\u53d1\u9001\u9a8c\u8bc1\u7801(".concat(v,")"):"\u83b7\u53d6\u9a8c\u8bc1\u7801")}),[v]);var C={validatePhoneOrMail:function(){return f.a.required(_.value)?f.a.isPhoneNumber(_.value)||f.a.isEmail(_.value)?(N((function(e){e.mailOrPhone.msg="\u624b\u673a\u53f7\u5c3d\u91cf\u4e0e\u5fae\u4fe1\u53f7\u4fdd\u6301\u4e00\u81f4",e.mailOrPhone.warn=!1,e.mailOrPhone.isRight=!0})),!0):(N((function(e){e.mailOrPhone.msg="\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u7535\u8bdd\u53f7\u7801\u6216\u90ae\u7bb1",e.mailOrPhone.warn=!0,e.mailOrPhone.isRight=!1})),!1):(N((function(e){e.mailOrPhone.msg="\u90ae\u7bb1\u6216\u8005\u7535\u8bdd\u4e0d\u80fd\u4e3a\u7a7a",e.mailOrPhone.warn=!0,e.mailOrPhone.isRight=!1})),!1)},validateVerification:function(){return f.a.required(E.value)?(N((function(e){e.verification.msg="",e.verification.warn=!1,e.verification.isRight=!0})),!0):(N((function(e){e.verification.msg="\u9a8c\u8bc1\u7801\u4e0d\u80fd\u4e3a\u7a7a",e.verification.warn=!0,e.verification.isRight=!1})),!1)}},D=Object(m.b)(C.validatePhoneOrMail,300),B=Object(m.b)(C.validateVerification,300),F=Object(m.b)((function(){J.mailOrPhone.isRight&&J.verification.isRight?k(!0):k(!1)}),300);return c.a.createElement("form",{className:g.a.form,onSubmit:function(e){e.preventDefault(),V.push("/signup",{verificationCode:E.value})},onInput:F.run},c.a.createElement(u.a,{type:"text",placeholder:"\u624b\u673a\u53f7/\u90ae\u7bb1",msg:J.mailOrPhone.msg,warn:J.mailOrPhone.warn,bind:_,onInput:D.run}),c.a.createElement(u.a,{type:"text",placeholder:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",hasBtn:!0,btnValue:w,btnStatus:j,btnCallback:function(e){e.preventDefault(),C.validatePhoneOrMail()&&(d(),q.run(_.value))},msg:J.verification.msg,warn:J.verification.warn,bind:E,onInput:B.run}),c.a.createElement(s.a,{className:g.a.btn,disabled:!S}))}}}]);
//# sourceMappingURL=20.6e0f2c68.chunk.js.map