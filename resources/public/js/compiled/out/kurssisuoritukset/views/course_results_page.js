// Compiled by ClojureScript 1.7.107 {}
goog.provide('kurssisuoritukset.views.course_results_page');
goog.require('cljs.core');
goog.require('kurssisuoritukset.data');
kurssisuoritukset.views.course_results_page.result_page = (function kurssisuoritukset$views$course_results_page$result_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),((!((kurssisuoritukset.data.current_course == null)))?(function (){var course = kurssisuoritukset.data.get_course.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)));
var assignments = new cljs.core.Keyword(null,"assignments","assignments",-1114514911).cljs$core$IFn$_invoke$arity$1(course);
var students = kurssisuoritukset.data.get_students.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(course)),cljs.core.str(" result page")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Student"], null),(function (){var iter__17289__auto__ = ((function (course,assignments,students){
return (function kurssisuoritukset$views$course_results_page$result_page_$_iter__26053(s__26054){
return (new cljs.core.LazySeq(null,((function (course,assignments,students){
return (function (){
var s__26054__$1 = s__26054;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__26054__$1);
if(temp__4425__auto__){
var s__26054__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26054__$2)){
var c__17287__auto__ = cljs.core.chunk_first.call(null,s__26054__$2);
var size__17288__auto__ = cljs.core.count.call(null,c__17287__auto__);
var b__26056 = cljs.core.chunk_buffer.call(null,size__17288__auto__);
if((function (){var i__26055 = (0);
while(true){
if((i__26055 < size__17288__auto__)){
var assignment = cljs.core._nth.call(null,c__17287__auto__,i__26055);
cljs.core.chunk_append.call(null,b__26056,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(assignment)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)], null)));

var G__26077 = (i__26055 + (1));
i__26055 = G__26077;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26056),kurssisuoritukset$views$course_results_page$result_page_$_iter__26053.call(null,cljs.core.chunk_rest.call(null,s__26054__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26056),null);
}
} else {
var assignment = cljs.core.first.call(null,s__26054__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(assignment)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)], null)),kurssisuoritukset$views$course_results_page$result_page_$_iter__26053.call(null,cljs.core.rest.call(null,s__26054__$2)));
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
return (function kurssisuoritukset$views$course_results_page$result_page_$_iter__26057(s__26058){
return (new cljs.core.LazySeq(null,((function (course,assignments,students){
return (function (){
var s__26058__$1 = s__26058;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__26058__$1);
if(temp__4425__auto__){
var s__26058__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26058__$2)){
var c__17287__auto__ = cljs.core.chunk_first.call(null,s__26058__$2);
var size__17288__auto__ = cljs.core.count.call(null,c__17287__auto__);
var b__26060 = cljs.core.chunk_buffer.call(null,size__17288__auto__);
if((function (){var i__26059 = (0);
while(true){
if((i__26059 < size__17288__auto__)){
var student = cljs.core._nth.call(null,c__17287__auto__,i__26059);
cljs.core.chunk_append.call(null,b__26060,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),student], null),(function (){var iter__17289__auto__ = ((function (i__26059,student,c__17287__auto__,size__17288__auto__,b__26060,s__26058__$2,temp__4425__auto__,course,assignments,students){
return (function kurssisuoritukset$views$course_results_page$result_page_$_iter__26057_$_iter__26069(s__26070){
return (new cljs.core.LazySeq(null,((function (i__26059,student,c__17287__auto__,size__17288__auto__,b__26060,s__26058__$2,temp__4425__auto__,course,assignments,students){
return (function (){
var s__26070__$1 = s__26070;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__26070__$1);
if(temp__4425__auto____$1){
var s__26070__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26070__$2)){
var c__17287__auto____$1 = cljs.core.chunk_first.call(null,s__26070__$2);
var size__17288__auto____$1 = cljs.core.count.call(null,c__17287__auto____$1);
var b__26072 = cljs.core.chunk_buffer.call(null,size__17288__auto____$1);
if((function (){var i__26071 = (0);
while(true){
if((i__26071 < size__17288__auto____$1)){
var assignment = cljs.core._nth.call(null,c__17287__auto____$1,i__26071);
cljs.core.chunk_append.call(null,b__26072,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),[cljs.core.str(kurssisuoritukset.data.get_student_points.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment),student)),cljs.core.str(" / "),cljs.core.str(new cljs.core.Keyword(null,"credits","credits",785860820).cljs$core$IFn$_invoke$arity$1(assignment))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)], null)));

var G__26078 = (i__26071 + (1));
i__26071 = G__26078;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26072),kurssisuoritukset$views$course_results_page$result_page_$_iter__26057_$_iter__26069.call(null,cljs.core.chunk_rest.call(null,s__26070__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26072),null);
}
} else {
var assignment = cljs.core.first.call(null,s__26070__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),[cljs.core.str(kurssisuoritukset.data.get_student_points.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment),student)),cljs.core.str(" / "),cljs.core.str(new cljs.core.Keyword(null,"credits","credits",785860820).cljs$core$IFn$_invoke$arity$1(assignment))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)], null)),kurssisuoritukset$views$course_results_page$result_page_$_iter__26057_$_iter__26069.call(null,cljs.core.rest.call(null,s__26070__$2)));
}
} else {
return null;
}
break;
}
});})(i__26059,student,c__17287__auto__,size__17288__auto__,b__26060,s__26058__$2,temp__4425__auto__,course,assignments,students))
,null,null));
});})(i__26059,student,c__17287__auto__,size__17288__auto__,b__26060,s__26058__$2,temp__4425__auto__,course,assignments,students))
;
return iter__17289__auto__.call(null,cljs.core.vals.call(null,assignments));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),student], null)));

