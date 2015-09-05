// Compiled by ClojureScript 1.7.107 {}
goog.provide('kurssisuoritukset.views.course_results_page');
goog.require('cljs.core');
goog.require('kurssisuoritukset.data');
kurssisuoritukset.views.course_results_page.result_page = (function kurssisuoritukset$views$course_results_page$result_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),((!((kurssisuoritukset.data.current_course == null)))?(function (){var course = kurssisuoritukset.data.get_course.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)));
var assignments = new cljs.core.Keyword(null,"assignments","assignments",-1114514911).cljs$core$IFn$_invoke$arity$1(course);
var students = kurssisuoritukset.data.get_students.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(course)),cljs.core.str(" result page")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Student"], null),(function (){var iter__17289__auto__ = ((function (course,assignments,students){
return (function kurssisuoritukset$views$course_results_page$result_page_$_iter__18756(s__18757){
return (new cljs.core.LazySeq(null,((function (course,assignments,students){
return (function (){
var s__18757__$1 = s__18757;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__18757__$1);
if(temp__4425__auto__){
var s__18757__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18757__$2)){
var c__17287__auto__ = cljs.core.chunk_first.call(null,s__18757__$2);
var size__17288__auto__ = cljs.core.count.call(null,c__17287__auto__);
var b__18759 = cljs.core.chunk_buffer.call(null,size__17288__auto__);
if((function (){var i__18758 = (0);
while(true){
if((i__18758 < size__17288__auto__)){
var assignment = cljs.core._nth.call(null,c__17287__auto__,i__18758);
cljs.core.chunk_append.call(null,b__18759,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(assignment)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)], null)));

var G__18780 = (i__18758 + (1));
i__18758 = G__18780;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18759),kurssisuoritukset$views$course_results_page$result_page_$_iter__18756.call(null,cljs.core.chunk_rest.call(null,s__18757__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18759),null);
}
} else {
var assignment = cljs.core.first.call(null,s__18757__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(assignment)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)], null)),kurssisuoritukset$views$course_results_page$result_page_$_iter__18756.call(null,cljs.core.rest.call(null,s__18757__$2)));
}
} else {
return null;
}
break;
}
});})(course,assignments,students))
,null,null));
});})(course,assignments,students))
;
return iter__17289__auto__.call(null,cljs.core.vals.call(null,assignments));
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__17289__auto__ = ((function (course,assignments,students){
return (function kurssisuoritukset$views$course_results_page$result_page_$_iter__18760(s__18761){
return (new cljs.core.LazySeq(null,((function (course,assignments,students){
return (function (){
var s__18761__$1 = s__18761;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__18761__$1);
if(temp__4425__auto__){
var s__18761__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18761__$2)){
var c__17287__auto__ = cljs.core.chunk_first.call(null,s__18761__$2);
var size__17288__auto__ = cljs.core.count.call(null,c__17287__auto__);
var b__18763 = cljs.core.chunk_buffer.call(null,size__17288__auto__);
if((function (){var i__18762 = (0);
while(true){
if((i__18762 < size__17288__auto__)){
var student = cljs.core._nth.call(null,c__17287__auto__,i__18762);
cljs.core.chunk_append.call(null,b__18763,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),student], null),(function (){var iter__17289__auto__ = ((function (i__18762,student,c__17287__auto__,size__17288__auto__,b__18763,s__18761__$2,temp__4425__auto__,course,assignments,students){
return (function kurssisuoritukset$views$course_results_page$result_page_$_iter__18760_$_iter__18772(s__18773){
return (new cljs.core.LazySeq(null,((function (i__18762,student,c__17287__auto__,size__17288__auto__,b__18763,s__18761__$2,temp__4425__auto__,course,assignments,students){
return (function (){
var s__18773__$1 = s__18773;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__18773__$1);
if(temp__4425__auto____$1){
var s__18773__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18773__$2)){
var c__17287__auto____$1 = cljs.core.chunk_first.call(null,s__18773__$2);
var size__17288__auto____$1 = cljs.core.count.call(null,c__17287__auto____$1);
var b__18775 = cljs.core.chunk_buffer.call(null,size__17288__auto____$1);
if((function (){var i__18774 = (0);
while(true){
if((i__18774 < size__17288__auto____$1)){
var assignment = cljs.core._nth.call(null,c__17287__auto____$1,i__18774);
cljs.core.chunk_append.call(null,b__18775,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),[cljs.core.str(kurssisuoritukset.data.get_student_points.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment),student)),cljs.core.str(" / "),cljs.core.str(new cljs.core.Keyword(null,"credits","credits",785860820).cljs$core$IFn$_invoke$arity$1(assignment))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)], null)));

var G__18781 = (i__18774 + (1));
i__18774 = G__18781;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18775),kurssisuoritukset$views$course_results_page$result_page_$_iter__18760_$_iter__18772.call(null,cljs.core.chunk_rest.call(null,s__18773__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18775),null);
}
} else {
var assignment = cljs.core.first.call(null,s__18773__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),[cljs.core.str(kurssisuoritukset.data.get_student_points.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment),student)),cljs.core.str(" / "),cljs.core.str(new cljs.core.Keyword(null,"credits","credits",785860820).cljs$core$IFn$_invoke$arity$1(assignment))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)], null)),kurssisuoritukset$views$course_results_page$result_page_$_iter__18760_$_iter__18772.call(null,cljs.core.rest.call(null,s__18773__$2)));
}
} else {
return null;
}
break;
}
});})(i__18762,student,c__17287__auto__,size__17288__auto__,b__18763,s__18761__$2,temp__4425__auto__,course,assignments,students))
,null,null));
});})(i__18762,student,c__17287__auto__,size__17288__auto__,b__18763,s__18761__$2,temp__4425__auto__,course,assignments,students))
;
return iter__17289__auto__.call(null,cljs.core.vals.call(null,assignments));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),student], null)));

