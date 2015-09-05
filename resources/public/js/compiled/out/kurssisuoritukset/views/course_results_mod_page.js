// Compiled by ClojureScript 1.7.107 {}
goog.provide('kurssisuoritukset.views.course_results_mod_page');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('kurssisuoritukset.data');
kurssisuoritukset.views.course_results_mod_page.result_add_input = (function kurssisuoritukset$views$course_results_mod_page$result_add_input(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-inline","div.form-inline",-557536095),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"student-id",new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"student-id",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__26166_SHARP_){
return cljs.core.reset_BANG_.call(null,value,p1__26166_SHARP_.target.value);
})], null)], null)], null)], null);
});
kurssisuoritukset.views.course_results_mod_page.point_add_input = (function kurssisuoritukset$views$course_results_mod_page$point_add_input(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-inline","div.form-inline",-557536095),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"points",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__26167_SHARP_){
return cljs.core.reset_BANG_.call(null,value,p1__26167_SHARP_.target.value);
})], null)], null)], null)], null);
});
kurssisuoritukset.views.course_results_mod_page.result_mod_page = (function kurssisuoritukset$views$course_results_mod_page$result_mod_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),((!((kurssisuoritukset.data.current_course == null)))?(function (){var course = kurssisuoritukset.data.get_course.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)));
var assignments = new cljs.core.Keyword(null,"assignments","assignments",-1114514911).cljs$core$IFn$_invoke$arity$1(course);
var students = kurssisuoritukset.data.get_students.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)));
var student_id_atom = new cljs.core.Keyword(null,"student-id","student-id",-1009111442).cljs$core$IFn$_invoke$arity$1(kurssisuoritukset.data.add_result_atom);
var assignments_points_atom = new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(kurssisuoritukset.data.add_result_atom);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(course)),cljs.core.str(" result adding page")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Student"], null),(function (){var iter__17289__auto__ = ((function (course,assignments,students,student_id_atom,assignments_points_atom){
return (function kurssisuoritukset$views$course_results_mod_page$result_mod_page_$_iter__26200(s__26201){
return (new cljs.core.LazySeq(null,((function (course,assignments,students,student_id_atom,assignments_points_atom){
return (function (){
var s__26201__$1 = s__26201;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__26201__$1);
if(temp__4425__auto__){
var s__26201__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26201__$2)){
var c__17287__auto__ = cljs.core.chunk_first.call(null,s__26201__$2);
var size__17288__auto__ = cljs.core.count.call(null,c__17287__auto__);
var b__26203 = cljs.core.chunk_buffer.call(null,size__17288__auto__);
if((function (){var i__26202 = (0);
while(true){
if((i__26202 < size__17288__auto__)){
var assignment = cljs.core._nth.call(null,c__17287__auto__,i__26202);
cljs.core.chunk_append.call(null,b__26203,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(assignment)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)], null)));

var G__26232 = (i__26202 + (1));
i__26202 = G__26232;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26203),kurssisuoritukset$views$course_results_mod_page$result_mod_page_$_iter__26200.call(null,cljs.core.chunk_rest.call(null,s__26201__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26203),null);
}
} else {
var assignment = cljs.core.first.call(null,s__26201__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(assignment)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)], null)),kurssisuoritukset$views$course_results_mod_page$result_mod_page_$_iter__26200.call(null,cljs.core.rest.call(null,s__26201__$2)));
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
return iter__17289__auto__.call(null,cljs.core.vals.call(null,assignments));
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__17289__auto__ = ((function (course,assignments,students,student_id_atom,assignments_points_atom){
return (function kurssisuoritukset$views$course_results_mod_page$result_mod_page_$_iter__26204(s__26205){
return (new cljs.core.LazySeq(null,((function (course,assignments,students,student_id_atom,assignments_points_atom){
return (function (){
var s__26205__$1 = s__26205;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__26205__$1);
if(temp__4425__auto__){
var s__26205__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26205__$2)){
var c__17287__auto__ = cljs.core.chunk_first.call(null,s__26205__$2);
var size__17288__auto__ = cljs.core.count.call(null,c__17287__auto__);
var b__26207 = cljs.core.chunk_buffer.call(null,size__17288__auto__);
if((function (){var i__26206 = (0);
while(true){
if((i__26206 < size__17288__auto__)){
var student = cljs.core._nth.call(null,c__17287__auto__,i__26206);
cljs.core.chunk_append.call(null,b__26207,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),student], null),(function (){var iter__17289__auto__ = ((function (i__26206,student,c__17287__auto__,size__17288__auto__,b__26207,s__26205__$2,temp__4425__auto__,course,assignments,students,student_id_atom,assignments_points_atom){
return (function kurssisuoritukset$views$course_results_mod_page$result_mod_page_$_iter__26204_$_iter__26216(s__26217){
return (new cljs.core.LazySeq(null,((function (i__26206,student,c__17287__auto__,size__17288__auto__,b__26207,s__26205__$2,temp__4425__auto__,course,assignments,students,student_id_atom,assignments_points_atom){
return (function (){
var s__26217__$1 = s__26217;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__26217__$1);
if(temp__4425__auto____$1){
var s__26217__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26217__$2)){
var c__17287__auto____$1 = cljs.core.chunk_first.call(null,s__26217__$2);
var size__17288__auto____$1 = cljs.core.count.call(null,c__17287__auto____$1);
var b__26219 = cljs.core.chunk_buffer.call(null,size__17288__auto____$1);
if((function (){var i__26218 = (0);
while(true){
if((i__26218 < size__17288__auto____$1)){
var assignment = cljs.core._nth.call(null,c__17287__auto____$1,i__26218);
cljs.core.chunk_append.call(null,b__26219,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),[cljs.core.str(kurssisuoritukset.data.get_student_points.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment),student)),cljs.core.str(" / "),cljs.core.str(new cljs.core.Keyword(null,"credits","credits",785860820).cljs$core$IFn$_invoke$arity$1(assignment))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)], null)));

var G__26233 = (i__26218 + (1));
i__26218 = G__26233;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26219),kurssisuoritukset$views$course_results_mod_page$result_mod_page_$_iter__26204_$_iter__26216.call(null,cljs.core.chunk_rest.call(null,s__26217__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26219),null);
}
} else {
var assignment = cljs.core.first.call(null,s__26217__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),[cljs.core.str(kurssisuoritukset.data.get_student_points.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment),student)),cljs.core.str(" / "),cljs.core.str(new cljs.core.Keyword(null,"credits","credits",785860820).cljs$core$IFn$_invoke$arity$1(assignment))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)], null)),kurssisuoritukset$views$course_results_mod_page$result_mod_page_$_iter__26204_$_iter__26216.call(null,cljs.core.rest.call(null,s__26217__$2)));
}
} else {
return null;
}
break;
}
});})(i__26206,student,c__17287__auto__,size__17288__auto__,b__26207,s__26205__$2,temp__4425__auto__,course,assignments,students,student_id_atom,assignments_points_atom))
,null,null));
});})(i__26206,student,c__17287__auto__,size__17288__auto__,b__26207,s__26205__$2,temp__4425__auto__,course,assignments,students,student_id_atom,assignments_points_atom))
;
return iter__17289__auto__.call(null,cljs.core.vals.call(null,assignments));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__26206,student,c__17287__auto__,size__17288__auto__,b__26207,s__26205__$2,temp__4425__auto__,course,assignments,students,student_id_atom,assignments_points_atom){
return (function (){
return cljs.core.List.EMPTY;
});})(i__26206,student,c__17287__auto__,size__17288__auto__,b__26207,s__26205__$2,temp__4425__auto__,course,assignments,students,student_id_atom,assignments_points_atom))
,new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-danger"], null),"Delete result"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),student], null)));

var G__26234 = (i__26206 + (1));
i__26206 = G__26234;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26207),kurssisuoritukset$views$course_results_mod_page$result_mod_page_$_iter__26204.call(null,cljs.core.chunk_rest.call(null,s__26205__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26207),null);
}
} else {
var student = cljs.core.first.call(null,s__26205__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),student], null),(function (){var iter__17289__auto__ = ((function (student,s__26205__$2,temp__4425__auto__,course,assignments,students,student_id_atom,assignments_points_atom){
return (function kurssisuoritukset$views$course_results_mod_page$result_mod_page_$_iter__26204_$_iter__26220(s__26221){
return (new cljs.core.LazySeq(null,((function (student,s__26205__$2,temp__4425__auto__,course,assignments,students,student_id_atom,assignments_points_atom){
return (function (){
var s__26221__$1 = s__26221;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__26221__$1);
if(temp__4425__auto____$1){
var s__26221__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26221__$2)){
var c__17287__auto__ = cljs.core.chunk_first.call(null,s__26221__$2);
var size__17288__auto__ = cljs.core.count.call(null,c__17287__auto__);
var b__26223 = cljs.core.chunk_buffer.call(null,size__17288__auto__);
if((function (){var i__26222 = (0);
while(true){
if((i__26222 < size__17288__auto__)){
var assignment = cljs.core._nth.call(null,c__17287__auto__,i__26222);
cljs.core.chunk_append.call(null,b__26223,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),[cljs.core.str(kurssisuoritukset.data.get_student_points.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment),student)),cljs.core.str(" / "),cljs.core.str(new cljs.core.Keyword(null,"credits","credits",785860820).cljs$core$IFn$_invoke$arity$1(assignment))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)], null)));

var G__26235 = (i__26222 + (1));
i__26222 = G__26235;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26223),kurssisuoritukset$views$course_results_mod_page$result_mod_page_$_iter__26204_$_iter__26220.call(null,cljs.core.chunk_rest.call(null,s__26221__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26223),null);
}
} else {
var assignment = cljs.core.first.call(null,s__26221__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),[cljs.core.str(kurssisuoritukset.data.get_student_points.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment),student)),cljs.core.str(" / "),cljs.core.str(new cljs.core.Keyword(null,"credits","credits",785860820).cljs$core$IFn$_invoke$arity$1(assignment))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)], null)),kurssisuoritukset$views$course_results_mod_page$result_mod_page_$_iter__26204_$_iter__26220.call(null,cljs.core.rest.call(null,s__26221__$2)));
}
} else {
return null;
}
break;
}
});})(student,s__26205__$2,temp__4425__auto__,course,assignments,students,student_id_atom,assignments_points_atom))
,null,null));
});})(student,s__26205__$2,temp__4425__auto__,course,assignments,students,student_id_atom,assignments_points_atom))
;
return iter__17289__auto__.call(null,cljs.core.vals.call(null,assignments));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (student,s__26205__$2,temp__4425__auto__,course,assignments,students,student_id_atom,assignments_points_atom){
return (function (){
return cljs.core.List.EMPTY;
});})(student,s__26205__$2,temp__4425__auto__,course,assignments,students,student_id_atom,assignments_points_atom))
,new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-danger"], null),"Delete result"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),student], null)),kurssisuoritukset$views$course_results_mod_page$result_mod_page_$_iter__26204.call(null,cljs.core.rest.call(null,s__26205__$2)));
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
return iter__17289__auto__.call(null,students);
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kurssisuoritukset.views.course_results_mod_page.result_add_input,student_id_atom], null)], null),(function (){var iter__17289__auto__ = ((function (course,assignments,students,student_id_atom,assignments_points_atom){
return (function kurssisuoritukset$views$course_results_mod_page$result_mod_page_$_iter__26224(s__26225){
return (new cljs.core.LazySeq(null,((function (course,assignments,students,student_id_atom,assignments_points_atom){
return (function (){
var s__26225__$1 = s__26225;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__26225__$1);
if(temp__4425__auto__){
var s__26225__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26225__$2)){
var c__17287__auto__ = cljs.core.chunk_first.call(null,s__26225__$2);
var size__17288__auto__ = cljs.core.count.call(null,c__17287__auto__);
var b__26227 = cljs.core.chunk_buffer.call(null,size__17288__auto__);
if((function (){var i__26226 = (0);
while(true){
if((i__26226 < size__17288__auto__)){
var assignment = cljs.core._nth.call(null,c__17287__auto__,i__26226);
var input_point = cljs.core.swap_BANG_.call(null,assignments_points_atom,cljs.core.assoc,(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment) | (0)),reagent.core.atom.call(null,[].join('')));
cljs.core.chunk_append.call(null,b__26227,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kurssisuoritukset.views.course_results_mod_page.point_add_input,cljs.core.get.call(null,cljs.core.deref.call(null,assignments_points_atom),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)], null)));

var G__26236 = (i__26226 + (1));
i__26226 = G__26236;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26227),kurssisuoritukset$views$course_results_mod_page$result_mod_page_$_iter__26224.call(null,cljs.core.chunk_rest.call(null,s__26225__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26227),null);
}
} else {
var assignment = cljs.core.first.call(null,s__26225__$2);
var input_point = cljs.core.swap_BANG_.call(null,assignments_points_atom,cljs.core.assoc,(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment) | (0)),reagent.core.atom.call(null,[].join('')));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kurssisuoritukset.views.course_results_mod_page.point_add_input,cljs.core.get.call(null,cljs.core.deref.call(null,assignments_points_atom),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)], null)),kurssisuoritukset$views$course_results_mod_page$result_mod_page_$_iter__26224.call(null,cljs.core.rest.call(null,s__26225__$2)));
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
return iter__17289__auto__.call(null,cljs.core.vals.call(null,assignments));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (course,assignments,students,student_id_atom,assignments_points_atom){
return (function (){
cljs.core.doall.call(null,(function (){var iter__17289__auto__ = ((function (course,assignments,students,student_id_atom,assignments_points_atom){
return (function kurssisuoritukset$views$course_results_mod_page$result_mod_page_$_iter__26228(s__26229){
return (new cljs.core.LazySeq(null,((function (course,assignments,students,student_id_atom,assignments_points_atom){
return (function (){
var s__26229__$1 = s__26229;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__26229__$1);
if(temp__4425__auto__){
var s__26229__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26229__$2)){
var c__17287__auto__ = cljs.core.chunk_first.call(null,s__26229__$2);
var size__17288__auto__ = cljs.core.count.call(null,c__17287__auto__);
var b__26231 = cljs.core.chunk_buffer.call(null,size__17288__auto__);
if((function (){var i__26230 = (0);
while(true){
if((i__26230 < size__17288__auto__)){
var assignment = cljs.core._nth.call(null,c__17287__auto__,i__26230);
cljs.core.chunk_append.call(null,b__26231,kurssisuoritukset.data.add_result.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment),cljs.core.deref.call(null,student_id_atom),cljs.core.deref.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,assignments_points_atom),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)))));

var G__26237 = (i__26230 + (1));
i__26230 = G__26237;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26231),kurssisuoritukset$views$course_results_mod_page$result_mod_page_$_iter__26228.call(null,cljs.core.chunk_rest.call(null,s__26229__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26231),null);
}
} else {
var assignment = cljs.core.first.call(null,s__26229__$2);
return cljs.core.cons.call(null,kurssisuoritukset.data.add_result.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment),cljs.core.deref.call(null,student_id_atom),cljs.core.deref.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,assignments_points_atom),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)))),kurssisuoritukset$views$course_results_mod_page$result_mod_page_$_iter__26228.call(null,cljs.core.rest.call(null,s__26229__$2)));
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
return iter__17289__auto__.call(null,cljs.core.vals.call(null,assignments));
})());

cljs.core.reset_BANG_.call(null,student_id_atom,"");

return cljs.core.reset_BANG_.call(null,assignments_points_atom,cljs.core.sorted_map.call(null));
});})(course,assignments,students,student_id_atom,assignments_points_atom))
,new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-primary"], null),"Add result!"], null)], null)], null)], null)], null)], null);
})():null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("#/courses/"),cljs.core.str(kurssisuoritukset.data.current_course.call(null)),cljs.core.str("/results")].join('')], null),"Back to result listing"], null)], null)], null)], null);
});

//# sourceMappingURL=course_results_mod_page.js.map?rel=1441470720041