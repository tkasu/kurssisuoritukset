// Compiled by ClojureScript 1.7.107 {}
goog.provide('kurssisuoritukset.data');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('matchbox.core');
goog.require('cljs.core.async');
if(typeof kurssisuoritukset.data.coursesA !== 'undefined'){
} else {
kurssisuoritukset.data.coursesA = reagent.core.atom.call(null,cljs.core.sorted_map.call(null));
}
if(typeof kurssisuoritukset.data.courses_id_counter !== 'undefined'){
} else {
kurssisuoritukset.data.courses_id_counter = reagent.core.atom.call(null,(0));
}
if(typeof kurssisuoritukset.data.add_course_atom !== 'undefined'){
} else {
kurssisuoritukset.data.add_course_atom = reagent.core.atom.call(null,[].join(''));
}
if(typeof kurssisuoritukset.data.add_result_atom !== 'undefined'){
} else {
kurssisuoritukset.data.add_result_atom = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"student-id","student-id",-1009111442),reagent.core.atom.call(null,[].join('')),new cljs.core.Keyword(null,"points","points",-1486596883),reagent.core.atom.call(null,cljs.core.sorted_map.call(null))], null);
}
if(typeof kurssisuoritukset.data.add_assignment_atom !== 'undefined'){
} else {
kurssisuoritukset.data.add_assignment_atom = reagent.core.atom.call(null,[].join(''));
}
if(typeof kurssisuoritukset.data.add_assignment_crd_atom !== 'undefined'){
} else {
kurssisuoritukset.data.add_assignment_crd_atom = reagent.core.atom.call(null,[].join(''));
}
if(typeof kurssisuoritukset.data.assignments_id_counter !== 'undefined'){
} else {
kurssisuoritukset.data.assignments_id_counter = reagent.core.atom.call(null,(0));
}
kurssisuoritukset.data.get_course = (function kurssisuoritukset$data$get_course(id){
return cljs.core.get.call(null,cljs.core.deref.call(null,kurssisuoritukset.data.coursesA),id);
});
kurssisuoritukset.data.add_course = (function kurssisuoritukset$data$add_course(name){
var id = cljs.core.swap_BANG_.call(null,kurssisuoritukset.data.courses_id_counter,cljs.core.inc);
cljs.core.swap_BANG_.call(null,kurssisuoritukset.data.coursesA,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"assignments","assignments",-1114514911),cljs.core.sorted_map.call(null)], null));

return cljs.core.reset_BANG_.call(null,kurssisuoritukset.data.add_course_atom,"");
});
kurssisuoritukset.data.add_assignment = (function kurssisuoritukset$data$add_assignment(course_id,name,credits){
var course = kurssisuoritukset.data.get_course.call(null,course_id);
var assignments = new cljs.core.Keyword(null,"assignments","assignments",-1114514911).cljs$core$IFn$_invoke$arity$1(course);
var id = cljs.core.swap_BANG_.call(null,kurssisuoritukset.data.assignments_id_counter,cljs.core.inc);
cljs.core.swap_BANG_.call(null,kurssisuoritukset.data.coursesA,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [course_id,new cljs.core.Keyword(null,"assignments","assignments",-1114514911)], null),cljs.core.assoc.call(null,assignments,id,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"credits","credits",785860820),credits,new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.sorted_map.call(null)], null)));

cljs.core.reset_BANG_.call(null,kurssisuoritukset.data.add_assignment_atom,"");

return cljs.core.reset_BANG_.call(null,kurssisuoritukset.data.add_assignment_crd_atom,"");
});
kurssisuoritukset.data.add_result = (function kurssisuoritukset$data$add_result(course_id,assignment_id,student_id,points){
var results = cljs.core.get_in.call(null,kurssisuoritukset.data.get_course.call(null,course_id),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignments","assignments",-1114514911),assignment_id,new cljs.core.Keyword(null,"results","results",-1134170113)], null));
return cljs.core.swap_BANG_.call(null,kurssisuoritukset.data.coursesA,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [course_id,new cljs.core.Keyword(null,"assignments","assignments",-1114514911),assignment_id,new cljs.core.Keyword(null,"results","results",-1134170113)], null),cljs.core.assoc.call(null,results,student_id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"student-id","student-id",-1009111442),student_id,new cljs.core.Keyword(null,"points","points",-1486596883),points], null)));
});
kurssisuoritukset.data.delete_result = (function kurssisuoritukset$data$delete_result(course_id,assignment_id,student_id){
var results = cljs.core.get_in.call(null,kurssisuoritukset.data.get_course.call(null,course_id),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignments","assignments",-1114514911),assignment_id,new cljs.core.Keyword(null,"results","results",-1134170113)], null));
return cljs.core.swap_BANG_.call(null,kurssisuoritukset.data.coursesA,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [course_id,new cljs.core.Keyword(null,"assignments","assignments",-1114514911),assignment_id,new cljs.core.Keyword(null,"results","results",-1134170113)], null),cljs.core.dissoc.call(null,results,student_id));
});
/**
 * Delete students results on a given course. For some reason isn't working in Figwheel REPL
 */
