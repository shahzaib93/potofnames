(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(3678)}])},3678:function(e,n,s){"use strict";s.r(n),s.d(n,{__N_SSG:function(){return j},default:function(){return v}});var a=s(5666),t=s.n(a),i=s(5893),l=s(9008),c=(s(5675),s(1664)),r=s(7294),o=s(3299),d=s(1379),m=s.n(d),h=s(2814),u=s(1417);function x(e,n,s,a,t,i,l){try{var c=e[i](l),r=c.value}catch(o){return void s(o)}c.done?n(r):Promise.resolve(r).then(a,t)}function f(e){return function(){var n=this,s=arguments;return new Promise((function(a,t){var i=e.apply(n,s);function l(e){x(i,a,t,l,c,"next",e)}function c(e){x(i,a,t,l,c,"throw",e)}l(void 0)}))}}function p(e){return function(e){if(Array.isArray(e)){for(var n=0,s=new Array(e.length);n<e.length;n++)s[n]=e[n];return s}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var j=!0;function v(e){var n=e.participants,s=[],a=(0,r.useState)({items:[],seg:[]}),d=a[0],x=a[1],j=(0,o.useSession)().data,v=(0,r.useState)(!1),g=v[0],N=v[1],b=[{name:"Asif"},{name:"Jami"},{name:"Zahid"},{name:"Khalid"},{name:"Kayani"},{name:"Mahir"},{name:"Shehzad"},{name:"Aslam"}];j?(console.log("You're signed in"),console.log(j)):console.log("You are signed out"),(0,r.useEffect)((function(){var e=[];if(j)n.map((function(n){e.push(n.name)})),x({items:p(n),seg:e});else{var s=[];b.map((function(e){s.push(e.name)})),x({items:p(b),seg:s})}}),[n,j]),(0,r.useEffect)((function(){console.log(d),console.log("Coming from useEffects")}),[d]);for(var y=0;y<d.seg.length;y++)y%2===0?s.push("#4f56a5"):s.push("#dfdede");var w=f(t().mark((function e(n){var s,a;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,fetch("https://potofnames.com/api/participants",{body:JSON.stringify({name:n.target.participantName.value}),headers:{"Content-Type":"application/json"},method:"POST"});case 3:return s=e.sent,e.next=6,s.json();case 6:a=e.sent,console.log(a.addParticipant),x({items:p(d.items).concat([a.addParticipant]),seg:p(d.seg).concat([a.addParticipant.name])}),n.target.participantName.value="";case 10:case"end":return e.stop()}}),e)}))),P=f(t().mark((function e(n,s){var a,i,l;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return function(e){return e==s},a=d.items[s],console.log("Delete function data"),console.log(a),e.next=6,fetch("https://potofnames.com/api/participants",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 6:return i=e.sent,e.next=9,i.json();case 9:l=e.sent,x({items:d.items.filter((function(e,n){return n!==s})),seg:d.seg.filter((function(e,n){return n!==s}))}),console.log(l);case 12:case"end":return e.stop()}}),e)})));return(0,i.jsxs)("div",{className:"container container-sm container-md mb-5",children:[(0,i.jsxs)(l.default,{children:[(0,i.jsx)("title",{children:"Pot of Names"}),(0,i.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsx)("header",{className:"row",children:(0,i.jsx)("div",{className:"col-12 ",children:(0,i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light",children:(0,i.jsxs)("div",{className:"container-fluid",children:[(0,i.jsx)("a",{className:"navbar-brand",href:"#",children:(0,i.jsx)("img",{src:"logo.jpg",width:"150"})}),(0,i.jsx)("div",{className:"d-flex",children:(0,i.jsxs)("div",{className:"navbar-nav",children:[(0,i.jsx)("a",{className:"nav-link active px-4","aria-current":"page",href:"#",children:"SETTING"}),j?(0,i.jsx)("a",{className:"nav-link px-4",href:"#",onClick:function(){return(0,o.signOut)()},children:"LOGOUT"}):(0,i.jsx)("a",{className:"nav-link px-4",href:"#","data-bs-toggle":"modal","data-bs-target":"#loginModal",children:"LOGIN"})]})})]})})})}),(0,i.jsxs)("main",{children:[(0,i.jsx)("div",{className:"row justify-content-center",children:(0,i.jsxs)("div",{className:"col-12 col-md-6",children:[d.seg.length>0&&(0,i.jsx)(m(),{segments:d.seg,segColors:s,onFinished:function(e){return function(e){console.log(e),alert(e)}(e)},primaryColor:"gray",contrastColor:"white",isOnlyOnce:!1,size:290,upDuration:100,downDuration:1e3,shouldWeSpin:g,setShouldWeSpin:N,fontFamily:"Arial"}),(0,i.jsx)("div",{className:"clearfix"})]})}),(0,i.jsx)("div",{className:"row justify-content-center",children:(0,i.jsx)("div",{className:"col-6 col-md-2 m-5 text-center",children:(0,i.jsx)("button",{className:"btn btn-purple btn-radius bg-purple text-white btn-radius btn-lg",children:"3D MODE"})})}),(0,i.jsxs)("form",{className:"row justify-content-center",method:"post",onSubmit:w,children:[(0,i.jsx)("div",{className:"col-8 col-md-5 ",children:(0,i.jsxs)("div",{className:"input-group mycustom ",children:[(0,i.jsx)("input",{type:"text",className:"form-control",placeholder:"Participant Name",name:"participantName",required:!0}),(0,i.jsx)("div",{className:"input-group-prepend",children:(0,i.jsx)("button",{type:"submit",className:"btn btn-radius btn-sm",id:"inputGroupPrepend2",children:(0,i.jsx)("img",{src:"plus.png",width:"25",className:"m-1"})})})]})}),(0,i.jsx)("div",{className:"col-2 col-md-1",children:(0,i.jsx)("div",{id:"spinBtn",onClick:function(){return N(!0)},className:"my-2 text-purple fs-4 fw-bold",children:"Spin"})})]}),(0,i.jsx)("div",{className:"m-5 test",children:(0,i.jsx)("div",{className:"row",children:d.items.map((function(e,n){return(0,i.jsx)("div",{className:"col-6 col-md-6",children:(0,i.jsx)("div",{className:"card mb-3 name-card",children:(0,i.jsxs)("div",{className:"row g-0",children:[(0,i.jsx)("div",{className:" col-4 col-md-4",children:(0,i.jsx)("img",{src:"logo.jpg",className:"img-fluid rounded-circle",alt:"..."})}),(0,i.jsx)("div",{className:"col-7 col-md-7",children:(0,i.jsx)("div",{className:"card-body",children:(0,i.jsx)("div",{children:(0,i.jsx)("h5",{className:"card-title",children:e.name})},e._id)})}),(0,i.jsx)("div",{className:"col-1",children:(0,i.jsx)("div",{onClick:function(){return P(e._id,n)},children:"x"})})]})})})}))})}),(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-12",children:(0,i.jsx)("div",{className:"modal fade login-modal",id:"loginModal",tabIndex:"-1","aria-labelledby":"loginModalLabel","aria-hidden":"true",children:(0,i.jsx)("div",{className:"modal-dialog",children:(0,i.jsxs)("div",{className:"modal-content",children:[(0,i.jsxs)("div",{className:"modal-header",children:[(0,i.jsx)("h5",{className:"modal-title",id:"loginModalLabel",children:"Login to your account"}),(0,i.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),(0,i.jsx)("div",{className:"modal-body",children:(0,i.jsxs)("form",{children:[(0,i.jsxs)("div",{className:"mb-3",children:[(0,i.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Email address"}),(0,i.jsx)("input",{type:"text",name:"username",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"})]}),(0,i.jsxs)("div",{className:"mb-3",children:[(0,i.jsx)("label",{htmlFor:"exampleInputPassword1",className:"form-label",children:"Password"}),(0,i.jsx)("input",{type:"password",name:"password",className:"form-control",id:"exampleInputPassword1"})]}),(0,i.jsxs)("div",{className:"d-grid gap-2",children:[(0,i.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",children:"Login"}),(0,i.jsx)("button",{className:"btn btn-outline-secondary",onClick:function(){return(0,o.signIn)()},type:"button",children:"Sign in with Google"})]})]})})]})})})})}),(0,i.jsx)("div",{className:"row my-5",children:(0,i.jsx)("div",{className:"col-8 mx-auto",children:(0,i.jsx)("div",{className:"fw-bold fs-5 text-center",children:"Welcome to the most interactive and fun website for picking names,making unbaised decisions and spin a wheel interaction"})})})]}),(0,i.jsxs)("footer",{children:[(0,i.jsxs)("div",{className:"row my-5 justify-content-center",children:[(0,i.jsx)("div",{className:"col-3",children:(0,i.jsxs)("div",{className:"card footer-card text-center",children:[(0,i.jsx)("img",{src:"unlimitednames.png",className:"card-img-top mx-auto d-block"}),(0,i.jsxs)("div",{className:"card-body",children:[(0,i.jsx)("h5",{className:"card-title",children:"Unlimited Names"}),(0,i.jsx)("p",{className:"card-text text-secondary",children:(0,i.jsx)("small",{children:"Enter over 250 names without any glitch or hassel."})})]})]})}),(0,i.jsx)("div",{className:"col-3",children:(0,i.jsxs)("div",{className:"card footer-card text-center",children:[(0,i.jsx)("img",{src:"checkicon.png",className:"card-img-top mx-auto d-block"}),(0,i.jsxs)("div",{className:"card-body",children:[(0,i.jsx)("h5",{className:"card-title",children:"Top Security"}),(0,i.jsx)("p",{className:"card-text text-secondary",children:(0,i.jsx)("small",{children:"We are committed to protecting and respecting your privacy and the security of your data."})})]})]})}),(0,i.jsx)("div",{className:"col-3",children:(0,i.jsxs)("div",{className:"card footer-card text-center",children:[(0,i.jsx)("img",{src:"speechicon.png",className:"card-img-top mx-auto d-block"}),(0,i.jsxs)("div",{className:"card-body",children:[(0,i.jsx)("h5",{className:"card-title",children:"How to use Pot of Names"}),(0,i.jsx)("p",{className:"card-text text-secondary",children:(0,i.jsx)("small",{children:"Type in your entries in the textbox to the right of the wheel. Click the wheel to spin it and get a random winner."})})]})]})})]}),(0,i.jsx)("div",{className:"row my-5",children:(0,i.jsx)("div",{className:"col-12",children:(0,i.jsxs)("ul",{className:"footer-social-icons",children:[(0,i.jsx)("li",{children:(0,i.jsx)(h.G,{icon:u.mdU,className:"fontawesome-icon"})}),(0,i.jsx)("li",{children:(0,i.jsx)(h.G,{icon:u.AYu,className:"fontawesome-icon facebook-icon"})}),(0,i.jsx)("li",{children:(0,i.jsx)(h.G,{icon:u.eGW,className:"fontawesome-icon"})}),(0,i.jsx)("li",{children:(0,i.jsx)(h.G,{icon:u.hwn,className:"fontawesome-icon"})}),(0,i.jsx)("li",{children:(0,i.jsx)(h.G,{icon:u.Xg5,className:"fontawesome-icon"})})]})})}),(0,i.jsxs)("div",{className:"row justify-content-center",children:[(0,i.jsx)("div",{className:"col-2",children:(0,i.jsx)(c.default,{href:"https://potofnames.com/",children:(0,i.jsx)("img",{src:"logo.jpg",className:"img-fluid sponsor-img",alt:"..."})})}),(0,i.jsx)("div",{className:"col-2",children:(0,i.jsx)(c.default,{href:"https://pickapot.com/",children:(0,i.jsx)("img",{src:"paplogo.png",className:"img-fluid sponsor-img",alt:"..."})})})]}),(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-12",children:(0,i.jsx)("p",{className:"text-center",children:(0,i.jsx)("small",{children:"A Project of PICKAPOT LLC. Trademarks and brands are the property of their respective owners."})})})}),(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-12",children:(0,i.jsx)("p",{className:"text-center",children:(0,i.jsx)("small",{children:"\xa9 2021 POTOFNAMES LLC. ALL RIGHT RESERVED."})})})})]})]})}},1379:function(e,n,s){"use strict";var a=s(7294);e.exports=a.memo((function(e){var n=e.shouldWeSpin,s=e.setShouldWeSpin,t=e.segments,i=e.segColors,l=e.winningSegment,c=e.onFinished,r=e.primaryColor,o=void 0===r?"black":r,d=e.contrastColor,m=void 0===d?"white":d,h=e.isOnlyOnce,u=void 0===h||h,x=e.size,f=void 0===x?290:x,p=e.upDuration,j=void 0===p?100:p,v=e.downDuration,g=void 0===v?1e3:v,N=e.fontFamily,b=void 0===N?"proxima-nova":N,y="",w=!1,P=a.useState(!1),S=P[0],k=P[1],E=0,I=t.length,M=0,T=0,C=null,O=Math.PI/(""+t.length),_=t.length*j,A=t.length*g,G=0,L=0,D=300,W=300;a.useEffect((function(){F()}),[t]),a.useEffect((function(){n&&(F(),R(),s(!1))}),[n]);var F=function(){B(),H()},B=function(){var e=document.getElementById("canvas");C=e.getContext("2d")},R=function(){w=!0,0===E&&(G=(new Date).getTime(),O=Math.PI/t.length,L=0,E=setInterval(z,I))},z=function(){L++,J();var e=(new Date).getTime()-G,n=0,s=!1;for(e<_?(n=e/_,T=O*Math.sin(n*Math.PI/2)):(l&&y===l&&L>t.length?(n=e/_,T=O*Math.sin(n*Math.PI/2+Math.PI/2),n=1):(n=e/A,T=O*Math.sin(n*Math.PI/2+Math.PI/2)),n>=1&&(s=!0)),M+=T;M>=2*Math.PI;)M-=2*Math.PI;s&&(k(!0),c(y),clearInterval(E),E=0,T=0)},H=function(){Y(),U(),X()},J=function(){Y(),U(),X()},K=function(e,n,s){var a=C,l=t[e];a.save(),a.beginPath(),a.moveTo(D,W),a.arc(D,W,f,n,s,!1),a.lineTo(D,W),a.closePath(),a.fillStyle=i[e],a.fill(),a.stroke(),a.save(),a.translate(D,W),a.rotate((n+s)/2),a.fillStyle=m,a.font="bold 1em "+b,a.fillText(l.substr(0,21),f/2+20,0),a.restore()},U=function(){var e=C,n=M,s=t.length,a=2*Math.PI;e.lineWidth=1,e.strokeStyle=o,e.textBaseline="middle",e.textAlign="center",e.font="1em "+b;for(var i=1;i<=s;i++){var l=a*(i/s)+M;K(i-1,n,l),n=l}e.beginPath(),e.arc(D,W,50,0,a,!1),e.closePath(),e.fillStyle=o,e.lineWidth=10,e.strokeStyle=m,e.fill(),e.font="bold 1em "+b,e.fillStyle=m,e.textAlign="center",e.stroke(),e.beginPath(),e.arc(D,W,f,0,a,!1),e.closePath(),e.lineWidth=10,e.strokeStyle=o,e.stroke()},X=function(){var e=C,n=M+Math.PI/2,s=t.length-Math.floor(n/(2*Math.PI)*t.length)-1;s<0&&(s+=t.length),e.textAlign="center",e.textBaseline="middle",e.fillStyle=o,e.font="bold 1.5em "+b,y=t[s],w&&e.fillText(y,310,W+f+50)},Y=function(){C.clearRect(0,0,1e3,800)};return a.createElement("div",{id:"wheel",width:"600",height:"600"},a.createElement("canvas",{id:"canvas",width:"600",height:"600",className:"mx-auto d-block canvas",style:{pointerEvents:S&&u?"none":"auto"}}))}))}},function(e){e.O(0,[774,112,444,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);