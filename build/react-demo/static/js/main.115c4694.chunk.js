(this["webpackJsonpreact-demo"]=this["webpackJsonpreact-demo"]||[]).push([[0],{105:function(e,t,a){e.exports=a(194)},110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},116:function(e,t,a){},117:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){},193:function(e,t,a){},194:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),o=a.n(c),l=(a(110),a(15)),i=(a(111),a(112),a(230)),s=a(195),u=a(232),m=a(61),d=a(88),f=a.n(d),p=a(87),E=a.n(p);Object(i.a)({title:{fontSize:14},pos:{marginBottom:12}});function h(){return r.a.createElement("div",{style:{padding:"24px 0"}},r.a.createElement(u.a,{className:"people",container:!0,justify:"center",spacing:2},[0,1,2,3,4].map((function(e){return r.a.createElement(u.a,{key:e,item:!0,xs:6,sm:4},r.a.createElement(s.a,{style:{position:"relative",height:0,paddingTop:"100%",width:"100%"}},r.a.createElement(m.a,{className:"volume-off-icon",style:{position:"absolute",top:0,width:"100%",height:"100%"}},r.a.createElement(E.a,{style:{color:"#fff"}}))))})),r.a.createElement(u.a,{item:!0,xs:6,sm:4},r.a.createElement(s.a,{className:"add-person",style:{position:"relative",height:0,paddingTop:"100%",width:"100%"}},r.a.createElement(m.a,{style:{position:"absolute",top:0,width:"100%",height:"100%"}},r.a.createElement(f.a,{style:{color:"#757ce8"}}))))))}function v(e){var t=Object(n.useRef)(null),a=Object(n.useRef)(null);return Object(n.useEffect)((function(){t.current&&(t.current.srcObject=new MediaStream([e.videoTrack]))}),[e.videoTrack]),Object(n.useEffect)((function(){a.current&&(a.current.srcObject=new MediaStream([e.audioTrack]))}),[e.audioTrack]),r.a.createElement("div",null,!e.isLocalPerson&&e.audioTrack&&r.a.createElement("audio",{autoPlay:!0,playsInline:!0,ref:a}))}var b=r.a.createContext();a(116);var g=a(19),y={callItems:{local:{isLoading:!0,audioTrack:null,videoTrack:null}},clickAllowTimeoutFired:!1,camOrMicError:null,fatalError:null};function C(e,t){switch(t.type){case"CLICK_ALLOW_TIMEOUT":return Object(g.a)({},e,{clickAllowTimeoutFired:!0});case"PARTICIPANTS_CHANGE":var a=function(e,t){for(var a=Object(g.a)({},y.callItems),n=0,r=Object.entries(e);n<r.length;n++){var c=Object(l.a)(r[n],2),o=c[0],i=c[1],s=t[o]&&!t[o].isLoading,u=!(i.audioTrack||i.videoTrack);a[o]={isLoading:!s&&u,audioTrack:i.audioTrack,videoTrack:i.videoTrack},i.screenVideoTrack&&(a[o+"-screen"]={isLoading:!1,videoTrack:i.screenVideoTrack})}return a}(t.participants,e.callItems);return Object(g.a)({},e,{callItems:a});case"CAM_OR_MIC_ERROR":return Object(g.a)({},e,{camOrMicError:t.message});case"FATAL_ERROR":return Object(g.a)({},e,{fatalError:t.message});default:throw new Error}}function w(e){return"local"===e}function O(e){return e.endsWith("-screen")}function j(e){console.log("[daily.co event]",e.action)}function k(){var e=Object(n.useContext)(b),t=Object(n.useReducer)(C,y),a=Object(l.a)(t,2),c=a[0],o=a[1];Object(n.useEffect)((function(){if(e){var t=["participant-joined","participant-updated","participant-left"];c();for(var a=0,n=t;a<n.length;a++){var r=n[a];e.on(r,c)}return function(){var a=!0,n=!1,r=void 0;try{for(var o,l=t[Symbol.iterator]();!(a=(o=l.next()).done);a=!0){var i=o.value;e.off(i,c)}}catch(s){n=!0,r=s}finally{try{a||null==l.return||l.return()}finally{if(n)throw r}}}}function c(t){t&&j(t),o({type:"PARTICIPANTS_CHANGE",participants:e.participants()})}}),[e]),Object(n.useEffect)((function(){if(e)return e.on("camera-error",t),function(){e.off("camera-error",t)};function t(e){j(e),o({type:"CAM_OR_MIC_ERROR",message:e&&e.errorMsg&&e.errorMsg.errorMsg||"Unknown"})}}),[e]),Object(n.useEffect)((function(){if(e)return e.on("error",t),function(){e.off("error",t)};function t(e){j(e),o({type:"FATAL_ERROR",message:e&&e.errorMsg||"Unknown"})}}),[e]),Object(n.useEffect)((function(){var e=setTimeout((function(){o({type:"CLICK_ALLOW_TIMEOUT"})}),2500);return function(){clearTimeout(e)}}),[]);var i=function(){var e=[],t=[];return Object.entries(c.callItems).forEach((function(a){var n,o=Object(l.a)(a,2),i=o[0],s=o[1],u=O(i)||!w(i)&&(n=c.callItems,!Object.keys(n).some((function(e){return O(e)}))),m=r.a.createElement(v,{key:i,videoTrack:s.videoTrack,audioTrack:s.audioTrack,isLocalPerson:w(i),isLarge:u,isLoading:s.isLoading});u?e.push(m):t.push(m)})),[e,t]}(),s=Object(l.a)(i,2);s[0],s[1],function(e){var t=null,a=null,n=!1;e.fatalError?(t="Fatal error: ".concat(e.fatalError),n=!0):e.camOrMicError?(t="Camera or mic access error: ".concat(e.camOrMicError),a="See https://help.daily.co/en/articles/2528184-unblock-camera-mic-access-on-a-computer to troubleshoot.",n=!0):!function(){var t=e.callItems.local;return!(t&&!t.isLoading)&&e.clickAllowTimeoutFired}()?1===Object.keys(e.callItems).length&&(t="Copy and share this page's URL to invite others"):t='Click "Allow" to enable camera and mic access'}(c);return r.a.createElement("div",null,r.a.createElement(h,null))}a(117);var T=a(234);function L(e){return r.a.createElement(T.a,{color:"primary",variant:"contained",style:{marginTop:16},size:"small",className:"start-button",disabled:e.disabled,onClick:e.onClick},"Join Channel")}var A=a(8),x=a.n(A),S=a(18),I="https://fu6720epic.execute-api.us-west-2.amazonaws.com/default/dailyWwwApiDemoNewCall";function R(){return(R=Object(S.a)(x.a.mark((function e(){var t,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(I);case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var M={createRoom:function(){return R.apply(this,arguments)}};a(119),a(120),a(121);function N(e){function t(){return e.highlighted?"#fb5554":"#fff"}return r.a.createElement("svg",{width:"24px",height:"24px",viewBox:"0 0 24 24",className:e.className,xmlns:"http://www.w3.org/2000/svg"},function(){switch(e.type){case"camera":return r.a.createElement("g",{id:"Symbols",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Assets-for-Export",transform:"translate(-24.000000, 0.000000)",fill:t()},r.a.createElement("g",{id:"Icon-Camera-Off-24px",transform:"translate(24.000000, 0.000000)"},r.a.createElement("path",{d:"M13.7573593,6 L4.00585866,6 C2.89706013,6 2,6.8992496 2,8.0085302 L2,15.9914698 C2,16.4835828 2.17760958,16.9352259 2.47229113,17.2850682 L13.7573593,6 Z M16,12.2426407 L16,15.9914698 C16,17.1007504 15.1029399,18 13.9941413,18 L10.2426407,18 L16,12.2426407 Z M16,12.2426407 L16,14.499966 L21.0756492,16.6148096 C21.586154,16.8275189 22,16.5442917 22,16.0045612 L22,7.99539512 C22,7.44565489 21.5875957,7.17183667 21.0756492,7.38514669 L20.7016702,7.54097052 L16,12.2426407 Z M20.4877316,2.09805481 C20.8769027,1.70888376 21.506248,1.70725811 21.8994949,2.10050506 C22.2900192,2.49102936 22.2956069,3.1186067 21.9019452,3.51226838 L3.51226838,21.9019452 C3.12309732,22.2911162 2.49375202,22.2927419 2.10050506,21.8994949 C1.70998077,21.5089706 1.70439313,20.8813933 2.09805481,20.4877316 L20.4877316,2.09805481 Z",id:"Combined-Shape"}))));case"mute-mic":return r.a.createElement("g",{id:"Symbols",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Assets-for-Export",transform:"translate(-120.000000, 0.000000)",fill:t()},r.a.createElement("g",{id:"Icon-Microphone-Off-24px",transform:"translate(120.000000, 0.000000)"},r.a.createElement("path",{d:"M15.8931049,12.3495358 L15.8883757,12.354265 C15.7702192,12.7237203 15.5976472,13.0928313 15.3634551,13.4334743 C14.9080287,14.0959127 14.281481,14.5761112 13.4232304,14.8194102 L11,17.2426407 L11,18.9906311 C11,18.9937578 11.0000137,18.9968808 11.0000409,19 L9.99077797,19 C9.45097518,19 9,19.4477153 9,20 C9,20.5561352 9.44358641,21 9.99077797,21 L14.009222,21 C14.5490248,21 15,20.5522847 15,20 C15,19.4438648 14.5564136,19 14.009222,19 L12.9999626,19 C12.999986,18.9968804 13,18.9937574 13,18.9906311 L13,16.9383953 C14.793746,16.7093537 16.1268712,15.8533183 17.0115375,14.566531 C17.631941,13.6641258 17.9116422,12.769082 17.9922726,12.124039 C18.0567667,11.6080864 17.715976,11.1348845 17.2185349,11.0241058 L17.2162194,11.0264213 C17.1758852,11.0160463 17.1430789,11.0101085 17.12403,11.0077274 C16.5760096,10.9392248 16.076219,11.3279514 16.0077165,11.8759725 C15.9990827,11.9450424 15.9659776,12.1062504 15.8970768,12.3267333 C15.8944966,12.3349898 15.8931939,12.3425837 15.8931049,12.3495358 Z M14.8100942,4.94726512 C14.3837386,3.80970165 13.2864273,3 12,3 C10.3431458,3 9,4.34314575 9,6 L9,10.7573593 L14.8100942,4.94726512 Z M7.97590142,11.7814579 C7.86511978,11.2840207 7.39191988,10.9432336 6.87596978,11.0077274 C6.32795032,11.0762298 5.93922497,11.5760196 6.0077274,12.124039 C6.05291889,12.4855709 6.16064541,12.9256367 6.35584336,13.401516 L7.97590142,11.7814579 Z M20.4877316,2.09805481 C20.8769027,1.70888376 21.506248,1.70725811 21.8994949,2.10050506 C22.2900192,2.49102936 22.2956069,3.1186067 21.9019452,3.51226838 L3.51226838,21.9019452 C3.12309732,22.2911162 2.49375202,22.2927419 2.10050506,21.8994949 C1.70998077,21.5089706 1.70439313,20.8813933 2.09805481,20.4877316 L20.4877316,2.09805481 Z",id:"Combined-Shape"}))));case"screen":return r.a.createElement("path",{fill:t(),fillRule:"evenodd",d:"M2 5.006C2 3.898 2.898 3 3.99 3h16.02C21.108 3 22 3.897 22 5.006v9.988A2.003 2.003 0 0 1 20.01 17H3.99C2.892 17 2 16.103 2 14.994V5.006zm2 .99v8.009c0 .54.448.995 1 .995h14c.555 0 1-.446 1-.995v-8.01c0-.54-.448-.995-1-.995H5c-.555 0-1 .446-1 .995zM7 20c0-.552.456-1 .995-1h8.01c.55 0 .995.444.995 1 0 .552-.456 1-.995 1h-8.01A.995.995 0 0 1 7 20z"});case"leave":return r.a.createElement("path",{d:"M19.347 11l-1.71-1.638a.832.832 0 0 1 0-1.222l.03-.03a.922.922 0 0 1 1.27-.003l3.34 3.2a.95.95 0 0 1 0 1.386l-3.34 3.2a.918.918 0 0 1-1.27-.003l-.03-.03a.842.842 0 0 1 0-1.221L19.348 13h-7.352A.995.995 0 0 1 11 12c0-.552.456-1 .995-1h7.352zM16 10h-2V7.995c0-.54-.446-.995-.997-.995H6.997A1 1 0 0 0 6 7.995v8.01c0 .54.446.995.997.995h6.006a1 1 0 0 0 .997-.995V14h2v2.994A2.009 2.009 0 0 1 13.991 19H6.01A2.007 2.007 0 0 1 4 16.994V7.006C4 5.898 4.902 5 6.009 5h7.982C15.101 5 16 5.897 16 7.006V10z",fill:t(),fillRule:"evenodd"});default:throw new Error}}())}var _=a(235);function B(e){return r.a.createElement(_.a,{color:"inherit",disabled:e.disabled,onClick:e.onClick,className:"tray-button"+(e.newButtonGroup?" new-group":"")},r.a.createElement(N,{type:e.type,highlighted:e.highlighted}))}var z=a(44);function W(e){var t=Object(n.useContext)(b),a=Object(n.useState)(!1),c=Object(l.a)(a,2),o=(c[0],c[1]),i=Object(n.useState)(!1),s=Object(l.a)(i,2),u=s[0],m=s[1],d=Object(n.useState)(!1),f=Object(l.a)(d,2),p=(f[0],f[1]);return Object(n.useEffect)((function(){if(t)return e(),t.on("participant-updated",e),function(){t.off("participant-updated",e)};function e(e){e&&j(e);var a=function(e){var t,a,n=!1;if(e&&e.participants()&&e.participants().local){var r=e.participants().local;t=!r.video,a=!r.audio,n=r.screen}return[t,a,n]}(t),n=Object(l.a)(a,3),r=n[0],c=n[1],i=n[2];o(r),m(c),p(i)}}),[t]),r.a.createElement(r.a.Fragment,null,r.a.createElement(B,{type:"mute-mic",disabled:e.disabled,highlighted:u,onClick:function(){t.setLocalAudio(u)}}))}var V=a(237),P=a(236),U=a(238),H=a(239),D=a(91),G=a.n(D),Z=a(92),F=a.n(Z),J=a(90),K=a.n(J),q=function(e){var t=e.children;return r.a.createElement(K.a,{noWrapper:!1,tag:"span",options:{className:"twemoji",folder:"svg",ext:".svg"}},t)},Y=Object(i.a)((function(e){return{text:{padding:e.spacing(2,2,0)},bottomBar:{maxWidth:1280,margin:"0 auto"},paper:{paddingBottom:50},list:{marginBottom:e.spacing(2)},subheader:{backgroundColor:e.palette.background.paper},grow:{flexGrow:1},fabButton:{position:"absolute",zIndex:1,top:-30,left:0,right:0,margin:"0 auto"}}}));function Q(e){var t=Y();return r.a.createElement("div",{className:t.bottomBar},r.a.createElement(P.a,null),r.a.createElement(V.a,{position:"static",color:"primary",className:"bottomAppBar"},r.a.createElement(U.a,null,r.a.createElement("strong",{style:{display:"inline-block",marginLeft:-10}},"#"),r.a.createElement(_.a,{disabled:!0,edge:"start",color:"inherit","aria-label":"open drawer"},r.a.createElement(q,null,"\ud83d\ude0a")),r.a.createElement(H.a,{color:"secondary","aria-label":"add",className:t.fabButton},r.a.createElement(G.a,{style:{color:"#fff"}})),r.a.createElement("div",{className:t.grow}),e.muteIcon,r.a.createElement(_.a,{edge:"end",color:"inherit"},r.a.createElement(F.a,null)))))}a(191);var X=a(93);function $(){return r.a.createElement(X.a,{set:"twitter",emojiSize:38,useButton:!1,showSkinTones:!1,showPreview:!1,sheetSize:64,color:"#002884",title:"EmojiTalkie",style:{width:"100%",borderRadius:0}})}var ee=a(96);Object(i.a)({title:{fontSize:14},pos:{marginBottom:12}});Object(i.a)({title:{fontSize:14},pos:{marginBottom:12}});var te=a(246),ae=a(244),ne=a(243),re=a(240),ce=a(245),oe=a(60),le=a(241),ie=a(242),se=a(71),ue=["username@gmail.com","user02@gmail.com"],me=Object(i.a)({avatar:{backgroundColor:oe.a[100],color:oe.a[600]}});function de(e){me();var t=e.onClose,a=e.selectedValue,n=e.open;return window.matchMedia("(display-mode: standalone)").matches?r.a.createElement("div",null):r.a.createElement(ce.a,{maxWidth:"xs",style:{textAlign:"center"},onClose:function(){t(a)},"aria-labelledby":"simple-dialog-title",open:n},r.a.createElement(re.a,{id:"simple-dialog-title"},r.a.createElement("img",{style:{margin:"0 auto",background:"#f44336",padding:8,borderRadius:10,width:50,height:50,display:"block"},src:"https://twemoji.maxcdn.com/v/12.1.5/svg/1f4fb.svg"}),r.a.createElement("h1",{style:{fontSize:"22px"}},r.a.createElement("strong",{className:"brand"},"EmojiTalkie"))),r.a.createElement(le.a,null,r.a.createElement(ie.a,{id:"alert-dialog-description"},"Add this app to your home screen for easy access and a better experience.",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("strong",{style:{color:"#3f50b5"}},"Tap",r.a.createElement(se.a,{style:{height:30,width:35,top:10,position:"relative"},viewBox:"0 0 50 50"},r.a.createElement("path",{d:"M30.3 13.7L25 8.4l-5.3 5.3-1.4-1.4L25 5.6l6.7 6.7z"}),r.a.createElement("path",{d:"M24 7h2v21h-2z"}),r.a.createElement("path",{d:"M35 40H15c-1.7 0-3-1.3-3-3V19c0-1.7 1.3-3 3-3h7v2h-7c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1h20c.6 0 1-.4 1-1V19c0-.6-.4-1-1-1h-7v-2h7c1.7 0 3 1.3 3 3v18c0 1.7-1.3 3-3 3z"})),"then 'Add to Home Screen'"))))}function fe(){var e=r.a.useState(!0),t=Object(l.a)(e,2),a=t[0],n=t[1],c=r.a.useState(ue[1]),o=Object(l.a)(c,2),i=o[0],s=o[1];return r.a.createElement(de,{selectedValue:i,open:a,onClose:function(e){n(!1),s(e)}})}var pe=a(247),Ee="STATE_JOINING",he="STATE_JOINED",ve="STATE_ERROR";a(193);o.a.render(z.a.supportedBrowser().supported?r.a.createElement((function(){var e=Object(n.useState)("STATE_IDLE"),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(null),i=Object(l.a)(o,2),u=i[0],m=i[1],d=Object(n.useState)(null),f=Object(l.a)(d,2),p=f[0],E=f[1],h=Object(n.useCallback)((function(){return c("STATE_CREATING"),M.createRoom().then((function(e){return e.url})).catch((function(e){console.log("Error creating room",e),m(null),c("STATE_IDLE")}))}),[]),v=Object(n.useCallback)((function(e){var t=z.a.createCallObject();m(e),E(t),c(Ee),t.join({url:e})}),[]),g=Object(n.useCallback)((function(){p&&(c("STATE_LEAVING"),p.leave())}),[p]);Object(n.useEffect)((function(){var e=function(){var e=window.location.search.match(/roomUrl=([^&]+)/i);return e&&e[1]?decodeURIComponent(e[1]):null}();e&&v(e)}),[v]),Object(n.useEffect)((function(){var e=function(e){return window.location.href.split("?")[0]+(e?"?roomUrl=".concat(encodeURIComponent(e)):"")}(u);e!==window.location.href&&window.history.replaceState(null,null,e)}),[u]),Object(n.useEffect)((function(){if(p){var e=["joined-meeting","left-meeting","error"];r();for(var t=0,a=e;t<a.length;t++){var n=a[t];p.on(n,r)}return function(){var t=!0,a=!1,n=void 0;try{for(var c,o=e[Symbol.iterator]();!(t=(c=o.next()).done);t=!0){var l=c.value;p.off(l,r)}}catch(i){a=!0,n=i}finally{try{t||null==o.return||o.return()}finally{if(a)throw n}}}}function r(e){switch(e&&j(e),p.meetingState()){case"joined-meeting":c(he);break;case"left-meeting":p.destroy().then((function(){m(null),E(null),c("STATE_IDLE")}));break;case"error":c(ve)}}}),[p]);var y=[Ee,he,ve].includes(a),C=[he,ve].includes(a),w="STATE_IDLE"===a;return r.a.createElement("div",{className:"wrapper"},r.a.createElement(pe.a,{smUp:!0},r.a.createElement("div",{className:"hidden-standalone"},r.a.createElement(fe,null))),r.a.createElement(s.a,{className:"app"},r.a.createElement("div",{style:{width:"100%",height:"100%"}},r.a.createElement("div",{className:"content"},r.a.createElement("div",null,y?r.a.createElement(b.Provider,{value:p},r.a.createElement(k,{roomUrl:u})):r.a.createElement("div",{style:{justifyContent:"center",alignItems:"center",flexDirection:"column",display:"flex"}},r.a.createElement("div",{style:{textAlign:"center",padding:"10% 0px",maxWidth:450}},r.a.createElement("img",{src:"https://twemoji.maxcdn.com/v/12.1.5/svg/1f44b.svg",style:{height:100,width:100,marginBottom:20}}),r.a.createElement(ee.a,{style:{fontSize:14},color:"textSecondary",gutterBottom:!0},"Hello Stranger,"),r.a.createElement(ee.a,{variant:"h5",component:"h2"},"Welcome to ",r.a.createElement(q,null,"\ud83d\udcfb")," ",r.a.createElement("strong",{className:"brand"},"EmojiTalkie")),r.a.createElement(ee.a,{style:{marginBottom:12},color:"textSecondary"},"The anonymous voice chat community"),r.a.createElement(ee.a,{variant:"body2",component:"p"},"Join emoji channels and socalise with strangers about your favorite topics. You can mute a person with one ",r.a.createElement("i",null,"tap"),". No account. No down load. It's that simple."),r.a.createElement("div",{style:{display:"flex",margin:"20px"}},r.a.createElement(L,{disabled:!w,onClick:function(){h().then((function(e){return v(e)}))}}))))))),r.a.createElement("div",{className:"channels"},r.a.createElement("div",{className:"bottomAppBarWrapper"},r.a.createElement(Q,{muteIcon:r.a.createElement(b.Provider,{value:p},r.a.createElement(W,{disabled:!C,onClickLeaveCall:g}))})),r.a.createElement("div",{className:"EmojiPickerWrapper"},r.a.createElement(ne.a,null),r.a.createElement(te.a,{variant:"fullWidth",indicatorColor:"primary",textColor:"primary"},r.a.createElement(ae.a,{label:"Global"}),r.a.createElement(ae.a,{label:"Local"})),r.a.createElement($,null)))))}),null):r.a.createElement((function(){return r.a.createElement("p",{class:"browser-unsupported"},"Looks like you need to upgrade your browser to make Daily.co video calls.",r.a.createElement("br",null),"See\xa0",r.a.createElement("a",{href:"https://help.daily.co/en/articles/3179421-what-browser-version-does-daily-co-require"},"this page"),"\xa0for help getting on a supported browser version.")}),null),document.getElementById("root"))}},[[105,1,2]]]);
//# sourceMappingURL=main.115c4694.chunk.js.map