var G__18782 = (i__18762 + (1));
i__18762 = G__18782;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18763),kurssisuoritukset$views$course_results_page$result_page_$_iter__18760.call(null,cljs.core.chunk_rest.call(null,s__18761__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18763),null);
}
} else {
var student = cljs.core.first.call(null,s__18761__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),student], null),(function (){var iter__17289__auto__ = ((function (student,s__18761__$2,temp__4425__auto__,course,assignments,students){
return (function kurssisuoritukset$views$course_results_page$result_page_$_iter__18760_$_iter__18776(s__18777){
return (new cljs.core.LazySeq(null,((function (student,s__18761__$2,temp__4425__auto__,course,assignments,students){
return (function (){
var s__18777__$1 = s__18777;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__18777__$1);
if(temp__4425__auto____$1){
var s__18777__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18777__$2)){
var c__17287__auto__ = cljs.core.chunk_first.call(null,s__18777__$2);
var size__17288__auto__ = cljs.core.count.call(null,c__17287__auto__);
var b__18779 = cljs.core.chunk_buffer.call(null,size__17288__auto__);
if((function (){var i__18778 = (0);
while(true){
if((i__18778 < size__17288__auto__)){
var assignment = cljs.core._nth.call(null,c__17287__auto__,i__18778);
cljs.core.chunk_append.call(null,b__18779,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),[cljs.core.str(kurssisuoritukset.data.get_student_points.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment),student)),cljs.core.str(" / "),cljs.core.str(new cljs.core.Keyword(null,"credits","credits",785860820).cljs$core$IFn$_invoke$arity$1(assignment))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)], null)));

var G__18783 = (i__18778 + (1));
i__18778 = G__18783;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18779),kurssisuoritukset$views$course_results_page$result_page_$_iter__18760_$_iter__18776.call(null,cljs.core.chunk_rest.call(null,s__18777__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18779),null);
}
} else {
var assignment = cljs.core.first.call(null,s__18777__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),[cljs.core.str(kurssisuoritukset.data.get_student_points.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment),student)),cljs.core.str(" / "),cljs.core.str(new cljs.core.Keyword(null,"credits","credits",785860820).cljs$core$IFn$_invoke$arity$1(assignment))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)], null)),kurssisuoritukset$views$course_results_page$result_page_$_iter__18760_$_iter__18776.call(null,cljs.core.rest.call(null,s__18777__$2)));
}
} else {
return null;
}
break;
}
});})(student,s__18761__$2,temp__4425__auto__,course,assignments,students))
,null,null));
});})(student,s__18761__$2,temp__4425__auto__,course,assignments,students))
;
return iter__17289__auto__.call(null,cljs.core.vals.call(null,assignments));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),student], null)),kurssisuoritukset$views$course_results_page$result_page_$_iter__18760.call(null,cljs.core.rest.call(null,s__18761__$2)));
}
} else {
return null;
}
break;
}
});})(course,assignments,students))
,null,null));
});})(course,assignments,students))
;
return iter__17289__auto__.call(null,students);
})()], null)], null)], null);
})():null)], null)], null);
});

//# sourceMappingURL=course_results_page.js.map?rel=1441460651550