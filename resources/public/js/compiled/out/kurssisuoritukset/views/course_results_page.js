// Compiled by ClojureScript 1.7.107 {}
goog.provide('kurssisuoritukset.views.course_results_page');
goog.require('cljs.core');
goog.require('kurssisuoritukset.data');
kurssisuoritukset.views.course_results_page.result_page = (function kurssisuoritukset$views$course_results_page$result_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),((!((kurssisuoritukset.data.current_course == null)))?(function (){var course = kurssisuoritukset.data.get_course.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)));
var students = kurssisuoritukset.data.get_students.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(course)),cljs.core.str(" result page")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Student"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"xxd"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__17289__auto__ = ((function (course,students){
return (function kurssisuoritukset$views$course_results_page$result_page_$_iter__20705(s__20706){
return (new cljs.core.LazySeq(null,((function (course,students){
return (function (){
var s__20706__$1 = s__20706;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__20706__$1);
if(temp__4425__auto__){
var s__20706__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20706__$2)){
var c__17287__auto__ = cljs.core.chunk_first.call(null,s__20706__$2);
var size__17288__auto__ = cljs.core.count.call(null,c__17287__auto__);
var b__20708 = cljs.core.chunk_buffer.call(null,size__17288__auto__);
if((function (){var i__20707 = (0);
while(true){
if((i__20707 < size__17288__auto__)){
var student = cljs.core._nth.call(null,c__17287__auto__,i__20707);
cljs.core.chunk_append.call(null,b__20708,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),student], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"tobedone"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),student], null)));

var G__20709 = (i__20707 + (1));
i__20707 = G__20709;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20708),kurssisuoritukset$views$course_results_page$result_page_$_iter__20705.call(null,cljs.core.chunk_rest.call(null,s__20706__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20708),null);
}
} else {
var student = cljs.core.first.call(null,s__20706__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),student], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"tobedone"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),student], null)),kurssisuoritukset$views$course_results_page$result_page_$_iter__20705.call(null,cljs.core.rest.call(null,s__20706__$2)));
}
} else {
return null;
}
break;
}
});})(course,students))
,null,null));
});})(course,students))
;
return iter__17289__auto__.call(null,students);
})()], null)], null)], null);
})():null)], null)], null);
});

//# sourceMappingURL=course_results_page.js.map?rel=1441458723191