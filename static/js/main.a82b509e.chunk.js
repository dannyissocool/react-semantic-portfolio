(this.webpackJsonpportfolio1=this.webpackJsonpportfolio1||[]).push([[0],{106:function(e,t,c){},111:function(e,t,c){},112:function(e,t,c){},115:function(e,t,c){},116:function(e,t,c){},117:function(e,t,c){},118:function(e,t,c){},119:function(e,t,c){},121:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c.n(s),n=c(35),i=c.n(n),r=c(22),o=c(135),l=c(133),j=c(2),b=Object(s.createContext)(),d=function(e){var t=e.children,c=Object(s.useState)(!1),a=Object(r.a)(c,2),n=a[0],i=a[1];return Object(j.jsx)(b.Provider,{value:{open:n,setOpen:i},children:t})},m=c(15),h=(c(106),function(){var e=Object(s.useState)({activeItem:"aboutMe"}),t=Object(r.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(!1),i=Object(r.a)(n,2),d=(i[0],i[1]),h=Object(s.useContext)(b),u=h.open,O=h.setOpen,x=c.activeItem;return window.addEventListener("scroll",(function(){window.scrollY>80?d(!0):d(!1)})),Object(s.useEffect)((function(){var e=window.location.href.split("/"),t=e[e.length-1].toLowerCase(),c=document.getElementById(t);c&&c.scrollIntoView({behavior:"smooth",block:"start"})}),[]),Object(j.jsx)(o.a,{inverted:!0,id:"navbar",children:Object(j.jsxs)(l.a,{children:[Object(j.jsx)(o.a.Item,{as:m.b,to:"/",className:"logo",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},header:!0,children:"Meuse"}),Object(j.jsx)("div",{className:"spacer",style:{flex:1}}),Object(j.jsxs)("div",{onClick:function(){return O(!u)},className:"hamburger ".concat(u?"active":null),children:[Object(j.jsx)("div",{className:"bar "}),Object(j.jsx)("div",{className:"bar "}),Object(j.jsx)("div",{className:"bar "})]}),Object(j.jsxs)("div",{className:"nav-items active",children:[Object(j.jsx)(o.a.Item,{as:m.b,to:"/about",name:"aboutMe",active:"aboutMe"===x,onClick:function(e,t){var c=t.name;a({activeItem:c});var s=document.getElementById("about");s&&s.scrollIntoView({behavior:"smooth",block:"start"})}}),Object(j.jsx)(o.a.Item,{as:m.b,to:"/portfolio",name:"Portfolio",active:"Portfolio"===x,onClick:function(e,t){var c=t.name;a({activeItem:c});var s=document.getElementById("portfolio");s&&s.scrollIntoView({behavior:"smooth",block:"start"})}}),Object(j.jsx)(o.a.Item,{as:m.b,to:"/contact",name:"Contact",active:"Contact"===x,onClick:function(e,t){var c=t.name;a({activeItem:c});var s=document.getElementById("contact");s&&s.scrollIntoView({behavior:"smooth",block:"start"})}})]})]})})}),u=c(139),O=(c(111),function(){var e=Object(s.useContext)(b),t=e.open,c=e.setOpen;return Object(j.jsx)(u.a,{className:"grid-base-level",columns:1,children:Object(j.jsx)(u.a.Column,{children:Object(j.jsx)(o.a,{onClick:function(e){e.currentTarget.classList.contains("side-bar")||(console.log("gotem"),c(!t))},inverted:!0,pointing:!0,className:"side-bar ".concat(t?"active":null),children:Object(j.jsxs)("div",{className:"side-bar-links",children:[Object(j.jsx)(o.a.Item,{name:"About Me",as:m.b,to:"/about",onClick:function(){var e=document.getElementById("about");e&&e.scrollIntoView({behavior:"smooth",block:"start"}),c(!t)},className:"side-bar-link",children:"About Me"}),Object(j.jsx)(o.a.Item,{name:"Portfolio",as:m.b,to:"/portfolio",onClick:function(){var e=document.getElementById("portfolio");e&&e.scrollIntoView({behavior:"smooth",block:"start"}),c(!t)},className:"side-bar-link"}),Object(j.jsx)(o.a.Item,{name:"Contact",as:m.b,to:"/contact",onClick:function(){var e=document.getElementById("contact");e&&e.scrollIntoView({behavior:"smooth",block:"start"}),c(!t)},className:"side-bar-link"})]})})})})}),x=c(140),v=c(138),f=c(90),g=(c(112),c.p+"static/media/selfie1.1334db41.jpg"),p=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){a(!0)}),[]),Object(j.jsx)("div",{className:"background",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(l.a,{id:"hero-elements",children:Object(j.jsxs)("section",{className:"hero  ".concat(c?"active":""),children:[Object(j.jsxs)("div",{className:"text-and-button",children:[Object(j.jsx)(x.a,{as:"h1",children:"Hello there..."}),Object(j.jsxs)(x.a,{as:"h2",children:["I'm Danny. ",Object(j.jsx)("br",{}),"I'm a Frontend Developer. ",Object(j.jsx)("br",{})]}),Object(j.jsx)(v.a,{as:m.b,to:"/about",onClick:function(){var e=document.getElementById("about");e&&e.scrollIntoView({behavior:"smooth",block:"start"})},className:"btn",primary:!0,children:"About Me"})]}),Object(j.jsx)(f.a,{src:g,className:"hero-image"})]})})})})},I=c(33),N=c(136),k=Object(s.createContext)(),w=function(e){var t=e.children,c=Object(s.useState)(!1),a=Object(r.a)(c,2),n=a[0],i=a[1];return Object(j.jsx)(k.Provider,{value:{onScreen:n,setOnScreen:i},children:t})},y=(c(115),c.p+"static/media/danpug.98c52d4a.jpg"),C=function(){var e=Object(s.useContext)(k);e.onScreen,e.setOnScreen;return Object(s.useEffect)((function(){new IntersectionObserver((function(e){var t=document.querySelector("#bio-contents");e[0].isIntersecting?t.className="bio-contents active":t.className="bio-contents"}),{threshold:.6}).observe(document.querySelector("#bio"))})),Object(s.useEffect)((function(){new IntersectionObserver((function(e){var t=document.querySelectorAll(".icon-card"),c=Array.from(t);console.log(c),console.log(e[0].isIntersecting);for(var s=0;s<c.length;s++)e[0].isIntersecting?c[s].className="icon-card active":c[s].className="icon-card"}),{threshold:.8}).observe(document.querySelector("#icon-cards"))})),Object(j.jsxs)("div",{className:"about",id:"about",children:[Object(j.jsx)("h1",{className:"header",children:"About Me"}),Object(j.jsx)("section",{className:"biography",id:"bio",children:Object(j.jsxs)("div",{id:"bio-contents",children:[Object(j.jsx)("img",{src:y,className:"image"}),Object(j.jsx)("p",{children:"My name is Danny Meuse. I am a Junior Frontend Web Developer focusing on React and Vanilla Javascript. I am working towards eventually becoming a fullstack developer. I look forward to using my style and skills to help clients build modern interactive and responsive websites."})]})}),Object(j.jsx)(l.a,{children:Object(j.jsxs)("section",{className:"icon-cards",id:"icon-cards",children:[Object(j.jsxs)("div",{className:"icon-card",children:[Object(j.jsx)(I.a,{name:"code",className:"icon",size:"big",circular:!0}),Object(j.jsx)("h2",{className:"card-header",children:"Web Development"}),Object(j.jsxs)(N.a,{className:"list",children:[Object(j.jsx)(N.a.Item,{children:"HTML, CSS, Javascript, React"}),Object(j.jsx)(N.a.Item,{children:"SCSS, Semantic-UI, Tailwind, Material-UI"})]})]}),Object(j.jsxs)("div",{className:"icon-card",children:[Object(j.jsx)(I.a,{name:"paint brush",className:"icon",size:"big",circular:!0}),Object(j.jsx)("h2",{className:"card-header",children:"Web Design"}),Object(j.jsxs)(N.a,{className:"list",children:[Object(j.jsx)(N.a.Item,{children:"Photoshop"}),Object(j.jsx)(N.a.Item,{children:"Illustrator"}),Object(j.jsx)(N.a.Item,{children:"GIMP"}),Object(j.jsx)(N.a.Item,{children:"Figma"})]})]}),Object(j.jsxs)("div",{className:"icon-card",children:[Object(j.jsx)(I.a,{name:"youtube play",className:"icon",size:"big",circular:!0}),Object(j.jsx)("h2",{className:"card-header",children:"Photo/Video Editing"}),Object(j.jsxs)(N.a,{children:[Object(j.jsx)(N.a.Item,{children:"Adobe Premier"}),Object(j.jsx)(N.a.Item,{children:"Final Cut Pro"})]})]})]})})]})},S=(c(116),c(89)),E=(c(137),c(117),c(91)),M=function(){return Object(j.jsxs)(E.a,{className:"project",children:[Object(j.jsx)(E.a.Image,{id:"img",size:"tiny",src:"https://react.semantic-ui.com/images/wireframe/image.png"}),Object(j.jsxs)(E.a.Content,{children:[Object(j.jsx)(E.a.Header,{id:"header",as:"a",children:"Header"}),Object(j.jsx)(E.a.Description,{children:Object(j.jsx)("p",{id:"desc",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum in obcaecati quam numquam natus, debitis ab est consectetur, officiis"})}),Object(j.jsxs)("div",{className:"links",children:[Object(j.jsx)(E.a.Extra,{id:"link",as:"a",href:"https://github.com/dannyissocool",children:"Github Repo"}),Object(j.jsx)(E.a.Extra,{id:"link",as:"a",href:"https://github.com/dannyissocool",children:"Live on Github Pages"})]})]})]})},P=function(){return Object(j.jsx)("section",{className:"projects-section",id:"portfolio",children:Object(j.jsxs)(l.a,{className:"projects-container",children:[Object(j.jsx)("h1",{className:"header",children:"Past Projects"}),Object(j.jsxs)(S.a,{divided:!0,className:"projects",children:[Object(j.jsx)(M,{}),Object(j.jsx)(M,{}),Object(j.jsx)(M,{}),Object(j.jsx)(M,{})]})]})})},V=(c(118),function(){return Object(j.jsxs)("div",{className:"contact-section",id:"contact",children:[Object(j.jsx)("h1",{className:"contact-header",children:"Contact Me"}),Object(j.jsxs)("ul",{className:"contact-links",children:[Object(j.jsx)("li",{children:Object(j.jsxs)("a",{href:"mailto:danny.meuse@gmail.com",rel:"noreferrer",target:"_blank",children:[Object(j.jsx)(I.a,{name:"mail"}),"Gmail"]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("a",{href:"https://www.github.com/dannyissocool",rel:"noreferrer",target:"_blank",children:[Object(j.jsx)(I.a,{name:"github"}),"Github"]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("a",{href:"https://twitter.com/DannyMeuse",rel:"noreferrer",target:"_blank",children:[Object(j.jsx)(I.a,{name:"twitter"}),"Twitter"]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("a",{href:"https://instagram.com/dmeuse/",rel:"noreferrer",target:"_blank",children:[Object(j.jsx)(I.a,{name:"instagram"}),"Instagram"]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("a",{rel:"noreferrer",href:"https://www.linkedin.com/in/daniel-meuse-a28079a6/",target:"_blank",children:[Object(j.jsx)(I.a,{name:"linkedin"}),"LinkedIn"]})})]}),Object(j.jsx)("h3",{children:"I live in Portland."})]})}),B=(c(119),function(){return Object(j.jsx)("div",{className:"footer",children:"Thanks for visiting my page."})}),D=c(134);c(120);var A=function(){return Object(j.jsxs)(m.a,{children:[Object(j.jsxs)(d,{children:[Object(j.jsx)(h,{}),Object(j.jsx)(O,{})]}),Object(j.jsxs)(w,{children:[Object(j.jsx)(p,{}),Object(j.jsx)(C,{}),Object(j.jsx)(P,{}),Object(j.jsx)(V,{}),Object(j.jsx)(D.a,{})]}),Object(j.jsx)(B,{})]})};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(A,{})}),document.getElementById("root"))}},[[121,1,2]]]);
//# sourceMappingURL=main.a82b509e.chunk.js.map