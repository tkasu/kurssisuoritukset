// Compiled by ClojureScript 0.0-3211 {}
goog.provide('kurssisuoritukset.core');
goog.require('cljs.core');
goog.require('reagent.core');
if(typeof kurssisuoritukset.core.coursesA !== 'undefined'){
} else {
kurssisuoritukset.core.coursesA = reagent.core.atom.call(null,cljs.core.sorted_map.call(null));
}
if(typeof kurssisuoritukset.core.courses_id_counter !== 'undefined'){
} else {
kurssisuoritukset.core.courses_id_counter = reagent.core.atom.call(null,(0));
}
kurssisuoritukset.core.add_course = (function kurssisuoritukset$core$add_course(name){
var id = cljs.core.swap_BANG_.call(null,kurssisuoritukset.core.courses_id_counter,cljs.core.inc);
return cljs.core.swap_BANG_.call(null,kurssisuoritukset.core.coursesA,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),name], null));
});
if(typeof kurssisuoritukset.core.init !== 'undefined'){
} else {
kurssisuoritukset.core.init = (function (){
kurssisuoritukset.core.add_course.call(null,"wepa");

kurssisuoritukset.core.add_course.call(null,"TiKaPe");

kurssisuoritukset.core.add_course.call(null,"OhPe");

return kurssisuoritukset.core.add_course.call(null,"weso");
})()
;
}
kurssisuoritukset.core.add_course_componen = (function kurssisuoritukset$core$add_course_componen(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Add course"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"add-course",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"course name"], null)], null)], null);
});
kurssisuoritukset.core.courses_component = (function kurssisuoritukset$core$courses_component(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kurssisuoritukset.core.add_course_componen], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Courses"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__18875__auto__ = (function kurssisuoritukset$core$courses_component_$_iter__21505(s__21506){
return (new cljs.core.LazySeq(null,(function (){
var s__21506__$1 = s__21506;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21506__$1);
if(temp__4126__auto__){
var s__21506__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21506__$2)){
var c__18873__auto__ = cljs.core.chunk_first.call(null,s__21506__$2);
var size__18874__auto__ = cljs.core.count.call(null,c__18873__auto__);
var b__21508 = cljs.core.chunk_buffer.call(null,size__18874__auto__);
if((function (){var i__21507 = (0);
while(true){
if((i__21507 < size__18874__auto__)){
var course = cljs.core._nth.call(null,c__18873__auto__,i__21507);
cljs.core.chunk_append.call(null,b__21508,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(course)," ",new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(course)], null));

var G__21509 = (i__21507 + (1));
i__21507 = G__21509;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21508),kurssisuoritukset$core$courses_component_$_iter__21505.call(null,cljs.core.chunk_rest.call(null,s__21506__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21508),null);
}
} else {
var course = cljs.core.first.call(null,s__21506__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(course)," ",new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(course)], null),kurssisuoritukset$core$courses_component_$_iter__21505.call(null,cljs.core.rest.call(null,s__21506__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__18875__auto__.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,kurssisuoritukset.core.coursesA)));
})()], null)], null);
});
kurssisuoritukset.core.main = (function kurssisuoritukset$core$main(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kurssisuoritukset.core.courses_component], null),document.getElementById("app"));
});
goog.exportSymbol('kurssisuoritukset.core.main', kurssisuoritukset.core.main);

//# sourceMappingURL=core.js.map?rel=1440566183507