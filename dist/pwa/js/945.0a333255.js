(self["webpackChunkquasar_movies"]=self["webpackChunkquasar_movies"]||[]).push([[945],{217:(a,t,e)=>{"use strict";e.d(t,{O:()=>s});var l=e(1959),n=e(3673),o=e(5474);function s(a){const t=(0,l.iH)(!1),e=(0,l.iH)(!1),s=(0,l.iH)(0),r=(0,l.iH)(1),i=(0,l.iH)(null),c=async l=>{try{t.value=!0;const e=await o.api.get(`v2.2/films/top?type=${a}&page=${l}`);i.value=e.data.films,s.value=e.data.pagesCount}catch(e){e.value=!0}finally{t.value=!1}};return(0,n.bv)(c(r.value)),(0,n.YP)(r,c),{loading:t,error:e,films:i,totalPage:s,current:r,loadData:c}}},1333:(a,t,e)=>{"use strict";e.d(t,{Z:()=>f});var l=e(3673),n=e(2323);const o={class:"q-pa-md"},s={class:"row items-start q-col-gutter-md"},r={class:"absolute-bottom blur-bg"},i={class:"text-capacitor btn-link"};function c(a,t,e,c,m,d){const u=(0,l.up)("q-card-actions"),p=(0,l.up)("q-img"),g=(0,l.up)("q-card");return(0,l.wg)(),(0,l.j4)("div",o,[(0,l.Wm)("div",s,[((0,l.wg)(!0),(0,l.j4)(l.HY,null,(0,l.Ko)(a.films,(t=>((0,l.wg)(),(0,l.j4)("div",{class:"col-6 col-sm-6 col-md-4 col-lg-2",key:t.filmId},[(0,l.Wm)("div",{class:"my-card",onClick:e=>a.handleFilm(t.filmId,t.iframe_src)},[(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[(0,l.Wm)(p,{height:"350px",alt:t.ru_title,loading:"lazy","spinner-color":"accent",src:t.posterUrlPreview},{default:(0,l.w5)((()=>[(0,l.Wm)("div",r,[(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Wm)("div",i,(0,n.zw)(t.nameRu)+" / "+(0,n.zw)(t.nameEn),1)])),_:2},1024)])])),_:2},1032,["alt","src"])])),_:2},1024)],8,["onClick"])])))),128))])])}const m=(0,l.aZ)({name:"CardKinopoisk",props:["films"],methods:{handleFilm(a,t){this.$store.commit("kinopoiskId/SET_ID",a),this.$store.commit("iframe/SET_IFRAME",t),this.$router.push({name:"Просмотр",params:{id:a}})}}});var d=e(151),u=e(4152),p=e(9367),g=e(7518),v=e.n(g);m.render=c;const f=m;v()(m,"components",{QCard:d.Z,QImg:u.Z,QCardActions:p.Z})},8865:(a,t,e)=>{"use strict";e.d(t,{Z:()=>p});var l=e(3673);const n={class:"q-pa-md"},o={class:"row items-start q-col-gutter-md"};function s(a,t,e,s,r,i){const c=(0,l.up)("q-skeleton"),m=(0,l.up)("q-item-section"),d=(0,l.up)("q-card");return(0,l.wg)(),(0,l.j4)("div",n,[(0,l.Wm)("div",o,[((0,l.wg)(),(0,l.j4)(l.HY,null,(0,l.Ko)(18,((a,t)=>(0,l.Wm)("div",{class:"col-6 col-sm-6 col-md-4 col-lg-2",key:t},[(0,l.Wm)(d,{lass:"my-card"},{default:(0,l.w5)((()=>[(0,l.Wm)(m,null,{default:(0,l.w5)((()=>[(0,l.Wm)(c,{height:"350px",animation:"wave"})])),_:1})])),_:1})]))),64))])])}const r=(0,l.aZ)({name:"CardLoader"});var i=e(151),c=e(2035),m=e(4103),d=e(7518),u=e.n(d);r.render=s;const p=r;u()(r,"components",{QCard:i.Z,QItemSection:c.Z,QSkeleton:m.ZP})},1945:(a,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>f});var l=e(3673);const n={key:0},o={key:1},s={class:"q-pa-lg flex flex-center"};function r(a,t,e,r,i,c){const m=(0,l.up)("card-kinopoisk"),d=(0,l.up)("card-loader"),u=(0,l.up)("q-pagination"),p=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(p,{padding:""},{default:(0,l.w5)((()=>[!1===r.loading?((0,l.wg)(),(0,l.j4)("div",n,[(0,l.Wm)(m,{films:r.films},null,8,["films"])])):((0,l.wg)(),(0,l.j4)("div",o,[(0,l.Wm)(d)])),(0,l.Wm)("div",s,[(0,l.Wm)(u,{modelValue:r.current,"onUpdate:modelValue":t[1]||(t[1]=a=>r.current=a),color:"accent",max:r.totalPage,"max-pages":4,"boundary-numbers":!0},null,8,["modelValue","max"])])])),_:1})}var i=e(217),c=e(1333),m=e(8865);const d={components:{CardKinopoisk:c.Z,CardLoader:m.Z},setup(){const a="TOP_250_BEST_FILMS",{loading:t,error:e,films:l,totalPage:n,current:o}=(0,i.O)(a);return{current:o,loading:t,error:e,films:l,totalPage:n}}};var u=e(4379),p=e(7300),g=e(7518),v=e.n(g);d.render=r;const f=d;v()(d,"components",{QPage:u.Z,QPagination:p.Z})}}]);