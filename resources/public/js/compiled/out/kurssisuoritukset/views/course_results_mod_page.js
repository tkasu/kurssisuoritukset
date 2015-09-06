// Compiled by ClojureScript 1.7.107 {}
goog.provide('kurssisuoritukset.views.course_results_mod_page');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('kurssisuoritukset.data');
kurssisuoritukset.views.course_results_mod_page.result_add_input = (function kurssisuoritukset$views$course_results_mod_page$result_add_input(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-inline","div.form-inline",-557536095),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"student-id",new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"student-id",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__18835_SHARP_){
return cljs.core.reset_BANG_.call(null,value,p1__18835_SHARP_.target.value);
})], null)], null)], null)], null);
});
kurssisuoritukset.views.course_results_mod_page.point_add_input = (function kurssisuoritukset$views$course_results_mod_page$point_add_input(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-inline","div.form-inline",-557536095),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"points",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__18836_SHARP_){
return cljs.core.reset_BANG_.call(null,value,p1__18836_SHARP_.target.value);
})], null)], null)], null)], null);
});
kurssisuoritukset.views.course_results_mod_page.result_mod_page = (function kurssisuoritukset$views$course_results_mod_page$result_mod_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),((!((kurssisuoritukset.data.current_course == null)))?(function (){var course = kurssisuoritukset.data.get_course.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)));
var assignments = new cljs.core.Keyword(null,"assignments","assignments",-1114514911).cljs$core$IFn$_invoke$arity$1(course);
var students = kurssisuoritukset.data.get_students.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)));
var student_id_atom = new cljs.core.Keyword(null,"student-id","student-id",-1009111442).cljs$core$IFn$_invoke$arity$1(kurssisuoritukset.data.add_result_atom);
var assignments_points_atom = new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(kurssisuoritukset.data.add_result_atom);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(course)),cljs.core.str(" result adding page")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Student"], null),(function (){var iter__15383__auto__ = ((function (course,assignments,students,student_id_atom,assignments_points_atom){
return (function kurssisuoritukset$views$course_results_mod_page$result_mod_page_$_iter__18869(s__18870){
return (new cljs.core.LazySeq(null,((function (course,assignments,students,student_id_atom,assignments_points_atom){
return (function (){
var s__18870__$1 = s__18870;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__18870__$1);
if(temp__4425__auto__){
var s__18870__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18870__$2)){
var c__15381__auto__ = cljs.core.chunk_first.call(null,s__18870__$2);
var size__15382__auto__ = cljs.core.count.call(null,c__15381__auto__);
var b__18872 = cljs.core.chunk_buffer.call(null,size__15382__auto__);
if((function (){var i__18871 = (0);
while(true){
if((i__18871 < size__15382__auto__)){
var assignment = cljs.core._nth.call(null,c__15381__auto__,i__18871);
cljs.core.chunk_append.call(null,b__18872,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(assignment)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)], null)));

var G__18901 = (i__18871 + (1));
i__18871 = G__18901;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18872),kurssisuoritukset$views$course_results_mod_page$result_mod_page_$_iter__18869.call(null,cljs.core.chunk_rest.call(null,s__18870__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18872),null);
}
} else {
var assignment = cljs.core.first.call(null,s__18870__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(assignment)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)], null)),kurssisuoritukset$views$course_results_mod_page$result_mod_page_$_iter__18869.call(null,cljs.core.rest.call(null,s__18870__$2)));
}
} else {
return null;
}
break;
}
});})(course,assignments,students,student_id_atom,assignments_points_atom))
,null,null));
});})(course,assignments,students,student_id_atom,assignments_points_atom))
;
return iter__15383__auto__.call(null,cljs.core.vals.call(null,assignments));
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__15383__auto__ = ((function (course,assignments,students,student_id_atom,assignments_points_atom){
return (function kurssisuoritukset$views$course_results_mod_page$result_mod_page_$_iter__18873(s__18874){
return (new cljs.core.LazySeq(null,((function (course,assignments,students,student_id_atom,assignments_points_atom){
return (function (){
var s__18874__$1 = s__18874;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__18874__$1);
if(temp__4425__auto__){
var s__18874__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18874__$2)){
var c__15381__auto__ = cljs.core.chunk_first.call(null,s__18874__$2);
var size__15382__auto__ = cljs.core.count.call(null,c__15381__auto__);
var b__18876 = cljs.core.chunk_buffer.call(null,size__15382__auto__);
if((function (){var i__18875 = (0);
while(true){
if((i__18875 < size__15382__auto__)){
var student = cljs.core._nth.call(null,c__15381__auto__,i__18875);
cljs.core.chunk_append.call(null,b__18876,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),student], null),(function (){var iter__15383__auto__ = ((function (i__18875,student,c__15381__auto__,size__15382__auto__,b__18876,s__18874__$2,temp__4425__auto__,course,assignments,students,student_id_atom,assignments_points_atom){
return (function kurssisuoritukset$views$course_results_mod_page$result_mod_page_$_iter__18873_$_iter__18885(s__18886){
return (new cljs.core.LazySeq(null,((function (i__18875,student,c__15381__auto__,size__15382__auto__,b__18876,s__18874__$2,temp__4425__auto__,course,assignments,students,student_id_atom,assignments_points_atom){
return (function (){
var s__18886__$1 = s__18886;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__18886__$1);
if(temp__4425__auto____$1){
var s__18886__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18886__$2)){
var c__15381__auto____$1 = cljs.core.chunk_first.call(null,s__18886__$2);
var size__15382__auto____$1 = cljs.core.count.call(null,c__15381__auto____$1);
var b__18888 = cljs.core.chunk_buffer.call(null,size__15382__auto____$1);
if((function (){var i__18887 = (0);
while(true){
if((i__18887 < size__15382__auto____$1)){
var assignment = cljs.core._nth.call(null,c__15381__auto____$1,i__18887);
cljs.core.chunk_append.call(null,b__18888,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),[cljs.core.str(kurssisuoritukset.data.get_student_points.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment),student)),cljs.core.str(" / "),cljs.core.str(new cljs.core.Keyword(null,"credits","credits",785860820).cljs$core$IFn$_invoke$arity$1(assignment))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)], null)));

var G__18902 = (i__18887 + (1));
i__18887 = G__18902;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18888),kurssisuoritukset$views$course_results_mod_page$result_mod_page_$_iter__18873_$_iter__18885.call(null,cljs.core.chunk_rest.call(null,s__18886__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18888),null);
}
} else {
var assignment = cljs.core.first.call(null,s__18886__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),[cljs.core.str(kurssisuoritukset.data.get_student_points.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment),student)),cljs.core.str(" / "),cljs.core.str(new cljs.core.Keyword(null,"credits","credits",785860820).cljs$core$IFn$_invoke$arity$1(assignment))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)], null)),kurssisuoritukset$views$course_results_mod_page$result_mod_page_$_iter__18873_$_iter__18885.call(null,cljs.core.rest.call(null,s__18886__$2)));
}
} else {
return null;
}
break;
}
});})(i__18875,student,c__15381__auto__,size__15382__auto__,b__18876,s__18874__$2,temp__4425__auto__,course,assignments,students,student_id_atom,assignments_points_atom))
,null,null));
});})(i__18875,student,c__15381__auto__,size__15382__auto__,b__18876,s__18874__$2,temp__4425__auto__,course,assignments,students,student_id_atom,assignments_points_atom))
;
return iter__15383__auto__.call(null,cljs.core.vals.call(null,assignments));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__18875,student,c__15381__auto__,size__15382__auto__,b__18876,s__18874__$2,temp__4425__auto__,course,assignments,students,student_id_atom,assignments_points_atom){
return (function (){
return cljs.core.doall.call(null,kurssisuoritukset.data.delete_course_result.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)),student));
});})(i__18875,student,c__15381__auto__,size__15382__auto__,b__18876,s__18874__$2,temp__4425__auto__,course,assignments,students,student_id_atom,assignments_points_atom))
,new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-danger"], null),"Delete result"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),student], null)));

