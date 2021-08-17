(this.webpackJsonpecohouse_v2=this.webpackJsonpecohouse_v2||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(8),c=n.n(s),o=n(7),i=o.c,u=n(9),l={loaded:!0,loading:!1,error:!1},d={loaded:!1,loading:!0,error:!1},h={loaded:!1,loading:!1,error:!0},f=Object(u.b)({name:"houseTemperature",initialState:{data:[],status:{loaded:!1,loading:!1,error:!1}},reducers:{houseDataFetch:function(e){e.status=d},houseDataLoaded:function(e,t){e.status=l,e.data=t.payload},houseDataError:function(e){e.status=h}}}),j=f.actions,b=j.houseDataFetch,m=j.houseDataLoaded,p=j.houseDataError,x=f.reducer,O=n(10),v=n(16),w=(n(15),n(1));function g(){var e=i((function(e){return e.houseTemp})).data,t=Object(r.useState)(),n=Object(O.a)(t,2),a=n[0],s=n[1],c=e.map((function(e){return{x:e.timestamp,y:e.temp}}));return Object(r.useEffect)((function(){var e=function(e){return new v.a("myChart",{type:"line",data:{datasets:[{data:e,borderWidth:1,borderColor:"#AB2B00",backgroundColor:"#D13400",label:"Temp"}]},options:{maintainAspectRatio:!1,scales:{x:{type:"time",time:{tooltipFormat:"lll"},title:{display:!0,text:"Date"}}}}})}(c);s(e)}),[]),Object(r.useEffect)((function(){a&&(!function(e,t){e.data.datasets[0].data=t,e.update()}(a,c),a.update())}),[a,c]),Object(w.jsx)("div",{className:"bg-white border-transparent rounded-lg shadow-xl p-10",style:{position:"relative",height:"60vh",width:"60vw"},children:Object(w.jsx)("canvas",{id:"myChart"})})}function y(e){return e.reduce((function(e,t){return e+=t.temp}),0)/e.length}var D=(new Date).toISOString().slice(0,10);function C(){var e=i((function(e){return e.houseTemp})).data,t=e[e.length-1],n=e.filter((function(e){return e.timestamp.includes(D)})),r=new Date(Date.parse(null===t||void 0===t?void 0:t.timestamp)).toLocaleString(),a=y(e),s=y(n);return Object(w.jsxs)("div",{className:"bg-white border-transparent rounded-lg shadow-xl p-10 h-full flex flex-col justify-between",children:[Object(w.jsxs)("div",{children:[Object(w.jsx)("h1",{className:"text-xl font-semibold mb-4",children:"Stats"}),"Current: ",null===t||void 0===t?void 0:t.temp," \xb0C",Object(w.jsx)("br",{}),"Today mean: ",s.toFixed(2)," \xb0C ",Object(w.jsx)("br",{}),"All time mean: ",a.toFixed(2)," \xb0C ",Object(w.jsx)("br",{})]}),Object(w.jsxs)("p",{className:"text-sm text-gray-400",children:["Last data: ",r]})]})}var N=n(14),F=n.n(N),T=n(17),E=function(){var e=Object(T.a)(F.a.mark((function e(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://8o8h5nqi81.execute-api.eu-west-2.amazonaws.com/tempData").then((function(e){return e.json()})).then((function(e){return e.Items.sort()})).catch((function(){return console.error("Couldn't fetch data"),[]})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();var S=function(){var e=(new Date).getFullYear(),t=Object(o.b)(),n=i((function(e){return e.houseTemp})).status;return Object(r.useEffect)((function(){t(b()),E().then((function(e){return t(m(e))})).catch((function(){return t(p())}))}),[t]),n.loading?Object(w.jsx)("div",{children:"Loading...."}):n.error?Object(w.jsx)("div",{children:"Error!"}):Object(w.jsxs)("div",{className:"min-h-screen h-full bg-gray-800 p-3 flex flex-col justify-between",children:[Object(w.jsx)("header",{className:"text-2xl font-bold text-white h-12 flex justify-center",children:"Eco house - dashboard"}),Object(w.jsxs)("main",{className:"flex flex-row flex-wrap p-6 justify-between items-stretch",children:[Object(w.jsx)("div",{className:"p-6",children:Object(w.jsx)(g,{})}),Object(w.jsx)("div",{className:"p-6 flex-grow",children:Object(w.jsx)(C,{})})]}),Object(w.jsxs)("footer",{className:"h-12 flex items-center justify-center w-full border-t text-white",children:["Created with \u2615 \xa0",Object(w.jsx)("a",{className:"hover:text-gray-400",href:"https://www.jkrymarys.pl/",children:"\xa0jkrymarys.pl\xa0"}),"\xa9\xa0",e]})]})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))},k=Object(u.a)({reducer:{houseTemp:x}});n(29);c.a.render(Object(w.jsx)(a.a.StrictMode,{children:Object(w.jsx)(o.a,{store:k,children:Object(w.jsx)(S,{})})}),document.getElementById("root")),L()}},[[30,1,2]]]);
//# sourceMappingURL=main.bbf2aada.chunk.js.map