kurssisuoritukset.data.delete_course_result = (function kurssisuoritukset$data$delete_course_result(course_id,student_id){
return cljs.core.reduce.call(null,(function (acc,next){
var results = new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(next);
return cljs.core.reduce.call(null,((function (results){
return (function (acc_r,next_r){
if(cljs.core._EQ_.call(null,cljs.core.key.call(null,next_r),student_id)){
return kurssisuoritukset.data.delete_result.call(null,course_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(next),student_id);
} else {
return null;
}
});})(results))
,cljs.core.PersistentVector.EMPTY,results);
}),cljs.core.PersistentVector.EMPTY,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,kurssisuoritukset.data.coursesA),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [course_id,new cljs.core.Keyword(null,"assignments","assignments",-1114514911)], null))));
});
kurssisuoritukset.data.get_students = (function kurssisuoritukset$data$get_students(course_id){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.distinct.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.reduce.call(null,(function (acc,next){
var students = cljs.core.reduce.call(null,(function (acc_s,next_s){
var student = new cljs.core.Keyword(null,"student-id","student-id",-1009111442).cljs$core$IFn$_invoke$arity$1(next_s);
return cljs.core.conj.call(null,acc_s,student);
}),cljs.core.PersistentVector.EMPTY,cljs.core.vals.call(null,new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(next)));
return cljs.core.conj.call(null,acc,students);
}),cljs.core.PersistentVector.EMPTY,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,kurssisuoritukset.data.coursesA),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [course_id,new cljs.core.Keyword(null,"assignments","assignments",-1114514911)], null)))))));
});
kurssisuoritukset.data.get_student_points = (function kurssisuoritukset$data$get_student_points(course_id,assignment_id,student_id){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,kurssisuoritukset.data.coursesA),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [course_id,new cljs.core.Keyword(null,"assignments","assignments",-1114514911),assignment_id,new cljs.core.Keyword(null,"results","results",-1134170113),student_id,new cljs.core.Keyword(null,"points","points",-1486596883)], null));
});
kurssisuoritukset.data.set_student_to_input_BANG_ = (function kurssisuoritukset$data$set_student_to_input_BANG_(course_id,student_id){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"student-id","student-id",-1009111442).cljs$core$IFn$_invoke$arity$1(kurssisuoritukset.data.add_result_atom),student_id);

return cljs.core.doall.call(null,(function (){var iter__17289__auto__ = (function kurssisuoritukset$data$set_student_to_input_BANG__$_iter__20126(s__20127){
return (new cljs.core.LazySeq(null,(function (){
var s__20127__$1 = s__20127;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__20127__$1);
if(temp__4425__auto__){
var s__20127__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20127__$2)){
var c__17287__auto__ = cljs.core.chunk_first.call(null,s__20127__$2);
var size__17288__auto__ = cljs.core.count.call(null,c__17287__auto__);
var b__20129 = cljs.core.chunk_buffer.call(null,size__17288__auto__);
if((function (){var i__20128 = (0);
while(true){
if((i__20128 < size__17288__auto__)){
var assignment = cljs.core._nth.call(null,c__17287__auto__,i__20128);
cljs.core.chunk_append.call(null,b__20129,cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(kurssisuoritukset.data.add_result_atom),cljs.core.assoc,(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment) | (0)),reagent.core.atom.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,kurssisuoritukset.data.coursesA),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [course_id,new cljs.core.Keyword(null,"assignments","assignments",-1114514911),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment),new cljs.core.Keyword(null,"results","results",-1134170113),student_id,new cljs.core.Keyword(null,"points","points",-1486596883)], null)))));

var G__20130 = (i__20128 + (1));
i__20128 = G__20130;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20129),kurssisuoritukset$data$set_student_to_input_BANG__$_iter__20126.call(null,cljs.core.chunk_rest.call(null,s__20127__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20129),null);
}
} else {
var assignment = cljs.core.first.call(null,s__20127__$2);
return cljs.core.cons.call(null,cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(kurssisuoritukset.data.add_result_atom),cljs.core.assoc,(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment) | (0)),reagent.core.atom.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,kurssisuoritukset.data.coursesA),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [course_id,new cljs.core.Keyword(null,"assignments","assignments",-1114514911),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(assignment),new cljs.core.Keyword(null,"results","results",-1134170113),student_id,new cljs.core.Keyword(null,"points","points",-1486596883)], null)))),kurssisuoritukset$data$set_student_to_input_BANG__$_iter__20126.call(null,cljs.core.rest.call(null,s__20127__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17289__auto__.call(null,cljs.core.vals.call(null,new cljs.core.Keyword(null,"assignments","assignments",-1114514911).cljs$core$IFn$_invoke$arity$1(kurssisuoritukset.data.get_course.call(null,course_id))));
})());
});
kurssisuoritukset.data.current_page = (function kurssisuoritukset$data$current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.session.get.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180))], null)], null);
});
kurssisuoritukset.data.current_course = (function kurssisuoritukset$data$current_course(){
return reagent.session.get.call(null,new cljs.core.Keyword(null,"current-course","current-course",610293347));
});
kurssisuoritukset.data.current_student = (function kurssisuoritukset$data$current_student(){
return reagent.session.get.call(null,new cljs.core.Keyword(null,"current-student","current-student",96160702));
});
kurssisuoritukset.data.set_current_student_BANG_ = (function kurssisuoritukset$data$set_current_student_BANG_(student_id){
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-student","current-student",96160702),student_id);
});

//# sourceMappingURL=data.js.map?rel=1441569848003