(function(e){function t(t){for(var r,a,s=t[0],c=t[1],l=t[2],b=0,h=[];b<s.length;b++)a=s[b],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&h.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(h.length)h.shift()();return n.push.apply(n,l||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],r=!0,a=1;a<o.length;a++){var c=o[a];0!==i[c]&&(r=!1)}r&&(n.splice(t--,1),e=s(s.s=o[0]))}return e}var r={},i={app:0},n=[];function a(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"21643bd7"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(e){var t=[],o=i[e];if(0!==o)if(o)t.push(o[2]);else{var r=new Promise((function(t,r){o=i[e]=[t,r]}));t.push(o[2]=r);var n,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=a(e);var l=new Error;n=function(t){c.onerror=c.onload=null,clearTimeout(b);var o=i[e];if(0!==o){if(o){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",l.name="ChunkLoadError",l.type=r,l.request=n,o[1](l)}i[e]=void 0}};var b=setTimeout((function(){n({type:"timeout",target:c})}),12e4);c.onerror=c.onload=n,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(o,r,function(t){return e[t]}.bind(null,r));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/gt/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var b=0;b<c.length;b++)t(c[b]);var d=l;n.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("cd49")},"13a8":function(e,t,o){var r=o("24fb");t=r(!1),t.push([e.i,".block[data-v-cae8dfaa]{width:100%;height:5vh}.block[data-v-cae8dfaa],.sideBlock[data-v-cae8dfaa]{z-index:1;background-color:#fff;position:relative;padding:0!important}.sideBlock[data-v-cae8dfaa]{height:624px}#game[data-v-cae8dfaa]{padding:0!important}#row[data-v-cae8dfaa]{margin:0!important}",""]),e.exports=t},1794:function(e,t,o){var r=o("6876");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=o("499e").default;i("c8519f32",r,!0,{sourceMap:!1,shadowMode:!1})},"41e5":function(e,t,o){"use strict";o("a676")},"440e":function(e,t,o){var r=o("13a8");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=o("499e").default;i("46f7bab2",r,!0,{sourceMap:!1,shadowMode:!1})},4798:function(e,t,o){"use strict";o("1794")},"53c7":function(e,t,o){"use strict";o("440e")},6876:function(e,t,o){var r=o("24fb");t=r(!1),t.push([e.i,".game[data-v-ebedb39a]{width:100%;height:550px;border:2px solid #000;background-color:#fff;z-index:1}#scoreCard[data-v-ebedb39a]{height:5vh}#scoreCard[data-v-ebedb39a],.bottom[data-v-ebedb39a]{background-color:#fff;position:relative;z-index:1}.bottom[data-v-ebedb39a]{width:100%;padding:0!important}",""]),e.exports=t},a676:function(e,t,o){var r=o("e1ee");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=o("499e").default;i("6afa8490",r,!0,{sourceMap:!1,shadowMode:!1})},cd49:function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("7a23"),i={id:"nav"},n=Object(r["f"])("div",{class:"ball"},null,-1),a=Object(r["h"])("Home"),s=Object(r["h"])(" | "),c=Object(r["h"])("Skill Tree"),l=Object(r["h"])(" | "),b=Object(r["h"])("Game"),d=Object(r["h"])(" | "),h=Object(r["h"])("About");function u(e,t){var o=Object(r["B"])("router-link"),u=Object(r["B"])("router-view");return Object(r["t"])(),Object(r["e"])(r["a"],null,[Object(r["f"])("div",i,[n,Object(r["i"])(o,{to:"/home"},{default:Object(r["H"])((function(){return[a]})),_:1}),s,Object(r["i"])(o,{to:"/skillTree"},{default:Object(r["H"])((function(){return[c]})),_:1}),l,Object(r["i"])(o,{to:"/games"},{default:Object(r["H"])((function(){return[b]})),_:1}),d,Object(r["i"])(o,{to:"/about"},{default:Object(r["H"])((function(){return[h]})),_:1})]),Object(r["i"])(u)],64)}o("41e5");var f=o("d959"),p=o.n(f);const m={},g=p()(m,[["render",u]]);var v=g,y=(o("d3b7"),o("3ca3"),o("ddb0"),o("6c02")),j={class:"home"};function O(e,t,o,i,n,a){var s=Object(r["B"])("HelloWorld");return Object(r["t"])(),Object(r["e"])("div",j,[Object(r["i"])(s)])}var w=o("bee2"),k=o("d4ec"),x=o("262e"),S=o("2caf"),M=o("9ab4"),C=o("ce1f"),E={class:"headline"},z=Object(r["f"])("div",null,"here is something written",-1),D=[z];function I(e,t,o,i,n,a){return Object(r["t"])(),Object(r["e"])("div",E,D)}var T=Object(r["j"])({methods:{}});const R=p()(T,[["render",I]]);var H=R,P=function(e){Object(x["a"])(o,e);var t=Object(S["a"])(o);function o(){return Object(k["a"])(this,o),t.apply(this,arguments)}return Object(w["a"])(o)}(C["b"]);P=Object(M["a"])([Object(C["a"])({components:{HelloWorld:H}})],P);var _=P;const L=p()(_,[["render",O]]);var U=L,B=function(e){return Object(r["x"])("data-v-cae8dfaa"),e=e(),Object(r["u"])(),e},K=B((function(){return Object(r["f"])("div",{class:"block"},null,-1)})),A={class:"d-flex row",id:"row"},G=B((function(){return Object(r["f"])("div",{class:"sideBlock col-2"},null,-1)})),Y={class:"col-8",id:"game"},V=B((function(){return Object(r["f"])("div",{class:"sideBlock col-2"},null,-1)})),W=B((function(){return Object(r["f"])("div",{class:"block"},null,-1)}));function J(e,t,o,i,n,a){var s=Object(r["B"])("game");return Object(r["t"])(),Object(r["e"])(r["a"],null,[K,Object(r["f"])("div",A,[G,Object(r["f"])("div",Y,[Object(r["i"])(s)]),V]),W],64)}var q=function(e){return Object(r["x"])("data-v-ebedb39a"),e=e(),Object(r["u"])(),e},F={class:"row",id:"scoreCard"},N={class:"col align-self-center"},Q=Object(r["h"])(" Score: "),X={id:"scoreSpan"},Z={class:"col align-self-center"},$=Object(r["h"])(" Enemies: "),ee={id:"scoreSpan"},te={class:"col align-self-center"},oe=Object(r["h"])(" difficulty: "),re={id:"scoreSpan"},ie={class:"col align-self-center"},ne=Object(r["h"])(" Highscore: "),ae={id:"scoreSpan"},se={class:"game"},ce={key:0,class:"d-flex flex-column bottom"},le={class:"input-group w-25 align-self-center mt-1"},be=q((function(){return Object(r["f"])("label",{class:"input-group-text",for:"inputGroupSelect01"},"Enemie Type",-1)})),de=Object(r["g"])('<option selected value="" data-v-ebedb39a></option><option value="curve" data-v-ebedb39a>curve</option><option value="colorswitch" data-v-ebedb39a>colorswitch</option><option value="aimbot" data-v-ebedb39a>aimbot</option><option value="chasebot" data-v-ebedb39a>chasebot</option><option value="getbigger" data-v-ebedb39a>getbigger</option>',6),he=[de];function ue(e,t,o,i,n,a){return Object(r["t"])(),Object(r["e"])(r["a"],null,[Object(r["f"])("div",F,[Object(r["f"])("div",N,[Q,Object(r["f"])("span",X,Object(r["D"])(Math.round(e.score)),1)]),Object(r["f"])("div",Z,[$,Object(r["f"])("span",ee,Object(r["D"])(e.Enemies.length),1)]),Object(r["f"])("div",te,[oe,Object(r["f"])("span",re,Object(r["D"])(e.difficulty),1)]),Object(r["f"])("div",ie,[ne,Object(r["f"])("span",ae,Object(r["D"])(Math.round(e.highscore)),1)])]),Object(r["f"])("div",se,[Object(r["f"])("div",{style:Object(r["p"])([{left:e.playerx+"px",top:e.playery+"px",width:e.playerSize+"px",height:e.playerSize+"px"},{position:"absolute","border-radius":"50%","background-color":"red"}])},null,4),(Object(r["t"])(!0),Object(r["e"])(r["a"],null,Object(r["A"])(e.Enemies,(function(e){return Object(r["t"])(),Object(r["e"])("div",{class:Object(r["o"])(e.size),key:e,style:Object(r["p"])([{left:e.x+"px",top:e.y+"px",width:e.size+"px",height:e.size+"px",backgroundColor:e.color},{position:"absolute","border-radius":"50%"}])},null,6)})),128)),(Object(r["t"])(!0),Object(r["e"])(r["a"],null,Object(r["A"])(e.items,(function(e){return Object(r["t"])(),Object(r["e"])("div",{class:Object(r["o"])(e.type),key:e,style:Object(r["p"])([{left:e.x+"px",top:e.y+"px",width:e.size+"px",height:e.size+"px",backgroundColor:e.color},{position:"absolute","border-radius":"50%"}])},null,6)})),128)),e.message?(Object(r["t"])(),Object(r["e"])("div",{key:0,id:"Message",class:Object(r["o"])(e.messageType)},Object(r["D"])(e.message),3)):Object(r["d"])("",!0),e.gameStarted?Object(r["d"])("",!0):(Object(r["t"])(),Object(r["e"])("button",{key:1,onClick:t[0]||(t[0]=function(t){return e.start()}),class:"btn btn-success align-self-center shadow-none mt-1"}," Start Game "))]),e.production?Object(r["d"])("",!0):(Object(r["t"])(),Object(r["e"])("div",ce,[Object(r["f"])("button",{onClick:t[1]||(t[1]=function(t){return e.enemiesSpawn=!e.enemiesSpawn}),class:"btn btn-success align-self-center shadow-none mt-1"}," Enemies: "+Object(r["D"])(e.enemiesSpawn),1),Object(r["f"])("button",{onClick:t[2]||(t[2]=function(t){return e.enemiesMove=!e.enemiesMove}),class:"btn btn-success align-self-center shadow-none mt-1"}," Enemiesmove: "+Object(r["D"])(e.enemiesMove),1),Object(r["f"])("div",le,[be,Object(r["I"])(Object(r["f"])("select",{class:"form-select",id:"inputGroupSelect01","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.enemiesType=t})},he,512),[[r["F"],e.enemiesType]])])]))],64)}var fe=o("b85c"),pe=(o("a434"),o("c740"),o("e9c4"),Object(r["z"])({skillPoints:0,usedSkillPoints:0,skills:[]})),me=Object(r["z"])(!0),ge=Object(r["j"])({setup:function(){},data:function(){return{message:"",messageType:"",production:me.value,enemiesSpawn:!0,enemiesMove:!0,enemiesType:"",itemSpawn:!0,playerx:0,playery:0,playerSpeed:5,playerSize:15,skillTree:pe,gameStarted:!1,startingEnemies:4,borderRight:0,borderLeft:0,borderUp:0,borderDown:0,difficulty:2,highscore:0,score:0,gameloopCounter:0,items:[],pressedKeys:{},Enemies:[]}},mounted:function(){var e=this;window.addEventListener("resize",(function(){e.changeDisplaySize()})),setInterval((function(){e.gameStarted&&e.gameloop()}),1e3/60),this.changeDisplaySize(),this.playerStartPosition()},methods:{gameloop:function(){this.handlePlayerMovement(),this.handleEnemyMovement(),this.score+=this.difficulty,this.colisionHandling(),this.despawnItems(),this.gameloopCounter++,this.gameloopCounter%60==0&&this.handleEnemyColorSwitch(),this.gameloopCounter%120==0&&this.handleEnemyGetBigger(),this.gameloopCounter%420==0&&this.spawnItems(),this.gameloopCounter%1200==0&&(this.difficulty+=.5),this.gameloopCounter%900==0&&this.createEnemy()},start:function(){var e=this;this.message="",this.gameloopCounter=0,this.score=0,this.difficulty=2,this.playerStartPosition(),this.Enemies=[],this.items=[],this.gameStarted=!0,window.onkeyup=function(t){e.pressedKeys[t.key]=!1},window.onkeydown=function(t){e.pressedKeys[t.key]=!0};for(var t=0;t<this.startingEnemies;t++)this.createEnemy()},playerStartPosition:function(){this.playery=this.borderDown-1.5*this.borderUp,this.playerx=this.borderRight-2*this.borderLeft},gameOver:function(e,t){this.gameStarted=!1,this.score>this.highscore&&(this.highscore=this.score),this.skillTree.skillPoints=Math.floor(this.highscore/1e3),this.message=e,this.messageType=t},colisionHandling:function(){var e,t=this,o=Object(fe["a"])(this.items);try{var r=function(){var o=e.value;if(t.collisionsCheck(o))switch(o.type){case"coin":t.items.splice(t.items.findIndex((function(e){return e==o})),1),t.collectCoin();break;case"bomb":t.explosionBomb(o);break}};for(o.s();!(e=o.n()).done;)r()}catch(s){o.e(s)}finally{o.f()}var i,n=Object(fe["a"])(this.Enemies);try{for(n.s();!(i=n.n()).done;){var a=i.value;this.collisionsCheck(a)&&this.gameOver("you got killed by an enemy","alert alert-danger")}}catch(s){n.e(s)}finally{n.f()}},collisionsCheck:function(e,t){return Math.sqrt(Math.pow(e.x+e.size/2-(this.playerx+7.5),2)+Math.pow(e.y+e.size/2-(this.playery+7.5),2))<e.size*(t||1)/2+7.5},collectCoin:function(){this.score+=300*this.difficulty},explosionBomb:function(e){this.collisionsCheck(e,5)&&this.gameOver("you got exploded","alert alert-danger")},despawnItems:function(){var e,t=this,o=Object(fe["a"])(this.items);try{var r=function(){var o=e.value;o.timer--,o.timer<0&&("bomb"==o.type&&t.explosionBomb(o),t.items.splice(t.items.findIndex((function(e){return e==o})),1))};for(o.s();!(e=o.n()).done;)r()}catch(i){o.e(i)}finally{o.f()}},spawnItems:function(){if(this.itemSpawn){var e="",t=0,o=0,r="";switch(this.getRandomInt(2)){case 0:e="coin",r="rgb(199, 219, 15)";break;case 1:e="bomb",r="rgb(0, 0, 0)";break}t=this.getRandomInt(this.borderRight-this.borderLeft-20)+this.borderLeft,o=this.getRandomInt(this.borderDown-this.borderUp-20)+this.borderUp,this.items.push({type:e,color:r,x:t,y:o,size:20,timer:300})}},createEnemy:function(){if(this.enemiesSpawn){var e=0,t=0,o=0,r="",i="",n=[];switch(this.getRandomInt(4)){case 0:o=this.borderUp-25,n=[2*(Math.random()-.5),1];break;case 1:o=this.borderDown+25,n=[2*(Math.random()-.5),-1];break;case 2:t=this.borderRight+2,n=[-1,2*(Math.random()-.5)];break;case 3:t=this.borderLeft-25,n=[1,2*(Math.random()-.5)];break}switch(t||(t=this.getRandomInt(this.borderRight-this.borderLeft)+this.borderLeft),o||(o=this.getRandomInt(this.borderDown-this.borderUp)+this.borderUp),this.getRandomInt(3)){case 0:e=15,i="rgb(99, 206, 50)";break;case 1:e=20,i="rgb(50, 206, 198)";break;case 2:e=25,i="rgb(84, 50, 206)";break}switch(this.getRandomInt(5)){case 0:r="curve";break;case 1:r="colorswitch";break;case 2:r="aimbot";break;case 3:r="chasebot";break;case 4:r="getbigger";break}if(this.enemiesType&&(r=this.enemiesType),"aimbot"==r){var a=this.playerx-t,s=this.playery-o;s/=Math.abs(a),a/=Math.abs(a),Math.abs(s)>1.5&&(a/=Math.abs(s),s/=Math.abs(s)),n=[a,s]}this.Enemies.push({x:t,y:o,size:e,id:JSON.stringify(this.getRandomInt(1e8)),type:r,color:i,moveVektor:n,timer:"chasebot"==r?300:null})}},handleEnemyMovement:function(){if(this.enemiesMove){var e,t=Object(fe["a"])(this.Enemies);try{for(t.s();!(e=t.n()).done;){var o=e.value;if("curve"==o.type&&(o.moveVektor[o.moveVektor.findIndex((function(e){return 1!=e}))]+=.04*Math.random()),"chasebot"!=o.type)o.x+=o.moveVektor[0]*this.difficulty,o.y+=o.moveVektor[1]*this.difficulty;else{var r=this.playerx-o.x,i=this.playery-o.y;i/=Math.abs(r),r/=Math.abs(r),Math.abs(i)>1.5&&(r/=Math.abs(i),i/=Math.abs(i)),o.x+=2*r,o.y+=2*i,o.timer?o.timer--:this.respawnEnemy(o)}(o.y<this.borderUp-25||o.y>this.borderDown+25)&&this.respawnEnemy(o),(o.x<this.borderLeft-25||o.x>this.borderRight+25)&&this.respawnEnemy(o)}}catch(n){t.e(n)}finally{t.f()}}},respawnEnemy:function(e){this.Enemies.splice(this.Enemies.findIndex((function(t){return t==e})),1),this.createEnemy()},handleEnemyGetBigger:function(){var e,t=Object(fe["a"])(this.Enemies);try{for(t.s();!(e=t.n()).done;){var o=e.value;"getbigger"==o.type&&(o.size+=2)}}catch(r){t.e(r)}finally{t.f()}},handleEnemyColorSwitch:function(){var e,t=Object(fe["a"])(this.Enemies);try{for(t.s();!(e=t.n()).done;){var o=e.value;if("colorswitch"==o.type)switch(this.getRandomInt(3)){case 0:o.color="rgb(99, 206, 50)";break;case 1:o.color="rgb(50, 206, 198)";break;case 2:o.color="rgb(84, 50, 206)";break}}}catch(r){t.e(r)}finally{t.f()}},getRandomInt:function(e){return Math.floor(Math.random()*e)},handlePlayerMovement:function(){var e=1;this.pressedKeys["Control"]&&(e=2),this.pressedKeys["Shift"]&&(e=.5),(this.pressedKeys["ArrowDown"]||this.pressedKeys["s"])&&this.down(e),(this.pressedKeys["ArrowLeft"]||this.pressedKeys["a"])&&this.left(e),(this.pressedKeys["ArrowRight"]||this.pressedKeys["d"])&&this.right(e),(this.pressedKeys["ArrowUp"]||this.pressedKeys["w"])&&this.up(e)},up:function(e){this.playery>this.borderUp&&(this.playery-=this.playerSpeed*e,this.playery<this.borderUp+2&&(this.playery=this.borderUp+2))},down:function(e){this.playery<this.borderDown&&(this.playery+=this.playerSpeed*e,this.playery>this.borderDown-17&&(this.playery=this.borderDown-17))},right:function(e){this.playerx<this.borderRight&&(this.playerx+=this.playerSpeed*e,this.playerx>this.borderRight-15&&(this.playerx=this.borderRight-15))},left:function(e){this.playerx>this.borderLeft&&(this.playerx-=this.playerSpeed*e,this.playerx<this.borderLeft+1&&(this.playerx=this.borderLeft+1))},changeDisplaySize:function(){this.borderRight=Math.round(window.innerWidth*(100-100/6)/100-2),this.borderLeft=Math.round(window.innerWidth*(100/6)/100+2),this.borderUp=.2*window.innerHeight,this.borderDown=this.borderUp+550}}});o("4798");const ve=p()(ge,[["render",ue],["__scopeId","data-v-ebedb39a"]]);var ye=ve,je=Object(r["j"])({components:{game:ye}});o("53c7");const Oe=p()(je,[["render",J],["__scopeId","data-v-cae8dfaa"]]);var we=Oe;function ke(e,t,o,i,n,a){return Object(r["t"])(),Object(r["e"])("div",null," Skill Points: "+Object(r["D"])(e.skillTree.skillPoints-e.skillTree.usedSkillPoints)+"/"+Object(r["D"])(e.skillTree.skillPoints),1)}var xe=Object(r["j"])({setup:function(){},data:function(){return{skillTree:pe}}});const Se=p()(xe,[["render",ke]]);var Me=Se,Ce=[{path:"/home",name:"Home",component:U},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}},{path:"/games",name:"Games",component:we},{path:"/skillTree",name:"SkillTree",component:Me}],Ee=Object(y["a"])({history:Object(y["b"])(),routes:Ce}),ze=Ee;o("ab8b"),o("7b17");Object(r["c"])(v).use(ze).mount("#app")},e1ee:function(e,t,o){var r=o("24fb");t=r(!1),t.push([e.i,'#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50}#nav{padding:3vh;height:10vh;background-color:#c57ac5;color:#000;-webkit-animation-name:banner;animation-name:banner;-webkit-animation-duration:30s;animation-duration:30s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}@-webkit-keyframes banner{0%{background-color:#fff}30%{background-color:#ff9a9a}60%{background-color:#9a9aff}90%{background-color:#ffff9a}to{background-color:#fff}}@keyframes banner{0%{background-color:#fff}30%{background-color:#ff9a9a}60%{background-color:#9a9aff}90%{background-color:#ffff9a}to{background-color:#fff}}#nav a{font-weight:700;color:#000}#nav a.router-link-exact-active{color:#797878}.ball{--size:1rem;--bounceHeight:3rem;--duration:0.6s;width:var(--size);height:var(--size);margin:auto;position:relative;top:-2vh;left:-48%;right:0;perspective:1000px}.ball:before{height:inherit;background:radial-gradient(ellipse at 30% 20%,#ffa07a,transparent 40%),radial-gradient(circle at -20% -30%,tomato 60%,#8b0000);box-shadow:inset 0 0 10px rgba(0,0,0,.1);-webkit-animation:bounce var(--duration) infinite alternate cubic-bezier(1,0,.8,.9);animation:bounce var(--duration) infinite alternate cubic-bezier(1,0,.8,.9)}.ball:after,.ball:before{content:"";display:block;width:inherit;border-radius:50%}.ball:after{position:relative;z-index:-1;bottom:0;left:0;right:0;height:20%;color:#ccc;background-color:currentColor;transform:translateY(var(--bounceHeight)) scale(.8);-webkit-animation:bounceShadow var(--duration) infinite alternate cubic-bezier(1,0,.8,.9);animation:bounceShadow var(--duration) infinite alternate cubic-bezier(1,0,.8,.9)}@-webkit-keyframes bounce{85%{transform:translateY(calc(var(--bounceHeight) - 3px))}86%{transform:translateY(calc(var(--bounceHeight) - 3px)) scale(1.1,.9)}to{transform:translateY(var(--bounceHeight)) scale(1.4,.5)}}@keyframes bounce{85%{transform:translateY(calc(var(--bounceHeight) - 3px))}86%{transform:translateY(calc(var(--bounceHeight) - 3px)) scale(1.1,.9)}to{transform:translateY(var(--bounceHeight)) scale(1.4,.5)}}@-webkit-keyframes bounceShadow{0%{box-shadow:0 0 10px 8px currentColor;color:#eee}90%{box-shadow:0 0 3px 3px currentColor}91%{box-shadow:0 0 2px 2px currentColor}to{box-shadow:0 0 0 currentColor}}@keyframes bounceShadow{0%{box-shadow:0 0 10px 8px currentColor;color:#eee}90%{box-shadow:0 0 3px 3px currentColor}91%{box-shadow:0 0 2px 2px currentColor}to{box-shadow:0 0 0 currentColor}}',""]),e.exports=t}});
//# sourceMappingURL=app.48d9f28e.js.map