webpackJsonp([1],{"13p8":function(t,a){},"7zck":function(t,a){},El0g:function(t,a){},N0OA:function(t,a){},NHnr:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=n("7+uW"),i={render:function(){var t=this.$createElement,a=this._self._c||t;return a("v-app",[a("v-content",[a("router-view")],1),this._v(" "),a("v-footer",{attrs:{dark:"",height:"auto"}},[a("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[a("v-card-actions",{staticClass:"grey darken-3 justify-center"},[this._v("\n        ©2018 — "),a("strong",[this._v("Vuetify")])])],1)],1)],1)},staticRenderFns:[]};var r=n("VU/8")({data:function(){return{clipped:!1,drawer:!0,fixed:!1,items:[{icon:"bubble_chart",title:"Inspire"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"CornPop",menus:[{title:"home",path:"/"},{title:"list",path:"/list"},{title:"Rangking",path:"/rank"}],icons:["fab fa-facebook","fab fa-twitter","fab fa-google-plus","fab fa-linkedin","fab fa-instagram"]}},name:"App"},i,!1,function(t){n("El0g")},null,null).exports,s=n("/ocq"),l={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-toolbar",{attrs:{app:"",flat:"",dark:"",color:"pink"}},[n("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),t._v(" "),n("v-spacer"),t._v(" "),t.$vuetify.breakpoint.mdAndUp?n("v-toolbar-items",[t._l(t.menus,function(a){return n("v-btn",{key:a.title,attrs:{flat:"",to:a.path}},[t._v(t._s(a.title))])}),t._v(" "),n("v-btn",{attrs:{flat:""},on:{click:function(a){t.$emit("to-admin")}}},[t._v("Admin")])],2):t._e()],1)},staticRenderFns:[]};var o=n("VU/8")({data:function(){return{menus:[{title:"home",path:"/"},{title:"list",path:"/list"},{title:"Rangking",path:"/rank"}],title:"CornApp"}}},l,!1,function(t){n("OP2S")},null,null).exports,c={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("v-parallax",{attrs:{dark:"",src:"static/corn.jpg"}},[a("v-layout",{attrs:{"align-center":"",column:"","justify-center":""}},[a("h1",{staticClass:"display-2 font-weight-thin mb-3"},[this._v(this._s(this.title))]),this._v(" "),a("h4",{staticClass:"subheading"},[this._v(this._s(this.subtitle))])])],1)],1)},staticRenderFns:[]};var u={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-container",{attrs:{fluid:"","grid-list-lg":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-card",{staticClass:"white--text",attrs:{color:"blue-grey darken-2"}},[n("v-card-title",{attrs:{"primary-title":""}},[n("div",{staticClass:"headline"},[t._v("Daftar Lahan")]),t._v(" "),n("div",[t._v("Listen to your favorite artists and albums whenever and wherever, online and offline.")])])],1)],1),t._v(" "),n("v-flex",{attrs:{xs12:""}},[n("v-card",{staticClass:"white--text",attrs:{color:"cyan darken-2"}},[n("v-layout",[n("v-flex",{attrs:{xs5:""}},[n("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/cards/foster.jpg",height:"125px",contain:""}})],1),t._v(" "),n("v-flex",{attrs:{xs7:""}},[n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("div",{staticClass:"headline"},[t._v("Ranking")]),t._v(" "),n("div",[t._v("Perangkingan lahan")])])])],1)],1),t._v(" "),n("v-divider",{attrs:{light:""}})],1)],1)],1)],1)},staticRenderFns:[]};var d={name:"Home",components:{HomePar:n("VU/8")({name:"Home",data:function(){return{title:"CornApp",subtitle:"Build your application today!"}}},c,!1,function(t){n("QXvp")},null,null).exports,HomeSmMenu:n("VU/8")({name:"HomeSmMenu"},u,!1,function(t){n("uwIp")},null,null).exports,MyToolbar:o},methods:{onToAdmin:function(){window.location="/admin/index.html"}}},v={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("my-toolbar",{on:{"to-admin":this.onToAdmin}}),this._v(" "),a("home-par"),this._v(" "),this.$vuetify.breakpoint.smAndDown?a("home-sm-menu"):this._e(),this._v(" "),a("v-container",[a("v-layout",{attrs:{row:""}},[a("v-flex",[a("p",[this._v("Pertanian merupakan pembudidayaan tanaman pada suatu lahan untuk menghasilkan sumber pangan. \n          Salah satu sumber pangan yang banyak dihasilkan adalah jagung. \n          Jagung merupakan tanaman semusim (annual). Satu siklus hidupnya diselesaikan dalam 80-150 hari. \n          Paruh pertama dari siklus merupakan tahap pertumbuhan vegetatif dan paruh kedua untuk \n          tahap pertumbuhan generatif. Tinggi tanaman jagung sangat bervariasi. \n          Meskipun tanaman jagung umumnya berketinggian antara 1m-3m, \n          ada varietas yang dapat mencapai tinggi 6m. \n          Tinggi tanaman biasa diukur dari permukaan tanah hingga ruas teratas \n          sebelum bunga jantan. Penanaman jagung disuatu lahan harus sesuai dengan persyaratan\n           penggunaan lahan. Kesesuaian lahan tanaman jagung pada tingkat ordo\n            dapat dibedakan menjadi 2 yaitu, sesuai, dan tidak sesuai.")])])],1)],1)],1)},staticRenderFns:[]};var h=n("VU/8")(d,v,!1,function(t){n("N0OA")},null,null).exports,m={data:function(){return{colors:["teal","amber","yellow","dodgerblue"]}},created:function(){setInterval(function(){})}},f={render:function(){var t=this.$createElement,a=this._self._c||t;return a("v-container",{staticStyle:{"min-height":"70vh"},attrs:{id:"loading-cont",fluid:"","justify-center":"","align-center":"","fill-height":""}},[a("v-progress-circular",{attrs:{size:"256",color:"amber",width:"24",indeterminate:""}})],1)},staticRenderFns:[]};var p=n("VU/8")(m,f,!1,function(t){n("h2xx")},null,null).exports,g={data:function(){return{menus:[{url:"/",icon:"history"},{url:"/list",icon:"dashboard"},{url:"/rank",icon:"public"}]}},methods:{toAdmin:function(){window.location="/admin/index.html"}}},k={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-navigation-drawer",{staticClass:"pink",staticStyle:{display:"flex","align-items":"center","justify-content":"center"},attrs:{fixed:"",app:"",left:"","mini-variant":"",dark:""}},[n("v-list",{staticClass:"pa-0",staticStyle:{"margin-bottom":"40px"}},[t._l(t.menus,function(a,e){return n("v-list-tile",{key:e,staticClass:"side-list-tile",staticStyle:{"justify-content":"center","margin-bottom":"48px"},attrs:{avatar:"",to:a.url}},[n("v-btn",{attrs:{fab:"",flat:""}},[n("v-icon",{attrs:{size:"48"}},[t._v(t._s(a.icon))])],1)],1)}),t._v(" "),n("v-list-tile",{staticClass:"side-list-tile",staticStyle:{"justify-content":"center","margin-bottom":"48px"},attrs:{avatar:""},on:{click:t.toAdmin}},[n("v-btn",{attrs:{fab:"",flat:""}},[n("v-icon",{attrs:{size:"48"}},[t._v("backup")])],1)],1)],2)],1)},staticRenderFns:[]};var _=n("VU/8")(g,k,!1,function(t){n("13p8")},null,null).exports,b=n("mtWM"),y="http://localhost:3000";function x(){return b.get(y+"/api/lahan").then(function(t){return t.data}).then(function(t){return t.map(function(t){return t.avatar="https://cdn.vuetifyjs.com/images/lists/1.jpg",t})})}var w={components:{FullLoading:p,MyToolbar:o,SideNav:_},data:function(){return{items:[],isLoading:!1}},created:function(){this.getAndTransform()},computed:{totalItems:function(){return this.items.length}},methods:{runRank:function(){var t=this;this.isLoading=!0,b.post(y+"/comp").then(function(t){return t.data}).catch(function(t){console.log(t)}).then(function(a){setTimeout(function(){t.isLoading=!1,t.items=a},1500),setTimeout(function(){t.items.sort(function(t,a){return a.pref-t.pref})},1800)})},getAndTransform:function(){var t=this;x().then(function(a){t.items=a.map(function(t){return{lahan:t,pref:"--"}})}).catch(function(t){console.log(t)})}}},T={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("side-nav"),t._v(" "),n("v-container",{staticClass:"pa-0 ma-0",attrs:{"fill-height":""}},[n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{md6:""}},[n("div",[n("v-list",{staticStyle:{"padding-bottom":"60px"},attrs:{"two-line":""}},[n("transition-group",{attrs:{name:"flip-list",tag:"div"}},t._l(t.items,function(a,e){return n("v-list-tile",{key:e,attrs:{avatar:""},on:{click:function(a){t.sahyHi()}}},[n("v-list-tile-avatar",[n("img",{attrs:{src:a.avatar}})]),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",{domProps:{innerHTML:t._s(a.lahan.lokasi)}}),t._v(" "),n("v-list-tile-sub-title",[t._v("\n                    "+t._s(a.lahan.lat)+", "+t._s(a.lahan.long)+"\n                  ")])],1),t._v(" "),n("v-list-tile-action",["--"==a.pref?n("span",[t._v(t._s(a.pref))]):n("span",[t._v(t._s(a.pref.toFixed(4)))])])],1)}))],1)],1)]),t._v(" "),n("v-flex",{attrs:{col:"",md6:"","justify-center":"","align-center":"","fill-height":""}},[n("div",{staticClass:"pink darken-1",attrs:{id:"rank-form-cont"}},[n("h3",{staticClass:"headline white--text"},[n("strong",[t._v(t._s(t.totalItems)+" data")])]),t._v(" "),n("h3",{staticClass:"display-1 white--text"},[n("strong",[t._v("Jalankan Perangkingan")])]),t._v(" "),n("v-btn",{attrs:{dark:"",outline:""},on:{click:t.runRank}},[t._v("Go!")])],1)])],1)],1),t._v(" "),t.isLoading?n("full-loading"):t._e()],1)},staticRenderFns:[]};var C=n("VU/8")(w,T,!1,function(t){n("ZxT9")},null,null).exports,A=n("//Fk"),j=n.n(A),I={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-container",{staticClass:"pa-0 ma-0",attrs:{fluid:"","grid-list-xl":""}},[n("v-layout",{attrs:{wrap:""}},t._l(t.medias,function(a,e){return n("v-flex",{key:e,attrs:{md4:"",sm12:""}},[n("v-card",[n("v-img",{attrs:{src:a.path,height:"260px"}}),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{dark:"",icon:"",color:"blue"}},[n("v-icon",[t._v("build")])],1)],1)],1)],1)}))],1)},staticRenderFns:[]};var S={lokasi:"oesapa",avatar:"https://cdn.vuetifyjs.com/images/lists/1.jpg",lat:-10.179173,long:123.591715,curahHujan:448,sistemPengairan:"Irigasi Permukaan",sumberAir:"Banyak",kemiringanLahan:"Datar",teksturTanah:"Halus",corganik:"Tersedia",bahayaBencana:"Ringan",kedalamanTanah:48},H={components:{MyToolbar:o,GaleriView:n("VU/8")({props:["medias"],data:function(){return{x:2}}},I,!1,function(t){n("mVyr")},null,null).exports,SideNav:_},data:function(){return{items:[],sidebarWidth:400,activeLahanIndex:null,keyword:"",medias:[],map:null,mapInfo:null}},computed:{activeLahan:function(){return null==this.activeLahanIndex?S:this.items[this.activeLahanIndex]},filteredItems:function(){var t=this.keyword.toUpperCase();return this.items.filter(function(a){return-1!==a.lokasi.toUpperCase().indexOf(t)})}},methods:{sayHi:function(){console.log("Hi")},getAllData:function(){var t=this;return x().then(function(a){return t.items=a,t.items.forEach(function(a,n){var e,i;(e=a._id,i=y+"/lahan/"+e+"/avatar",b.get(i).then(function(t){return t.data})).then(function(a){t.items[n].avatar=a.url}).catch(function(t){console.log(t)})}),t.items})},createMap:function(t){var a=[-10.102195,123.878633],n=this;null!=this.activeLahanIndex&&(a[0]=this.activeLahan.long,a[1]=this.activeLahan.lat),this.map=L.map("mymap").setView(a,12),L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',maxZoom:18,id:"mapbox.streets",accessToken:"pk.eyJ1Ijoiam9tZXRhIiwiYSI6ImNqbTB4eWtqNzB5dzAzcHJ2NGVoaW5wcXAifQ.yXaPLSgJXcn0shC2nYDU0g"}).addTo(this.map);var e=t.map(function(t,a){return{type:"Feature",properties:{index:a,id:t._id,name:t.lokasi,amenity:"Baseball Stadium",lokasi:t.lokasi,kedalamanTanah:t.kedalamanTanah,curahHujan:t.curahHujan,sumberAir:t.sumberAir,sistemPengairan:t.sistemPengairan,kemiringanLahan:t.kemiringanLahan,teksturTanah:t.teksturTanah,corganik:t.corganik,bahayaBencana:t.bahayaBencana,popupContent:"Lokasi: "+t.lokasi},geometry:{type:"Point",coordinates:[t.long,t.lat]}}}),i={radius:8,fillColor:"#ff7800",color:"#000",weight:1,opacity:1,fillOpacity:.8},r=L.control({position:"topright"});function s(t){var a=t.target;r.update(a.feature.properties),n.changeActiveLahan(a.feature.properties.id)}r.onAdd=function(t){return this._div=L.DomUtil.create("div","info-map"),this.update(),this._div},r.update=function(t){var a="<h5>Arahkan mouse pada lahan!</h5>";t&&(a="\n            <div>\n              Lokasi: "+t.lokasi+"\n            </div>\n            <div>\n              Curah Hujan: "+t.curahHujan+"\n            </div>\n            <div>\n              Kedalaman Tanah: "+t.kedalamanTanah+"\n            </div>\n            <div>\n              Sumber Air: "+t.sumberAir+"\n            </div>\n            <div>\n              Sistem Pengairan: "+t.sistemPengairan+"\n            </div>\n            <div>\n              Kemiringan Lahan: "+t.kemiringanLahan+"\n            </div>\n            <div>\n              Tekstur Tanah: "+t.teksturTanah+"\n            </div>\n            <div>\n              Bahaya Bencana: "+t.bahayaBencana+"\n            </div>\n          "),this._div.innerHTML="<h4>Data Lahan</h4>"+a},r.addTo(this.map),n.mapInfo=r;L.geoJSON(e,{pointToLayer:function(t,a){return L.circleMarker(a,i)},onEachFeature:function(t,a){a.on({click:s})}}).addTo(this.map)},updateMap:function(){null!==this.activeLahanIndex&&(this.map.panTo([this.activeLahan.lat,this.activeLahan.long],{animation:!0,duration:2}),this.map.setZoom(14))},findLocByLatLang:function(t){for(var a=null,n=0;n<this.items.length;n++){var e=this.items[n];e.lat===t.lat&&e.long===t.long&&(a=n)}null!=a&&(this.activeLahanIndex=a)},changeActiveLahan:function(t){for(var a=this,n=this.items,i=null,r=0;r<n.length;r++)if(n[r]._id===t){i=r;break}null!==i&&(this.activeLahanIndex=i,e.default.nextTick(function(){a.updateMap(),a.loadMedias(t),a.mapInfo.update(a.activeLahan)}))},loadMedias:function(t){var a=this;return null===t|void 0===t?j.a.resolve([]):function(t){var a=y+"/lahan/"+t+"/media";return b.get(a).then(function(t){return t.data})}(t).then(function(t){a.medias=t}).catch(function(t){return console.log(t),[]})}},mounted:function(){var t=this;this.getAllData().then(function(a){return t.createMap(a)}).catch(function(t){console.log(t)})}},P={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"white"},[n("side-nav"),t._v(" "),n("v-container",{staticClass:"pa-0 ma-0",attrs:{fluid:"","grid-list-md":""}},[n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{md3:""}},[n("v-container",{attrs:{fluid:""}},[n("v-text-field",{staticClass:"my-0",attrs:{"append-icon":"mic",flat:"",label:"Search","prepend-inner-icon":"search"},model:{value:t.keyword,callback:function(a){t.keyword=a},expression:"keyword"}}),t._v(" "),n("v-list",{attrs:{dense:"","two-line":""}},[n("v-subheader",[t._v("\n              List Lahan\n            ")]),t._v(" "),t._l(t.filteredItems,function(a,e){return n("v-list-tile",{key:e,class:{blue:e==t.activeLahanIndex},attrs:{avatar:"",light:e==t.activeLahanIndex},on:{click:function(n){t.changeActiveLahan(a._id)}}},[n("v-list-tile-avatar",[n("img",{attrs:{src:a.avatar}})]),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",{domProps:{innerHTML:t._s(a.lokasi)}})],1)],1)})],2)],1)],1),t._v(" "),n("v-flex",{attrs:{md9:""}},[n("v-toolbar",{attrs:{id:"tab-toolbar",dark:"",flat:"",color:"pink"}},[n("v-toolbar-title",[null!=t.activeLahanIndex?n("div",{staticClass:"title"},[t._v(t._s(t.activeLahan.lokasi))]):n("div",[t._v("Silahkan Pilih lokasi")])])],1),t._v(" "),n("v-tabs",{attrs:{dark:"",color:"pink lighten-1",grow:"",dense:""}},[n("v-tabs-slider"),t._v(" "),n("v-tab",{attrs:{href:"#mymap"}},[t._v("\n            Map\n          ")]),t._v(" "),n("v-tab",{attrs:{href:"#tab-2"}},[t._v("\n            Info\n          ")]),t._v(" "),n("v-tab",{attrs:{href:"#tab-3"}},[t._v("\n            Galeri\n          ")]),t._v(" "),n("v-tab-item",{attrs:{id:"mymap"}}),t._v(" "),n("v-tab-item",{attrs:{id:"tab-2"}},[n("v-container",[n("v-text-field",{attrs:{label:"Lokasi",value:t.activeLahan.lokasi,readonly:""}}),t._v(" "),n("v-text-field",{attrs:{label:"Curah Hujan",value:t.activeLahan.curahHujan,readonly:""}}),t._v(" "),n("v-text-field",{attrs:{label:"Sistem Pengairan",value:t.activeLahan.sistemPengairan,readonly:""}}),t._v(" "),n("v-text-field",{attrs:{label:"Sumber Air",value:t.activeLahan.sumberAir,readonly:""}}),t._v(" "),n("v-text-field",{attrs:{label:"Kemiringan Lahan",value:t.activeLahan.kemiringanLahan,readonly:""}}),t._v(" "),n("v-text-field",{attrs:{label:"Tekstur Tanah",value:t.activeLahan.teksturTanah,readonly:""}}),t._v(" "),n("v-text-field",{attrs:{label:"C-Organik",value:t.activeLahan.corganik,readonly:""}}),t._v(" "),n("v-text-field",{attrs:{label:"Kedalaman Tanah",value:t.activeLahan.kedalamanTanah,readonly:""}})],1)],1),t._v(" "),n("v-tab-item",{attrs:{id:"tab-3"}},[n("galeri-view",{attrs:{medias:t.medias}})],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var M=n("VU/8")(H,P,!1,function(t){n("m0kH")},null,null).exports;e.default.use(s.a);var R=new s.a({routes:[{path:"/",name:"Home",component:h},{path:"/list",name:"ListLahan",component:M},{path:"/rank",name:"Rank",component:C}]}),V=n("3EgV"),E=n.n(V),F=(n("7zck"),n("PlbA")),U=n.n(F);e.default.use(E.a),e.default.use(U.a),e.default.config.productionTip=!1,new e.default({el:"#app",router:R,components:{App:r},template:"<App/>"})},OP2S:function(t,a){},QXvp:function(t,a){},ZxT9:function(t,a){},h2xx:function(t,a){},m0kH:function(t,a){},mVyr:function(t,a){},uwIp:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.d58282e6bec8b072d4a6.js.map