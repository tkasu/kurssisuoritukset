// Compiled by ClojureScript 1.7.107 {}
goog.provide('kurssisuoritukset.views.course_results_page');
goog.require('cljs.core');
goog.require('kurssisuoritukset.data');
kurssisuoritukset.views.course_results_page.result_page = (function kurssisuoritukset$views$course_results_page$result_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),((!((kurssisuoritukset.data.current_course == null)))?(function (){var course = kurssisuoritukset.data.get_course.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)));
var assignments = new cljs.core.Keyword(null,"assignments","assignments",-1114514911).cljs$core$IFn$_invoke$arity$1(course);
var students = kurssisuoritukset.data.get_students.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(course)),cljs.core.str(" result page")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Student"], null),(function (){var iter__17289__auto__ = ((function (course,assignments,students){
return (function kurssisuoritukset$views$course_results_page$result_page_$_iter__24235(s__24236){
return (new cljs.core.LazySeq(null,((function (course,assignments,students){
return (function (){
var s__24236__$1 = s__24236;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24236__$1);
if(temp__4425__auto__){
var s__24236__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24236__$2)){
var c__17287__auto__ = cljs.core.chunk_first.call(null,s__24236__$2);
var size__17288__auto__ = cljs.core.count.call(null,c__17287__auto__);
var b__24238 = cljs.core.chunk_buffer.call(null,size__17288__auto__);
if((function (){var i__24237 = (0);
while(true){
if((i__24237 < size__17288__auto__)){
var assignment = cljs.core._nth.call(null,c__17287__auto__,i__24237);
cljs.core.chunk_append.call(null,b__24238,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(assignment)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)], null)));

var G__24259 = (i__24237 + (1));
i__24237 = G__24259;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24238),kurssisuoritukset$views$course_results_page$result_page_$_iter__24235.call(null,cljs.core.chunk_rest.call(null,s__24236__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24238),null);
}
} else {
var assignment = cljs.core.first.call(null,s__24236__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(assignment)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)], null)),kurssisuoritukset$views$course_results_page$result_page_$_iter__24235.call(null,cljs.core.rest.call(null,s__24236__$2)));
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
return (function kurssisuoritukset$views$course_results_page$result_page_$_iter__24239(s__24240){
return (new cljs.core.LazySeq(null,((function (course,assignments,students){
return (function (){
var s__24240__$1 = s__24240;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24240__$1);
if(temp__4425__auto__){
var s__24240__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24240__$2)){
var c__17287__auto__ = cljs.core.chunk_first.call(null,s__24240__$2);
var size__17288__auto__ = cljs.core.count.call(null,c__17287__auto__);
var b__24242 = cljs.core.chunk_buffer.call(null,size__17288__auto__);
if((function (){var i__24241 = (0);
while(true){
if((i__24241 < size__17288__auto__)){
var student = cljs.core._nth.call(null,c__17287__auto__,i__24241);
cljs.core.chunk_append.call(null,b__24242,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),student], null),(function (){var iter__17289__auto__ = ((function (i__24241,student,c__17287__auto__,size__17288__auto__,b__24242,s__24240__$2,temp__4425__auto__,course,assignments,students){
return (function kurssisuoritukset$views$course_results_page$result_page_$_iter__24239_$_iter__24251(s__24252){
return (new cljs.core.LazySeq(null,((function (i__24241,student,c__17287__auto__,size__17288__auto__,b__24242,s__24240__$2,temp__4425__auto__,course,assignments,students){
return (function (){
var s__24252__$1 = s__24252;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__24252__$1);
if(temp__4425__auto____$1){
var s__24252__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24252__$2)){
var c__17287__auto____$1 = cljs.core.chunk_first.call(null,s__24252__$2);
var size__17288__auto____$1 = cljs.core.count.call(null,c__17287__auto____$1);
var b__24254 = cljs.core.chunk_buffer.call(null,size__17288__auto____$1);
if((function (){var i__24253 = (0);
while(true){
if((i__24253 < size__17288__auto____$1)){
var assignment = cljs.core._nth.call(null,c__17287__auto____$1,i__24253);
cljs.core.chunk_append.call(null,b__24254,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),[cljs.core.str(kurssisuoritukset.data.get_student_points.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment),student)),cljs.core.str(" / "),cljs.core.str(new cljs.core.Keyword(null,"credits","credits",785860820).cljs$core$IFn$_invoke$arity$1(assignment))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)], null)));

var G__24260 = (i__24253 + (1));
i__24253 = G__24260;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24254),kurssisuoritukset$views$course_results_page$result_page_$_iter__24239_$_iter__24251.call(null,cljs.core.chunk_rest.call(null,s__24252__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24254),null);
}
} else {
var assignment = cljs.core.first.call(null,s__24252__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),[cljs.core.str(kurssisuoritukset.data.get_student_points.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment),student)),cljs.core.str(" / "),cljs.core.str(new cljs.core.Keyword(null,"credits","credits",785860820).cljs$core$IFn$_invoke$arity$1(assignment))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)], null)),kurssisuoritukset$views$course_results_page$result_page_$_iter__24239_$_iter__24251.call(null,cljs.core.rest.call(null,s__24252__$2)));
}
} else {
return null;
}
break;
}
});})(i__24241,student,c__17287__auto__,size__17288__auto__,b__24242,s__24240__$2,temp__4425__auto__,course,assignments,students))
,null,null));
});})(i__24241,student,c__17287__auto__,size__17288__auto__,b__24242,s__24240__$2,temp__4425__auto__,course,assignments,students))
;
return iter__17289__auto__.call(null,cljs.core.vals.call(null,assignments));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),student], null)));

