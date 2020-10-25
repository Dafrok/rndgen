(function(e){function t(t){for(var c,i,l=t[0],s=t[1],u=t[2],b=0,d=[];b<l.length;b++)i=l[b],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);o&&o(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],c=!0,l=1;l<n.length;l++){var s=n[l];0!==a[s]&&(c=!1)}c&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var c={},a={app:0},r=[];function i(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=c,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(n,c,function(t){return e[t]}.bind(null,c));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/rndgen/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var o=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),a={class:"container"},r=Object(c["e"])("h1",{class:"title has-text-centered"},"可控平均值随机数集生成器",-1),i={class:"panel is-link"},l=Object(c["e"])("p",{class:"panel-heading"},"生成参数",-1),s={class:"panel-block"},u={class:"container"},o={class:"columns"},b={class:"column"},d={class:"field"},f=Object(c["e"])("label",{class:"label"},"最大值",-1),p={class:"control"},O={class:"column"},j={class:"field"},m=Object(c["e"])("label",{class:"label"},"最小值",-1),v={class:"control"},h={class:"column"},x={class:"field"},g=Object(c["e"])("label",{class:"label"},"平均值",-1),y={class:"control"},k={class:"columns"},M={class:"column"},w={class:"field"},S=Object(c["e"])("label",{class:"label"},"平均值偏差",-1),P={class:"control"},U={class:"column"},V={class:"field"},_=Object(c["e"])("label",{class:"label"},"生成数量",-1),A={class:"control"},C={class:"column"},T={class:"field"},$=Object(c["e"])("label",{class:"label"}," 离散度 ",-1),z={class:"control"},J=Object(c["e"])("p",{class:"help"},"定义域 (0, 100)，离散度越高计算越快",-1),I=Object(c["e"])("div",{class:"field"},[Object(c["e"])("div",{class:"control"},[Object(c["e"])("button",{class:"button is-link is-outlined is-fullwidth"}," 生成 ")])],-1),q={class:"section"},B={class:"container"},D={class:"panel is-link"},E=Object(c["e"])("p",{class:"panel-heading"},"生成结果",-1),F={class:"panel-block"},G={class:"container"},H={class:"columns"},K={class:"column"},L=Object(c["e"])("label",{class:"label"},"平均值",-1),N={class:"column"},Q=Object(c["e"])("label",{class:"label"},"最大值",-1),R={class:"column"},W=Object(c["e"])("label",{class:"label"},"最小值",-1),X={class:"panel-block"},Y={class:"panel-block"},Z={class:"panel-block"};function ee(e,t,n,ee,te,ne){var ce=Object(c["h"])("chart");return Object(c["g"])(),Object(c["c"])(c["a"],null,[Object(c["e"])("form",{class:"section",onSubmit:t[7]||(t[7]=Object(c["l"])((function(){return ne.generate.apply(ne,arguments)}),["prevent"]))},[Object(c["e"])("div",a,[r,Object(c["e"])("div",i,[l,Object(c["e"])("div",s,[Object(c["e"])("div",u,[Object(c["e"])("div",o,[Object(c["e"])("div",b,[Object(c["e"])("div",d,[f,Object(c["e"])("div",p,[Object(c["k"])(Object(c["e"])("input",{class:"input","onUpdate:modelValue":t[1]||(t[1]=function(e){return te.inputMax=e}),type:"number"},null,512),[[c["j"],te.inputMax,void 0,{number:!0}]])])])]),Object(c["e"])("div",O,[Object(c["e"])("div",j,[m,Object(c["e"])("div",v,[Object(c["k"])(Object(c["e"])("input",{class:"input","onUpdate:modelValue":t[2]||(t[2]=function(e){return te.inputMin=e}),type:"number"},null,512),[[c["j"],te.inputMin,void 0,{number:!0}]])])])]),Object(c["e"])("div",h,[Object(c["e"])("div",x,[g,Object(c["e"])("div",y,[Object(c["k"])(Object(c["e"])("input",{class:"input","onUpdate:modelValue":t[3]||(t[3]=function(e){return te.average=e}),type:"number"},null,512),[[c["j"],te.average,void 0,{number:!0}]])])])])]),Object(c["e"])("div",k,[Object(c["e"])("div",M,[Object(c["e"])("div",w,[S,Object(c["e"])("div",P,[Object(c["k"])(Object(c["e"])("input",{class:"input","onUpdate:modelValue":t[4]||(t[4]=function(e){return te.offset=e}),type:"number"},null,512),[[c["j"],te.offset,void 0,{number:!0}]])])])]),Object(c["e"])("div",U,[Object(c["e"])("div",V,[_,Object(c["e"])("div",A,[Object(c["k"])(Object(c["e"])("input",{class:"input","onUpdate:modelValue":t[5]||(t[5]=function(e){return te.amount=e}),type:"number"},null,512),[[c["j"],te.amount,void 0,{number:!0}]])])])]),Object(c["e"])("div",C,[Object(c["e"])("div",T,[$,Object(c["e"])("div",z,[Object(c["k"])(Object(c["e"])("input",{class:["input",te.contraction>=100||te.contraction<=0?"is-danger":""],type:"number",max:"100",min:"0","onUpdate:modelValue":t[6]||(t[6]=function(e){return te.contraction=e})},null,2),[[c["j"],te.contraction,void 0,{number:!0}]])]),J])])]),I])])])])],32),Object(c["e"])("section",q,[Object(c["e"])("div",B,[Object(c["e"])("div",D,[E,Object(c["e"])("div",F,[Object(c["e"])("div",G,[Object(c["e"])("div",H,[Object(c["e"])("div",K,[L,Object(c["d"])(" "+Object(c["i"])(ne.resultAverage),1)]),Object(c["e"])("div",N,[Q,Object(c["d"])(" "+Object(c["i"])(ne.resultMax),1)]),Object(c["e"])("div",R,[W,Object(c["d"])(" "+Object(c["i"])(ne.resultMin),1)])])])]),Object(c["e"])("div",X,[Object(c["k"])(Object(c["e"])("textarea",{class:"textarea",readonly:"","onUpdate:modelValue":t[8]||(t[8]=function(e){return ne.resultStr=e})},null,512),[[c["j"],ne.resultStr]])]),Object(c["e"])("div",Y,[Object(c["e"])(ce,{data:te.result,max:te.max,min:te.min},null,8,["data","max","min"])]),Object(c["e"])("div",Z,[Object(c["e"])("button",{disabled:!te.result.length,class:"button is-link is-outlined is-fullwidth",onClick:t[9]||(t[9]=function(){return ne.clip.apply(ne,arguments)})},Object(c["i"])(te.copySuccess?"复制成功！":"复制到剪贴板"),9,["disabled"])])])])])],64)}n("a15b"),n("d81d"),n("13d5");var te=n("3835"),ne=n("8539"),ce=n.n(ne),ae=(n("4fad"),n("313e")),re=n.n(ae),ie={render:function(){return Object(c["f"])("div")},props:["data","max","min"],methods:{renderChart:function(){this.chart||(this.$el.style.height="300px",this.$el.style.width="100%",this.chart=re.a.init(this.$el));for(var e=[],t=this.min;t<this.max;t++)e.push(t);var n=e.reduce((function(e,t){return e[t]=0,e}),{}),c=Object.entries(this.data.reduce((function(e,t){return e[t]++,e}),n)).sort((function(e,t){return e[0]-t[0]})).map((function(e){return e[1]}));this.chart.setOption({title:{text:"数值分布"},tooltip:{},xAxis:{data:e},yAxis:{},series:[{name:"累计",type:"bar",data:c}]})}},mounted:function(){var e=this;window.onresize=function(){e.chart&&e.chart.resize()}},updated:function(){this.renderChart()}},le=ie;function se(e){return e.reduce((function(e,t){return e+t}),0)}function ue(e,t){var n=se(e)/e.length;return n>t||n<-t}function oe(e){var t=e.max,n=e.min,c=e.average,a=e.offset,r=Math.min(t,c+a),i=Math.max(n,c-a),l=r-c,s=i-c;return[s,l]}function be(e,t){var n=t.minOffset,c=t.maxOffset,a=t.offset,r=t.amount,i=t.contraction,l=!0;if(ue(e,a))for(var s=0;s<r;s++){var u=se(e)/e.length;if(u>a&&e[s]>0||u<a&&e[s]<0?e[s]=e[s]*(100-i)/100:u>a?e[s]=e[s]-(c-u)*(100-i)/100:u<a&&(e[s]=e[s]-(n-u)*(100-i)/100),!ue(e,a)){l=!1;break}}else l=!1;return l?be(e,{minOffset:n,maxOffset:c,offset:a,amount:r,contraction:i}):e}function de(e){for(var t=e.max,n=e.min,c=e.average,a=e.amount,r=t-c,i=n-c,l=[],s=0;s<a;s++)l.push(Math.random()*(r-i)+i);return l}var fe={name:"App",data:function(){return{max:0,min:0,inputMax:100,inputMin:50,average:65,offset:10,amount:500,contraction:75,result:[],copySuccess:!1}},components:{chart:le},computed:{resultAverage:function(){var e=this.result;return e.length?e.reduce((function(e,t){return e+t}),0)/e.length:0},resultMax:function(){var e=this.result;return e.length?e.reduce((function(e,t){return Math.max(e,t)})):0},resultMin:function(){var e=this.result;return e.length?e.reduce((function(e,t){return Math.min(e,t)})):0},resultStr:function(){return this.result.join(",")}},methods:{clip:function(){var e=this,t=ce()(this.result);t&&(this.copySuccess=!0,setTimeout((function(){e.copySuccess=!1}),2e3))},generate:function(){console.clear();var e=this.inputMax,t=this.inputMin,n=this.average,c=this.offset,a=this.amount,r=this.contraction;this.max=e,this.min=t;var i=this.max,l=this.min,s=de({max:i,min:l,average:n,amount:a}),u=oe({max:i,min:l,average:n,offset:c}),o=Object(te["a"])(u,2),b=o[0],d=o[1],f=be(s,{minOffset:b,maxOffset:d,offset:c,amount:a,contraction:r});this.result=f.map((function(e){return parseInt(n+e,10)}))}}};fe.render=ee;var pe=fe;n("6597");Object(c["b"])(pe).mount("#app")}});
//# sourceMappingURL=app.6a792ef9.js.map