// Compiled by ClojureScript 1.7.107 {}
goog.provide('kurssisuoritukset.views.course_page');
goog.require('cljs.core');
goog.require('kurssisuoritukset.data');
cljs.core.enable_console_print_BANG_.call(null);
kurssisuoritukset.views.course_page.add_assignment_input = (function kurssisuoritukset$views$course_page$add_assignment_input(name_value,crd_value){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-inline","div.form-inline",-557536095),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"assignment-name",new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"assignment name",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,name_value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__5956_SHARP_){
return cljs.core.reset_BANG_.call(null,name_value,p1__5956_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"assignment-credit",new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"credits",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,crd_value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__5957_SHARP_){
return cljs.core.reset_BANG_.call(null,crd_value,p1__5957_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return kurssisuoritukset.data.add_assignment.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)),cljs.core.deref.call(null,name_value),(cljs.core.deref.call(null,crd_value) | (0)));
})], null),"Add assignment!"], null)], null);
});
kurssisuoritukset.views.course_page.course_page = (function kurssisuoritukset$views$course_page$course_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),((!((kurssisuoritukset.data.current_course == null)))?(function (){var course = kurssisuoritukset.data.get_course.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"course-mod"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Course:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default-value","default-value",232220170),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(course)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Assignments:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Assignment"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Max points"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5334__auto__ = ((function (course){
return (function kurssisuoritukset$views$course_page$course_page_$_iter__5962(s__5963){
return (new cljs.core.LazySeq(null,((function (course){
return (function (){
var s__5963__$1 = s__5963;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__5963__$1);
if(temp__4425__auto__){
var s__5963__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5963__$2)){
var c__5332__auto__ = cljs.core.chunk_first.call(null,s__5963__$2);
var size__5333__auto__ = cljs.core.count.call(null,c__5332__auto__);
var b__5965 = cljs.core.chunk_buffer.call(null,size__5333__auto__);
if((function (){var i__5964 = (0);
while(true){
if((i__5964 < size__5333__auto__)){
var assignment = cljs.core._nth.call(null,c__5332__auto__,i__5964);
cljs.core.chunk_append.call(null,b__5965,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(assignment)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"credits","credits",785860820).cljs$core$IFn$_invoke$arity$1(assignment)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)], null)));

var G__5966 = (i__5964 + (1));
i__5964 = G__5966;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5965),kurssisuoritukset$views$course_page$course_page_$_iter__5962.call(null,cljs.core.chunk_rest.call(null,s__5963__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5965),null);
}
} else {
var assignment = cljs.core.first.call(null,s__5963__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(assignment)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"credits","credits",785860820).cljs$core$IFn$_invoke$arity$1(assignment)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)], null)),kurssisuoritukset$views$course_page$course_page_$_iter__5962.call(null,cljs.core.rest.call(null,s__5963__$2)));
}
} else {
return null;
}
break;
}
});})(course))
,null,null));
});})(course))
;
return iter__5334__auto__.call(null,cljs.core.vals.call(null,new cljs.core.Keyword(null,"assignments","assignments",-1114514911).cljs$core$IFn$_invoke$arity$1(course)));
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kurssisuoritukset.views.course_page.add_assignment_input,kurssisuoritukset.data.add_assignment_atom,kurssisuoritukset.data.add_assignment_crd_atom], null)], null);
})():null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null)," back to the front page"], null)], null)], null);
});

//# sourceMappingURL=course_page.js.map?rel=1441135588371