var G__24261 = (i__24241 + (1));
i__24241 = G__24261;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24242),kurssisuoritukset$views$course_results_page$result_page_$_iter__24239.call(null,cljs.core.chunk_rest.call(null,s__24240__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24242),null);
}
} else {
var student = cljs.core.first.call(null,s__24240__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),student], null),(function (){var iter__17289__auto__ = ((function (student,s__24240__$2,temp__4425__auto__,course,assignments,students){
return (function kurssisuoritukset$views$course_results_page$result_page_$_iter__24239_$_iter__24255(s__24256){
return (new cljs.core.LazySeq(null,((function (student,s__24240__$2,temp__4425__auto__,course,assignments,students){
return (function (){
var s__24256__$1 = s__24256;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__24256__$1);
if(temp__4425__auto____$1){
var s__24256__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24256__$2)){
var c__17287__auto__ = cljs.core.chunk_first.call(null,s__24256__$2);
var size__17288__auto__ = cljs.core.count.call(null,c__17287__auto__);
var b__24258 = cljs.core.chunk_buffer.call(null,size__17288__auto__);
if((function (){var i__24257 = (0);
while(true){
if((i__24257 < size__17288__auto__)){
var assignment = cljs.core._nth.call(null,c__17287__auto__,i__24257);
cljs.core.chunk_append.call(null,b__24258,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),[cljs.core.str(kurssisuoritukset.data.get_student_points.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment),student)),cljs.core.str(" / "),cljs.core.str(new cljs.core.Keyword(null,"credits","credits",785860820).cljs$core$IFn$_invoke$arity$1(assignment))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)], null)));

var G__24262 = (i__24257 + (1));
i__24257 = G__24262;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24258),kurssisuoritukset$views$course_results_page$result_page_$_iter__24239_$_iter__24255.call(null,cljs.core.chunk_rest.call(null,s__24256__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24258),null);
}
} else {
var assignment = cljs.core.first.call(null,s__24256__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),[cljs.core.str(kurssisuoritukset.data.get_student_points.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment),student)),cljs.core.str(" / "),cljs.core.str(new cljs.core.Keyword(null,"credits","credits",785860820).cljs$core$IFn$_invoke$arity$1(assignment))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)], null)),kurssisuoritukset$views$course_results_page$result_page_$_iter__24239_$_iter__24255.call(null,cljs.core.rest.call(null,s__24256__$2)));
}
} else {
return null;
}
break;
}
});})(student,s__24240__$2,temp__4425__auto__,course,assignments,students))
,null,null));
});})(student,s__24240__$2,temp__4425__auto__,course,assignments,students))
;
return iter__17289__auto__.call(null,cljs.core.vals.call(null,assignments));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),student], null)),kurssisuoritukset$views$course_results_page$result_page_$_iter__24239.call(null,cljs.core.rest.call(null,s__24240__$2)));
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
})():null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("#/courses/"),cljs.core.str(kurssisuoritukset.data.current_course.call(null)),cljs.core.str("/results/mod")].join('')], null),"Add course results"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("#/courses/"),cljs.core.str(kurssisuoritukset.data.current_course.call(null))].join('')], null),"Back to course page"], null)], null)], null)], null);
});

//# sourceMappingURL=course_results_page.js.map?rel=1441561818752