(self["webpackChunkquasar_movies"]=self["webpackChunkquasar_movies"]||[]).push([[866],{217:(a,t,e)=>{"use strict";e.d(t,{O:()=>i});var l=e(52),n=e.n(l),o=e(1959),s=e(3673);function i(a){const t=(0,o.iH)(!1),e=(0,o.iH)(!1),l=(0,o.iH)(null),i=(0,o.iH)(1),r=(0,o.qj)((0,o.iH)(null)),c=async o=>{try{t.value=!0;const e=await n().get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=${a}&page=${o}`,{headers:{"Content-Type":"application/json","X-API-KEY":"1220afbe-7495-4b15-b248-073dbf409499"}});r.value=e.data.films,l.value=e.data.pagesCount}catch(e){e.value=!0}finally{t.value=!1}};return(0,s.bv)(c(i.value)),(0,s.YP)(i,c),{loading:t,error:e,films:r,totalPage:l,current:i,loadData:c}}},7731:(a,t,e)=>{"use strict";e.d(t,{Z:()=>v});var l=e(3673),n=e(2323);const o={class:"q-pa-md"},s={class:"row items-start q-col-gutter-md"},i={class:"absolute-bottom blur-bg"},r={class:"text-capacitor btn-link"};function c(a,t,e,c,u,m){const d=(0,l.up)("q-card-actions"),p=(0,l.up)("q-img"),f=(0,l.up)("q-card");return(0,l.wg)(),(0,l.j4)("div",o,[(0,l.Wm)("div",s,[((0,l.wg)(!0),(0,l.j4)(l.HY,null,(0,l.Ko)(a.films,(t=>((0,l.wg)(),(0,l.j4)("div",{class:"col-12 col-sm-6 col-md-4 col-lg-2",key:t.filmId},[(0,l.Wm)("div",{onClick:e=>a.handleFilm(t.filmId)},[(0,l.Wm)(f,{class:"my-card"},{default:(0,l.w5)((()=>[(0,l.Wm)(p,{height:"350px",alt:t.ru_title,loading:"lazy","spinner-color":"accent",src:t.posterUrlPreview},{default:(0,l.w5)((()=>[(0,l.Wm)("div",i,[(0,l.Wm)(d,null,{default:(0,l.w5)((()=>[(0,l.Wm)("div",r,(0,n.zw)(t.nameRu)+" / "+(0,n.zw)(t.nameEn),1)])),_:2},1024)])])),_:2},1032,["alt","src"])])),_:2},1024)],8,["onClick"])])))),128))])])}const u=(0,l.aZ)({name:"CardKinopoisk",props:["films"],methods:{handleFilm(a){this.$store.commit("kinopoiskId/SET_ID",a),this.$router.push({name:"Фильм",params:{id:a}})}}});var m=e(151),d=e(4152),p=e(9367),f=e(7518),g=e.n(f);u.render=c;const v=u;g()(u,"components",{QCard:m.Z,QImg:d.Z,QCardActions:p.Z})},4551:(a,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>p});var l=e(3673);const n={class:"q-pa-lg flex flex-center"};function o(a,t,e,o,s,i){const r=(0,l.up)("card-kinopoisk"),c=(0,l.up)("q-pagination"),u=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(u,{padding:""},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{films:o.films},null,8,["films"]),(0,l.Wm)("div",n,[(0,l.Wm)(c,{modelValue:o.current,"onUpdate:modelValue":t[1]||(t[1]=a=>o.current=a),color:"accent",max:o.totalPage,"max-pages":4,"boundary-numbers":!0},null,8,["modelValue","max"])])])),_:1})}var s=e(217),i=e(7731);const r={components:{CardKinopoisk:i.Z},setup(){const a="TOP_250_BEST_FILMS",{loading:t,error:e,films:l,totalPage:n,current:o}=(0,s.O)(a);return{current:o,loading:t,error:e,films:l,totalPage:n}}};var c=e(4379),u=e(7300),m=e(7518),d=e.n(m);r.render=o;const p=r;d()(r,"components",{QPage:c.Z,QPagination:u.Z})}}]);