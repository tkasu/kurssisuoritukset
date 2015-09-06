// Compiled by ClojureScript 1.7.107 {}
goog.provide('kurssisuoritukset.views.course_results_page');
goog.require('cljs.core');
goog.require('kurssisuoritukset.data');
kurssisuoritukset.views.course_results_page.result_page = (function kurssisuoritukset$views$course_results_page$result_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),((!((kurssisuoritukset.data.current_course == null)))?(function (){var course = kurssisuoritukset.data.get_course.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)));
var assignments = new cljs.core.Keyword(null,"assignments","assignments",-1114514911).cljs$core$IFn$_invoke$arity$1(course);
var students = kurssisuoritukset.data.get_students.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(course)),cljs.core.str(" result page")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Student"], null),(function (){var iter__15383__auto__ = ((function (course,assignments,students){
return (function kurssisuoritukset$views$course_results_page$result_page_$_iter__16914(s__16915){
return (new cljs.core.LazySeq(null,((function (course,assignments,students){
return (function (){
var s__16915__$1 = s__16915;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__16915__$1);
if(temp__4425__auto__){
var s__16915__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16915__$2)){
var c__15381__auto__ = cljs.core.chunk_first.call(null,s__16915__$2);
var size__15382__auto__ = cljs.core.count.call(null,c__15381__auto__);
var b__16917 = cljs.core.chunk_buffer.call(null,size__15382__auto__);
if((function (){var i__16916 = (0);
while(true){
if((i__16916 < size__15382__auto__)){
var assignment = cljs.core._nth.call(null,c__15381__auto__,i__16916);
cljs.core.chunk_append.call(null,b__16917,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(assignment)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)], null)));

var G__16939 = (i__16916 + (1));
i__16916 = G__16939;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16917),kurssisuoritukset$views$course_results_page$result_page_$_iter__16914.call(null,cljs.core.chunk_rest.call(null,s__16915__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16917),null);
}
} else {
var assignment = cljs.core.first.call(null,s__16915__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(assignment)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)], null)),kurssisuoritukset$views$course_results_page$result_page_$_iter__16914.call(null,cljs.core.rest.call(null,s__16915__$2)));
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
return iter__15383__auto__.call(null,cljs.core.vals.call(null,assignments));
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__15383__auto__ = ((function (course,assignments,students){
return (function kurssisuoritukset$views$course_results_page$result_page_$_iter__16918(s__16919){
return (new cljs.core.LazySeq(null,((function (course,assignments,students){
return (function (){
var s__16919__$1 = s__16919;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__16919__$1);
if(temp__4425__auto__){
var s__16919__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16919__$2)){
var c__15381__auto__ = cljs.core.chunk_first.call(null,s__16919__$2);
var size__15382__auto__ = cljs.core.count.call(null,c__15381__auto__);
var b__16921 = cljs.core.chunk_buffer.call(null,size__15382__auto__);
if((function (){var i__16920 = (0);
while(true){
if((i__16920 < size__15382__auto__)){
var student = cljs.core._nth.call(null,c__15381__auto__,i__16920);
cljs.core.chunk_append.call(null,b__16921,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),student], null),(function (){var iter__15383__auto__ = ((function (i__16920,student,c__15381__auto__,size__15382__auto__,b__16921,s__16919__$2,temp__4425__auto__,course,assignments,students){
return (function kurssisuoritukset$views$course_results_page$result_page_$_iter__16918_$_iter__16930(s__16931){
return (new cljs.core.LazySeq(null,((function (i__16920,student,c__15381__auto__,size__15382__auto__,b__16921,s__16919__$2,temp__4425__auto__,course,assignments,students){
return (function (){
var s__16931__$1 = s__16931;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__16931__$1);
if(temp__4425__auto____$1){
var s__16931__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16931__$2)){
var c__15381__auto____$1 = cljs.core.chunk_first.call(null,s__16931__$2);
var size__15382__auto____$1 = cljs.core.count.call(null,c__15381__auto____$1);
var b__16933 = cljs.core.chunk_buffer.call(null,size__15382__auto____$1);
if((function (){var i__16932 = (0);
while(true){
if((i__16932 < size__15382__auto____$1)){
var assignment = cljs.core._nth.call(null,c__15381__auto____$1,i__16932);
cljs.core.chunk_append.call(null,b__16933,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),[cljs.core.str(kurssisuoritukset.data.get_student_points.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment),student)),cljs.core.str(" / "),cljs.core.str(new cljs.core.Keyword(null,"credits","credits",785860820).cljs$core$IFn$_invoke$arity$1(assignment))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)], null)));

var G__16940 = (i__16932 + (1));
i__16932 = G__16940;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16933),kurssisuoritukset$views$course_results_page$result_page_$_iter__16918_$_iter__16930.call(null,cljs.core.chunk_rest.call(null,s__16931__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16933),null);
}
} else {
var assignment = cljs.core.first.call(null,s__16931__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),[cljs.core.str(kurssisuoritukset.data.get_student_points.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment),student)),cljs.core.str(" / "),cljs.core.str(new cljs.core.Keyword(null,"credits","credits",785860820).cljs$core$IFn$_invoke$arity$1(assignment))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)], null)),kurssisuoritukset$views$course_results_page$result_page_$_iter__16918_$_iter__16930.call(null,cljs.core.rest.call(null,s__16931__$2)));
}
} else {
return null;
}
break;
}
});})(i__16920,student,c__15381__auto__,size__15382__auto__,b__16921,s__16919__$2,temp__4425__auto__,course,assignments,students))
,null,null));
});})(i__16920,student,c__15381__auto__,size__15382__auto__,b__16921,s__16919__$2,temp__4425__auto__,course,assignments,students))
;
return iter__15383__auto__.call(null,cljs.core.vals.call(null,assignments));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),student], null)));

var G__16941 = (i__16920 + (1));
i__16920 = G__16941;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16921),kurssisuoritukset$views$course_results_page$result_page_$_iter__16918.call(null,cljs.core.chunk_rest.call(null,s__16919__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16921),null);
}
} else {
var student = cljs.core.first.call(null,s__16919__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),student], null),(function (){var iter__15383__auto__ = ((function (student,s__16919__$2,temp__4425__auto__,course,assignments,students){
return (function kurssisuoritukset$views$course_results_page$result_page_$_iter__16918_$_iter__16934(s__16935){
return (new cljs.core.LazySeq(null,((function (student,s__16919__$2,temp__4425__auto__,course,assignments,students){
return (function (){
var s__16935__$1 = s__16935;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__16935__$1);
if(temp__4425__auto____$1){
var s__16935__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16935__$2)){
var c__15381__auto__ = cljs.core.chunk_first.call(null,s__16935__$2);
var size__15382__auto__ = cljs.core.count.call(null,c__15381__auto__);
var b__16937 = cljs.core.chunk_buffer.call(null,size__15382__auto__);
if((function (){var i__16936 = (0);
while(true){
if((i__16936 < size__15382__auto__)){
var assignment = cljs.core._nth.call(null,c__15381__auto__,i__16936);
cljs.core.chunk_append.call(null,b__16937,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),[cljs.core.str(kurssisuoritukset.data.get_student_points.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment),student)),cljs.core.str(" / "),cljs.core.str(new cljs.core.Keyword(null,"credits","credits",785860820).cljs$core$IFn$_invoke$arity$1(assignment))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)], null)));

var G__16942 = (i__16936 + (1));
i__16936 = G__16942;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16937),kurssisuoritukset$views$course_results_page$result_page_$_iter__16918_$_iter__16934.call(null,cljs.core.chunk_rest.call(null,s__16935__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16937),null);
}
} else {
var assignment = cljs.core.first.call(null,s__16935__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),[cljs.core.str(kurssisuoritukset.data.get_student_points.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment),student)),cljs.core.str(" / "),cljs.core.str(new cljs.core.Keyword(null,"credits","credits",785860820).cljs$core$IFn$_invoke$arity$1(assignment))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)], null)),kurssisuoritukset$views$course_results_page$result_page_$_iter__16918_$_iter__16934.call(null,cljs.core.rest.call(null,s__16935__$2)));
}
} else {
return null;
}
break;
}
});})(student,s__16919__$2,temp__4425__auto__,course,assignments,students))
,null,null));
});})(student,s__16919__$2,temp__4425__auto__,course,assignments,students))
;
return iter__15383__auto__.call(null,cljs.core.vals.call(null,assignments));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),student], null)),kurssisuoritukset$views$course_results_page$result_page_$_iter__16918.call(null,cljs.core.rest.call(null,s__16919__$2)));
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
return iter__15383__auto__.call(null,students);
})()], null)], null)], null);
})():null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("#/courses/"),cljs.core.str(kurssisuoritukset.data.current_course.call(null)),cljs.core.str("/results/mod")].join('')], null),"Add course results"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("#/courses/"),cljs.core.str(kurssisuoritukset.data.current_course.call(null))].join('')], null),"Back to course page"], null)], null)], null)], null);
});

//# sourceMappingURL=course_results_page.js.map?rel=1441471542161