// Compiled by ClojureScript 1.7.107 {}
goog.provide('kurssisuoritukset.views.course_results_mod_page');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('kurssisuoritukset.data');
kurssisuoritukset.views.course_results_mod_page.result_add_input = (function kurssisuoritukset$views$course_results_mod_page$result_add_input(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-inline","div.form-inline",-557536095),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"student-id",new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),((cljs.core.not_EQ_.call(null,null,kurssisuoritukset.data.current_student.call(null)))?"disabled":null),new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"student-id",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__24137_SHARP_){
return cljs.core.reset_BANG_.call(null,value,p1__24137_SHARP_.target.value);
})], null)], null)], null)], null);
});
kurssisuoritukset.views.course_results_mod_page.point_add_input = (function kurssisuoritukset$views$course_results_mod_page$point_add_input(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-inline","div.form-inline",-557536095),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"points",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__24138_SHARP_){
return cljs.core.reset_BANG_.call(null,value,p1__24138_SHARP_.target.value);
})], null)], null)], null)], null);
});
kurssisuoritukset.views.course_results_mod_page.result_mod_page = (function kurssisuoritukset$views$course_results_mod_page$result_mod_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),((!((kurssisuoritukset.data.current_course == null)))?(function (){var course = kurssisuoritukset.data.get_course.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)));
var assignments = new cljs.core.Keyword(null,"assignments","assignments",-1114514911).cljs$core$IFn$_invoke$arity$1(course);
var students = kurssisuoritukset.data.get_students.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)));
var student_id_atom = new cljs.core.Keyword(null,"student-id","student-id",-1009111442).cljs$core$IFn$_invoke$arity$1(kurssisuoritukset.data.add_result_atom);
var assignments_points_atom = new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(kurssisuoritukset.data.add_result_atom);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(course)),cljs.core.str(" result adding page")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Student"], null),(function (){var iter__17289__auto__ = ((function (course,assignments,students,student_id_atom,assignments_points_atom){
return (function kurssisuoritukset$views$course_results_mod_page$result_mod_page_$_iter__24171(s__24172){
return (new cljs.core.LazySeq(null,((function (course,assignments,students,student_id_atom,assignments_points_atom){
return (function (){
var s__24172__$1 = s__24172;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24172__$1);
if(temp__4425__auto__){
var s__24172__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24172__$2)){
var c__17287__auto__ = cljs.core.chunk_first.call(null,s__24172__$2);
var size__17288__auto__ = cljs.core.count.call(null,c__17287__auto__);
var b__24174 = cljs.core.chunk_buffer.call(null,size__17288__auto__);
if((function (){var i__24173 = (0);
while(true){
if((i__24173 < size__17288__auto__)){
var assignment = cljs.core._nth.call(null,c__17287__auto__,i__24173);
cljs.core.chunk_append.call(null,b__24174,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(assignment)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)], null)));

var G__24203 = (i__24173 + (1));
i__24173 = G__24203;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24174),kurssisuoritukset$views$course_results_mod_page$result_mod_page_$_iter__24171.call(null,cljs.core.chunk_rest.call(null,s__24172__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24174),null);
}
} else {
var assignment = cljs.core.first.call(null,s__24172__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(assignment)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)], null)),kurssisuoritukset$views$course_results_mod_page$result_mod_page_$_iter__24171.call(null,cljs.core.rest.call(null,s__24172__$2)));
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
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__17289__auto__ = ((function (course,assignments,students,student_id_atom,assignments_points_atom){
return (function kurssisuoritukset$views$course_results_mod_page$result_mod_page_$_iter__24175(s__24176){
return (new cljs.core.LazySeq(null,((function (course,assignments,students,student_id_atom,assignments_points_atom){
return (function (){
var s__24176__$1 = s__24176;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24176__$1);
if(temp__4425__auto__){
var s__24176__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24176__$2)){
var c__17287__auto__ = cljs.core.chunk_first.call(null,s__24176__$2);
var size__17288__auto__ = cljs.core.count.call(null,c__17287__auto__);
var b__24178 = cljs.core.chunk_buffer.call(null,size__17288__auto__);
if((function (){var i__24177 = (0);
while(true){
if((i__24177 < size__17288__auto__)){
var student = cljs.core._nth.call(null,c__17287__auto__,i__24177);
cljs.core.chunk_append.call(null,b__24178,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,student,kurssisuoritukset.data.current_student.call(null)))?"info":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),student], null),(function (){var iter__17289__auto__ = ((function (i__24177,student,c__17287__auto__,size__17288__auto__,b__24178,s__24176__$2,temp__4425__auto__,course,assignments,students,student_id_atom,assignments_points_atom){
return (function kurssisuoritukset$views$course_results_mod_page$result_mod_page_$_iter__24175_$_iter__24187(s__24188){
return (new cljs.core.LazySeq(null,((function (i__24177,student,c__17287__auto__,size__17288__auto__,b__24178,s__24176__$2,temp__4425__auto__,course,assignments,students,student_id_atom,assignments_points_atom){
return (function (){
var s__24188__$1 = s__24188;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__24188__$1);
if(temp__4425__auto____$1){
var s__24188__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24188__$2)){
var c__17287__auto____$1 = cljs.core.chunk_first.call(null,s__24188__$2);
var size__17288__auto____$1 = cljs.core.count.call(null,c__17287__auto____$1);
var b__24190 = cljs.core.chunk_buffer.call(null,size__17288__auto____$1);
if((function (){var i__24189 = (0);
while(true){
if((i__24189 < size__17288__auto____$1)){
var assignment = cljs.core._nth.call(null,c__17287__auto____$1,i__24189);
cljs.core.chunk_append.call(null,b__24190,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),[cljs.core.str(kurssisuoritukset.data.get_student_points.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment),student)),cljs.core.str(" / "),cljs.core.str(new cljs.core.Keyword(null,"credits","credits",785860820).cljs$core$IFn$_invoke$arity$1(assignment))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)], null)));

var G__24204 = (i__24189 + (1));
i__24189 = G__24204;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24190),kurssisuoritukset$views$course_results_mod_page$result_mod_page_$_iter__24175_$_iter__24187.call(null,cljs.core.chunk_rest.call(null,s__24188__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24190),null);
}
} else {
var assignment = cljs.core.first.call(null,s__24188__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),[cljs.core.str(kurssisuoritukset.data.get_student_points.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment),student)),cljs.core.str(" / "),cljs.core.str(new cljs.core.Keyword(null,"credits","credits",785860820).cljs$core$IFn$_invoke$arity$1(assignment))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)], null)),kurssisuoritukset$views$course_results_mod_page$result_mod_page_$_iter__24175_$_iter__24187.call(null,cljs.core.rest.call(null,s__24188__$2)));
}
} else {
return null;
}
break;
}
});})(i__24177,student,c__17287__auto__,size__17288__auto__,b__24178,s__24176__$2,temp__4425__auto__,course,assignments,students,student_id_atom,assignments_points_atom))
,null,null));
});})(i__24177,student,c__17287__auto__,size__17288__auto__,b__24178,s__24176__$2,temp__4425__auto__,course,assignments,students,student_id_atom,assignments_points_atom))
;
return iter__17289__auto__.call(null,cljs.core.vals.call(null,assignments));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((cljs.core._EQ_.call(null,null,kurssisuoritukset.data.current_student.call(null)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__24177,student,c__17287__auto__,size__17288__auto__,b__24178,s__24176__$2,temp__4425__auto__,course,assignments,students,student_id_atom,assignments_points_atom){
return (function (){
kurssisuoritukset.data.set_current_student_BANG_.call(null,student);

return kurssisuoritukset.data.set_student_to_input_BANG_.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)),student);
});})(i__24177,student,c__17287__auto__,size__17288__auto__,b__24178,s__24176__$2,temp__4425__auto__,course,assignments,students,student_id_atom,assignments_points_atom))
,new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-default"], null),"Modify"], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((cljs.core._EQ_.call(null,null,kurssisuoritukset.data.current_student.call(null)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__24177,student,c__17287__auto__,size__17288__auto__,b__24178,s__24176__$2,temp__4425__auto__,course,assignments,students,student_id_atom,assignments_points_atom){
return (function (){
return cljs.core.doall.call(null,kurssisuoritukset.data.delete_course_result.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)),student));
});})(i__24177,student,c__17287__auto__,size__17288__auto__,b__24178,s__24176__$2,temp__4425__auto__,course,assignments,students,student_id_atom,assignments_points_atom))
,new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-danger"], null),"Delete"], null):null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),student], null)));