var G__26079 = (i__26059 + (1));
i__26059 = G__26079;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26060),kurssisuoritukset$views$course_results_page$result_page_$_iter__26057.call(null,cljs.core.chunk_rest.call(null,s__26058__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26060),null);
}
} else {
var student = cljs.core.first.call(null,s__26058__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),student], null),(function (){var iter__17289__auto__ = ((function (student,s__26058__$2,temp__4425__auto__,course,assignments,students){
return (function kurssisuoritukset$views$course_results_page$result_page_$_iter__26057_$_iter__26073(s__26074){
return (new cljs.core.LazySeq(null,((function (student,s__26058__$2,temp__4425__auto__,course,assignments,students){
return (function (){
var s__26074__$1 = s__26074;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__26074__$1);
if(temp__4425__auto____$1){
var s__26074__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26074__$2)){
var c__17287__auto__ = cljs.core.chunk_first.call(null,s__26074__$2);
var size__17288__auto__ = cljs.core.count.call(null,c__17287__auto__);
var b__26076 = cljs.core.chunk_buffer.call(null,size__17288__auto__);
if((function (){var i__26075 = (0);
while(true){
if((i__26075 < size__17288__auto__)){
var assignment = cljs.core._nth.call(null,c__17287__auto__,i__26075);
cljs.core.chunk_append.call(null,b__26076,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),[cljs.core.str(kurssisuoritukset.data.get_student_points.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment),student)),cljs.core.str(" / "),cljs.core.str(new cljs.core.Keyword(null,"credits","credits",785860820).cljs$core$IFn$_invoke$arity$1(assignment))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)], null)));

var G__26080 = (i__26075 + (1));
i__26075 = G__26080;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26076),kurssisuoritukset$views$course_results_page$result_page_$_iter__26057_$_iter__26073.call(null,cljs.core.chunk_rest.call(null,s__26074__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26076),null);
}
} else {
var assignment = cljs.core.first.call(null,s__26074__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),[cljs.core.str(kurssisuoritukset.data.get_student_points.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment),student)),cljs.core.str(" / "),cljs.core.str(new cljs.core.Keyword(null,"credits","credits",785860820).cljs$core$IFn$_invoke$arity$1(assignment))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)], null)),kurssisuoritukset$views$course_results_page$result_page_$_iter__26057_$_iter__26073.call(null,cljs.core.rest.call(null,s__26074__$2)));
}
} else {
return null;
}
break;
}
});})(student,s__26058__$2,temp__4425__auto__,course,assignments,students))
,null,null));
});})(student,s__26058__$2,temp__4425__auto__,course,assignments,students))
;
return iter__17289__auto__.call(null,cljs.core.vals.call(null,assignments));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),student], null)),kurssisuoritukset$views$course_results_page$result_page_$_iter__26057.call(null,cljs.core.rest.call(null,s__26058__$2)));
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

//# sourceMappingURL=course_results_page.js.map?rel=1441469876582