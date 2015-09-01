// Compiled by ClojureScript 1.7.107 {}
goog.provide('kurssisuoritukset.views.list_page');
goog.require('cljs.core');
goog.require('kurssisuoritukset.data');
if(typeof kurssisuoritukset.views.list_page.init !== 'undefined'){
} else {
kurssisuoritukset.views.list_page.init = (function (){
kurssisuoritukset.data.add_course.call(null,"wepa");

kurssisuoritukset.data.add_course.call(null,"TiKaPe");

kurssisuoritukset.data.add_course.call(null,"OhPe");

kurssisuoritukset.data.add_course.call(null,"weso");

kurssisuoritukset.data.add_assignment.call(null,(1),"Harkat",(5));

kurssisuoritukset.data.add_assignment.call(null,(1),"Harkat2",(3));

kurssisuoritukset.data.add_assignment.call(null,(2),"Tentti",(7));

return kurssisuoritukset.data.add_assignment.call(null,(3),"Suullinen tentti",(12));
})()
;
}
kurssisuoritukset.views.list_page.add_course_input = (function kurssisuoritukset$views$list_page$add_course_input(value){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"add-course",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"course name",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__5944_SHARP_){
return cljs.core.reset_BANG_.call(null,value,p1__5944_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return kurssisuoritukset.data.add_course.call(null,cljs.core.deref.call(null,value));
}),new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-primary"], null),"Add course!"], null)], null);
});
kurssisuoritukset.views.list_page.add_course_component = (function kurssisuoritukset$views$list_page$add_course_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Add course"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kurssisuoritukset.views.list_page.add_course_input,kurssisuoritukset.data.add_course_atom], null)], null);
});
kurssisuoritukset.views.list_page.courses_component = (function kurssisuoritukset$views$list_page$courses_component(){
var courses = cljs.core.vals.call(null,cljs.core.deref.call(null,kurssisuoritukset.data.coursesA));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kurssisuoritukset.views.list_page.add_course_component], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Courses"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5334__auto__ = ((function (courses){
return (function kurssisuoritukset$views$list_page$courses_component_$_iter__5949(s__5950){
return (new cljs.core.LazySeq(null,((function (courses){
return (function (){
var s__5950__$1 = s__5950;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__5950__$1);
if(temp__4425__auto__){
var s__5950__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5950__$2)){
var c__5332__auto__ = cljs.core.chunk_first.call(null,s__5950__$2);
var size__5333__auto__ = cljs.core.count.call(null,c__5332__auto__);
var b__5952 = cljs.core.chunk_buffer.call(null,size__5333__auto__);
if((function (){var i__5951 = (0);
while(true){
if((i__5951 < size__5333__auto__)){
var course = cljs.core._nth.call(null,c__5332__auto__,i__5951);
cljs.core.chunk_append.call(null,b__5952,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("#/courses/"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(course))].join('')], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(course)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(course)], null)));

var G__5953 = (i__5951 + (1));
i__5951 = G__5953;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5952),kurssisuoritukset$views$list_page$courses_component_$_iter__5949.call(null,cljs.core.chunk_rest.call(null,s__5950__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5952),null);
}
} else {
var course = cljs.core.first.call(null,s__5950__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("#/courses/"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(course))].join('')], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(course)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(course)], null)),kurssisuoritukset$views$list_page$courses_component_$_iter__5949.call(null,cljs.core.rest.call(null,s__5950__$2)));
}
} else {
return null;
}
break;
}
});})(courses))
,null,null));
});})(courses))
;
return iter__5334__auto__.call(null,courses);
})()], null)], null);
});
kurssisuoritukset.views.list_page.list_page = (function kurssisuoritukset$views$list_page$list_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kurssisuoritukset.views.list_page.courses_component], null)], null);
});

//# sourceMappingURL=list_page.js.map?rel=1441135588284