var G__18903 = (i__18875 + (1));
i__18875 = G__18903;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18876),kurssisuoritukset$views$course_results_mod_page$result_mod_page_$_iter__18873.call(null,cljs.core.chunk_rest.call(null,s__18874__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18876),null);
}
} else {
var student = cljs.core.first.call(null,s__18874__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),student], null),(function (){var iter__15383__auto__ = ((function (student,s__18874__$2,temp__4425__auto__,course,assignments,students,student_id_atom,assignments_points_atom){
return (function kurssisuoritukset$views$course_results_mod_page$result_mod_page_$_iter__18873_$_iter__18889(s__18890){
return (new cljs.core.LazySeq(null,((function (student,s__18874__$2,temp__4425__auto__,course,assignments,students,student_id_atom,assignments_points_atom){
return (function (){
var s__18890__$1 = s__18890;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__18890__$1);
if(temp__4425__auto____$1){
var s__18890__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18890__$2)){
var c__15381__auto__ = cljs.core.chunk_first.call(null,s__18890__$2);
var size__15382__auto__ = cljs.core.count.call(null,c__15381__auto__);
var b__18892 = cljs.core.chunk_buffer.call(null,size__15382__auto__);
if((function (){var i__18891 = (0);
while(true){
if((i__18891 < size__15382__auto__)){
var assignment = cljs.core._nth.call(null,c__15381__auto__,i__18891);
cljs.core.chunk_append.call(null,b__18892,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),[cljs.core.str(kurssisuoritukset.data.get_student_points.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment),student)),cljs.core.str(" / "),cljs.core.str(new cljs.core.Keyword(null,"credits","credits",785860820).cljs$core$IFn$_invoke$arity$1(assignment))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)], null)));

var G__18904 = (i__18891 + (1));
i__18891 = G__18904;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18892),kurssisuoritukset$views$course_results_mod_page$result_mod_page_$_iter__18873_$_iter__18889.call(null,cljs.core.chunk_rest.call(null,s__18890__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18892),null);
}
} else {
var assignment = cljs.core.first.call(null,s__18890__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),[cljs.core.str(kurssisuoritukset.data.get_student_points.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment),student)),cljs.core.str(" / "),cljs.core.str(new cljs.core.Keyword(null,"credits","credits",785860820).cljs$core$IFn$_invoke$arity$1(assignment))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)], null)),kurssisuoritukset$views$course_results_mod_page$result_mod_page_$_iter__18873_$_iter__18889.call(null,cljs.core.rest.call(null,s__18890__$2)));
}
} else {
return null;
}
break;
}
});})(student,s__18874__$2,temp__4425__auto__,course,assignments,students,student_id_atom,assignments_points_atom))
,null,null));
});})(student,s__18874__$2,temp__4425__auto__,course,assignments,students,student_id_atom,assignments_points_atom))
;
return iter__15383__auto__.call(null,cljs.core.vals.call(null,assignments));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (student,s__18874__$2,temp__4425__auto__,course,assignments,students,student_id_atom,assignments_points_atom){
return (function (){
return cljs.core.doall.call(null,kurssisuoritukset.data.delete_course_result.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)),student));
});})(student,s__18874__$2,temp__4425__auto__,course,assignments,students,student_id_atom,assignments_points_atom))
,new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-danger"], null),"Delete result"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),student], null)),kurssisuoritukset$views$course_results_mod_page$result_mod_page_$_iter__18873.call(null,cljs.core.rest.call(null,s__18874__$2)));
}
} else {
return null;
}
break;
}
});})(course,assignments,students,student_id_atom,assignments_points_atom))
,null,null));
});})(course,assignments,students,student_id_atom,assignments_points_atom))
;
return iter__15383__auto__.call(null,students);
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kurssisuoritukset.views.course_results_mod_page.result_add_input,student_id_atom], null)], null),(function (){var iter__15383__auto__ = ((function (course,assignments,students,student_id_atom,assignments_points_atom){
return (function kurssisuoritukset$views$course_results_mod_page$result_mod_page_$_iter__18893(s__18894){
return (new cljs.core.LazySeq(null,((function (course,assignments,students,student_id_atom,assignments_points_atom){
return (function (){
var s__18894__$1 = s__18894;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__18894__$1);
if(temp__4425__auto__){
var s__18894__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18894__$2)){
var c__15381__auto__ = cljs.core.chunk_first.call(null,s__18894__$2);
var size__15382__auto__ = cljs.core.count.call(null,c__15381__auto__);
var b__18896 = cljs.core.chunk_buffer.call(null,size__15382__auto__);
if((function (){var i__18895 = (0);
while(true){
if((i__18895 < size__15382__auto__)){
var assignment = cljs.core._nth.call(null,c__15381__auto__,i__18895);
var input_point = cljs.core.swap_BANG_.call(null,assignments_points_atom,cljs.core.assoc,(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment) | (0)),reagent.core.atom.call(null,[].join('')));
cljs.core.chunk_append.call(null,b__18896,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kurssisuoritukset.views.course_results_mod_page.point_add_input,cljs.core.get.call(null,cljs.core.deref.call(null,assignments_points_atom),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)], null)));

var G__18905 = (i__18895 + (1));
i__18895 = G__18905;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18896),kurssisuoritukset$views$course_results_mod_page$result_mod_page_$_iter__18893.call(null,cljs.core.chunk_rest.call(null,s__18894__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18896),null);
}
} else {
var assignment = cljs.core.first.call(null,s__18894__$2);
var input_point = cljs.core.swap_BANG_.call(null,assignments_points_atom,cljs.core.assoc,(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment) | (0)),reagent.core.atom.call(null,[].join('')));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kurssisuoritukset.views.course_results_mod_page.point_add_input,cljs.core.get.call(null,cljs.core.deref.call(null,assignments_points_atom),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)], null)),kurssisuoritukset$views$course_results_mod_page$result_mod_page_$_iter__18893.call(null,cljs.core.rest.call(null,s__18894__$2)));
}
} else {
return null;
}
break;
}
});})(course,assignments,students,student_id_atom,assignments_points_atom))
,null,null));
});})(course,assignments,students,student_id_atom,assignments_points_atom))
;
return iter__15383__auto__.call(null,cljs.core.vals.call(null,assignments));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (course,assignments,students,student_id_atom,assignments_points_atom){
return (function (){
cljs.core.doall.call(null,(function (){var iter__15383__auto__ = ((function (course,assignments,students,student_id_atom,assignments_points_atom){
return (function kurssisuoritukset$views$course_results_mod_page$result_mod_page_$_iter__18897(s__18898){
return (new cljs.core.LazySeq(null,((function (course,assignments,students,student_id_atom,assignments_points_atom){
return (function (){
var s__18898__$1 = s__18898;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__18898__$1);
if(temp__4425__auto__){
var s__18898__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18898__$2)){
var c__15381__auto__ = cljs.core.chunk_first.call(null,s__18898__$2);
var size__15382__auto__ = cljs.core.count.call(null,c__15381__auto__);
var b__18900 = cljs.core.chunk_buffer.call(null,size__15382__auto__);
if((function (){var i__18899 = (0);
while(true){
if((i__18899 < size__15382__auto__)){
var assignment = cljs.core._nth.call(null,c__15381__auto__,i__18899);
cljs.core.chunk_append.call(null,b__18900,kurssisuoritukset.data.add_result.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment),cljs.core.deref.call(null,student_id_atom),cljs.core.deref.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,assignments_points_atom),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)))));

var G__18906 = (i__18899 + (1));
i__18899 = G__18906;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18900),kurssisuoritukset$views$course_results_mod_page$result_mod_page_$_iter__18897.call(null,cljs.core.chunk_rest.call(null,s__18898__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18900),null);
}
} else {
var assignment = cljs.core.first.call(null,s__18898__$2);
return cljs.core.cons.call(null,kurssisuoritukset.data.add_result.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment),cljs.core.deref.call(null,student_id_atom),cljs.core.deref.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,assignments_points_atom),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)))),kurssisuoritukset$views$course_results_mod_page$result_mod_page_$_iter__18897.call(null,cljs.core.rest.call(null,s__18898__$2)));
}
} else {
return null;
}
break;
}
});})(course,assignments,students,student_id_atom,assignments_points_atom))
,null,null));
});})(course,assignments,students,student_id_atom,assignments_points_atom))
;
return iter__15383__auto__.call(null,cljs.core.vals.call(null,assignments));
})());

cljs.core.reset_BANG_.call(null,student_id_atom,"");

return cljs.core.reset_BANG_.call(null,assignments_points_atom,cljs.core.sorted_map.call(null));
});})(course,assignments,students,student_id_atom,assignments_points_atom))
,new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-primary"], null),"Add result!"], null)], null)], null)], null)], null)], null);
})():null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("#/courses/"),cljs.core.str(kurssisuoritukset.data.current_course.call(null)),cljs.core.str("/results")].join('')], null),"Back to result listing"], null)], null)], null)], null);
});

//# sourceMappingURL=course_results_mod_page.js.map?rel=1441527693634