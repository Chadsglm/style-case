(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{EcgH:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/item",function(){return e("mfwm")}])},mfwm:function(n,t,e){"use strict";e.r(t);var i=e("q1tI"),r=e.n(i),a=e("0iUn"),u=e("sLSF"),l=e("MI3g"),o=e("a7VT"),d=e("Tit0"),c=e("rt45"),m=e("lTCR"),s=e.n(m),g=e("4KRT"),f=e("VUBQ"),p=e("vOnD"),w=e("8Kt/"),h=e.n(w),b=r.a.createElement;function v(){var n=Object(c.a)(["\n  query SINGLE_ITEM_QUERY($id: ID!) {\n    item(where: { id: $id }) {\n      id\n      title\n      description\n      largeImage\n    }\n  }\n"]);return v=function(){return n},n}var I=p.b.div.withConfig({displayName:"SingleItem__SingleItemStyles",componentId:"sc-3ggjme-0"})(["max-width:1200px;margin:2rem auto;box-shadow:",";display:grid;grid-auto-columns:1fr;grid-auto-flow:column;min-height:800px;img{width:100%;height:100%;object-fit:contain;}.details{margin:3rem;font-size:2rem;}"],(function(n){return n.theme.bs})),y=s()(v()),_=function(n){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(d.a)(t,n),Object(u.a)(t,[{key:"render",value:function(){var n=this;return b(g.Query,{query:y,variables:{id:this.props.id}},(function(t){var e=t.error,i=t.loading,r=t.data;if(e)return b(f.a,{error:e});if(i)return b("p",null,"Loading...");if(!r.item)return b("p",null,"No Item Found for ",n.props.id);var a=r.item;return b(I,null,b(h.a,null,b("title",null,"Style Case | ",a.title)),b("img",{src:a.largeImage,alt:a.title}),b("div",{className:"details"},b("h2",null,"Viewing ",a.title),b("p",null,a.description)))}))}}]),t}(i.Component),E=r.a.createElement;t.default=function(n){return E("div",null,E(_,{id:n.query.id}))}}},[["EcgH",1,0]]]);