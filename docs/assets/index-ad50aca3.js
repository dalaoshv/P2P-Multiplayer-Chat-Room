import{d as _,c as z,o as c,a as d,n as g,b as k,r as p,F as j,e as S,f as N,g as a,h as C,_ as m,t as E,w as h,u as y,v as x,i,j as B,p as $,k as I,T as V,l as q,m as R,q as b,E as T}from"./index-81ff09f6.js";const w=_({__name:"index",props:{icon:{},size:{default:16},rotate:{},spin:{type:Boolean},colorful:{type:Boolean}},setup(n){const t=n,s=z(()=>[{mallchat:!t.colorful,mallchatcolor:t.colorful,"icon-spin":t.spin},`icon-${t.icon}`]),o=z(()=>{const r={};return t.size&&(r.fontSize=typeof t.size=="number"?`${t.size}px`:t.size),t.rotate&&(r.transform=`rotate(${t.rotate}deg)`),r});return(r,u)=>(c(),d("i",{class:g(s.value),style:k(o.value)},null,6))}}),U=["src"],F={key:2,class:"status"},A=_({__name:"index",props:{src:{default:""},size:{default:40},shape:{default:"circle"},showStatus:{type:Boolean,default:!1},online:{type:Boolean,default:!0}},setup(n){const t=p(!1);return(s,o)=>{const r=w;return c(),d("div",{class:g(["avatar",`avatar-${s.shape}`,{downline:!s.online}]),style:k({width:s.size+"px",height:s.size+"px"})},[s.src?(c(),d(j,{key:0},[t.value?(c(),S(r,{key:0,icon:"avatar",size:s.size},null,8,["size"])):(c(),d("img",{key:1,src:s.src,alt:"avatar",onError:o[0]||(o[0]=u=>t.value=!0)},null,40,U))],64)):N(s.$slots,"default",{key:1},()=>[a(r,{icon:"avatar",size:s.size},null,8,["size"])],!0),s.showStatus?(c(),d("i",F)):C("",!0)],6)}}});const G=m(A,[["__scopeId","data-v-09c4c7e5"]]),H=i("span",{class:"icon"},"@",-1),O=_({__name:"index",props:{uid:{},options:{}},setup(n){const t=n;return E(t.uid),(s,o)=>{const r=w;return c(),S(y(x.ContextMenu),{options:{theme:"dark",x:0,y:0,...t.options}},{default:h(()=>[a(y(x.ContextMenuItem),{label:"发送消息"},{icon:h(()=>[H]),_:1}),a(y(x.ContextMenuItem),{label:"请求聊天"},{icon:h(()=>[a(r,{icon:"tianjia",size:13})]),_:1})]),_:1},8,["options"])}}});const D=n=>($("data-v-e040098b"),n=n(),I(),n),J=D(()=>i("div",{class:"user-name"},[i("div",{class:"text"},"游客"),i("div",{class:"badge flex-center"}," 12424 ")],-1)),K=_({__name:"index",props:{user:{}},setup(n){E(n.user);const s=p(!1),o=p({x:0,y:0}),r=u=>{const{x:l,y:v}=u;o.value.x=l,o.value.y=v,s.value=!0};return(u,l)=>{const v=G;return c(),d("li",{class:"user-list-item",tabindex:"0",onContextmenu:l[1]||(l[1]=B(f=>r(f),["prevent","stop"]))},[a(v,{src:null,size:24,showStatus:"",online:!0}),J,a(O,{show:s.value,"onUpdate:show":l[0]||(l[0]=f=>s.value=f),options:o.value},null,8,["show","options"])],32)}}});const e=m(K,[["__scopeId","data-v-e040098b"]]),P=n=>($("data-v-004022d5"),n=n(),I(),n),Q={class:"user-list-wrapper"},W=P(()=>i("div",{class:"user-list-header"},"在线人数：0",-1)),X={key:0,class:"list-no-data"},Y={key:"visible_el",ref:"groupListLastElRef"},Z=_({__name:"index",setup(n){return(t,s)=>(c(),d("div",Q,[W,(c(),d("div",X,"暂无成员~")),a(V,{tag:"ul",name:"fade",class:"user-list"},{default:h(()=>[a(e,{user:{avatar:"",id:"aaa",connected:!0,name:"游客"}}),a(e,{user:{avatar:"",id:"aaa",connected:!0,name:"游客"}}),a(e,{user:{avatar:"",id:"aaa",connected:!0,name:"游客"}}),a(e,{user:{avatar:"",id:"aaa",connected:!0,name:"游客"}}),a(e,{user:{avatar:"",id:"aaa",connected:!0,name:"游客"}}),a(e,{user:{avatar:"",id:"aaa",connected:!0,name:"游客"}}),a(e,{user:{avatar:"",id:"aaa",connected:!0,name:"游客"}}),a(e,{user:{avatar:"",id:"aaa",connected:!0,name:"游客"}}),a(e,{user:{avatar:"",id:"aaa",connected:!0,name:"游客"}}),a(e,{user:{avatar:"",id:"aaa",connected:!0,name:"游客"}}),a(e,{user:{avatar:"",id:"aaa",connected:!0,name:"游客"}}),a(e,{user:{avatar:"",id:"aaa",connected:!0,name:"游客"}}),a(e,{user:{avatar:"",id:"aaa",connected:!0,name:"游客"}}),a(e,{user:{avatar:"",id:"aaa",connected:!0,name:"游客"}}),a(e,{user:{avatar:"",id:"aaa",connected:!0,name:"游客"}}),a(e,{user:{avatar:"",id:"aaa",connected:!0,name:"游客"}}),a(e,{user:{avatar:"",id:"aaa",connected:!0,name:"游客"}}),a(e,{user:{avatar:"",id:"aaa",connected:!0,name:"游客"}}),a(e,{user:{avatar:"",id:"aaa",connected:!0,name:"游客"}}),a(e,{user:{avatar:"",id:"aaa",connected:!0,name:"游客"}}),a(e,{user:{avatar:"",id:"aaa",connected:!0,name:"游客"}}),a(e,{user:{avatar:"",id:"aaa",connected:!0,name:"游客"}}),a(e,{user:{avatar:"",id:"aaa",connected:!0,name:"游客"}}),a(e,{user:{avatar:"",id:"aaa",connected:!0,name:"游客"}}),a(e,{user:{avatar:"",id:"aaa",connected:!0,name:"游客"}}),a(e,{user:{avatar:"",id:"aaa",connected:!0,name:"游客"}}),a(e,{user:{avatar:"",id:"aaa",connected:!0,name:"游客"}}),a(e,{user:{avatar:"",id:"aaa",connected:!0,name:"游客"}}),a(e,{user:{avatar:"",id:"aaa",connected:!0,name:"游客"}}),a(e,{user:{avatar:"",id:"aaa",connected:!0,name:"游客"}}),a(e,{user:{avatar:"",id:"aaa",connected:!0,name:"游客"}}),a(e,{user:{avatar:"",id:"aaa",connected:!0,name:"游客"}}),a(e,{user:{avatar:"",id:"aaa",connected:!0,name:"游客"}}),a(e,{user:{avatar:"",id:"aaa",connected:!0,name:"游客"}}),a(e,{user:{avatar:"",id:"aaa",connected:!0,name:"游客"}}),a(e,{user:{avatar:"",id:"aaa",connected:!0,name:"游客"}}),a(e,{user:{avatar:"",id:"aaa",connected:!0,name:"游客"}}),a(e,{user:{avatar:"",id:"aaa",connected:!0,name:"游客"}}),a(e,{user:{avatar:"",id:"aaa",connected:!0,name:"游客"}}),a(e,{user:{avatar:"",id:"aaa",connected:!0,name:"游客"}}),a(e,{user:{avatar:"",id:"aaa",connected:!0,name:"游客"}}),a(e,{user:{avatar:"",id:"aaa",connected:!0,name:"游客"}}),a(e,{user:{avatar:"",id:"aaa",connected:!0,name:"游客"}}),a(e,{user:{avatar:"",id:"aaa",connected:!0,name:"游客"}}),a(e,{user:{avatar:"",id:"aaa",connected:!0,name:"游客"}}),a(e,{user:{avatar:"",id:"aaa",connected:!0,name:"游客"}}),a(e,{user:{avatar:"",id:"aaa",connected:!0,name:"游客"}}),a(e,{user:{avatar:"",id:"aaa",connected:!0,name:"游客"}}),a(e,{user:{avatar:"",id:"aaa",connected:!0,name:"游客"}}),a(e,{user:{avatar:"",id:"aaa",connected:!0,name:"游客"}}),i("li",Y," ",512)]),_:1})]))}});const aa=m(Z,[["__scopeId","data-v-004022d5"]]);const ea={},ta=q('<div class="scroll-list" data-v-6f378561><div class="chat-item" data-v-6f378561><span class="tips-block" data-v-6f378561>&quot;我是大佬鼠&quot;撤回了一条消息</span></div><div class="chat-item" data-v-6f378561><div class="msg-wrap" data-v-6f378561><div class="username" data-v-6f378561>我是大佬鼠</div><div class="content-wrap" data-v-6f378561><div class="text" data-v-6f378561>这是一条消息</div></div></div></div><div class="chat-item is-me" data-v-6f378561><div class="msg-wrap" data-v-6f378561><div class="username" data-v-6f378561>我是大佬鼠</div><div class="content-wrap" data-v-6f378561><div class="read-count" data-v-6f378561><span class="num" data-v-6f378561>0</span></div><div class="text" data-v-6f378561>这是一条消息</div></div></div></div></div>',1),sa=[ta];function na(n,t){return c(),d("div",{class:"chat-msg-list",onContextmenu:t[0]||(t[0]=B(()=>{},["prevent"]))},sa,32)}const ca=m(ea,[["render",na],["__scopeId","data-v-6f378561"]]);const M=n=>($("data-v-444e9af7"),n=n(),I(),n),oa={class:"send-bar"},ra={class:"msg-edit"},da=["disabled"],ia=M(()=>i("div",{class:"divider"},null,-1)),ua={key:0,class:"tips"},_a=M(()=>i("span",{class:"tips-text"},"登录",-1)),la=_({__name:"index",setup(n){const t=p(!0),s=p(!1),o=p(""),r=()=>{var u;!((u=o.value)!=null&&u.trim().length)||s.value||(s.value=!0)};return(u,l)=>{const v=w,f=R("IEpLock"),L=T;return c(),d("div",oa,[i("div",ra,[i("input",{class:"msg-input",placeholder:"来聊点什么吧~",disabled:!t.value||s.value,autofocus:""},null,8,da),a(v,{class:"action",icon:"wenjianjia2",size:20,colorful:""}),ia,i("div",{class:g(["action",{"is-edit":o.value.length,disabled:!o.value.length}]),onClick:r},[a(v,{class:"send",icon:"huojian",size:20})],2)]),t.value?C("",!0):(c(),d("span",ua,[a(L,{class:"icon-lock"},{default:h(()=>[a(f)]),_:1}),b(" 点我"),_a,b("之后再发言~ ")]))])}}});const va=m(la,[["__scopeId","data-v-444e9af7"]]),pa={class:"chat-box"},ma=i("div",{class:"room-name"},[i("span",{class:"name"},"这是聊天窗口标题")],-1),fa=_({__name:"index",setup(n){return(t,s)=>(c(),d("div",pa,[ma,a(ca),a(va)]))}});const ha={class:"home"},ya=_({__name:"index",setup(n){return(t,s)=>(c(),d("main",ha,[a(aa),a(fa)]))}});const ga=m(ya,[["__scopeId","data-v-2ca87b44"]]);export{ga as default};
