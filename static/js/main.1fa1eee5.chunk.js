(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),s=n.n(c),i=n(3),o=n.n(i),a=(n(13),n(4)),h=n(5),l=n(7),b=n(6),d=function(e){var t=e.name,n=e.email,c=e.id;return Object(r.jsxs)("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(r.jsx)("img",{src:"https://robohash.org/".concat(c,"?200x200"),alt:""}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:t}),Object(r.jsx)("p",{children:n})]})]})},j=function(e){var t=e.robots.map((function(e){return Object(r.jsx)(d,{id:e.id,name:e.name,email:e.email},e.id)}));return Object(r.jsx)("div",{children:t})},u=function(e){var t=e.searchChange;return Object(r.jsx)("div",{className:"pa2",children:Object(r.jsx)("input",{onChange:t,className:"pa3 ba b--grenn bg-lightest-blue",type:"search",placeholder:"search robots"})})},f=function(e){return Object(r.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"},children:e.children})},g=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return 0===this.state.robots.length?Object(r.jsx)("h1",{children:"Loading"}):Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"RoboFriends"}),Object(r.jsx)(u,{searchChange:this.onSearchChange}),Object(r.jsx)(f,{children:Object(r.jsx)(j,{robots:t})})]})}}]),n}(c.Component),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),s(e),i(e)}))};o.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(g,{})}),document.getElementById("root")),O()}},[[14,1,2]]]);
//# sourceMappingURL=main.1fa1eee5.chunk.js.map