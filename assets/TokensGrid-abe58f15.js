var s=Object.defineProperty;var a=(n,t)=>s(n,"name",{value:t,configurable:!0});import{a as e,j as r}from"./jsx-runtime-7d07a3db.js";function l({tokens:n,hasRemValue:t}){return e("table",{className:"tokens-grid",children:[r("thead",{children:e("tr",{children:[r("th",{children:"Name"}),r("th",{children:"Value"}),t&&r("th",{children:"Pixels"})]})}),r("tbody",{children:Object.entries(n).map(([d,i])=>e("tr",{children:[e("td",{children:[" ",d," "]}),e("td",{children:[" ",i," "]}),t&&e("td",{children:[Number(i.replace("rem",""))*16,"px"]})]},d))})]})}a(l,"TokensGrid");try{l.displayName="TokensGrid",l.__docgenInfo={description:"",displayName:"TokensGrid",props:{tokens:{defaultValue:null,description:"",name:"tokens",required:!0,type:{name:"Record<string, string>"}},hasRemValue:{defaultValue:null,description:"",name:"hasRemValue",required:!1,type:{name:"boolean"}}}}}catch{}export{l as T};
//# sourceMappingURL=TokensGrid-abe58f15.js.map
