(function(g){var window=this;'use strict';var oYa=function(a,b,c){null!=c&&(g.vd(a,b,1),a=a.i,b=c>>>0,c=Math.floor((c-b)/4294967296)>>>0,g.Ie=b,g.He=c,g.td(a,g.Ie),g.td(a,g.He))},pYa=function(a,b,c){b=g.Jd(b,c);
null!=b&&(g.vd(a,c,0),a.i.i.push(b?1:0))},qYa=function(a,b){return g.Af(a,b)},rYa=function(a,b){b=b instanceof g.Bg?b:g.Hg(b,/^data:image\//i.test(b));
a.src=g.Cg(b)},tYa=function(a){g.F.call(this,a,-1,sYa)},uYa=function(a){g.F.call(this,a)},xYa=function(){return[1,
vYa,2,wYa]},yYa=function(){return[1,
g.nr,uYa,xYa]},zYa=function(a){g.F.call(this,a)},AYa=function(a){g.F.call(this,a)},CYa=function(){return[1,
g.pr,2,g.pr,3,BYa]},DYa=function(a){g.F.call(this,a)},FYa=function(){return[1,
g.pr,2,g.pr,3,EYa,4,BYa]},HYa=function(){return[1,
g.We,AYa,CYa,GYa,2,g.We,DYa,FYa,GYa]},LYa=function(){return[1,
IYa,g.Wi,2,JYa,g.Wi,3,KYa,g.Wi]},OYa=function(){return[1,
MYa,g.Vi,2,NYa,g.Vi,3,g.We,tYa,yYa,g.Vi]},QYa=function(){return[1,
g.nr,g.Si,LYa,2,PYa,g.Ti,OYa]},UYa=function(){return[1,
g.pr,5,RYa,2,PYa,zYa,HYa,3,SYa,6,TYa,4,g.nr,g.Ri,QYa]},W6=function(a){g.Il(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^g.Va()).toString(36));
return a},X6=function(a,b,c){Array.isArray(c)||(c=[String(c)]);
g.Nl(a.j,b,c)},VYa=function(a){if(a===g.Ho)throw Error("ES6 Iteration protocol does NOT adjust control flow when StopIteration is thrown from callback helper functions. If your code relies on this behavior, consider throwing a different error and catching it to terminate iteration.");
throw a;},WYa=function(a){if(a instanceof g.Fo)return a;
if("function"==typeof a.Pg)return a.Pg(!1);if(g.Pa(a)){var b=0,c=new g.Fo;c.next=function(){for(;;){if(b>=a.length)return g.f2;if(b in a)return g.Go(a[b++]);b++}};
var d=c.next;c.Nj=function(){return g.Io(d.call(c))};
return c}throw Error("Not implemented");},XYa=function(a,b,c){if(g.Pa(a))try{g.yc(a,b,c)}catch(e){VYa(e)}else for(a=WYa(a);;){var d=void 0;
try{d=a.Nj()}catch(e){if(e===g.Ho)break;throw e;}try{b.call(c,d,void 0,a)}catch(e){VYa(e)}}},YYa=function(a,b){var c=[];
XYa(b,function(d){try{var e=g.Xq.prototype.j.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):g.Zga(e)&&c.push(d)},a);
return c},ZYa=function(a,b){YYa(a,b).forEach(function(c){g.Xq.prototype.remove.call(this,c)},a)},$Ya=function(a){if(a.oa){if(a.oa.locationOverrideToken)return{locationOverrideToken:a.oa.locationOverrideToken};
if(null!=a.oa.latitudeE7&&null!=a.oa.longitudeE7)return{latitudeE7:a.oa.latitudeE7,longitudeE7:a.oa.longitudeE7}}return null},aZa=function(a,b){g.bc(a,b)||a.push(b)},Y6=function(a){var b=0,c;
for(c in a)b++;return b},bZa=function(a){try{return g.C.JSON.parse(a)}catch(b){}a=String(a);
if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},Z6=function(a){if(g.C.JSON)try{return g.C.JSON.parse(a)}catch(b){}return bZa(a)},cZa=function(a,b,c,d){var e=new g.rl(null,void 0);
a&&g.sl(e,a);b&&g.tl(e,b);c&&g.ul(e,c);d&&(e.J=d);return e},$6=function(a,b){g.au[a]=!0;
var c=g.Zt();c&&c.publish.apply(c,arguments);g.au[a]=!1},a7=function(a){this.name=this.id="";
this.clientName="UNKNOWN_INTERFACE";this.app="";this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.capabilities=new Set;this.experiments=new Set;this.theme="u";new g.Fq;this.model=this.brand="";this.year=0;this.chipset=this.osVersion=this.os="";this.mdxDialServerType="MDX_DIAL_SERVER_TYPE_UNKNOWN";a&&(this.id=a.id||a.name,this.name=a.name,this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=
a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",dZa(this,a.capabilities||""),eZa(this,a.experiments||""),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN",a=a.deviceInfo)&&(a=JSON.parse(a),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",
this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN")},dZa=function(a,b){a.capabilities.clear();
g.Mo(b.split(","),g.Ua(qYa,fZa)).forEach(function(c){a.capabilities.add(c)})},eZa=function(a,b){a.experiments.clear();
b.split(",").forEach(function(c){a.experiments.add(c)})},b7=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||"";this.idType=a.screenIdType||"normal"},c7=function(a,b){return!!b&&(a.id==b||a.uuid==b)},gZa=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid,screenIdType:a.idType}},hZa=function(a){return new b7(a)},iZa=function(a){return Array.isArray(a)?g.vn(a,hZa):[]},d7=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+((a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+",idType:"+a.idType+"}"):"null"},e7=function(a){return Array.isArray(a)?"["+g.vn(a,d7).join(",")+"]":"null"},f7=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},jZa=function(a){return g.vn(a,function(b){return{key:b.id,
name:b.name}})},g7=function(a,b){return g.Xb(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})},h7=function(a,b){return g.Xb(a,function(c){return c7(c,b)})},kZa=function(){var a=(0,g.Bx)();
a&&ZYa(a,a.i.Pg(!0))},i7=function(){var a=g.Ex("yt-remote-connected-devices")||[];
g.uc(a);return a},lZa=function(a){if(g.cc(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return g.vn(a,function(d,e){return 0==e?d:d.substring(c.length)})},mZa=function(a){g.Dx("yt-remote-connected-devices",a,86400)},k7=function(){if(j7)return j7;
var a=g.Ex("yt-remote-device-id");a||(a=f7(),g.Dx("yt-remote-device-id",a,31536E3));for(var b=i7(),c=1,d=a;g.bc(b,d);)c++,d=a+"#"+c;return j7=d},l7=function(){var a=i7(),b=k7();
g.bc(a,b);g.Gx()&&g.xc(a,b);a=lZa(a);if(g.cc(a))try{g.Bka("remote_sid")}catch(c){}else try{g.ct("remote_sid",a.join(","),-1)}catch(c){}},nZa=function(){return g.Ex("yt-remote-session-browser-channel")},oZa=function(){return g.Ex("yt-remote-local-screens")||[]},pZa=function(){g.Dx("yt-remote-lounge-token-expiration",!0,86400)},qZa=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=g.vn(oZa(),function(d){return d.loungeToken}),c=g.vn(a,function(d){return d.loungeToken});
g.wn(c,function(d){return!g.bc(b,d)})&&pZa();
g.Dx("yt-remote-local-screens",a,31536E3)},rZa=function(a,b){g.Dx("yt-remote-session-browser-channel",a);
g.Dx("yt-remote-session-screen-id",b);a=i7();b=k7();g.bc(a,b)||a.push(b);mZa(a);l7()},m7=function(a){a||(g.Fx("yt-remote-session-screen-id"),g.Fx("yt-remote-session-video-id"));
l7();a=i7();g.gc(a,k7());mZa(a)},sZa=function(){if(!n7){var a=g.fr();
a&&(n7=new g.Uq(a))}},tZa=function(){sZa();
return n7?!!n7.get("yt-remote-use-staging-server"):!1},o7=function(){var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
return a?parseInt(a[1],10):0},uZa=function(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))},vZa=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},p7=function(a){a.length?wZa(a.shift(),function(){p7(a)}):q7()},xZa=function(a){return"chrome-extension://"+a+"/cast_sender.js"},wZa=function(a,b,c){var d=document.createElement("script");
d.onerror=b;c&&(d.onload=c);g.Lk(d,g.Kq(a));(document.head||document.documentElement).appendChild(d)},yZa=function(){var a=o7(),b=[];
if(1<a){var c=a-1;b.push("//www.gstatic.com/eureka/clank/"+a+"/cast_sender.js");b.push("//www.gstatic.com/eureka/clank/"+c+"/cast_sender.js")}return b},q7=function(){var a=vZa();
a&&a(!1,"No cast extension found")},r7=function(){if(zZa){var a=2,b=vZa(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;wZa("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",q7,c)}},AZa=function(){r7();
var a=yZa();a.push("//www.gstatic.com/eureka/clank/cast_sender.js");p7(a)},CZa=function(){r7();
var a=yZa();a.push.apply(a,g.v(BZa.map(xZa)));a.push("//www.gstatic.com/eureka/clank/cast_sender.js");p7(a)},DZa=function(){this.i=s7();
this.i.Wy("/client_streamz/youtube/living_room/mdx/browser_channel/closed_channels")},EZa=function(){this.i=s7();
this.i.Wy("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")},FZa=function(){this.i=s7();
this.i.Wy("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")},t7=function(a,b,c){g.H.call(this);
this.I=null!=c?(0,g.Ta)(a,c):a;this.Yf=b;this.C=(0,g.Ta)(this.GR,this);this.i=!1;this.j=0;this.u=this.Ob=null;this.B=[]},u7=function(a,b,c){g.H.call(this);
this.B=null!=c?a.bind(c):a;this.Yf=b;this.u=null;this.i=!1;this.j=0;this.Ob=null},v7=function(a){a.Ob=g.Gi(function(){a.Ob=null;
a.i&&!a.j&&(a.i=!1,v7(a))},a.Yf);
var b=a.u;a.u=null;a.B.apply(null,b)},w7=function(){},x7=function(a,b){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");
return g.C.setTimeout(function(){a()},b)},z7=function(a){y7.dispatchEvent(new GZa(y7,a))},GZa=function(a,b){g.ef.call(this,"statevent",a);
this.stat=b},A7=function(a,b,c,d){this.i=a;
this.u=b;this.N=c;this.J=d||1;this.j=45E3;this.B=new g.Ol(this);this.I=new g.Fi;this.I.setInterval(250)},IZa=function(a,b,c){a.vu=1;
a.An=W6(b.clone());a.Qq=c;a.C=!0;HZa(a,null)},B7=function(a,b,c,d,e){a.vu=1;
a.An=W6(b.clone());a.Qq=null;a.C=c;e&&(a.UO=!1);HZa(a,d)},HZa=function(a,b){a.Ut=Date.now();
C7(a);a.Xo=a.An.clone();X6(a.Xo,"t",a.J);a.mC=0;a.Of=a.i.pE(a.i.Yx()?b:null);0<a.eD&&(a.wB=new u7((0,g.Ta)(a.TP,a,a.Of),a.eD));a.B.Pa(a.Of,"readystatechange",a.HR);b=a.yp?g.Hf(a.yp):{};a.Qq?(a.jC="POST",b["Content-Type"]="application/x-www-form-urlencoded",a.Of.send(a.Xo,a.jC,a.Qq,b)):(a.jC="GET",a.UO&&!g.jf&&(b.Connection="close"),a.Of.send(a.Xo,a.jC,null,b));a.i.Oj(1)},KZa=function(a,b){var c=a.mC,d=b.indexOf("\n",c);
if(-1==d)return D7;c=Number(b.substring(c,d));if(isNaN(c))return JZa;d+=1;if(d+c>b.length)return D7;b=b.substr(d,c);a.mC=d+c;return b},MZa=function(a,b){a.Ut=Date.now();
C7(a);var c=b?window.location.hostname:"";a.Xo=a.An.clone();g.Il(a.Xo,"DOMAIN",c);g.Il(a.Xo,"t",a.J);try{a.fk=new ActiveXObject("htmlfile")}catch(m){E7(a);a.pn=7;z7(22);F7(a);return}var d="<html><body>";if(b){var e="";for(b=0;b<c.length;b++){var f=c.charAt(b);if("<"==f)f=e+"\\x3c";else if(">"==f)f=e+"\\x3e";else{if(f in G7)f=G7[f];else if(f in LZa)f=G7[f]=LZa[f];else{var h=f.charCodeAt(0);if(31<h&&127>h)var l=f;else{if(256>h){if(l="\\x",16>h||256<h)l+="0"}else l="\\u",4096>h&&(l+="0");l+=h.toString(16).toUpperCase()}f=
G7[f]=l}f=e+f}e=f}d+='<script>document.domain="'+e+'"\x3c/script>'}d+="</body></html>";c=g.Yg(g.tg("b/12014412"),d);a.fk.open();a.fk.write(g.Ug(c));a.fk.close();a.fk.parentWindow.m=(0,g.Ta)(a.KX,a);a.fk.parentWindow.d=(0,g.Ta)(a.dO,a,!0);a.fk.parentWindow.rpcClose=(0,g.Ta)(a.dO,a,!1);c=a.fk.createElement("DIV");a.fk.parentWindow.document.body.appendChild(c);d=g.Gg(a.Xo.toString());d=g.oh(g.Cg(d));d=g.Yg(g.tg("b/12014412"),'<iframe src="'+d+'"></iframe>');g.$g(c,d);a.i.Oj(1)},C7=function(a){a.nI=Date.now()+
a.j;
NZa(a,a.j)},NZa=function(a,b){if(null!=a.Iu)throw Error("WatchDog timer not null");
a.Iu=x7((0,g.Ta)(a.SX,a),b)},H7=function(a){a.Iu&&(g.C.clearTimeout(a.Iu),a.Iu=null)},F7=function(a){a.i.yf()||a.Qp||a.i.Qy(a)},E7=function(a){H7(a);
g.bf(a.wB);a.wB=null;a.I.stop();g.Ql(a.B);if(a.Of){var b=a.Of;a.Of=null;b.abort();b.dispose()}a.fk&&(a.fk=null)},I7=function(a,b){try{a.i.WN(a,b),a.i.Oj(4)}catch(c){}},PZa=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;OZa(a,b,function(h){h?c(!0):g.C.setTimeout(function(){PZa(a,b,c,d,f)},f)})}},OZa=function(a,b,c){var d=new Image;
d.onload=function(){try{J7(d),c(!0)}catch(e){}};
d.onerror=function(){try{J7(d),c(!1)}catch(e){}};
d.onabort=function(){try{J7(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{J7(d),c(!1)}catch(e){}};
g.C.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
rYa(d,a)},J7=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},QZa=function(a){this.i=a;
this.j=new w7},RZa=function(a){var b=K7(a.i,a.Fv,"/mail/images/cleardot.gif");
W6(b);PZa(b.toString(),5E3,(0,g.Ta)(a.wS,a),3,2E3);a.Oj(1)},M7=function(a){var b=a.i.W;
if(null!=b)z7(5),b?(z7(11),L7(a.i,a,!1)):(z7(12),L7(a.i,a,!0));else if(a.rh=new A7(a,void 0,void 0,void 0),a.rh.yp=a.fD,b=a.i,b=K7(b,b.Yx()?a.ov:null,a.gD),z7(5),!g.Oc||g.Hc(10))X6(b,"TYPE","xmlhttp"),B7(a.rh,b,!1,a.ov,!1);else{X6(b,"TYPE","html");var c=a.rh;a=!!a.ov;c.vu=3;c.An=W6(b.clone());MZa(c,a)}},N7=function(a,b,c){this.i=1;
this.j=[];this.B=[];this.C=new w7;this.N=a||null;this.W=null!=b?b:null;this.I=c||!1},SZa=function(a,b){this.i=a;
this.map=b;this.context=null},TZa=function(a,b,c,d){g.ef.call(this,"timingevent",a);
this.size=b;this.Ox=d},UZa=function(a){g.ef.call(this,"serverreachability",a)},XZa=function(a){VZa(a);
if(3==a.i){var b=a.ax++,c=a.Hz.clone();g.Il(c,"SID",a.u);g.Il(c,"RID",b);g.Il(c,"TYPE","terminate");O7(a,c);b=new A7(a,a.u,b,void 0);b.vu=2;b.An=W6(c.clone());rYa(new Image,b.An.toString());b.Ut=Date.now();C7(b)}WZa(a)},YZa=function(a){a.cT(1,0);
a.Hz=K7(a,null,a.hD);P7(a)},VZa=function(a){a.En&&(a.En.abort(),a.En=null);
a.Pe&&(a.Pe.cancel(),a.Pe=null);a.Ul&&(g.C.clearTimeout(a.Ul),a.Ul=null);Q7(a);a.Zg&&(a.Zg.cancel(),a.Zg=null);a.Pn&&(g.C.clearTimeout(a.Pn),a.Pn=null)},ZZa=function(a,b){if(0==a.i)throw Error("Invalid operation: sending map when state is closed");
a.j.push(new SZa(a.LU++,b));2!=a.i&&3!=a.i||P7(a)},$Za=function(a){var b=0;
a.Pe&&b++;a.Zg&&b++;return b},P7=function(a){a.Zg||a.Pn||(a.Pn=x7((0,g.Ta)(a.bO,a),0),a.Ns=0)},b_a=function(a,b){if(1==a.i){if(!b){a.ax=Math.floor(1E5*Math.random());
b=a.ax++;var c=new A7(a,"",b,void 0);c.yp=a.zk;var d=R7(a),e=a.Hz.clone();g.Il(e,"RID",b);g.Il(e,"CVER","1");O7(a,e);IZa(c,e,d);a.Zg=c;a.i=2}}else 3==a.i&&(b?a_a(a,b):0==a.j.length||a.Zg||a_a(a))},a_a=function(a,b){if(b)if(6<a.Rp){a.j=a.B.concat(a.j);
a.B.length=0;var c=a.ax-1;b=R7(a)}else c=b.N,b=b.Qq;else c=a.ax++,b=R7(a);var d=a.Hz.clone();g.Il(d,"SID",a.u);g.Il(d,"RID",c);g.Il(d,"AID",a.xt);O7(a,d);c=new A7(a,a.u,c,a.Ns+1);c.yp=a.zk;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.Zg=c;IZa(c,d,b)},O7=function(a,b){a.Pf&&(a=a.Pf.wL())&&g.qf(a,function(c,d){g.Il(b,d,c)})},R7=function(a){var b=Math.min(a.j.length,1E3),c=["count="+b];
if(6<a.Rp&&0<b){var d=a.j[0].i;c.push("ofs="+d)}else d=0;for(var e={},f=0;f<b;e={Er:e.Er},f++){e.Er=a.j[f].i;var h=a.j[f].map;e.Er=6>=a.Rp?f:e.Er-d;try{g.qf(h,function(l){return function(m,n){c.push("req"+l.Er+"_"+n+"="+encodeURIComponent(m))}}(e))}catch(l){c.push("req"+e.Er+"_type="+encodeURIComponent("_badmap"))}}a.B=a.B.concat(a.j.splice(0,b));
return c.join("&")},c_a=function(a){a.Pe||a.Ul||(a.J=1,a.Ul=x7((0,g.Ta)(a.aO,a),0),a.xs=0)},S7=function(a){if(a.Pe||a.Ul||3<=a.xs)return!1;
a.J++;a.Ul=x7((0,g.Ta)(a.aO,a),d_a(a,a.xs));a.xs++;return!0},L7=function(a,b,c){a.hC=c;
a.Ak=b.Ml;a.I||YZa(a)},Q7=function(a){null!=a.Zp&&(g.C.clearTimeout(a.Zp),a.Zp=null)},d_a=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},T7=function(a,b){if(2==b||9==b){var c=null;
a.Pf&&(c=null);var d=(0,g.Ta)(a.ZY,a);c||(c=new g.rl("//www.google.com/images/cleardot.gif"),W6(c));OZa(c.toString(),1E4,d)}else z7(2);e_a(a,b)},e_a=function(a,b){a.i=0;
a.Pf&&a.Pf.KK(b);WZa(a);VZa(a)},WZa=function(a){a.i=0;
a.Ak=-1;if(a.Pf)if(0==a.B.length&&0==a.j.length)a.Pf.ZD();else{var b=g.jc(a.B),c=g.jc(a.j);a.B.length=0;a.j.length=0;a.Pf.ZD(b,c)}},K7=function(a,b,c){var d=g.Jl(c);
if(""!=d.i)b&&g.tl(d,b+"."+d.i),g.ul(d,d.u);else{var e=window.location;d=cZa(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.Zv&&g.qf(a.Zv,function(f,h){g.Il(d,h,f)});
g.Il(d,"VER",a.Rp);O7(a,d);return d},f_a=function(){},g_a=function(){this.i=[];
this.j=[]},h_a=function(){},s7=function(){if(!U7){U7=new g.Ii(new h_a);
var a=g.us("client_streamz_web_flush_count",-1);-1!==a&&(U7.B=a)}return U7},i_a=function(a,b){this.action=a;
this.params=b||{}},V7=function(a,b){g.H.call(this);
this.i=new g.K(this.BX,0,this);g.J(this,this.i);this.Yf=5E3;this.j=0;if("function"===typeof a)b&&(a=(0,g.Ta)(a,b));else if(a&&"function"===typeof a.handleEvent)a=(0,g.Ta)(a.handleEvent,a);else throw Error("Invalid listener argument");this.u=a},W7=function(a,b,c,d,e){c=void 0===c?!1:c;
d=void 0===d?function(){return""}:d;
e=void 0===e?!1:e;this.qa=a;this.I=b;this.u=new g.Tq;this.j=new V7(this.AY,this);this.i=null;this.Y=!1;this.C=null;this.W="";this.N=this.B=0;this.J=[];this.ya=c;this.oa=d;this.Ha=e;this.xa=new DZa;this.Ia=new EZa;this.La=new FZa},j_a=function(a){return{firstTestResults:[""],
secondTestResults:!a.i.hC,sessionId:a.i.u,arrayId:a.i.xt}},k_a=function(a,b){a.N=b||0;
a.j.stop();X7(a);a.i&&(3==a.i.getState()&&b_a(a.i),XZa(a.i));a.N=0},Y7=function(a){return!!a.i&&3==a.i.getState()},X7=function(a){if(a.i){var b=a.oa(),c=a.i.zk||{};
b?c["x-youtube-lounge-xsrf-token"]=b:delete c["x-youtube-lounge-xsrf-token"];a.i.zk=c}},Z7=function(a){this.port=this.domain="";
this.i="/api/lounge";this.j=!0;a=a||document.location.href;var b=Number(g.uj(4,a))||"";b&&(this.port=":"+b);this.domain=g.vj(a)||"";a=g.zb();0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.yb(a,"10.0")&&(this.j=!1))},$7=function(a,b){var c=a.i;
a.j&&(c="https://"+a.domain+a.port+a.i);return g.Gj(c+b,{})},a8=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Ua(a.B,d,!0),onError:g.Ua(a.u,e),onTimeout:g.Ua(a.C,e)};c&&(a.postParams=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.Us(b,a)},o_a=function(){var a=l_a;
m_a();b8.push(a);n_a()},c8=function(a,b){m_a();
var c=p_a(a,String(b));g.cc(b8)?q_a(c):(n_a(),g.yc(b8,function(d){d(c)}))},m_a=function(){b8||(b8=g.La("yt.mdx.remote.debug.handlers_")||[],g.Ka("yt.mdx.remote.debug.handlers_",b8,void 0))},q_a=function(a){var b=(d8+1)%50;
d8=b;e8[b]=a;f8||(f8=49==b)},n_a=function(){var a=b8;
if(e8[0]){var b=f8?d8:-1;do{b=(b+1)%50;var c=e8[b];g.yc(a,function(d){d(c)})}while(b!=d8);
e8=Array(50);d8=-1;f8=!1}},p_a=function(a,b){var c=(Date.now()-r_a)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},g8=function(a){g.Ow.call(this);
this.I=a;this.screens=[]},s_a=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c)return a=c.name,c.id=b.id||c.id,c.name=b.name,c.token=b.token,c.uuid=b.uuid||c.uuid,c.name!=a;a.screens.push(b);return!0},t_a=function(a,b){var c=a.screens.length!=b.length;
a.screens=g.Mo(a.screens,function(f){return!!g7(b,f)});
for(var d=0,e=b.length;d<e;d++)c=s_a(a,b[d])||c;return c},u_a=function(a,b){var c=a.screens.length;
a.screens=g.Mo(a.screens,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.screens.length<c},h8=function(a,b,c,d,e){g.Ow.call(this);
this.u=a;this.J=b;this.B=c;this.I=d;this.C=e;this.j=0;this.i=null;this.Ob=NaN},j8=function(a){g8.call(this,"LocalScreenService");
this.j=a;this.i=NaN;i8(this);this.info("Initializing with "+e7(this.screens))},v_a=function(a){if(a.screens.length){var b=g.vn(a.screens,function(d){return d.id}),c=$7(a.j,"/pairing/get_lounge_token_batch");
a8(a.j,c,{screen_ids:b.join(",")},(0,g.Ta)(a.BT,a),(0,g.Ta)(a.AT,a))}},i8=function(a){if(g.Q("deprecate_pair_servlet_enabled"))return t_a(a,[]);
var b=iZa(oZa());b=g.Mo(b,function(c){return!c.uuid});
return t_a(a,b)},k8=function(a,b){qZa(g.vn(a.screens,gZa));
b&&pZa()},m8=function(a,b){g.Ow.call(this);
this.I=b;b=(b=g.Ex("yt-remote-online-screen-ids")||"")?b.split(","):[];for(var c={},d=this.I(),e=0,f=d.length;e<f;++e){var h=d[e].id;c[h]=g.bc(b,h)}this.i=c;this.C=a;this.u=this.B=NaN;this.j=null;l8("Initialized with "+g.lj(this.i))},n8=function(a,b,c){var d=$7(a.C,"/pairing/get_screen_availability");
a8(a.C,d,{lounge_token:b.token},(0,g.Ta)(function(e){e=e.screens||[];for(var f=0,h=e.length;f<h;++f)if(e[f].loungeToken==b.token){c("online"==e[f].status);return}c(!1)},a),(0,g.Ta)(function(){c(!1)},a))},o8=function(a,b){a:if(Y6(b)!=Y6(a.i))var c=!1;
else{c=g.yf(b);for(var d=0,e=c.length;d<e;++d)if(!a.i[c[d]]){c=!1;break a}c=!0}c||(l8("Updated online screens: "+g.lj(a.i)),a.i=b,a.Z("screenChange"));w_a(a)},p8=function(a){isNaN(a.u)||g.Qs(a.u);
a.u=g.Os((0,g.Ta)(a.eH,a),0<a.B&&a.B<g.Va()?2E4:1E4)},l8=function(a){c8("OnlineScreenService",a)},x_a=function(a){var b={};
g.yc(a.I(),function(c){c.token?b[c.token]=c.id:this.re("Requesting availability of screen w/o lounge token.")});
return b},w_a=function(a){a=g.yf(g.rf(a.i,function(b){return b}));
g.uc(a);a.length?g.Dx("yt-remote-online-screen-ids",a.join(","),60):g.Fx("yt-remote-online-screen-ids")},q8=function(a,b){b=void 0===b?!1:b;
g8.call(this,"ScreenService");this.B=a;this.J=b;this.i=this.j=null;this.u=[];this.C={};y_a(this)},A_a=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.C[b]);var h=a.Ih(),l=c?h7(h,c):null;c&&(a.J||l)||(l=h7(h,b));if(l){l.uuid=b;var m=r8(a,l);n8(a.i,m,function(n){e(n?m:null)})}else c?z_a(a,c,(0,g.Ta)(function(n){var p=r8(this,new b7({name:d,
screenId:c,loungeToken:n,dialId:b||""}));n8(this.i,p,function(r){e(r?p:null)})},a),f):e(null)},B_a=function(a,b){for(var c=0,d=a.screens.length;c<d;++c)if(a.screens[c].name==b)return a.screens[c];
return null},C_a=function(a,b,c){n8(a.i,b,c)},z_a=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={postParams:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,h){f=h&&h.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.Us($7(a.B,"/pairing/get_lounge_token_batch"),e)},D_a=function(a){a.screens=a.j.Ih();
var b=a.C,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.screens.length;b<d;++b){var e=a.screens[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+e7(a.screens))},y_a=function(a){s8(a);
a.j=new j8(a.B);a.j.subscribe("screenChange",(0,g.Ta)(a.KT,a));D_a(a);a.J||(a.u=iZa(g.Ex("yt-remote-automatic-screen-cache")||[]));s8(a);a.info("Initializing automatic screens: "+e7(a.u));a.i=new m8(a.B,(0,g.Ta)(a.Ih,a,!0));a.i.subscribe("screenChange",(0,g.Ta)(function(){this.Z("onlineScreenChange")},a))},r8=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=h7(a.u,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.u.push(b),a.J||E_a(a));s8(a);a.C[b.uuid]=b.id;g.Dx("yt-remote-device-id-map",a.C,31536E3);return b},E_a=function(a){a=g.Mo(a.u,function(b){return"shortLived"!=b.idType});
g.Dx("yt-remote-automatic-screen-cache",g.vn(a,gZa))},s8=function(a){a.C=g.Ex("yt-remote-device-id-map")||{}},t8=function(a,b,c){g.Ow.call(this);
this.ya=c;this.u=a;this.i=b;this.B=null},u8=function(a,b){a.B=b;
a.Z("sessionScreen",a.B)},F_a=function(a,b){a.B&&(a.B.token=b,r8(a.u,a.B));
a.Z("sessionScreen",a.B)},v8=function(a,b){c8(a.ya,b)},w8=function(a,b,c){t8.call(this,a,b,"CastSession");
var d=this;this.config_=c;this.j=null;this.oa=(0,g.Ta)(this.MR,this);this.xa=(0,g.Ta)(this.WX,this);this.Y=g.Os(function(){G_a(d,null)},12E4);
this.J=this.C=this.I=this.N=0;this.qa=!1;this.W="unknown"},x8=function(a,b){g.Qs(a.J);
a.J=0;0==b?H_a(a):a.J=g.Os(function(){H_a(a)},b)},H_a=function(a){I_a(a,"getLoungeToken");
g.Qs(a.C);a.C=g.Os(function(){J_a(a,null)},3E4)},I_a=function(a,b){a.info("sendYoutubeMessage_: "+b+" "+g.lj(void 0));
var c={};c.type=b;a.j?a.j.sendMessage("urn:x-cast:com.google.youtube.mdx",c,function(){},(0,g.Ta)(function(){v8(this,"Failed to send message: "+b+".")},a)):v8(a,"Sending yt message without session: "+g.lj(c))},y8=function(a,b){b?(a.info("onConnectedScreenId_: Received screenId: "+b),a.getScreen()&&a.getScreen().id==b||a.KL(b,function(c){u8(a,c)},function(){return a.Bg()},5)):a.Bg(Error("Waiting for session status timed out."))},L_a=function(a,b,c){a.info("onConnectedScreenData_: Received screenData: "+
JSON.stringify(b));
var d=new b7(b);K_a(a,d,function(e){e?(a.qa=!0,r8(a.u,d),u8(a,d),a.W="unknown",x8(a,c)):(g.ys(Error("CastSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online.")),a.Bg())},5)},G_a=function(a,b){g.Qs(a.Y);
a.Y=0;b?a.config_.enableCastLoungeToken&&b.loungeToken?b.deviceId?a.getScreen()&&a.getScreen().uuid==b.deviceId||(b.loungeTokenRefreshIntervalMs?L_a(a,{name:a.i.friendlyName,screenId:b.screenId,loungeToken:b.loungeToken,dialId:b.deviceId,screenIdType:"shortLived"},b.loungeTokenRefreshIntervalMs):(g.ys(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: "+JSON.stringify(b)+".")),y8(a,b.screenId))):(g.ys(Error("No device id presents in mdxSessionStatusData: "+JSON.stringify(b)+
".")),y8(a,b.screenId)):y8(a,b.screenId):a.Bg(Error("Waiting for session status timed out."))},J_a=function(a,b){g.Qs(a.C);
a.C=0;var c=null;if(b)if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";else c="noLoungeTokenResponse";c?(a.info("Did not receive a new lounge token in onLoungeToken_ with data: "+(JSON.stringify(b)+", error: "+c)),a.W=c,x8(a,3E4)):(F_a(a,b.loungeToken),a.qa=!1,a.W="unknown",x8(a,b.loungeTokenRefreshIntervalMs))},K_a=function(a,b,c,d){g.Qs(a.I);
a.I=0;C_a(a.u,b,function(e){e||0>d?c(e):a.I=g.Os(function(){K_a(a,b,c,d-1)},300)})},M_a=function(a){g.Qs(a.N);
a.N=0;g.Qs(a.I);a.I=0;g.Qs(a.Y);a.Y=0;g.Qs(a.C);a.C=0;g.Qs(a.J);a.J=0},z8=function(a,b,c,d){t8.call(this,a,b,"DialSession");
this.config_=d;this.j=this.N=null;this.xa="";this.La=c;this.Ia=null;this.Y=function(){};
this.W=NaN;this.Ha=(0,g.Ta)(this.NR,this);this.C=function(){};
this.J=this.I=0;this.oa=!1;this.qa="unknown"},A8=function(a){var b;
return!!(a.config_.enableDialLoungeToken&&(null==(b=a.j)?0:b.getDialAppInfo))},N_a=function(a){a.C=a.u.xJ(a.xa,a.i.label,a.i.friendlyName,A8(a),function(b,c){a.C=function(){};
a.oa=!0;u8(a,b);"shortLived"==b.idType&&0<c&&B8(a,c)},function(b){a.C=function(){};
a.Bg(b)})},O_a=function(a){var b={};
b.pairingCode=a.xa;b.theme=a.La;tZa()&&(b.env_useStageMdx=1);return g.Ej(b)},C8=function(a){return new Promise(function(b){a.xa=f7();
if(a.Ia){var c=new chrome.cast.DialLaunchResponse(!0,O_a(a));b(c);N_a(a)}else a.Y=function(){g.Qs(a.W);a.Y=function(){};
a.W=NaN;var d=new chrome.cast.DialLaunchResponse(!0,O_a(a));b(d);N_a(a)},a.W=g.Os(function(){a.Y()},100)})},Q_a=function(a,b,c){a.info("initOnConnectedScreenDataPromise_: Received screenData: "+JSON.stringify(b));
var d=new b7(b);return(new Promise(function(e){P_a(a,d,function(f){f?(a.oa=!0,r8(a.u,d),u8(a,d),B8(a,c)):g.ys(Error("DialSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online."));e(f)},5)})).then(function(e){return e?new chrome.cast.DialLaunchResponse(!1):C8(a)})},R_a=function(a,b){var c=a.N.receiver.label,d=a.i.friendlyName;
return(new Promise(function(e){A_a(a.u,c,b,d,function(f){f&&f.token&&u8(a,f);e(f)},function(f){v8(a,"Failed to get DIAL screen: "+f);
e(null)})})).then(function(e){return e&&e.token?new chrome.cast.DialLaunchResponse(!1):C8(a)})},P_a=function(a,b,c,d){g.Qs(a.I);
a.I=0;C_a(a.u,b,function(e){e||0>d?c(e):a.I=g.Os(function(){P_a(a,b,c,d-1)},300)})},B8=function(a,b){a.info("getDialAppInfoWithTimeout_ "+b);
A8(a)&&(g.Qs(a.J),a.J=0,0==b?S_a(a):a.J=g.Os(function(){S_a(a)},b))},S_a=function(a){A8(a)&&a.j.getDialAppInfo(function(b){a.info("getDialAppInfo dialLaunchData: "+JSON.stringify(b));
b=b.extraData||{};var c=null;if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";c?(a.qa=c,B8(a,3E4)):(a.oa=!1,a.qa="unknown",F_a(a,b.loungeToken),B8(a,b.loungeTokenRefreshIntervalMs))},function(b){a.info("getDialAppInfo error: "+b);
a.qa="noLoungeTokenResponse";B8(a,3E4)})},T_a=function(a){g.Qs(a.I);
a.I=0;g.Qs(a.J);a.J=0;a.C();a.C=function(){};
g.Qs(a.W)},D8=function(a,b){t8.call(this,a,b,"ManualSession");
this.j=g.Os((0,g.Ta)(this.zt,this,null),150)},E8=function(a,b){g.Ow.call(this);
this.config_=b;this.j=a;this.N=b.appId||"233637DE";this.B=b.theme||"cl";this.W=b.disableCastApi||!1;this.I=b.forceMirroring||!1;this.i=null;this.J=!1;this.u=[];this.C=(0,g.Ta)(this.PW,this)},U_a=function(a,b){return b?g.Xb(a.u,function(c){return c7(b,c.label)},a):null},F8=function(a){c8("Controller",a)},l_a=function(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)},G8=function(a){return a.J||!!a.u.length||!!a.i},H8=function(a,b,c){b!=a.i&&(g.bf(a.i),(a.i=b)?(c?a.Z("yt-remote-cast2-receiver-resumed",
b.i):a.Z("yt-remote-cast2-receiver-selected",b.i),b.subscribe("sessionScreen",(0,g.Ta)(a.ZN,a,b)),b.subscribe("sessionFailed",function(){return V_a(a,b)}),b.getScreen()?a.Z("yt-remote-cast2-session-change",b.getScreen()):c&&a.i.zt(null)):a.Z("yt-remote-cast2-session-change",null))},V_a=function(a,b){a.i==b&&a.Z("yt-remote-cast2-session-failed")},W_a=function(a){var b=a.j.wJ(),c=a.i&&a.i.i;
a=g.vn(b,function(d){c&&c7(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=U_a(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},a0a=function(a,b,c,d){d.disableCastApi?I8("Cannot initialize because disabled by Mdx config."):X_a()?Y_a(b,d)&&(J8(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?Z_a(a,c):(window.__onGCastApiAvailable=function(e,f){e?Z_a(a,c):(K8("Failed to load cast API: "+f),L8(!1),J8(!1),g.Fx("yt-remote-cast-available"),g.Fx("yt-remote-cast-receiver"),
$_a(),c(!1))},d.loadCastApiSetupScript?g.Hx("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?60<=o7()&&AZa():!window.chrome||!window.navigator.presentation||0<=window.navigator.userAgent.indexOf("Edge")?q7():89<=o7()?CZa():(r7(),p7(BZa.map(xZa))))):I8("Cannot initialize because not running Chrome")},$_a=function(){I8("dispose");
var a=M8();a&&a.dispose();g.Ka("yt.mdx.remote.cloudview.instance_",null,void 0);b0a(!1);g.du(N8);N8.length=0},O8=function(){return!!g.Ex("yt-remote-cast-installed")},c0a=function(){var a=g.Ex("yt-remote-cast-receiver");
return a?a.friendlyName:null},d0a=function(){I8("clearCurrentReceiver");
g.Fx("yt-remote-cast-receiver")},e0a=function(){return O8()?M8()?M8().getCastSession():(K8("getCastSelector: Cast is not initialized."),null):(K8("getCastSelector: Cast API is not installed!"),null)},Q8=function(){O8()?M8()?P8()?(I8("Requesting cast selector."),M8().requestSession()):(I8("Wait for cast API to be ready to request the session."),N8.push(g.cu("yt-remote-cast2-api-ready",Q8))):K8("requestCastSelector: Cast is not initialized."):K8("requestCastSelector: Cast API is not installed!")},R8=
function(a,b){P8()?M8().setConnectedScreenStatus(a,b):K8("setConnectedScreenStatus called before ready.")},X_a=function(){var a=0<=g.zb().search(/ (CrMo|Chrome|CriOS)\//);
return g.oz||a},f0a=function(a,b){M8().init(a,b)},Y_a=function(a,b){var c=!1;
M8()||(a=new E8(a,b),a.subscribe("yt-remote-cast2-availability-change",function(d){g.Dx("yt-remote-cast-available",d);$6("yt-remote-cast2-availability-change",d)}),a.subscribe("yt-remote-cast2-receiver-selected",function(d){I8("onReceiverSelected: "+d.friendlyName);
g.Dx("yt-remote-cast-receiver",d);$6("yt-remote-cast2-receiver-selected",d)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(d){I8("onReceiverResumed: "+d.friendlyName);
g.Dx("yt-remote-cast-receiver",d);$6("yt-remote-cast2-receiver-resumed",d)}),a.subscribe("yt-remote-cast2-session-change",function(d){I8("onSessionChange: "+d7(d));
d||g.Fx("yt-remote-cast-receiver");$6("yt-remote-cast2-session-change",d)}),g.Ka("yt.mdx.remote.cloudview.instance_",a,void 0),c=!0);
I8("cloudview.createSingleton_: "+c);return c},M8=function(){return g.La("yt.mdx.remote.cloudview.instance_")},Z_a=function(a,b){L8(!0);
J8(!1);f0a(a,function(c){c?(b0a(!0),g.eu("yt-remote-cast2-api-ready")):(K8("Failed to initialize cast API."),L8(!1),g.Fx("yt-remote-cast-available"),g.Fx("yt-remote-cast-receiver"),$_a());b(c)})},I8=function(a){c8("cloudview",a)},K8=function(a){c8("cloudview",a)},L8=function(a){I8("setCastInstalled_ "+a);
g.Dx("yt-remote-cast-installed",a)},P8=function(){return!!g.La("yt.mdx.remote.cloudview.apiReady_")},b0a=function(a){I8("setApiReady_ "+a);
g.Ka("yt.mdx.remote.cloudview.apiReady_",a,void 0)},J8=function(a){g.Ka("yt.mdx.remote.cloudview.initializing_",a,void 0)},S8=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.I=this.J=0;this.trackData=null;this.hasNext=this.bl=!1;this.N=this.C=this.i=this.B=0;this.u=NaN;this.j=!1;this.reset(a)},T8=function(a){a.audioTrackId=null;
a.trackData=null;a.playerState=-1;a.bl=!1;a.hasNext=!1;a.J=0;a.I=g.Va();a.B=0;a.i=0;a.C=0;a.N=0;a.u=NaN;a.j=!1},U8=function(a){return a.Gc()?(g.Va()-a.I)/1E3:0},V8=function(a,b){a.J=b;
a.I=g.Va()},W8=function(a){switch(a.playerState){case 1:case 1081:return(g.Va()-a.I)/1E3+a.J;
case -1E3:return 0}return a.J},X8=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&T8(a)},Y8=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.If(a.trackData);b.hasPrevious=a.bl;b.hasNext=a.hasNext;b.playerTime=a.J;b.playerTimeAt=a.I;b.seekableStart=a.B;b.seekableEnd=a.i;b.duration=a.C;b.loadedTime=a.N;b.liveIngestionTime=a.u;return b},$8=function(a,b){g.Ow.call(this);
this.u=0;this.B=a;this.I=[];this.C=new g_a;this.j=this.i=null;this.W=(0,g.Ta)(this.vV,this);this.J=(0,g.Ta)(this.mx,this);this.N=(0,g.Ta)(this.uV,this);this.Y=(0,g.Ta)(this.CV,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.vH,this),g0a(this))):c=3;0!=c&&(b?this.vH(c):g.Os((0,g.Ta)(function(){this.vH(c)},this),0));
(a=e0a())&&Z8(this,a);this.subscribe("yt-remote-cast2-session-change",this.Y)},a9=function(a){return new S8(a.B.getPlayerContextData())},g0a=function(a){g.yc("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "),function(b){this.I.push(this.B.subscribe(b,g.Ua(this.NW,b),this))},a)},h0a=function(a){g.yc(a.I,function(b){this.B.unsubscribeByKey(b)},a);
a.I.length=0},b9=function(a){return 1==a.getState()},c9=function(a,b){var c=a.C;
50>c.i.length+c.j.length&&a.C.j.push(b)},e9=function(a,b,c){var d=a9(a);
V8(d,c);-1E3!=d.playerState&&(d.playerState=b);d9(a,d)},f9=function(a,b,c){a.B.sendMessage(b,c)},d9=function(a,b){h0a(a);
a.B.setPlayerContextData(Y8(b));g0a(a)},Z8=function(a,b){a.j&&(a.j.removeUpdateListener(a.W),a.j.removeMediaListener(a.J),a.mx(null));
a.j=b;a.j&&(c8("CP","Setting cast session: "+a.j.sessionId),a.j.addUpdateListener(a.W),a.j.addMediaListener(a.J),a.j.media.length&&a.mx(a.j.media[0]))},i0a=function(a){var b=a.i.media,c=a.i.customData;
if(b&&c){var d=a9(a);b.contentId!=d.videoId&&c8("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;V8(d,a.i.getEstimatedTime());d9(a,d)}else c8("CP","No cast media video. Ignoring state update.")},g9=function(a,b,c){return(0,g.Ta)(function(d){this.re("Failed to "+b+" with cast v2 channel. Error code: "+d.code);
d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.re("Retrying "+b+" using MDx browser channel."),f9(this,b,c))},a)},h9=function(a,b,c,d){d=void 0===d?!1:d;
g.Ow.call(this);var e=this;this.C=NaN;this.qa=!1;this.N=this.J=this.Y=this.oa=NaN;this.W=[];this.B=this.I=this.u=this.wc=this.i=null;this.Ha=a;this.ya=d;this.W.push(g.Jt(window,"beforeunload",function(){e.Js(2)}));
this.j=[];this.wc=new S8;this.Ia=b.id;this.xa=b.idType;this.i=j0a(this,c);this.i.subscribe("handlerOpened",this.zV,this);this.i.subscribe("handlerClosed",this.wV,this);this.i.subscribe("handlerError",this.xV,this);this.i.subscribe("handlerMessage",this.yV,this);this.i.IB(b.token);this.subscribe("remoteQueueChange",function(){var f=this.wc.videoId;g.Gx()&&g.Dx("yt-remote-session-video-id",f)},this)},k0a=function(a){return g.Xb(a.j,function(b){return"LOUNGE_SCREEN"==b.type})},i9=function(a){c8("conn",
a)},j0a=function(a,b){return new W7($7(a.Ha,"/bc"),b,!1,function(){return a.BJ()},"shortLived"==a.xa)},j9=function(a,b){a.Z("proxyStateChange",b)},l0a=function(a){a.C=g.Os(function(){i9("Connecting timeout");
a.Js(1)},2E4)},k9=function(a){g.Qs(a.C);
a.C=NaN},l9=function(a){g.Qs(a.oa);
a.oa=NaN},m0a=function(a){m9(a);
a.Y=g.Os(function(){n9(a,"getNowPlaying")},2E4)},m9=function(a){g.Qs(a.Y);
a.Y=NaN},o0a=function(a,b){var c=null;
if(b){var d=k0a(a);d&&(c={clientName:d.clientName,deviceMake:d.brand,deviceModel:d.model,osVersion:d.osVersion})}g.Ka("yt.mdx.remote.remoteClient_",c,void 0);b&&(k9(a),l9(a));c=Y7(a.i)&&isNaN(a.C);b==c?b&&(j9(a,1),n9(a,"getSubtitlesTrack")):b?(a.JL()&&a.wc.reset(),j9(a,1),n9(a,"getNowPlaying"),n0a(a)):a.Js(1)},p0a=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.wc.videoId&&(g.Df(b.params)?a.wc.trackData=null:a.wc.trackData=b.params,a.Z("remotePlayerChange"))},q0a=function(a,b,c){var d=b.params.videoId||b.params.video_id,e=parseInt(b.params.currentIndex,10);
a.wc.listId=b.params.listId||a.wc.listId;X8(a.wc,d,e);a.Z("remoteQueueChange",c)},s0a=function(a,b){b.params=b.params||{};
q0a(a,b,"NOW_PLAYING_MAY_CHANGE");r0a(a,b);a.Z("autoplayDismissed")},r0a=function(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);
V8(a.wc,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.wc.playerState&&(c=-1E3);a.wc.playerState=c;c=Number(b.params.loadedTime);a.wc.N=isNaN(c)?0:c;a.wc.Yj(Number(b.params.duration));c=a.wc;var d=Number(b.params.liveIngestionTime);c.u=d;c.j=isNaN(d)?!1:!0;c=a.wc;d=Number(b.params.seekableStartTime);b=Number(b.params.seekableEndTime);c.B=isNaN(d)?0:d;c.i=isNaN(b)?0:b;1==a.wc.playerState?m0a(a):m9(a);a.Z("remotePlayerChange")},t0a=function(a,b){if(-1E3!=a.wc.playerState){var c=
1085;
switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.wc.playerState=c;b=parseInt(b.params.currentTime,10);V8(a.wc,isNaN(b)?0:b);a.Z("remotePlayerChange")}},u0a=function(a,b){var c="true"==b.params.muted;
a.wc.volume=parseInt(b.params.volume,10);a.wc.muted=c;a.Z("remotePlayerChange")},v0a=function(a,b){a.I=b.params.videoId;
a.Z("nowAutoplaying",parseInt(b.params.timeout,10))},w0a=function(a,b){var c="true"==b.params.hasNext;
a.wc.bl="true"==b.params.hasPrevious;a.wc.hasNext=c;a.Z("previousNextChange")},n0a=function(a){g.Qs(a.N);
a.N=g.Os(function(){a.Js(1)},864E5)},n9=function(a,b,c){c?i9("Sending: action="+b+", params="+g.lj(c)):i9("Sending: action="+b);
a.i.sendMessage(b,c)},o9=function(a){g8.call(this,"ScreenServiceProxy");
this.We=a;this.i=[];this.i.push(this.We.$_s("screenChange",(0,g.Ta)(this.RR,this)));this.i.push(this.We.$_s("onlineScreenChange",(0,g.Ta)(this.tW,this)))},A0a=function(a,b){sZa();
if(!n7||!n7.get("yt-remote-disable-remote-module-for-dev")){b=g.P("MDX_CONFIG")||b;kZa();l7();p9||(p9=new Z7(b?b.loungeApiHost:void 0),tZa()&&(p9.i="/api/loungedev"));q9||(q9=g.La("yt.mdx.remote.deferredProxies_")||[],g.Ka("yt.mdx.remote.deferredProxies_",q9,void 0));x0a();var c=r9();if(!c){var d=new q8(p9,b?b.disableAutomaticScreenCache||!1:!1);g.Ka("yt.mdx.remote.screenService_",d,void 0);c=r9();var e={};b&&(e={appId:b.appId,disableDial:b.disableDial,theme:b.theme,loadCastApiSetupScript:b.loadCastApiSetupScript,
disableCastApi:b.disableCastApi,enableDialLoungeToken:b.enableDialLoungeToken,enableCastLoungeToken:b.enableCastLoungeToken,forceMirroring:b.forceMirroring});g.Ka("yt.mdx.remote.enableConnectWithInitialState_",b?b.enableConnectWithInitialState||!1:!1,void 0);a0a(a,d,function(f){f?s9()&&R8(s9(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){$6("yt-remote-receiver-availability-change")})},e)}b&&!g.La("yt.mdx.remote.initialized_")&&(g.Ka("yt.mdx.remote.initialized_",!0,void 0),t9("Initializing: "+
g.lj(b)),u9.push(g.cu("yt-remote-cast2-api-ready",function(){$6("yt-remote-api-ready")})),u9.push(g.cu("yt-remote-cast2-availability-change",function(){$6("yt-remote-receiver-availability-change")})),u9.push(g.cu("yt-remote-cast2-receiver-selected",function(){v9(null);
$6("yt-remote-auto-connect","cast-selector-receiver")})),u9.push(g.cu("yt-remote-cast2-receiver-resumed",function(){$6("yt-remote-receiver-resumed","cast-selector-receiver")})),u9.push(g.cu("yt-remote-cast2-session-change",y0a)),u9.push(g.cu("yt-remote-connection-change",function(f){f?R8(s9(),"YouTube TV"):w9()||(R8(null,null),d0a())})),u9.push(g.cu("yt-remote-cast2-session-failed",function(){$6("yt-remote-connection-failed")})),a=x9(),b.isAuto&&(a.id+="#dial"),e=b.capabilities||[],g.Q("desktop_enable_autoplay")&&
e.push("atp"),0<e.length&&(a.capabilities=e),a.name=b.device,a.app=b.app,(b=b.theme)&&(a.theme=b),t9(" -- with channel params: "+g.lj(a)),a?(g.Dx("yt-remote-session-app",a.app),g.Dx("yt-remote-session-name",a.name)):(g.Fx("yt-remote-session-app"),g.Fx("yt-remote-session-name")),g.Ka("yt.mdx.remote.channelParams_",a,void 0),c.start(),s9()||z0a())}},B0a=function(){var a=r9().We.$_gos();
var b=y9();b&&z9()&&(g7(a,b)||a.push(b));return jZa(a)},A9=function(){var a=C0a();
!a&&O8()&&c0a()&&(a={key:"cast-selector-receiver",name:c0a()});return a},C0a=function(){var a=B0a(),b=y9();
b||(b=w9());return g.Xb(a,function(c){return b&&c7(b,c.key)?!0:!1})},y9=function(){var a=s9();
if(!a)return null;var b=r9().Ih();return h7(b,a)},y0a=function(a){t9("remote.onCastSessionChange_: "+d7(a));
if(a){var b=y9();if(b&&b.id==a.id){if(R8(b.id,"YouTube TV"),"shortLived"==a.idType&&(a=a.token))B9&&(B9.token=a),(b=z9())&&b.IB(a)}else b&&C9(),D9(a,1)}else z9()&&C9()},C9=function(){P8()?M8().stopSession():K8("stopSession called before API ready.");
var a=z9();a&&(a.disconnect(1),E9(null))},F9=function(){var a=z9();
return!!a&&3!=a.getProxyState()},t9=function(a){c8("remote",a)},r9=function(){if(!G9){var a=g.La("yt.mdx.remote.screenService_");
G9=a?new o9(a):null}return G9},s9=function(){return g.La("yt.mdx.remote.currentScreenId_")},D0a=function(a){g.Ka("yt.mdx.remote.currentScreenId_",a,void 0)},E0a=function(){return g.La("yt.mdx.remote.connectData_")},v9=function(a){g.Ka("yt.mdx.remote.connectData_",a,void 0)},z9=function(){return g.La("yt.mdx.remote.connection_")},E9=function(a){var b=z9();
v9(null);a||D0a("");g.Ka("yt.mdx.remote.connection_",a,void 0);q9&&(g.yc(q9,function(c){c(a)}),q9.length=0);
b&&!a?$6("yt-remote-connection-change",!1):!b&&a&&$6("yt-remote-connection-change",!0)},w9=function(){var a=g.Gx();
if(!a)return null;var b=r9();if(!b)return null;b=b.Ih();return h7(b,a)},D9=function(a,b){s9();
y9()&&y9();if(H9)B9=a;else{D0a(a.id);var c=g.La("yt.mdx.remote.enableConnectWithInitialState_")||!1;a=new h9(p9,a,x9(),c);a.connect(b,E0a());a.subscribe("beforeDisconnect",function(d){$6("yt-remote-before-disconnect",d)});
a.subscribe("beforeDispose",function(){z9()&&(z9(),E9(null))});
a.subscribe("browserChannelAuthError",function(){var d=y9();d&&"shortLived"==d.idType&&(P8()?M8().handleBrowserChannelAuthError():K8("refreshLoungeToken called before API ready."))});
E9(a)}},z0a=function(){var a=w9();
a?(t9("Resume connection to: "+d7(a)),D9(a,0)):(m7(),d0a(),t9("Skipping connecting because no session screen found."))},x0a=function(){var a=x9();
if(g.Df(a)){a=k7();var b=g.Ex("yt-remote-session-name")||"",c=g.Ex("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.Ka("yt.mdx.remote.channelParams_",a,void 0)}},x9=function(){return g.La("yt.mdx.remote.channelParams_")||{}},I9=function(a,b,c){g.H.call(this);
var d=this;this.j=a;this.G=b;this.Vb=c;this.events=new g.hC(this);this.Y=this.events.S(this.G,"onVolumeChange",function(e){F0a(d,e)});
this.C=!1;this.I=new g.JI(64);this.i=new g.K(this.fP,500,this);this.u=new g.K(this.gP,1E3,this);this.N=new t7(this.sZ,0,this);this.B={};this.W=new g.K(this.LP,1E3,this);this.J=new u7(this.seekTo,1E3,this);g.J(this,this.events);this.events.S(b,"onCaptionsTrackListChanged",this.eW);this.events.S(b,"captionschanged",this.sV);this.events.S(b,"captionssettingschanged",this.lP);this.events.S(b,"videoplayerreset",this.bB);this.events.S(b,"mdxautoplaycancel",function(){d.Vb.eL()});
a=this.Vb;a.isDisposed();a.subscribe("proxyStateChange",this.VN,this);a.subscribe("remotePlayerChange",this.sx,this);a.subscribe("remoteQueueChange",this.bB,this);a.subscribe("previousNextChange",this.SN,this);a.subscribe("nowAutoplaying",this.MN,this);a.subscribe("autoplayDismissed",this.pN,this);g.J(this,this.i);g.J(this,this.u);g.J(this,this.N);g.J(this,this.W);g.J(this,this.J);this.lP();this.bB();this.sx()},F0a=function(a,b){if(J9(a)){a.Vb.unsubscribe("remotePlayerChange",a.sx,a);
var c=Math.round(b.volume);b=!!b.muted;var d=a9(a.Vb);if(c!==d.volume||b!==d.muted)a.Vb.setVolume(c,b),a.W.start();a.Vb.subscribe("remotePlayerChange",a.sx,a)}},G0a=function(a){a.Rb(0);
a.i.stop();a.Wb(new g.JI(64))},K9=function(a,b){if(J9(a)&&!a.C){var c=null;
b&&(c={style:a.G.getSubtitlesUserSettings()},g.Mf(c,b));a.Vb.AJ(a.G.getVideoData(1).videoId,c);a.B=a9(a.Vb).trackData}},L9=function(a,b){var c=a.G.getPlaylist();
if(null===c||void 0===c?0:c.listId){var d=c.index;var e=c.listId.toString()}c=a.G.getVideoData(1);a.Vb.playVideo(c.videoId,b,d,e,c.playerParams,c.Ya,$Ya(c));a.Wb(new g.JI(1))},H0a=function(a,b){if(b){var c=a.G.getOption("captions","tracklist",{gM:1});
c&&c.length?(a.G.setOption("captions","track",b),a.C=!1):(a.G.loadModule("captions"),a.C=!0)}else a.G.setOption("captions","track",{})},J9=function(a){return a9(a.Vb).videoId===a.G.getVideoData(1).videoId},M9=function(){g.W.call(this,{D:"div",
K:"ytp-mdx-popup-dialog",V:{role:"dialog"},U:[{D:"div",K:"ytp-mdx-popup-dialog-inner-content",U:[{D:"div",K:"ytp-mdx-popup-title",ma:"Voc\u00ea n\u00e3o fez login"},{D:"div",K:"ytp-mdx-popup-description",ma:"Os v\u00eddeos que voc\u00ea assistir poder\u00e3o ser adicionados ao hist\u00f3rico de visualiza\u00e7\u00e3o da TV e influenciar\u00e3o as recomenda\u00e7\u00f5es dela. Para evitar isso, cancele e fa\u00e7a login no YouTube em um computador."},{D:"div",K:"ytp-mdx-privacy-popup-buttons",U:[{D:"button",
Ga:["ytp-button","ytp-mdx-privacy-popup-cancel"],ma:"Cancelar"},{D:"button",Ga:["ytp-button","ytp-mdx-privacy-popup-confirm"],ma:"Confirmar"}]}]}]});this.i=new g.JK(this,250);this.cancelButton=this.Da("ytp-mdx-privacy-popup-cancel");this.confirmButton=this.Da("ytp-mdx-privacy-popup-confirm");g.J(this,this.i);this.S(this.cancelButton,"click",this.j);this.S(this.confirmButton,"click",this.u)},N9=function(a){g.W.call(this,{D:"div",
K:"ytp-remote",U:[{D:"div",K:"ytp-remote-display-status",U:[{D:"div",K:"ytp-remote-display-status-icon",U:[g.ZJ()]},{D:"div",K:"ytp-remote-display-status-text",ma:"{{statustext}}"}]}]});this.api=a;this.i=new g.JK(this,250);g.J(this,this.i);this.S(a,"presentingplayerstatechange",this.onStateChange);I0a(this,a.yb())},I0a=function(a,b){if(3===a.api.getPresentingPlayerType()){var c={RECEIVER_NAME:a.api.getOption("remote","currentReceiver").name};
b=g.V(b,128)?g.dH("Erro em $RECEIVER_NAME",c):b.Gc()||g.V(b,4)?g.dH("Reproduzindo em $RECEIVER_NAME",c):g.dH("Conectado a $RECEIVER_NAME",c);a.Ma("statustext",b);a.i.show()}else a.i.hide()},O9=function(a,b){g.pP.call(this,"Reproduzir em",0,a,b);
this.G=a;this.Uo={};this.S(a,"onMdxReceiversChange",this.C);this.S(a,"presentingplayerstatechange",this.C);this.C()},P9=function(a){g.oM.call(this,a);
this.ql={key:f7(),name:"Este computador"};this.ji=null;this.subscriptions=[];this.QG=this.Vb=null;this.Uo=[this.ql];this.Gn=this.ql;this.Ed=new g.JI(64);this.EM=0;this.Bf=-1;this.Bx=!1;this.zx=this.Pt=null;if(!g.WD(this.player.T())&&!g.XD(this.player.T())){a=this.player;var b=g.RL(a);b&&(b=b.Yn())&&(b=new O9(a,b),g.J(this,b));b=new N9(a);g.J(this,b);g.aM(a,b.element,4);this.Pt=new M9;g.J(this,this.Pt);g.aM(a,this.Pt.element,4);this.Bx=!!w9()}},Q9=function(a){a.zx&&(a.player.removeEventListener("presentingplayerstatechange",
a.zx),a.zx=null)},J0a=function(a,b,c){a.Ed=c;
a.player.Z("presentingplayerstatechange",new g.MG(c,b))},R9=function(a,b){if(b.key!==a.Gn.key)if(b.key===a.ql.key)C9();
else{var c;(c=!a.player.T().L("mdx_enable_privacy_disclosure_ui"))||(c=((c=g.P("PLAYER_CONFIG"))&&c.args&&void 0!==c.args.authuser?!0:!(!g.P("SESSION_INDEX")&&!g.P("LOGGED_IN")))||a.Bx||!a.Pt);(c?0:g.lE(a.player.T())||g.oE(a.player.T()))&&K0a(a);a.Gn=b;if(!a.player.T().L("disable_mdx_connection_in_mdx_module_for_music_web")||!g.XD(a.player.T())){var d=a.player.getPlaylistId();c=a.player.getVideoData(1);var e=c.videoId;if(!d&&!e||(2===a.player.getAppState()||1===a.player.getAppState())&&a.player.T().L("should_clear_video_data_on_player_cued_unstarted"))a=
null;else{var f=a.player.getPlaylist();if(f){var h=[];for(var l=0;l<f.length;l++)h[l]=g.iM(f,l).videoId}else h=[e];f=a.player.getCurrentTime(1);a={videoIds:h,listId:d,videoId:e,playerParams:c.playerParams,clickTrackingParams:c.Ya,index:Math.max(a.player.getPlaylistIndex(),0),currentTime:0===f?void 0:f};(c=$Ya(c))&&(a.locationInfo=c)}t9("Connecting to: "+g.lj(b));"cast-selector-receiver"==b.key?(v9(a||null),b=a||null,P8()?M8().setLaunchParams(b):K8("setLaunchParams called before ready.")):!a&&F9()&&
s9()==b.key?$6("yt-remote-connection-change",!0):(C9(),v9(a||null),a=r9().Ih(),(b=h7(a,b.key))&&D9(b,1))}}},K0a=function(a){a.player.yb().Gc()?a.player.pauseVideo():(a.zx=function(b){!a.Bx&&g.OG(b,8)&&(a.player.pauseVideo(),Q9(a))},a.player.addEventListener("presentingplayerstatechange",a.zx));
a.Pt&&a.Pt.hd();z9()||(H9=!0)};
g.$c.prototype.C=g.da(0,function(){var a=g.dd(this);return 4294967296*g.dd(this)+(a>>>0)});
var vYa=g.Ge(function(a,b,c){if(1!==a.j)return!1;g.D(b,c,g.ld(a));return!0},g.Je),NYa=g.Ge(function(a,b,c,d){if(1!==a.j)return!1;
g.Rd(b,c,d,g.ld(a));return!0},g.Je),wYa=g.Ge(function(a,b,c){if(0!==a.j)return!1;
g.D(b,c,g.bd(a.i));return!0},g.Ke),MYa=g.Ge(function(a,b,c,d){if(0!==a.j)return!1;
g.Rd(b,c,d,g.bd(a.i));return!0},g.Ke),EYa=g.Ge(function(a,b,c){if(0!==a.j)return!1;
g.D(b,c,g.cd(a.i));return!0},g.Le),JYa=g.Ge(function(a,b,c,d){if(0!==a.j)return!1;
g.Rd(b,c,d,g.cd(a.i));return!0},g.Le),RYa=g.Ge(function(a,b,c){if(1!==a.j)return!1;
g.D(b,c,a.i.C());return!0},function(a,b,c){oYa(a,c,g.Jd(b,c))}),TYa=g.Ge(function(a,b,c){if(1!==a.j&&2!==a.j)return!1;
b=g.Ld(b,c);if(2==a.j){c=g.$c.prototype.C;var d=g.cd(a.i)>>>0;for(d=a.i.i+d;a.i.i<d;)b.push(c.call(a.i))}else b.push(a.i.C());return!0},function(a,b,c){b=g.Ld(b,c);
if(null!=b)for(var d=0;d<b.length;d++)oYa(a,c,b[d])}),BYa=g.Ge(function(a,b,c){if(0!==a.j)return!1;
g.D(b,c,g.ed(a.i));return!0},pYa),KYa=g.Ge(function(a,b,c,d){if(0!==a.j)return!1;
g.Rd(b,c,d,g.ed(a.i));return!0},pYa),SYa=g.Ge(function(a,b,c){if(2!==a.j)return!1;
a=g.nd(a);g.Id(b);g.Ld(b,c).push(a);return!0},function(a,b,c){b=g.Ld(b,c);
if(null!=b)for(var d=0;d<b.length;d++){var e=b[d];null!=e&&g.yd(a,c,g.ib(e))}}),IYa=g.Ge(function(a,b,c,d){if(2!==a.j)return!1;
g.Rd(b,c,d,g.nd(a));return!0},g.Me),PYa=g.Ge(function(a,b,c,d,e){if(2!==a.j)return!1;
g.kd(a,g.Sd(b,d,c),e);return!0},g.Ne),sYa=[1];
g.w(tYa,g.F);g.w(uYa,g.F);g.w(zYa,g.F);g.w(AYa,g.F);var GYa=[1,2];g.w(DYa,g.F);var LZa={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},G7={"'":"\\'"},fZa={O_:"atp",nca:"ska",Raa:"que",E9:"mus",mca:"sus",q5:"dsp",rba:"seq",h9:"mic",m4:"dpa",f0:"cds",C9:"mlm",i4:"dsdtr",k$:"ntb"};a7.prototype.equals=function(a){return a?this.id==a.id:!1};
var n7,j7="",zZa=uZa("loadCastFramework")||uZa("loadCastApplicationFramework"),BZa=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
g.Wa(t7,g.H);g.k=t7.prototype;g.k.FR=function(a){this.B=arguments;this.i=!1;this.Ob?this.u=g.Va()+this.Yf:this.Ob=g.Gi(this.C,this.Yf)};
g.k.stop=function(){this.Ob&&(g.C.clearTimeout(this.Ob),this.Ob=null);this.u=null;this.i=!1;this.B=[]};
g.k.pause=function(){++this.j};
g.k.resume=function(){this.j&&(--this.j,!this.j&&this.i&&(this.i=!1,this.I.apply(null,this.B)))};
g.k.va=function(){this.stop();t7.qe.va.call(this)};
g.k.GR=function(){this.Ob&&(g.C.clearTimeout(this.Ob),this.Ob=null);this.u?(this.Ob=g.Gi(this.C,this.u-g.Va()),this.u=null):this.j?this.i=!0:(this.i=!1,this.I.apply(null,this.B))};g.w(u7,g.H);g.k=u7.prototype;g.k.vJ=function(a){this.u=arguments;this.Ob||this.j?this.i=!0:v7(this)};
g.k.stop=function(){this.Ob&&(g.C.clearTimeout(this.Ob),this.Ob=null,this.i=!1,this.u=null)};
g.k.pause=function(){this.j++};
g.k.resume=function(){this.j--;this.j||!this.i||this.Ob||(this.i=!1,v7(this))};
g.k.va=function(){g.H.prototype.va.call(this);this.stop()};w7.prototype.stringify=function(a){return g.C.JSON.stringify(a,void 0)};
w7.prototype.parse=function(a){return g.C.JSON.parse(a,void 0)};var y7=new g.cg;g.w(GZa,g.ef);g.k=A7.prototype;g.k.yp=null;g.k.Ym=!1;g.k.Iu=null;g.k.nI=null;g.k.Ut=null;g.k.vu=null;g.k.An=null;g.k.Xo=null;g.k.Qq=null;g.k.Of=null;g.k.mC=0;g.k.fk=null;g.k.jC=null;g.k.pn=null;g.k.hv=-1;g.k.UO=!0;g.k.Qp=!1;g.k.eD=0;g.k.wB=null;var JZa={},D7={};g.k=A7.prototype;g.k.setTimeout=function(a){this.j=a};
g.k.HR=function(a){a=a.target;var b=this.wB;b&&3==g.Tj(a)?b.vJ():this.TP(a)};
g.k.TP=function(a){try{if(a==this.Of)a:{var b=g.Tj(this.Of),c=this.Of.j,d=this.Of.getStatus();if(g.Oc&&!g.Hc(10)||g.jf&&!g.Gc("420+")){if(4>b)break a}else if(3>b||3==b&&!g.ek(this.Of))break a;this.Qp||4!=b||7==c||(8==c||0>=d?this.i.Oj(3):this.i.Oj(2));H7(this);var e=this.Of.getStatus();this.hv=e;var f=g.ek(this.Of);if(this.Ym=200==e){4==b&&E7(this);if(this.C){for(a=!0;!this.Qp&&this.mC<f.length;){var h=KZa(this,f);if(h==D7){4==b&&(this.pn=4,z7(15),a=!1);break}else if(h==JZa){this.pn=4;z7(16);a=!1;
break}else I7(this,h)}4==b&&0==f.length&&(this.pn=1,z7(17),a=!1);this.Ym=this.Ym&&a;a||(E7(this),F7(this))}else I7(this,f);this.Ym&&!this.Qp&&(4==b?this.i.Qy(this):(this.Ym=!1,C7(this)))}else 400==e&&0<f.indexOf("Unknown SID")?(this.pn=3,z7(13)):(this.pn=0,z7(14)),E7(this),F7(this)}}catch(l){this.Of&&g.ek(this.Of)}finally{}};
g.k.KX=function(a){x7((0,g.Ta)(this.JX,this,a),0)};
g.k.JX=function(a){this.Qp||(H7(this),I7(this,a),C7(this))};
g.k.dO=function(a){x7((0,g.Ta)(this.IX,this,a),0)};
g.k.IX=function(a){this.Qp||(E7(this),this.Ym=a,this.i.Qy(this),this.i.Oj(4))};
g.k.cancel=function(){this.Qp=!0;E7(this)};
g.k.SX=function(){this.Iu=null;var a=Date.now();0<=a-this.nI?(2!=this.vu&&this.i.Oj(3),E7(this),this.pn=2,z7(18),F7(this)):NZa(this,this.nI-a)};
g.k.getLastError=function(){return this.pn};g.k=QZa.prototype;g.k.fD=null;g.k.rh=null;g.k.xB=!1;g.k.hP=null;g.k.Gz=null;g.k.LF=null;g.k.gD=null;g.k.ai=null;g.k.Ml=-1;g.k.ov=null;g.k.Fv=null;g.k.connect=function(a){this.gD=a;a=K7(this.i,null,this.gD);z7(3);this.hP=Date.now();var b=this.i.N;null!=b?(this.ov=b[0],(this.Fv=b[1])?(this.ai=1,RZa(this)):(this.ai=2,M7(this))):(X6(a,"MODE","init"),this.rh=new A7(this,void 0,void 0,void 0),this.rh.yp=this.fD,B7(this.rh,a,!1,null,!0),this.ai=0)};
g.k.wS=function(a){if(a)this.ai=2,M7(this);else{z7(4);var b=this.i;b.Ak=b.En.Ml;T7(b,9)}a&&this.Oj(2)};
g.k.pE=function(a){return this.i.pE(a)};
g.k.abort=function(){this.rh&&(this.rh.cancel(),this.rh=null);this.Ml=-1};
g.k.yf=function(){return!1};
g.k.WN=function(a,b){this.Ml=a.hv;if(0==this.ai)if(b){try{var c=this.j.parse(b)}catch(d){a=this.i;a.Ak=this.Ml;T7(a,2);return}this.ov=c[0];this.Fv=c[1]}else a=this.i,a.Ak=this.Ml,T7(a,2);else if(2==this.ai)if(this.xB)z7(7),this.LF=Date.now();else if("11111"==b){if(z7(6),this.xB=!0,this.Gz=Date.now(),a=this.Gz-this.hP,!g.Oc||g.Hc(10)||500>a)this.Ml=200,this.rh.cancel(),z7(12),L7(this.i,this,!0)}else z7(8),this.Gz=this.LF=Date.now(),this.xB=!1};
g.k.Qy=function(){this.Ml=this.rh.hv;if(this.rh.Ym)0==this.ai?this.Fv?(this.ai=1,RZa(this)):(this.ai=2,M7(this)):2==this.ai&&((!g.Oc||g.Hc(10)?!this.xB:200>this.LF-this.Gz)?(z7(11),L7(this.i,this,!1)):(z7(12),L7(this.i,this,!0)));else{0==this.ai?z7(9):2==this.ai&&z7(10);var a=this.i;this.rh.getLastError();a.Ak=this.Ml;T7(a,2)}};
g.k.Yx=function(){return this.i.Yx()};
g.k.isActive=function(){return this.i.isActive()};
g.k.Oj=function(a){this.i.Oj(a)};g.k=N7.prototype;g.k.zk=null;g.k.Zv=null;g.k.Zg=null;g.k.Pe=null;g.k.hD=null;g.k.Hz=null;g.k.uK=null;g.k.Ry=null;g.k.ax=0;g.k.LU=0;g.k.Pf=null;g.k.Pn=null;g.k.Ul=null;g.k.Zp=null;g.k.En=null;g.k.hC=null;g.k.xt=-1;g.k.DM=-1;g.k.Ak=-1;g.k.Ns=0;g.k.xs=0;g.k.Rp=8;g.Wa(TZa,g.ef);g.Wa(UZa,g.ef);g.k=N7.prototype;g.k.connect=function(a,b,c,d,e){z7(0);this.hD=b;this.Zv=c||{};d&&void 0!==e&&(this.Zv.OSID=d,this.Zv.OAID=e);this.I?(x7((0,g.Ta)(this.QK,this,a),100),YZa(this)):this.QK(a)};
g.k.QK=function(a){this.En=new QZa(this);this.En.fD=this.zk;this.En.j=this.C;this.En.connect(a)};
g.k.yf=function(){return 0==this.i};
g.k.getState=function(){return this.i};
g.k.bO=function(a){this.Pn=null;b_a(this,a)};
g.k.aO=function(){this.Ul=null;this.Pe=new A7(this,this.u,"rpc",this.J);this.Pe.yp=this.zk;this.Pe.eD=0;var a=this.uK.clone();g.Il(a,"RID","rpc");g.Il(a,"SID",this.u);g.Il(a,"CI",this.hC?"0":"1");g.Il(a,"AID",this.xt);O7(this,a);if(!g.Oc||g.Hc(10))g.Il(a,"TYPE","xmlhttp"),B7(this.Pe,a,!0,this.Ry,!1);else{g.Il(a,"TYPE","html");var b=this.Pe,c=!!this.Ry;b.vu=3;b.An=W6(a.clone());MZa(b,c)}};
g.k.WN=function(a,b){if(0!=this.i&&(this.Pe==a||this.Zg==a))if(this.Ak=a.hv,this.Zg==a&&3==this.i)if(7<this.Rp){try{var c=this.C.parse(b)}catch(d){c=null}if(Array.isArray(c)&&3==c.length)if(a=c,0==a[0])a:{if(!this.Ul){if(this.Pe)if(this.Pe.Ut+3E3<this.Zg.Ut)Q7(this),this.Pe.cancel(),this.Pe=null;else break a;S7(this);z7(19)}}else this.DM=a[1],0<this.DM-this.xt&&37500>a[2]&&this.hC&&0==this.xs&&!this.Zp&&(this.Zp=x7((0,g.Ta)(this.pV,this),6E3));else T7(this,11)}else null!=b&&T7(this,11);else if(this.Pe==
a&&Q7(this),!g.nb(b))for(a=this.C.parse(b),b=0;b<a.length;b++)c=a[b],this.xt=c[0],c=c[1],2==this.i?"c"==c[0]?(this.u=c[1],this.Ry=c[2],c=c[3],null!=c?this.Rp=c:this.Rp=6,this.i=3,this.Pf&&this.Pf.MK(),this.uK=K7(this,this.Yx()?this.Ry:null,this.hD),c_a(this)):"stop"==c[0]&&T7(this,7):3==this.i&&("stop"==c[0]?T7(this,7):"noop"!=c[0]&&this.Pf&&this.Pf.LK(c),this.xs=0)};
g.k.pV=function(){null!=this.Zp&&(this.Zp=null,this.Pe.cancel(),this.Pe=null,S7(this),z7(20))};
g.k.Qy=function(a){if(this.Pe==a){Q7(this);this.Pe=null;var b=2}else if(this.Zg==a)this.Zg=null,b=1;else return;this.Ak=a.hv;if(0!=this.i)if(a.Ym)if(1==b){b=Date.now()-a.Ut;var c=y7;c.dispatchEvent(new TZa(c,a.Qq?a.Qq.length:0,b,this.Ns));P7(this);this.B.length=0}else c_a(this);else{c=a.getLastError();var d;if(!(d=3==c||7==c||0==c&&0<this.Ak)){if(d=1==b)this.Zg||this.Pn||1==this.i||2<=this.Ns?d=!1:(this.Pn=x7((0,g.Ta)(this.bO,this,a),d_a(this,this.Ns)),this.Ns++,d=!0);d=!(d||2==b&&S7(this))}if(d)switch(c){case 1:T7(this,
5);break;case 4:T7(this,10);break;case 3:T7(this,6);break;case 7:T7(this,12);break;default:T7(this,2)}}};
g.k.cT=function(a){if(!g.bc(arguments,this.i))throw Error("Unexpected channel state: "+this.i);};
g.k.ZY=function(a){a?z7(2):(z7(1),e_a(this,8))};
g.k.pE=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new g.Nj;a.N=!1;return a};
g.k.isActive=function(){return!!this.Pf&&this.Pf.isActive(this)};
g.k.Oj=function(a){var b=y7;b.dispatchEvent(new UZa(b,a))};
g.k.Yx=function(){return!(!g.Oc||g.Hc(10))};
g.k=f_a.prototype;g.k.MK=function(){};
g.k.LK=function(){};
g.k.KK=function(){};
g.k.ZD=function(){};
g.k.wL=function(){return{}};
g.k.isActive=function(){return!0};g.k=g_a.prototype;g.k.isEmpty=function(){return 0===this.i.length&&0===this.j.length};
g.k.clear=function(){this.i=[];this.j=[]};
g.k.contains=function(a){return g.bc(this.i,a)||g.bc(this.j,a)};
g.k.remove=function(a){var b=this.i;var c=(0,g.tSa)(b,a);0<=c?(g.fc(b,c),b=!0):b=!1;return b||g.gc(this.j,a)};
g.k.Di=function(){for(var a=[],b=this.i.length-1;0<=b;--b)a.push(this.i[b]);var c=this.j.length;for(b=0;b<c;++b)a.push(this.j[b]);return a};h_a.prototype.flush=function(a,b){a=void 0===a?[]:a;b=void 0===b?!1:b;if(g.Q("enable_client_streamz_web")){a=g.q(a);for(var c=a.next();!c.done;c=a.next())c=g.Xi(c.value),c={serializedIncrementBatch:g.Kc(g.Fe(c,UYa))},g.Zu("streamzIncremented",c,{pH:b})}};var U7;g.Wa(V7,g.H);g.k=V7.prototype;g.k.BX=function(){this.Yf=Math.min(3E5,2*this.Yf);this.u();this.j&&this.start()};
g.k.start=function(){var a=this.Yf+15E3*Math.random();g.iq(this.i,a);this.j=Date.now()+a};
g.k.stop=function(){this.i.stop();this.j=0};
g.k.isActive=function(){return this.i.isActive()};
g.k.reset=function(){this.i.stop();this.Yf=5E3};g.Wa(W7,f_a);g.k=W7.prototype;g.k.subscribe=function(a,b,c){return this.u.subscribe(a,b,c)};
g.k.unsubscribe=function(a,b,c){return this.u.unsubscribe(a,b,c)};
g.k.hg=function(a){return this.u.hg(a)};
g.k.Z=function(a,b){return this.u.Z.apply(this.u,arguments)};
g.k.dispose=function(){this.Y||(this.Y=!0,g.bf(this.u),k_a(this),g.bf(this.j),this.j=null,this.oa=function(){return""})};
g.k.isDisposed=function(){return this.Y};
g.k.connect=function(a,b,c){if(!this.i||2!=this.i.getState()){this.W="";this.j.stop();this.C=a||null;this.B=b||0;a=this.qa+"/test";b=this.qa+"/bind";var d=new N7(c?c.firstTestResults:null,c?c.secondTestResults:null,this.ya),e=this.i;e&&(e.Pf=null);d.Pf=this;this.i=d;X7(this);if(this.i){d=g.P("ID_TOKEN");var f=this.i.zk||{};d?f["x-youtube-identity-token"]=d:delete f["x-youtube-identity-token"];this.i.zk=f}e?(3!=e.getState()&&0==$Za(e)||e.getState(),this.i.connect(a,b,this.I,e.u,e.xt)):c?this.i.connect(a,
b,this.I,c.sessionId,c.arrayId):this.i.connect(a,b,this.I)}};
g.k.sendMessage=function(a,b){a={_sc:a};b&&g.Mf(a,b);this.j.isActive()||2==(this.i?this.i.getState():0)?this.J.push(a):Y7(this)&&(X7(this),ZZa(this.i,a))};
g.k.MK=function(){this.j.reset();this.C=null;this.B=0;if(this.J.length){var a=this.J;this.J=[];for(var b=0,c=a.length;b<c;++b)ZZa(this.i,a[b])}this.Z("handlerOpened")};
g.k.KK=function(a){var b=2==a&&401==this.i.Ak;4==a||b||this.j.start();this.Z("handlerError",a,b)};
g.k.ZD=function(a,b){if(!this.j.isActive())this.Z("handlerClosed");else if(b)for(var c=0,d=b.length;c<d;++c){var e=b[c].map;e&&this.J.push(e)}this.xa.i.MI("/client_streamz/youtube/living_room/mdx/browser_channel/closed_channels");a&&this.Ia.i.LC("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps",a.length);b&&this.La.i.LC("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps",b.length)};
g.k.wL=function(){var a={v:2};this.W&&(a.gsessionid=this.W);0!=this.B&&(a.ui=""+this.B);0!=this.N&&(a.ui=""+this.N);this.C&&g.Mf(a,this.C);return a};
g.k.LK=function(a){"S"==a[0]?this.W=a[1]:"gracefulReconnect"==a[0]?(this.j.start(),XZa(this.i)):this.Z("handlerMessage",new i_a(a[0],a[1]))};
g.k.IB=function(a){(this.I.loungeIdToken=a)||this.j.stop();if(this.Ha&&this.i){var b=this.i.zk||{};a?b["X-YouTube-LoungeId-Token"]=a:delete b["X-YouTube-LoungeId-Token"];this.i.zk=b}};
g.k.AY=function(){this.j.isActive();0==$Za(this.i)&&this.connect(this.C,this.B)};Z7.prototype.B=function(a,b,c,d){b?a(d):a({text:c.responseText})};
Z7.prototype.u=function(a,b){a(Error("Request error: "+b.status))};
Z7.prototype.C=function(a){a(Error("request timed out"))};var r_a=Date.now(),b8=null,e8=Array(50),d8=-1,f8=!1;g.Wa(g8,g.Ow);g8.prototype.Ih=function(){return this.screens};
g8.prototype.contains=function(a){return!!g7(this.screens,a)};
g8.prototype.get=function(a){return a?h7(this.screens,a):null};
g8.prototype.info=function(a){c8(this.I,a)};g.w(h8,g.Ow);g.k=h8.prototype;g.k.start=function(){!this.i&&isNaN(this.Ob)&&this.oO()};
g.k.stop=function(){this.i&&(this.i.abort(),this.i=null);isNaN(this.Ob)||(g.Qs(this.Ob),this.Ob=NaN)};
g.k.va=function(){this.stop();g.Ow.prototype.va.call(this)};
g.k.oO=function(){this.Ob=NaN;this.i=g.Us($7(this.u,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:this.J},timeout:5E3,onSuccess:(0,g.Ta)(this.JR,this),onError:(0,g.Ta)(this.IR,this),onTimeout:(0,g.Ta)(this.KR,this)})};
g.k.JR=function(a,b){this.i=null;a=b.screen||{};a.dialId=this.B;a.name=this.I;b=-1;this.C&&a.shortLivedLoungeToken&&a.shortLivedLoungeToken.value&&a.shortLivedLoungeToken.refreshIntervalMs&&(a.screenIdType="shortLived",a.loungeToken=a.shortLivedLoungeToken.value,b=a.shortLivedLoungeToken.refreshIntervalMs);this.Z("pairingComplete",new b7(a),b)};
g.k.IR=function(a){this.i=null;a.status&&404==a.status?this.j>=L0a.length?this.Z("pairingFailed",Error("DIAL polling timed out")):(a=L0a[this.j],this.Ob=g.Os((0,g.Ta)(this.oO,this),a),this.j++):this.Z("pairingFailed",Error("Server error "+a.status))};
g.k.KR=function(){this.i=null;this.Z("pairingFailed",Error("Server not responding"))};
var L0a=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.Wa(j8,g8);g.k=j8.prototype;g.k.start=function(){i8(this)&&this.Z("screenChange");!g.Ex("yt-remote-lounge-token-expiration")&&v_a(this);g.Qs(this.i);this.i=g.Os((0,g.Ta)(this.start,this),1E4)};
g.k.add=function(a,b){i8(this);s_a(this,a);k8(this,!1);this.Z("screenChange");b(a);a.token||v_a(this)};
g.k.remove=function(a,b){var c=i8(this);u_a(this,a)&&(k8(this,!1),c=!0);b(a);c&&this.Z("screenChange")};
g.k.fC=function(a,b,c,d){var e=i8(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,k8(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.Z("screenChange")};
g.k.va=function(){g.Qs(this.i);j8.qe.va.call(this)};
g.k.BT=function(a){i8(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}k8(this,!b);b&&c8(this.I,"Missed "+b+" lounge tokens.")};
g.k.AT=function(a){c8(this.I,"Requesting lounge tokens failed: "+a)};g.w(m8,g.Ow);g.k=m8.prototype;g.k.start=function(){var a=parseInt(g.Ex("yt-remote-fast-check-period")||"0",10);(this.B=g.Va()-144E5<a?0:a)?p8(this):(this.B=g.Va()+3E5,g.Dx("yt-remote-fast-check-period",this.B),this.eH())};
g.k.isEmpty=function(){return g.Df(this.i)};
g.k.update=function(){l8("Updating availability on schedule.");var a=this.I(),b=g.rf(this.i,function(c,d){return c&&!!h7(a,d)},this);
o8(this,b)};
g.k.va=function(){g.Qs(this.u);this.u=NaN;this.j&&(this.j.abort(),this.j=null);g.Ow.prototype.va.call(this)};
g.k.eH=function(){g.Qs(this.u);this.u=NaN;this.j&&this.j.abort();var a=x_a(this);if(Y6(a)){var b=$7(this.C,"/pairing/get_screen_availability");this.j=a8(this.C,b,{lounge_token:g.yf(a).join(",")},(0,g.Ta)(this.hX,this,a),(0,g.Ta)(this.gX,this))}else o8(this,{}),p8(this)};
g.k.hX=function(a,b){this.j=null;var c=g.yf(x_a(this));if(g.vc(c,g.yf(a))){b=b.screens||[];c={};for(var d=0,e=b.length;d<e;++d)c[a[b[d].loungeToken]]="online"==b[d].status;o8(this,c);p8(this)}else this.re("Changing Screen set during request."),this.eH()};
g.k.gX=function(a){this.re("Screen availability failed: "+a);this.j=null;p8(this)};
g.k.re=function(a){c8("OnlineScreenService",a)};g.Wa(q8,g8);g.k=q8.prototype;g.k.start=function(){this.j.start();this.i.start();this.screens.length&&(this.Z("screenChange"),this.i.isEmpty()||this.Z("onlineScreenChange"))};
g.k.add=function(a,b,c){this.j.add(a,b,c)};
g.k.remove=function(a,b,c){this.j.remove(a,b,c);this.i.update()};
g.k.fC=function(a,b,c,d){this.j.contains(a)?this.j.fC(a,b,c,d):(a="Updating name of unknown screen: "+a.name,c8(this.I,a),d(Error(a)))};
g.k.Ih=function(a){return a?this.screens:g.ic(this.screens,g.Mo(this.u,function(b){return!this.contains(b)},this))};
g.k.wJ=function(){return g.Mo(this.Ih(!0),function(a){return!!this.i.i[a.id]},this)};
g.k.xJ=function(a,b,c,d,e,f){var h=this;this.info("getDialScreenByPairingCode "+a+" / "+b);var l=new h8(this.B,a,b,c,d);l.subscribe("pairingComplete",function(m,n){g.bf(l);e(r8(h,m),n)});
l.subscribe("pairingFailed",function(m){g.bf(l);f(m)});
l.start();return(0,g.Ta)(l.stop,l)};
g.k.LR=function(a,b,c,d){g.Us($7(this.B,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:a},timeout:5E3,onSuccess:(0,g.Ta)(function(e,f){e=new b7(f.screen||{});if(!e.name||B_a(this,e.name)){a:{f=e.name;for(var h=2,l=b(f,h);B_a(this,l);){h++;if(20<h)break a;l=b(f,h)}f=l}e.name=f}c(r8(this,e))},this),
onError:(0,g.Ta)(function(e){d(Error("pairing request failed: "+e.status))},this),
onTimeout:(0,g.Ta)(function(){d(Error("pairing request timed out."))},this)})};
g.k.va=function(){g.bf(this.j);g.bf(this.i);q8.qe.va.call(this)};
g.k.KT=function(){D_a(this);this.Z("screenChange");this.i.update()};
q8.prototype.dispose=q8.prototype.dispose;g.Wa(t8,g.Ow);g.k=t8.prototype;g.k.getScreen=function(){return this.B};
g.k.Bg=function(a){this.isDisposed()||(a&&(v8(this,""+a),this.Z("sessionFailed")),this.B=null,this.Z("sessionScreen",null))};
g.k.info=function(a){c8(this.ya,a)};
g.k.yJ=function(){return null};
g.k.uH=function(a){var b=this.i;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,(0,g.Ta)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.Ta)(function(){v8(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.k.va=function(){this.uH("");t8.qe.va.call(this)};g.w(w8,t8);g.k=w8.prototype;g.k.tH=function(a){if(this.j){if(this.j==a)return;v8(this,"Overriding cast session with new session object");M_a(this);this.qa=!1;this.W="unknown";this.j.removeUpdateListener(this.oa);this.j.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.xa)}this.j=a;this.j.addUpdateListener(this.oa);this.j.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.xa);I_a(this,"getMdxSessionStatus")};
g.k.zt=function(a){this.info("launchWithParams no-op for Cast: "+g.lj(a))};
g.k.stop=function(){this.j?this.j.stop((0,g.Ta)(function(){this.Bg()},this),(0,g.Ta)(function(){this.Bg(Error("Failed to stop receiver app."))},this)):this.Bg(Error("Stopping cast device without session."))};
g.k.uH=function(){};
g.k.va=function(){this.info("disposeInternal");M_a(this);this.j&&(this.j.removeUpdateListener(this.oa),this.j.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.xa));this.j=null;t8.prototype.va.call(this)};
g.k.WX=function(a,b){if(!this.isDisposed())if(b)if(b=Z6(b),g.Qa(b))switch(a=""+b.type,b=b.data||{},this.info("onYoutubeMessage_: "+a+" "+g.lj(b)),a){case "mdxSessionStatus":G_a(this,b);break;case "loungeToken":J_a(this,b);break;default:v8(this,"Unknown youtube message: "+a)}else v8(this,"Unable to parse message.");else v8(this,"No data in message.")};
g.k.KL=function(a,b,c,d){g.Qs(this.N);this.N=0;A_a(this.u,this.i.label,a,this.i.friendlyName,(0,g.Ta)(function(e){e?b(e):0<=d?(v8(this,"Screen "+a+" appears to be offline. "+d+" retries left."),this.N=g.Os((0,g.Ta)(this.KL,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.k.yJ=function(){return this.j};
g.k.MR=function(a){this.isDisposed()||a||(v8(this,"Cast session died."),this.Bg())};g.w(z8,t8);g.k=z8.prototype;g.k.tH=function(a){this.j=a;this.j.addUpdateListener(this.Ha)};
g.k.zt=function(a){this.Ia=a;this.Y()};
g.k.stop=function(){T_a(this);this.j?this.j.stop((0,g.Ta)(this.Bg,this,null),(0,g.Ta)(this.Bg,this,"Failed to stop DIAL device.")):this.Bg()};
g.k.va=function(){T_a(this);this.j&&this.j.removeUpdateListener(this.Ha);this.j=null;t8.prototype.va.call(this)};
g.k.NR=function(a){this.isDisposed()||a||(v8(this,"DIAL session died."),this.C(),this.C=function(){},this.Bg())};g.w(D8,t8);D8.prototype.stop=function(){this.Bg()};
D8.prototype.tH=function(){};
D8.prototype.zt=function(){g.Qs(this.j);this.j=NaN;var a=h7(this.u.Ih(),this.i.label);a?u8(this,a):this.Bg(Error("No such screen"))};
D8.prototype.va=function(){g.Qs(this.j);this.j=NaN;t8.prototype.va.call(this)};g.w(E8,g.Ow);g.k=E8.prototype;
g.k.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.N,[chrome.cast.Capability.AUDIO_OUT]);this.W||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;a=a||this.I?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION;var e=(0,g.Ta)(this.SW,this);c=new chrome.cast.ApiConfig(c,(0,g.Ta)(this.XN,this),e,d,a);c.customDialLaunchCallback=(0,g.Ta)(this.LV,this);
chrome.cast.initialize(c,(0,g.Ta)(function(){this.isDisposed()||(chrome.cast.addReceiverActionListener(this.C),o_a(),this.j.subscribe("onlineScreenChange",(0,g.Ta)(this.zJ,this)),this.u=W_a(this),chrome.cast.setCustomReceivers(this.u,function(){},(0,g.Ta)(function(f){this.re("Failed to set initial custom receivers: "+g.lj(f))},this)),this.Z("yt-remote-cast2-availability-change",G8(this)),b(!0))},this),(0,g.Ta)(function(f){this.re("Failed to initialize API: "+g.lj(f));
b(!1)},this))};
g.k.EY=function(a,b){F8("Setting connected screen ID: "+a+" -> "+b);if(this.i){var c=this.i.getScreen();if(!a||c&&c.id!=a)F8("Unsetting old screen status: "+this.i.i.friendlyName),H8(this,null)}if(a&&b){if(!this.i){c=h7(this.j.Ih(),a);if(!c){F8("setConnectedScreenStatus: Unknown screen.");return}if("shortLived"==c.idType){F8("setConnectedScreenStatus: Screen with id type to be short lived.");return}a=U_a(this,c);a||(F8("setConnectedScreenStatus: Connected receiver not custom..."),a=new chrome.cast.Receiver(c.uuid?
c.uuid:c.id,c.name),a.receiverType=chrome.cast.ReceiverType.CUSTOM,this.u.push(a),chrome.cast.setCustomReceivers(this.u,function(){},(0,g.Ta)(function(d){this.re("Failed to set initial custom receivers: "+g.lj(d))},this)));
F8("setConnectedScreenStatus: new active receiver: "+a.friendlyName);H8(this,new D8(this.j,a),!0)}this.i.uH(b)}else F8("setConnectedScreenStatus: no screen.")};
g.k.FY=function(a){this.isDisposed()?this.re("Setting connection data on disposed cast v2"):this.i?this.i.zt(a):this.re("Setting connection data without a session")};
g.k.PR=function(){this.isDisposed()?this.re("Stopping session on disposed cast v2"):this.i?(this.i.stop(),H8(this,null)):F8("Stopping non-existing session")};
g.k.requestSession=function(){chrome.cast.requestSession((0,g.Ta)(this.XN,this),(0,g.Ta)(this.kX,this))};
g.k.va=function(){this.j.unsubscribe("onlineScreenChange",(0,g.Ta)(this.zJ,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.C);var a=l_a,b=g.La("yt.mdx.remote.debug.handlers_");g.gc(b||[],a);g.bf(this.i);g.Ow.prototype.va.call(this)};
g.k.re=function(a){c8("Controller",a)};
g.k.ZN=function(a,b){this.i==a&&(b||H8(this,null),this.Z("yt-remote-cast2-session-change",b))};
g.k.PW=function(a,b){if(!this.isDisposed())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),F8("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.i)if(this.i.i.label!=a.label)F8("onReceiverAction_: Stopping active receiver: "+this.i.i.friendlyName),this.i.stop();else{F8("onReceiverAction_: Casting to active receiver.");this.i.getScreen()&&this.Z("yt-remote-cast2-session-change",this.i.getScreen());break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:H8(this,
new D8(this.j,a));break;case chrome.cast.ReceiverType.DIAL:H8(this,new z8(this.j,a,this.B,this.config_));break;case chrome.cast.ReceiverType.CAST:H8(this,new w8(this.j,a,this.config_));break;default:this.re("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.i&&this.i.i.label==a.label?this.i.stop():this.re("Stopping receiver w/o session: "+a.friendlyName)}else this.re("onReceiverAction_ called without receiver.")};
g.k.LV=function(a){if(this.isDisposed())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.re("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.i?this.i.i:null;if(!c||c.label!=b.label)return this.re("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.i.getScreen())return F8("Reselecting dial screen."),
this.Z("yt-remote-cast2-session-change",this.i.getScreen()),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.re('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);H8(this,new z8(this.j,b,this.B,this.config_))}b=this.i;b.N=a;b.N.appState==chrome.cast.DialAppState.RUNNING?(a=b.N.extraData||{},c=a.screenId||null,A8(b)&&a.loungeToken?a.loungeTokenRefreshIntervalMs?a=Q_a(b,{name:b.i.friendlyName,screenId:a.screenId,loungeToken:a.loungeToken,dialId:b.N.receiver.label,
screenIdType:"shortLived"},a.loungeTokenRefreshIntervalMs):(g.ys(Error("No loungeTokenRefreshIntervalMs presents in additionalData: "+JSON.stringify(a)+".")),a=R_a(b,c)):a=R_a(b,c)):a=C8(b);return a};
g.k.XN=function(a){var b=this;if(!this.isDisposed()&&!this.I){F8("New cast session ID: "+a.sessionId);var c=a.receiver;if(c.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.i)if(c.receiverType==chrome.cast.ReceiverType.CAST)F8("Got resumed cast session before resumed mdx connection."),c.friendlyName=chrome.cast.unescape(c.friendlyName),H8(this,new w8(this.j,c,this.config_),!0);else{this.re("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var d=this.i.i,e=h7(this.j.Ih(),
d.label);e&&c7(e,c.label)&&d.receiverType!=chrome.cast.ReceiverType.CAST&&c.receiverType==chrome.cast.ReceiverType.CAST&&(F8("onSessionEstablished_: manual to cast session change "+c.friendlyName),g.bf(this.i),this.i=new w8(this.j,c,this.config_),this.i.subscribe("sessionScreen",(0,g.Ta)(this.ZN,this,this.i)),this.i.subscribe("sessionFailed",function(){return V_a(b,b.i)}),this.i.zt(null));
this.i.tH(a)}}};
g.k.OR=function(){return this.i?this.i.yJ():null};
g.k.kX=function(a){this.isDisposed()||(this.re("Failed to estabilish a session: "+g.lj(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&H8(this,null),this.Z("yt-remote-cast2-session-failed"))};
g.k.SW=function(a){F8("Receiver availability updated: "+a);if(!this.isDisposed()){var b=G8(this);this.J=a==chrome.cast.ReceiverAvailability.AVAILABLE;G8(this)!=b&&this.Z("yt-remote-cast2-availability-change",G8(this))}};
g.k.zJ=function(){this.isDisposed()||(this.u=W_a(this),F8("Updating custom receivers: "+g.lj(this.u)),chrome.cast.setCustomReceivers(this.u,function(){},(0,g.Ta)(function(){this.re("Failed to set custom receivers.")},this)),this.Z("yt-remote-cast2-availability-change",G8(this)))};
E8.prototype.setLaunchParams=E8.prototype.FY;E8.prototype.setConnectedScreenStatus=E8.prototype.EY;E8.prototype.stopSession=E8.prototype.PR;E8.prototype.getCastSession=E8.prototype.OR;E8.prototype.requestSession=E8.prototype.requestSession;E8.prototype.init=E8.prototype.init;E8.prototype.dispose=E8.prototype.dispose;var N8=[];g.k=S8.prototype;
g.k.reset=function(a){this.listId="";this.index=-1;this.videoId="";T8(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.trackData=a.trackData,this.bl=a.hasPrevious,this.hasNext=a.hasNext,this.J=a.playerTime,this.I=a.playerTimeAt,this.B=a.seekableStart,this.i=a.seekableEnd,this.C=a.duration,this.N=a.loadedTime,this.u=a.liveIngestionTime,this.j=
!isNaN(this.u))};
g.k.Gc=function(){return 1==this.playerState};
g.k.isAdPlaying=function(){return 1081==this.playerState};
g.k.Yj=function(a){this.C=isNaN(a)?0:a};
g.k.getDuration=function(){return this.j?this.C+U8(this):this.C};
g.k.clone=function(){return new S8(Y8(this))};g.w($8,g.Ow);g.k=$8.prototype;g.k.getState=function(){return this.u};
g.k.play=function(){b9(this)?(this.i?this.i.play(null,g.Ma,g9(this,"play")):f9(this,"play"),e9(this,1,W8(a9(this))),this.Z("remotePlayerChange")):c9(this,this.play)};
g.k.pause=function(){b9(this)?(this.i?this.i.pause(null,g.Ma,g9(this,"pause")):f9(this,"pause"),e9(this,2,W8(a9(this))),this.Z("remotePlayerChange")):c9(this,this.pause)};
g.k.seekTo=function(a){if(b9(this)){if(this.i){var b=a9(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;b.Gc()||3==b.playerState?c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_START:c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.i.seek(c,g.Ma,g9(this,"seekTo",{newTime:a}))}else f9(this,"seekTo",{newTime:a});e9(this,3,a);this.Z("remotePlayerChange")}else c9(this,g.Ua(this.seekTo,a))};
g.k.stop=function(){if(b9(this)){this.i?this.i.stop(null,g.Ma,g9(this,"stopVideo")):f9(this,"stopVideo");var a=a9(this);a.index=-1;a.videoId="";T8(a);d9(this,a);this.Z("remotePlayerChange")}else c9(this,this.stop)};
g.k.setVolume=function(a,b){if(b9(this)){var c=a9(this);if(this.j){if(c.volume!=a){var d=Math.round(a)/100;this.j.setReceiverVolumeLevel(d,(0,g.Ta)(function(){c8("CP","set receiver volume: "+d)},this),(0,g.Ta)(function(){this.re("failed to set receiver volume.")},this))}c.muted!=b&&this.j.setReceiverMuted(b,(0,g.Ta)(function(){c8("CP","set receiver muted: "+b)},this),(0,g.Ta)(function(){this.re("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);f9(this,"setVolume",e)}c.muted=b;c.volume=a;d9(this,c)}else c9(this,g.Ua(this.setVolume,a,b))};
g.k.AJ=function(a,b){if(b9(this)){var c=a9(this);a={videoId:a};b&&(c.trackData={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,kind:b.kind},a.style=g.lj(b.style),g.Mf(a,c.trackData));f9(this,"setSubtitlesTrack",a);d9(this,c)}else c9(this,g.Ua(this.AJ,a,b))};
g.k.setAudioTrack=function(a,b){b9(this)?(b=b.getLanguageInfo().getId(),f9(this,"setAudioTrack",{videoId:a,audioTrackId:b}),a=a9(this),a.audioTrackId=b,d9(this,a)):c9(this,g.Ua(this.setAudioTrack,a,b))};
g.k.playVideo=function(a,b,c,d,e,f,h){d=void 0===d?null:d;e=void 0===e?null:e;f=void 0===f?null:f;h=void 0===h?null:h;var l=a9(this),m={videoId:a};void 0!==c&&(m.currentIndex=c);X8(l,a,c||0);void 0!==b&&(V8(l,b),m.currentTime=b);d&&(m.listId=d);e&&(m.playerParams=e);f&&(m.clickTrackingParams=f);h&&(m.locationInfo=g.lj(h));f9(this,"setPlaylist",m);d||d9(this,l)};
g.k.pB=function(a,b){if(b9(this)){if(a&&b){var c=a9(this);X8(c,a,b);d9(this,c)}f9(this,"previous")}else c9(this,g.Ua(this.pB,a,b))};
g.k.nextVideo=function(a,b){if(b9(this)){if(a&&b){var c=a9(this);X8(c,a,b);d9(this,c)}f9(this,"next")}else c9(this,g.Ua(this.nextVideo,a,b))};
g.k.As=function(){if(b9(this)){f9(this,"clearPlaylist");var a=a9(this);a.reset();d9(this,a);this.Z("remotePlayerChange")}else c9(this,this.As)};
g.k.eL=function(){b9(this)?f9(this,"dismissAutoplay"):c9(this,this.eL)};
g.k.dispose=function(){if(3!=this.u){var a=this.u;this.u=3;this.Z("proxyStateChange",a,this.u)}g.Ow.prototype.dispose.call(this)};
g.k.va=function(){h0a(this);this.B=null;this.C.clear();Z8(this,null);g.Ow.prototype.va.call(this)};
g.k.vH=function(a){if((a!=this.u||2==a)&&3!=this.u&&0!=a){var b=this.u;this.u=a;this.Z("proxyStateChange",b,a);if(1==a)for(;!this.C.isEmpty();)b=a=this.C,0===b.i.length&&(b.i=b.j,b.i.reverse(),b.j=[]),a.i.pop().apply(this);else 3==a&&this.dispose()}};
g.k.NW=function(a,b){this.Z(a,b)};
g.k.vV=function(a){if(!a)this.mx(null),Z8(this,null);else if(this.j.receiver.volume){a=this.j.receiver.volume;var b=a9(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)c8("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,d9(this,b)}};
g.k.mx=function(a){c8("CP","Cast media: "+!!a);this.i&&this.i.removeUpdateListener(this.N);if(this.i=a)this.i.addUpdateListener(this.N),i0a(this),this.Z("remotePlayerChange")};
g.k.uV=function(a){a?(i0a(this),this.Z("remotePlayerChange")):this.mx(null)};
g.k.PH=function(){f9(this,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.k.CV=function(){var a=e0a();a&&Z8(this,a)};
g.k.re=function(a){c8("CP",a)};g.w(h9,g.Ow);g.k=h9.prototype;
g.k.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.videoIds,f=b.playerParams,h=b.clickTrackingParams,l=b.index,m={videoId:d},n=b.currentTime,p=b.locationInfo;b=b.loopMode;void 0!==n&&(m.currentTime=5>=n?0:n);f&&(m.playerParams=f);p&&(m.locationInfo=p);h&&(m.clickTrackingParams=h);c&&(m.listId=c);e&&0<e.length&&(m.videoIds=e.join(","));void 0!==l&&(m.currentIndex=l);this.ya&&(m.loopMode=b||"LOOP_MODE_OFF");c&&(this.wc.listId=c);this.wc.videoId=d;this.wc.index=l||0;this.wc.state=3;V8(this.wc,
n);this.B="UNSUPPORTED";c=this.ya?"setInitialState":"setPlaylist";i9("Connecting with "+c+" and params: "+g.lj(m));this.i.connect({method:c,params:g.lj(m)},a,nZa())}else i9("Connecting without params"),this.i.connect({},a,nZa());l0a(this)};
g.k.IB=function(a){this.i.IB(a)};
g.k.dispose=function(){this.isDisposed()||(g.Ka("yt.mdx.remote.remoteClient_",null,void 0),this.Z("beforeDispose"),j9(this,3));g.Ow.prototype.dispose.call(this)};
g.k.va=function(){k9(this);m9(this);l9(this);g.Qs(this.J);this.J=NaN;g.Qs(this.N);this.N=NaN;this.u=null;g.Kt(this.W);this.W.length=0;this.i.dispose();g.Ow.prototype.va.call(this);this.B=this.I=this.j=this.wc=this.i=null};
g.k.zV=function(){var a=this;i9("Channel opened");this.qa&&(this.qa=!1,l9(this),this.oa=g.Os(function(){i9("Timing out waiting for a screen.");a.Js(1)},15E3));
rZa(j_a(this.i),this.Ia)};
g.k.wV=function(){i9("Channel closed");isNaN(this.C)?m7(!0):m7();this.dispose()};
g.k.xV=function(a,b){m7();isNaN(this.xw())?(b&&"shortLived"==this.xa&&this.Z("browserChannelAuthError",a),i9("Channel error: "+a+" without reconnection"),this.dispose()):(this.qa=!0,i9("Channel error: "+a+" with reconnection in "+this.xw()+" ms"),j9(this,2))};
g.k.pM=function(a){if(!this.j||0===this.j.length)return!1;for(var b=g.q(this.j),c=b.next();!c.done;c=b.next())if(!c.value.capabilities.has(a))return!1;return!0};
g.k.yV=function(a){a.params?i9("Received: action="+a.action+", params="+g.lj(a.params)):i9("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=Z6(a.params.devices);this.j=g.vn(a,function(c){return new a7(c)});
a=!!g.Xb(this.j,function(c){return"LOUNGE_SCREEN"==c.type});
o0a(this,a);a=this.pM("mlm");this.Z("multiStateLoopEnabled",a);break;case "loungeScreenDisconnected":g.hc(this.j,function(c){return"LOUNGE_SCREEN"==c.type});
o0a(this,!1);break;case "remoteConnected":var b=new a7(Z6(a.params.device));g.Xb(this.j,function(c){return c.equals(b)})||aZa(this.j,b);
break;case "remoteDisconnected":b=new a7(Z6(a.params.device));g.hc(this.j,function(c){return c.equals(b)});
break;case "gracefulDisconnect":break;case "playlistModified":q0a(this,a,"QUEUE_MODIFIED");break;case "nowPlaying":s0a(this,a);break;case "onStateChange":r0a(this,a);break;case "onAdStateChange":t0a(this,a);break;case "onVolumeChanged":u0a(this,a);break;case "onSubtitlesTrackChanged":p0a(this,a);break;case "nowAutoplaying":v0a(this,a);break;case "autoplayDismissed":this.Z("autoplayDismissed");break;case "autoplayUpNext":this.I=a.params.videoId||null;this.Z("autoplayUpNext",this.I);break;case "onAutoplayModeChanged":this.B=
a.params.autoplayMode;this.Z("autoplayModeChange",this.B);"DISABLED"==this.B&&this.Z("autoplayDismissed");break;case "onHasPreviousNextChanged":w0a(this,a);break;case "requestAssistedSignIn":this.Z("assistedSignInRequested",a.params.authCode);break;case "onLoopModeChanged":this.Z("loopModeChange",a.params.loopMode);break;default:i9("Unrecognized action: "+a.action)}};
g.k.uT=function(){var a=3;this.isDisposed()||(a=0,isNaN(this.xw())?Y7(this.i)&&isNaN(this.C)&&(a=1):a=2);return a};
g.k.Js=function(a){i9("Disconnecting with "+a);g.Ka("yt.mdx.remote.remoteClient_",null,void 0);k9(this);this.Z("beforeDisconnect",a);1==a&&m7();k_a(this.i,a);this.dispose()};
g.k.sT=function(){var a=this.wc;this.u&&(a=this.wc.clone(),X8(a,this.u,a.index));return Y8(a)};
g.k.GY=function(a){var b=this,c=new S8(a);c.videoId&&c.videoId!=this.wc.videoId&&(this.u=c.videoId,g.Qs(this.J),this.J=g.Os(function(){if(b.u){var e=b.u;b.u=null;b.wc.videoId!=e&&n9(b,"getNowPlaying")}},5E3));
var d=[];this.wc.listId==c.listId&&this.wc.videoId==c.videoId&&this.wc.index==c.index||d.push("remoteQueueChange");this.wc.playerState==c.playerState&&this.wc.volume==c.volume&&this.wc.muted==c.muted&&W8(this.wc)==W8(c)&&g.lj(this.wc.trackData)==g.lj(c.trackData)||d.push("remotePlayerChange");this.wc.reset(a);g.yc(d,function(e){this.Z(e)},this)};
g.k.JL=function(){var a=this.i.I.id,b=g.Xb(this.j,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
g.k.xw=function(){var a=this.i;return a.j.isActive()?a.j.j-Date.now():NaN};
g.k.pT=function(){return this.B||"UNSUPPORTED"};
g.k.qT=function(){return this.I||""};
g.k.QR=function(){if(!isNaN(this.xw())){var a=this.i.j;g.jq(a.i);a.start()}};
g.k.DY=function(a,b){n9(this,a,b);n0a(this)};
g.k.BJ=function(){var a=g.dt("SID","")||"",b=g.dt("SAPISID","")||"",c=g.dt("__Secure-3PAPISID","")||"";if(!a&&!b&&!c)return"";a=g.Kc(g.jb(a),2);b=g.Kc(g.jb(b),2);c=g.Kc(g.jb(c),2);return g.Kc(g.jb(a+","+b+","+c),2)};
h9.prototype.subscribe=h9.prototype.subscribe;h9.prototype.unsubscribeByKey=h9.prototype.hg;h9.prototype.getProxyState=h9.prototype.uT;h9.prototype.disconnect=h9.prototype.Js;h9.prototype.getPlayerContextData=h9.prototype.sT;h9.prototype.setPlayerContextData=h9.prototype.GY;h9.prototype.getOtherConnectedRemoteId=h9.prototype.JL;h9.prototype.getReconnectTimeout=h9.prototype.xw;h9.prototype.getAutoplayMode=h9.prototype.pT;h9.prototype.getAutoplayVideoId=h9.prototype.qT;h9.prototype.reconnect=h9.prototype.QR;
h9.prototype.sendMessage=h9.prototype.DY;h9.prototype.getXsrfToken=h9.prototype.BJ;h9.prototype.isCapabilitySupportedOnConnectedDevices=h9.prototype.pM;g.w(o9,g8);g.k=o9.prototype;g.k.Ih=function(a){return this.We.$_gs(a)};
g.k.contains=function(a){return!!this.We.$_c(a)};
g.k.get=function(a){return this.We.$_g(a)};
g.k.start=function(){this.We.$_st()};
g.k.add=function(a,b,c){this.We.$_a(a,b,c)};
g.k.remove=function(a,b,c){this.We.$_r(a,b,c)};
g.k.fC=function(a,b,c,d){this.We.$_un(a,b,c,d)};
g.k.va=function(){for(var a=0,b=this.i.length;a<b;++a)this.We.$_ubk(this.i[a]);this.i.length=0;this.We=null;g8.prototype.va.call(this)};
g.k.RR=function(){this.Z("screenChange")};
g.k.tW=function(){this.Z("onlineScreenChange")};
q8.prototype.$_st=q8.prototype.start;q8.prototype.$_gspc=q8.prototype.LR;q8.prototype.$_gsppc=q8.prototype.xJ;q8.prototype.$_c=q8.prototype.contains;q8.prototype.$_g=q8.prototype.get;q8.prototype.$_a=q8.prototype.add;q8.prototype.$_un=q8.prototype.fC;q8.prototype.$_r=q8.prototype.remove;q8.prototype.$_gs=q8.prototype.Ih;q8.prototype.$_gos=q8.prototype.wJ;q8.prototype.$_s=q8.prototype.subscribe;q8.prototype.$_ubk=q8.prototype.hg;var B9=null,H9=!1,p9=null,q9=null,G9=null,u9=[];g.w(I9,g.H);g.k=I9.prototype;g.k.va=function(){g.H.prototype.va.call(this);this.i.stop();this.u.stop();this.N.stop();var a=this.Vb;a.unsubscribe("proxyStateChange",this.VN,this);a.unsubscribe("remotePlayerChange",this.sx,this);a.unsubscribe("remoteQueueChange",this.bB,this);a.unsubscribe("previousNextChange",this.SN,this);a.unsubscribe("nowAutoplaying",this.MN,this);a.unsubscribe("autoplayDismissed",this.pN,this);this.Vb=this.j=null};
g.k.Gj=function(a){var b=g.Ca.apply(1,arguments);if(2!=this.Vb.u)if(J9(this)){var c=a;if(!a9(this.Vb).isAdPlaying()||"control_seek"!==c)switch(c){case "control_toggle_play_pause":a9(this.Vb).Gc()?this.Vb.pause():this.Vb.play();break;case "control_play":this.Vb.play();break;case "control_pause":this.Vb.pause();break;case "control_seek":this.J.vJ(b[0],b[1]);break;case "control_subtitles_set_track":K9(this,b[0]);break;case "control_set_audio_track":this.setAudioTrack(b[0])}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":b=
this.G.getCurrentTime();L9(this,0===b?void 0:b);break;case "control_seek":L9(this,b[0]);break;case "control_subtitles_set_track":K9(this,b[0]);break;case "control_set_audio_track":this.setAudioTrack(b[0])}};
g.k.sV=function(a){this.N.FR(a)};
g.k.sZ=function(a){this.Gj("control_subtitles_set_track",g.Df(a)?null:a)};
g.k.lP=function(){var a=this.G.getOption("captions","track");g.Df(a)||K9(this,a)};
g.k.Rb=function(a){this.j.Rb(a,this.G.getVideoData().lengthSeconds)};
g.k.eW=function(){g.Df(this.B)||H0a(this,this.B);this.C=!1};
g.k.VN=function(a,b){this.u.stop();2===b&&this.gP()};
g.k.sx=function(){if(J9(this)){this.i.stop();var a=a9(this.Vb);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.j.Bf=1;break;case 1082:case 1083:this.j.Bf=0;break;default:this.j.Bf=-1}switch(a.playerState){case 1081:case 1:this.Wb(new g.JI(8));this.fP();break;case 1085:case 3:this.Wb(new g.JI(9));break;case 1083:case 0:this.Wb(new g.JI(2));this.J.stop();this.Rb(this.G.getVideoData().lengthSeconds);break;case 1084:this.Wb(new g.JI(4));break;case 2:this.Wb(new g.JI(4));this.Rb(W8(a));
break;case -1:this.Wb(new g.JI(64));break;case -1E3:this.Wb(new g.JI(128,{errorCode:"mdx.remoteerror",errorMessage:"Este v\u00eddeo n\u00e3o est\u00e1 dispon\u00edvel para reprodu\u00e7\u00e3o remota.",zE:2}))}a=a9(this.Vb).trackData;var b=this.B;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.kind==b.kind:1)||(this.B=a,H0a(this,a));a=a9(this.Vb);-1===a.volume||Math.round(this.G.getVolume())===a.volume&&this.G.isMuted()===a.muted||this.W.isActive()||
this.LP()}else G0a(this)};
g.k.SN=function(){this.G.Z("mdxpreviousnextchange")};
g.k.bB=function(){J9(this)||G0a(this)};
g.k.MN=function(a){isNaN(a)||this.G.Z("mdxnowautoplaying",a)};
g.k.pN=function(){this.G.Z("mdxautoplaycanceled")};
g.k.setAudioTrack=function(a){J9(this)&&this.Vb.setAudioTrack(this.G.getVideoData(1).videoId,a)};
g.k.seekTo=function(a,b){-1===a9(this.Vb).playerState?L9(this,a):b&&this.Vb.seekTo(a)};
g.k.LP=function(){var a=this;if(J9(this)){var b=a9(this.Vb);this.events.vc(this.Y);b.muted?this.G.mute():this.G.unMute();this.G.setVolume(b.volume);this.Y=this.events.S(this.G,"onVolumeChange",function(c){F0a(a,c)})}};
g.k.fP=function(){this.i.stop();if(!this.Vb.isDisposed()){var a=a9(this.Vb);a.Gc()&&this.Wb(new g.JI(8));this.Rb(W8(a));this.i.start()}};
g.k.gP=function(){this.u.stop();this.i.stop();var a=this.Vb.B.getReconnectTimeout();2==this.Vb.u&&!isNaN(a)&&this.u.start()};
g.k.Wb=function(a){this.u.stop();var b=this.I;if(!g.OI(b,a)){var c=g.V(a,2);c!==g.V(this.I,2)&&this.G.au(c);this.I=a;J0a(this.j,b,a)}};g.w(M9,g.W);M9.prototype.hd=function(){this.i.show()};
M9.prototype.Cb=function(){this.i.hide()};
M9.prototype.j=function(){$6("mdx-privacy-popup-cancel");this.Cb()};
M9.prototype.u=function(){$6("mdx-privacy-popup-confirm");this.Cb()};g.w(N9,g.W);N9.prototype.onStateChange=function(a){I0a(this,a.state)};g.w(O9,g.pP);O9.prototype.C=function(){var a=this.G.getOption("remote","receivers");a&&1<a.length&&!this.G.getOption("remote","quickCast")?(this.Uo=g.zc(a,this.i,this),g.qP(this,g.vn(a,this.i)),a=this.G.getOption("remote","currentReceiver"),a=this.i(a),this.options[a]&&this.Zh(a),this.enable(!0)):this.enable(!1)};
O9.prototype.i=function(a){return a.key};
O9.prototype.xj=function(a){return"cast-selector-receiver"===a?"Elenco...":this.Uo[a].name};
O9.prototype.Hf=function(a){g.pP.prototype.Hf.call(this,a);this.G.setOption("remote","currentReceiver",this.Uo[a]);this.ob.Cb()};g.w(P9,g.oM);g.k=P9.prototype;
g.k.create=function(){var a=this.player.T(),b=g.UD(a);a={device:"Desktop",app:"youtube-desktop",loadCastApiSetupScript:a.L("mdx_load_cast_api_bootstrap_script"),enableDialLoungeToken:a.L("enable_dial_short_lived_lounge_token"),enableCastLoungeToken:a.L("enable_cast_short_lived_lounge_token")};A0a(b,a);this.subscriptions.push(g.cu("yt-remote-before-disconnect",this.rV,this));this.subscriptions.push(g.cu("yt-remote-connection-change",this.TW,this));this.subscriptions.push(g.cu("yt-remote-receiver-availability-change",this.UN,
this));this.subscriptions.push(g.cu("yt-remote-auto-connect",this.RW,this));this.subscriptions.push(g.cu("yt-remote-receiver-resumed",this.QW,this));this.subscriptions.push(g.cu("mdx-privacy-popup-confirm",this.jY,this));this.subscriptions.push(g.cu("mdx-privacy-popup-cancel",this.iY,this));this.UN()};
g.k.load=function(){this.player.cancelPlayback();g.oM.prototype.load.call(this);this.ji=new I9(this,this.player,this.Vb);var a=(a=E0a())?a.currentTime:0;var b=F9()?new $8(z9(),void 0):null;0==a&&b&&(a=W8(a9(b)));0!==a&&this.Rb(a);J0a(this,this.Ed,this.Ed);this.player.Al(6)};
g.k.unload=function(){this.player.Z("mdxautoplaycanceled");this.Gn=this.ql;g.cf(this.ji,this.Vb);this.Vb=this.ji=null;g.oM.prototype.unload.call(this);this.player.Al(5);Q9(this)};
g.k.va=function(){g.du(this.subscriptions);g.oM.prototype.va.call(this)};
g.k.rl=function(a){var b=g.Ca.apply(1,arguments);this.loaded&&this.ji.Gj.apply(this.ji,[a].concat(g.v(b)))};
g.k.getAdState=function(){return this.Bf};
g.k.bl=function(){return this.Vb?a9(this.Vb).bl:!1};
g.k.hasNext=function(){return this.Vb?a9(this.Vb).hasNext:!1};
g.k.Rb=function(a,b){this.EM=a||0;this.player.Z("progresssync",a,b);this.player.Oa("onVideoProgress",a||0)};
g.k.getCurrentTime=function(){return this.EM};
g.k.getProgressState=function(){var a=a9(this.Vb),b=this.player.getVideoData();return{airingStart:0,airingEnd:0,allowSeeking:this.player.T().L("web_player_mdx_allow_seeking_change_killswitch")?this.player.kf():!a.isAdPlaying()&&this.player.kf(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.j?a.u+U8(a):a.u,isAtLiveHead:1>=(a.j?a.i+U8(a):a.i)-this.getCurrentTime(),loaded:a.N,seekableEnd:a.j?a.i+U8(a):a.i,seekableStart:0<
a.B?a.B+U8(a):a.B}};
g.k.nextVideo=function(){this.Vb&&this.Vb.nextVideo()};
g.k.pB=function(){this.Vb&&this.Vb.pB()};
g.k.rV=function(a){1===a&&(this.QG=this.Vb?a9(this.Vb):null)};
g.k.TW=function(){var a=F9()?new $8(z9(),void 0):null;if(a){var b=this.Gn;this.loaded&&this.unload();this.Vb=a;this.QG=null;b.key!==this.ql.key&&(this.Gn=b,this.load())}else g.bf(this.Vb),this.Vb=null,this.loaded&&(this.unload(),(a=this.QG)&&a.videoId===this.player.getVideoData().videoId&&this.player.cueVideoById(a.videoId,W8(a)));this.player.Z("videodatachange","newdata",this.player.getVideoData(),3)};
g.k.UN=function(){var a=[this.ql],b=a.concat,c=B0a();O8()&&g.Ex("yt-remote-cast-available")&&c.push({key:"cast-selector-receiver",name:"Cast..."});this.Uo=b.call(a,c);a=A9()||this.ql;R9(this,a);this.player.Oa("onMdxReceiversChange")};
g.k.RW=function(){var a=A9();R9(this,a)};
g.k.QW=function(){this.Gn=A9()};
g.k.jY=function(){this.Bx=!0;Q9(this);H9=!1;B9&&D9(B9,1);B9=null};
g.k.iY=function(){this.Bx=!1;Q9(this);R9(this,this.ql);this.Gn=this.ql;H9=!1;B9=null;this.player.playVideo()};
g.k.sf=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.Uo;case "currentReceiver":return b&&("cast-selector-receiver"===b.key?Q8():R9(this,b)),this.loaded?this.Gn:this.ql;case "quickCast":return 2===this.Uo.length&&"cast-selector-receiver"===this.Uo[1].key?(b&&Q8(),!0):!1}};
g.k.PH=function(){this.Vb.PH()};
g.k.Th=function(){return!1};
g.k.getOptions=function(){return["casting","receivers","currentReceiver","quickCast"]};g.nM("remote",P9);})(_yt_player);
