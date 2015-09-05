// Compiled by ClojureScript 1.7.107 {}
goog.provide('kurssisuoritukset.data');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.session');
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
kurssisuoritukset.data.current_page = (function kurssisuoritukset$data$current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.session.get.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180))], null)], null);
});
kurssisuoritukset.data.current_course = (function kurssisuoritukset$data$current_course(){
return reagent.session.get.call(null,new cljs.core.Keyword(null,"current-course","current-course",610293347));
});

//# sourceMappingURL=data.js.map?rel=1441460651344