var G__24205 = (i__24177 + (1));
i__24177 = G__24205;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24178),kurssisuoritukset$views$course_results_mod_page$result_mod_page_$_iter__24175.call(null,cljs.core.chunk_rest.call(null,s__24176__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24178),null);
}
} else {
var student = cljs.core.first.call(null,s__24176__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,student,kurssisuoritukset.data.current_student.call(null)))?"info":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),student], null),(function (){var iter__17289__auto__ = ((function (student,s__24176__$2,temp__4425__auto__,course,assignments,students,student_id_atom,assignments_points_atom){
return (function kurssisuoritukset$views$course_results_mod_page$result_mod_page_$_iter__24175_$_iter__24191(s__24192){
return (new cljs.core.LazySeq(null,((function (student,s__24176__$2,temp__4425__auto__,course,assignments,students,student_id_atom,assignments_points_atom){
return (function (){
var s__24192__$1 = s__24192;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__24192__$1);
if(temp__4425__auto____$1){
var s__24192__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24192__$2)){
var c__17287__auto__ = cljs.core.chunk_first.call(null,s__24192__$2);
var size__17288__auto__ = cljs.core.count.call(null,c__17287__auto__);
var b__24194 = cljs.core.chunk_buffer.call(null,size__17288__auto__);
if((function (){var i__24193 = (0);
while(true){
if((i__24193 < size__17288__auto__)){
var assignment = cljs.core._nth.call(null,c__17287__auto__,i__24193);
cljs.core.chunk_append.call(null,b__24194,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),[cljs.core.str(kurssisuoritukset.data.get_student_points.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment),student)),cljs.core.str(" / "),cljs.core.str(new cljs.core.Keyword(null,"credits","credits",785860820).cljs$core$IFn$_invoke$arity$1(assignment))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)], null)));

var G__24206 = (i__24193 + (1));
i__24193 = G__24206;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24194),kurssisuoritukset$views$course_results_mod_page$result_mod_page_$_iter__24175_$_iter__24191.call(null,cljs.core.chunk_rest.call(null,s__24192__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24194),null);
}
} else {
var assignment = cljs.core.first.call(null,s__24192__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),[cljs.core.str(kurssisuoritukset.data.get_student_points.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment),student)),cljs.core.str(" / "),cljs.core.str(new cljs.core.Keyword(null,"credits","credits",785860820).cljs$core$IFn$_invoke$arity$1(assignment))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)], null)),kurssisuoritukset$views$course_results_mod_page$result_mod_page_$_iter__24175_$_iter__24191.call(null,cljs.core.rest.call(null,s__24192__$2)));
}
} else {
return null;
}
break;
}
});})(student,s__24176__$2,temp__4425__auto__,course,assignments,students,student_id_atom,assignments_points_atom))
,null,null));
});})(student,s__24176__$2,temp__4425__auto__,course,assignments,students,student_id_atom,assignments_points_atom))
;
return iter__17289__auto__.call(null,cljs.core.vals.call(null,assignments));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((cljs.core._EQ_.call(null,null,kurssisuoritukset.data.current_student.call(null)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (student,s__24176__$2,temp__4425__auto__,course,assignments,students,student_id_atom,assignments_points_atom){
return (function (){
kurssisuoritukset.data.set_current_student_BANG_.call(null,student);

return kurssisuoritukset.data.set_student_to_input_BANG_.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)),student);
});})(student,s__24176__$2,temp__4425__auto__,course,assignments,students,student_id_atom,assignments_points_atom))
,new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-default"], null),"Modify"], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((cljs.core._EQ_.call(null,null,kurssisuoritukset.data.current_student.call(null)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (student,s__24176__$2,temp__4425__auto__,course,assignments,students,student_id_atom,assignments_points_atom){
return (function (){
return cljs.core.doall.call(null,kurssisuoritukset.data.delete_course_result.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)),student));
});})(student,s__24176__$2,temp__4425__auto__,course,assignments,students,student_id_atom,assignments_points_atom))
,new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-danger"], null),"Delete"], null):null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),student], null)),kurssisuoritukset$views$course_results_mod_page$result_mod_page_$_iter__24175.call(null,cljs.core.rest.call(null,s__24176__$2)));
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
})(),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.not_EQ_.call(null,null,kurssisuoritukset.data.current_student.call(null)))?"info":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kurssisuoritukset.views.course_results_mod_page.result_add_input,student_id_atom], null)], null),(function (){var iter__17289__auto__ = ((function (course,assignments,students,student_id_atom,assignments_points_atom){
return (function kurssisuoritukset$views$course_results_mod_page$result_mod_page_$_iter__24195(s__24196){
return (new cljs.core.LazySeq(null,((function (course,assignments,students,student_id_atom,assignments_points_atom){
return (function (){
var s__24196__$1 = s__24196;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24196__$1);
if(temp__4425__auto__){
var s__24196__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24196__$2)){
var c__17287__auto__ = cljs.core.chunk_first.call(null,s__24196__$2);
var size__17288__auto__ = cljs.core.count.call(null,c__17287__auto__);
var b__24198 = cljs.core.chunk_buffer.call(null,size__17288__auto__);
if((function (){var i__24197 = (0);
while(true){
if((i__24197 < size__17288__auto__)){
var assignment = cljs.core._nth.call(null,c__17287__auto__,i__24197);
cljs.core.chunk_append.call(null,b__24198,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(function (){var p_input = cljs.core.get.call(null,cljs.core.deref.call(null,assignments_points_atom),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment));
if(cljs.core._EQ_.call(null,p_input,null)){
cljs.core.swap_BANG_.call(null,assignments_points_atom,cljs.core.assoc,(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment) | (0)),reagent.core.atom.call(null,[].join('')));
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kurssisuoritukset.views.course_results_mod_page.point_add_input,cljs.core.get.call(null,cljs.core.deref.call(null,assignments_points_atom),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment))], null);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)], null)));

var G__24207 = (i__24197 + (1));
i__24197 = G__24207;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24198),kurssisuoritukset$views$course_results_mod_page$result_mod_page_$_iter__24195.call(null,cljs.core.chunk_rest.call(null,s__24196__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24198),null);
}
} else {
var assignment = cljs.core.first.call(null,s__24196__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(function (){var p_input = cljs.core.get.call(null,cljs.core.deref.call(null,assignments_points_atom),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment));
if(cljs.core._EQ_.call(null,p_input,null)){
cljs.core.swap_BANG_.call(null,assignments_points_atom,cljs.core.assoc,(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment) | (0)),reagent.core.atom.call(null,[].join('')));
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kurssisuoritukset.views.course_results_mod_page.point_add_input,cljs.core.get.call(null,cljs.core.deref.call(null,assignments_points_atom),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment))], null);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)], null)),kurssisuoritukset$views$course_results_mod_page$result_mod_page_$_iter__24195.call(null,cljs.core.rest.call(null,s__24196__$2)));
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
return (function kurssisuoritukset$views$course_results_mod_page$result_mod_page_$_iter__24199(s__24200){
return (new cljs.core.LazySeq(null,((function (course,assignments,students,student_id_atom,assignments_points_atom){
return (function (){
var s__24200__$1 = s__24200;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24200__$1);
if(temp__4425__auto__){
var s__24200__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24200__$2)){
var c__17287__auto__ = cljs.core.chunk_first.call(null,s__24200__$2);
var size__17288__auto__ = cljs.core.count.call(null,c__17287__auto__);
var b__24202 = cljs.core.chunk_buffer.call(null,size__17288__auto__);
if((function (){var i__24201 = (0);
while(true){
if((i__24201 < size__17288__auto__)){
var assignment = cljs.core._nth.call(null,c__17287__auto__,i__24201);
cljs.core.chunk_append.call(null,b__24202,kurssisuoritukset.data.add_result.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment),cljs.core.deref.call(null,student_id_atom),cljs.core.deref.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,assignments_points_atom),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)))));

var G__24208 = (i__24201 + (1));
i__24201 = G__24208;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24202),kurssisuoritukset$views$course_results_mod_page$result_mod_page_$_iter__24199.call(null,cljs.core.chunk_rest.call(null,s__24200__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24202),null);
}
} else {
var assignment = cljs.core.first.call(null,s__24200__$2);
return cljs.core.cons.call(null,kurssisuoritukset.data.add_result.call(null,(kurssisuoritukset.data.current_course.call(null) | (0)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment),cljs.core.deref.call(null,student_id_atom),cljs.core.deref.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,assignments_points_atom),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment)))),kurssisuoritukset$views$course_results_mod_page$result_mod_page_$_iter__24199.call(null,cljs.core.rest.call(null,s__24200__$2)));
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

cljs.core.reset_BANG_.call(null,assignments_points_atom,cljs.core.sorted_map.call(null));

return kurssisuoritukset.data.set_current_student_BANG_.call(null,null);
});})(course,assignments,students,student_id_atom,assignments_points_atom))
,new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-primary"], null),((cljs.core._EQ_.call(null,null,kurssisuoritukset.data.current_student.call(null)))?[cljs.core.str("Add!")].join(''):[cljs.core.str("Modify!")].join(''))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((cljs.core.not_EQ_.call(null,null,kurssisuoritukset.data.current_student.call(null)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (course,assignments,students,student_id_atom,assignments_points_atom){
return (function (){
kurssisuoritukset.data.set_current_student_BANG_.call(null,null);

cljs.core.reset_BANG_.call(null,student_id_atom,"");

return cljs.core.reset_BANG_.call(null,assignments_points_atom,cljs.core.sorted_map.call(null));
});})(course,assignments,students,student_id_atom,assignments_points_atom))
,new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-default"], null),"Cancel"], null):null)], null)], null)], null)], null)], null);
})():null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("#/courses/"),cljs.core.str(kurssisuoritukset.data.current_course.call(null)),cljs.core.str("/results")].join('')], null),"Back to result listing"], null)], null)], null)], null);
});

//# sourceMappingURL=course_results_mod_page.js.map?rel=1441561818561