(self["webpackChunkquasar_movies"]=self["webpackChunkquasar_movies"]||[]).push([[255],{73:(a,t,e)=>{"use strict";e.d(t,{H:()=>n});var l=e(52),o=e.n(l),s=e(1959),i=e(3673);function n(a,t){const e=(0,s.iH)(!1),l=(0,s.iH)(!1),n=(0,s.iH)(0),r=(0,s.iH)(1),c=(0,s.qj)((0,s.iH)(null)),d=async s=>{try{e.value=!0;const l=await o().get(` https://videocdn.tv/api/${a}?api_token=PjAFmjK42Jn0PAx7HVq9096feUFaj9Q0&ordering=created&direction=desc&page=${s}&limit=${t}`);c.value=l.data.data,n.value=l.data.last_page}catch(l){console.error(l),l.value=!0}finally{e.value=!1}};return(0,i.bv)(d(r.value)),(0,i.YP)(r,d),{loading:e,error:l,films:c,totalPage:n,current:r,loadData:d}}},9972:(a,t,e)=>{"use strict";e.d(t,{Z:()=>f});var l=e(3673),o=e(2323);const s={class:"q-pa-md"},i={class:"row items-start q-col-gutter-md"},n={class:"absolute-bottom blur-bg"},r={class:"text-capacitor btn-link"};function c(a,t,e,c,d,m){const u=(0,l.up)("q-card-actions"),p=(0,l.up)("q-img"),g=(0,l.up)("q-card");return(0,l.wg)(),(0,l.j4)("div",s,[(0,l.Wm)("div",i,[((0,l.wg)(!0),(0,l.j4)(l.HY,null,(0,l.Ko)(a.films,(t=>((0,l.wg)(),(0,l.j4)("div",{class:"col-6 col-sm-6 col-md-4 col-lg-2",key:t.id},[(0,l.Wm)("div",{class:"my-card",onClick:e=>a.handleFilm(t.id,t.kinopoisk_id,t.iframe_src)},[(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[(0,l.Wm)(p,{height:"350px",alt:t.ru_title,loading:"lazy","spinner-color":"accent",src:`https://kinopoiskapiunofficial.tech/images/posters/kp_small/${t.kinopoisk_id}.jpg`},{default:(0,l.w5)((()=>[(0,l.Wm)("div",n,[(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Wm)("div",r,(0,o.zw)(t.ru_title)+" / "+(0,o.zw)(t.orig_title),1)])),_:2},1024)])])),_:2},1032,["alt","src"])])),_:2},1024)],8,["onClick"])])))),128))])])}const d=(0,l.aZ)({name:"CardFilms",props:["films"],methods:{handleFilm(a,t,e){this.$store.commit("kinopoiskId/SET_ID",t),this.$store.commit("iframe/SET_IFRAME",e),t?this.$router.push({name:"Просмотр",params:{id:t}}):(console.log(a),this.$router.push({name:"Просмотр",params:{id:a}}))}}});var m=e(151),u=e(4152),p=e(9367),g=e(7518),v=e.n(g);d.render=c;const f=d;v()(d,"components",{QCard:m.Z,QImg:u.Z,QCardActions:p.Z})},8865:(a,t,e)=>{"use strict";e.d(t,{Z:()=>p});var l=e(3673);const o={class:"q-pa-md"},s={class:"row items-start q-col-gutter-md"};function i(a,t,e,i,n,r){const c=(0,l.up)("q-skeleton"),d=(0,l.up)("q-item-section"),m=(0,l.up)("q-card");return(0,l.wg)(),(0,l.j4)("div",o,[(0,l.Wm)("div",s,[((0,l.wg)(),(0,l.j4)(l.HY,null,(0,l.Ko)(18,((a,t)=>(0,l.Wm)("div",{class:"col-6 col-sm-6 col-md-4 col-lg-2",key:t},[(0,l.Wm)(m,{lass:"my-card"},{default:(0,l.w5)((()=>[(0,l.Wm)(d,null,{default:(0,l.w5)((()=>[(0,l.Wm)(c,{height:"350px",animation:"wave"})])),_:1})])),_:1})]))),64))])])}const n=(0,l.aZ)({name:"CardLoader"});var r=e(151),c=e(2035),d=e(4103),m=e(7518),u=e.n(m);n.render=i;const p=n;u()(n,"components",{QCard:r.Z,QItemSection:c.Z,QSkeleton:d.ZP})},1255:(a,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>f});var l=e(3673);const o={key:0},s={key:1},i={class:"q-pa-lg flex flex-center"};function n(a,t,e,n,r,c){const d=(0,l.up)("card-film"),m=(0,l.up)("card-loader"),u=(0,l.up)("q-pagination"),p=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(p,{padding:""},{default:(0,l.w5)((()=>[!1===n.loading?((0,l.wg)(),(0,l.j4)("div",o,[(0,l.Wm)(d,{films:n.films},null,8,["films"])])):((0,l.wg)(),(0,l.j4)("div",s,[(0,l.Wm)(m)])),(0,l.Wm)("div",i,[(0,l.Wm)(u,{modelValue:n.current,"onUpdate:modelValue":t[1]||(t[1]=a=>n.current=a),color:"accent",max:n.totalPage,"max-pages":4,"boundary-numbers":!0},null,8,["modelValue","max"])])])),_:1})}var r=e(73),c=e(9972),d=e(8865);const m={components:{CardFilm:c.Z,CardLoader:d.Z},setup(){const a="tv-series",t=18,{loading:e,error:l,films:o,totalPage:s,current:i}=(0,r.H)(a,t);return{current:i,loading:e,error:l,films:o,totalPage:s}}};var u=e(4379),p=e(7300),g=e(7518),v=e.n(g);m.render=n;const f=m;v()(m,"components",{QPage:u.Z,QPagination:p.Z})}}]);