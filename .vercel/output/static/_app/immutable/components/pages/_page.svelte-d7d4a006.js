import{S as Z,i as G,s as Q,k as w,a as I,q as F,l as y,m as _,h as u,c as D,r as T,n as s,C as oe,b as O,D as p,B as j,G as M,H as P,E as ue,F as he,Q as A,J as q,K as ce,w as ee,x as te,y as se,f as ae,t as ne,z as re}from"../../chunks/index-0074f48a.js";const de=""+new URL("../../assets/pcs-46eabb68.mp4",import.meta.url).href;function pe(i){let e,a,t,n,h,m,c,o,r,v,g,x;return{c(){e=w("section"),a=w("div"),t=I(),n=w("video"),m=I(),c=w("div"),o=w("h1"),r=F("Quality Catholic Education"),v=I(),g=w("p"),x=F("Through Faith, Hope, & Charity"),this.h()},l(f){e=y(f,"SECTION",{class:!0});var d=_(e);a=y(d,"DIV",{class:!0}),_(a).forEach(u),t=D(d),n=y(d,"VIDEO",{src:!0,class:!0}),_(n).forEach(u),m=D(d),c=y(d,"DIV",{class:!0});var b=_(c);o=y(b,"H1",{class:!0});var E=_(o);r=T(E,"Quality Catholic Education"),E.forEach(u),v=D(b),g=y(b,"P",{class:!0});var C=_(g);x=T(C,"Through Faith, Hope, & Charity"),C.forEach(u),b.forEach(u),d.forEach(u),this.h()},h(){s(a,"class","w-full h-20 bg-gradient-to-t from-nav-gradient absolute bottom-0 left-0 z-50"),oe(n.src,h=de)||s(n,"src",h),n.autoplay=!0,n.loop=!0,n.muted=!0,s(n,"class","w-full h-screen object-cover brightness-[40%]"),s(o,"class","text-5xl lg:text-7xl my-10"),s(g,"class","text-base"),s(c,"class","text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center pointer-events-none"),s(e,"class","relative")},m(f,d){O(f,e,d),p(e,a),p(e,t),p(e,n),p(e,m),p(e,c),p(c,o),p(o,r),p(c,v),p(c,g),p(g,x)},p:j,i:j,o:j,d(f){f&&u(e)}}}class fe extends Z{constructor(e){super(),G(this,e,null,pe,Q,{})}}const me=""+new URL("../../assets/gradeSchool-bde49ee1.gif",import.meta.url).href,ve=""+new URL("../../assets/juniorHigh-da5bbdf7.gif",import.meta.url).href,ge=""+new URL("../../assets/seniorHigh-3bfaf3fd.gif",import.meta.url).href,_e={root:null,rootMargin:"0px",threshold:0,unobserveOnEnter:!1},B=(i,e)=>new CustomEvent(i,{detail:e});function z(i,e={}){const{root:a,rootMargin:t,threshold:n,unobserveOnEnter:h}=Object.assign(Object.assign({},_e),e);let m={x:void 0,y:void 0},c={vertical:void 0,horizontal:void 0};if(typeof IntersectionObserver<"u"&&i){const o=new IntersectionObserver((r,v)=>{r.forEach(g=>{m.y>g.boundingClientRect.y?c.vertical="up":c.vertical="down",m.x>g.boundingClientRect.x?c.horizontal="left":c.horizontal="right",m={y:g.boundingClientRect.y,x:g.boundingClientRect.x};const x={inView:g.isIntersecting,entry:g,scrollDirection:c,node:i,observer:v};i.dispatchEvent(B("change",x)),g.isIntersecting?(i.dispatchEvent(B("enter",x)),h&&v.unobserve(i)):i.dispatchEvent(B("leave",x))})},{root:a,rootMargin:t,threshold:n});return setTimeout(()=>{i.dispatchEvent(B("init",{observer:o,node:i}))},0),o.observe(i),{destroy(){o.unobserve(i)}}}}function ie(i,e,a){const t=i.slice();return t[6]=e[a],t[8]=a,t}function le(i,e){let a,t,n,h,m,c,o;return{key:i,first:null,c(){a=w("a"),t=w("img"),m=I(),this.h()},l(r){a=y(r,"A",{href:!0});var v=_(a);t=y(v,"IMG",{src:!0,alt:!0,class:!0}),m=D(v),v.forEach(u),this.h()},h(){oe(t.src,n=e[6].image)||s(t,"src",n),s(t,"alt","pcs"),s(t,"class",h=`program pointer-events-none transition-transform-opacity-filter duration-1000 ${e[2][e[8]]} ${e[0]?"md:stagger":"md:initial-stagger"}`),s(a,"href",e[6].path),this.first=a},m(r,v){O(r,a,v),p(a,t),p(a,m),c||(o=[A(z.call(null,a,e[3])),q(a,"change",e[5])],c=!0)},p(r,v){e=r,v&1&&h!==(h=`program pointer-events-none transition-transform-opacity-filter duration-1000 ${e[2][e[8]]} ${e[0]?"md:stagger":"md:initial-stagger"}`)&&s(t,"class",h)},d(r){r&&u(a),c=!1,ce(o)}}}function xe(i){let e,a,t,n,h,m,c,o,r=[],v=new Map,g=i[1];const x=f=>f[8];for(let f=0;f<g.length;f+=1){let d=ie(i,g,f),b=x(d);v.set(b,r[f]=le(b,d))}return{c(){e=w("div"),a=w("div"),t=M("svg"),n=M("path"),h=M("path"),m=M("path"),c=I(),o=w("div");for(let f=0;f<r.length;f+=1)r[f].c();this.h()},l(f){e=y(f,"DIV",{class:!0});var d=_(e);a=y(d,"DIV",{class:!0});var b=_(a);t=P(b,"svg",{"data-name":!0,xmlns:!0,viewBox:!0,preserveAspectRatio:!0});var E=_(t);n=P(E,"path",{d:!0,opacity:!0,class:!0}),_(n).forEach(u),h=P(E,"path",{d:!0,opacity:!0,class:!0}),_(h).forEach(u),m=P(E,"path",{d:!0,class:!0}),_(m).forEach(u),E.forEach(u),b.forEach(u),c=D(d),o=y(d,"DIV",{class:!0});var C=_(o);for(let V=0;V<r.length;V+=1)r[V].l(C);C.forEach(u),d.forEach(u),this.h()},h(){s(n,"d","M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"),s(n,"opacity",".25"),s(n,"class","shape-fill"),s(h,"d","M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"),s(h,"opacity",".5"),s(h,"class","shape-fill"),s(m,"d","M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"),s(m,"class","shape-fill"),s(t,"data-name","Layer 1"),s(t,"xmlns","http://www.w3.org/2000/svg"),s(t,"viewBox","0 0 1200 120"),s(t,"preserveAspectRatio","none"),s(a,"class","curve-accent"),s(o,"class","flex flex-col lg:flex-row gap-5 px-[10%] pb-[5%] pt-[15%]"),s(e,"class","programs-container")},m(f,d){O(f,e,d),p(e,a),p(a,t),p(t,n),p(t,h),p(t,m),p(e,c),p(e,o);for(let b=0;b<r.length;b+=1)r[b].m(o,null)},p(f,[d]){d&31&&(g=f[1],r=ue(r,d,x,1,f,g,v,o,he,le,null,ie))},i:j,o:j,d(f){f&&u(e);for(let d=0;d<r.length;d+=1)r[d].d()}}}function be(i,e,a){const t=[{title:"Grade School",image:me,path:"/grade-school"},{title:"Junior High",image:ve,path:"/junior-high"},{title:"Senior High",image:ge,path:"/senior-high"}],n=["","delay-200","delay-400"],h={unobserveOnEnter:!0,rootMargin:"-10%"};let m;function c(r,v){r&&setTimeout(()=>{v[0].classList.replace("duration-1000","duration-300"),v[0].classList.remove(n[1]),v[0].classList.remove(n[2]),v[0].classList.remove("pointer-events-none")},1300)}return[m,t,n,h,c,({detail:r})=>{a(0,m=r.inView),c(m,r.node.children)}]}class we extends Z{constructor(e){super(),G(this,e,be,xe,Q,{})}}function ye(i){let e,a,t,n,h,m,c,o,r,v,g,x,f,d,b,E,C,V,R,k,S,H,U,J;return e=new fe({}),S=new we({}),{c(){ee(e.$$.fragment),a=I(),t=w("div"),n=w("div"),h=w("h2"),m=F("Creating a Brighter Future"),o=I(),r=w("span"),g=I(),x=w("p"),f=F(`Pateros Catholic School is more than just a school - it's a life experience. Our unique
			approach to learning enhances our students' education and helps them to explore their dynamic
			and diverse community. Pateros Catholic School provides a rich learning environment that has
			helped countless students get ahead.`),b=I(),E=w("div"),C=w("div"),V=M("svg"),R=M("path"),k=I(),ee(S.$$.fragment),this.h()},l(l){te(e.$$.fragment,l),a=D(l),t=y(l,"DIV",{class:!0});var $=_(t);n=y($,"DIV",{class:!0});var L=_(n);h=y(L,"H2",{class:!0});var N=_(h);m=T(N,"Creating a Brighter Future"),N.forEach(u),o=D(L),r=y(L,"SPAN",{class:!0}),_(r).forEach(u),g=D(L),x=y(L,"P",{class:!0});var K=_(x);f=T(K,`Pateros Catholic School is more than just a school - it's a life experience. Our unique
			approach to learning enhances our students' education and helps them to explore their dynamic
			and diverse community. Pateros Catholic School provides a rich learning environment that has
			helped countless students get ahead.`),K.forEach(u),L.forEach(u),$.forEach(u),b=D(l),E=y(l,"DIV",{class:!0});var W=_(E);C=y(W,"DIV",{class:!0});var X=_(C);V=P(X,"svg",{"data-name":!0,xmlns:!0,viewBox:!0,preserveAspectRatio:!0});var Y=_(V);R=P(Y,"path",{d:!0,class:!0}),_(R).forEach(u),Y.forEach(u),X.forEach(u),W.forEach(u),k=D(l),te(S.$$.fragment,l),this.h()},h(){s(h,"class",c=`text-3xl md:text-4xl lg:text-5xl font-bold transition-1s-in-out ${i[0][0]?"md:slide-up":"md:initial-slide-up"}`),s(r,"class",v=`w-[90%] h-[2px] bg-accent rounded-full my-8 transition-1s-in-out ${i[0][0]?"md:expand":"md:initial-expand"}`),s(x,"class",d=`text-xl md:text-2xl transition-1s-in-out ${i[0][1]?"md:slide-up":"md:initial-slide-up"}`),s(n,"class","flex flex-col items-center justify-center pointer-events-none"),s(t,"class","home-container"),s(R,"d","M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"),s(R,"class","shape-fill"),s(V,"data-name","Layer 1"),s(V,"xmlns","http://www.w3.org/2000/svg"),s(V,"viewBox","0 0 1200 120"),s(V,"preserveAspectRatio","none"),s(C,"class","curve-white"),s(E,"class","w-full h-[50vh] bg-accent relative")},m(l,$){se(e,l,$),O(l,a,$),O(l,t,$),p(t,n),p(n,h),p(h,m),p(n,o),p(n,r),p(n,g),p(n,x),p(x,f),O(l,b,$),O(l,E,$),p(E,C),p(C,V),p(V,R),O(l,k,$),se(S,l,$),H=!0,U||(J=[A(z.call(null,h,i[1])),q(h,"change",i[2]),A(z.call(null,r,i[1])),q(r,"change",i[3]),A(z.call(null,x,i[1])),q(x,"change",i[4])],U=!0)},p(l,[$]){(!H||$&1&&c!==(c=`text-3xl md:text-4xl lg:text-5xl font-bold transition-1s-in-out ${l[0][0]?"md:slide-up":"md:initial-slide-up"}`))&&s(h,"class",c),(!H||$&1&&v!==(v=`w-[90%] h-[2px] bg-accent rounded-full my-8 transition-1s-in-out ${l[0][0]?"md:expand":"md:initial-expand"}`))&&s(r,"class",v),(!H||$&1&&d!==(d=`text-xl md:text-2xl transition-1s-in-out ${l[0][1]?"md:slide-up":"md:initial-slide-up"}`))&&s(x,"class",d)},i(l){H||(ae(e.$$.fragment,l),ae(S.$$.fragment,l),H=!0)},o(l){ne(e.$$.fragment,l),ne(S.$$.fragment,l),H=!1},d(l){re(e,l),l&&u(a),l&&u(t),l&&u(b),l&&u(E),l&&u(k),re(S,l),U=!1,ce(J)}}}function Ee(i,e,a){let t=[!1,!1];return[t,{unobserveOnEnter:!0,rootMargin:"-10%"},({detail:o})=>{a(0,t[0]=o.inView,t)},({detail:o})=>{a(0,t[0]=o.inView,t)},({detail:o})=>{a(0,t[1]=o.inView,t)}]}class Ve extends Z{constructor(e){super(),G(this,e,Ee,ye,Q,{})}}export{Ve as default};
